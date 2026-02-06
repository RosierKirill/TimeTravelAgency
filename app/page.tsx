'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { AgencyIntro } from '@/components/home/AgencyIntro'
import { Destinations } from '@/components/home/Destinations'
import { Quiz } from '@/components/home/Quiz'
import { BookingForm } from '@/components/home/BookingForm'
import { ChatWidget } from '@/components/chatbot/ChatWidget'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AgencyIntro />
        <Destinations />
        <Quiz />
        <BookingForm />
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
