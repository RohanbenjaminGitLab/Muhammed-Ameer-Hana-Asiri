import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faBlogger } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'hero', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'experience', name: 'Experience' },
    { id: 'contact', name: 'Contact' },
  ];

  const socialLinks = [
    { href: "mailto:ameerasri59@gmail.com", icon: faEnvelope, label: "Email" },
    { href: "https://www.linkedin.com/in/asri-ibnu-ameer-ab567b1ab", icon: faLinkedin, label: "LinkedIn", external: true },
    { href: "https://asriibnuameer.blogspot.com/search/label/Social%20Work", icon: faBlogger, label: "Blogger", external: true },
    { href: "tel:+94750652541", icon: faPhone, label: "Phone" },
  ];

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-800/50 py-10 sm:py-12 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blur Background Blob */}
      <div
        className="bg-blob bg-primary-500/10 dark:bg-secondary-500/5"
        style={{ width: 'min(288px, 60vw)', height: 'min(288px, 60vw)', bottom: '-6rem', left: '-6rem' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Top section: 3-part layout */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-between items-center gap-6 sm:gap-8 mb-6 sm:mb-8">

          {/* Logo Name & Tagline */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold bg-linear-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text mb-1 sm:mb-2">
              Asri ibnu Ameer
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xs sm:max-w-sm">
              Event Management Graduate &amp; HR, Media, and Project Coordination Professional.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-3 sm:gap-5 md:gap-6 list-none p-0 m-0">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-secondary-400 transition-colors min-h-[44px] flex items-center"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-3 flex-wrap justify-center">
            {socialLinks.map(({ href, icon, label, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-secondary-400 hover:scale-110 transition-all duration-300 shadow-sm"
              >
                <FontAwesomeIcon icon={icon} className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <hr className="border-slate-200 dark:border-slate-800 my-4 sm:my-6 opacity-50" />

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 text-center">
          <p>© {currentYear} Asri ibnu Ameer. All rights reserved.</p>
          <p className="font-medium">
            Designed by <span className="text-primary-600 dark:text-secondary-400">Munaff Fathima Nafa</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
