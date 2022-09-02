import React from "react";
import Header from "../../components/header/header.component";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SkillImage from '../../assets/img/skill/html.png'
import "./about.style.scss";
const About = () => {
  const [headerData, setheaderData] = useState({
    sub: "About",
    name: "Me",
    under: "Recuse",
  });
  return (
    <>
      <div className="about-container" data-aos="fade-up" data-aos-duration="2000">
        <Header data={headerData} />
        <Container>
          <Row>
            <Col lg={6} data-aos="fade-up-right" data-aos-duration="2000" className="mb-5">
              <div className="info">
                <h3>personal infos</h3>
                <ul className="info-list">
                  <li className="info-item">
                    <span>Name:</span> Kai
                  </li>
                  <li className="info-item">
                    <span>Birthday:</span> 22
                  </li>
                  <li className="info-item">
                    <span>National:</span> VietNam
                  </li>
                  <li className="info-item">
                    <span>Phone:</span> 0399551xxx
                  </li>
                  <li className="info-item">
                    <span>Language:</span> English
                  </li>
                  <li className="info-item">
                    <span>Sex:</span> Kai
                  </li>
                  <li className="info-item">
                    <span>Address:</span> TPHCM
                  </li>
                  <li className="info-item">
                    <span>Facebook:</span>{" "}
                    https://www.facebook.com/
                    profile.php?id=100008555771164
                  </li>
                </ul>
              </div>
              <div className="cv-block">
                <button className="btn btn-lg cv-btn">Download Cv</button>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-up-left" data-aos-duration="2000">
              <div className="experience">
                    <div className="experience-item">
                        <h3>1</h3>
                        <i class='bx bx-plus-medical'></i>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <div className="experience-item">
                        <h3>1</h3>
                        <i class='bx bx-plus-medical'></i>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <div className="experience-item">
                        <h3>1</h3>
                        <i class='bx bx-plus-medical'></i>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <div className="experience-item">
                        <h3>1</h3>
                        <i class='bx bx-plus-medical'></i>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
              </div>
            </Col>
          </Row>
          <hr>
          </hr>
          <Row>
            <Col className="skill-container">
              <h3  data-aos-duration="1000" data-aos="fade-up">My Skills</h3>
              <div class="skill-list">
                  <div class="skill-item-wrap" data-aos-duration="1000" data-aos="fade-up">
                    <div class="skill-item__img">
                        <div class="skill-item__img-wrap" style={{backgroundImage: `url("${SkillImage}")`}}>
                        </div>
                    </div>
                    <div class="skill-item-name">
                      <h6>
                        HTML
                      </h6>
                    </div>
                </div>
                <div class="skill-item-wrap" data-aos-duration="1000" data-aos="fade-up">
                    <div class="skill-item__img">
                        <div class="skill-item__img-wrap" style={{backgroundImage: `url("${SkillImage}")`}}>
                        </div>
                    </div>
                    <div class="skill-item-name">
                      <h6>
                        HTML
                      </h6>
                    </div>
                </div>
                <div class="skill-item-wrap" data-aos-duration="1000" data-aos="fade-up">
                    <div class="skill-item__img">
                        <div class="skill-item__img-wrap" style={{backgroundImage: `url("${SkillImage}")`}}>
                        </div>
                    </div>
                    <div class="skill-item-name">
                      <h6>
                        HTML
                      </h6>
                    </div>
                </div>
                <div class="skill-item-wrap" data-aos-duration="1000" data-aos="fade-up">
                    <div class="skill-item__img">
                        <div class="skill-item__img-wrap" style={{backgroundImage: `url("${SkillImage}")`}}>
                        </div>
                    </div>
                    <div class="skill-item-name">
                      <h6>
                        HTML
                      </h6>
                    </div>
                </div>
                <div class="skill-item-wrap" data-aos-duration="1000" data-aos="fade-up">
                    <div class="skill-item__img">
                        <div class="skill-item__img-wrap" style={{backgroundImage: `url("${SkillImage}")`}}>
                        </div>
                    </div>
                    <div class="skill-item-name">
                      <h6>
                        HTML
                      </h6>
                    </div>
                </div>
              </div>
            </Col>
          </Row>
          <hr>
          </hr>
          <Row className="resume">
            <Col className="mb-3">
              <h3 className ="resume__heading" data-aos="fade-up" data-aos-duration="2000">EDUCATION & EXPERIENCE</h3>
              
            </Col>
            <Row>
              <Col md={12} lg={6} >
                <div className="resume__item" data-aos="fade-right" data-aos-duration="1000">
                  <div className="resume__icon">
                    <i class='bx bxs-briefcase'></i>
                    
                  </div>
                  <span className="resume__time">
                    2018
                  </span>
                  <h3 className="resume__place">DAK SONG <span>HIGH SCHOOL</span></h3>
                  <p className="resume__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
                <div className="resume__item" data-aos="fade-right" data-aos-duration="1000">
                    <div className="resume__icon">
                      <i class='bx bxs-briefcase'></i>
                      
                    </div>
                    <span className="resume__time">
                      2018
                    </span>
                    <h3 className="resume__place">DAK SONG <span>HIGH SCHOOL</span></h3>
                    <p className="resume__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                  </div>
                
              </Col>
              <Col md={12} lg={6} >
                <div className="resume__item" data-aos="fade-left" data-aos-duration="1000">
                    <div className="resume__icon">
                      <i class='bx bxs-briefcase'></i>
                      
                    </div>
                    <span className="resume__time">
                      2018
                    </span>
                    <h3 className="resume__place">DAK SONG <span>HIGH SCHOOL</span></h3>
                    <p className="resume__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                  </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default About;
