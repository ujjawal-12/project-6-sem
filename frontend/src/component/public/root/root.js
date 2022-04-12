import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import img from "../../../images/logo.png";
import style from "./root.module.css"
const linkActive = { "borderBottom": "2px solid green", "color": "green", "textDecoration": "none", "paddingBottom": "3px" }
const defaultLink = { "textDecoration": "none", "color": "white" }

export const Root = () => {
  const key = useSelector((state) => state.login.token)
  return (
    <div>
      <div className="container-fluid bg-dark" style={{ display: "flex" }} >
        <div style={{ width: "18%", margin: "10px 0 10px 35PX " }}><img className="rounded-3" src={img} width="200px" height="60px"></img></div>
        <div className='container' style={{ width: "82%" }}>
          <marquee width="80%" direction="left" scrollamount="13">
            <div style={{ marginTop: "25px", color: "white", fontSize: "25px" }}>WELCOME TO NAAC A+ AFFILIATED COLLEGE IN UTTARAKHAND</div>
          </marquee>
        </div>
      </div>
      <div className='container bg-dark text-light d-flex mt-2 rounded fs-5' style={{ "height": "50px" }} >
        <div
          className='border border-primary d-flex justify-content-center align-items-center mx-3'
          style={{ "width": "100px" }}>
          <NavLink to="home" style={({ isActive }) => isActive ? linkActive :
            defaultLink}>Home</NavLink>
        </div>
        <div
          className='border border-primary d-flex justify-content-center align-items-center mx-3'
          style={{ "width": "100px" }}>
          <NavLink to="academic" style={({ isActive }) => isActive ? linkActive :
            defaultLink}>Academic</NavLink>
        </div>
        <div
          className='border border-primary d-flex justify-content-center align-items-center mx-3'
          style={{ "width": "100px" }}>
          <NavLink to="placement" style={({ isActive }) => isActive ? linkActive :
            defaultLink}>Placement</NavLink>
        </div>
        <div
          className='border border-primary d-flex justify-content-center align-items-center mx-3'
          style={{ "width": "100px" }}>
          <NavLink to="contact" style={({ isActive }) => isActive ? linkActive :
            defaultLink}>contact</NavLink>
        </div>
        {/* <div 
        className='border border-primary d-flex justify-content-center align-items-center mx-3' 
        style={{ "width": "100px" }}>
            <NavLink to="auth/signin" style={({ isActive }) => isActive ? { "borderBottom": "1px solid teal", "color": "red" } : 
         { "textDecoration": "none" }}>SignIn</NavLink>
        </div> */}
        <div
          className='border border-primary d-flex justify-content-center align-items-center mx-3 '
          style={{ "width": "100px" }}>
          <NavLink to="auth/signin" style={({ isActive }) => isActive ? linkActive :
            defaultLink} >Addmission</NavLink>
        </div>
        {key ? <div className='border border-primary d-flex justify-content-center align-items-center ms-auto' style={{ "width": "100px" }}>Logout</div> :
          <div className='border border-primary d-flex justify-content-center align-items-center ms-auto'
            style={{ "width": "100px" }}>
            <NavLink to="auth/signin" style={({ isActive }) => isActive ? linkActive : defaultLink}>SignIn</NavLink></div>}
      </div>
      <Outlet></Outlet>
    </div >
  )
}
