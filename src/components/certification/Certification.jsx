import React, { useState } from 'react';
import './Certification.css';
import certificates from './certificatesData';

export default function Certification() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % certificates.length);
  const prev = () => setCurrent((prev) => (prev - 1 + certificates.length) % certificates.length);

  const { image, quote } = certificates[current];

  return (
    <section className="certification-section" id="certifications">
      <h2 data-aos="fade-up" className="certification-heading">Certifications</h2>
      
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="certification-card">

        <div className="cert-image-container">
          <img src={image} alt="certificate" className="cert-image" />
        </div>

        <div className="cert-content">
          <p className="cert-quote">“{quote}”</p>
          {/* <p className="cert-author">— {author}</p> */}

          <div className="cert-buttons">
            <button className="cert-btn" onClick={prev}>&larr;</button>
            <button className="cert-btn" onClick={next}>&rarr;</button>
          </div>
          
        </div>

      </div>
    </section>
  );
}
