import React, { useState } from "react";
import "./NavItems.css";
import NavMenu from "../NavMenu/NavMenu";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavItems = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menus = [
    { name: "Home", path: "./home", id: 1 },
    { name: "Order", path: "./order", id: 2 },
    { name: "Preview", path: "./Preview", id: 3 },
    { name: "contact", path: "./contact", id: 4 },
    { name: "About", path: "./About", id: 5 },
  ];

  return (
  
      <nav>
        <ul
          className={` md:static absolute duration-500 ease-in overflow-hidden ${
            openMenu ? " top-20 left-[-800px]" : " top-20 left-0"
          }`}
        >
          {menus.map((menu) => (
            <NavMenu key={menu.id} menu={menu}></NavMenu>
          ))}
        </ul>

        <div
          className="h-5 w-5 openMenu md:hidden bg-white text-black ml-6 rounded"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <Bars3Icon />  : <XMarkIcon />}
        </div>
      </nav>
    
  );
};

export default NavItems;
