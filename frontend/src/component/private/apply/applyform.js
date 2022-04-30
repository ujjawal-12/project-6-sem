import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState, useMemo } from 'react'
import countryList from 'react-select-country-list'
import Select from 'react-select'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { useParams } from 'react-router-dom'
// useState
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

export const Applyform = () => {
    const [value, setValue] = useState()
    const [country, selectCountry] = useState()
    const [region, selectRegion] = useState()
    const [program, setprogram] = useState("")
    const { coursename } = useParams();
    const options = useMemo(() => countryList().getData(), [])
    const changeHandler = () => { console.log("hrl") }
    // const selectCountry = () => { console.log("hrl") }
    // const selectRegion = () => { console.log("hrl") }
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
                    <form>
                        <div className='m-3'>
                            <label style={{ "fontSize": "22px" }}>Name :
                                <input
                                    type="text"
                                    placeholder="Enter Full Name"
                                    name="username"
                                // value={ }
                                // onChange={ }
                                ></input>
                            </label>
                        </div>
                        <div className='m-3'>
                            <label style={{ "fontSize": "22px" }}> Email ID :
                                <input
                                    type="email"
                                    placeholder="Enter Your Mail Id"
                                    name="email"
                                // value={ }
                                // onChange={ }
                                ></input>
                            </label>
                        </div>
                        <div className='m-3'>
                            <label style={{ "fontSize": "22px" }}>
                                <PhoneInput
                                    placeholder="Enter phone number"
                                    value={value}
                                    onChange={setValue}
                                />
                            </label>
                        </div>
                        <div className='m-3'>
                            <label style={{ "fontSize": "22px" }}> Country :
                                <CountryDropdown
                                    value={country}

                                    onChange={(val) => selectCountry(val)} />
                            </label>
                        </div>
                        <div className='m-3'>
                            <label style={{ "fontSize": "22px" }}>State :
                                <RegionDropdown
                                    country={country}
                                    value={region}
                                    placeholder="select state"
                                    onChange={(val) => selectRegion(val)} />
                            </label>
                        </div>
                        <div className='m-3'>
                            <label style={{ "fontSize": "22px" }}>City :
                                <input
                                    value={region}
                                    placeholder="Enter City Name"
                                    onChange={(val) => selectRegion(val)}
                                />
                            </label>
                        </div>
                        <div className='m-3'>
                            <label style={{ "fontSize": "22px" }}>
                                Program <Select
                                    value={program}
                                    onChange={(e) => { setprogram(e.value) }}
                                    options={optionss}
                                />
                            </label>
                        </div>
                        <div className='text-center'>
                            <button type='submit' className='btn btn-primary p-2 w-100' style={{ "fontSize": "20px" }}>submit</button>
                        </div>
                        {/* <input type="submit" className='btn-primary'>Submit</input> */}
                    </form>
                </div>
            </div>

        </div>
    )
}