import Button from '../button/button.component'
import {CartDropdownContainer, EmptyMessage, CartItemcontainer} from './cart-dropdown.styles.jsx';

import CartItem from '../cart-item/cart-item.component'
import { CartContext } from '../../contexts/cart-context';
import { useContext } from 'react';

import {useNavigate} from 'react-router-dom'

const CartDropdown = () => {
  const {cartItems, setOpen} = useContext(CartContext)

  const navigate = useNavigate()
  const goToCheckoutHandler = () => {
    setOpen(false)
    navigate('/checkout')
  }

  return (
    <CartDropdownContainer>
      <CartItemcontainer>
        {
          cartItems.length 
          ? 
          (
            cartItems.map(item => {
            return <CartItem key={item.id} cartItem={item}/>
          })) 
          : 
          <EmptyMessage>The cart is empty</EmptyMessage>
        }
      </CartItemcontainer>
    <Button type="button" onClick={goToCheckoutHandler} label="go to checkout"/>
    </CartDropdownContainer>
  ) 
}

export default CartDropdown