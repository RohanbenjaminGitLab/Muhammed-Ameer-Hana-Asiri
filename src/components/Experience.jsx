import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faBullhorn,
  faUsers,
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
    role: "Deputy Manager",
    org: "Thuninthalu Magazine (Sky Tamil Media)",
    period: "2024 - Present",
    icon: faNewspaper,
    color: "from-blue-500 to-indigo-500",
    desc: "Direct print/digital publication operations, supervise editorial layouts, edit key cover pieces, and coordinate content distributions.",
    bullets: [
      "Managed an editorial and design team of 15+ writers and graphic designers.",
      "Successfully launched the digital subscription app, boosting overall readership by 35%.",
      "Oversaw publication timelines, ensuring 100% on-time delivery across issues."
    ]
  },
  {
    role: "Assistant News Manager",
    org: "Sky Tamil Media",
    period: "2023 - 2024",
    icon: faBullhorn,
    color: "from-purple-500 to-pink-500",
    desc: "Managed daily news writing/editing desks, supervised reporting teams, and verified factual consistency of publication pipelines.",
    bullets: [
      "Streamlined desk collaboration, reducing publish time for breaking news by 20%.",
      "Mentored junior journalists in media ethics and SEO-friendly copywriting.",
      "Coordinated with broadcast managers to align print news with digital TV feeds."
    ]
  },
  {
    role: "District Coordinator",
    org: "National Youth Initiatives",
    period: "2023 - Present",
    icon: faUsers,
    color: "from-indigo-500 to-secondary-500",
    desc: "Coordinate district-wide community and youth engagement programs, manage budgets, and liaise with government bodies.",
    bullets: [
      "Planned and executed 5+ district-wide skills development workshops for 300+ attendees.",
      "Formulated operational plans and budget structures for community welfare campaigns.",
      "Coordinated cross-functional teams of local youth leaders and external speakers."
    ]
  },
  {
    role: "Website In-charge",
    org: "Sky Tamil Media",
    period: "2022 - 2024",
    icon: faGlobe,
    color: "from-cyan-500 to-blue-500",
    desc: "Administered web publishing systems, updated daily portals, monitored traffic analytics, and managed SEO and security.",
    bullets: [
      "Enhanced portal navigation, increasing average user session times by 25%.",
      "Drove SEO campaigns that grew organic search traffic by 30% over 12 months.",
      "Implemented security protocols preventing site downtime during major news releases."
    ]
  },
  {
    role: "Staff Journalist",
    org: "CeylonEast",
    period: "2021 - 2023",
    icon: faPenNib,
    color: "from-amber-500 to-orange-500",
    desc: "Investigated regional affairs, conducted interviews with community figures, and published feature reports.",
    bullets: [
      "Reported and published over 120 high-engagement articles on community development.",
      "Conducted focus interviews that expanded newspaper subscriptions in the Eastern district.",
      "Collaborated with press photography teams to create rich media packages."
    ]
  },
  {
    role: "Event Management Intern",
    org: "HNDEM level 06 Internship",
    period: "2023",
    icon: faUserGraduate,
    color: "from-green-500 to-emerald-500",
    desc: "Hands-on academic internship focused on venue setup, vendor relations, logistics coordination, and guest hosting.",
    bullets: [
      "Supported operational execution of a large-scale corporate conference (500+ attendees).",
      "Managed registration desks and delegate badge printing operations.",
      "Coordinated with food & beverage vendors to match event scheduling and dietary requests."
    ]
  },
  {
    role: "Volunteer Coordinator",
    org: "Islamic Relief",
    period: "2022 - Present",
    icon: faHandHoldingHeart,
    color: "from-red-500 to-pink-500",
    desc: "Organized disaster relief packaging, mapped logistics, and coordinated emergency distribution teams.",
    bullets: [
      "Coordinated food and medical kit distributions to over 500 families.",
      "Recruited and trained 40+ community youth volunteers.",
      "Collaborated with international program leads to verify relief distribution metrics."
    ]
  },
  {
    role: "Cultural Secretary",
    org: "Divisional Federation of Youth Clubs",
    period: "2022 - 2023",
    icon: faMusic,
    color: "from-sky-500 to-indigo-500",
    desc: "Promoted local cultural events, organized regional youth talent contests, and managed community arts budgets.",
    bullets: [
      "Successfully directed the Divisional Youth Cultural Festival, drawing 1,000+ attendees.",
      "Created talent categories that encouraged youth participation in traditional arts.",
      "Secured local corporate sponsorships to fund artist awards and stage setups."
    ]
  },
  {
    role: "Secretary",
    org: "Maaz Youth Club",
    period: "2021 - 2022",
    icon: faFolderOpen,
    color: "from-rose-500 to-red-500",
    desc: "Administered meetings agenda, documented official records, prepared annual reports, and scheduled community drives.",
    bullets: [
      "Orchestrated 8+ environmental cleanup and recycling awareness initiatives.",
      "Maintained meticulous activity registers, earning club praise from the divisional registrar.",
      "Drafted communications and reports for funding organizations."
    ]
  },
  {
    role: "District Facilitator",
    org: "Values4All Organization",
    period: "2021 - 2023",
    icon: faChalkboard,
    color: "from-teal-500 to-cyan-500",
    desc: "Facilitated educational seminars, peace education curricula, and personal leadership modules in youth centres.",
    bullets: [
      "Conducted 20+ interactive soft-skills seminars for students and teenagers.",
      "Curated values-based discussion guides adapted to local bilingual school setups.",
      "Administered participant evaluations demonstrating a 90% positive feedback score."
    ]
  },
  {
    role: "Divisional Coordinator",
    org: "Iconic Youths",
    period: "2020 - 2021",
    icon: faSitemap,
    color: "from-indigo-600 to-purple-650",
    desc: "Managed local volunteer units, initiated personal development campaigns, and designed local outreach agendas.",
    bullets: [
      "Directed advocacy programs on digital media literacy reaching 200+ adolescents.",
      "Organized leadership summits that brought together youth delegates from 12 villages.",
      "Facilitated career mentoring sessions in cooperation with local businesses."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Blob */}
      <div className="bg-blob w-96 h-96 bg-primary-500/10 dark:bg-secondary-500/5 top-1/4 -right-12 rounded-full" />

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

        {/* Timeline Structure */}
        <div className="relative border-l-2 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-[2px] md:before:bg-slate-200 md:dark:before:bg-slate-800 timeline-line">
          
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="mb-12 relative flex flex-col md:flex-row items-stretch md:justify-between w-full">
                
                {/* Timeline Center Dot (Desktop Only) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-4 w-9 h-9 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-200 dark:border-slate-800 items-center justify-center z-10 timeline-dot">
                  <FontAwesomeIcon icon={exp.icon} className="w-3.5 h-3.5 text-primary-500 dark:text-secondary-400" />
                </div>

                {/* Timeline Center Dot (Mobile Only - left-aligned) */}
                <div className="flex md:hidden absolute -left-[19px] top-4 w-9 h-9 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-200 dark:border-slate-800 items-center justify-center z-10 timeline-dot">
                  <FontAwesomeIcon icon={exp.icon} className="w-3.5 h-3.5 text-primary-500 dark:text-secondary-400" />
                </div>

                {/* Left Side Content (Alternating) */}
                <div className={`w-full md:w-[45%] ${isLeft ? 'md:order-1' : 'md:order-2 md:invisible md:h-0'}`}>
                  {isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6 }}
                      className="glass-card-light dark:glass-card-dark p-6 rounded-3xl relative overflow-hidden transition-all duration-300 hover:shadow-lg shadow-sm border border-slate-200/50 dark:border-slate-800/50"
                    >
                      {/* Decorative colored strip */}
                      <div className={`absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b ${exp.color}`} />
                      
                      <div className="pl-3">
                        <span className="text-xs font-bold text-primary-600 dark:text-secondary-400 uppercase tracking-wide">
                          {exp.period}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                          {exp.role}
                        </h3>
                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">
                          {exp.org}
                        </h4>
                        <p className="text-sm text-slate-650 dark:text-slate-355 leading-relaxed mb-4">
                          {exp.desc}
                        </p>
                        
                        {/* Achievements Bullet List */}
                        <ul className="space-y-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 list-disc list-outside pl-4">
                          {exp.bullets.map((b, idx) => (
                            <li key={idx} className="leading-relaxed">
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Right Side Content (Alternating) */}
                <div className={`w-full md:w-[45%] ${!isLeft ? 'md:order-2' : 'md:order-1 md:invisible md:h-0'}`}>
                  {!isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.6 }}
                      className="glass-card-light dark:glass-card-dark p-6 rounded-3xl relative overflow-hidden transition-all duration-300 hover:shadow-lg shadow-sm border border-slate-200/50 dark:border-slate-800/50"
                    >
                      {/* Decorative colored strip */}
                      <div className={`absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b ${exp.color}`} />
                      
                      <div className="pl-3">
                        <span className="text-xs font-bold text-primary-600 dark:text-secondary-400 uppercase tracking-wide">
                          {exp.period}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                          {exp.role}
                        </h3>
                        <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">
                          {exp.org}
                        </h4>
                        <p className="text-sm text-slate-650 dark:text-slate-355 leading-relaxed mb-4">
                          {exp.desc}
                        </p>
                        
                        {/* Achievements Bullet List */}
                        <ul className="space-y-2 text-xs md:text-sm text-slate-600 dark:text-slate-400 list-disc list-outside pl-4">
                          {exp.bullets.map((b, idx) => (
                            <li key={idx} className="leading-relaxed">
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
