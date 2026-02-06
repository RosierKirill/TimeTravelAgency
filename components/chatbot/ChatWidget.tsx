'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'assistant'
  timestamp: Date
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bienvenue à l\'Agence Voyage Temporel! Comment puis-je vous aider aujourd\'hui?',
      sender: 'assistant',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    const userInput = input
    setInput('')
    setIsLoading(true)

    // Simple local responses
    const responses: { [key: string]: string } = {
      paris: '🗼 Paris 1889 est magnifique! L\'Exposition Universelle et la tour Eiffel vous attendent. 45 000€ pour 7 jours.',
      dinosaure: '🦕 L\'Ère Crétacée vous offre une aventure inoubliable avec les dinosaures! 125 000€ pour 5 jours.',
      florence: '🎨 Florence 1504 - Assistez au dévoilement du David de Michelangelo. 55 000€ pour 6 jours.',
      prix: '💰 Paris: 45k€ | Florence: 55k€ | Crétacée: 125k€',
      réserver: '📅 Cliquez sur "Réservez Votre Voyage" pour commencer votre réservation!',
      help: '❓ Posez-moi des questions sur Paris, Florence, les dinosaures, les prix ou la réservation!',
    }

    // Find matching response
    let reply = 'Comment puis-je vous aider?'
    const lowerInput = userInput.toLowerCase()
    
    for (const [key, value] of Object.entries(responses)) {
      if (lowerInput.includes(key)) {
        reply = value
        break
      }
    }

    // Simulate thinking time
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: reply,
        sender: 'assistant',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 600)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-gold to-gold_light text-white shadow-lg hover:shadow-xl shadow-gold/30 flex items-center justify-center hover:scale-110 transition-transform"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: 0 }}
              animate={{ rotate: 90 }}
              exit={{ rotate: 0 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: 90 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-32px)] h-96 bg-white border border-brown-light rounded-lg shadow-2xl shadow-brown-main/20 flex flex-col overflow-hidden glass"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-gold/20 to-gold/10 border-b border-brown-light p-4">
              <h3 className="font-semibold text-lg text-gold">Assistant Voyage Temporel</h3>
              <p className="text-xs text-brown-main">Toujours là pour vous aider</p>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-gold text-dark-bg rounded-br-none'
                        : 'bg-dark-border text-white rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-dark-border text-white px-4 py-2 rounded-lg rounded-bl-none">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSendMessage}
              className="border-t border-dark-border p-3 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-dark-bg border border-dark-border rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-gold to-gold_light text-dark-bg p-2 rounded-lg hover:shadow-lg shadow-gold/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
