import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext, } from "react"
import { ReactComponent as Crown} from '../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/user-context'
import { signOutUser } from "../../utils/firebase/config";

import ShoppingCart from "../../components/shopping-cart/shopping-cart.component";
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {CartContext} from '../../contexts/cart-context'

const Navbar = () => {
  const {currentUser} = useContext(UserContext)
  const{isOpen} = useContext(CartContext)

  
  return (
    <Fragment>
      <div className="navigation">
        <Link className='logo-container' to='/'>
          <div><Crown/></div>
        </Link>
        <div className="nav-links-container">
          <Link to='/shop' className="nav-link">Shop</Link>
          {currentUser ? 
          <span className="nav-link" onClick={signOutUser}>Sign Out</span> : 
          <Link to='/auth' className="nav-link">Sign In</Link>}
          <ShoppingCart  />
        </div>
        </div>
      {isOpen && <CartDropdown />}
      <Outlet/>
    </Fragment>
  )
}

export default Navbar