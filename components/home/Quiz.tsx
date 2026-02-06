'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getRecommendation, type QuizAnswer } from '@/lib/quizLogic'
import { destinations } from '@/lib/destinations'
import { ArrowRight } from 'lucide-react'

const questions = [
  {
    id: 'q1',
    question: 'Quel type d\'expérience recherchez-vous?',
    options: ['Culturel et artistique', 'Aventure et nature', 'Élégance et raffinement'],
  },
  {
    id: 'q2',
    question: 'Quelle est votre époque préférée?',
    options: ['Histoire moderne (19e-20e)', 'Origines anciennes', 'Classicisme de la Renaissance'],
  },
  {
    id: 'q3',
    question: 'Vous préférez:',
    options: ['L\'excitation urbaine', 'La nature sauvage', 'Les musées et l\'architecture'],
  },
  {
    id: 'q4',
    question: 'Votre activité idéale:',
    options: ['Visiter des monuments', 'Observer la faune', 'Explorer des ateliers d\'art'],
  },
]

export function Quiz() {
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Partial<QuizAnswer>>({})
  const [result, setResult] = useState<ReturnType<typeof getRecommendation> | null>(null)

  const handleAnswer = (option: string) => {
    const newAnswers = {
      ...answers,
      [questions[currentQ].id as keyof QuizAnswer]: option,
    }
    setAnswers(newAnswers)

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1)
    } else {
      // Quiz complete
      const recommendation = getRecommendation(newAnswers as QuizAnswer)
      setResult(recommendation)
    }
  }

  const resetQuiz = () => {
    setCurrentQ(0)
    setAnswers({})
    setResult(null)
  }

  const recommendedDest = result
    ? destinations.find((d) => d.id === result.destinationId)
    : null

  return (
    <section id="quiz" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gold-gradient">
            Découvrez Votre Époque Parfaite
          </h2>
          <p className="text-brown-main text-lg">
            Répondez à notre quiz rapide pour trouver la destination qui correspond à votre style de voyage
          </p>
        </motion.div>

        {/* Quiz Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass border border-brown-light rounded-lg p-8 md:p-12"
        >
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key={`q${currentQ}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-gold font-semibold">
                      Question {currentQ + 1} of {questions.length}
                    </span>
                    <span className="text-gray-400">{Math.round(((currentQ + 1) / questions.length) * 100)}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-gold to-gold_light"
                      initial={{ width: '0%' }}
                      animate={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-brown-main">
                  {questions[currentQ].question}
                </h3>

                {/* Options */}
                <div className="space-y-4">
                  {questions[currentQ].options.map((option, idx) => (
                    <motion.button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full p-4 text-left border-2 border-brown-light rounded-lg hover:border-gold hover:bg-gold/5 transition-all text-brown-main hover:text-gold font-medium"
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Result */}
                <div className="text-center">
                  <motion.div
                    className="inline-block mb-6"
                    animate={{ rotate: [0, 10, -10, 10, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-6xl mb-4">✨</div>
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl font-bold text-gold mb-4">
                    {result.destinationTitle}
                  </h3>

                  <div className="mb-8 p-6 bg-dark-bg rounded-lg border border-dark-border">
                    <p className="text-gray-300 text-lg mb-6">{result.explanation}</p>

                    <div className="inline-block">
                      <div className="text-5xl font-bold text-gold">{result.matchPercentage}%</div>
                      <p className="text-gray-400 text-sm">Match</p>
                    </div>
                  </div>

                  {recommendedDest && (
                    <motion.div
                      className="p-6 bg-gradient-to-r from-dark-bg to-dark-card border border-gold/30 rounded-lg mb-8"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <p className="text-gray-300 mb-4">
                        Duration: <span className="text-gold font-bold">{recommendedDest.duration} days</span>
                      </p>
                      <p className="text-gray-300">
                        Starting from: <span className="text-gold font-bold">
                          ${recommendedDest.price.toLocaleString()}
                        </span>
                      </p>
                    </motion.div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      onClick={resetQuiz}
                      className="btn-secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Take Quiz Again
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        resetQuiz()
                        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="btn-primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Now
                      <ArrowRight size={18} className="ml-2" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
