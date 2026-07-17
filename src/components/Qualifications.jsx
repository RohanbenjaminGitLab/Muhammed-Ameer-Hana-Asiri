import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCertificate,
  faAward,
  faShieldHalved,
  faGlobe,
  faUserShield,
  faScaleBalanced,
  faHandshakeAngle,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const qualifications = [
  {
    title: "Higher National Diploma in Event Management (University College)",
    icon: faGraduationCap,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Professional Human Resource Management",
    icon: faCertificate,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Youth Community Leadership Initiative (WHO, UNDP, UNV, NYSC)",
    icon: faGlobe,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Strategic Management in Great Learning Academy",
    icon: faAward,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Social sensitive Reporting (Sri Lanka College of Journalism)",
    icon: faScaleBalanced,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "''MEDIA LITERACY'' Program in the American Center in Colombo",
    icon: faShieldHalved,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "TOT Programme (Training on the Values Curriculum Asia Foundation)",
    icon: faUserShield,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Pre-Marital Counselling & Life Skills",
    icon: faHandshakeAngle,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Professional Mentorship Program under Winspiration 5.0",
    icon: faAward,
    color: "from-indigo-500 to-purple-500",
  }
];

export default function Qualifications() {
  return (
    <section id="qualifications" className="py-16 sm:py-20 md:py-24 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blob */}
      <div
        className="bg-blob bg-secondary-500/10 dark:bg-primary-500/5"
        style={{ width: 'min(500px, 80vw)', height: 'min(500px, 80vw)', top: '33%', left: '-8rem' }}
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
            Professional <span className="text-gradient">Qualifications</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[3px] bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Qualifications Grid — 1 col mobile, 2 col sm, 3 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {qualifications.map((qual, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card-light dark:glass-card-dark p-5 sm:p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300 hover:shadow-lg shadow-sm"
            >
              {/* Top glowing gradient stripe */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${qual.color}`} />

              <div>
                <div className="flex justify-between items-start mb-4 sm:mb-6 mt-1">
                  {/* Icon Card */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-inner flex-shrink-0">
                    <FontAwesomeIcon icon={qual.icon} className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 dark:text-secondary-400" />
                  </div>
                  {/* Verified Badge */}
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-green-600 dark:text-green-400 bg-green-500/10 dark:bg-green-500/5 px-2 sm:px-2.5 py-1 rounded-full uppercase border border-green-500/20 flex-shrink-0 ml-2">
                    Verified
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {qual.title}
                </h3>

                {qual.issuer && (
                  <h4 className="text-[10px] sm:text-xs font-semibold text-primary-600 dark:text-secondary-400 mb-3 sm:mb-4 uppercase tracking-wider leading-snug">
                    {qual.issuer}
                  </h4>
                )}

                {qual.desc && (
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 sm:mb-6">
                    {qual.desc}
                  </p>
                )}
              </div>

              {/* Bottom decorative details */}
              <div className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-1.5 pt-3 sm:pt-4 border-t border-slate-200/50 dark:border-slate-800/50 font-medium mt-auto">
                📄 Professional Credential
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
