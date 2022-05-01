import axios from 'axios';
import React, { useEffect, useState } from 'react'
const Registeredstudent = () => {
    const [applieddata, setapplieddata] = useState([]);
    useEffect(() => {
        let nme = sessionStorage.getItem("loginusername")
        axios.get("http://localhost:5000/getuser-addmissiondata/").then(resp => { console.log(resp); setapplieddata(resp.data.res) }).catch(err => console.log(err))
    }, [])

    return (
        <div style={{ "height": "440px" }} className="container mt-2">
            <div class="alert alert-success fs-3 text-center" role="alert">
                <span className='text-dark'>Student Applied for Course</span>
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
                                    if (item.statuss === "Approved") {
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
                                                <td className="text-success">{item.statuss}</td>
                                                {/* <td>{}</td> */}
                                            </tr>
                                        )
                                    }
                                    // else {
                                    //     return (
                                    //         <div class="alert alert-info fs-3 text-center" role="alert">
                                    //             <span className='text-dark'>No any student Approved for Addmission</span>
                                    //         </div>
                                    //     )
                                    // }
                                })
                            }
                        </tbody>
                    </table>
                </div> :
                <div>
                    <div class="alert alert-info fs-3 text-center" role="alert">
                        <span className='text-dark'>No any student registered in any course yet now..!!</span>
                    </div>
                </div>
            }
        </div>

    )
}

export default Registeredstudent;