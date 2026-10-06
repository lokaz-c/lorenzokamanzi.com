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
      'Answers grounded through Workers AI tool calls to the market-data API; a post-check flags any price not in the data',
      'Streams Llama 3.3 70B over SSE; a tee\'d copy is persisted to DO storage and D1, indexed on (ticker, created_at)',
      'Per-IP rate limits, a daily D1 budget and token caps; 548 vitest tests across the Workers pool and jsdom',
      'Vite front end: DOMPurify-sanitized markdown, voice input, history sidebar, Lightweight Charts with the cited levels'
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
      'Backtesting engine: pluggable strategies (MA crossover, RSI, breakout with ATR stop), Sharpe, CAGR and drawdown metrics',
      'Risk layer (position caps, stop-losses, drawdown halt) vs. an unmanaged baseline; Flask API and React/TypeScript UI',
      'Profiled the bar loop and precomputed indicators: 25.8 s to 0.12 s on 32,625 rows, results byte-identical in CI',
      'PostgreSQL schema under Alembic (NUMERIC money, TIMESTAMPTZ, CHECKs); drawdown and Sharpe re-checked in SQL',
      'Seeded Markov regime-switching GBM generator; 430 pytest and 32 frontend tests in CI on Python 3.11 and 3.12'
    ],
    tech: ['Python', 'Flask', 'PostgreSQL', 'React', 'TypeScript', 'Docker', 'pytest'],
    category: 'Quant Finance',
    period: 'Dec 2025 – Present',
    link: 'https://github.com/lokaz-c/quant'
  },
  {
    id: 3,
    title: 'market-data – Market Data Service in Java and SQL',
    description: 'Ingests daily US equity bars and splits into PostgreSQL and serves prices, indicators and levels over a REST API.',
    bullets: [
      'Java 25 and Spring Boot 4 with hand-written SQL through JdbcClient (no ORM); Flyway migrations on PostgreSQL 18',
      'Idempotent ingestion (ON CONFLICT upserts, retries with backoff); split-adjusted prices in a window-function view',
      'SMA, volatility, ATR, 52-week range and pivots in SQL; EXPLAIN-driven view rewrite: last 100 bars 7.62 ms to 0.59 ms',
      'REST API with RFC 9457 errors, keyset pagination, ETags, per-IP rate limits and scoped API keys; React chart explorer',
      'JUnit, Testcontainers and WireMock tests; k6 load test at 200 req/s: p95 19.5 ms (local run, synthetic data)'
    ],
    tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Flyway', 'Testcontainers', 'React', 'Docker'],
    category: 'Backend / SQL',
    period: 'Oct 2026',
    link: 'https://github.com/lokaz-c/market-data'
  },
  {
    id: 4,
    title: 'ERP Migration Demo – Excel Books to PostgreSQL',
    description: 'A reconstruction, on synthetic data, of the approach behind the DIKAM migration: messy Excel books into a normalized schema.',
    bullets: [
      'Seeded generator writes 42 messy workbooks (mixed date formats, RWF and USD amounts, misspelled suppliers) plus ground truth',
      'Python and SQL ETL into PostgreSQL 18: constraints, a rejects table with reason codes, window-function de-duplication',
      'Supplier matching scored against the ground truth: precision 1.000, recall 0.758, no wrong merges',
      'Data-quality report: 21,120 rows in, 18,901 loaded, 530 duplicates merged, 325 rejected with a reason'
    ],
    tech: ['Python', 'PostgreSQL', 'SQL', 'pandas', 'pytest', 'Testcontainers'],
    category: 'Data Engineering',
    period: 'Oct 2026',
    link: 'https://github.com/lokaz-c/erp-migration-demo'
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
