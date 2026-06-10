import {
  Users,
  ShieldCheck,
  Receipt,
  Map,
} from 'lucide-react'
import Container from '@/components/layout/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

const reasons = [
  {
    icon: Users,
    title: 'Small batches',
    body: 'Max 12 people per group. Enough to feel like a community; small enough for every campfire conversation to matter.',
  },
  {
    icon: ShieldCheck,
    title: 'Vetted, certified guides',
    body: 'Every trek leader holds WMRT / FRT certification. Safety briefings aren\'t formalities — they\'re genuinely followed.',
  },
  {
    icon: Receipt,
    title: 'Transparent pricing',
    body: 'The price you see is the price you pay. No hidden add-ons, no surprise "optional" fees on day three.',
  },
  {
    icon: Map,
    title: 'Curated, not generic',
    body: 'We research and run every itinerary ourselves. If it\'s on our site, it means someone from our team has done it recently.',
  },
]

export default function WhyMusaafir() {
  return (
    <section className="bg-sand-dark py-16 md:py-24">
      <Container>
        <div className="max-w-2xl mb-12">
          <SectionLabel>Why Musaafir</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest leading-tight">
            Travel as it should be — with people who genuinely care.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <RevealOnScroll key={r.title} delay={i * 0.1}>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sunset/10 flex items-center justify-center">
                  <r.icon size={22} className="text-sunset" />
                </div>
                <h3 className="font-display font-semibold text-forest text-lg">{r.title}</h3>
                <p className="text-stone text-sm leading-relaxed">{r.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
