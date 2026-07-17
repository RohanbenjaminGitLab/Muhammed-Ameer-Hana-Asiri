import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptop,
  faPalette,
  faKeyboard,
  faTable,
  faFileWord,
  faShareNodes,
  faLanguage
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const professionalSkills = [
  { name: "Event Planning", value: 95 },
  { name: "Event Coordination", value: 95 },
  { name: "Project Management", value: 90 },
  { name: "Public Speaking", value: 85 },
  { name: "Presentation Skills", value: 90 },
  { name: "Communication", value: 95 },
  { name: "Human Resource Management", value: 85 },
  { name: "Leadership", value: 92 },
  { name: "Team Management", value: 88 },
  { name: "Time Management", value: 88 },
  { name: "Problem Solving", value: 90 },
];

const technicalSkills = [
  { name: "Microsoft Office", icon: faFileWord, color: "text-blue-500 bg-blue-500/10 dark:bg-blue-500/5 border-blue-500/20" },
  { name: "Microsoft Excel", icon: faTable, color: "text-green-500 bg-green-500/10 dark:bg-green-500/5 border-green-500/20" },
  { name: "Canva Graphic Design", icon: faPalette, color: "text-pink-500 bg-pink-500/10 dark:bg-pink-500/5 border-pink-500/20" },
  { name: "Data Entry", icon: faKeyboard, color: "text-purple-500 bg-purple-500/10 dark:bg-purple-500/5 border-purple-500/20" },
  { name: "Computer Literacy", icon: faLaptop, color: "text-amber-500 bg-amber-500/10 dark:bg-amber-500/5 border-amber-500/20" },
  { name: "Social Media Management", icon: faShareNodes, color: "text-cyan-500 bg-cyan-500/10 dark:bg-cyan-500/5 border-cyan-500/20" },
];

const languages = [
  { name: "Tamil", level: "Native / Fluent", pct: 100, color: "from-blue-500 to-indigo-500" },
  { name: "English", level: "Professional / Fluent", pct: 90, color: "from-purple-500 to-indigo-500" },
  { name: "Sinhala", level: "Basic / Elementary", pct: 40, color: "from-purple-500 to-pink-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 bg-slate-50/50 dark:bg-slate-900/30 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blob */}
      <div
        className="bg-blob bg-primary-500/10 dark:bg-secondary-500/5"
        style={{ width: 'min(320px, 60vw)', height: 'min(320px, 60vw)', bottom: 0, left: '10%' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Skills &amp; <span className="text-gradient">Languages</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[3px] bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">

          {/* Left Column: Professional Skills (Animated Bars) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2"
            >
              🚀 Professional Core Competencies
            </motion.h3>

            <div className="glass-card-light dark:glass-card-dark p-4 sm:p-6 md:p-8 rounded-3xl space-y-4 sm:space-y-5">
              {professionalSkills.map((skill, index) => (
                <div key={index} className="space-y-1.5 sm:space-y-2">
                  <div className="flex justify-between text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    <span>{skill.name}</span>
                    <span className="flex-shrink-0 ml-2">{skill.value}%</span>
                  </div>

                  {/* Skill track */}
                  <div className="h-2 sm:h-2.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: index * 0.05 }}
                      className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Technical & Languages */}
          <div className="lg:col-span-5 flex flex-col gap-8 sm:gap-10">

            {/* Technical Skills Cards */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6"
              >
                💻 Technical &amp; Digital Skills
              </motion.h3>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                {technicalSkills.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className={`p-3 sm:p-4 rounded-2xl glass-card-light dark:glass-card-dark flex items-center gap-3 sm:gap-4 border ${tech.color} shadow-sm`}
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-sm flex-shrink-0">
                      <FontAwesomeIcon icon={tech.icon} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-500 dark:text-secondary-400" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-850 dark:text-slate-200 leading-snug">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages Layout */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faLanguage} className="text-primary-500 dark:text-secondary-400 flex-shrink-0" />
                Language Fluency
              </motion.h3>

              <div className="glass-card-light dark:glass-card-dark p-4 sm:p-6 rounded-3xl space-y-5 sm:space-y-6">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="flex items-center gap-3 sm:gap-4"
                  >
                    {/* Ring Progress Indicator */}
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 56 56">
                        <circle
                          cx="28"
                          cy="28"
                          r="24"
                          className="stroke-slate-200 dark:stroke-slate-800 fill-transparent"
                          strokeWidth="4"
                        />
                        <motion.circle
                          cx="28"
                          cy="28"
                          r="24"
                          className="stroke-primary-500 dark:stroke-secondary-400 fill-transparent"
                          strokeWidth="4"
                          strokeDasharray={2 * Math.PI * 24}
                          initial={{ strokeDashoffset: 2 * Math.PI * 24 }}
                          whileInView={{ strokeDashoffset: 2 * Math.PI * 24 * (1 - lang.pct / 100) }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
                        />
                      </svg>
                      <span className="absolute text-[9px] sm:text-[10px] font-bold text-slate-800 dark:text-slate-200">
                        {lang.pct}%
                      </span>
                    </div>

                    {/* Language Metadata */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline gap-2 flex-wrap">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{lang.name}</h4>
                        <span className="text-[10px] sm:text-xs text-primary-600 dark:text-secondary-400 font-semibold whitespace-nowrap">{lang.level}</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full mt-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${lang.color} rounded-full`}
                          style={{ width: `${lang.pct}%` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
