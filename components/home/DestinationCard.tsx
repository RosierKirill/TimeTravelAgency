'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { formatPrice } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import type { Destination } from '@/lib/destinations'

interface DestinationCardProps {
  destination: Destination
  onClick: () => void
}

export function DestinationCard({ destination, onClick }: DestinationCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className="card-hover cursor-pointer group h-full"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white border border-brown-light rounded-lg overflow-hidden h-full flex flex-col shadow-md">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-200 to-brown-main">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${destination.theme.gradient} mix-blend-overlay`}
          />
          <motion.img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 right-4 bg-gold/20 backdrop-blur-md px-3 py-1 rounded-full">
            <span className="text-gold text-sm font-semibold">{destination.era}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-2xl font-bold text-gold mb-2">{destination.title}</h3>
          <p className="text-brown-main text-sm mb-4 flex-1">{destination.shortDesc}</p>

          {/* Price and Duration */}
          <div className="flex justify-between items-center mb-6 pb-6 border-b border-brown-light">
            <div>
              <p className="text-brown-main/60 text-xs uppercase">From</p>
              <p className="text-gold text-xl font-bold">{formatPrice(destination.price)}</p>
            </div>
            <div className="text-right">
              <p className="text-brown-main/60 text-xs uppercase">Duration</p>
              <p className="text-brown-main text-lg font-semibold">{destination.duration} days</p>
            </div>
          </div>

          {/* Button */}
          <motion.button
            className="btn-primary w-full flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
            <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
