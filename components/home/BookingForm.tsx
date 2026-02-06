'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { destinations } from '@/lib/destinations'
import { formatPrice } from '@/lib/utils'
import { CheckCircle } from 'lucide-react'

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    travelDate: '',
    guests: '1',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', destination: '', travelDate: '', guests: '1' })
      setSubmitted(false)
    }, 3000)
  }

  const selectedDest = destinations.find((d) => d.id === formData.destination)

  return (
    <section id="booking" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gold-gradient">
            Réservez Votre Voyage
          </h2>
          <p className="text-brown-main text-lg">
            Réservez votre place dans l'histoire dès aujourd'hui
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass border border-brown-light rounded-lg p-8"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-96 text-center"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.6 }}
                >
                  <CheckCircle size={64} className="text-gold mb-4 mx-auto" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gold mb-2">Réservation Reçue!</h3>
                <p className="text-gray-300">
                  Merci pour votre intérêt. Notre équipe vous contactera sous peu avec les détails de confirmation.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gold mb-2">Nom Complet</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-brown-light rounded-lg px-4 py-3 text-brown-main placeholder-brown-main/50 focus:outline-none focus:border-gold transition-colors"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-brown-light rounded-lg px-4 py-3 text-brown-main placeholder-brown-main/50 focus:outline-none focus:border-gold transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-sm font-semibold text-gold mb-2">Destination</label>
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-brown-light rounded-lg px-4 py-3 text-brown-main focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">Choisir une destination</option>
                    {destinations.map((dest) => (
                      <option key={dest.id} value={dest.id}>
                        {dest.title} - {formatPrice(dest.price)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Travel Date */}
                <div>
                  <label className="block text-sm font-semibold text-gold mb-2">Date de Voyage Préférée</label>
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-brown-light rounded-lg px-4 py-3 text-brown-main focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-semibold text-gold mb-2">Nombre de Voyageurs</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-white border border-brown-light rounded-lg px-4 py-3 text-brown-main focus:outline-none focus:border-gold transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num.toString()}>
                        {num} {num === 1 ? 'Voyageur' : 'Voyageurs'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="btn-primary w-full text-lg mt-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Confirmer la Réservation
                </motion.button>

                <p className="text-xs text-brown-main/60 text-center">
                  En réservant, vous acceptez nos conditions de voyage temporel et protocoles de sécurité.
                </p>
              </form>
            )}
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass border border-brown-light rounded-lg p-8 h-fit sticky top-20"
          >
            <h3 className="text-xl font-bold text-gold mb-6">Résumé de Réservation</h3>

            {selectedDest ? (
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Destination</p>
                  <p className="text-lg font-semibold text-white">{selectedDest.title}</p>
                </div>

                <div className="border-t border-brown-light pt-4">
                  <p className="text-brown-main/60 text-sm">Durée</p>
                  <p className="text-lg font-semibold text-brown-main">{selectedDest.duration} jours</p>
                </div>

                <div className="border-t border-brown-light pt-4">
                  <p className="text-brown-main/60 text-sm">Prix par Voyageur</p>
                  <p className="text-2xl font-bold text-gold">{formatPrice(selectedDest.price)}</p>
                </div>

                {formData.guests && (
                  <div className="border-t border-brown-light pt-4">
                    <p className="text-brown-main/60 text-sm">Total ({formData.guests} voyageurs)</p>
                    <p className="text-2xl font-bold text-gold">
                      {formatPrice(selectedDest.price * parseInt(formData.guests))}
                    </p>
                  </div>
                )}

                <div className="border-t border-brown-light pt-4 mt-6">
                  <p className="text-xs text-brown-main/60">
                    ✓ Forfait tout-inclusif<br />
                    ✓ Guides experts inclus<br />
                    ✓ Garantie de sécurité temporelle
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-brown-main">Sélectionnez une destination pour voir les détails de tarification</p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
