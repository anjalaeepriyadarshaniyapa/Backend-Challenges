import React, { useState } from "react";
import * as icons from 'react-icons/ai';
import { Link } from "react-router-dom";
// import { navbardata } from "./navbardata";

import './navbar.css';
import { IconContext } from "react-icons";
// import App from "../App";

// import {AiFillDashboard,ImMan,MdGroupWork,FcOvertime} from 'react-icons'
import {AiFillDashboard} from 'react-icons/ai'
import {ImMan} from 'react-icons/im'
import {MdGroupWork} from 'react-icons/md'
import {FcOvertime} from 'react-icons/fc'

const navbardata =[
  {
    tab_name: 'Employes',
    redirect_path: '/Employes',
    icone :<ImMan/>,
    cName :'nav-text'
  },
  {
    tab_name: 'Attendence',
    redirect_path: '/Attendence',
    icone :<MdGroupWork/>,
    cName :'nav-text'
  },
  {
    tab_name: 'Shedule',
    redirect_path: '/Shedule',
    icone :<FcOvertime/>,
    cName :'nav-text'
  }
]


function Navigationbar(){
    const[sideBarDrawer, setSideBarDrawer]= useState(false);
     const displaySideBar =() => setSideBarDrawer(!sideBarDrawer);
     return (
        <IconContext.Provider value={{color: '#fff'}} style={{zIndex: '100'}} >
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <icons.AiOutlineMenuUnfold onClick={displaySideBar}/>
                </Link>
            </div>
            <nav className={sideBarDrawer ? 'nav-menu active':'nav-menu'}>
              <ul className="nav-menu-items" onClick={displaySideBar}>
                <li className="navbar-toggle">
                    <Link to="#" className="menu-bars">
                        <icons.AiOutlineClose/>
                    </Link>
                </li>
                {navbardata.map((item,index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.redirect_path}>
                                {item.icone}
                                <span>{item.tab_name}</span>
                            </Link>
                        </li>
                    )
                }
                ) }
              </ul>
            </nav>
        </IconContext.Provider>
     )
}
export default Navigationbar;