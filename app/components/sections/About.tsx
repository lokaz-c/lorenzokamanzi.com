'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const funFacts = [
  { id: 1, emoji: '🚀', text: 'Co-founded AI SaaS startup' },
  { id: 2, emoji: '🏆', text: 'HackRU Finalist (Top 5%)' },
  { id: 3, emoji: '🌍', text: 'All-Star Code Scholar' },
  { id: 4, emoji: '📈', text: 'Dean\'s List All Semesters' },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredFact, setHoveredFact] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-light-grey">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-deep-charcoal/60 font-medium">
            About Me
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Main Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black leading-tight">
              Building at the Intersection of AI & Business
            </h2>
            <div className="space-y-4 text-deep-charcoal/80 text-lg leading-relaxed">
              <p>
                I'm a double major in Computer Science and Finance at Rutgers University (Honors Track),
                Class of 2028. As Co-Founder and Lead Engineer at Creo, I'm building AI-powered systems
                that help entrepreneurs turn ideas into fully automated businesses.
              </p>
              <p>
                From scaling backends to handle 10,000+ concurrent requests to deploying ERP systems across
                manufacturing operations in Rwanda, I thrive on solving complex technical challenges with real
                business impact. My approach combines engineering rigor with strategic thinking—whether it's
                optimizing system performance or designing scalable SaaS architectures.
              </p>
              <p>
                I'm passionate about full-stack development, cloud infrastructure, and machine learning applications.
                Currently seeking internships and opportunities where I can build production-ready systems that scale.
              </p>
            </div>
          </motion.div>

          {/* Fun Facts - Interactive Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold mb-6 text-black">Quick Facts</h3>
            <div className="grid grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={fact.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  onHoverStart={() => setHoveredFact(fact.id)}
                  onHoverEnd={() => setHoveredFact(null)}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white p-6 border border-deep-charcoal/10 cursor-default transition-all"
                  >
                    <motion.div
                      animate={{
                        scale: hoveredFact === fact.id ? 1.2 : 1,
                        rotate: hoveredFact === fact.id ? 10 : 0,
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                      className="text-3xl mb-3"
                    >
                      {fact.emoji}
                    </motion.div>
                    <p className="text-sm text-deep-charcoal font-medium leading-snug">
                      {fact.text}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
