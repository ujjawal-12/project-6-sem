import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { IoLockClosed } from "react-icons/io5";

const notifysuccess = (mss) => toast.success(mss, {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

const notifywarn = (mss) => toast.warn(mss, {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});


export const Signup = () => {

  const navigate = useNavigate();
  let [formdata, setformdata] = useState({ name: '', email: '', contact: '', password: '', confirmpwd: '', captcha: false });
  const [status,setstatus]=useState(false);

  const inputstyle = {
    outline: "none",
    borderBottom: "1px solid black",
    borderTop: "0",
    borderRight: "0",
    borderLeft: "0",
    fontSize: "18px",
    paddingBottom: '4px',
    paddingLeft: "38px"
  }

  const submitdata = (e) => {
    setstatus(true);
    e.preventDefault();
    const { name, email, contact, password, confirmpwd, captcha } = formdata;
    if (name && email && contact && password && confirmpwd) {
      if (contact.length === 10) {
        if (password === confirmpwd) {
          if (password.length >= 8) {
            if (captcha === true) {
               setTimeout(()=>{
              axios.post("http://localhost:5000/signup", { name, email, contact, password }, { headers: { 'content-type': 'application/json' } }).then(response => { notifysuccess(response.data.res); setformdata({ name: '', email: '', contact: '', password: '', confirmpwd: '', captcha: false }); setstatus(false) }).catch(err => {notifywarn(err.message);setstatus(false) ;})
               },2000)
            }
            else {
              notifywarn('oops captcha is unhandled'); setstatus(false);
            }
          }
          else {
            notifywarn('Weak password must be 8 digit');setstatus(false);
          }
        }
        else {
          notifywarn('Password missmatch'); setstatus(false);
        }
      }
      else {
        notifywarn('Invalid phone number'); setstatus(false);
      }
    }
    else {
      notifywarn('Empty fields...!'); setstatus(false);
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center text-center mt-2 pt-4' style={{ height: "390px" }}>
      <form onSubmit={submitdata}>
        <div className='mb-3 position-relative' style={{ fontSize: "25px", marginTop: '30px' }}><span className='position-absolute start-25'><FaUserAlt /></span> <input type="text" placeholder='Name' value={formdata.name} onChange={(e) => setformdata({ ...formdata, name: e.target.value })} style={inputstyle}></input></div>
        <div className='mb-3  position-relative' style={{ fontSize: "25px" }}><span className='position-absolute start-25'><IoMdMail /></span> <input type="email" placeholder='Email' value={formdata.email} onChange={(e) => setformdata({ ...formdata, email: e.target.value })} style={inputstyle}></input></div>
        <div className='mb-3  position-relative' style={{ fontSize: "25px" }}> <span className='position-absolute start-25'><IoMdCall /></span><input type="number" placeholder='Contact' value={formdata.contact} onChange={(e) => setformdata({ ...formdata, contact: e.target.value })} style={inputstyle}></input></div>
        <div className='mb-3  position-relative' style={{ fontSize: "25px" }} ><span className='position-absolute start-25'> <IoLockClosed /></span> <input type="password" placeholder='Password' value={formdata.password} onChange={(e) => setformdata({ ...formdata, password: e.target.value })} style={inputstyle}></input></div>
        <div className='mt-3  position-relative' style={{ fontSize: "25px" }}><span className='position-absolute start-25'><IoLockClosed /></span><input type="password" placeholder='Confirm Password' value={formdata.confirmpwd} onChange={(e) => setformdata({ ...formdata, confirmpwd: e.target.value })} style={inputstyle}></input></div>
        <div className='mt-3' style={{ "transform": "scaleX(0.1)", "transform": "scaleY(0.9)" }}><ReCAPTCHA sitekey="6Lc1--ceAAAAAEpQw9tEXi0suT8_Sbwm9vHstSBW" onChange={() => setformdata({ ...formdata, captcha: true })} /></div>
        {status && <div className="spinner-border text-success mt-3 mb-1" style={{marginTop:'7px',marginLeft:'20px'}} role="status">
           <span className="visually-hidden ">Loading...</span>
        </div>} 
        <div className='mt-1 text-center'  ><button type='submit' className='btn btn-primary' style={{ fontSize: '15px', width: '100%' }}>SignUp</button></div>
      </form >
      <ToastContainer />
    </div >
  )
}
