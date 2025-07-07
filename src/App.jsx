import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import './App.css';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Education from './components/education/Education';
import Certification from './components/certification/Certification';
import Sample from './components/education/sample';
import Experience from './components/experience/Experience';



function App() {
  return (
    <>
      <Header />
      <Home />
      <About /> 
      <Education />
         
      
      <Projects />
      <Skills />
      <Certification />
      <Experience />  
      
      <Contact />
      {/* <Sample/> */}
      
    </>
  );
}

export default App;
