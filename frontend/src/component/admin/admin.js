import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsCheckCircleFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const Admin = () => {
    const [applieddata, setapplieddata] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/getuser-addmissiondata/").then(resp => { setapplieddata(resp.data.res) }).catch(err => console.log(err))
    }, [])

    const approvedbutton = (name) => {
        console.log(name)
        axios.patch("http://localhost:5000/getuser-update/" + name).then(resp => { console.log(resp.data.res); setapplieddata(resp.data.res); }).catch(err => console.log(err));

    }

    const deletebutton = (name) => {
        axios.delete("http://localhost:5000/getuser-delete/" + name).then(resp => { console.log(resp); setapplieddata(resp.data.res) }).catch(err => console.log(err))
    }

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
                                    if (item.statuss === "processing") {
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
                                                <td className={item.statuss === "processing" ? "text-danger" : "text-sucess"}>{item.statuss}&#160;&#160; <span className='text-success fs-4'>
                                                    <button type="button" id='correct' class="btn btn-light text-success fs-5  border border-success" data-bs-toggle="tooltip" data-bs-placement="top" title="Approved"
                                                        onClick={() => { approvedbutton(item.name) }}>
                                                        <BsCheckCircleFill></BsCheckCircleFill>
                                                    </button>&#160; &#160; </span><span className='text-danger fs-5'>
                                                        <button type="button" class="btn btn-light text-danger fs-5 border border-danger" data-bs-toggle="tooltip" data-bs-placement="top" title="Delete"
                                                            onClick={() => { deletebutton(item.name) }}>
                                                            <AiFillDelete></AiFillDelete>
                                                        </button>
                                                    </span></td>
                                                {/* <td>{}</td> */}
                                            </tr>
                                        )
                                    }
                                    // else {
                                    //     return (
                                    //         <div class="alert alert-info fs-3 text-center container mt-4" role="alert">
                                    //             <span className='text-dark'>No any student registered ..</span>
                                    //         </div>
                                    //     )
                                    // }
                                })
                            }
                        </tbody>
                    </table>
                </div> :
                <div className='container mt-2'>
                    <div class="alert alert-info fs-3 text-center " role="alert">
                        <span className='text-dark'>No any student registered in any course yet now..!!</span>
                    </div>
                </div>
            }
        </div>

    )
}

export default Admin