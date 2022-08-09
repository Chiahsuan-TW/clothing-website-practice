import Button from '../button/button.component'
import './cart-dropdown.styles.scss';

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
    <div className="cart-dropdown-container">
      <div className="cart-item-container">
        {cartItems.map(item => {
          return <CartItem key={item.id} cartItem={item}/>
        })}
      </div>
    <Button type="button" onClick={goToCheckoutHandler} label="go to checkout"/>
    </div>
  ) 
}

export default CartDropdown