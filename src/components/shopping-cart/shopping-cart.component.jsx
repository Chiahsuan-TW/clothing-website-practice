import {CartIcon, ShoppingCartContainer, ItemCount} from './shopping-cart.styles.jsx';
import {useContext} from 'react';
import { CartContext } from '../../contexts/cart-context';


const ShoppingCart = ({onClick}) => {
const {isOpen, setOpen, cartCount} = useContext(CartContext)

  const toggle = () => {
    setOpen(!isOpen)
}

  return (
    <ShoppingCartContainer  onClick={toggle}>
      <CartIcon />
      <ItemCount>{cartCount}</ItemCount>
    </ShoppingCartContainer>
  )
}

export default ShoppingCart;