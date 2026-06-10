'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const months = [
  'Oct 2026',
  'Nov 2026',
  'Dec 2026',
  'Jan 2027',
  'Feb 2027',
  'Mar 2027',
]

export default function Hero() {
  const reduce = useReducedMotion()
  const router = useRouter()
  const [destination, setDestination] = useState('')
  const [month, setMonth] = useState('')

  const initial = reduce ? { opacity: 0 } : { opacity: 0, y: 30 }
  const animate = { opacity: 1, y: 0 }

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (destination) params.set('search', destination)
    if (month) params.set('month', month)
    router.push(`/trips${params.toString() ? '?' + params.toString() : ''}`)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-forest">
        <Image
          src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=2000"
          alt="Mountain landscape"
          fill
          priority
          className="object-cover object-center opacity-45 animate-hero-zoom"
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-forest/20 via-forest/50 to-forest/85" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">

        {/* Eyebrow */}
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="block w-10 h-px bg-sunset/60" />
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-sunset">
            Small Batches. Big Stories.
          </span>
          <span className="block w-10 h-px bg-sunset/60" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={initial}
          animate={animate}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          className="font-display font-bold italic text-white leading-none tracking-tight mb-6"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}
        >
          Safar. Log.<br />Kahaniya.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={initial}
          animate={animate}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="font-light text-white/85 tracking-wide mb-10 leading-relaxed"
          style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)' }}
        >
          Experience the world with 8 strangers<br className="hidden sm:block" />
          who won&rsquo;t stay strangers for long.
        </motion.p>

        {/* Search bar */}
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row bg-white/8 backdrop-blur-xl border border-white/18 rounded-2xl overflow-hidden max-w-2xl mx-auto"
          style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(217,119,6,0.15)' }}
        >
          {/* Destination */}
          <div className="flex-1 px-6 py-5 border-b border-white/10 sm:border-b-0 sm:border-r text-left">
            <label className="block text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-white/50 mb-1">
              Destination
            </label>
            <input
              type="text"
              placeholder="Where to?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              className="bg-transparent border-none outline-none text-white placeholder:text-white/45 text-sm w-full"
            />
          </div>

          {/* Month */}
          <div className="flex-1 px-6 py-5 border-b border-white/10 sm:border-b-0 sm:border-r text-left">
            <label className="block text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-white/50 mb-1">
              Batch Month
            </label>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="bg-transparent border-none outline-none text-sm w-full cursor-pointer text-white/80 [&>option]:bg-forest [&>option]:text-white"
            >
              <option value="">Any Month</option>
              {months.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          {/* Button */}
          <div className="p-2 flex items-center">
            <button
              onClick={handleSearch}
              className="bg-sunset hover:bg-sunset-dark text-white text-[0.65rem] font-bold uppercase tracking-[0.2em] px-7 py-4 rounded-xl transition-colors w-full sm:w-auto whitespace-nowrap cursor-pointer"
            >
              Find My Batch →
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-linear-to-b from-transparent to-white/50" />
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/50">Scroll</span>
      </div>
    </section>
  )
}
