import React from "react";
import './portfolio.css';
import LogoImage from "../../assets/images.jpg"

const Portfolio = ({ }) => {
    return (
        <div className="portfolio-bg">
            <div className="title-section text-start text-sm-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200" >
                <h1>My <span>Portfolio</span></h1>
                <span className="title-bg">works</span>
            </div>

            <div className="portfolio-main">
                <div className="react-tabs">
                    <ul className="portfolio-tab-list aos-init aos-animate" data-aos="fade-up">
                        <li>ALL</li>
                        <li>LOGO</li>
                        <li>VIDEO</li>
                        <li>GRAPHIC DESIGN</li>
                        <li>MOCUP</li>
                    </ul>

                    <div className="container">
                        <div className="portfolio-grid">
                            <div className="portfolio-item">
                                <img src={LogoImage} alt="img1" />
                            </div>
                            <div className="portfolio-item">
                                <img src={LogoImage} alt="img1" />
                            </div>
                            <div className="portfolio-item">
                                <img src={LogoImage} alt="img1" />
                            </div>
                            <div className="portfolio-item">
                                <img src={LogoImage} alt="img1" />
                            </div>
                            <div className="portfolio-item">
                                <img src={LogoImage} alt="img1" />
                            </div>
                            <div className="portfolio-item">
                                <img src={LogoImage} alt="img1" />
                            </div>
                            <div className="portfolio-item">
                                <img src={LogoImage} alt="img1" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Portfolio;