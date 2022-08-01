import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./Footer.css"



 const Footer = () => {
  return (
    <>
    <div className='footerContainer'>
      <div className='redesTitulo'>
        Redes Sociales
      </div>
      <div className='redesIconos'>
      <a target="_blank" rel="noreferrer" href="https://instagram.com"><InstagramIcon/></a>
      <a target="_blank"rel="noreferrer" href="https://facebook.com"><FacebookIcon/></a>
      </div>
    </div>
    <div className='copyrightContainer'>
        <p>Copyright - Xi Celulares 2022 Inc.</p>
    </div>
    </>
  )
}
export default Footer
