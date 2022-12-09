import React from "react";
import "./home.style.scss";
import Avatar from "../../assets/img/avatar.jpg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="app-container" > 
                <div className="bg-secondary" ></div>

                <div className="bg-secondary-mobie"></div>
                <div className="image-personal" 
                    data-aos="fade-up"
                    data-aos-duration="2000">
                    <img className="avatar" src={Avatar} alt="123" />
                </div>
                <div className="content"
                        data-aos="fade-up"
                        data-aos-duration="2000">
                    <h1 className="title"> I'm Pham Nguyen Hoang Quan Web Developer !</h1>
                    <p className="sub-content">
                        I'm Quân Web Developer ! Hello mọi người! Mình là Quân, đang là sinh viên năm 4 trường đại học Tôn Đức Thắng - TPHCM. Cơ duyên mình đến
                        với IT là nhờ các sự tích "IT là vua của các nghề", hay câu chuyện "thằng em học BK cơ khí sinh năm 96". Tháng 5/2021, tình cờ biết đến
                        cộng đồng F8 Fullstack của anh Sơn, mình đã hoàn thành các khóa học HTML, CSS, ReactJS và có được một số dự án cá nhân. Trải qua nhiều
                        cay đắng, thật sự cảm ơn anh Sơn cũng như cộng đồng anh em đóng góp đã truyền động lực cho mình suốt thời gian qua giúp mình không bỏ
                        cuộc.
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
