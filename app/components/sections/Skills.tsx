'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    category: 'Languages',
    statLabel: 'Languages',
    skills: ['Java', 'Python', 'C++', 'TypeScript', 'JavaScript', 'Kotlin', 'Dart', 'PHP', 'SQL', 'HTML/CSS'],
  },
  {
    category: 'Frameworks & Tools',
    statLabel: 'Frameworks & Tools',
    skills: ['Spring Boot', 'React', 'Next.js', 'Flutter', 'Flask', 'Pandas', 'NumPy', 'pytest', 'Git', 'GitHub Actions', 'Docker'],
  },
  {
    category: 'Cloud & Databases',
    statLabel: 'Cloud & Databases',
    skills: ['Cloudflare Workers', 'Supabase', 'Firebase Firestore (NoSQL)', 'PostgreSQL', 'SQLite'],
  },
  {
    category: 'AI-Assisted Development',
    statLabel: 'AI Dev Tools',
    skills: ['Claude Code', 'Cursor', 'Kiro', 'Codex'],
  },
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-xs uppercase tracking-widest text-deep-charcoal/60 font-medium mb-4 block">
            Skills & Expertise
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-black">
            Technical Arsenal
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: catIndex * 0.1 }}
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-black mb-8 pb-4 border-b border-deep-charcoal/10">
                {category.category}
              </h3>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ y: -2 }}
                    className="text-sm px-4 py-2 bg-light-grey border border-deep-charcoal/20 text-deep-charcoal font-medium cursor-default transition-colors hover:bg-black hover:text-white"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.statLabel}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="text-center p-6 bg-light-grey border border-deep-charcoal/10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1, type: 'spring' }}
                className="text-4xl font-bold text-black mb-2"
              >
                {category.skills.length}
              </motion.div>
              <div className="text-sm uppercase tracking-wider text-deep-charcoal/60">
                {category.statLabel}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
