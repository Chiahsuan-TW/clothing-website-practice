import {createContext, useState, useEffect} from 'react';


export const CartContext = createContext();

const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find(item => item.id === productToAdd.id)

  if(existingItem) {
    return cartItems.map(cartItem => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem )
}

  return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, productToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)  
}

const decreaseCartItemQty = (cartItems, productToDcrease) => {
  return cartItems.map(cartItem => {
    if(cartItem.quantity === 0 || cartItem.id !== productToDcrease.id) return cartItem;
    return {...cartItem, quantity: cartItem.quantity - 1}
  })
}


export const CartProvider = ({children}) => {
  const [isOpen, setOpen] = useState(false)

  const [cartItems, setCartItems] = useState([])
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems,productToRemove))
  }

  const decreaseItemFromCart = (productToDcrease) => {
    setCartItems(decreaseCartItemQty(cartItems, productToDcrease))
  }


  const [cartCount, setCartCount] = useState(0)
  useEffect(()=> {
    const currentCartCount = cartItems.reduce((totalQty, item)=> totalQty + item.quantity, 0)
    setCartCount(currentCartCount)
  }, [cartItems])

  const [total, setTotal] = useState(0)
  useEffect(()=> {
    const currentTotal = cartItems.reduce((total, item)=> total + item.quantity * item.price, 0)
    setTotal(currentTotal)
  }, [cartItems])


  const value = {isOpen, setOpen, addItemToCart, cartItems, removeItemFromCart, decreaseItemFromCart, cartCount, total}
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider> 
}
