import React from 'react'
import { useSelector } from 'react-redux'
import clgImg from "../../../images/college1.jpg"
import dean from "../../../images/dean.jpg"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import c1 from "../../../images/c1.jpg"
import c2 from "../../../images/c2.jpg"
import c3 from "../../../images/c3.jpg"
import c4 from "../../../images/c4.jpg"
import c5 from "../../../images/c5.jpg"
import c6 from "../../../images/c6.jpg"
import f1 from "../../../images/f1.jpg"
import f2 from "../../../images/f2.jpg"
import f3 from "../../../images/f3.jpg"
import f4 from "../../../images/f4.jpg"
import * as images from "./importimg"
import Fcard from './fcard';
// const handleDragStart = (e) => e.preventDefault();
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const items = [
  <img src={c1}></img>,
  <img src={c2}></img>,
  <img src={c3}></img>,
  <img src={c4}></img>,
  <img src={c5}></img>,
  <img src={c6}></img>,

];

const recuiter = [
  <img src={images.rec1}></img>,
  <img src={images.rec2}></img>,
  <img src={images.rec3}></img>,
  <img src={images.rec4}></img>,
  <img src={images.rec5}></img>,
  <img src={images.rec6}></img>,
  <img src={images.rec7}></img>,
  <img src={images.rec8}></img>,
  <img src={images.rec9}></img>,
  <img src={images.rec10}></img>,
  <img src={images.rec11}></img>,
  <img src={images.rec12}></img>,
  <img src={images.rec13}></img>,
  <img src={images.rec14}></img>,
  <img src={images.rec15}></img>,

]

