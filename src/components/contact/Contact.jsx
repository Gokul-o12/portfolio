import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <div className="contact-wrapper">
                    <div data-aos="zoom-out-right" className="contact-left">
                        <form
                            action="https://api.web3forms.com/submit"
                            method="POST"
                            className="contact-form"
                        >
                            <div className="contact-left-title">
                                <h2 className="heading">Send <span>Message</span></h2>
                                <hr />
                            </div>

                        
                            <input type="hidden" name="access_key" value="1f9b0667-8788-422e-811d-70e34703512a" />
                            {/* <input type="hidden" name="access_key" value="1f619f42-7854-4a7b-821e-788111b6d6e6" /> */}

                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="contact-inputs"
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="contact-inputs"
                                required
                            />

                            <textarea
                                name="message"
                                placeholder="Your Message"
                                className="contact-inputs"
                                required
                            ></textarea>

                            <button className="btn" type="submit">Send</button>
                           
                        </form>
                    </div>

                    <div data-aos="zoom-out-left" className="contact-right">
                    <div  className="contact-info">
                        <div className="contact-left-title">
                            <h2>Get in <span>Touch</span></h2>
                            <hr />
                        </div>

                        <div className='topspace'>
                        <h6>I am open to work and ready for new opportunities.<br />Feel free to reach out!</h6>
                        <p><i id="get" className="fas fa-phone"></i>+91 63794 42739</p>
                        <p><i id="get" className="fas fa-envelope"></i>amgokult@gmail.com</p>
                        <p><i id="get" className="fas fa-map-marker-alt"></i>Erode, TamilNadu, 638004.</p>
</div>
                        <div className="social-mediac">
                            <a href="https://github.com/Gokul-o12" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/gokul-t-5286182a3" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://x.com/GokulTlukoG?t=cVyqsITWbPvjGv85Qz3kPg&s=08" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-x"></i></a>
                            <a href="https://www.instagram.com/g0kul73/profilecard/?igsh=MXU2OWF1N2J2Nmh0bg==" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
