'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const opportunities = [
  {
    id: 1,
    role: 'Software Engineer',
    icon: '💻',
    pitch: 'Ship production-ready code with clean architecture and performance optimization.',
    value: [
      'Full-stack development with modern frameworks',
      'System design and scalability mindset',
      'Strong CS fundamentals and algorithmic thinking',
      'Collaborative coding and code review experience'
    ]
  },
  {
    id: 2,
    role: 'Data Analyst',
    icon: '📊',
    pitch: 'Transform raw data into actionable insights that drive strategic decisions.',
    value: [
      'Advanced SQL and data manipulation skills',
      'Statistical analysis and visualization expertise',
      'Business acumen with technical depth',
      'Clear communication of complex findings'
    ]
  },
  {
    id: 3,
    role: 'Quant Researcher',
    icon: '📈',
    pitch: 'Develop systematic strategies backed by rigorous research and backtesting.',
    value: [
      'Strong foundation in probability and statistics',
      'Backtesting experience with Sharpe, CAGR and drawdown metrics',
      'Python (Pandas, NumPy) for quantitative analysis',
      'Research mindset with practical implementation skills'
    ]
  },
  {
    id: 4,
    role: 'Finance Analyst',
    icon: '💼',
    pitch: 'Deliver comprehensive financial analysis with data-driven recommendations.',
    value: [
      'Financial modeling and valuation expertise',
      'Industry and market research capabilities',
      'Excel and financial software proficiency',
      'Strategic thinking with attention to detail'
    ]
  },
  {
    id: 5,
    role: 'Product / Strategy',
    icon: '🎯',
    pitch: 'Bridge technical and business perspectives to build products that matter.',
    value: [
      'Technical background with business intuition',
      'User-centric design and problem-solving',
      'Data analysis for product decisions',
      'Stakeholder management and communication'
    ]
  },
  {
    id: 6,
    role: 'Technical Internships',
    icon: '🚀',
    pitch: 'Learn fast, contribute meaningfully, and grow with your team.',
    value: [
      'Eager to learn and adapt quickly',
      'Strong work ethic and self-motivation',
      'Team player with independent problem-solving',
      'Passionate about technology and innovation'
    ]
  },
]

const Opportunities = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredOpp, setHoveredOpp] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-light-grey">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <span className="text-xs uppercase tracking-widest text-deep-charcoal/60 font-medium mb-4 block">
            What I Can Do For You
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Ready to Create Impact
          </h2>
          <p className="text-lg text-deep-charcoal/70">
            Whether you're looking for technical depth, analytical rigor, or hybrid expertise,
            I bring a unique blend of CS and Finance skills to solve complex problems.
          </p>
        </motion.div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opp, index) => (
            <motion.div
              key={opp.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              onHoverStart={() => setHoveredOpp(opp.id)}
              onHoverEnd={() => setHoveredOpp(null)}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="h-full bg-white border border-deep-charcoal/10 p-8 relative overflow-hidden"
              >
                {/* Background accent on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredOpp === opp.id ? 0.03 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black pointer-events-none"
                />

                {/* Icon */}
                <motion.div
                  animate={{
                    scale: hoveredOpp === opp.id ? 1.2 : 1,
                    rotate: hoveredOpp === opp.id ? 5 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="text-5xl mb-6"
                >
                  {opp.icon}
                </motion.div>

                {/* Role Title */}
                <h3 className="text-2xl font-bold text-black mb-4">
                  {opp.role}
                </h3>

                {/* Pitch */}
                <p className="text-deep-charcoal/80 mb-6 leading-relaxed font-medium">
                  {opp.pitch}
                </p>

                {/* Value Props */}
                <ul className="space-y-2">
                  {opp.value.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                      className="text-sm text-deep-charcoal/70 flex items-start"
                    >
                      <span className="inline-block w-1 h-1 rounded-full bg-black mr-3 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover indicator */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredOpp === opp.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-black origin-left"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-black mb-6">
            Let's Build Something Great
          </h3>
          <p className="text-lg text-deep-charcoal/70 mb-8 max-w-2xl mx-auto">
            Open to full-time opportunities (post-graduation), internships, and project collaborations.
            Always excited to discuss technology, markets, and innovative ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:kamanzilorenzo17@gmail.com"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-black text-white rounded-none font-medium text-sm tracking-wide uppercase transition-all hover:bg-deep-charcoal"
            >
              Email Me
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/lorenzokamanzi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent text-black border border-black rounded-none font-medium text-sm tracking-wide uppercase transition-all hover:bg-black hover:text-white"
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://github.com/lokaz-c"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-transparent text-black border border-black rounded-none font-medium text-sm tracking-wide uppercase transition-all hover:bg-black hover:text-white"
            >
              GitHub
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Opportunities
