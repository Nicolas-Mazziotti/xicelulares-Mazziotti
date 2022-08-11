import React from 'react';
import { Link } from 'react-router-dom';

 const Sidebar = () => {
  return (
    <div className='sidebarContainer'>
        <ul className='sidebarList'>
            <Link to="/xicelulares-Mazziotti"><li>Home</li></Link>
            <Link to="/category/celulares"><li>Celulares</li></Link>
            <Link to="/category/accesorios"><li>Accesorios</li></Link>
        </ul>
    </div>
  )
}

export default Sidebar