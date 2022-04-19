import React from 'react'
import Iframe from 'react-iframe'
import collegelog from "../../../images/collegelogo.png"
export const Contact = () => {
  return (
    <div className='mt-4 px-4'>
      <Iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55099.78531662629!2d77.95103390900674!3d30.330009685296275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d5612204efb7%3A0x5eef311e57b07271!2sUttaranchal%20University!5e0!3m2!1sen!2sin!4v1650279657961!5m2!1sen!2sin" 
      width="1290" height="450" style="border:0;" allowfullscreen="true" 
      loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
      <div className='d-flex justify-content-evenly align-items-center mt-4 mb-4'>
         <div className='w-30'>
           <img src={collegelog}></img>
         </div>
         <div className='w-40'>
         <p className='display-5'>Uttaranchal University</p>
         <p>Premnagar, Dehradun, Uttarakhand-24800 INDIA</p>
         <p><b>Tel</b>- 0135-2772135, 2770300</p>
         <p><b>Toll-Free</b>- 18002124201,18002124221</p>
         <p><b>Email</b>- university@uttaranchaluniversity.ac.in</p>
         </div>
         <div className='w-20'>
           <p><b>Director</b></p>
           <p><b>Marketing & Admission</b></p>
           <p>Uttaranchal University<br/>
              Dehradun, Uttarakhand, India<br/>
              Mb: 6399171122</p>
         </div>
      </div>
    </div>
  )
}
