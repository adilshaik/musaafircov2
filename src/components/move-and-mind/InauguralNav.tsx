'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * Minimal centered header for the inaugural Move&Mind × Musaafir collaboration.
 * Animates in on mount and gains a subtle blurred backdrop once scrolled.
 */
export default function InauguralNav() {
  const reduce = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const ease = 'easeOut' as const
  const up = reduce ? { opacity: 0 } : { opacity: 0, y: -14 }
  const show = { opacity: 1, y: 0 }

  return (
    <motion.header
      initial={reduce ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease }}
      className={cn(
        'fixed top-0 inset-x-0 z-40 transition-colors duration-500',
        scrolled
          ? 'bg-forest/85 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-3 text-center sm:py-4">
        {/* Eyebrow with lines that draw outward */}
        <motion.div
          initial={up}
          animate={show}
          transition={{ duration: 0.6, delay: 0.25, ease }}
          className="mb-1.5 flex items-center gap-3"
        >
          <motion.span
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="block h-px w-6 origin-right bg-sunset/60 sm:w-10"
          />
          <span className="whitespace-nowrap text-[0.55rem] font-bold uppercase tracking-[0.32em] text-sunset sm:text-[0.6rem]">
            Inaugural Collaboration
          </span>
          <motion.span
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="block h-px w-6 origin-left bg-sunset/60 sm:w-10"
          />
        </motion.div>

        {/* Logo — the × gently pulses */}
        <motion.div
          initial={up}
          animate={show}
          transition={{ duration: 0.6, delay: 0.35, ease }}
          className="font-accent text-2xl leading-none tracking-[0.08em] text-white sm:text-3xl"
        >
          MOVE&amp;MIND{' '}
          <motion.span
            className="inline-block text-sunset"
            animate={
              reduce ? undefined : { scale: [1, 1.18, 1], rotate: [0, 8, 0] }
            }
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut' as const,
            }}
          >
            ×
          </motion.span>{' '}
          MUSAAFIR
        </motion.div>

        {/* Subline */}
        <motion.div
          initial={up}
          animate={show}
          transition={{ duration: 0.6, delay: 0.45, ease }}
          className="mt-1 text-[0.55rem] uppercase tracking-[0.3em] text-white/45 sm:text-[0.62rem]"
        >
          Safar • Log • Kahaniya
        </motion.div>
      </div>
    </motion.header>
  )
}
