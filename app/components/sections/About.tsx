'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const funFacts = [
  { id: 1, value: '984', text: 'Signups on Creo, the startup I co-founded' },
  { id: 2, value: 'Top 5%', text: 'HackRU Finalist, Fall 2025 (142 projects)' },
  { id: 3, value: '3.8', text: 'GPA, Dean\'s List' },
  { id: 4, value: 'Scholar', text: 'All-Star Code' },
]

const education = {
  school: 'Rutgers University – New Brunswick',
  degree: 'B.S. in Computer Science and Finance (double major)',
  gpa: '3.8/4.0',
  graduation: 'Expected May 2028',
  location: 'New Brunswick, NJ',
  details: [
    { label: 'Honors', text: 'Dean\'s List, HackRU Finalist (Fall 2025, top 5% of 142 projects), All-Star Code Scholar' },
    { label: 'Activities', text: 'NSBE, CodePath, USACS' },
    { label: 'Coursework', text: 'Data Structures & Algorithms, Computer Architecture, Discrete Math, Probability' },
  ],
}

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
              Building at the Intersection of Software & Finance
            </h2>
            <div className="space-y-4 text-deep-charcoal/80 text-lg leading-relaxed">
              <p>
                I'm a double major in Computer Science and Finance at Rutgers University–New Brunswick,
                graduating May 2028. With one co-founder I built Creo, a startup validation platform with
                984 signups, where I wrote the scoring engine and a two-stage competitor check that settles
                clear cases without an API call.
              </p>
              <p>
                In summer 2025 I led an Odoo ERP rollout at DIKAM Fashion, a garment manufacturer in Kigali:
                I wrote a custom manufacturing module, migrated ten years of Excel books into SQL, and helped
                cut month-end close from two weeks to four days. That same summer I analyzed 2.4M+ NYC crash
                records for Columbia's Northeast Big Data Innovation Hub.
              </p>
              <p>
                On my own time I build things like TradeDesk, a stateful LLM chat service on Cloudflare
                Workers and Durable Objects, and a quantitative trading simulator with a backtesting engine
                and risk layer. I'm looking for software engineering internships and roles where engineering
                meets finance.
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
                  className="relative"
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="h-full bg-white p-6 border border-deep-charcoal/10 cursor-default transition-all"
                  >
                    <div className="text-3xl font-bold text-black mb-2">
                      {fact.value}
                    </div>
                    <p className="text-sm text-deep-charcoal font-medium leading-snug">
                      {fact.text}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-6 text-black">Education</h3>
          <div className="bg-white border border-deep-charcoal/10 p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h4 className="text-xl font-bold text-black mb-1">
                  {education.school}
                </h4>
                <p className="text-deep-charcoal font-medium">
                  {education.degree} · GPA {education.gpa}
                </p>
              </div>
              <div className="mt-2 md:mt-0 md:text-right">
                <p className="text-sm text-deep-charcoal/60 font-medium">
                  {education.graduation}
                </p>
                <p className="text-sm text-deep-charcoal/60">
                  {education.location}
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {education.details.map((detail) => (
                <li key={detail.label} className="text-sm text-deep-charcoal flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-black mr-3 mt-2 flex-shrink-0" />
                  <span>
                    <span className="font-semibold">{detail.label}:</span> {detail.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
