import type { Metadata } from 'next'
import { inter, playfairDisplay, bebasNeue } from '@/fonts'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'MusaafirCo — Curated Group Trips & Treks across India',
    template: '%s | MusaafirCo',
  },
  description:
    'Discover curated group trips, treks, weekend getaways, and budget-friendly outdoor experiences across India. Affordable, safe, community-first travel.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand text-forest">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
