'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const experiences = [
  {
    id: 1,
    role: 'Co-Founder & Lead Engineer',
    company: 'Creo',
    period: 'June 2025 – Present',
    location: 'Remote',
    description: 'Building AI SaaS platform enabling users to create entire businesses from an idea.',
    achievements: [
      'Scaled backend to handle 10,000+ concurrent requests with sub-300ms response time and 99.5% success rate',
      'Integrated 15+ AI APIs across marketing, development, and automation workflows',
      'Launched closed beta to 45 users; projected $36,000 ARR within first 90 days post-launch'
    ],
    tech: ['Python', 'Flask', 'GCP', 'REST APIs', 'Docker']
  },
  {
    id: 2,
    role: 'Technology Consultant / ERP Implementation',
    company: 'DIKAM (Top 10 African Business Heroes)',
    period: 'May 2025 – Aug 2025',
    location: 'Kigali, Rwanda',
    description: 'Deployed ERP system across production, inventory, and finance departments.',
    achievements: [
      'Digitized workflows for 280+ employees, cutting manual reporting time by 65%',
      'Led integration of inventory, procurement, and payroll modules—improving data accuracy by 40%',
      'Automated data migration scripts transferring 10+ years of records, reducing retrieval from minutes to under 5 seconds'
    ],
    tech: ['Python', 'SQL', 'ERP Systems', 'Cloud Database']
  },
  {
    id: 3,
    role: 'NEBDHub DRM Research Intern',
    company: 'Columbia University',
    period: 'May 2025 – July 2025',
    location: 'New York, NY (Remote)',
    description: 'Processed city crash data to analyze correlations between population density and accident rates.',
    achievements: [
      'Processed 2.4M+ records using Python (pandas, NumPy) to identify statistical patterns',
      'Built data visualization dashboards improving research report readability by 70%',
      'Applied data ethics protocols reducing analysis error rate by 31% across team submissions'
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Excel', 'Data Viz']
  },
  {
    id: 4,
    role: 'Project Leader',
    company: 'All-Star Code Fellowship',
    period: 'May 2023 – June 2023',
    location: 'New York, NY',
    description: 'Led team of 3 developers to create STEM learning app for NYC schools.',
    achievements: [
      'Built app used by 150+ daily active users, improving engagement by 65% through gamification',
      'Increased lesson completion rates by 47% with new interactive features',
      'Implemented Flask REST API + React frontend, reducing API latency by 22% post-deployment'
    ],
    tech: ['React', 'Flask', 'JavaScript', 'REST APIs']
  },
]

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeExp, setActiveExp] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-light-grey">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs uppercase tracking-widest text-deep-charcoal/60 font-medium mb-4 block">
            Experience
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-black">
            Professional Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-deep-charcoal/10 hidden md:block" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                onHoverStart={() => setActiveExp(exp.id)}
                onHoverEnd={() => setActiveExp(null)}
                className="relative md:pl-12"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  className="absolute left-0 top-0 hidden md:block"
                >
                  <motion.div
                    animate={{
                      scale: activeExp === exp.id ? 1.5 : 1,
                      backgroundColor: activeExp === exp.id ? '#000000' : '#111111',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="w-3 h-3 rounded-full bg-deep-charcoal -translate-x-[5px]"
                  />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="bg-white border border-deep-charcoal/10 p-8"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-deep-charcoal font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <p className="text-sm text-deep-charcoal/60 font-medium">
                        {exp.period}
                      </p>
                      <p className="text-sm text-deep-charcoal/60">
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-deep-charcoal/70 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.15 + i * 0.1 }}
                        className="text-sm text-deep-charcoal flex items-start"
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-black mr-3 mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.15 + i * 0.05 }}
                        className="text-xs px-3 py-1 bg-light-grey border border-deep-charcoal/20 text-deep-charcoal font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
