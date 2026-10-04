'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

type TimelineEntry = {
  id: number
  role: string
  company: string
  period: string
  location: string
  description?: string
  achievements: string[]
  tech: string[]
  link?: { href: string, label: string }
}

const experiences: TimelineEntry[] = [
  {
    id: 1,
    role: 'Co-Founder & Software Engineer',
    company: 'Creo',
    period: 'Jun 2025 – Present',
    location: 'New Brunswick, NJ',
    description: 'Startup validation platform with 984 signups and 25–50 daily active users.',
    achievements: [
      'Built Creo with one co-founder: Next.js/TypeScript, Supabase auth, Firestore, GPT-4o on strict JSON schemas',
      'Wrote the scoring engine: 28 weighted questions in six dimensions roll up to a 0–100 score with flags and a stage label',
      'Competitor check, stage 1: a keyword pre-filter over 30 industry maps settles clear cases with no API call',
      'Stage 2: a rule-based validator screens vague differentiation claims before GPT-4o runs against a 100-competitor list',
      'Reworked the scoring flow on beta feedback; onboarding drop-off fell 28% from the 45-user beta to the next cohort'
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Firestore', 'GPT-4o'],
    link: { href: 'https://buildwithcreo.com', label: 'Visit Website' }
  },
  {
    id: 2,
    role: 'ERP Implementation Lead',
    company: 'DIKAM Fashion Ltd',
    period: 'May 2025 – Aug 2025',
    location: 'Kigali, Rwanda',
    description: 'Garment manufacturer; founder in Africa\'s Business Heroes 2025 Top 10.',
    achievements: [
      'Wrote an Odoo module in Python ("Manufacturing v2") that replaced the stock Purchase-to-Manufacturing flow',
      'Migrated 10 years of Excel purchase, sales, payroll and inventory books into normalized SQL tables with Python',
      'Reconciled inconsistent supplier names, date formats and currencies across the books before load',
      'Led the Odoo rollout (production, inventory, procurement, payroll, finance); month-end close: 2 weeks to 4 days'
    ],
    tech: ['Python', 'Odoo', 'SQL']
  },
  {
    id: 3,
    role: 'Data Analyst Researcher',
    company: 'Columbia University – Northeast Big Data Innovation Hub',
    period: 'May 2025 – Jul 2025',
    location: 'New York, NY (Remote)',
    description: 'Borough-level study of NYC motor-vehicle crash density.',
    achievements: [
      'Analyzed 2.4M+ NYC motor-vehicle crash records in Python (Pandas) for a borough-level crash-density study',
      'Built the cleaning and aggregation pipeline and the dashboards behind the team\'s published report'
    ],
    tech: ['Python', 'Pandas', 'Data Viz']
  },
]

const leadership: TimelineEntry[] = [
  {
    id: 4,
    role: 'Treasurer',
    company: 'TWESE African Association',
    period: 'Sep 2024 – Present',
    location: 'Rutgers University',
    achievements: [
      'Manage the $40,000 annual budget of a 100+ member pan-African student organization',
      'Primary liaison to the Rutgers University Student Assembly (RUSA) for supplemental funding and financial reporting'
    ],
    tech: []
  },
  {
    id: 5,
    role: 'Outreach Chair',
    company: 'ColorStack',
    period: '2025 – Present',
    location: 'Rutgers University Chapter',
    achievements: [
      'Organized a 75+ attendee networking event connecting members with engineers and internship openings',
      'Recruit new members and bring recruiters and engineers to chapter events'
    ],
    tech: []
  },
]

const TimelineCard = ({
  exp,
  index,
  isInView,
  isActive,
  onActiveChange,
}: {
  exp: TimelineEntry
  index: number
  isInView: boolean
  isActive: boolean
  onActiveChange: (id: number | null) => void
}) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.7, delay: index * 0.15 }}
    onHoverStart={() => onActiveChange(exp.id)}
    onHoverEnd={() => onActiveChange(null)}
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
          scale: isActive ? 1.5 : 1,
          backgroundColor: isActive ? '#000000' : '#111111',
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
        <div className="mt-2 md:mt-0 md:text-right">
          <p className="text-sm text-deep-charcoal/60 font-medium">
            {exp.period}
          </p>
          <p className="text-sm text-deep-charcoal/60">
            {exp.location}
          </p>
        </div>
      </div>

      {/* Description */}
      {exp.description && (
        <p className="text-deep-charcoal/70 mb-6 leading-relaxed">
          {exp.description}
        </p>
      )}

      {/* Achievements */}
      <ul className={`space-y-3 ${exp.tech.length > 0 || exp.link ? 'mb-6' : ''}`}>
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
      {exp.tech.length > 0 && (
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
      )}

      {/* External Link */}
      {exp.link && (
        <a
          href={exp.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-black hover:text-deep-charcoal transition-colors"
        >
          <span>{exp.link.label}</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      )}
    </motion.div>
  </motion.div>
)

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
              <TimelineCard
                key={exp.id}
                exp={exp}
                index={index}
                isInView={isInView}
                isActive={activeExp === exp.id}
                onActiveChange={setActiveExp}
              />
            ))}
          </div>
        </div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: experiences.length * 0.15 }}
          className="mt-24 mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-deep-charcoal/60 font-medium block">
            Leadership
          </span>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-deep-charcoal/10 hidden md:block" />

          <div className="space-y-16">
            {leadership.map((exp, index) => (
              <TimelineCard
                key={exp.id}
                exp={exp}
                index={experiences.length + index}
                isInView={isInView}
                isActive={activeExp === exp.id}
                onActiveChange={setActiveExp}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
