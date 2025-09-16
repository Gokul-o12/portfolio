import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Papex – AI-Powered Document Intelligence Platform",
      description: "Advanced platform that extracts structured data from documents using OCR and AI technology with dynamic prompt systems.",
      keyFeatures: [
        "OCR text extraction with AI processing",
        "Dynamic prompt system for JSON conversion",
        "Interactive dashboards with analytics",
        "Rule-based status tracking system"
      ],
      technologies: ["Spring Boot", "React", "PostgreSQL", "AI/ML", "OCR"],
      codeUrl: "https://github.com/Gokul-o12",
      liveUrl: null
    },
    {
      id: 2,
      title: "ATOM2 – Business Website",
      description: "Responsive multi-page business website with smooth navigation, scroll-based animations, and interactive UI components.",
      keyFeatures: [
        "Responsive multi-page design",
        "Smooth scroll-based animations",
        "Interactive UI components",
        "Cross-device compatibility optimization"
      ],
      technologies: ["Bootstrap", "JavaScript", "HTML/CSS"],
      codeUrl: "https://github.com/Gokul-o12",
      liveUrl: null
    },
    {
      id: 3,
      title: "Expense Tracker – Personal Expense Tracker App",
      description: "Responsive application that tracks daily expenses using real-time charts and reports with interactive filters and insights.",
      keyFeatures: [
        "Responsive dashboard and entry screens",
        "Smooth visual charts and transitions",
        "Interactive filters, categories, and reports",
        "Cross-device compatibility optimization"
      ],
      technologies: ["React", "Spring Boot", "MySQL"],
      codeUrl: "https://github.com/Gokul-o12",
      liveUrl: "#"
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I've used to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group flex flex-col h-full"
              >
                {/* Project Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index} className="text-xs text-gray-600 dark:text-gray-300 flex items-start gap-2">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
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