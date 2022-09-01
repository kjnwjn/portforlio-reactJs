import React from "react";
import { Link } from "react-router-dom";
import './header.style.scss'

const Header = (props) => {
  return (
    <>
      <div className="page-heading">
        <h1>
          <span>{props.data.sub}</span> {props.data.name}
        </h1>
        <span className="portforlio-bg-title">{props.data.under}</span>
      </div>
    </>
  );
};

export default Header;
