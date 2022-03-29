import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import img from "../../../images/logo.png";
import edu from "../../../images/img4.jpg";
import style from "./root.module.css"

export const Root = () => {
  return (
    <div>
      <div style={{ display: "flex", backgroundColor: "black" }}>
        <div style={{ width: "18%", margin: "10px 0 10px 35PX " }}><img className="rounded-3" src={img} width="200px" height="60px"></img></div>
        <div style={{ width: "82%" }}>
          <marquee width="80%" direction="left" scrollamount="13">
            <div style={{ marginTop: "25px", color: "white", fontSize: "25px" }}>WELCOME TO NAAC A+ AFFILIATED COLLEGE IN UTTARAKHAND</div>
          </marquee>
        </div>
      </div>
      <div className='d-flex  align-items-center justify-content-center' style={{ "height": "575px" }}>
        <div className="d-flex justify-content-center align-items-center" style={{ height: "530px", border: "1px solid grey", borderRadius: "25px",width:"50%" }}>
          <div className=' h-100  d-flex justify-content-center align-items-center bg-success ' style={{ width:'45%', borderRadius: "3px" }}>
            <img src={edu} alt="image" height="530px" width="307px" style={{"borderTopLeftRadius":'8px',"borderBottomLeftRadius":'8px',"opacity":'0.9'}}></img>
          </div>
          <div className=' h-100 ' style={{  borderLeft: ".1px grey", borderRadius: "3px" ,width:'55%'}}>
            <div className="d-flex justify-content-center align-items-center flex-column " style={{padding:"15px"}} >
              <div className='d-flex justify-content-around align-items-center w-100' style={{ borderRadius: "20px", paddingTop:"5px", backgroundColor: "black" }}>
                <div className='h4' style={{ width: "50%", borderRight: "2px solid white", textAlign: "center", fontSize: "25px" }}><NavLink to="/" style={({ isActive }) => isActive ? { textDecoration: "none", color: "green" } : { textDecoration: "none", color: "white" }}>SIGN-IN</NavLink ></div>
                <div className='h4' style={{ width: "50%", textAlign: "center", fontSize: "25px" }}><NavLink to="/signup" style={({ isActive }) => isActive ? { textDecoration: "none", color: "green" } : { textDecoration: "none", color: "white" }}>SIGN-UP</NavLink ></div>
              </div>
              <div >
                <div >
                  <Outlet></Outlet>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div >
    </div >
  )
}