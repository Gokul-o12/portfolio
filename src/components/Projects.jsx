import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Papex – AI-Powered Document Intelligence Platform",
      description: "Designed and developed a platform that extracts structured data from documents using OCR and AI. Built a dynamic prompt system to convert raw text into JSON format. Delivered a complete solution with interactive dashboards and rule-based status tracking.",
      tags: ["Spring Boot", "React", "PostgreSQL", "AI/ML", "OCR"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "https://github.com/Gokul-o12",
      live: "#",
      featured: true
    },
    {
      title: "ATOM2 – Business Website",
      description: "Developed a responsive multi-page business website with smooth navigation, scroll-based animations, and interactive UI components, optimized for performance and cross-device compatibility.",
      tags: ["Bootstrap", "JavaScript", "HTML/CSS", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      github: "https://github.com/Gokul-o12",
      live: "#",
      featured: false
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
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
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`glass rounded-2xl overflow-hidden hover:bg-white/5 transition-all duration-300 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex`}
              >
                <div className="md:w-1/2 relative group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Zap size={14} />
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-105"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    {project.live !== "#" && (
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 btn-primary rounded-full transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;