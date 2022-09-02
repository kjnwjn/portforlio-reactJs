import React, { useInsertionEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./static.style.scss";
import { NavLink } from "react-router-dom";
import { ThemeProvider } from "react-bootstrap";
import { act } from "react-dom/test-utils";
const Static = () => {
    const [theme,setTheme] = useState(document.body.className)
    const handleSwitchTheme = () =>{
        if(theme === 'light-theme'){
            document.body.className = 'dark-theme'
            setTheme('dark-theme')
        }else{
            document.body.className = 'light-theme'
            setTheme('light-theme')
        }
    }
  return (
  
    <div className="static">
        <Outlet />
      <div>
        <button className="btn-mode" onClick={handleSwitchTheme}>

          {
            theme === 'dark-theme' ?
            <i class="bx bxs-bulb"></i>
            :
            <i class='bx bxs-moon'></i>
          }
        </button>
        <ul className="nav-list" >
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeclassname="active" >
              <h2>HOME</h2>
              <i class="bx bxs-home" ></i>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portforlio" className="nav-link" activeclassname="active">
              <i class="bx bxs-user"></i>
              <h2>portfolio</h2>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeclassname="active">
              <i class="bx bxs-briefcase"></i>
              <h2>about</h2>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" activeclassname="active">
              <i class="bx bxs-envelope-open"></i>
              <h2>contact</h2>
            </NavLink>
          </li>
        </ul>
      </div>
    
    </div>
  );
};

export default Static;
