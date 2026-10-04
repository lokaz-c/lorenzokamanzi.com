'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'TradeDesk – Stateful LLM Chat Service on the Edge',
    description: 'Ticker-aware trading research chat on Cloudflare\'s edge stack, with one Durable Object per conversation.',
    bullets: [
      'One Durable Object per session: single-threaded, strongly consistent conversation state with no locking in app code',
      'Context is the last 20 messages plus the three latest same-ticker analyses, pulled from D1 per request',
      'Streams Llama 3.3 70B replies as server-sent events; a tee\'d copy is persisted to DO storage and D1 in the background',
      'D1 (SQLite) schema under migrations, indexed on ticker, session and recency; history and rollup routes',
      'Single-file Vite front end: streaming markdown render, Web Speech API voice input, per-ticker history sidebar'
    ],
    tech: ['TypeScript', 'Cloudflare Workers', 'Durable Objects', 'D1 (SQLite)', 'Workers AI', 'Vite'],
    category: 'Edge Backend',
    period: 'Apr 2026',
    link: 'https://github.com/lokaz-c/cf_ai_tradedesk'
  },
  {
    id: 2,
    title: 'Quantitative Trading Simulator',
    description: 'Backtesting platform for systematic trading strategies, with a risk layer and synthetic market data.',
    bullets: [
      'Backtesting engine: pluggable strategies (MA crossover, RSI, ATR breakout), Sharpe, CAGR and drawdown metrics',
      'Risk layer (position caps, stop-losses) benchmarked vs. an unmanaged baseline; Flask REST API and dashboard',
      'Regime-switching GBM data generator (bull, bear, sideways); 23 pytest tests run in CI on Python 3.10 and 3.11'
    ],
    tech: ['Python', 'Flask', 'PostgreSQL', 'Docker', 'pytest'],
    category: 'Quant Finance',
    period: 'Dec 2025 – Present',
    link: 'https://github.com/lokaz-c/quant'
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
          {projects.map((project, index) => {
            const CardContent = (
              <>
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
                    {project.category} · {project.period}
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
                <div className="flex flex-wrap gap-2 mb-6">
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

                {/* View Project Indicator */}
                {project.link && (
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-black group-hover:text-deep-charcoal transition-colors">
                    <span>{project.link.includes('github.com') ? 'View on GitHub' : 'Visit Website'}</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
              </>
            )

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative"
              >
                {project.link ? (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="block h-full border border-deep-charcoal/10 bg-light-grey p-8 relative overflow-hidden cursor-pointer"
                  >
                    {CardContent}
                  </motion.a>
                ) : (
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className="h-full border border-deep-charcoal/10 bg-light-grey p-8 relative overflow-hidden"
                  >
                    {CardContent}
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
