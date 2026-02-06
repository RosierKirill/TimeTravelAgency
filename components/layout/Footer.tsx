'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-brown-main border-t border-brown-light py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-gold font-semibold mb-4">Agence Voyage Temporel</h3>
            <p className="text-gray-400 text-sm">
              Expériences de voyage temporel de luxe aux moments les plus remarquables de l'histoire.
            </p>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-gold font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Paris 1889</li>
              <li>Ère Crétacée</li>
              <li>Florence 1504</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-gold font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>FAQ</li>
              <li>Nous Contacter</li>
              <li>Sécurité</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-gold font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Conditions d'Utilisation</li>
              <li>Politique de Confidentialité</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>

        <motion.div
          className="border-t border-dark-border pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            © 2026 Agence Voyage Temporel. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Créé avec ⏰ et ✨ par les Développeurs Voyage Temporel
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
