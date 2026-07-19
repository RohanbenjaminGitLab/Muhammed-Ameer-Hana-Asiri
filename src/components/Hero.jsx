import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPaperPlane, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const roles = [
  "Event Management Graduate",
  "HR & Project Management Enthusiast",
  "Media & Event Coordinator"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        setSpeed(100);
        if (displayedText === currentRole) {
          setIsDeleting(true);
          setSpeed(2000);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        setSpeed(50);
        if (displayedText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setSpeed(500);
        }
      }
    };

    timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, speed]);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden px-4 sm:px-6 transition-colors duration-300"
    >
      {/* Dynamic Animated Blobs — constrained to prevent x-overflow */}
      <div
        className="bg-blob bg-primary-500/20 dark:bg-primary-500/10 animate-spin-slow"
        style={{
          width: 'min(450px, 80vw)',
          height: 'min(450px, 80vw)',
          top: '10%',
          left: '-10%',
        }}
      />
      <div
        className="bg-blob bg-secondary-500/20 dark:bg-secondary-500/10 animate-pulse-slow"
        style={{
          width: 'min(400px, 70vw)',
          height: 'min(400px, 70vw)',
          bottom: '10%',
          right: '-10%',
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center relative z-10">

        {/* Left Intro Text Column */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 sm:px-4 py-1.5 rounded-full glass-card-light dark:glass-card-dark text-xs sm:text-sm font-semibold text-primary-600 dark:text-secondary-400 mb-4 sm:mb-6 uppercase tracking-wider"
          >
            👋 Welcome to My Professional Space
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight mb-3 sm:mb-4"
          >
            Asri <br />
            <span className="bg-linear-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
              Ibnu Ameer
            </span>
          </motion.h1>

          {/* Typing Title Area */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-9 sm:h-10 md:h-12 flex items-center justify-center lg:justify-start mb-4 sm:mb-6 w-full"
          >
            <p className="text-base sm:text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-200 truncate max-w-full">
              I'm an{' '}
              <span className="text-primary-600 dark:text-secondary-400 font-semibold border-r-2 border-primary-500 dark:border-secondary-400 pr-1 animate-pulse">
                {displayedText}
              </span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-6 sm:mb-8 leading-relaxed"
          >
            Passionate about creating impactful events, leading teams, and driving organizational success through creativity, communication, and strategic planning.
          </motion.p>

          {/* CTA Buttons — stack on mobile, row on sm+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 w-full lg:w-auto"
          >
            <button
              onClick={() => handleScrollTo('experience')}
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base text-white bg-linear-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 group min-h-[48px] flex-1 xs:flex-none"
            >
              <FontAwesomeIcon icon={faBriefcase} className="group-hover:translate-x-0.5 transition-transform shrink-0" />
              View Portfolio
            </button>

            <a
              href="/Asri Ibnu Ameer CV New.pdf"
              download
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base text-slate-700 dark:text-slate-200 glass-card-light dark:glass-card-dark hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-800 shadow-sm min-h-[48px] flex-1 xs:flex-none"
            >
              <FontAwesomeIcon icon={faDownload} className="shrink-0" />
              Download CV
            </a>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base text-primary-600 dark:text-secondary-400 glass-card-light dark:glass-card-dark border border-primary-500/30 dark:border-secondary-500/30 hover:bg-primary-50/50 dark:hover:bg-secondary-950/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 min-h-[48px] flex-1 xs:flex-none"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="shrink-0" />
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right Photo Column */}
        <div className="lg:col-span-5 flex justify-center relative order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-75 h-75 xs:w-[340px] xs:h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[440px] lg:h-[440px] xl:w-[480px] xl:h-[480px] max-w-full aspect-square"
          >

            {/* Visual background rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/30 dark:border-secondary-500/30 animate-spin-slow scale-110" />
            <div className="absolute inset-4 rounded-full bg-linear-to-tr from-primary-500 to-secondary-500 blur-md opacity-20 dark:opacity-30" />

            {/* Profile Photo Wrapper */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white dark:border-slate-850 shadow-2xl glass-card-light dark:glass-card-dark">
              <img
                src="/profile1.jpeg"
                alt="Asri ibnu Ameer — Portfolio Photo"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                loading="eager"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=500&h=500&q=80";
                }}
              />
            </div>

            {/* Floating Badge — Top Right */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="hero-badge absolute -top-5 -right-2 sm:-top-4 sm:-right-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl glass-card-light dark:glass-card-dark text-[10px] sm:text-xs md:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 shadow-lg"
            >
              🎓 <span className="text-slate-800 dark:text-slate-200">Event Management</span>
            </motion.div>

            {/* Floating Badge — Bottom Left */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
              className="hero-badge absolute -bottom-5 -left-2 sm:-bottom-4 sm:-left-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl glass-card-light dark:glass-card-dark text-[10px] sm:text-xs md:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 shadow-lg"
            >
              🤝 <span className="text-slate-800 dark:text-slate-200">HR Enthusiast</span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
