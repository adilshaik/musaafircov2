'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import Button from '@/components/ui/Button'
import HeroScene from '@/components/move-and-mind/HeroScene'

interface CollabHeroProps {
  onRegister: () => void
}

const tags = ['Hyderabad', 'Sunrise Beach Run', 'Pool Party', 'Bonfire Nights', 'June 20–21']

export default function CollabHero({ onRegister }: CollabHeroProps) {
  const reduce = useReducedMotion()
  const initial = reduce ? { opacity: 0 } : { opacity: 0, y: 28 }
  const animate = { opacity: 1, y: 0 }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-forest">
      {/* Interactive scene: bus from Hyderabad → Goa, with runners blended into the SVG */}
      <div className="absolute inset-0 overflow-hidden">
        <HeroScene />
      </div>

      {/* Keep copy legible on the left while the scene (sun, bus, runners) breathes on the right/bottom */}
      <div className="absolute inset-0 bg-linear-to-r from-forest via-forest/60 to-forest/10" />
      <div className="absolute inset-0 bg-linear-to-b from-forest/25 via-transparent to-forest/55" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-28 sm:pb-32 w-full">
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
              Hyderabad → Goa · June 2026
            </span>
            <span className="block w-8 h-px bg-sunset/60 shrink-0" />
          </motion.div>

          <motion.h1
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' as const }}
            className="font-display font-bold text-white leading-[0.95] mb-6"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            Run.<br />
            Travel.<br />
            <em className="text-sunset italic">Come Alive.</em>
          </motion.h1>

          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' as const }}
            className="font-display italic text-white/85 text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5"
          >
            Safar • Log • Kahaniya — one stride at a time.
          </motion.p>

          <motion.p
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' as const }}
            className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mb-6 sm:mb-8"
          >
            A coastal run-club experience for the ones who collect miles, memories,
            and midnight stories. From city streets to shoreline sunrises — boarding
            Hyderabad for the inaugural Move&amp;Mind × Musaafir journey.
          </motion.p>

          <motion.div
            initial={initial}
            animate={animate}
            transition={{ duration: 0.7, delay: 0.48, ease: 'easeOut' as const }}
            className="inline-flex items-center gap-3 sm:gap-4 bg-white/8 border border-white/15 rounded-lg px-4 py-3 sm:px-5 sm:py-4 mb-6 sm:mb-8 backdrop-blur-sm hover:bg-white/12 transition-colors w-fit"
          >
            <div className="flex-shrink-0">
              <Image
                src="/goSTOPS.webp"
                alt="goSTOPS India"
                width={48}
                height={48}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white/60 uppercase tracking-wide">
                Accommodation partner
              </span>
              <span className="text-sm sm:text-base font-semibold text-white">
                goSTOPS India
              </span>
            </div>
          </motion.div>

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
                className="text-[10px] sm:text-xs font-semibold text-white/65 bg-white/8 border border-white/15 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 tracking-wide"
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
              className="inline-flex items-center px-5 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white/75 hover:text-white transition-colors gap-2"
            >
              See upcoming events
              <span className="text-sunset">↓</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-linear-to-b from-transparent to-white/50" />
        <span className="text-white/40 text-xs tracking-[0.2em] uppercase">Scroll</span>
      </div>
    </section>
  )
}
