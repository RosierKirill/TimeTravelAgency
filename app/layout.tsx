import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TimeTravel Agency - Luxury Time Travel Experiences',
  description: 'Experience luxury time travel to Paris 1889, Cretaceous Era, and Florence 1504',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0b0f1a" />
      </head>
      <body className="bg-dark-bg text-white antialiased">
        {children}
      </body>
    </html>
  )
}
