import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';



export const NavBar = () => {
  return (
    <nav className='NavbarContainer'>
        <div className="icon">
        <InstallMobileIcon
            fontSize="large"    
            />
        <p className='NavbarIcontext'>Xi Celulares</p>

        </div>        
        <ul className='NavbarList'>
            <a href='#'><li>Celulares</li></a>
            <a href='#'><li>Accesorios</li></a>
            <a href='#'><li>About Us</li></a>
        </ul>
        <div className='NavbarCart'>
        <CartWidget/>
        </div>
    </nav>
  )
}

export default NavBar