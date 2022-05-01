import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import Avatar from 'react-avatar';
import img from "../../../images/logo.png";
import style from "./root.module.css";
import { ImHome } from "react-icons/im";
import { HiAcademicCap } from "react-icons/hi";
import { AiFillContacts } from "react-icons/ai";
import 'antd/dist/antd.css';
import { RiUserSettingsFill, RiBankFill, RiChatPollFill, RiLogoutCircleRFill } from "react-icons/ri";
import { GrUserNew } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserAlt, FaHandPointRight, FaCalendarAlt } from "react-icons/fa";
import { Menu, Dropdown } from "antd"
import { DownOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { Logout } from '../../private/logout/logout';
import { callremovetokenaction } from '../../../actions/loginaction';
import token from '../../private/tokens/tokenmethod';

const linkActive = { "borderTop": "2px solid aqua", "color": "aqua", "textDecoration": "none", "paddingBottom": "9px", "paddingTop": "9px" }
const defaultLink = { "textDecoration": "none", "color": "white" }


export const Root = () => {
  const key = useSelector((state) => state.login.token)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fun = () => {
    token.removetoken();
    dispatch(callremovetokenaction(null));
    navigate("/", { replace: true });
  }

  const menu = (
    <Menu>

      <Menu.Item key="1">
        <p onClick={() => fun()}>Logout</p>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div className="container-fluid bg-dark mb-3" style={{ display: "flex" }} >
        <div style={{ width: "15%", margin: "10px 1px 10px 2PX " }}><img className="rounded-3 img-fluid ms-3" src={img} width="180px" height="100px"></img></div>
        <div className='container ' style={key ? { width: "70%", paddingLeft: "45px" } : { width: "80%", paddingLeft: "55px", paddingRight: "60px" }}>
          <marquee width="100%" direction="left" scrollamount="13">
            <div style={{ marginTop: "25px", color: "aqua", fontSize: "25px" }}>WELCOME TO NAAC A+ AFFILIATED COLLEGE IN UTTARAKHAND</div>
          </marquee>
        </div>
        {key && <div className='container d-flex justify-content-center align-items-center' style={{ width: "15%" }}>
          <Avatar name={sessionStorage.getItem("loginusername").toUpperCase()} size="50" round={true} />
          <Dropdown overlay={menu} trigger={['click']}>
            <span className="ant-dropdown-link text-light ms-2 " style={{ "fontSize": "22px" }} onClick={e => e.preventDefault()}>
              <IoIosArrowDown />
            </span>
          </Dropdown></div>}
      </div>

      <div className='container-md bg-dark d-flex mt-2 rounded fs-5 py-4' style={{ "height": "50px", "color": "teal" }} >
        {
          sessionStorage.getItem("loginusername") === "Admin" ?
            <> <div
              className=' d-flex justify-content-center align-items-center mx-3 h-100'
              style={{ "width": "200px" }}>
              <NavLink to={key ? "admin" : "/"} style={({ isActive }) => isActive ? linkActive :
                defaultLink}><span><ImHome></ImHome> </span>Admin Dashboard</NavLink>
            </div>
              <div
                className=' d-flex justify-content-center align-items-center mx-3 h-100'
                style={{ "width": "200px" }}>
                <NavLink to={key ? "registeredstudent" : "/"} style={({ isActive }) => isActive ? linkActive :
                  defaultLink}><span><FaUserAlt></FaUserAlt> </span>Registered Student</NavLink>
              </div>
              <div
                className=' d-flex justify-content-center align-items-center ms-auto h-100'
                style={{ "width": "200px" }}>
                <NavLink to="logout" onClick={() => fun()} style={({ isActive }) =>
                  isActive ? linkActive : defaultLink}><span ><RiLogoutCircleRFill></RiLogoutCircleRFill> </span> Logout</NavLink>
              </div>

            </>
            :
            <>
              <div
                className=' d-flex justify-content-center align-items-center mx-1 h-100'
                style={{ "width": "100px" }}>
                <NavLink to={key ? "home" : "/"} style={({ isActive }) => isActive ? linkActive :
                  defaultLink}><span><ImHome></ImHome> </span>Home</NavLink>
              </div>
              <div
                className=' d-flex justify-content-center align-items-center mx-2 '
                style={{ "width": "140px" }}>
                <NavLink to="Addmission" style={({ isActive }) => isActive ? linkActive :
                  defaultLink} ><span><RiBankFill></RiBankFill> </span>Addmission</NavLink>
              </div>
              <div
                className=' d-flex justify-content-center align-items-center mx-1'
                style={{ "width": "170px" }}>
                <NavLink to="college-gallery" style={({ isActive }) => isActive ? linkActive :
                  defaultLink}><span ><RiUserSettingsFill></RiUserSettingsFill> </span>College-Gallery</NavLink>
              </div>
              <div
                className=' d-flex justify-content-center align-items-center mx-1 h-100'
                style={{ "width": "130px" }}>
                <NavLink to="placement" style={({ isActive }) => isActive ? linkActive :
                  defaultLink}><span><RiChatPollFill /> </span>Placement</NavLink>
              </div>
              <div
                className=' d-flex justify-content-center align-items-center mx-1 h-100'
                style={{ "width": "120px" }}>
                <NavLink to="contact" style={({ isActive }) => isActive ? linkActive :
                  defaultLink}><span ><AiFillContacts></AiFillContacts> </span>contact</NavLink>
              </div>
              {key && <><div
                className=' d-flex justify-content-center align-items-center mx-1'
                style={{ "width": "100px" }}>
                <NavLink to="apply" style={({ isActive }) => isActive ? linkActive :
                  defaultLink}><span><FaHandPointRight></FaHandPointRight> </span>Applied</NavLink>
              </div></>}
              <div className=' d-flex justify-content-center align-items-center ms-auto me-3'
                style={{ "width": key ? "160" : "180" }}>
                {key ? <NavLink to="logout" onClick={() => fun()} style={({ isActive }) =>
                  isActive ? linkActive : defaultLink}><span ><RiLogoutCircleRFill></RiLogoutCircleRFill> </span> Logout</NavLink> :
                  (<><span ><FaUserAlt></FaUserAlt> </span>&#160;<NavLink to="auth/signin" style={({ isActive }) =>
                    isActive ? linkActive : defaultLink}>SignIn</NavLink> &#160;<span style={{ "color": "white" }}>/</span>
                    <NavLink to="auth/signup" style={({ isActive }) =>
                      isActive ? linkActive : defaultLink}>&#160;SignUp</NavLink></>)
                }
              </div>
            </>
        }
      </div>
      {key && <div class="container alert alert-warning text-center fs-4 mt-3" role="alert">
        Welcome {sessionStorage.getItem("loginusername")}
      </div>}
      <Outlet></Outlet>
    </div >
  )
}
