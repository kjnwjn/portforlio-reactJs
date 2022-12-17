import React from "react";
import "./home.style.scss";
import Avatar from "../../assets/img/avatar.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <>
            <Helmet>
                <meta property="og:title" content="Phạm Nguyễn Hoàng Quân" />
                <meta property="og:description" content="My Portfolio" />
                <meta property="og:image" content="https://upload.wikimedia.org/wikipedia/vi/b/b0/Avatar-Teaser-Poster.jpg" />
                <meta property="og:image:type" content="image/jpg"></meta>
            </Helmet>
            <div className="app-container">
                <div className="bg-secondary"></div>

                <div className="bg-secondary-mobie"></div>
                <div className="image-personal" data-aos="fade-up" data-aos-duration="2000">
                    <img className="avatar" src={Avatar} alt="123" />
                </div>
                <div className="content" data-aos="fade-up" data-aos-duration="2000">
                    <h1 className="title"> I'm Pham Nguyen Hoang Quan Web Developer !</h1>
                    <p className="sub-content">
                        I'm looking for a challenging Intern position to harden my knowledge and skills and become a professional programmer, develop awesome
                        applications for customers, and help the company grow quickly.
                    </p>
                    <div className="list-btn">
                        <button>
                            <Link to="/portfolio">
                                <h4>portfolio</h4>
                            </Link>
                        </button>
                        <button>
                            <Link to="/about">
                                <h4>about</h4>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
