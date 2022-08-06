import { ReactComponent as CartIcon} from '../../assets/shopping-bag.svg';
import './shopping-cart.styles.scss';


const ShoppingCart = () => {
  return (
    <div className="shopping-cart-container">
      <CartIcon className="cart-icon"/>
      <span className="item-count">10</span>
    </div>
  )
}

export default ShoppingCart;