import React, { useState, useEffect } from 'react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('light');
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      setIsScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const navItems = [
    { id: 'home', label: 'home', emoji: '🏠' },
    { id: 'about', label: 'about', emoji: '👨‍💻' },
    { id: 'experience', label: 'experience', emoji: '💼' },
    { id: 'projects', label: 'projects', emoji: '🚀' },
    { id: 'skills', label: 'skills', emoji: '⚡' },
    { id: 'certifications', label: 'certs', emoji: '🏆' },
    { id: 'contact', label: 'contact', emoji: '📧' }
  ];

  return (
    <>
      <div 
        className="scroll-indicator" 
        style={{ width: `${scrollProgress}%` }}
      />
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            gokul.dev
          </a>
          
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={closeMenu}
                  >
                    <span className="nav-emoji">{item.emoji}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </nav>
          
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
    </>
  );
}