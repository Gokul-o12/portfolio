import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey and educational background that shaped my expertise
          </p>
        </div>

        <div className="experience-grid">
          <div className="experience-card">
            <div className="experience-header">
              <img
                src="https://res.cloudinary.com/dx5lg8mei/image/upload/v1744960831/WhatsApp_Image_2025-04-17_at_17.20.51_025badf0_gm7rgc.png"
                alt="Sholas Technologies"
                className="company-logo"
              />
              <div className="experience-info">
                <h3>Sholas Technologies Private Limited</h3>
                <p className="job-title">Full Stack Developer</p>
                <span className="experience-duration">October 2024 – Present</span>
              </div>
            </div>
            
            <div className="experience-description">
              <ul className="experience-points">
                <li>Developed full-stack features using React and Spring Boot</li>
                <li>Improved performance of backend APIs by 30%</li>
                <li>Integrated Camunda workflows for business automation</li>
                <li>Collaborated with cross-functional teams to deliver high-quality solutions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="education-section">
          <div className="education-header">
            <h3 className="education-title">Education</h3>
          </div>
          
          <div className="education-grid">
            <div className="education-card">
              <h4>Bachelor of Computer Science and Engineering</h4>
              <p>Nandha College of Technology - Anna University</p>
              <p><strong>CGPA:</strong> 8.0/10</p>
              <span className="education-year">2020 - 2024</span>
            </div>
            
            <div className="education-card">
              <h4>Higher Secondary Certificate (HSC)</h4>
              <p>Government Boys Higher Secondary School</p>
              <p><strong>Percentage:</strong> 59%</p>
              <span className="education-year">2020</span>
            </div>
            
            <div className="education-card">
              <h4>Secondary School Leaving Certificate (SSLC)</h4>
              <p>Government Boys Higher Secondary School</p>
              <p><strong>Percentage:</strong> 64%</p>
              <span className="education-year">2018</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;