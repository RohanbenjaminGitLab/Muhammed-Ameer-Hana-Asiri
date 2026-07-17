import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faPenNib,
  faUserGraduate,
  faHandHoldingHeart,
  faMusic,
  faFolderOpen,
  faChalkboard,
  faSitemap,
  faNewspaper
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Former Deputy Manager",
    org: "Thuninthalu Magazine, Sky Tamil Media",
    icon: faNewspaper,
    color: "from-blue-500 to-indigo-500",
  },
  {
    role: "Former Assistant News Manager, District Coordinator & Website In-charge",
    org: "Sky Tamil Media",
    icon: faGlobe,
    color: "from-blue-500 to-cyan-500",
  },
  {
    role: "Completed Internship Program",
    org: "HNDEM-Level 06",
    icon: faUserGraduate,
    color: "from-emerald-500 to-teal-500",
  },
  {
    role: "Volunteer Work",
    org: "Islamic Relief",
    icon: faHandHoldingHeart,
    color: "from-rose-500 to-pink-500",
  },
  {
    role: "Former Cultural Secretary",
    org: "Divisional Federation of Youth Clubs, Addalaichenai",
    icon: faMusic,
    color: "from-amber-500 to-orange-500",
  },
  {
    role: "Secretary",
    org: "Maaz Youth Club, Addalaichenai 10",
    icon: faFolderOpen,
    color: "from-blue-500 to-indigo-500",
  },
  {
    role: "Former Staff Journalist",
    org: "Ceyloneast Website",
    icon: faPenNib,
    color: "from-indigo-500 to-purple-500",
  },
  {
    role: "Former Ampara District Facilitator",
    org: "Values4All Organization (Asia Foundation)",
    icon: faChalkboard,
    color: "from-teal-500 to-cyan-500",
  },
  {
    role: "Addalaichenai Divisional Coordinator",
    org: "Iconic Youths (Social Service Organization)",
    icon: faSitemap,
    color: "from-purple-500 to-pink-500"
  }
];

// ─── Experience Card ───────────────────────────────────────────────────────────
function ExpCard({ exp, direction = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="bg-white/90 dark:bg-slate-900/60 backdrop-blur-xl p-5 sm:p-6 rounded-3xl border border-slate-200/60 dark:border-white/10 shadow-lg hover:border-primary-500/40 transition-all duration-300 relative overflow-hidden"
    >
      {/* Colored left strip */}
      <div className={`absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b ${exp.color} rounded-l-3xl`} />

      <div className="pl-3 sm:pl-4">
        {exp.period && (
          <span className="text-[10px] sm:text-xs font-bold text-primary-600 dark:text-white uppercase tracking-wide bg-primary-500/10 dark:bg-secondary-500/10 px-2.5 py-1 rounded-full w-fit block">
            {exp.period}
          </span>
        )}
        <h3 className={`text-base sm:text-xl font-bold text-slate-900 dark:text-white ${exp.period ? 'mt-2' : ''}`}>
          {exp.role}
        </h3>
        <h4 className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-white mb-3">
          {exp.org}
        </h4>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Decorative Blob */}
      <div
        className="bg-blob bg-slate-100/80 dark:bg-slate-900/50"
        style={{ width: 'min(384px, 70vw)', height: 'min(384px, 70vw)', top: '25%', right: '-5%' }}
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
            Professional <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[3px] bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* ── MOBILE: Single-column left-aligned timeline (< md) ── */}
        <div className="md:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" aria-hidden="true" />

          <div className="space-y-8 pl-14">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[37px] top-5 w-8 h-8 rounded-full bg-white dark:bg-slate-950 border-[3px] border-primary-400 dark:border-secondary-500 flex items-center justify-center z-10 shadow-md timeline-dot">
                  <FontAwesomeIcon icon={exp.icon} className="w-3 h-3 text-primary-500 dark:text-secondary-400" />
                </div>
                <ExpCard exp={exp} direction="left" />
              </div>
            ))}
          </div>
        </div>

        {/* ── DESKTOP: Alternating two-column timeline (≥ md) ── */}
        <div className="hidden md:block relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" aria-hidden="true" />

          <div className="space-y-10 lg:space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-start justify-between gap-8">

                  {/* Left card slot */}
                  <div className="w-[45%]">
                    {isLeft ? (
                      <ExpCard exp={exp} direction="left" />
                    ) : (
                      <div aria-hidden="true" />
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-5 w-10 h-10 rounded-full bg-white dark:bg-slate-950 border-4 border-slate-200 dark:border-slate-700 flex items-center justify-center z-10 timeline-dot shadow-md flex-shrink-0">
                    <FontAwesomeIcon icon={exp.icon} className="w-3.5 h-3.5 text-primary-500 dark:text-secondary-400" />
                  </div>

                  {/* Right card slot */}
                  <div className="w-[45%]">
                    {!isLeft ? (
                      <ExpCard exp={exp} direction="right" />
                    ) : (
                      <div aria-hidden="true" />
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
