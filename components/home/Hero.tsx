'use client'

import { motion } from 'framer-motion'
import { scrollToElement } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20 opacity-40"
      >
        <source src="/images/video ia.mp4" type="video/mp4" />
      </video>

      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'radial-gradient(at 20% 50%, rgba(217, 119, 6, 0.15) 0%, transparent 50%)',
            'radial-gradient(at 80% 50%, rgba(217, 119, 6, 0.15) 0%, transparent 50%)',
            'radial-gradient(at 20% 50%, rgba(217, 119, 6, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-gold text-lg font-semibold mb-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✨ Voyage à Travers le Temps ✨
          </motion.p>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gold-gradient">Agence</span> Voyage Temporel
          </h1>

          <p className="text-xl md:text-2xl text-brown-main mb-8 max-w-2xl mx-auto">
            Voyages de luxe à travers le temps. Expérimentez les moments les plus magnifiques de l'histoire avec un style inégalé.
          </p>

          <motion.button
            onClick={() => scrollToElement('destinations')}
            className="btn-primary text-lg inline-flex items-center gap-3 mb-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explorer les Destinations
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>

        {/* Floating Elements */}
        
      </div>
    </section>
  )
}
