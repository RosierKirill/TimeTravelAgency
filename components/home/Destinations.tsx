'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { destinations } from '@/lib/destinations'
import { DestinationCard } from './DestinationCard'
import { DestinationModal } from './DestinationModal'
import type { Destination } from '@/lib/destinations'

export function Destinations() {
  const [selectedDest, setSelectedDest] = useState<Destination | null>(null)

  return (
    <section id="destinations" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gold-gradient">
            Nos Destinations
          </h2>
          <p className="text-brown-main text-lg max-w-2xl mx-auto">
            Trois périodes extraordinaires dans le temps, chacune offrant une expérience de luxe unique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <DestinationCard
                destination={dest}
                onClick={() => setSelectedDest(dest)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedDest && (
          <DestinationModal
            destination={selectedDest}
            onClose={() => setSelectedDest(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
