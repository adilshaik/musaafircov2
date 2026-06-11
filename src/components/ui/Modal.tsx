'use client'

import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'max-w-md',
  md: 'max-w-xl',
  lg: 'max-w-2xl',
}

export default function Modal({
  open,
  onClose,
  title,
  children,
  size = 'md',
}: ModalProps) {
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4"
        >
          <div
            className="absolute inset-0 bg-forest/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={cn(
              'relative w-full bg-white shadow-2xl overflow-y-auto',
              'rounded-t-3xl sm:rounded-3xl',
              'max-h-[92dvh] sm:max-h-[85vh]',
              sizeClasses[size]
            )}
          >
            {/* Mobile drag indicator */}
            <div className="sm:hidden flex justify-center pt-2.5 pb-1">
              <div className="w-10 h-1 rounded-full bg-stone/20" />
            </div>
            {title && (
              <div className="flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 border-b border-stone/10">
                <h2 className="font-display text-xl font-semibold text-forest">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  aria-label="Close modal"
                  className="text-stone hover:text-forest transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>
            )}
            <div className="px-4 py-4 sm:p-6">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
