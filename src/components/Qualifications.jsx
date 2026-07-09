import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faAward, faShieldHalved, faGlobe, faUserShield, faScaleBalanced, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const qualifications = [
  {
    title: "Professional Human Resource Management",
    issuer: "CIPM / Chartered Institute of Personnel Management",
    icon: faCertificate,
    color: "from-blue-500 to-indigo-500",
    desc: "In-depth training on employee recruitment, retention strategies, performance appraisals, labor legislation, and personnel policy development."
  },
  {
    title: "Youth Community Leadership Initiative",
    issuer: "WHO, UNDP, UNV & National Youth Services Council (NYSC)",
    icon: faGlobe,
    color: "from-purple-500 to-indigo-500",
    desc: "Joint program covering community building, health promotion, project governance, and global volunteer mobilization under the United Nations framework."
  },
  {
    title: "Strategic Management",
    issuer: "Executive Development Academy",
    icon: faAward,
    color: "from-pink-500 to-rose-500",
    desc: "Focus on corporate strategy planning, operational auditing, risk management, SWOT execution, and setting corporate KPIs."
  },
  {
    title: "Social Sensitive Reporting",
    issuer: "Media Resource Centre",
    icon: faScaleBalanced,
    color: "from-cyan-500 to-blue-500",
    desc: "Certification in news ethics, conflict-sensitive reporting, fair coverage of minorities, and reporting on disaster situations."
  },
  {
    title: "Media Literacy",
    issuer: "Sri Lanka Press Institute",
    icon: faShieldHalved,
    color: "from-emerald-500 to-teal-500",
    desc: "Training in news verification, combatting digital misinformation, source validation, and security protocols in online journalism."
  },
  {
    title: "Training on Values Curriculum",
    issuer: "Values4All Organization",
    icon: faUserShield,
    color: "from-amber-500 to-orange-500",
    desc: "Instructor workshop focused on designing moral education guides, teaching tolerance, and conflict management in schools."
  },
  {
    title: "Pre-Marital Counselling & Life Skills",
    issuer: "Youth and Family Welfare Council",
    icon: faHandshakeAngle,
    color: "from-indigo-500 to-purple-500",
    desc: "Training program addressing communication models, domestic dispute resolution, life planning strategies, and family advisory counseling."
  }
];

export default function Qualifications() {
  return (
    <section id="qualifications" className="py-24 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blob */}
      <div className="bg-blob w-[500px] h-[500px] bg-secondary-500/10 dark:bg-primary-500/5 top-1/3 -left-32 rounded-full" />

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

        {/* Qualifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualifications.map((qual, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card-light dark:glass-card-dark p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300 hover:shadow-lg shadow-sm"
            >
              {/* Top glowing gradient stripe */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${qual.color}`} />
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  {/* Icon Card */}
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-inner">
                    <FontAwesomeIcon icon={qual.icon} className="w-5 h-5 text-primary-500 dark:text-secondary-400" />
                  </div>
                  {/* Verified Badge */}
                  <span className="text-[10px] font-bold tracking-wider text-green-600 dark:text-green-400 bg-green-500/10 dark:bg-green-500/5 px-2.5 py-1 rounded-full uppercase border border-green-500/20">
                    Verified
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {qual.title}
                </h3>
                
                <h4 className="text-xs font-semibold text-primary-600 dark:text-secondary-400 mb-4 uppercase tracking-wider">
                  {qual.issuer}
                </h4>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  {qual.desc}
                </p>
              </div>

              {/* Bottom decorative details */}
              <div className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-1.5 pt-4 border-t border-slate-200/50 dark:border-slate-800/50 font-medium">
                📄 Professional Credential
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
