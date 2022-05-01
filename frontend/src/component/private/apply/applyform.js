import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState, useMemo, useEffect } from 'react'
import countryList from 'react-select-country-list'
import Select from 'react-select'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { useParams } from 'react-router-dom'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// useState

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

const optionss = [
    { value: 'Bca', label: 'Bca 3 years program' },
    { value: 'Bca-cyber', label: 'Bca with Cyber security' },
    { value: 'Bca-research', label: 'Bca with research' },
    { value: 'Bca-analytic', label: 'Bca analytic' },
    { value: 'Bsc-it', label: 'Bsc Information Technology' },
    { value: 'Bsc-research', label: 'Bsc it with Research' },
    { value: 'Bsc-hons', label: 'Bsc Hons computer Science' },
    { value: 'Bsc-hons-research', label: 'Bsc Hons research Science' },
];

const initialstate = {
    username: sessionStorage.getItem("loginusername"),
    name: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    program: "",
    statuss: "processing"
}

export const Applyform = () => {

    const [formdata, setformdata] = useState(initialstate)
    const { cousename } = useParams();
    // const options = useMemo(() => countryList().getData(), [])

    // const [value, setValue] = useState()
    // const [country, selectCountry] = useState()
    // const [region, selectRegion] = useState()
    // const [program, setprogram] = useState("")
    // const changeHandler = () => { console.log("hrl") }

    useEffect(() => {
        if (cousename) {
            setformdata({ ...formdata, program: cousename });
        }
    }, [cousename])
    // console.log(coursename);
    // const selectCountry = () => { console.log("hrl") }
    // const selectRegion = () => { console.log("hrl") }
    const submitdata = (e) => {
        e.preventDefault();
        let dd = sessionStorage.getItem("loginusername")
        let data = formdata;
        data.username = dd
        console.log(data)

        if (formdata.name && formdata.email && formdata.phone && formdata.state && formdata.country && formdata.city && formdata.program) {
            if (Number(formdata.phone.length) === 13) {
                axios.post("http://localhost:5000/user-addmission", data).then(res => {
                    notifysuccess("Applied Successfully")
                    setformdata(initialstate)
                }
                ).catch(err => console.log(err.message));
            }
        }
        else {
            notifywarn("response.data.err");
        }
    }

    return (
        <div className="container mt-4">
            <h4 className="text-center">Online Registration Open 2022-2023!!</h4>
            <div class="alert alert-danger" role="alert">
                Important Instructions
            </div>
            <div class="alert alert-info" role="alert">
                <ul style={{ "listStyle": "circle" }}>
                    <li>
                        Fill your complete details in "Registration Form".
                    </li>
                    <li>
                        A confirmation mail will be sent to you on your e-mail id along with your course.
                    </li>
                    <li>
                        Then Your request send to Admin to verify user along with course.
                    </li>
                    <li>
                        Then after Your Registration process.
                    </li>
                </ul>
            </div>
            <div className=" d-flex justify-content-center my-4">
                <div className="border border-secondary p-5 d-flex justify-content-center align-items-center flex-column" style={{ "height": "500px", "width": "auto", "borderRadius": "20px" }}>
                    <form onSubmit={submitdata}>
                        <div className='m-3'>
                            <label style={{ "fontSize": "22px" }}>Name :
                                <input
                                    type="text"
                                    placeholder="Enter Full Name"
                                    name="username"
                                    value={formdata.name}
                                    onChange={(e) => { setformdata({ ...formdata, name: e.target.value }) }}
                                ></input>
                            </label>
                        </div>
                        <div className='m-3'>
                            <label style={{ "fontSize": "22px" }}> Email ID :
                                <input
                                    type="email"
                                    placeholder="Enter Your Mail Id"
                                    name="email"
                                    value={formdata.email}
                                    onChange={(e) => setformdata({ ...formdata, email: e.target.value })}
                                ></input>
                            </label>
                        </div>
                        <div className='m-3'>
                            <label style={{ "fontSize": "22px" }}>
                                <PhoneInput
                                    placeholder="Enter phone number"
                                    value={formdata.phone}
                                    onChange={(e) => setformdata({ ...formdata, phone: e })}
                                />
                            </label>
                        </div>
                        <div className='m-3'>
                            <label style={{ "fontSize": "22px" }}> Country :
                                <CountryDropdown
                                    value={formdata.country}
                                    onChange={(val) => setformdata({ ...formdata, country: val })} />
                            </label>
                        </div>
                        <div className='m-3'>
                            <label style={{ "fontSize": "22px" }}>State :
                                <RegionDropdown
                                    country={formdata.country}
                                    value={formdata.state}
                                    placeholder="select state"
                                    onChange={(val) => setformdata({ ...formdata, state: val })} />
                            </label>
                        </div>
                        <div className='m-3'>
                            <label style={{ "fontSize": "22px" }}>City :
                                <input
                                    value={formdata.city}
                                    placeholder="Enter City Name"
                                    onChange={(val) => setformdata({ ...formdata, city: val.target.value })}
                                />
                            </label>
                        </div>
                        <div className='m-3'>
                            <label style={{ "fontSize": "22px" }}>
                                Program <Select
                                    value={formdata.program}
                                    onChange={(e) => { setformdata({ ...formdata, program: e.value }) }}
                                    options={optionss}
                                />
                            </label> <span class="badge bg-success" style={{ "fontSize": "25px" }}>{formdata.program}</span>
                        </div>
                        <div className='text-center'>
                            <button type='submit' className='btn btn-primary p-2 w-100' style={{ "fontSize": "20px" }}>submit</button>
                        </div>
                        <ToastContainer />
                        {/* <input type="submit" className='btn-primary'>Submit</input> */}
                    </form>
                </div>
            </div>

        </div>
    )
}