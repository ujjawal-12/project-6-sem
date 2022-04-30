import { RiBankFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const BscHonsResearch = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="alert alert-primary" role="alert">
                B.Sc.(Hons.) in Computer Science with research
            </div>
            <div className="p-3">
                <p style={{ "color": "teal", "textAlign": "justify" }}>
                    Computer Science offers the students a platform to explore the practical and theoretical knowledge of computation, program design, programming, computer hardware and software as well as integrates with other fields of science and engineering. Courses in the field of Computer science are being offered in other domains like Agriculture, Life Sciences, Pharmaceuticals, etc.
                </p>
                <p style={{ "color": "teal", "textAlign": "justify" }}>
                    Various technologies are heavily influencing the modern digital era. Completing your 10+2 education in the scientific stream and having a natural passion to innovate, experiment, and explore in the digital realm might lead to enrolment in B.Sc. Computer Science with research. Program provides all of the research oriented skills and knowledge needed to succeed and technological business. The program focuses on both practical and theoretical computer hardware and software skills with research intentions. It emphasizes the fundamentals of computer programming and networking while covering a wide range of subjects.
                </p>
                <p style={{ "color": "teal", "textAlign": "justify" }}>
                    Teaching – learning pedagogy of the program put greater emphasis on the laboratory sessions to ensure hands on experience of various programming languages, software development, data analysis through statistical techniques, computer hardware and software design and development.
                </p>
                <p style={{ "color": "teal", "textAlign": "justify" }}>
                    In addition, technical workshops, seminars, guest lectures by industry experts and academicians, industrial visits are some of the unique features embedded in the curriculum of the program.   In the 4th year, students are given ample opportunity to do research and publish manuscript in the field of computer application.
                </p>
            </div>
            <div className="p-3">
                <h6>Career Prospects:</h6>
                <p style={{ "color": "teal", "textAlign": "justify" }}>
                    After successful completion of the program, students can explore their career as Software developers, Computer engineers, Data Analyst, Systems analysts, Hardware technocrats, IT consultants, System designers, IT specialists, Networking Engineers, System Engineers, Database Administrators, Web Developers  and other domains roles are mend for computer science professionals.
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
                <button type="button" class="btn btn-primary btn-lg btn-block w-100" onClick={() => navigate("course/Bsc-hons-research", { replace: true })}>Apply</button>
            </div>
        </div>
    )
}