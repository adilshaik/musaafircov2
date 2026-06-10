import { Award, HeartPulse, Radio, Users2 } from 'lucide-react'
import Container from '@/components/layout/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

const pillars = [
  {
    icon: Award,
    title: 'Certified trek leaders',
    body: 'Every guide holds WMRT Level 2+ or FRT certification — no exceptions. We verify credentials before every batch.',
  },
  {
    icon: HeartPulse,
    title: 'Medical prep & monitoring',
    body: 'Oxygen cylinder, pulse oximeter, and AMS medication on every high-altitude trek. Daily health checks for all trekkers.',
  },
  {
    icon: Radio,
    title: 'Emergency protocols',
    body: 'Each guide carries a satellite communicator. Evacuation plans are coordinated with the nearest hospital before departure.',
  },
  {
    icon: Users2,
    title: '1:6 guide ratio',
    body: 'Maximum one guide for every six trekkers on technical routes. No one gets left behind.',
  },
]

export default function SafetyGuides() {
  return (
    <section className="bg-sand-dark py-16 md:py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <RevealOnScroll>
            <div>
              <SectionLabel>Safety first</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-6 leading-tight">
                Adventure without compromise.
              </h2>
              <p className="text-stone leading-relaxed mb-4">
                Every year, incidents on Indian treks happen because operators
                cut corners on guides, gear, or emergency planning.
              </p>
              <p className="text-stone leading-relaxed">
                We don&rsquo;t. Our safety standards are non-negotiable, and we&rsquo;d
                rather cancel a trip than send an unprepared group into the mountains.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-sunset/10 flex items-center justify-center mb-4">
                    <p.icon size={20} className="text-sunset" />
                  </div>
                  <h3 className="font-display font-semibold text-forest mb-2">{p.title}</h3>
                  <p className="text-stone text-sm leading-relaxed">{p.body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
