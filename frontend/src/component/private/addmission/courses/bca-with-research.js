import { RiBankFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const BcaWithResearch = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                Bachelor of Computer Application (BCA) with Research
            </div>
            <div className="p-3">
                <p style={{ "color": "teal", "textAlign": "justify" }}>The demand for computer professionals is expanding on a daily basis as the information
                    technology industry continues to grow at an exponential rate. The rising growth of the information
                    technology industry has provided a plethora of job prospects for computer graduates. The field offers
                    numerous opportunities to students who are interested in the computer area and wish to pursue a career
                    in the IT sector as a programmer or software developer. In view of above, Uttaranchal University offers
                    BCA a three-year undergraduate program designed to fulfil the requirements of the IT industries.
                </p>
                <p style={{ "color": "teal", "textAlign": "justify" }}>
                    BCA with research is a 4 years undergraduate program that not only includes courses like Computer Network, Cloud
                    Computing, Web Technologies, Computer Based Optimization Techniques, Theory of Computation, Enterprise Resource
                    Planning, Digital Image Processing, and Programming using Python etc but also provides an opportunity to do research
                    in the field of computer application.
                </p>
                <p style={{ "color": "teal", "textAlign": "justify" }}>
                    The curriculum has established the concept of project development in each language/technology learned during the
                    semester in order to improve the programming skills. This ensures experiential learning through practical exposure.
                    From time to time, Guest Lectures/ Workshops are conducted to provide in-depth knowledge about latest technologies
                    in the field of computer application. Beyond the curriculum, students are also offered multiple value-added courses,
                    ability enhancement courses and skill enhancement courses. In the 4th year, students are given ample opportunity to
                    do research and publish manuscript in the field of computer application
                </p>
            </div>
            <div className="p-3">
                <h6>Exit options:</h6>
                <p style={{ "color": "teal", "textAlign": "justify" }}>
                    As per new education policy NEP -2020, exit option is give to students in the 6th semester and for those students
                    enrolled in BCA with research can exit after 6th semester with BCA degree. Intimation to university authority about
                    the exit option should be given by the student in 5th semester only so that he / she can exit the program BCA with
                    research in the 6th semester while opting exit pathway designed for the same.
                </p>
            </div>
            <div className="p-3">
                <h6>Career Prospects:</h6>
                <p style={{ "color": "teal", "textAlign": "justify" }}>
                    BCA program focuses on skills development in various software applications and other related concepts As per the
                    industry stats, here are some of the popular job profiles like Web Developer, Support Service Specialist, Software
                    Trainer, Software Developer, Technical Support, System Analyst, Technical Support and Network Engineer. After
                    completing BCA students are also eligible for higher education in the computer application.
                </p>
            </div>
            <div className="p-3">
                <h6><span style={{ "fontSize": "25px" }}><RiBankFill></RiBankFill></span> More About Uttaranchal School of Computing Sciences</h6>
            </div>
            <div>
                <div>
                    <div className="d-flex justify-content-center align-items-center border">
                        <div className="text-center border border-dark pt-4" style={{ "width": "20%", "height": "100px" }}>Programme Duration:</div>
                        <div className="text-center border border-dark pt-4" style={{ "width": "80%", "height": "100px" }}>4 Years</div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center border border-dark">
                        <div className="text-center border border-dark pt-4" style={{ "width": "20%", "height": "100px" }}>Eligibility:</div>
                        <div className="text-center border border-dark " style={{ "width": "80%", "height": "100px" }}>
                            <ul style={{ "listStyle": "circle" }}>
                                <li>Passed Senior Secondary Examination (10+2) from a recognized Board of School Education or equivalent.</li>
                                <li>Minimum 45% marks for general and 40% marks for SC/ST category.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center border border-dark">
                        <div className="text-center border border-dark pt-4" style={{ "width": "20%", "height": "100px" }}>Fee Structure:</div>
                        <div className="text-center border border-dark pt-4" style={{ "width": "80%", "height": "100px" }}> Click Here</div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center border border-dark">
                        <div className="text-center border border-dark pt-4" style={{ "width": "20%", "height": "100px" }}>Programme Structure:</div>
                        <div className="text-center border border-dark pt-4" style={{ "width": "80%", "height": "100px" }}>Click Here</div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center border border-dark">
                        <div className="text-center border border-dark pt-4" style={{ "width": "20%", "height": "140px" }}>Admission Procedure:</div>
                        <div className="text-center border border-dark" style={{ "width": "80%", "height": "140px" }}>
                            <ul style={{ "listStyle": "circle" }}>
                                <li>
                                    Admission is based on merit computed on the basis of marks secured in qualifying examination. University also conducts interviews of all applicants before admitting the eligible candidates.
                                </li>
                                <li>
                                    Out of the total intake, 40% seats are allotted to students of Uttarakhand under the State Quota and the rest are open to students from All India. In case the allotted percentage of seats of State Quota remains vacant, it will be filled by All India students.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-3">
                <button type="button" class="btn btn-primary btn-lg btn-block w-100" onClick={() => navigate("course/Bca-research", { replace: true })}>Apply</button>
            </div>
        </div>
    )
}