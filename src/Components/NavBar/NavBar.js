import React, { useContext, useState } from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import {AppBar, Container, Toolbar, Typography, Box, IconButton, Menu, MenuItem, Button} from '@mui/material';


// import Sidebar from '../Sidebar/Sidebar';


 const NavBar = () => {
  // eslint-disable-next-line no-unused-vars
  const {cartItems, setCartItems} = useContext(CartContext)

  // aumenta el length de cartWidget de acuerdo a la cantidad de productos
  const quantity = cartItems.reduce((acc,prod) => {
    return prod.cantidad + acc
  },0);

  const dataNavbar = [
    {
      id: 1, 
      name: "Home",
      link: "/xicelulares-Mazziotti",
    
    },
    { 
      id: 2,
      name: "Celulares",
      link: "/category/celulares",
    },
     {
      id: 3,
      name: "Accesorios",
      link: "/category/accesorios",
    }
    ];

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

  return (
        <AppBar position="fixed" sx={{backgroundColor:"black"}}>
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
                  {dataNavbar.map((data) => (
                    <MenuItem key={data.id} onClick={handleCloseNavMenu}>
                     <Link to ={data.link} className="menuNavbarMobile"><Typography textAlign="center">{data.name}</Typography></Link>
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
                  fontSize: 10,
                }}
              >
                Xi Celulares
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent:'center' }}>
                {dataNavbar.map((data) => (
                  <Link to={data.link} className="menuNavbarDesktop">
                    <Button
                    key={data.id}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                    {data.name}
                    </Button>
                  </Link>
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

export default NavBar