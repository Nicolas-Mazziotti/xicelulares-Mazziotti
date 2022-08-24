import React, { useContext, useState } from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import {AppBar, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button, Avatar, Tooltip} from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import { ThemeProvider } from '@mui/private-theming';

// import Sidebar from '../Sidebar/Sidebar';


 const NavBar = () => {
  // eslint-disable-next-line no-unused-vars
  const {cartItems, setCartItems} = useContext(CartContext)
  // const [sidebarOpen, setSidebarOpen] = useState (false)

  // aumenta el length de cartWidget de acuerdo a la cantidad de productos
  const quantity = cartItems.reduce((acc,prod) => {
    return prod.cantidad + acc
  },0);

  //  const menuSideBar = () => {
  //   setSidebarOpen(!sidebarOpen)
  //   console.log(sidebarOpen)
  // }
  const pages = ['Home', 'Celulares', 'Accesorios'];
  
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    

  return (
        <AppBar position="static" sx={{backgroundColor:"black"}}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Link to="/xicelulares-Mazziotti"><InstallMobileIcon sx={{ color: "white"}}/></Link>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/xicelulares-Mazziotti"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Xi Celulares
              </Typography>
    
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Xi Celulares
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <div className='NavbarCart'>
      {/* {cartItems.length ? <Link to="/cart"><CartWidget/>{quantity}</Link> : <Link style = {{display:"none"}} to="/cart"><CartWidget/></Link> } */}
          <Link to="/cart"><CartWidget/><span>{cartItems ? quantity : 0 } </span></Link>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      );
    };
    // <nav className='NavbarContainer'>
    //     <div className="icon">
    //       <Link to="/xicelulares-Mazziotti"><InstallMobileIcon fontSize="large"/></Link>
    //       <button  className='btnNavbar'></button>
  
    //       {/* {sidebarOpen ? <Sidebar/> : null} */}
          
    //       <p className='NavbarIcontext'>Xi Celulares</p>
    //     </div>        
    //     <ul className='NavbarList'>
    //         <Link to="/xicelulares-Mazziotti"><li>Home</li></Link>
    //         <Link to="/category/celulares"><li>Celulares</li></Link>
    //         <Link to="/category/accesorios"><li>Accesorios</li></Link>
    //     </ul>
        
    //     <div className='NavbarCart'>
    //       {/* {cartItems.length ? <Link to="/cart"><CartWidget/>{quantity}</Link> : <Link style = {{display:"none"}} to="/cart"><CartWidget/></Link> } */}
    //     <Link to="/cart"><CartWidget/><span>{cartItems ? quantity : 0 } </span></Link>
    //     </div>
    // </nav>
//   )



export default NavBar