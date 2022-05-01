import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Apply = () => {
  const [applieddata, setapplieddata] = useState([]);
  useEffect(() => {
    let nme = sessionStorage.getItem("loginusername")
    axios.get("http://localhost:5000/getuser-addmissiondata/" + nme).then(resp => setapplieddata(resp.data.res)).catch(err => console.log(err))
  }, [])
  return (
    <div style={{ "height": "470px" }} className="container mt-2">
      <div class="alert alert-secondary fs-3 text-center" role="alert">
        <span className='text-primary'>Applied Status</span>
      </div>

      {applieddata[0]?.name ?
        <div className='container mt-1'>
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">S No.</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact No</th>
                <th scope="col">Country</th>
                <th scope="col">State</th>
                <th scope="col">City</th>
                <th scope="col">Program</th>
                <th scope="col">Apply Status</th>
              </tr>
            </thead>
            <tbody>

              {
                applieddata.map((item, ind) => {
                  return (
                    <tr>
                      <th scope="row">{ind + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.country}</td>
                      <td>{item.state}</td>
                      <td>{item.city}</td>
                      <td>{item.program}</td>
                      <td className={item.statuss === "processing" ? "text-danger" : "text-sucess"}>{item.statuss}</td>
                      {/* <td>{}</td> */}
                    </tr>
                  )
                })
              }


            </tbody>
          </table>
        </div>
        : <div class="alert alert-danger fs-4" role="alert">
          Don't have applied any course yet now...!
        </div>
      }
    </div>
  )
}
