import React from "react";
import "./portforlio.style.scss";
import { Link } from "react-router-dom";
import Avatar from "../../assets/img/avatar.jpg"
import Header from "../../components/header/header.component";
import ModalForProduct from "../../components/modal/modal.component";
import { useState } from "react";
const Portfolio = () => {
  const [headerData,setheaderData] =useState(
    {
      sub: 'My',
      name: 'Portfolio',
      under: 'works'
    }
  )
   

  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="portfolio-container" data-aos="fade-up" data-aos-duration="2000">
        <Header data={headerData}/>
        <ul className="portfolio-nav-list">
          <li className="portfolio-nav-item">HTML - CSS/JAVASCRIPT</li>
          <li className="portfolio-nav-item">REACT JS</li>
          <li className="portfolio-nav-item">PHP</li>
          <li className="portfolio-nav-item">ANDROID</li>
        </ul>

        <div className="portfolio-content">
          <ModalForProduct show={modalShow} onHide={() => setModalShow(false)}/>

          <div className="portfolio-card" onClick={() => setModalShow(true)}>
            <div
              className="card-wrap"
              style={{
                backgroundImage: `url("${Avatar}")`,
              }}
            ></div>
            <h3>My Product</h3>
          </div>
          <div className="portfolio-card" onClick={() => setModalShow(true)}>
            <div
              className="card-wrap"
              style={{
                backgroundImage: `url("${Avatar}")`,
              }}
            ></div>
            <h3>My Product</h3>
          </div>
          <div className="portfolio-card" onClick={() => setModalShow(true)}>
            <div
              className="card-wrap"
              style={{
                backgroundImage: `url("${Avatar}")`,
              }}
            ></div>
            <h3>My Product</h3>
          </div>
          <div className="portfolio-card" onClick={() => setModalShow(true)}>
            <div
              className="card-wrap"
              style={{
                backgroundImage: `url("${Avatar}")`,
              }}
            ></div>
            <h3>My Product</h3>
          </div>
          <div className="portfolio-card" onClick={() => setModalShow(true)}>
            <div
              className="card-wrap"
              style={{
                backgroundImage: `url("${Avatar}")`,
              }}
            ></div>
            <h3>My Product</h3>
          </div>
          <div className="portfolio-card" onClick={() => setModalShow(true)}>
            <div
              className="card-wrap"
              style={{
                backgroundImage: `url("${Avatar}")`,
              }}
            ></div>
            <h3>My Product</h3>
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default Portfolio;
