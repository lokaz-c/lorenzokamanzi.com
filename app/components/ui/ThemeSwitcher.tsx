'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/app/lib/hooks'

const themes = [
  { id: 'corporate', label: 'Corporate', description: 'Goldman × McKinsey' },
  { id: 'tech', label: 'Tech Founder', description: 'Apple × Vercel' },
  { id: 'playful', label: 'Playful', description: 'Framer × Indie' },
] as const

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <div className="bg-white border border-deep-charcoal/10 p-4 shadow-lg">
        <p className="text-xs uppercase tracking-wider text-deep-charcoal/60 font-medium mb-3">
          Style Mode
        </p>
        <div className="space-y-2">
          {themes.map((themeOption) => (
            <motion.button
              key={themeOption.id}
              onClick={() => toggleTheme(themeOption.id)}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                theme === themeOption.id
                  ? 'bg-black text-white'
                  : 'bg-transparent text-deep-charcoal hover:bg-light-grey'
              }`}
            >
              <div className="font-medium">{themeOption.label}</div>
              <div className="text-xs opacity-70">{themeOption.description}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ThemeSwitcher
