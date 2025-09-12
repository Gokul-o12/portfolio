import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

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
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
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
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Let's Connect</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology. Feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/5 transition-all duration-300">
                  <Mail className="text-blue-400" size={24} />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-gray-300">amgokult@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/5 transition-all duration-300">
                  <Phone className="text-green-400" size={24} />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-gray-300">+91 63794 42739</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/5 transition-all duration-300">
                  <MapPin className="text-red-400" size={24} />
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-gray-300">Erode, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4 pt-6">
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
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-400 transition-colors duration-300 text-white placeholder-gray-400"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-400 transition-colors duration-300 text-white placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-400 transition-colors duration-300 text-white placeholder-gray-400 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-primary py-4 rounded-xl font-semibold flex items-center justify-center gap-3 text-white hover:text-white transition-all duration-300"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;