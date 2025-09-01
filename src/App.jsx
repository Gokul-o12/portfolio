import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Certification from './components/certification/Certification';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.paddingTop = '80px';
    
    return () => {
      document.body.style.paddingTop = '0';
    };
  }, []);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certification />
      <Contact />
    </>
  );
}

export default App;