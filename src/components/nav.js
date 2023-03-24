import React from 'react'
import {NavLink} from "react-router-dom"

import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineDashboard } from 'react-icons/md';
import { TbActivityHeartbeat } from 'react-icons/tb';
import { FcAbout } from 'react-icons/fc';
import { CiSettings } from 'react-icons/ci';


import Theme from './theme';
import Profile from './profile';



const Nav = ({change}) => {

  return (
    <nav>
            <Theme change={change}/>
        <div className="links">
            <NavLink to={"/"} className={"nav-links"}>
                <AiOutlineHome className='nav-icons'/>
                <p>Home</p>
            </NavLink>
            <NavLink to={"dashboard"} className={"nav-links"}>
                <MdOutlineDashboard className='nav-icons'/>
                <p>Dashboard</p>
            </NavLink>
            <NavLink to={"activity"} className={"nav-links"}>
                <TbActivityHeartbeat className='nav-icons'/>
                <p>Activity</p>
            </NavLink>
            <NavLink to={"about"} className={"nav-links"}>
                <FcAbout className='nav-icons'/>
                <p>About</p>
            </NavLink>
            <NavLink to={"settings"} className={"nav-links"}>
                <CiSettings className='nav-icons'/>
                <p>Settings</p>
            </NavLink>
        </div>
        <div className="profile">
            <Profile />
        </div>
    </nav>
  )
}

export default Nav;