import React from "react";
import './blog.css';
import BlogImage from '../../assets/book-open-pages-close-up-600nw-2562942291.jpg'

const Blog = ({ }) => {
    return (
        <div className="portfolio-bg">
            <div className="title-section text-start text-sm-center aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200" >
                <h1>My <span>Blog</span></h1>
                <span className="title-bg">Posts</span>
            </div>

            <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-duration="1200">
                <div className="row pb-50">
                    <div className="row" id="modal">
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-3">
                            <article className="post-container h-100">
                                <div className="post-thumb">
                                    <div className="d-block position-relative overflow-hidden">
                                        <img className="img-fluid" alt="item-title" src={BlogImage} />
                                    </div>
                                </div>
                                <div className="post-content d-flex flex-column justify-content-between h-100">
                                    <div className="entry-header">
                                        <h3>How to Own Your Audience by Creating an Email List</h3>
                                    </div>
                                    <div className="entry-content">
                                        <p>Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-3">
                            <article className="post-container h-100">
                                <div className="post-thumb">
                                    <div className="d-block position-relative overflow-hidden">
                                        <img className="img-fluid" alt="item-title" src={BlogImage} />
                                    </div>
                                </div>
                                <div className="post-content d-flex flex-column justify-content-between h-100">
                                    <div className="entry-header">
                                        <h3>Top 10 Toolkits for Deep Learning in 2022</h3>
                                    </div>
                                    <div className="entry-content">
                                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut e</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-3">
                            <article className="post-container h-100">
                                <div className="post-thumb">
                                    <div className="d-block position-relative overflow-hidden">
                                        <img className="img-fluid" alt="item-title" src={BlogImage} />
                                    </div>
                                </div>
                                <div className="post-content d-flex flex-column justify-content-between h-100">
                                    <div className="entry-header">
                                        <h3>Everything You Need to Know About Web Accessibility</h3>
                                    </div>
                                    <div className="entry-content">
                                        <p>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-3">
                            <article className="post-container h-100">
                                <div className="post-thumb">
                                    <div className="d-block position-relative overflow-hidden">
                                        <img className="img-fluid" alt="item-title" src={BlogImage} />
                                    </div>
                                </div>
                                <div className="post-content d-flex flex-column justify-content-between h-100">
                                    <div className="entry-header">
                                        <h3>How to Inject Humor & Comedy Into Your Brand</h3>
                                    </div>
                                    <div className="entry-content">
                                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-3">
                            <article className="post-container h-100">
                                <div className="post-thumb">
                                    <div className="d-block position-relative overflow-hidden">
                                        <img className="img-fluid" alt="item-title" src={BlogImage} />
                                    </div>
                                </div>
                                <div className="post-content d-flex flex-column justify-content-between h-100">
                                    <div className="entry-header">
                                        <h3>Women in Web Design: How To Achieve Success</h3>
                                    </div>
                                    <div className="entry-content">
                                        <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4 mb-3">
                            <article className="post-container h-100">
                                <div className="post-thumb">
                                    <div className="d-block position-relative overflow-hidden">
                                        <img className="img-fluid" alt="item-title" src={BlogImage} />
                                    </div>
                                </div>
                                <div className="post-content d-flex flex-column justify-content-between h-100">
                                    <div className="entry-header">
                                        <h3>Evergreen versus topical content: An overview</h3>
                                    </div>
                                    <div className="entry-content">
                                        <p>Still ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog;