import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">get in touch</h2>
          <p className="section-subtitle">
            i'm open to work and ready for new opportunities. feel free to reach out!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-form">
            <form action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="1f9b0667-8788-422e-811d-70e34703512a" />
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="your awesome name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="let's build something amazing together..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <span>🚀</span>
                send message
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h3>contact information</h3>
            
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact-details">
                <h4>phone</h4>
                <p>+91 63794 42739</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h4>email</h4>
                <p>amgokult@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="contact-details">
                <h4>location</h4>
                <p>erode, tamil nadu, 638004</p>
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