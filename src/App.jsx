import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Qualifications from './components/Qualifications';
import Leadership from './components/Leadership';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Fallback to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      {/* Sticky header navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* Main Portfolio Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Qualifications />
        <Leadership />
        <Achievements />
        <Contact />
      </main>
      
      {/* Shared Footer component */}
      <Footer />
      
      {/* Floating Scroll to Top button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
