import React from 'react';
import './Experience.css';
import educationImg from '../../assets/images/ed-im.png';



const Experience = () => {
  return (
    <div className="experience-wrapper">
      {/* === EDUCATION SECTION === */}
      <section className="education" id="experiences">
        <h2 data-aos="fade-up" className="education-title">Education</h2>
        <div className="education-flex">
          <div data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="education-image">
            <img src={educationImg} alt="Education" />
          </div>

         {/* <div  className="education-image">
            <img src="/src/assets/images/ed-gif.gif" alt="Education Animation" />
          </div> */}

          <div className="education-content" data-aos="fade-up">
  <ul className="education-list">
    <li className="education-item" data-aos="fade-up" data-aos-delay="100">
      <h3>Bachelor of Computer Science and Engineering - 80%</h3>
      <p>
        Nandha College of Technology - Anna University<br />
        <span>2020 - 2024</span>
      </p>
    </li>
    <li className="education-item" data-aos="fade-up" data-aos-delay="200">
      <h3>HSC - 59%</h3>
      <p>
        Government Boys Higher Secondary School<br />
        <span>2020</span>
      </p>
    </li>
    <li className="education-item" data-aos="fade-up" data-aos-delay="300">
      <h3>SSLC - 64%</h3>
      <p>
        Government Boys Higher Secondary School<br />
        <span>2018</span>
      </p>
    </li>
  </ul>
</div>

        </div>
      </section>
    </div>
  );
};

export default Experience;
