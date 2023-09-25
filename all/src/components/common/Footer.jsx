import * as Route from "@/constants/routes";
import logo from "@/images/logo-full.png";
import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = () => {
  const { pathname } = useLocation();
  const darkMode = useSelector((state) => state.darkMode);
  const array = Object.values(darkMode)
  const darkModelo = array[0]

  const visibleOnlyPath = [Route.HOME, Route.SHOP];

  return !visibleOnlyPath.includes(pathname) ? null : (
    <footer className={`footer ${darkModelo ? 'dark-mode' : ''}`}>
      
      <div className={`footer-col-2 ${darkModelo ? 'dark-mode' : ''}`}>
        <img alt="Footer logo" className={`footer-logo ${darkModelo ? 'dark-mode' : ''}`}  style={darkModelo ? { backgroundColor: 'gray', borderRadius: "50em", width: "300px", height: "300px" } : {}}
        src={logo} />
        <h5>
          &copy;&nbsp;
          {new Date().getFullYear()}
        </h5>
      </div>
      <div className={`footer-col-3 ${darkModelo ? 'dark-mode' : ''}`}>
        <strong>
          <span>
            Fork this project on GitHub &nbsp;
            <a href="https://github.com/Augusto-AI/PF-HENRY-E-commerce">HERE</a>
          </span>
        </strong>
      </div>
    </footer>
  );
};

export default Footer;
