import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBook, faSchool } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const educationList = [
  {
    degree: "Higher National Diploma in Event Management",
    period: "2021 – 2025",
    institution: "University College of Ratmalane",
    icon: faGraduationCap,
    color: "from-cyan-500 to-blue-500"
  },
  {
    degree: "G.C.E Advanced Level",
    institution: "Ak/Addalaichenai National School ",
    period: "2019",
    icon: faBook,
    color: "from-cyan-500 to-blue-500"
  },
  {
    degree: "G.C.E. Ordinary Level",
    institution: "Ak/Arafa Vidyalaya Addalaichenai ",
    period: "2016",
    icon: faSchool,
    color: "from-cyan-500 to-blue-500"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 md:py-24 bg-slate-50/50 dark:bg-slate-900/30 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blob */}
      <div
        className="bg-blob bg-secondary-500/10 dark:bg-primary-500/5"
        style={{ width: 'min(320px, 60vw)', height: 'min(320px, 60vw)', bottom: '-3rem', left: '2.5rem' }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Education <span className="text-gradient">Timeline</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[3px] bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/60 to-secondary-500/60 rounded-full" aria-hidden="true" />

          <div className="space-y-8 sm:space-y-12 pl-12 sm:pl-16">
            {educationList.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline dot — positioned relative to the outer pl-container */}
                <div
                  className="absolute top-4 rounded-full bg-white dark:bg-slate-950 border-4 border-slate-200 dark:border-slate-800 flex items-center justify-center timeline-dot z-10 shadow-md"
                  style={{
                    left: '-2.75rem',
                    width: '2rem',
                    height: '2rem',
                  }}
                >
                  <FontAwesomeIcon icon={edu.icon} className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-500 dark:text-secondary-400" />
                </div>

                {/* Glass Card */}
                <div className="glass-card-light dark:glass-card-dark p-4 sm:p-6 rounded-3xl relative overflow-hidden transition-all duration-300 hover:shadow-lg shadow-sm border border-slate-200/50 dark:border-slate-800/50">
                  <div className={`absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b ${edu.color} rounded-l-3xl`} />

                  <div className="pl-2 sm:pl-3">
                    <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-2 mb-3">
                      <span className="text-[10px] sm:text-xs font-bold text-primary-600 dark:text-secondary-400 uppercase tracking-wider bg-slate-100 dark:bg-slate-800/60 px-3 py-1 rounded-full w-fit">
                        {edu.period}
                      </span>
                      <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1.5">
                        📍 Sri Lanka
                      </span>
                    </div>

                    <h3 className="text-base sm:text-xl font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                      {edu.degree}
                    </h3>

                    <h4 className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2 sm:mb-3">
                      {edu.institution}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
