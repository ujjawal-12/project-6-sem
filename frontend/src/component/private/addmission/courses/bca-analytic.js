import { RiBankFill } from "react-icons/ri";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

export const BcaAnalytic = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="alert alert-primary fs-3" role="alert">
                BCA with specialization in Data Analytics
            </div>
            <div className="p-3">
                <p style={{ "color": "teal", "textAlign": "justify" }}>Data analytics is used to analyse the raw data into knowledge so that it can provide insights to make better decisions.  The data moves through four stages: Ingest Prepare, Analysis, and Action. Data Analytics find applications across a range of areas, such as, decision making, planning for healthcare industry, market research, banking, etc. There is a huge demand for data analytics expert and in view of that Uttaranchal University offers BCA – Data Analytics, a three-year undergraduate program designed to fulfil the requirements of the IT industries.
                </p>
                <p style={{ "color": "teal", "textAlign": "justify" }}>
                    The program BCA-Data analytics includes courses like Python Programming, R Programming, SAS, Data Science Tools, Computer Based Optimization Techniques, Machine Learning Theory, Big Data Analytics, Probability Statistics and Techniques, Data Warehouse and Data Mining.
                </p>
                <p style={{ "color": "teal", "textAlign": "justify" }}>
                    In order to enhance programming skills of the young IT professionals, Program curriculum has introduced the concept of project development in each language/technology learnt during semester. This ensures the experiential learning through practical exposure. From time to time, Guest Lectures/ Workshops are conducted to provide in-depth knowledge about latest technologies. Beyond the curriculum, students are also offered multiple value-added courses, ability enhancement courses and skill enhancement courses.
                </p>
            </div>
            <div className="p-3">
                <h6>Career Prospects:</h6>
                <p style={{ "color": "teal", "textAlign": "justify" }}>
                    BCA-Data Analytics, program focuses on hands on skills in Python programming, R programming, statistical analysis of data, concepts of machine learning and big data analytics and mainly focuses on building expertise in data analysis concepts. As per the industry stats, here are some of the popular Data Analyst related job profiles like Software Engineer, Data Analyst, Senior Software Engineer, Data Scientist, Software Developer, Business Analyst, Health Care Analyst, Big Data Analyst, Predictive Modeler, Quantitative Analyst, Market Research Analyst, Computer Systems Analyst and IT Data Analyst. After completing BCA-Data Analytics, students are also eligible for higher education in the related or specialised field of computer application.
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
                        <div className="text-center border border-dark pt-4" style={{ "width": "80%", "height": "100px" }}><a href="https://drive.google.com/file/d/12fZaC-JokDm0b202Wx8GmVdPjvLT-2ya/view?usp=sharing"> Click Here</a></div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center border border-dark">
                        <div className="text-center border border-dark pt-4" style={{ "width": "20%", "height": "100px" }}>Programme Structure:</div>
                        <div className="text-center border border-dark pt-4" style={{ "width": "80%", "height": "100px" }}><a href="https://drive.google.com/file/d/1JLtceYoPRnUpxJ-CW6DINjJbPSgNWdeB/view?usp=sharing">Click Here</a></div>
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
                <button type="button" class="btn btn-primary btn-lg btn-block w-100" onClick={() => navigate("course/Bca-analytic", { replace: true })}>Apply</button>
            </div>
        </div>
    )
}