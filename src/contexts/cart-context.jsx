import {createContext, useState} from 'react';


export const CartContext = createContext();

const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find(item => item.id === productToAdd.id)

  if(existingItem) {
    return cartItems.map(cartItem => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem )
}

  return [...cartItems, {...productToAdd, quantity: 1}]
}


export const CartProvider = ({children}) => {
  const [isOpen, setOpen] = useState(false)

  const [cartItems, setCartItems] = useState([])
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const value = {isOpen, setOpen, addItemToCart, cartItems}
  
  return <CartContext.Provider value={value}>{children}</CartContext.Provider> 
}
