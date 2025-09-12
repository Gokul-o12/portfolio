import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Sholas Technologies Private Limited",
      role: "Full Stack Developer",
      period: "October 2024 – Present",
      location: "Remote",
      logo: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744960831/WhatsApp_Image_2025-04-17_at_17.20.51_025badf0_gm7rgc.png",
      achievements: [
        "Developed full-stack features using React and Spring Boot",
        "Improved performance of backend APIs by 30%",
        "Integrated Camunda workflows for business automation",
        "Collaborated with cross-functional teams to deliver high-quality solutions"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science and Engineering",
      institution: "Nandha College of Technology - Anna University",
      period: "2020 - 2024",
      grade: "CGPA: 8.0/10"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Government Boys Higher Secondary School",
      period: "2020",
      grade: "Percentage: 59%"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-20 px-4">
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
            Experience & <span className="gradient-text">Education</span>
          </motion.h2>
          
          {/* Experience Section */}
          <div className="mb-16">
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-semibold mb-8 gradient-text"
            >
              Professional Experience
            </motion.h3>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-8 rounded-2xl mb-6 hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                  <img 
                    src={exp.logo} 
                    alt={exp.company}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">{exp.company}</h4>
                    <p className="text-lg text-blue-400 mb-2">{exp.role}</p>
                    <div className="flex flex-col sm:flex-row gap-4 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-3">
                      <TrendingUp size={16} className="text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Education Section */}
          <div>
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-semibold mb-8 gradient-text"
            >
              Education
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass p-6 rounded-2xl hover:bg-white/5 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                  <p className="text-blue-400 mb-2">{edu.institution}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">{edu.period}</span>
                    <span className="text-green-400 font-medium">{edu.grade}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;