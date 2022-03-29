import React, { useState } from 'react'
import { IoLockClosedOutline } from "react-icons/io5";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdMail } from "react-icons/io";
import axios from 'axios';

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

export const Forgot = () => {
  let [data, setdata] = useState({ email: '', captcha: false });
  const [status,setstatus]=useState(false);

  const submitdata = (e) => {
    e.preventDefault();
    setstatus(true);
    if (data.email) {
      if (data.captcha === true) {
        setTimeout(() => {
          axios.post("http://localhost:5000/mailsend", { 'email': data.email }).then(response => {
          notifysuccess(response.data.res);
          setdata({ email: '', captcha: false });
          setstatus(false);
        }).catch(err=>{notifywarn(err.message);  setstatus(false);})
        }, 2000);
      }
      else {
        notifywarn('Unhandle captcha');
      }
    }
    else {
      notifywarn('Empty field..!');
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center flex-column ' style={{ height: '400px', width: '300px' }} >
      <div className='mt-3'> 
        <div className='d-flex justify-content-center align-items-center mt-5 p-1' style={{ height: '80px', width: '80px', border: '3px solid black', borderRadius: '50%' }}>
          <div style={{ fontSize: '61px', paddingBottom: '25px', textAlign: 'center' }}> <IoLockClosedOutline /></div>
        </div>
      </div>
      <div className='text-center'>
        <h4 >Trouble Sign In ?</h4>
        <p>Enter your email and we will send you a link in your given mail to reset your password. </p>
      </div>
      <div >
        <form onSubmit={submitdata} className='d-flex justify-content-center align-items-center flex-column'>
          <div className=' position-relative' style={{ fontSize: "35px" }}><span className='position-absolute start-25 ' style={{ paddingLeft: '5px', }}><IoMdMail /></span><input type="email" value={data.email} onChange={(e) => setdata({ ...data, email: e.target.value })} style={{ paddingLeft: '50px', width: '300px', height: '40px', fontSize: '19px', border: '1px solid black' }} placeholder="Enter your Email"></input></div>
          <div className='mt-3' style={{ "transform": "scaleX(0.1)", "transform": "scaleY(0.9)" }}>
            <ReCAPTCHA sitekey="6Lc1--ceAAAAAEpQw9tEXi0suT8_Sbwm9vHstSBW" onChange={(e) => setdata({ ...data, captcha: true })} />
          </div>
          {status && <div className="spinner-border text-success mb-2" style={{marginTop:'7px',marginLeft:'20px'}} role="status">
           <span className="visually-hidden ">Loading...</span>
        </div>} 
          <div className='mt-2 '><button type='submit' className='btn btn-primary' style={{ width: '300px', fontSize: '19px' }}>Send Link</button></div>
          <ToastContainer />
        </form>
      </div>
    </div>
  )
}
