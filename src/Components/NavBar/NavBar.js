import React, { useContext } from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';


 const NavBar = () => {
  const {cartItems, setCartItems} = useContext(CartContext)
  // console.log("NavBar Cart", cartItems)

  // aumenta el length de cartWidget de acuerdo a la cantidad de productos
  const quantity = cartItems.reduce((acc,prod) => {
    return prod.cantidad + acc
  },0);

  return (
    <nav className='NavbarContainer'>
        <div className="icon">
          <Link to="/"><InstallMobileIcon fontSize="large"/></Link>
          <p className='NavbarIcontext'>Xi Celulares</p>
        </div>        
        <ul className='NavbarList'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/category/celulares"><li>Celulares</li></Link>
            <Link to="/category/accesorios"><li>Accesorios</li></Link>
        </ul>
        <div className='NavbarCart'>
          {/* {cartItems.length ? <Link to="/cart"><CartWidget/>{quantity}</Link> : <Link style = {{display:"none"}} to="/cart"><CartWidget/></Link> } */}
        <Link to="/cart"><CartWidget/><span>{cartItems ? quantity : 0 } </span></Link>
        </div>
    </nav>
  )
}

export default NavBar