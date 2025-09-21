import React from "react";
import "./about.css";
import { FaArrowRight, FaBriefcase } from "react-icons/fa";


const About = ({ }) => {
  return (
    <div className="about-bg">
      <div className="title-section text-start text-sm-center">
        <h1 >ABOUT <span>ME</span></h1>
        <span className='title-bg'>Resume</span>
      </div>

      <section className="main-content">
        <div className="container">
          
          <div className="row">

            <div className="col-xl-6 col-lg-5 col-12">
              <div className="row">
                <div className="col-12">
                  <h3 className="text-uppercase custom-title text-white mb-0 ft-wt-600">Personal Infos</h3>
                </div>

                <div className="col-12 d-block d-sm-none"></div>
                <div className="col-12">
                  <ul className="about-list list-unstyled opensans-font">
                    <li className="mb-2">
                      <span className="text-secondary fw-normal me-1">First Name:</span>
                      <span className="detail fw-semibold d-inline-block">Inam</span>
                    </li>
                    <li className="mb-2">
                      <span className="text-secondary fw-normal me-1">Last Name:</span>
                      <span className="detail fw-semibold d-inline-block">Khan</span>
                    </li>
                    <li className="mb-2">
                      <span className="text-secondary fw-normal me-1">Age:</span>
                      <span className="detail fw-semibold d-inline-block">27 Years</span>
                    </li>
                    <li className="mb-2">
                      <span className="text-secondary fw-normal me-1">Nationality:</span>
                      <span className="detail fw-semibold d-inline-block">Pakistani</span>
                    </li>
                    <li className="mb-2">
                      <span className="text-secondary fw-normal me-1">Freelance :</span>
                      <span className="text-success fw-semibold d-inline-block">Available</span>
                    </li>
                    <li className="mb-2">
                      <span className="text-secondary fw-normal me-1">Address:</span>
                      <span className="detail fw-semibold d-inline-block">Pakistan</span>
                    </li>
                    <li className="mb-2">
                      <span className="text-secondary fw-normal me-1">Phone:</span>
                      <span className="detail fw-semibold d-inline-block">+923142394383</span>
                    </li>
                    <li className="mb-2">
                      <span className="text-secondary fw-normal me-1">Email:</span>
                      <span className="detail fw-semibold d-inline-block">inamkkhan03@gmail.com</span>
                    </li>
                    <li className="mb-2">
                      <span className="text-secondary fw-normal me-1">Linkedin:</span>
                      <span className="detail fw-semibold d-inline-block"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/inam-ullah-6684621b6/"> Inam Ullah</a></span>
                    </li>
                    <li className="mb-2">
                      <span className="text-secondary fw-normal me-1">Languages:</span>
                      <span className="detail fw-semibold d-inline-block">English, Urdu</span>
                    </li>
                      <a
                        href="/Inam Cv.pdf"
                        download="Inam-Khan-CV.pdf"
                        className="cta-button"
                      >
                        Download CV <span className="arrow"><FaArrowRight /></span>
                      </a>
                  </ul>
                </div>
                <div className="col-12 mt-1"></div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
              <div className="row">
                <div className="col-6">
                  <div className="box-stats with-margin">
                    <h3 className="box-heading poppins-font position-relative">2+</h3>
                    <p className="open-sans-font m-0 position-relative">Years of
                      <span className="d-block">Experience</span>
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="box-stats with-margin">
                    <h3 className="box-heading poppins-font position-relative">5+</h3>
                    <p className="open-sans-font m-0 position-relative">Completed
                      <span className="d-block">Projects</span>
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="box-stats with-margin">
                    <h3 className="box-heading poppins-font position-relative">1+</h3>
                    <p className="open-sans-font m-0 position-relative">Years of
                      <span className="d-block">Freelancing</span>
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="box-stats with-margin">
                    <h3 className="box-heading poppins-font position-relative">100%</h3>
                    <p className="open-sans-font m-0 position-relative">Client
                      <span className="d-block">Satisfaction</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <hr className="separator" />

          <div className="row">
            <div className="col-12">
              <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-6--">My Skills</h3>
            </div>

            {/* Repeat this block for each skill */}
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className="circle-wrap">
                <div className="circle">
                  <div className="mask full">
                    <div className="fill"></div>
                  </div>
                  <div className="mask half">
                    <div className="fill"></div>
                  </div>
                  <div className="inside-circle">90%</div>
                </div>
              </div>
              <h6 className="skills-text text-uppercase text-center mt-2 mt-sm-4">HTML</h6>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className="circle-wrap">
                <div className="circle">
                  <div className="mask full">
                    <div className="fill"></div>
                  </div>
                  <div className="mask half">
                    <div className="fill"></div>
                  </div>
                  <div className="inside-circle">50%</div>
                </div>
              </div>
              <h6 className="skills-text text-uppercase text-center mt-2 mt-sm-4">Javascript</h6>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className="circle-wrap">
                <div className="circle">
                  <div className="mask full">
                    <div className="fill"></div>
                  </div>
                  <div className="mask half">
                    <div className="fill"></div>
                  </div>
                  <div className="inside-circle">90%</div>
                </div>
              </div>
              <h6 className="skills-text text-uppercase text-center mt-2 mt-sm-4">CSS</h6>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className="circle-wrap">
                <div className="circle">
                  <div className="mask full">
                    <div className="fill"></div>
                  </div>
                  <div className="mask half">
                    <div className="fill"></div>
                  </div>
                  <div className="inside-circle">75%</div>
                </div>
              </div>
              <h6 className="skills-text text-uppercase text-center mt-2 mt-sm-4">React</h6>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className="circle-wrap">
                <div className="circle">
                  <div className="mask full">
                    <div className="fill"></div>
                  </div>
                  <div className="mask half">
                    <div className="fill"></div>
                  </div>
                  <div className="inside-circle">80%</div>
                </div>
              </div>
              <h6 className="skills-text text-uppercase text-center mt-2 mt-sm-4">React Ntive</h6>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-sm-5">
              <div className="circle-wrap">
                <div className="circle">
                  <div className="mask full">
                    <div className="fill"></div>
                  </div>
                  <div className="mask half">
                    <div className="fill"></div>
                  </div>
                  <div className="inside-circle">25%</div>
                </div>
              </div>
              <h6 className="skills-text text-uppercase text-center mt-2 mt-sm-4">c#</h6>
            </div>
          </div>

          <hr className="separator mt-1" />

          <div className="row">
            <div className="col-12">
              <h3 className="text-uppercase pb-5 mb-0 text-start text-sm-center custom-title ft-wt-600">
                Experience & Education
              </h3>
            </div>

            {/* Left Column */}
            <div className="col-lg-6 m-15px-tb">
              <div className="resume-box">
                <ul>
                  <li>
                    <span className="resume-icon"><i className=""><FaBriefcase /></i></span>
                    <span className="time">Dec 23 - 2025</span>
                    <h5 className="text-uppercase">
                      Front-end Developer <span className="place">SysCrowd</span>
                    </h5>
                    <p>Designed and developed scalable web and mobile applications using
                      ReactJS and React Native.<br />
                      Optimized JavaScript/TypeScript code to improve application
                      performance and load times.<br />
                      Integrated third-party APIs and ensured cross-device compatibility
                      with responsive UI designs.</p>
                  </li>
                  <li>
                    <span className="resume-icon"><i className=""><FaBriefcase /></i></span>
                    <span className="time">2022 - May 23</span>
                    <h5 className="text-uppercase">
                      Front-End Developer <span className="place">Objectual System Limited</span>
                    </h5>
                    <p>Developed mobile applications for both Android and iOS using React
                      Native.<br />
                      Collaborated with design and backend teams to create seamless user
                      interfaces and experiences.</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6 m-15px-tb">
              <div className="resume-box">
                <ul>
                  <li>
                    <span className="resume-icon"><i className=""><FaBriefcase /></i></span>
                    <span className="time">2022</span>
                    <h5 className="text-uppercase">
                      Software Engineering <span className="place">Ilma University</span>
                    </h5>
                    <p>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit</p>
                  </li>
                  <li>
                    <span className="resume-icon"><i className=""><FaBriefcase /></i></span>
                    <span className="time">2017</span>
                    <h5 className="text-uppercase">
                      Commerce <span className="place">Karachi Board</span>
                    </h5>
                    <p>Lorem incididunt dolor sit amet, consectetur eiusmod dunt doludnt dol elit, tempor incididunt</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default About;