export const Home = () => {
  const token = useSelector(state => state.login.token)
  
  return (
    <div className='mt-3'> 
      <div>
        <img src={clgImg} className="img-fluid" width="100%"></img>
      </div>
      <div className='container mt-5'>
        <h2 className='text-center mb-3'>About College Of Computer Science</h2>
        <p style={{ "textAlign": "justify" }}>
          <p style={{ "marginBottom": "15px", "fontSize": "16px" }}> CCS has been at the forefront of providing quality education in computer science.
            The Institute has been set up to create High professionals who can dynamically
            explore the new avenues of entrepreneurial and management heights.</p><p style={{ "marginBottom": "15px", "fontSize": "16px" }}>University Management
              and Business Study Programmes are value-driven and industry-need centric. They are specifically
              designed to meet corporate requirements. In the programme curriculum,
              the students get the experience of a true blend of academic excellence and the application of management
              practices. Students are encouraged to encompass in their studies, the integrative process of business and
              management practices.</p><p style={{ "marginBottom": "15px", "fontSize": "16px" }}>Today, UIM is leading the way in offering excellent educational facilities,
                faculty with impeccable academic credentials, and a plethora of programmes to choose from.
                It is a much sought-after Institute for management studies and widely acclaimed for its sound
                placement record. We have collaborations with the premier corporate houses for the internship,
                summer training, and recruitment of our students. Our research programmes are highly innovative
                and relevant to the existing management practices, apt for developing managerial expertise,
                innovative trends and aid in developing a highly effective management think-tank.</p>
        </p>
      </div>
      <div className='container mt-4'>
        <h2 className='text-center my-4'>Why College of Computer Science?</h2>
        <ul style={{ "listStyle": "circle" }}>
          <li>College of Computer Science is already a nice centre of learning.</li>
          <li>Our Management and courses are value-driven and industry-need centric.</li>
          <li>We possess academic strength through our faculty with proven academic and industry credentials.</li>
          <li>We instill zest for excellence among our students and create an environment for them to encompass the comprehensive qualities of leadership, team work and global vision</li>
          <li>The institute continuously evolves its methodology to make it industry-compliant.</li>
          <li>Our experience in running multi-disciplinary courses has given us an edge over others to translate our experience into conspicuous benefits for our students.</li>
          <li>We provide our students a wide variety of study programs of both long and short duration to choose from.</li>
          <li>We provide a balanced combination of academic and practical, industry oriented content.</li>
          <li>We have collaborations with the premier corporate houses for the recruitment of our students.</li>
          <li>The activities undertaken in the institute go a long way in developing an all-round personality of the students that make them confident, communicative and ready to face the challenges of the world.</li>
          <li>Our research programs are not only highly innovative, but also relevant to the existing IT practices.</li>
        </ul>
      </div>
      <div className='container mt-4'>
        <h2 className='text-center my-3'>vision and Mission</h2>
        <div className='d-flex justify-content-center align-items-center'>
          <div className='w-50'>
            <h5 className='text-center'>vision</h5>
            <ul>
              <li>Our vision is to foster a high-quality Management and Commerce education that would generate efficient human resources,
                fully conversant with the complexities of the modern business world.</li>
              <li>We aspire to be the leaders in influencing value-based growth which gives a direction to the
                future managers for the development of the society.</li>
              <li>UIM aims to lend its precious contribution in creating students with a high degree of
                productivity and professionalism.</li>
              <li>To give steep growth to students’ career by developing their innate skills and to boost their talent.</li>
            </ul>
          </div>
          <div className='w-50 pb-5 mb-5'>
            <h5 className='text-center'>Mission</h5>
            <ul>
              <li>To nurture leaders who can explore the new avenues of entrepreneurship.</li>
              <li>Our endeavour is to go from strength to strength in the development of multi-disciplinary study programs.</li>
              <li>Our aim is to develop students with a high degree of skills and creativity.</li>
              <li>To promote the research in the field of management, and commerce.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container d-flex justify-content-center align-items-center  p-4'>
        <div className='w-40'>
          <img src={dean}></img>
          <h5 className='text-center'>Prof (Dr) Pradeep Suri</h5>
          <p></p>
        </div>
        <div className='w-60'>
          <h2 className='text-center display-5'>Meet our Dean's</h2>
          <p className='ps-4'><p style={{ "marginBottom": "5px" }}>Learning in Practice </p><p style={{ "marginBottom": "5px" }}>Uttaranchal Institute of Management is a flagship institution of Uttaranchal
            University, carefully crafted to help you expand your leadership skills and professional competencies.
            Our approach to teaching and learning allows you to customize your learning experience in the domain
            of leadership, innovation, negotiation and strategy. By becoming a part of us, you’ll gain vast exposure
            to the rare insight, knowledge, and expertise needed to meet your personal and professional goals.</p>
            We invite students to join our programmes of leadership practice wrapped up in real-world
            challenges under the guidance of a diverse community of faculties and colleagues talented in academia,
            with high moral beliefs, and strong industrial backgrounds. In UIM, you will experience an intense
            period of personal and professional transformation that prepares you to face challenges in any functional
            sphere and any part of the world. Here, each day we try to answer one question: “What will you do?”
            because that’s the truest way to train our students for the larger question of their life that matters most,
            even beyond the campus: “What difference will you make in the world?”<p style={{ "marginTop": "5px" }}>
              Students come and join us for a grand rendezvous to take you places in your life.</p></p>
        </div>
      </div>
      <div className='container p-4' >
        <h2 className='text-center'>Industry-Academic Collaborations</h2>
       <div className='container ps-4 ms-5 mt-4'>
       <AliceCarousel
        mouseTracking
        items={items}
        autoPlay={true}
        autoPlayInterval={1000}
        touchTracking={true}
        infinite={true}
        responsive={responsive}
        controlsStrategy="alternate"
       />
       </div>
      </div>
      <div className='container'>
        <h2 className='text-center'>Our Faculity Members</h2>
        <div className='container mt-3 d-flex justify-content-evenly align-items-center flex-wrap'>
         <Fcard image={dean} name="Dr. Pradeep Suri" position="Dean"/>
         <Fcard image={f1} name="Dr. Sonal Sharma" position="Professor"></Fcard>
         <Fcard image={f2} name="Dr. Rajiv Kumar" position="Associate Professor"></Fcard>
         <Fcard image={f3} name="Dr. Monisha Awasthi" position="Associate Professor"></Fcard>
         <Fcard image={f4} name="Dr. Sunil Shukla" position="Associate Professor"></Fcard>
         {/* <Fcard></Fcard> */}
         {/* fcard */}
         {/* <faculticard />
         <faculticard />
         <faculticard />
         <faculticard /> */}

        </div>
      </div>
      <div className='container p-4' >
        <h2 className='text-center'>Our Top Recruiters</h2>
       <div className='container ps-4 ms-5 mt-4'>
       <AliceCarousel
        mouseTracking
        items={recuiter}
        autoPlay={true}
        autoPlayInterval={2000}
        touchTracking={true}
        infinite={true}
        responsive={responsive}
        controlsStrategy="alternate"
       />
       </div>
    </div>
    </div>
  )
}

