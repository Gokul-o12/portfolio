import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hello! I am
            </motion.p>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                Gokul T
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Passionate Fullstack Developer
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              I'm a full-stack developer with a strong passion for building seamless, scalable web applications. 
              I enjoy crafting responsive user interfaces and architecting reliable backend systems that deliver real value.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                View My Work
              </motion.a>
              <motion.a 
                href="/Gokul.T Resume.pdf" 
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-500 text-blue-500 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Download CV
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.a 
                href="https://www.linkedin.com/in/gokul-t-5286182a3" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a 
                href="https://github.com/Gokul-o12" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-700 hover:text-white transition-all duration-300"
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                href="https://x.com/GokulTlukoG" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <ExternalLink size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right side - Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-600 shadow-2xl">
                <img 
                  src="/src/assets/images/lapbg.png" 
                  alt="Gokul T - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements around image */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-80"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-80"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
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