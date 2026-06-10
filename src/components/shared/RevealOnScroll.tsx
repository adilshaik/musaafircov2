'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface RevealOnScrollProps {
  children: ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'right' | 'none'
}

export default function RevealOnScroll({
  children,
  delay = 0,
  className,
  direction = 'up',
}: RevealOnScrollProps) {
  const reduce = useReducedMotion()

  const initial =
    reduce || direction === 'none'
      ? { opacity: 0 }
      : {
          opacity: 0,
          y: direction === 'up' ? 28 : 0,
          x: direction === 'left' ? -28 : direction === 'right' ? 28 : 0,
        }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
