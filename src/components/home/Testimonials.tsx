import type { Testimonial } from '@/types/testimonial'
import Container from '@/components/layout/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import TestimonialCard from '@/components/shared/TestimonialCard'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const featured = testimonials.find((t) => t.featured)
  const rest = testimonials.filter((t) => !t.featured).slice(0, 3)

  return (
    <section className="bg-sand py-16 md:py-24">
      <Container>
        <div className="mb-12">
          <SectionLabel>Kahaniya</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest leading-tight">
            Stories from the trail.
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Featured testimonial */}
          {featured && (
            <RevealOnScroll className="lg:col-span-2">
              <div className="bg-forest rounded-3xl p-8 h-full flex flex-col gap-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-sunset text-sm">★</span>
                  ))}
                </div>
                <p className="font-display text-xl italic text-sand/90 leading-relaxed flex-1">
                  &ldquo;{featured.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-sunset/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-sunset">{featured.initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-sand">{featured.name}</p>
                    <p className="text-xs text-sand/50">{featured.trip}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* Other testimonials */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 items-stretch">
            {rest.map((t, i) => (
              <RevealOnScroll key={t.id} delay={i * 0.1} className="h-full">
                <TestimonialCard testimonial={t} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
