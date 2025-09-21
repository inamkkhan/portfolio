import { useState } from 'react';
import './home.css';
import profileImg from '../../assets/16ffad1e5cf7fcae5fe2d1365356282e-removebg-preview.png';
import { FaArrowRight } from "react-icons/fa6";
import AboutModal from '../../components/Modal/AboutModal';

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="home">
            <div className="yellow-bg"></div>
            <div className="home-inner">
                {/* Left: Profile Image */}
                <div className="home-left">
                    <img src={profileImg} alt="Profile" className="profile-img" />
                </div>

                {/* Center: Text Content */}
                <div className="home-center">
                    <h1 class="heading">
                        <span class="highlight">— I'M INAM KHAN.</span><br />
                        <span class="white">FRONT-END DEVELOPER</span>
                    </h1>

                    <p className="description">
                        Dedicated Frontend Developer with expertise in ReactJS, React Native,
                        and modern web technologies. Skilled in creating responsive, user-friendly
                        applications, and optimizing performance. Passionate about delivering
                        impactful solutions and enhancing user experience.                    </p>
                    <div>
                        {/* CTA Button */}
                        {/* <button className="cta-button" onClick={() => setShowModal(true)}>
                            MORE ABOUT ME <span className="arrow"><FaArrowRight /></span>
                        </button> */}

                        {/* Modal */}
                        {showModal && <AboutModal onClose={() => setShowModal(false)} />}
                    </div>
                </div>

            </div>
        </section>

    );
};

export default Home;
