import React from 'react';
import './NavMenu.css'

const NavMenu = ({menu}) => {
    
    return (
       
           <li className="mx-4 text-2xl">
            <a href={menu.path}>{menu.name}</a>
           </li>
      
    );
};

export default NavMenu;