'use client'

import { motion } from 'framer-motion'

export function AgencyIntro() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gold-gradient">
            Bienvenue à l'Avenir du Voyage
          </h2>

          <div className="space-y-4 text-brown-main text-lg leading-relaxed">
            <p>
              Depuis des siècles, les humains observent l'histoire à travers des livres et des musées. À l'Agence Voyage Temporel,
              nous avons rendu l'impossible possible. En utilisant une technologie temporelle de pointe, nous vous transportons
              directement dans les moments les plus importants et les plus magnifiques de l'histoire.
            </p>

            <p>
              Nos destinations sélectionnées représentent l'apogée de la réussite humaine et de la merveille naturelle.
              Que vous recherchiez la renaissance artistique de Florence, l'élégance Belle Époque de Paris,
              ou la majesté brute de la Terre préhistorique, nous offrons une expérience de luxe incomparable.
            </p>

            <p className="text-gold font-semibold">
              Chaque voyage est une histoire. Chaque moment, inoubliable.
            </p>
          </div>

          <motion.div
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { icon: '🛡️', title: 'Sécurité Temporelle', desc: 'Technologie de protection avancée' },
              { icon: '🎯', title: 'Guides Experts', desc: 'Historiens et professionnels' },
              { icon: '✨', title: 'Expérience Luxe', desc: 'Hébergement premium' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="glass p-6 rounded-lg border border-brown-light hover:border-gold transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-gold font-semibold mb-2">{item.title}</h3>
                <p className="text-brown-main text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
