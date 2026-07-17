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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // IntersectionObserver for active section highlight
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-navbar-light dark:glass-navbar-dark shadow-lg py-2 md:py-3'
            : 'bg-transparent py-3 md:py-5'
        }`}
      >
        {/* Main navbar row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center min-h-[56px]">

          {/* Logo / Name */}
          <div
            onClick={() => handleLinkClick('hero')}
            className="cursor-pointer font-bold text-lg sm:text-xl md:text-2xl tracking-tight text-slate-900 dark:text-white flex items-center gap-2 flex-shrink-0 min-h-[44px]"
          >
            <span className="bg-linear-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
              Asri ibnu Ameer
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-sm font-medium transition-colors hover:text-primary-500 dark:hover:text-secondary-400 relative py-1 min-h-[44px] px-1 ${
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

          {/* Right side: Dark Mode Toggle & Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle theme"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full glass-card-light dark:glass-card-dark text-slate-700 dark:text-slate-200 hover:text-primary-500 dark:hover:text-secondary-400 transition-colors shadow-sm flex items-center justify-center flex-shrink-0"
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="w-4 h-4" />
            </button>

            {/* Hamburger Menu Icon — mobile/tablet only */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-full glass-card-light dark:glass-card-dark text-slate-700 dark:text-slate-200 hover:text-primary-500 dark:hover:text-secondary-400 transition-colors shadow-sm flex items-center justify-center flex-shrink-0"
            >
              <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-in Drawer */}
            <motion.div
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-xs glass-navbar-light dark:glass-navbar-dark shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200/50 dark:border-slate-800/50">
                <span className="font-bold text-lg bg-linear-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
                  Navigation
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 rounded-full glass-card-light dark:glass-card-dark text-slate-700 dark:text-slate-200 hover:text-primary-500 dark:hover:text-secondary-400 transition-colors flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex flex-col flex-1 overflow-y-auto px-6 py-4" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleLinkClick(link.id)}
                    className={`mobile-nav-link text-left text-base font-semibold transition-colors flex items-center gap-3 ${
                      activeSection === link.id
                        ? 'text-primary-600 dark:text-secondary-400'
                        : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {activeSection === link.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 dark:bg-secondary-400 flex-shrink-0" />
                    )}
                    {link.name}
                  </motion.button>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="px-6 py-5 border-t border-slate-200/50 dark:border-slate-800/50">
                <button
                  onClick={toggleDarkMode}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl glass-card-light dark:glass-card-dark text-slate-700 dark:text-slate-200 hover:text-primary-500 dark:hover:text-secondary-400 transition-colors font-medium text-sm"
                >
                  <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="w-4 h-4" />
                  {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
