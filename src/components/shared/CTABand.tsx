import Link from 'next/link'
import Button from '@/components/ui/Button'
import Container from '@/components/layout/Container'

interface CTABandProps {
  heading: string
  body: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
  dark?: boolean
}

export default function CTABand({
  heading,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  dark = true,
}: CTABandProps) {
  return (
    <div className={dark ? 'bg-forest' : 'bg-sand-dark'}>
      <Container className="py-16 md:py-24 text-center">
        <h2
          className={`font-display text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-sand' : 'text-forest'}`}
        >
          {heading}
        </h2>
        <p
          className={`text-base md:text-lg max-w-xl mx-auto mb-8 ${dark ? 'text-sand/70' : 'text-stone'}`}
        >
          {body}
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="primary" size="lg">
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          {secondaryLabel && secondaryHref && (
            <Button
              variant={dark ? 'outline' : 'outline'}
              size="lg"
              className={dark ? 'border-sand text-sand hover:bg-sand hover:text-forest' : ''}
            >
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          )}
        </div>
      </Container>
    </div>
  )
}
