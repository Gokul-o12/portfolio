import React from 'react';
import './Projects.css';
import papexImg from '../../assets/images/papex.png';
import atom2Img from '../../assets/images/atom2.png';

export default function Projects() {
  const projects = [
    {
      title: "Papex – AI-Powered Document Intelligence Platform",
      description: "Designed and developed a platform that extracts structured data from documents using OCR and AI. Built a dynamic prompt system to convert raw text into JSON format. Delivered a complete solution with interactive dashboards and rule-based status tracking.",
      techStack: ["Spring Boot", "React", "PostgreSQL", "AI/ML", "OCR"],
      image: papexImg,
      github: "https://github.com/Gokul-o12",
      live: "#"
    },
    {
      title: "ATOM2 – Business Website",
      description: "Developed a responsive multi-page business website with smooth navigation, scroll-based animations, and interactive UI components, optimized for performance and cross-device compatibility.",
      techStack: ["Bootstrap", "JavaScript", "HTML/CSS", "Responsive Design"],
      image: atom2Img,
      github: "https://github.com/Gokul-o12",
      live: "#"
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and the technologies I've used to bring ideas to life
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="tech-stack">
                  <span className="tech-stack-label">Technologies Used:</span>
                  <div className="tech-tags">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <i className="fa-brands fa-github"></i>
                    View Code
                  </a>
                  {project.live !== "#" && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link secondary"
                    >
                      <i className="fa-solid fa-external-link"></i>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}