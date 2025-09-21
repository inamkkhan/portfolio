import { useState } from 'react';
import './home.css';
import profileImg from '../../assets/newImage.png';
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
                        <span class="white">Software DEVELOPER</span>
                    </h1>

                    <p className="description">
                        Software Developer skilled in ReactJS, React Native, C#, Angular, and Web APIs. Experienced in building responsive, high-performance applications with a focus on user experience.                  </p>
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
