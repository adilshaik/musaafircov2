import { ArrowRight, Check } from 'lucide-react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

interface PricingCardsProps {
  onRegister: () => void
}

const inclusions = [
'Bus transportation — Hyderabad → Goa→ Hyderabad return',
'Comfortable stay with accommodation in shared rooms with goSTOPS',
'3 meals on us — 1 breakfast, 1 lunch, and 1 dinner featuring local flavors and fresh seafood',
'The included dinner will be a community dinner— the table everyone talks about',
'All other meals will be at participants own expense',
'Coffee & snacks on the day of the run',
'Bonfire night with music and stories',
'Documentary-style photography & reels',
]

const plans = [
  {
    name: 'Solo Package',
    price: '₹5,999',
    note: 'Per person · All inclusive',
    highlight: false,
    description: 'Just you, the sea, and the miles.',
    inclusions,
  },
  {
    name: 'Duo Package',
    price: '₹10,999',
    note: 'Per couple · All inclusive',
    highlight: true,
    badge: 'Best value',
    description: 'Run together, remember forever.',
    inclusions,
  },
]

export default function PricingCards({ onRegister }: PricingCardsProps) {
  return (
    <section className="bg-forest-light py-16 md:py-24">
      <Container>
        <RevealOnScroll>
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sunset mb-3">
              Packages
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-sand leading-tight">
              Simple, transparent pricing.
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <RevealOnScroll key={plan.name} delay={i * 0.15}>
              <div
                className={`rounded-3xl p-5 sm:p-8 relative overflow-hidden ${
                  plan.highlight
                    ? 'bg-sunset text-white'
                    : 'bg-forest border border-white/10 text-sand'
                }`}
              >
                {plan.highlight && plan.badge && (
                  <span className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                )}

                <h3 className="font-display text-2xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.highlight ? 'text-white/80' : 'text-sand/60'}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="font-accent text-4xl sm:text-5xl">{plan.price}</span>
                  <span
                    className={`block text-xs uppercase tracking-[0.15em] mt-2 ${
                      plan.highlight ? 'text-white/70' : 'text-sand/50'
                    }`}
                  >
                    {plan.note}
                  </span>
                </div>

                <Button
                  variant={plan.highlight ? 'ghost' : 'outline'}
                  size="md"
                  fullWidth
                  onClick={onRegister}
                  className={
                    plan.highlight
                      ? 'group bg-white text-forest shadow-lg shadow-forest/20 ring-1 ring-white/40 hover:-translate-y-0.5 hover:bg-sand hover:text-forest hover:shadow-xl hover:shadow-forest/25'
                      : 'group border-sunset/70 bg-sunset/10 text-sunset shadow-sm shadow-sunset/10 hover:-translate-y-0.5 hover:border-sunset hover:bg-sunset hover:text-white hover:shadow-xl hover:shadow-sunset/25'
                  }
                >
                  <span>Register interest</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>

                <ul className="mt-6 space-y-3">
                  {plan.inclusions.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2.5 text-sm ${
                        plan.highlight ? 'text-white/90' : 'text-sand/70'
                      }`}
                    >
                      <Check size={14} className="mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
