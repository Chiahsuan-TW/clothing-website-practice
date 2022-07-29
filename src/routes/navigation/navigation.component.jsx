import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import {ReactComponent as Crown} from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navbar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className='logo-container' to='/'>
          <div><Crown/></div>
        </Link>
        <div className="nav-links-container">
          <Link to='/shop' className="nav-link">Shop</Link>
          <Link to='/sign-in' className="nav-link">Sign In</Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navbar