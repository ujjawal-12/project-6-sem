import React from 'react'
import { Chart } from '../../public/chart'
import {compimage, crcimage} from "../home/importimg"

export const Placement = () => {
  return (
    <div className='container-fluid mt-5'>
      <div className='container my-2'>
        <h3 className='my-3' style={{color:"teal"}}>About Corporate Resource Cell (CRC)</h3>
        <p style={{"textAlign":"justify"}}><b>The Corporate Resource Cell (CRC)</b>is engaged in career services and catering 
          students of the University and assisting them in every stage of their career,
          thus making it the resource centre of Uttaranchal University Placement. The 
          Corporate Resource Cell is always there as a friend, philosopher and guide 
          students about opting the right course or specialization, orientation, arranging 
          internships/industrial training’s and final getting them placed in top notch 
          organisations. With the aim to expand the professional horizon of the students 
          the Cell invites Guest Lectures of eminent speakers from industry and academia. 
          CRC is also engaged in organizing various academic activities like Workshops, 
          Seminars and Conferences with a vision to deliver knowledge about latest trends 
          and technology. All the activities undertaken by the CRC directly impacts Uttaranchal
           University Placement.<br/>
           Our team strives hard to achieve milestones leading to record <b>Utta                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ranchal University Placement.</b>
        </p>
      </div>
      <div className='container'>
        <p className='text-start' style={{"fontSize":"35px" ,"fontWeight":"normal","color":"teal"}}>
          Corporate Resource Cell - Responsibilities</p>
      </div>
      <div className='container'>
        <ul style={{"listStyle":"circle"}}>
          <li>Arrange various programmes to enhance the technical and professional skills 
            required to get through the recruitment process.
          </li>
          <li>
          Arrange Industrial Tours and Training’s/Internships.
          </li>
          <li>
          Facilitate frequent counselling sessions of the students in regards to skill 
          enhancement and career growth.
          </li>
          <li>
          Engage in constant interaction with top notch corporate houses for the placement 
          of the graduating batch.
          </li>
          <li>
            To form an alliance with the corporate world with the objective of exploring placement possibilities and facilitating student-industry-academia.
          </li>
        </ul>
      </div>
      <div className='mt-4 container'>
        <p style={{"textAlign":"justify"}}>Thus, managing academia-industry interface is the pre-eminent responsibility 
          of the cell. The CRC hones the skills of the students by holding events like
          pre-placement talks, group discussions and PI sessions and make them ready to 
          perform their best in placement drives. The Cell also provides opportunities to
          the students, after due consultation with the concerned department, and makes 
          them work on live projects in order to prepare the right fit for the industry. 
          CRC is a result driven cell which is continuously involved in delivering positive
          results and fulfilling the expectations of the students and stakeholders. We at 
          CRC, Uttaranchal University strive to achieve the best year after year.</p>
      </div>
      <div className='mt-3 container'>
        <p className='text-start' style={{"fontSize":"35px" ,"fontWeight":"normal",color:"teal"}}>
          Some Of Our Top Recuiters</p>
      <div className='mt-3 d-flex flex-wrap container'>
        {
           compimage.map((item,ind)=>{return <Comp key={ind} path={item}></Comp>})
        }
      </div>
      </div>
      <div className='container mt-5 '>
        <h3 style={{"fontSize":"35px" ,"fontWeight":"normal",color:"teal"}}>let's see how our college placement growing yearly</h3>
         <div className='d-flex justify-content-center align-items-center mt-4'>
           <div className='text-center ' style={{"width":"50vw"}}>
           <Chart></Chart></div>
         </div>
      </div>
      <div className='container'>
       <p style={{"fontSize":"35px" ,"fontWeight":"normal",color:"teal"}}>Our Team's</p>
       <div>
         <p>Uttaranchal University is constantly striving to equip its students with the 
           competencies to become work –ready, face all challenges, develop their all round 
           personality and make them aware of their untapped potential. For this purpose 
           exhaustive training is provided in the areas of communication, aptitude, reasoning
           and soft skills to mould them to meet the global standards.<p>
           Our team strives hard to achieve milestones leading to record Uttaranchal University Placement.
           </p>
         </p>
       </div>
      </div>
      <div>
        {
          crcimage.map((item,ind)=>{
            return (
              <Crccard key={ind} path={item.image} name={item.name} position={item.pos} details={item.det}/>
            )
          })
        }
      </div>
    </div>
  )
}

function Comp({path}){
  return (
    <div>
      <img src={path}></img>
    </div>
  )
}

function Crccard({path,name,position,details}){
return(
  <div className='container p-2 d-flex justify-content-around align-items-center my-3 border border-secondary rounded'>
    <div className='w-30'>
      <img src={path}></img>
    </div>
    <div className='w-50'>
      <p>{name}</p>
      <p>{position}</p>
      <p>{details}</p>
    </div>
  </div>
)
}