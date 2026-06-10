'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

const navLinks = [
  { href: '/trips', label: 'Safar' },
  { href: '/contact', label: 'Log' },
  { href: '/about', label: 'Kahaniya' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  const isHome = pathname === '/'
  const transparent = isHome && !scrolled

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-40 transition-all duration-300',
        transparent
          ? 'bg-transparent'
          : 'bg-forest/95 backdrop-blur-md shadow-md'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/move-and-mind" className="flex flex-col leading-none">
            <span
              className={cn(
                'font-accent text-xl tracking-[0.08em] transition-colors',
                transparent ? 'text-white' : 'text-sand'
              )}
            >
              MOVE&amp;MIND <span className="text-sunset">×</span> MUSAAFIR
            </span>
            <span className="mt-1 text-[0.58rem] uppercase tracking-[0.28em] text-white/40">
              Safar • Log • Kahaniya
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-semibold transition-colors',
                  pathname.startsWith(link.href)
                    ? 'text-sunset'
                    : transparent
                      ? 'text-white/80 hover:text-white'
                      : 'text-sand/80 hover:text-sand'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              onClick={() => (window.location.href = '/trips')}
            >
              Join a Batch
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className={cn(
              'md:hidden p-2 rounded-full transition-colors cursor-pointer',
              transparent
                ? 'text-white hover:bg-white/10'
                : 'text-sand hover:bg-white/10'
            )}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-forest border-t border-white/10">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-3 rounded-2xl text-sm font-semibold transition-colors',
                  pathname.startsWith(link.href)
                    ? 'text-sunset bg-white/5'
                    : 'text-sand/80 hover:text-sand hover:bg-white/5'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3">
              <Button variant="primary" size="sm" fullWidth>
                <Link href="/trips">Join a Batch</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
