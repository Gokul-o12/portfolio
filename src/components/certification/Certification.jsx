import React, { useState } from 'react';
import './Certification.css';
import certificates from './certificatesData';

export default function Certification() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % certificates.length);
  const prev = () => setCurrent((prev) => (prev - 1 + certificates.length) % certificates.length);
  const goToSlide = (index) => setCurrent(index);

  const { image, quote } = certificates[current];

  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>
        
        <div className="certification-slider">
          <div className="certification-card">
            <div className="certification-image-container">
              <img 
                src={image} 
                alt="Certificate" 
                className="certification-image"
              />
            </div>
            <p className="certification-quote">"{quote}"</p>
            
            <div className="certification-controls">
              <button className="control-btn" onClick={prev}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="control-btn" onClick={next}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            
            <div className="certification-indicators">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === current ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}