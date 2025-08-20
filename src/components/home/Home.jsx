import React from 'react';
import './Home.css';
import Lap from '../../assets/images/lapbg.png';

export default function Home() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello! I am</p>
          <h1 className="hero-name">Gokul T</h1>
          <h2 className="hero-title">Passionate Fullstack Developer</h2>
          <p className="hero-description">
            I'm a full-stack developer with a strong passion for building seamless, scalable web applications. 
            I enjoy crafting responsive user interfaces and architecting reliable backend systems that deliver real value.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn">View My Work</a>
            <a href="/Gokul.T Resume.pdf" download className="btn btn-outline">Download CV</a>
          </div>
          
          <div className="social-links">
            <a href="https://www.linkedin.com/in/gokul-t-5286182a3" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/Gokul-o12" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://x.com/GokulTlukoG" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fa-solid fa-x"></i>
            </a>
            <a href="https://www.instagram.com/g0kul73" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <img src={Lap} alt="Gokul T" className="hero-avatar" />
        </div>
      </div>
    </section>
  );
}