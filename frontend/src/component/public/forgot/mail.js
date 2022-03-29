import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import img from '../../../images/logo.png'
import { IoLockClosed } from "react-icons/io5";
import { useNavigate, useSearchParams } from 'react-router-dom';
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

const Mail = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [data, setdata] = useState({ password: '', confirmpassword: '' });
  const [status,setstatus]=useState(false);

    const submitdata = (e) => {
        e.preventDefault();
        setstatus(true)
        const { password, confirmpassword } = data;
        if (password && confirmpassword) {
            if (password.length >= 8 && confirmpassword.length >= 8) {
                if (password === confirmpassword) {
                    const token = searchParams.get('key')
                    setTimeout(()=>{
                    axios.post("http://localhost:5000/resetpassword", data, { headers: { 'Authorization': token } }).then(response => { if (response.data.res) { notifysuccess(response.data.res); setdata({ password: '', confirmpassword: '' }); setstatus(false) } else { notifywarn(response.data.err); setdata({ password: '', confirmpassword: '' }); setstatus(false); } }).catch(err => {notifywarn(err.message);setstatus(false);})
                    },2000);

                }
                else {
                    notifywarn("Password doesn't match"); setstatus(false);
                }
            }
            else {
                notifywarn('weak password must be greater than 8'); setstatus(false);
            }
        }
        else {
            notifywarn("Empty field"); setstatus(false);
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '680px' }}>
            <div className='d-flex justify-content-center align-items-center flex-column' style={{ width: '600px', height: '520px' }}>
                <div><img className='rounded-3' src={img} alt="image" width="250px" height="80px" /></div>
                <div className='mt-3 mb-3 h5'><p>Change password for name</p></div>
                <div className='border border-secondary p-3' style={{ width: '350px' }} >
                    <form className='d-flex justify-content-center align-items-center flex-column ' onSubmit={submitdata} >
                        <div className='mt-3 w-100 ' >Password</div>
                        <div className='position-relative' style={{ fontSize: '26px' }}><span className='position-absolute start-25 ' style={{ paddingLeft: '5px', }} ><IoLockClosed /></span><input type='password' value={data.password} onChange={(e) => setdata({ ...data, password: e.target.value })} style={{ fontSize: '24px', paddingLeft: '35px' }}></input></div>
                        <div className='mt-3 w-100 ' >Confirm Password</div>
                        <div className='position-relative' style={{ fontSize: '26px' }}><span className='position-absolute start-25' style={{ paddingLeft: '5px', }}><IoLockClosed /></span><input type='password' value={data.confirmpassword} onChange={(e) => setdata({ ...data, confirmpassword: e.target.value })} style={{ fontSize: '24px', paddingLeft: '35px' }}></input></div>
                        <div className='mt-4'><p>Make sure it's at least 18 characters OR at least 8 characters</p></div>
                        {status && <div className="spinner-border text-success" style={{marginTop:'7px',marginLeft:'20px'}} role="status">
                          <span className="visually-hidden ">Loading...</span>
                          </div>
                        }
                        <div className='text-center mt-3 mb-3'><button type='submit' className='btn btn-success p-2' style={{ fontSize: '18px', width: '330px' }}>Change Password</button></div>
                        <div className='text-center  mb-3'><button type='button' onClick={() => navigate("/", { replace: true })} className='btn btn-primary p-2' style={{ fontSize: '18px', width: '330px' }}>Back to signin</button></div>
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Mail