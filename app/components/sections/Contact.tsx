'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 bg-light-grey">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="text-xs uppercase tracking-widest text-deep-charcoal/60 font-medium mb-4 block">
          Contact
        </span>
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-deep-charcoal/70 mb-8 max-w-2xl mx-auto">
          I'm looking for Summer 2027 internships in software engineering and quant or fintech
          engineering. Email is the fastest way to reach me.
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
    </section>
  )
}

export default Contact
