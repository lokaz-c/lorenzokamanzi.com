'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Foundly – AI Business Automation Platform',
    description: 'Co-founded AI SaaS startup enabling users to build entire businesses from an idea.',
    bullets: [
      'Scaled backend to handle 10,000+ concurrent requests with sub-300ms response time and 99.5% success rate',
      'Integrated 15+ AI APIs across marketing, development, and automation workflows',
      'Launched closed beta to 45 users; projected $36K ARR within first 90 days post-launch'
    ],
    tech: ['Python', 'Flask', 'GCP', 'REST APIs', 'AI Integration'],
    category: 'AI SaaS Platform'
  },
  {
    id: 2,
    title: 'Quant Investing Portfolio Simulator',
    description: 'Trading strategy backtesting platform using real market data and risk management.',
    bullets: [
      'Developed basic trading strategy simulator processing 30,000+ data points',
      'Implemented risk rules that reduced drawdown by 3% during backtests',
      'Analyzed performance metrics across multiple market conditions'
    ],
    tech: ['Python', 'Flask', 'PostgreSQL', 'Docker'],
    category: 'Finance Tool'
  },
  {
    id: 3,
    title: 'Mental Health AI Coach',
    description: 'NLP chatbot providing personalized mental health support with real-time responses.',
    bullets: [
      'Achieved 94% sentiment classification accuracy using OpenAI GPT APIs',
      'Increased user engagement by 38% during testing phase',
      'Integrated Firebase for real-time data sync and personalization'
    ],
    tech: ['Flutter', 'Dart', 'OpenAI API', 'Firebase', 'Git'],
    category: 'AI Application'
  },
  {
    id: 4,
    title: 'DIKAM ERP Implementation',
    description: 'Enterprise resource planning system deployed across manufacturing operations in Rwanda.',
    bullets: [
      'Digitized workflows for 280+ employees, cutting manual reporting time by 65%',
      'Improved data accuracy by 40% through inventory, procurement, and payroll integration',
      'Automated data migration of 10+ years of records, reducing retrieval latency from minutes to under 5 seconds'
    ],
    tech: ['Python', 'SQL', 'ERP Systems', 'Cloud Database'],
    category: 'Enterprise System'
  },
  {
    id: 5,
    title: 'All-Star Code STEM Learning App',
    description: 'Educational platform used by 150+ daily active users across NYC schools.',
    bullets: [
      'Led team of 3 developers to build gamification system improving engagement by 65%',
      'Increased lesson completion rates by 47% through interactive features',
      'Built Flask REST API + React frontend, reducing API latency by 22% post-deployment'
    ],
    tech: ['React', 'Flask', 'REST APIs', 'JavaScript', 'Python'],
    category: 'Education Tech'
  },
  {
    id: 6,
    title: 'Urban Crash Data Analysis',
    description: 'Research platform analyzing 2.4M+ city crash records for Columbia University.',
    bullets: [
      'Processed massive datasets using pandas and NumPy to find population density correlations',
      'Built data visualization dashboards improving research report readability by 70%',
      'Applied data ethics protocols reducing analysis error rate by 31% across team'
    ],
    tech: ['Python', 'Pandas', 'NumPy', 'Excel', 'Data Viz'],
    category: 'Data Research'
  }
]

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

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
            Selected Projects
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-black">
            Building Systems,<br />Creating Value
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="h-full border border-deep-charcoal/10 bg-light-grey p-8 relative overflow-hidden"
              >
                {/* Hover effect line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 right-0 h-[2px] bg-black origin-left"
                />

                {/* Category Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-wider text-deep-charcoal/60 font-medium">
                    {project.category}
                  </span>
                  <motion.div
                    animate={{
                      rotate: hoveredProject === project.id ? 45 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="w-6 h-6 flex items-center justify-center"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </motion.div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold mb-3 text-black group-hover:text-deep-charcoal transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-deep-charcoal/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact Bullets */}
                <ul className="space-y-2 mb-6">
                  {project.bullets.map((bullet, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                      className="text-sm text-deep-charcoal/80 flex items-start"
                    >
                      <span className="inline-block w-1 h-1 rounded-full bg-black mr-3 mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                      className="text-xs px-3 py-1 bg-white border border-deep-charcoal/20 text-deep-charcoal font-medium"
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
    </section>
  )
}

export default Projects
