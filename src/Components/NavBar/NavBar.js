import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import { Link } from 'react-router-dom';



 const NavBar = () => {
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
        <CartWidget/>
        </div>
    </nav>
  )
}

export default NavBar