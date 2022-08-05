import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"
import {ReactComponent as Crown} from '../../assets/crown.svg';
import './navigation.styles.scss';
import {UserContext} from '../../contexts/user-context'
import { signOutUser } from "../../utils/firebase/config";

const Navbar = () => {
  const {currentUser} = useContext(UserContext)

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
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navbar