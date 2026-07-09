import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBook, faSchool } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const educationList = [
  {
    degree: "Higher National Diploma in Event Management (HNDEM Level 06)",
    institution: "Sri Lanka Institute of Tourism and Hotel Management (SLITHM)",
    period: "2021 - 2023",
    icon: faGraduationCap,
    details: "Focused on advanced event operations, MICE tourism, sponsorship pitching, project planning, vendor logistics, risk assessment, and corporate hospitality management.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    degree: "G.C.E. Advanced Level",
    institution: "Divisional High School",
    period: "2018 - 2020",
    icon: faBook,
    details: "Studied commerce stream, focusing on business studies, accounting, and economics. Served as senior editor of the school magazine committee and public speaking coordinator.",
    color: "from-purple-500 to-pink-500"
  },
  {
    degree: "G.C.E. Ordinary Level",
    institution: "Divisional High School",
    period: "2013 - 2017",
    icon: faSchool,
    details: "Completed core secondary curriculum with distinctions in English and Tamil literature. Actively participated in junior leadership programs, youth club operations, and inter-school debating.",
    color: "from-cyan-500 to-blue-500"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50/50 dark:bg-slate-900/30 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blob */}
      <div className="bg-blob w-80 h-80 bg-secondary-500/10 dark:bg-primary-500/5 -bottom-12 left-10 rounded-full" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white"
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
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 pl-8 ml-4 md:ml-6 space-y-12">
          
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[50px] md:-left-[54px] top-1.5 w-10 h-10 rounded-full bg-white dark:bg-slate-950 border-4 border-slate-200 dark:border-slate-800 flex items-center justify-center timeline-dot z-10">
                <FontAwesomeIcon icon={edu.icon} className="w-4 h-4 text-primary-500 dark:text-secondary-400" />
              </div>

              {/* Glass Card */}
              <div className="glass-card-light dark:glass-card-dark p-6 rounded-3xl relative overflow-hidden transition-all duration-300 hover:shadow-lg shadow-sm border border-slate-200/50 dark:border-slate-800/50">
                <div className={`absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b ${edu.color}`} />
                
                <div className="pl-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-primary-655 dark:text-secondary-400 uppercase tracking-wider bg-slate-100 dark:bg-slate-800/60 px-3 py-1 rounded-full w-fit">
                      {edu.period}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1.5">
                      📍 Sri Lanka
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  
                  <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-350 mb-3">
                    {edu.institution}
                  </h4>
                  
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
