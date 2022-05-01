import { RiBankFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const BcaCyber = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="alert alert-primary fs-3" role="alert">
                BCA (Cyber Security) in association with CompTIA
            </div>
            <div className="p-3">
                <p style={{ "color": "teal", "textAlign": "justify" }}>Cyber security is the practice of protecting computers,
                    servers, electronic systems, networks, mobiles as well as data from malicious attacks. It involves protecting software,
                    hardware, as well as user’s data. It also helps prevent cybercriminals from gaining access to various devices connected
                    through networks. It also trains how to monitor systems and networks for intrusions. In view of that Uttaranchal
                    University offers BCA – Cyber Security, a three-year undergraduate program designed to fulfil the requirements of the
                    IT industries.
                </p>
                <p style={{ "color": "teal", "textAlign": "justify" }}>
                    BCA- cyber security program focuses on providing relevant skills to establish sample collection techniques from
                    different sources that help students to profile threat actors. The program includes courses like Fundamentals of Cyber
                    Security, Risk Management, Law of Cyber Security, Security Professional Ethics, Principles of Information System
                    Security, Paradigm of Ethical Hacking, Information System Security Planning and Audits, Python programming, etc
                </p>
            </div>
            <div className="p-3">
                <h6>Career Prospects:</h6>
                <p style={{ "color": "teal", "textAlign": "justify" }}>
                    BCA – Cyber Security, program focuses on skills development in Cyber Security, Paradigm of Ethical Hacking and other related concepts. As per the industry stats, some of the popular cyber security related job profiles are Information Security Analyst, Risk Analyst, Cyber Security Analyst, Trainer, Support Engineer, and Network Security Engineer. After completing BCA-Cyber Security, students are also eligible for higher education in the related or specialised field of computer application.
                </p>
            </div>
            <div className="p-3">
                <h6><span style={{ "fontSize": "25px" }}><RiBankFill></RiBankFill></span> More About Uttaranchal School of Computing Sciences</h6>
            </div>
            <div>
                <div>
                    <div className="d-flex justify-content-center align-items-center border">
                        <div className="text-center border border-dark pt-4" style={{ "width": "20%", "height": "100px" }}>Programme Duration:</div>
                        <div className="text-center border border-dark pt-4" style={{ "width": "80%", "height": "100px" }}>3 Years</div>
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
                        <div className="text-center border border-dark pt-4" style={{ "width": "80%", "height": "100px" }}> <a href="https://drive.google.com/file/d/1XAkbdhRmX-J3QW_egf2rzBG3HP7bWES7/view?usp=sharing">Click Here</a></div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center border border-dark">
                        <div className="text-center border border-dark pt-4" style={{ "width": "20%", "height": "100px" }}>Programme Structure:</div>
                        <div className="text-center border border-dark pt-4" style={{ "width": "80%", "height": "100px" }}><a href="https://drive.google.com/file/d/1GzicP58EQYcreLpY1_l6u-iA62Cxh7tg/view?usp=sharing">Click Here</a></div>
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
                <button type="button" class="btn btn-primary btn-lg btn-block w-100" onClick={() => navigate("course/Bca-cyber", { replace: true })}>Apply</button>
            </div>
        </div>
    )
}