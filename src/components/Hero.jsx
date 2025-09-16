import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Twitter, Instagram, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 dark:from-blue-900/20 via-purple-50 dark:via-purple-900/20 to-pink-50 dark:to-pink-900/20"></div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
      />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-blue-600 dark:text-blue-400 font-medium"
            >
              Hello! I am
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Gokul T
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-200"
            >
              Passionate Fullstack Developer
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg"
          >
            I'm a full-stack developer with a strong passion for building seamless, scalable web applications. 
            I enjoy crafting responsive user interfaces and architecting reliable backend systems that deliver real value.
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex items-center gap-2 text-gray-500 dark:text-gray-400"
          >
            <MapPin size={18} className="text-blue-500" />
            <span className="text-sm sm:text-base">Erode, Tamil Nadu, India</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <span>View My Work</span>
              <ArrowRight size={18} />
            </a>
            
            <a
              href="/src/assets/resume/Gokul.T.pdf"
              download
              className="inline-flex items-center justify-center gap-2 border-2 border-blue-500 text-blue-600 dark:text-blue-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
          </motion.div>
          
          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4"
          >
            <a
              href="https://www.linkedin.com/in/gokul-t-5286182a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/Gokul-o12"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Github size={18} />
            </a>
            <a
              href="https://x.com/GokulTlukoG"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Twitter size={18} />
            </a>
            <a
              href="https://www.instagram.com/g0kul73"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Instagram size={18} />
            </a>
          </motion.div>
        </motion.div>
        
        {/* Professional Image with Modern Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Animated Background Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-80 h-80 sm:w-96 sm:h-96 border-2 border-blue-500/20 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 w-72 h-72 sm:w-88 sm:h-88 border border-purple-500/20 rounded-full"
            />
            
            {/* Floating Dots */}
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-8 right-8 w-3 h-3 bg-blue-500 rounded-full"
            />
            <motion.div 
              animate={{ 
                y: [0, 10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute bottom-8 left-8 w-2 h-2 bg-purple-500 rounded-full"
            />
            
            {/* Main Image Container */}
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotate: 2
              }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img
                src="https://res.cloudinary.com/dtt19zar3/image/upload/v1758024157/lap_sadnz1.jpg"
                alt="Gokul T - Full Stack Developer"
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-2xl transition-transform duration-300"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 via-transparent to-purple-600/20"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;