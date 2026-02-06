'use client'

import { motion } from 'framer-motion'
import { scrollToElement } from '@/lib/utils'
import { X, Check } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import type { Destination } from '@/lib/destinations'

interface DestinationModalProps {
  destination: Destination
  onClose: () => void
}

export function DestinationModal({ destination, onClose }: DestinationModalProps) {
  const handleBookClick = () => {
    onClose()
    setTimeout(() => scrollToElement('booking'), 100)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative z-10 max-w-2xl w-full max-h-96 overflow-y-auto bg-white border border-brown-light rounded-lg shadow-2xl shadow-brown-main/30 glass"
      >
        {/* Close Button */}
        <motion.button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <X size={20} className="text-gold" />
        </motion.button>

        {/* Header */}
        <div className="relative h-64 bg-gradient-to-br from-gray-800 to-black overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${destination.theme.gradient} mix-blend-overlay`}
          />
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-gold mb-2">{destination.title}</h2>
            <p className="text-brown-main/80 text-lg">{destination.era}</p>
          </div>

          {/* Full Description */}
          <p className="text-brown-main mb-8 leading-relaxed">{destination.fullDesc}</p>

          {/* Highlights */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gold mb-4">Highlights</h3>
            <ul className="space-y-3">
              {destination.highlights.map((highlight, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <Check size={20} className="text-gold flex-shrink-0 mt-1" />
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Safety Notes */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gold mb-4">Safety & Comfort</h3>
            <ul className="space-y-3">
              {destination.safetyNotes.map((note, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <Check size={20} className="text-green-400 flex-shrink-0 mt-1" />
                  <span>{note}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Pricing and Duration */}
          <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-dark-bg rounded-lg border border-dark-border">
            <div>
              <p className="text-gray-500 text-sm uppercase mb-1">Starting Price</p>
              <p className="text-3xl font-bold text-gold">{formatPrice(destination.price)}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm uppercase mb-1">Duration</p>
              <p className="text-3xl font-bold text-white">{destination.duration} Days</p>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={handleBookClick}
            className="btn-primary w-full text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book This Trip
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
