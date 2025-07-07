// import './About.css';

// export default function About() {
//   return (
//     <section className="about" id="about">
//       <div className="about-content">
//         <div className="about-title">
//           <h2 className="heading">About <span>Me</span></h2>
//           <hr />
//         </div>
//         <p>
//           I am a passionate full-stack developer and a recent B.E. graduate in Computer Science and Engineering.
//           As a fresher, I specialize in creating dynamic, visually appealing, and user-friendly web applications,
//           with a strong focus on both front-end and back-end development.
//           Driven by creativity and a commitment to excellence, I aim to deliver solutions that leave a lasting impact.
//         </p>
//       </div>
//     </section>
//   );
// }












import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">  
      <div className="about-container">
        <div data-aos="flip-left" className="about-left">
          {/* <p>
            I am a passionate full-stack developer and a recent B.E. graduate in
            Computer Science and Engineering. As a fresher, I specialize in
            creating dynamic, visually appealing, and user-friendly web
            applications, with a strong focus on both front-end and back-end
            development. Driven by creativity and a commitment to excellence, I
            aim to deliver solutions that leave a lasting impact.
          </p> */}

            <p>
            I’m a full-stack developer with a strong passion for building seamless, scalable web applications. 
            I enjoy crafting responsive user interfaces and architecting reliable backend systems that deliver real value.<br /><br></br>


            I thrive in collaborative, fast-paced environments where I can contribute to meaningful projects, learn continuously, and grow alongside a motivated team. I’m committed to writing clean,
             maintainable code and always aim to enhance performance, usability, and user experience.<br></br><br></br>


            Whether it's developing new features, debugging complex issues, or improving existing systems 
            — I approach every challenge with energy, focus, and a problem-solving mindset.

          </p>

         

        </div>
        <div data-aos="zoom-in" className="about-right">
          <h1>ABOUT<br />ME</h1>
        </div>
      </div>
    </section>
  );
};

export default About;