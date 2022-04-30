import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaHandPointRight } from "react-icons/fa";

const linkActive = { "color": "green", "paddingBottom": "9px", "paddingTop": "9px", "textDecoration": "underLine" }
const defaultLink = { "textDecoration": "none", "color": "black" }


export const Addmission = () => {
  return (
    <div className='container-fluid my-4'>
      <div className='container d-flex justify-content-center align-items-start h-auto' >
        <div className='border border-secondary' style={{ "width": "70%" }}><Outlet></Outlet></div>
        <div className='border border-secondary pb-5' style={{ "width": "30%", "height": "100vh" }}>
          <div className='text-center mt-5'><h4 className='text-danger'><u>Courses</u></h4></div>
          <div className='d-flex justify-content-center align-items-center mt-5'>
            <ul style={{ "listStyle": "circle" }}>
              <li className='text-center pt-2' style={{ "height": "45px" }}><NavLink to="bca" style={({ isActive }) => isActive ? linkActive : defaultLink}><FaHandPointRight></FaHandPointRight> Bachelor of Computer Application - 3 Years</NavLink>1</li>
              <li className='text-center pt-2' style={{ "height": "45px" }}><NavLink to="bca-with-research" style={({ isActive }) => isActive ? linkActive : defaultLink}><FaHandPointRight></FaHandPointRight> BCA with Research – 4 Years</NavLink>2</li>
              <li className='text-center pt-2' style={{ "height": "45px" }}><NavLink to="bca-cyber-security" style={({ isActive }) => isActive ? linkActive : defaultLink}><FaHandPointRight></FaHandPointRight> BCA (Cyber Security) in association with CompTIA – 3 Years</NavLink>3</li>
              <li className='text-center pt-2' style={{ "height": "45px" }}><NavLink to="bca-data-analytic" style={({ isActive }) => isActive ? linkActive : defaultLink}><FaHandPointRight></FaHandPointRight> BCA (Data Analytics) – 3 Years</NavLink></li>
              <li className='text-center pt-2' style={{ "height": "45px" }}><NavLink to="bsc-it" style={({ isActive }) => isActive ? linkActive : defaultLink}><FaHandPointRight></FaHandPointRight> B.Sc.(IT) – 3 Years</NavLink></li>
              <li className='text-center pt-2' style={{ "height": "45px" }}><NavLink to="bsc-it-with-research" style={({ isActive }) => isActive ? linkActive : defaultLink}><FaHandPointRight></FaHandPointRight> B.Sc.(IT) with Research – 4 Years</NavLink></li>
              <li className='text-center pt-2' style={{ "height": "45px" }}><NavLink to="bsc-hons-computer-science" style={({ isActive }) => isActive ? linkActive : defaultLink}><FaHandPointRight></FaHandPointRight> B.Sc. (Hons.) Computer Science – 3 Years</NavLink></li>
              <li className='text-center pt-2' style={{ "height": "45px" }}><NavLink to="bsc-hons-computer-science-with-research" style={({ isActive }) => isActive ? linkActive : defaultLink}><FaHandPointRight></FaHandPointRight> B.Sc. (Hons.) Computer Science with research – 4 Years</NavLink></li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
