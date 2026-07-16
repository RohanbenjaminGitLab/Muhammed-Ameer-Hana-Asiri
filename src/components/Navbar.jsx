import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'hero', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'experience', name: 'Experience' },
  { id: 'education', name: 'Education' },
  { id: 'qualifications', name: 'Qualifications' },
  { id: 'contact', name: 'Contact' }
];

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for shadow/opacity effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section highlight
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // trigger when section occupies viewport center
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleLinkClick = (id) => {
    setIsOpen(false);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-navbar-light dark:glass-navbar-dark shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Name */}
        <div 
          onClick={() => handleLinkClick('hero')} 
          className="cursor-pointer font-bold text-xl md:text-2xl tracking-tight text-slate-900 dark:text-white flex items-center gap-2"
        >
          <span className="bg-linear-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">Asri ibnu Ameer</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-sm font-medium transition-colors hover:text-primary-500 dark:hover:text-secondary-400 relative py-1 ${
                activeSection === link.id
                  ? 'text-primary-600 dark:text-secondary-400'
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary-500 to-secondary-500 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Right side buttons: Dark Mode Toggle & Hamburger */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className="p-2.5 rounded-full glass-card-light dark:glass-card-dark text-slate-700 dark:text-slate-200 hover:text-primary-500 dark:hover:text-secondary-400 transition-colors shadow-sm"
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="w-4 h-4" />
          </button>

          {/* Hamburger Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2.5 rounded-full glass-card-light dark:glass-card-dark text-slate-700 dark:text-slate-200 hover:text-primary-500 dark:hover:text-secondary-400 transition-colors shadow-sm"
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-navbar-light dark:glass-navbar-dark shadow-xl overflow-hidden mt-2 border-t border-slate-200/50 dark:border-slate-800/50"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left text-base font-semibold py-2 transition-colors ${
                    activeSection === link.id
                      ? 'text-primary-600 dark:text-secondary-400'
                      : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
