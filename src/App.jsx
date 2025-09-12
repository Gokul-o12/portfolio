import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;