import React from 'react';
import './Certification.css';
import certificates from './certificatesData';

export default function Certification() {
  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>
        
        <div className="certifications-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-image-container">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="certification-image"
                />
                <div className="certification-overlay">
                  <a href="#" className="view-certificate">
                    View Certificate
                  </a>
                </div>
              </div>
              
              <div className="certification-content">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-description">{cert.description}</p>
                <span className="certification-provider">{cert.provider}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}