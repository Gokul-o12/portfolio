import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my background, skills, and what drives me as a developer
          </p>
        </div>
        
        <div className="about-grid">
          <div className="about-content">
            <p className="about-text">
              I'm a full-stack developer with a strong passion for building seamless, scalable web applications. 
              I enjoy crafting responsive user interfaces and architecting reliable backend systems that deliver real value.
            </p>
            <p className="about-text">
              I thrive in collaborative, fast-paced environments where I can contribute to meaningful projects, learn continuously, and grow alongside a motivated team. I'm committed to writing clean,
              maintainable code and always aim to enhance performance, usability, and user experience.
            </p>
            <p className="about-text">
              Whether it's developing new features, debugging complex issues, or improving existing systems 
              — I approach every challenge with energy, focus, and a problem-solving mindset.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Certifications</span>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div style={{
              width: '100%',
              maxWidth: '400px',
              height: '400px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.2rem',
              fontWeight: '600'
            }}>
              Professional Photo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;