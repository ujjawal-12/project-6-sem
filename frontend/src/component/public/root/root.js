import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import Avatar from 'react-avatar';
import img from "../../../images/logo.png";
import style from "./root.module.css";
import {ImHome} from "react-icons/im";
import { HiAcademicCap } from "react-icons/hi";
import { AiFillContacts } from "react-icons/ai";
import 'antd/dist/antd.css';
import {RiUserSettingsFill,RiBankFill,RiChatPollFill} from "react-icons/ri";
import { GrUserNew } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserAlt ,FaHandPointRight } from "react-icons/fa";
import {  Menu, Dropdown  } from "antd"
import { DownOutlined } from '@ant-design/icons';

const linkActive = { "borderBottom": "2px solid green", "color": "green", "textDecoration": "none", "paddingBottom": "3px" }
const defaultLink = { "textDecoration": "none", "color": "aqua" }

const menu = (
  <Menu>
    <Menu.Item key="0">
     <NavLink to="academic">Profile</NavLink>
    </Menu.Item>
    <Menu.Item key="1">
     <NavLink to="/">Logout</NavLink>
    </Menu.Item>
  </Menu>
);

export const Root = () => {
  const key = useSelector((state) => state.login.token)
  return (
    <div>
      <div className="container-fluid bg-dark mb-3" style={{ display: "flex" }} >
        <div  style={{ width: "15%", margin: "10px 1px 10px 2PX " }}><img className="rounded-3 img-fluid ms-3" src={img} width="180px" height="100px"></img></div>
        <div className='container ' style={key?{ width: "70%",paddingLeft:"45px" }:{ width: "80%",paddingLeft:"55px",paddingRight:"60px" }}>
          <marquee width="100%" direction="left" scrollamount="13">
            <div style={{ marginTop: "25px", color: "pink", fontSize: "25px" }}>WELCOME TO NAAC A+ AFFILIATED COLLEGE IN UTTARAKHAND</div>
          </marquee>
        </div>
        {key && <div className='container d-flex justify-content-center align-items-center' style={{ width: "15%" }}>
        <Avatar name={sessionStorage.getItem("loginusername")} size="50" round={true} />
        <Dropdown overlay={menu} trigger={['click']}>
    <span className="ant-dropdown-link text-light ms-2 " style={{"fontSize":"22px"}} onClick={e => e.preventDefault()}>
      <IoIosArrowDown />
    </span>
  </Dropdown></div>}
      </div>
      <div className='container bg-dark d-flex mt-2 rounded fs-5 py-4' style={{ "height": "50px","color":"teal" }} >
        <div
          className=' d-flex justify-content-center align-items-center mx-1'
          style={{ "width": "100px" }}>
          <NavLink to={key? "home" : "/"} style={({ isActive }) => isActive ? linkActive :
            defaultLink}><span><ImHome></ImHome> </span>Home</NavLink>
        </div>
        <div
          className=' d-flex justify-content-center align-items-center mx-1'
          style={{ "width": "120px" }}>
          <NavLink to="academic" style={({ isActive }) => isActive ? linkActive :
            defaultLink}><span style={{"fontSize":"25px"}}><HiAcademicCap></HiAcademicCap> </span>Academic</NavLink>
        </div>
        <div
          className=' d-flex justify-content-center align-items-center mx-1'
          style={{ "width": "130px" }}>
          <NavLink to="placement" style={({ isActive }) => isActive ? linkActive :
            defaultLink}><span><RiChatPollFill /> </span>Placement</NavLink>
        </div>
        <div
          className=' d-flex justify-content-center align-items-center mx-1'
          style={{ "width": "120px" }}>
          <NavLink to="contact" style={({ isActive }) => isActive ? linkActive :
            defaultLink}><span style={{"fontSize":"25px"}}><AiFillContacts></AiFillContacts> </span>contact</NavLink>
        </div>
        
        {/* <div 
        className=' d-flex justify-content-center align-items-center mx-1' 
        style={{ "width": "100px" }}>
            <NavLink to="auth/signin" style={({ isActive }) => isActive ? { "borderBottom": "1px solid teal", "color": "red" } : 
         { "textDecoration": "none" }}>SignIn</NavLink>
        </div> */}
        <div
          className=' d-flex justify-content-center align-items-center mx-1 '
          style={{ "width": "140px" }}>
          <NavLink to="addmission" style={({ isActive }) => isActive ? linkActive :
            defaultLink} ><span><RiBankFill></RiBankFill> </span>Addmission</NavLink>
        </div>
        { key && <><div
          className=' d-flex justify-content-center align-items-center mx-1'
          style={{ "width": "120px" }}>
          <NavLink to="program" style={({ isActive }) => isActive ? linkActive :
            defaultLink}><span ><RiUserSettingsFill></RiUserSettingsFill> </span>Program</NavLink>
        </div>
        <div
          className=' d-flex justify-content-center align-items-center mx-1'
          style={{ "width": "78px" }}>
          <NavLink to="apply" style={({ isActive }) => isActive ? linkActive :
            defaultLink}><span><FaHandPointRight></FaHandPointRight> </span>Apply</NavLink>
        </div></>}
        <div className=' d-flex justify-content-center align-items-center ms-auto'
            style={{ "width": key?"160":"180" }}>
        {key ?<NavLink to="logout" style={({ isActive }) => 
        isActive ? linkActive : defaultLink}><span ><FaUserAlt></FaUserAlt> </span> Logout</NavLink> :
        (<><span ><FaUserAlt></FaUserAlt> </span>&#160;<NavLink to="auth/signin" style={({ isActive }) =>
         isActive ? linkActive : defaultLink}>SignIn</NavLink> &#160;<span style={{"color":"white"}}>/</span>
         <NavLink to="auth/signup" style={({ isActive }) =>
         isActive ? linkActive : defaultLink}>&#160;SignUp</NavLink></>)
         }
      </div>
      </div>
      <Outlet></Outlet>
    </div >
  )
}
