import React from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { callremovetokenaction } from '../../../actions/loginaction';
import img from "../../../images/logo.png";

export const Navbar = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  return (
    <div className='container-fluid m-0 p-0 '>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark " >
        <div className="container-fluid">
          <img src={img} className="rounded-3" width="200px" height="60px"></img>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-lg-0 " style={{ "marginLeft": "150px" }}>
              <li >
                <NavLink to="/dashboard/home" className="nav-link fs-5" style={({ isActive }) => isActive ? { color: "teal", borderBottom: "2px solid teal" } : { color: "white", textDecoration: "none" }}  >Home</NavLink>
              </li>
              <li >
                <NavLink to="/dashboard/program" className="nav-link fs-5" style={({ isActive }) => isActive ? { color: "teal", borderBottom: "2px solid teal" } : { color: "white", textDecoration: "none" }}>Program</NavLink>
                {/* "display":"flex","justifyContent":"center","alignItems":"center" */}
              </li>
              <li >
                <NavLink to="/dashboard/academic" className="nav-link fs-5" style={({ isActive }) => isActive ? { color: "teal", borderBottom: "2px solid teal" } : { color: "white", textDecoration: "none" }}>Academic</NavLink>
              </li>
              <li >
                <NavLink to="/dashboard/placement" className="nav-link fs-5" style={({ isActive }) => isActive ? { color: "teal", borderBottom: "2px solid teal" } : { color: "white", textDecoration: "none" }}>Placement</NavLink>
              </li>
              <li >
                <NavLink to="/dashboard/addmission" className="nav-link fs-5" style={({ isActive }) => isActive ? { color: "teal", borderBottom: "2px solid teal" } : { color: "white", textDecoration: "none" }}>Addmission</NavLink>
              </li>
              <li >
                <NavLink to="/dashboard/contact" className="nav-link fs-5" style={({ isActive }) => isActive ? { color: "teal", borderBottom: "2px solid teal" } : { color: "white", textDecoration: "none" }}>Contact</NavLink>
              </li>
              <li >
                <NavLink to="/dashboard/apply" className="nav-link fs-5" style={({ isActive }) => isActive ? { color: "teal", borderBottom: "2px solid teal" } : { color: "white", textDecoration: "none" }}>Apply Now</NavLink>
              </li>
            </ul>
            <div style={{ "margin": "0 15px 0 0", "height": "60px", textAlign: "center" }} >
              <span>
                <img src={img} width="40px" height="40px" style={{ "borderRadius": "50%" }}></img>
                <p onClick={() => { sessionStorage.clear(); dispatch(callremovetokenaction()); navigate("/", { replace: true }) }} style={{ color: "white", "cursor": "pointer" }}>ujjawal</p>
              </span>
            </div>
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  )
}
