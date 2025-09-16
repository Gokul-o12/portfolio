import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Zap, Users, BookOpen, Palette } from 'lucide-react';

const About = () => {
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
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          >
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm a full-stack developer with a strong passion for building seamless, scalable web applications. 
                I enjoy crafting responsive user interfaces and architecting reliable backend systems that deliver real value.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I thrive in collaborative, fast-paced environments where I can contribute to meaningful projects, 
                learn continuously, and grow alongside a motivated team. I'm committed to writing clean, 
                maintainable code and always aim to enhance performance, usability, and user experience.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                I'm always exploring new technologies and frameworks to stay current with industry trends and 
                deliver cutting-edge solutions that make a difference.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <Code className="text-purple-500" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">What I Love</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Zap size={16} className="text-yellow-500 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Innovation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-blue-500 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Collaboration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">Continuous Learning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette size={16} className="text-purple-500 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">User Experience</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-4 sm:p-6 rounded-2xl text-center border border-white/20">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">1+</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-4 sm:p-6 rounded-2xl text-center border border-white/20">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">5+</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">Projects</div>
                </div>
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-4 sm:p-6 rounded-2xl text-center border border-white/20">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">10+</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">Certifications</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;