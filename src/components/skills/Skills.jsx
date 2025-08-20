import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", icon: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526106/html5-logo-31813_udxo3g.png" },
        { name: "CSS", icon: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526701/icons8-css-logo-480_xeqbwy.png" },
        { name: "JavaScript", icon: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526317/icons8-javascript-480_afdeqc.png" },
        { name: "React", icon: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526106/1174949_js_react_js_logo_react_react_native_icon_zwdzxb.png" },
        { name: "Tailwind CSS", icon: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526157/icons8-tailwindcss-480_gix3ml.png" },
        { name: "Bootstrap", icon: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526318/icons8-bootstrap-240_gutyn5.png" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Java", icon: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526105/4373217_java_logo_logos_icon_o6ll8s.png" },
        { name: "Spring Boot", icon: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526317/icons8-spring-boot-480_vucs9a.png" },
        { name: "PostgreSQL", icon: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526317/icons8-postgresql-480_gp84jf.png" },
        { name: "MySQL", icon: "https://res.cloudinary.com/dtt19zar3/image/upload/v1750247662/mysql_k3f98n.png" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526105/2993773_git_social_media_icon_qlx8xs.png" },
        { name: "WordPress", icon: "https://res.cloudinary.com/dtt19zar3/image/upload/v1750246903/wordpress_ndh1ev.png" },
        { name: "Camunda", icon: "https://res.cloudinary.com/dtt19zar3/image/upload/v1751212781/camundas_jwizz8.png" }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="category-skill">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="category-skill-icon"
                    />
                    <p className="category-skill-name">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;