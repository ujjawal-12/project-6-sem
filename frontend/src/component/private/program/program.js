import React from 'react';
import i8 from "../../../images/i8.jpg";
import i9 from "../../../images/i9.jpg";
import i10 from "../../../images/i10.jpg";
import { FaUserAlt, FaHandPointRight, FaCalendarAlt } from "react-icons/fa";
import { Photo } from './photo';

export const Program = () => {
  return (
    <div>
      <div className='container p-4'>
        <p className='text-center' style={{ "fontSize": "40px" }}>Social Responsibility Initiatives</p>
        <div className='w-100 d-flex justify-content-around align-items-center'>
          <div className='w-30'>
            <img width="390" src={i8}>
            </img>
            <p className='mt-1'>Uttaranchal University adopts a School in Selaqui,
              Dehradun to provide Quality Education for the underprivileged children</p>
            <p className='mt-1'><FaCalendarAlt></FaCalendarAlt> November 26, 2021  News Desk</p>
          </div>
          <div className='w-30'>
            <img width="400" src={i9}></img>
            <p className='mt-1'>Uttaranchal University celebrated Constitution Day with a
              Record Blood Donation A record 1348 Units of Blood Donated in a Day</p>
            <p className='mt-1'> <FaCalendarAlt></FaCalendarAlt> November 26, 2021  News Desk</p>
          </div>
          <div className='w-30'>
            <img width="400" src={i10}></img>
            <p className='mt-1'>UIPS, Uttaranchal University organized a free health checkup camp for
              adopted village Kotra Santoor, Dehradun on 18th of November 2021.</p>
            <p className='mt-1'><FaCalendarAlt></FaCalendarAlt> November 18, 2021  News Desk</p>
          </div>
        </div>
      </div>
      <div>
        <p className='text-center ' style={{ "fontSize": "40px" }}>Videos</p>
        <div className='container d-flex justify-content-around aligns-item-center mb-4 pe-5 '>
          <div className='w-25'> <iframe width="400" height="300" src="https://www.youtube.com/embed/1lOGlxngJHQ?autoplay=0&mute=1">
          </iframe><h4>Walk Through Uttaranchal University</h4></div>
          <div className='w-25'> <iframe width="400" height="300" src="https://www.youtube.com/embed/7INwmQFdYj8?autoplay=0&mute=1">
          </iframe><h4>Promotional Video</h4></div>
          <div className='w-25'> <iframe width="400" height="300" src="https://www.youtube.com/embed/yYsiDMp8Gmw?autoplay=0&mute=1">
          </iframe><h4>Papon Live-In-Concert</h4></div>
        </div>
      </div>
      <div>
        <p className='text-center ' style={{ "fontSize": "40px" }}>Uttaranchal Yuva Fest</p>
        <div className='container d-flex justify-content-around aligns-item-center mb-4 pe-5 flex-wrap '>
          <div className='w-29'> <iframe width="400" height="300" src="https://www.youtube.com/embed/JP-DkcheCrA?autoplay=0&mute=1">
          </iframe><h4>Diljit Dosanjh</h4><h5>Performed  at Uttaranchal Yuva Fest - 2019</h5></div>
          <div className='w-29'> <iframe width="400" height="300" src="https://www.youtube.com/embed/rMt5PTUx6Cg?autoplay=0&mute=1">
          </iframe><h4>Mika Singh</h4><h5>Performed  at Uttaranchal Yuva Fest - 2016</h5></div>
          <div className='w-29'> <iframe width="400" height="300" src="https://www.youtube.com/embed/H5ME4btYT1I?autoplay=0&mute=1">
          </iframe><h4>Shirley setia</h4><h5>Performed  at Uttaranchal Yuva Fest - 2018</h5></div>
          <div className='w-29'> <iframe width="400" height="300" src="https://www.youtube.com/embed/jpz8zO1oS6M?autoplay=0&mute=1">
          </iframe><h4>Arijit Singh</h4><h5>Performed  at Uttaranchal Yuva Fest - 2015</h5></div>
          <div className='w-29'> <iframe width="400" height="300" src="https://www.youtube.com/embed/4Ywu2lHNdRU?autoplay=0&mute=1">
          </iframe><h4>Kailash Kher</h4><h5>Performed  at Uttaranchal Yuva Fest - 2017</h5></div>
          <div className='w-29'> <iframe width="400" height="300" src="https://www.youtube.com/embed/Lq02DYgWzq4?autoplay=0&mute=1">
          </iframe><h4>Ahsaan Qureshi</h4><h5>Performed  at Uttaranchal Yuva Fest - 2018</h5></div>
        </div>
      </div>
      <div>
        <p className='text-center ' style={{ "fontSize": "40px" }}>Photo Gallery</p>
        <div className='container d-flex justify-content-center aligns-item-center flex-wrap'>
          <Photo></Photo>
        </div>
      </div>
    </div>
  )
}
