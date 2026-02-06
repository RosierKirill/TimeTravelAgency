'use client'

import { motion } from 'framer-motion'
import { scrollToElement } from '@/lib/utils'

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brown-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold text-gold-gradient cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
        >
          ⏰ Agence Voyage Temporel
        </motion.h1>

        <nav className="hidden md:flex gap-8 items-center">
          {[
            { label: 'Destinations', id: 'destinations' },
            { label: 'Quiz', id: 'quiz' },
            { label: 'Réserver', id: 'booking' },
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToElement(item.id)}
              className="text-brown-main hover:text-gold transition-colors text-sm font-medium"
              whileHover={{ x: 5 }}
            >
              {item.label}
            </motion.button>
          ))}
          <motion.button
            onClick={() => scrollToElement('booking')}
            className="btn-primary text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explorer Maintenant
          </motion.button>
        </nav>

        {/* Mobile Menu - simplified for demo */}
        <div className="md:hidden">
          <motion.button
            className="btn-primary text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Menu
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}
