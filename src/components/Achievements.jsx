import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faHeartCircleCheck, faBullhorn, faMasksTheater, faCompass } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const achievementsList = [
  {
    domain: "Leadership",
    metric: "15+ Editorial Staff Led",
    icon: faPeopleGroup,
    color: "from-blue-500 to-indigo-500",
    desc: "Supervised and guided writers, editors, and graphic designers at Thuninthalu Magazine to scale digital subscription operations."
  },
  {
    domain: "Community Development",
    metric: "500+ Families Supported",
    icon: faHeartCircleCheck,
    color: "from-purple-500 to-pink-500",
    desc: "Coordinated logistics channels and led packing teams to hand out emergency supplies and hygiene products under Islamic Relief."
  },
  {
    domain: "Media Experience",
    metric: "5+ Years Media Execution",
    icon: faBullhorn,
    color: "from-indigo-500 to-secondary-500",
    desc: "Managed editorial desks, news channels, and web publishing operations for digital newspaper and magazine portals."
  },
  {
    domain: "Event Management",
    metric: "1,000+ Event Scale Managed",
    icon: faMasksTheater,
    color: "from-cyan-500 to-blue-500",
    desc: "Pioneered registration pipelines, vendor communications, and stage direction for major divisional youth cultural festivals."
  },
  {
    domain: "Project Coordination",
    metric: "20+ Facilitations Delivered",
    icon: faCompass,
    color: "from-emerald-500 to-teal-500",
    desc: "Delivered youth values and leadership training projects across multiple districts in alliance with National Youth Councils."
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blob */}
      <div className="bg-blob w-96 h-96 bg-primary-500/10 dark:bg-secondary-500/5 top-10 right-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
          >
            Key <span className="text-gradient">Achievements</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[3px] bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsList.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-card-light dark:glass-card-dark p-8 rounded-3xl relative overflow-hidden border border-slate-205/50 dark:border-slate-800/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              {/* Colored top gradient line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${ach.color}`} />

              <div>
                <div className="flex justify-between items-center mb-6">
                  {/* Icon Card */}
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-inner">
                    <FontAwesomeIcon icon={ach.icon} className="w-5 h-5 text-primary-500 dark:text-secondary-400" />
                  </div>
                  {/* Label Badge */}
                  <span className="text-[10px] font-extrabold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                    {ach.domain}
                  </span>
                </div>

                {/* Big Metric Callout */}
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
                  {ach.metric}
                </h3>

                <p className="text-sm text-slate-550 dark:text-slate-400 leading-relaxed mb-4">
                  {ach.desc}
                </p>
              </div>

              {/* Verified Tag */}
              <div className="text-[10px] font-bold text-green-600 dark:text-green-455 tracking-wider uppercase flex items-center gap-1.5 pt-4 border-t border-slate-200/50 dark:border-slate-800/50 w-full mt-4">
                ✔️ Proven Recruiter Metric
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
