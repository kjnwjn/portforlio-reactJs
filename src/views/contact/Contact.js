import React from "react";
import Header from "../../components/header/header.component";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import{Link} from "react-router-dom"
import "./contact.style.scss";

const Contact = () => {
    const [headerData, setheaderData] = useState({
        sub: "Get in",
        name: "touch",
        under: "Contact",
      });

    return (
        <>
            <Header data={headerData}/>
            <Container className="contact-container">
                <Row>
                    <Col lg={4}>
                        <div className="contact-info">
                            <h3 className="contact-title">Don't be shy!</h3>
                            <p  className="contact-description">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                            <ul className="contact-list">
                                <li className="contact-item">
                                    <div className="contact-item__icon">
                                        <i className="bx bxs-map"></i>
                                    </div>
                                    <span>address</span> HCM/VN
                                </li>
                                <li className="contact-item">
                                    <div className="contact-item__icon">
                                        <i className="bx bxs-envelope-open"></i>
                                    </div>
                                    <span>EMAIL</span> kjnwjnpham@gmail.com
                                </li>
                                <li className="contact-item">
                                    <div className="contact-item__icon">
                                        <i className="bx bxs-phone-call"></i>
                                    </div>
                                    <span>phone</span> 0399551xxx
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <form className="contact-form">
                            <div className="contact-form-info">
                                <div className="contact-form-info__name">
                                    <input type="text"   placeholder="Name"></input>
                                </div>
                                <div className="contact-form-info__email">
                                    <input type="email"   placeholder="Email"></input>
                                </div>
                            </div>
                            <div className="contact-form-info__subject">
                                <input type="text"   placeholder="Subject"></input>
                            </div>
                            <div className="contact-form-info__more">
                                <textarea type="text"   ></textarea>
                            </div>
                            <div className="contact-form-submit">
                                <button className="contact-form-submit-btn">
                                    <i className="bx bx-mail-send tata"></i>Send Message
                                </button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
           
        </>
    )
}

export default Contact