import { Outlet } from "react-router-dom"
import { Fragment, useContext, } from "react"
import { ReactComponent as Crown} from '../../assets/crown.svg';
import {NavigationContainer, NavLinksContainer, NavLink } from './navigation.styles.jsx';
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
      <NavigationContainer>
        <NavLink className='logo-container' to='/'>
          <div><Crown/></div>
        </NavLink>
        <NavLinksContainer>
          <NavLink to='/shop' >Shop</NavLink>
          {currentUser ? 
          <NavLink as="span" onClick={signOutUser}>Sign Out</NavLink> : 
          <NavLink to='/auth' >Sign In</NavLink>}
          <ShoppingCart  />
        </NavLinksContainer>
        </NavigationContainer>
      {isOpen && <CartDropdown />}
      <Outlet/>
    </Fragment>
  )
}

export default Navbar