'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const skillCategories = [
  {
    category: 'Languages & Frameworks',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Java', level: 90 },
      { name: 'JavaScript/TypeScript', level: 88 },
      { name: 'React/Flask', level: 90 },
      { name: 'C++', level: 82 },
      { name: 'SQL', level: 88 },
    ]
  },
  {
    category: 'Data & Cloud',
    skills: [
      { name: 'Pandas/NumPy', level: 95 },
      { name: 'Scikit-Learn', level: 85 },
      { name: 'TensorFlow (Basic)', level: 78 },
      { name: 'GCP/Cloud Deploy', level: 88 },
      { name: 'REST APIs', level: 92 },
      { name: 'Data Visualization', level: 90 },
    ]
  },
  {
    category: 'Development & Tools',
    skills: [
      { name: 'Git/GitHub', level: 95 },
      { name: 'Docker', level: 85 },
      { name: 'Flutter/Dart', level: 83 },
      { name: 'HTML/CSS', level: 88 },
      { name: 'R (Statistical)', level: 80 },
      { name: 'PostgreSQL', level: 87 },
    ]
  },
  {
    category: 'Specialties',
    skills: [
      { name: 'Full-Stack Development', level: 92 },
      { name: 'Scalable Systems', level: 90 },
      { name: 'SaaS Architecture', level: 88 },
      { name: 'Machine Learning', level: 85 },
      { name: 'Cloud Deployment', level: 90 },
      { name: 'Team Leadership', level: 88 },
    ]
  },
]

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

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
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                  >
                    {/* Skill Name and Level */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-deep-charcoal">
                        {skill.name}
                      </span>
                      <motion.span
                        animate={{
                          opacity: hoveredSkill === skill.name ? 1 : 0.6,
                          scale: hoveredSkill === skill.name ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                        className="text-xs text-deep-charcoal/60 font-mono"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 bg-light-grey overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1,
                          delay: catIndex * 0.1 + skillIndex * 0.05 + 0.2,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        className="h-full bg-black relative"
                      >
                        <motion.div
                          animate={{
                            opacity: hoveredSkill === skill.name ? 0.3 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 bg-white"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
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
          {[
            { label: 'Languages', value: '8+' },
            { label: 'Frameworks', value: '15+' },
            { label: 'Projects', value: '25+' },
            { label: 'Certifications', value: '5+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
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
                {stat.value}
              </motion.div>
              <div className="text-sm uppercase tracking-wider text-deep-charcoal/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
