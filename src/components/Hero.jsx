import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Gokul T</span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about building seamless, scalable web applications. 
            I craft responsive user interfaces and architect reliable backend systems that deliver real value.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a 
              href="/Gokul.T Resume.pdf" 
              download
              className="btn-primary px-8 py-4 rounded-full font-semibold flex items-center gap-3 text-white hover:text-white transition-all duration-300"
            >
              <Download size={20} />
              Download Resume
            </a>
            <a 
              href="#contact"
              className="btn-outline px-8 py-4 rounded-full font-semibold flex items-center gap-3 text-white hover:text-white transition-all duration-300"
            >
              <Mail size={20} />
              Get In Touch
            </a>
          </motion.div>
          
          <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a 
              href="https://github.com/Gokul-o12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 glass rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/gokul-t-5286182a3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 glass rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://x.com/GokulTlukoG" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 glass rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <ExternalLink size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;