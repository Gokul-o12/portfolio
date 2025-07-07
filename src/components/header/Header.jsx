// import React, { useState } from 'react';
// import './Header.css';

// export default function Header() {
//   const [navOpen, setNavOpen] = useState(false);

//   return (
//     <header className="header">
//       <div className="logo">Gokul</div>

//       <input
//         type="checkbox"
//         id="nav_check"
//         checked={navOpen}
//         onChange={() => setNavOpen(!navOpen)}
//         hidden
//       />

//       <nav className={navOpen ? 'open' : ''}>
//         <ul>
//           <li><a href="#home" className="active">Home</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#education">Education</a></li>
//           <li><a href="#skills">Skills</a></li>
//           <li><a href="#projects">Projects</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </nav>

//       <label htmlFor="nav_check" className="hamburger">
//         <div></div>
//         <div></div>
//         <div></div>
//       </label>
//     </header>
//   );
// }








import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  // Handle scroll active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about','experience','projects', 'skills','certifications','contact'];
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="logo">Gokul T</div>

      <input
        type="checkbox"
        id="nav_check"
        checked={navOpen}
        onChange={() => setNavOpen(!navOpen)}
        hidden
      />

      <nav className={navOpen ? 'open' : ''}>
        <ul>
          {['home', 'about','experience','projects', 'skills','certifications','contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === `#${section}` ? 'active' : ''}
                onClick={() => setNavOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <label htmlFor="nav_check" className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </header>
  );
}
