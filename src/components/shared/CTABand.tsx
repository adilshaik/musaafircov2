import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowRight, Mail, MessageCircle } from 'lucide-react'
import Container from '@/components/layout/Container'
import { cn } from '@/lib/utils'

interface CTABandProps {
  heading: string
  body: string
  primaryLabel: string
  primaryHref?: string
  primaryOnClick?: () => void
  secondaryLabel?: string
  secondaryHref?: string
  dark?: boolean
}

function isExternalHref(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href)
}

function CtaLink({
  href,
  className,
  children,
}: {
  href: string
  className: string
  children: ReactNode
}) {
  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={className}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}

export default function CTABand({
  heading,
  body,
  primaryLabel,
  primaryHref,
  primaryOnClick,
  secondaryLabel,
  secondaryHref,
  dark = true,
}: CTABandProps) {
  return (
    <div className={dark ? 'bg-forest' : 'bg-sand-dark'}>
      <Container className="py-16 md:py-24 text-center">
        <h2
          className={`font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 ${dark ? 'text-sand' : 'text-forest'}`}
        >
          {heading}
        </h2>
        <p
          className={`text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-6 sm:mb-8 ${dark ? 'text-sand/70' : 'text-stone'}`}
        >
          {body}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
          {primaryOnClick ? (
            <button
              onClick={primaryOnClick}
              className={cn(
                'group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2',
                'bg-sunset text-white shadow-lg shadow-sunset/20 hover:-translate-y-0.5 hover:bg-sunset-dark hover:shadow-xl hover:shadow-sunset/30',
                dark ? 'focus-visible:ring-offset-forest' : 'focus-visible:ring-offset-sand-dark'
              )}
            >
              {primaryLabel}
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          ) : primaryHref ? (
            <CtaLink
              href={primaryHref}
              className={cn(
                'group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2',
                'bg-sunset text-white shadow-lg shadow-sunset/20 hover:-translate-y-0.5 hover:bg-sunset-dark hover:shadow-xl hover:shadow-sunset/30',
                dark ? 'focus-visible:ring-offset-forest' : 'focus-visible:ring-offset-sand-dark'
              )}
            >
              {primaryLabel}
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </CtaLink>
          ) : null}
          {secondaryLabel && secondaryHref && (
            <CtaLink
              href={secondaryHref}
              className={cn(
                'group inline-flex items-center justify-center gap-2 rounded-full border-2 px-8 py-4 text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2',
                dark
                  ? 'border-sand/60 bg-white/5 text-sand hover:-translate-y-0.5 hover:border-sand hover:bg-sand hover:text-forest hover:shadow-xl hover:shadow-black/20 focus-visible:ring-offset-forest'
                  : 'border-forest/30 bg-white/40 text-forest hover:-translate-y-0.5 hover:border-forest hover:bg-forest hover:text-sand hover:shadow-lg hover:shadow-forest/10 focus-visible:ring-offset-sand-dark'
              )}
            >
              {secondaryHref.startsWith('mailto:') ? (
                <Mail size={18} className="transition-transform duration-300 group-hover:-rotate-6" />
              ) : (
                <MessageCircle size={18} className="transition-transform duration-300 group-hover:-rotate-6" />
              )}
              {secondaryLabel}
            </CtaLink>
          )}
        </div>
      </Container>
    </div>
  )
}
