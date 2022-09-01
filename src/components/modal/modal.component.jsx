import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import SlideShow from "../slideshow/SlideShow.component";
import "./modal.style.scss";

function ModalForProduct(props) {
  return (
    <Modal size="lg" {...props} className="modal-content-dsad">
      <div className="close-btn" onClick={props.onHide}>
        <i class="bx bx-x"></i>
      </div>
      <Modal.Body className="show-grid modal-body">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="slideshow">
                <h1>Name</h1>
                <SlideShow />
              </div>
            </Col>
            <Col lg={6}>
              <div className="product-details">
                <h1>DETAILS</h1>
                <span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Itaque veritatis dolores ducimus veniam, atque rerum beatae
                  sint, eum repellendus aliquid obcaecati at error saepe harum
                  distinctio a.
                </span>

                <ul className="sub-list">
                  <li>Created -<span>Lorem ipsum dolor sit amet.</span></li>
                  <li>Role -<span>Lorem ipsum dolor .</span></li>
                  <li>Frontend -<span>CSS, Bootstrap, Javascript</span></li>
                  <li>Backend -<span>Java, Spring Boot, MySQL</span></li>
                  <li>Tags -<span>Tags - git / ui / ux / css / bootstrap / responsive / javascript / web api / web app / food / travel</span></li>
                  <li>Demo -<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, hic.</span></li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}
export default ModalForProduct;
