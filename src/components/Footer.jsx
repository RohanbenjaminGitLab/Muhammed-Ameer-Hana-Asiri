import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-800/50 py-12 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blur Background Blob */}
      <div className="bg-blob w-72 h-72 bg-primary-500/10 dark:bg-secondary-500/5 -bottom-24 -left-24 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Logo Name & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text mb-2">
              Muhammed Ameer
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
              Event Management Graduate & HR, Media, and Project Coordination Professional.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <button onClick={() => handleLinkClick('hero')} className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-secondary-400 transition-colors">Home</button>
            <button onClick={() => handleLinkClick('about')} className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-secondary-400 transition-colors">About</button>
            <button onClick={() => handleLinkClick('skills')} className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-secondary-400 transition-colors">Skills</button>
            <button onClick={() => handleLinkClick('experience')} className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-secondary-400 transition-colors">Experience</button>
            <button onClick={() => handleLinkClick('contact')} className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-secondary-400 transition-colors">Contact</button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="mailto:ameerhana99@gmail.com" // Placeholder or easily customizable
              aria-label="Email"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-secondary-400 hover:scale-110 transition-all duration-300 shadow-sm"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammed-ameer-hana-asiri" // Placeholder
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-secondary-400 hover:scale-110 transition-all duration-300 shadow-sm"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="tel:+94771234567" // Placeholder
              aria-label="Phone"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-secondary-400 hover:scale-110 transition-all duration-300 shadow-sm"
            >
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </div>
        </div>

        <hr className="border-slate-200 dark:border-slate-850 my-6 opacity-50" />

        {/* Bottom Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Muhammed Ameer Hana Asiri. All rights reserved.</p>
          <p className="font-medium">
            Designed by <span className="text-primary-600 dark:text-secondary-400">Muhammed Ameer Hana Asiri</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
