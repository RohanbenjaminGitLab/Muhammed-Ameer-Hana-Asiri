import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faUsers, faBullhorn, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function About() {
  const highlights = [
    {
      icon: faGraduationCap,
      title: "Event Management Graduate",
      desc: "Higher National Diploma (HNDEM Level 6) specializing in large-scale event logistics, coordination, and management.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: faHandshake,
      title: "Professional HRM Certified",
      desc: "Certified in Human Resource Management, aligning team recruitment, selection, and labor policies.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: faBullhorn,
      title: "Media & Editorial Background",
      desc: "Over 5+ years of active leadership in print/digital media as Deputy Manager, Editor, and Website Coordinator.",
      color: "from-indigo-500 to-secondary-500",
    },
    {
      icon: faUsers,
      title: "Community Leader & Volunteer",
      desc: "Actively serving as Cultural Secretary and Coordinator across youth organizations and NGO relief programs.",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blob — constrained */}
      <div
        className="bg-blob bg-secondary-500/10 dark:bg-primary-500/5"
        style={{ width: 'min(384px, 70vw)', height: 'min(384px, 70vw)', top: '-3rem', right: '10%' }}
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
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-0.75 bg-linear-to-r from-primary-500 to-secondary-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">

          {/* Left Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-4 sm:space-y-6 text-slate-650 dark:text-slate-300"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Building Success Through Event Management and Team Leadership
            </h3>

            <p className="leading-relaxed text-sm sm:text-base">
              I am a dedicated and energetic professional holding a{' '}
              <strong className="text-primary-600 dark:text-secondary-400 font-semibold">
                Higher National Diploma in Event Management
              </strong>{' '}
              combined with a certification in{' '}
              <strong className="text-primary-600 dark:text-secondary-400 font-semibold">
                Professional Human Resource Management
              </strong>. My academic journey has equipped me with practical capabilities in event planning, operations, logistics, budget management, and employee relations.
            </p>

            <p className="leading-relaxed text-sm sm:text-base">
              Throughout my career, I have thrived in fast-paced environments. From coordinating regional youth initiatives as a District Facilitator and Divisional Coordinator to directing digital publication pipelines in Sky Tamil Media, I combine operational discipline with editorial creativity.
            </p>

            <p className="leading-relaxed text-sm sm:text-base">
              <strong>My Career Objective:</strong> I aim to leverage my background in event coordination, project management, and HR development to contribute to progressive, dynamic organizations where creativity, strategic operations, and communicative excellence are valued.
            </p>

            {/* Personal Details Row */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 text-xs sm:text-sm font-medium">
              <div className="flex gap-2 items-center">
                <span className="text-primary-500 flex-shrink-0">📍</span>
                <span className="text-slate-800 dark:text-slate-200">Colombo, Sri Lanka</span>
              </div>
              <div className="flex gap-2 items-center min-w-0">
                <span className="text-primary-500 flex-shrink-0">📧</span>
                <a
                  href="mailto:ameerasri59@gmail.com"
                  className="text-primary-600 dark:text-secondary-400 hover:underline truncate"
                >
                  ameerasri59@gmail.com
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-primary-500 flex-shrink-0">💼</span>
                <span className="text-slate-800 dark:text-slate-200">Management & Coordination</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-primary-500 flex-shrink-0">🌐</span>
                <span className="text-slate-800 dark:text-slate-200">Tamil, English & Sinhala</span>
              </div>
            </div>
          </motion.div>

          {/* Right Highlights Grid Column */}
          <div className="lg:col-span-6 grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-card-light dark:glass-card-dark p-4 sm:p-6 rounded-3xl relative overflow-hidden transition-all duration-300"
              >
                {/* Decorative glowing gradient border top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${h.color}`} />

                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 mb-3 sm:mb-4 font-bold shadow-inner flex-shrink-0">
                  <FontAwesomeIcon icon={h.icon} className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 dark:text-secondary-400" />
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1 sm:mb-2 leading-snug">
                  {h.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {h.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
