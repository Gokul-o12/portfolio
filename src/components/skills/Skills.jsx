// import './Skills.css';

// export default function Skills() {
//   const skills = [
//     "Python, JavaScript",
//     "HTML, CSS & Bootstrap",
//     "React JS, NodeJS & Flask",
//     "MySQL",
//     "Git & GitHub, MS Excel"
//   ];

//   return (
//     <section className="services" id="services">
//       <h2 className="heading">My <span>Skills</span></h2>
//       <div className="timeline">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className={`container ${index % 2 === 0 ? 'left-container' : 'right-container'}`}
//             style={{ animationDelay: `${index * 0.5}s` }}
//           >
//             <div className="text-box">
//               <h3>{skill}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }






import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import "./Skills.css";

const skills = [
  { name: "HTML", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526106/html5-logo-31813_udxo3g.png" },
  { name: "CSS", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526701/icons8-css-logo-480_xeqbwy.png" },
  { name: "JavaScript", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526317/icons8-javascript-480_afdeqc.png" },
  { name: "React Js", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526106/1174949_js_react_js_logo_react_react_native_icon_zwdzxb.png" },
  { name: "WordPress", image: "https://res.cloudinary.com/dtt19zar3/image/upload/v1750246903/wordpress_ndh1ev.png" },
  { name: "Git", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526105/2993773_git_social_media_icon_qlx8xs.png" },
  { name: "Tailwind CSS", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526157/icons8-tailwindcss-480_gix3ml.png" },
  { name: "Bootstrap", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526318/icons8-bootstrap-240_gutyn5.png" },
  { name: "PostgreSQL", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526317/icons8-postgresql-480_gp84jf.png" },
  { name: "MySQL", image: "https://res.cloudinary.com/dtt19zar3/image/upload/v1750247662/mysql_k3f98n.png" },
  { name: "Java", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526105/4373217_java_logo_logos_icon_o6ll8s.png" },
  { name: "Spring Boot", image: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526317/icons8-spring-boot-480_vucs9a.png" },
  { name: "Camunda", image: "https://res.cloudinary.com/dtt19zar3/image/upload/v1751212781/camundas_jwizz8.png" },
];

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // AOS.init({ duration: 1000 });
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="skills-section" id="skills">
  <h2 className="skills-title" data-aos="fade-up"><span>Skills</span></h2>

  <div className="skills-grid">
    {skills.map((skill, index) => {
      const aosAnimation = isMobile
        ? index % 2 === 0
          ? "fade-right"
          : "fade-left"
        : "zoom-in";

      return (
        <div
          key={index}
          className="skill-card"
          data-aos={aosAnimation}
          data-aos-delay={index * 100}
          data-aos-duration="600"
        >
          <img
            src={skill.image}
            alt={`${skill.name} icon`}
            className="skill-icon"
          />
          <p className="skill-name">{skill.name}</p>
        </div>
      );
    })}
  </div>
</section>

  );
};

export default Skills;
