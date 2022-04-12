import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdMail } from "react-icons/io";
import { IoLockClosed } from "react-icons/io5";
import token from '../../private/tokens/tokenmethod';
import { useDispatch } from 'react-redux';
import { callsettokenaction } from '../../../actions/loginaction';

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

export const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [formdata, setformdata] = useState({ email: '', password: '' });
  const [status,setstatus] = useState(false);

  const fun = () => {navigate("/dashboard", { replace: true }) }

  const submitdata = (e) => {
    e.preventDefault();
    setstatus(true);
    if (formdata.email && formdata.password) {
      if (formdata.password.length >= 8) {
        setTimeout(() => {
          axios.post("http://localhost:5000/signin", { "email": formdata.email, "password": formdata.password })
          .then(response => {
             if (response.data.res) 
             { notifysuccess(response.data.res);
               sessionStorage.setItem("user",formdata.email);
               sessionStorage.setItem("loginusername",response?.data?.username);
               token.settoken ("token",response.data);
               dispatch(callsettokenaction(response.data.token));
               setformdata({ email: '', password: '' });
               setstatus(false);
               fun() } 
             else { 
               notifywarn(response.data.err); 
               setformdata({ email: '', password: '' });
               setstatus(false)
              } 
            })
             .catch(err => {
                notifywarn(err.message);
                setstatus(false)
              })
        }, 2000);
      }
      else {
        notifywarn('Invalid password'); setstatus(false);
      }
    }
    else {
      notifywarn('Empty fields..!'); setstatus(false);
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: "360px" }}>
      <form onSubmit={submitdata}>
        <div className='mt-5 position-relative' style={{ fontSize: "30px" }}> <span className='position-absolute start-25'><IoMdMail /></span><input type="email" placeholder='Email' value={formdata.email} onChange={(e) => setformdata({ ...formdata, email: e.target.value })} style={inputstyle}></input></div>
        <div className='mt-5 position-relative' style={{ fontSize: "30px" }}><span className='position-absolute start-25'><IoLockClosed /></span><input type="password" placeholder='Password' value={formdata.password} onChange={(e) => setformdata({ ...formdata, password: e.target.value })} style={inputstyle}></input></div>
        <div className='mt-2' style={{ textAlign: "end", color: "blue" }}><span ><NavLink to="password_reset" style={{ textDecoration: "none" }}>forgot password ?</NavLink></span></div>
       {status && <div className="spinner-border text-success mt-4" style={{marginTop:'18px',marginLeft:'100px'}} role="status">
           <span className="visually-hidden ">Loading...</span>
        </div>} 
        <div className=' text-center mt-5' ><button type='submit' className='btn btn-primary' style={{ fontSize: '20px', width: '100%', padding: '6px' }}>SignIn</button></div>
        <ToastContainer />
      </form >
      {/* <button onClick={() => { fun() }}>signin</button> */}
    </div >

  )
}
