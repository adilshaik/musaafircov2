'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import Button from '@/components/ui/Button'

interface CollabHeroProps {
  onRegister: () => void
}

const tags = ['5 Days', 'Trail Runs', 'Yoga & Breathwork', 'Bonfires', 'Max 8 per batch']

export default function CollabHero({ onRegister }: CollabHeroProps) {
  const reduce = useReducedMotion()
  const initial = reduce ? { opacity: 0 } : { opacity: 0, y: 28 }
  const animate = { opacity: 1, y: 0 }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-forest">
      {/* Slow-zoom background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=2000"
          alt="Trail running in the Himalayas — MusaafirCo × MoveAndMind"
          fill
          priority
          className="object-cover object-center opacity-40 animate-hero-zoom"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-forest/40 via-forest/65 to-forest/92" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-32 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow with decorative lines */}
          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' as const }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="block w-8 h-px bg-sunset/60 shrink-0" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-sunset">
              MusaafirCo × MoveAndMind
            </span>
            <span className="block w-8 h-px bg-sunset/60 shrink-0" />
          </motion.div>

          <motion.h1
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' as const }}
            className="font-display font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            Move Your Body.{' '}
            <em className="text-sunset italic">Free Your Mind.</em>{' '}
            <br className="hidden md:block" />
            Explore India.
          </motion.h1>

          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' as const }}
            className="text-white/75 text-lg leading-relaxed max-w-2xl mb-8"
          >
            We brought together MusaafirCo&rsquo;s travel expertise and MoveAndMind&rsquo;s
            movement &amp; mindfulness community to create something new: outdoor
            experiences that are as good for your body as they are for your soul.
          </motion.p>

          {/* Feature tags */}
          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' as const }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold text-white/65 bg-white/8 border border-white/15 rounded-full px-4 py-1.5 tracking-wide"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' as const }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="primary" size="lg" onClick={onRegister}>
              Register Interest
            </Button>
            <a
              href="#events"
              className="inline-flex items-center px-8 py-4 text-base font-semibold text-white/75 hover:text-white transition-colors gap-2"
            >
              See upcoming events
              <span className="text-sunset">↓</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-linear-to-b from-transparent to-white/50" />
        <span className="text-white/40 text-xs tracking-[0.2em] uppercase">Scroll</span>
      </div>
    </section>
  )
}
