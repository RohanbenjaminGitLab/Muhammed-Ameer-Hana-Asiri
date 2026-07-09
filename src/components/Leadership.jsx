import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart, faMasksTheater, faCompass, faPeopleGroup, faCircleNodes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const activities = [
  {
    org: "Islamic Relief",
    role: "Emergency Volunteer Coordinator",
    icon: faHandHoldingHeart,
    color: "from-blue-500 to-indigo-500",
    impact: "Directed relief logistics, packaging operations, and mobilization of 40+ local volunteers to deliver food kits, medical supplies, and basic necessities to 500+ vulnerable families during regional emergencies.",
    tag: "Humanitarian Aid"
  },
  {
    org: "Divisional Federation of Youth Clubs",
    role: "Divisional Cultural Secretary",
    icon: faMasksTheater,
    color: "from-purple-500 to-pink-500",
    impact: "Pioneered and managed the Divisional Cultural Festival, coordinating stages, volunteer hosts, and artist sponsorships, resulting in a landmark cultural forum that welcomed 1,000+ local spectators and 100+ performers.",
    tag: "Cultural Promotion"
  },
  {
    org: "Maaz Youth Club",
    role: "Executive Club Secretary",
    icon: faPeopleGroup,
    color: "from-indigo-500 to-secondary-500",
    impact: "Administered executive records, chaired operations meetings, and coordinated 8+ volunteer programs including city cleanups, health awareness walks, and school textbook donation drives.",
    tag: "Community Development"
  },
  {
    org: "Values4All Organization",
    role: "District Facilitator & Youth Trainer",
    icon: faCompass,
    color: "from-cyan-500 to-blue-500",
    impact: "Delivered 20+ customized workshops on character-building, conflict management, and civic engagement, providing 300+ students with critical soft skills and emotional intelligence training.",
    tag: "Education & Ethics"
  },
  {
    org: "Iconic Youths",
    role: "Divisional Coordinator",
    icon: faCircleNodes,
    color: "from-emerald-500 to-teal-500",
    impact: "Guided divisional youth engagement, designing peer-to-peer workshops on digital media literacy, civic responsibility, and leadership paths that reached over 200+ local teens.",
    tag: "Youth Empowerment"
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-slate-50/50 dark:bg-slate-900/30 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blob */}
      <div className="bg-blob w-80 h-80 bg-primary-500/10 dark:bg-secondary-500/5 -bottom-12 right-10 rounded-full" />

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
            Leadership & <span className="text-gradient">Community Service</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[3px] bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Layout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((act, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card-light dark:glass-card-dark p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300 hover:shadow-lg shadow-sm"
            >
              {/* Colored bottom glow band */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${act.color}`} />
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  {/* Icon Card */}
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-inner">
                    <FontAwesomeIcon icon={act.icon} className="w-5 h-5 text-primary-500 dark:text-secondary-400" />
                  </div>
                  {/* Category Pill */}
                  <span className="text-[10px] font-bold tracking-wider text-primary-655 dark:text-secondary-400 bg-primary-500/10 dark:bg-secondary-500/10 px-3 py-1 rounded-full uppercase">
                    {act.tag}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-primary-600 dark:text-secondary-455 uppercase tracking-wider mb-1">
                  {act.org}
                </h3>
                
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  {act.role}
                </h4>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  {act.impact}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-1.5 pt-4 border-t border-slate-205 dark:border-slate-800/50 mb-1">
                ✊ Impact Driven
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
