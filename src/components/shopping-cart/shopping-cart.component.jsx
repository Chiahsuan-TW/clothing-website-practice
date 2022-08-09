import { ReactComponent as CartIcon} from '../../assets/shopping-bag.svg';
import './shopping-cart.styles.scss';
import {useContext} from 'react';
import { CartContext } from '../../contexts/cart-context';


const ShoppingCart = ({onClick}) => {
const {isOpen, setOpen, cartCount} = useContext(CartContext)

  const toggle = () => {
    setOpen(!isOpen)
}

  return (
    <div className="shopping-cart-container" onClick={toggle}>
      <CartIcon className="cart-icon"/>
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default ShoppingCart;