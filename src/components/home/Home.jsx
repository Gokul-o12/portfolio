import './Home.css';
import Myimg from '../../assets/images/Myimg.png';
import Lap from '../../assets/images/lapbg.png'

export default function Home() {
  return (
    <section className="home" id="home">

      {/* <div className="home-img">
        <img src={Myimg} alt="Gokul" />
      </div> */}


        
      <div className="home-img">
        <img src={Lap} alt="Gokul" />
      </div>

      <div  className="home-content">
        <h3>Hello! I am</h3>
        <h1>Gokul T</h1>
        {/* <h3 className=''>I am a <span>Fullstack Developer</span></h3> */}
        <h3 className=''>Passionate</h3>
        <h3 className=''><span>Fullstack Developer</span></h3>
        {/* <p>
        I am a passionate software developer with a passion for designing dynamic and visually appealing websites.
        </p> */}
        
        {/* Enthusiastic Software Developer with Practical Experience | Looking for Challenging Opportunities to Contribute & Grow */}

        {/* <div  className="social-media">
          <a  data-aos="fade-down-right" href="https://www.linkedin.com/in/gokul-t-5286182a3"><i className="fa-brands fa-linkedin"></i></a>
          <a data-aos="zoom-out-down" href="https://github.com/Gokul-o12"><i className="fa-brands fa-github"></i></a>
          <a data-aos="zoom-out-down" href="https://x.com/GokulTlukoG"><i className="fa-brands fa-x-twitter"></i></a>
          <a data-aos="fade-down-left"  href="https://www.instagram.com/g0kul73"><i className="fa-brands fa-instagram"></i></a>
        </div> */}

         <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="social-media">
          <a  data-aos="fade-down-right" href="https://www.linkedin.com/in/gokul-t-5286182a3"><i className="fa-brands fa-linkedin"></i></a>
          <a data-aos="fade-down-right" href="https://github.com/Gokul-o12"><i className="fa-brands fa-github"></i></a>
          <a data-aos="fade-down-left" href="https://x.com/GokulTlukoG"><i className="fa-brands fa-x-twitter"></i></a>
          <a data-aos="fade-down-left"  href="https://www.instagram.com/g0kul73"><i className="fa-brands fa-instagram"></i></a>
        </div>




        {/* <div className="social-media">
  <a
    href="https://www.linkedin.com/in/gokul-t-5286182a3"
    target="_blank"
    rel="noopener noreferrer"
    data-aos="flip-left"
    data-aos-delay="0"
    data-aos-duration="800"
  >
    <i className="fa-brands fa-linkedin"></i>
  </a>
  <a
    href="https://github.com/Gokul-o12"
    target="_blank"
    rel="noopener noreferrer"
    data-aos="flip-up"
    data-aos-delay="100"
    data-aos-duration="800"
  >
    <i className="fa-brands fa-github"></i>
  </a>
  <a
    href="https://x.com/GokulTlukoG"
    target="_blank"
    rel="noopener noreferrer"
    data-aos="flip-right"
    data-aos-delay="200"
    data-aos-duration="800"
  >
    <i className="fa-brands fa-x-twitter"></i>
  </a>
  <a
    href="https://www.instagram.com/g0kul73"
    target="_blank"
    rel="noopener noreferrer"
    data-aos="flip-down"
    data-aos-delay="300"
    data-aos-duration="800"
  >
    <i className="fa-brands fa-instagram"></i>
  </a>
</div> */}


        <a data-aos="zoom-out" href="Gokul.T Resume.pdf" download className="btn">Download CV</a>
      </div>

    </section>
  );
}
