import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", icon: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526106/1174949_js_react_js_logo_react_react_native_icon_zwdzxb.png" },
        { name: "JavaScript", icon: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526317/icons8-javascript-480_afdeqc.png" },
        { name: "HTML5", icon: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526106/html5-logo-31813_udxo3g.png" },
        { name: "CSS3", icon: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526701/icons8-css-logo-480_xeqbwy.png" },
        { name: "Tailwind CSS", icon: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526157/icons8-tailwindcss-480_gix3ml.png" },
        { name: "Bootstrap", icon: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526318/icons8-bootstrap-240_gutyn5.png" }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Java", icon: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526105/4373217_java_logo_logos_icon_o6ll8s.png" },
        { name: "Spring Boot", icon: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526317/icons8-spring-boot-480_vucs9a.png" },
        { name: "PostgreSQL", icon: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526317/icons8-postgresql-480_gp84jf.png" },
        { name: "MySQL", icon: "https://res.cloudinary.com/dtt19zar3/image/upload/v1750247662/mysql_k3f98n.png" },
        { name: "Node.js", icon: "https://res.cloudinary.com/dtt19zar3/image/upload/v1751213456/nodejs_logo_green_kcqzpx.png" },
        { name: "MongoDB", icon: "https://res.cloudinary.com/dtt19zar3/image/upload/v1751213456/mongodb_logo_green_kcqzpx.png" }
      ]
    },
    {
      category: "Tools & Others",
      technologies: [
        { name: "Git", icon: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526105/2993773_git_social_media_icon_qlx8xs.png" },
        { name: "WordPress", icon: "https://res.cloudinary.com/dtt19zar3/image/upload/v1750246903/wordpress_ndh1ev.png" },
        { name: "Camunda", icon: "https://res.cloudinary.com/dtt19zar3/image/upload/v1751212781/camundas_jwizz8.png" },
        { name: "Excel", icon: "https://res.cloudinary.com/dtt19zar3/image/upload/v1751213456/excel_logo_green_kcqzpx.png" },
        { name: "GitHub", icon: "https://res.cloudinary.com/dtt19zar3/image/upload/v1751213456/github_logo_white_kcqzpx.png" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="glass p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-semibold mb-8 text-center gradient-text">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      className="flex flex-col items-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img 
                        src={tech.icon} 
                        alt={tech.name}
                        className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300"
                      />
                      <span className="text-sm font-medium text-gray-300 text-center">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;