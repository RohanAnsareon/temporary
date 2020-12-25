import React from 'react'
import UserInfo from '../user-info/user-info'
import NavBar from "../nav-bar/nav-bar"
import logo from '../../assets/image 2.png';
const SidebarComponent =({icon, title})=>{
    return(
        <div className="sidebar">
            <UserInfo name="Pasha Life" email="Pashalife@mail.com" logo={logo}/>
            <NavBar/>
        </div>
    )
}
export default SidebarComponent;