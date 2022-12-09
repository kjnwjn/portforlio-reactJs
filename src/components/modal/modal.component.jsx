import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import SlideShow from "../slideshow/SlideShow.component";
import "./modal.style.scss";
import { Link } from "react-router-dom";
import androifile from './app-debug.apk'

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
                <h1>{props.data.name}</h1>
                <SlideShow data={props.data.image}/>
              </div>
            </Col>
            <Col lg={6}>
              <div className="product-details">
                <h1>DETAILS</h1>
                <span>
                  {props.data.desc}
                </span>

                <ul className="sub-list">
                  <li>Created -<span>{props.data.created}</span></li>
                  <li>Role -<span>{props.data.role}</span></li>
                  <li>Frontend -<span>{props.data.fontEnd}</span></li>
                  <li>Backend -<span>{props.data.backEnd ? props.data.backend : ""}</span></li>
                  <li>Tags -<span>{props.data.tags ? props.data.tags : ""}</span></li>
                  <li>Git -<a href={props.data.git ? props.data.git : ""} target="_blank" rel="noopener noreferrer">Click here</a></li>
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
