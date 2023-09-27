import React from 'react';
import './about.css';
import githubLogo from './assets/github.png';
import linkedinLogo from './assets/linkedin.png';
import engin from './assets/engin.jpg';
import gabo from "./assets/gabo.jpg"
import agusto from "./assets/agusto.jpg"
import dany from "./assets/danny.jpg"
import Jonny from "./assets/jonney.jpg"
import alejandro from './assets/alejandro.jpg'
import alan from "./assets/alan.jpg"
import { useSelector } from 'react-redux';
const About = () => {
  const darkMode = useSelector((state) => state.darkMode);
  
  const array = Object.values(darkMode)
  const darkModelo = array[0]
  return (
    <div className={`about-us ${darkModelo ? 'dark-mode-about-us' : ''}`}>
      <div className="profile">
        <h2 className="fullstack" style={darkModelo ? {color: "white"} : {}}>Full Stack Web Developer</h2>
        <img src={engin} alt="Hasan Engin Kubat" />
        <h2 style={darkModelo ? {color: "white"} : {}}>Hasan Engin Kubat</h2>
        <a  className="social-links" href="https://github.com/hasanenginkubat" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a className="social-links"href="https://www.linkedin.com/in/hasan-engin-kubat-621173255/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
      </div>
      <div className={`profile ${darkModelo ? 'dark-mode-profile' : ''}`}>
        <h2 className="fullstack" style={darkModelo ? {color: "white"} : {}}>Full Stack Web Developer</h2>
        <img src={agusto} alt="Hasan Engin Kubat" />
        <h2 style={darkModelo ? {color: "white"} : {}}>Agusto Herrera</h2>
        <a  className="social-links" href="https://github.com/Augusto-AI" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a className="social-links"href="https://www.linkedin.com/in/augusto-herrera-velasquez-36679060/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
      </div>
      <div className="profile">
        <h2 className="fullstack" style={darkModelo ? {color: "white"} : {}}>Full Stack Web Developer</h2>
        <img src={dany} alt="Hasan Engin Kubat" />
        <h2 style={darkModelo ? {color: "white"} : {}}>Jose Daniel Lopez Galindo</h2>
        <a  className="social-links" href="https://github.com/Danylopgali" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a className="social-links"href="https://www.linkedin.com/in/jose-daniel-l%C3%B3pez-galindo-a4b858242" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
      </div>
      <div className="profile">
        <h2 className="fullstack" style={darkModelo ? {color: "white"} : {}}>Full Stack Web Developer</h2>
        <img src={Jonny} alt="Hasan Engin Kubat" />
        <h2 style={darkModelo ? {color: "white"} : {}}>Jonny Daney Sierra Vergara</h2>
        <a  className="social-links" href="https://github.com/daneysierra" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a className="social-links"href="https://www.linkedin.com/in/jonny-daney-sierra-vergara-819359143" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
      </div>
      <div className="profile">
        <h2 className="fullstack" style={darkModelo ? {color: "white"} : {}}>Full Stack Web Developer</h2>
        <img src={gabo} alt="Hasan Engin Kubat" />
        <h2 style={darkModelo ? {color: "white"} : {}}>Gabriel Yopasa Angulo</h2>
        <a  className="social-links" href="https://github.com/GaboYopasa" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a className="social-links"href="https://co.linkedin.com/in/gabriel-yopasa-angulo-208665265" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
      </div>
      <div className="profile">
        <h2 className="fullstack" style={darkModelo ? {color: "white"} : {}} >Full Stack Web Developer</h2>
        <img src={alejandro} alt="Hasan Engin Kubat" />
        <h2 style={darkModelo ? {color: "white"} : {}} >Alejandro Garcia</h2>
        <a  className="social-links" href="https://github.com/sabinux" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a className="social-links"href="https://www.linkedin.com/in/alejandro-garcia-6179b9260/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
      </div>
      <div className="left" >
      <div className="profile">
        <h2 className="fullstack" style={darkModelo ? {color: "white"} : {}}>Full Stack Web Developer</h2>
        <img src={alan} alt="Hasan Engin Kubat" />
        <h2 style={darkModelo ? {color: "white"} : {}}>Alan Zalazar</h2>
        <a  className="social-links" href="https://github.com/AlanZalazar" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" />
        </a>
        <a className="social-links"href="https://www.linkedin.com/in/alan-zalazar-36495a258/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" />
        </a>
      </div>
      </div>
    
      
      </div>
      
      
      
  );
};

export default About;
