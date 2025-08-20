import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm open to work and ready for new opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-form">
            <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="1f9b0667-8788-422e-811d-70e34703512a" />
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h3>Contact Information</h3>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>+91 63794 42739</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>amgokult@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>Erode, Tamil Nadu, 638004</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/Gokul-o12" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/gokul-t-5286182a3" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://x.com/GokulTlukoG" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fa-solid fa-x"></i>
              </a>
              <a href="https://www.instagram.com/g0kul73" target="_blank" rel="noopener noreferrer" className="social-link">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}