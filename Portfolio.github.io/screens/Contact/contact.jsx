import React from "react";
import './contact.css';
import { FaEnvelopeOpen, FaFacebook, FaLinkedin, FaMap, FaTwitter } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = ({ }) => {
    return (
        <div className="contact-bg">

            <div className="title-section text-start text-sm-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200" >
                <h1>get in <span>touch</span></h1>
                <span className="title-bg">contact</span>
            </div>


            {/* <Body></Body> */}
            <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <h3 className="text-uppercase custom-title mb-0  pb-3">Don't be shy !</h3>
                        <p className="contact-paragraph mb-4">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                        <p className=" custom-span-contact position-relative">
                            <i className="map position-absolute"><FaMap /></i>
                            <span className="d-block">Address Point</span>
                            District Malir Karachi City, Islamic Republic Of Pakistan 75120.
                        </p>
                        <p className="custom-span-contact position-relative">
                            <i className="map position-absolute"><FaEnvelopeOpen /></i>
                            <span className="d-block">mail me</span>
                            <a href="Tell:+923142394383">inamkkhan03@gmail.com</a>
                        </p>
                        <p className="custom-span-contact position-relative">
                            <i className="map position-absolute"><FaSquarePhone /></i>
                            <span className="d-block">Call Me</span>
                            <a href="mailto:inamkkhan03@gmail.com">+923142394383</a>
                        </p>
                        <ul className="social list-unstyled pt-1 mb-5">
                            <li>
                                <a href="https://www.linkedin.com/in/inam-ullah-6684621b6/"><i className="fa"><FaLinkedin /></i></a>
                            </li>
                            <li>
                                <a href="//x.com"><i className="fa"><FaTwitter /></i></a>
                            </li>
                            <li>
                                <a href="//www.facebook.com/"><i className="fa"><FaFacebook /></i></a>
                            </li>
                            <li>
                                <a ><i className="fa"></i></a>
                            </li>
                        </ul>
                    </div>

                    {/* <form></form> */}
                    <div className="col-12 col-lg-8">
                        <form className="contact-form">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="name" placeholder="YOUR NAME" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="YOUR EMAIL" required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <input type="text" name="subject" placeholder="YOUR SUBJECT" required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <textarea name="message" placeholder="YOUR MESSAGE" rows="6" required></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="button" type="submit">
                                        Send Message <span className="button-icon"><RiSendPlaneFill /></span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default Contact;