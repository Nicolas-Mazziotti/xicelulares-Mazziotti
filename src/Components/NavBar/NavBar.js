import React, { useContext, useState } from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import Sidebar from '../Sidebar/Sidebar';


 const NavBar = () => {
  // eslint-disable-next-line no-unused-vars
  const {cartItems, setCartItems} = useContext(CartContext)
  const [sidebarOpen, setSidebarOpen] = useState (false)

  // aumenta el length de cartWidget de acuerdo a la cantidad de productos
  const quantity = cartItems.reduce((acc,prod) => {
    return prod.cantidad + acc
  },0);

  const menuSideBar = () => {
    setSidebarOpen(!sidebarOpen)
    console.log(sidebarOpen)
  }
  

  return (
    <nav className='NavbarContainer'>
        <div className="icon">
          <Link to="/xicelulares-Mazziotti"><InstallMobileIcon fontSize="large"/></Link>
          <button onClick ={menuSideBar} className='btnNavbar'>
            {sidebarOpen ? <CloseIcon/> : <MenuIcon/>  }
            </button>

          <p className='NavbarIcontext'>Xi Celulares</p>
        </div>        
        <ul className='NavbarList'>
            <Link to="/xicelulares-Mazziotti"><li>Home</li></Link>
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