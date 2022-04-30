import { RiBankFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const Bscresearch = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                Bachelor of Science with specialization in Information Technology with Research
            </div>
            <div className="p-3">
                <p style={{ "color": "teal", "textAlign": "justify" }}>Information Technology (IT) is crucial in all types of businesses, including small, medium, and large ones (multinational). Employees and entrepreneurs alike are now expected to have an understanding of IT. Information technology jobs comprise the design, development, administration, and maintenance of a system’s many components, such as software, hardware, networks, systems integration, and multimedia. B.Sc. (IT) graduates are always in high demand and in view of that Uttaranchal University offers B. Sc IT, a four-year undergraduate program designed to fulfil the requirements of the IT industries.
                </p>
                <p style={{ "color": "teal", "textAlign": "justify" }}>
                    B.SC. (IT) with research program includes courses like Programming using Python, Advance PHP, Advance JAVA, Android App Development, Cyber Security, Data Warehouse and Data Mining, Enterprise Resource Planning, Digital Marketing, Computer Graphics and Animation, Design and Analysis of Algorithm.
                </p>
                <p style={{ "color": "teal", "textAlign": "justify" }}>
                    In order to enhance programming skills of the young IT professionals, program curriculum introduced the concept of project development in each language/technology learnt during semester duration. This ensures the experiential learning through practical exposure. From time to time, Guest Lectures/ Workshops are conducted to provide the in-depth knowledge about latest technologies. Beyond the curriculum, students are also offered multiple value-added courses, ability and skill enhancement courses.
                </p>
                <p style={{ "color": "teal", "textAlign": "justify" }}>
                    In the 4th year, students are given ample opportunity to do research and publish manuscript in the field of computer application.
                </p>
            </div>
            <div className="p-3">
                <h6>Career Prospects:</h6>
                <p style={{ "color": "teal", "textAlign": "justify" }}>
                    B.Sc.(IT) with research program is meant for the students who wish to acquire research oriented skills in computers, computers applications and Information Technology. The students are also trained with latest technologies used for web designing, handling big data and animation. As per the industry stats, here are some of the popular job profiles for B.Sc(IT) graduates viz., Business Analyst, Big Data Analyst, Market Research Analyst, Software Engineer, Data Analyst, Software Developer, Computer Systems Analyst, Cyber Security Analyst, and Network Security Engineer. After completing B. Sc.(IT) with research, students are also eligible for higher education in the related or specialised field of information technology.
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
                <button type="button" class="btn btn-primary btn-lg btn-block w-100" onClick={() => navigate("course/Bsc-research", { replace: true })}>Apply</button>
            </div>
        </div>
    )
}