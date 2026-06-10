import { Check } from 'lucide-react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

interface PricingCardsProps {
  onRegister: () => void
}

const plans = [
  {
    name: 'Solo Explorer',
    price: '₹14,900',
    perPerson: true,
    highlight: false,
    description: 'Everything you need for the full experience. Solo slot in a shared group.',
    inclusions: [
      '5 nights accommodation (twin sharing)',
      'All meals (Day 1 dinner → Day 6 breakfast)',
      'Daily trail run / hike led by guide',
      '3× yoga & breathwork sessions',
      'Bonfire nights with community',
      'Professional photography (digital album)',
      'Welcome & farewell dinners',
      'All transport within itinerary',
    ],
    exclusions: [
      'Travel to/from base city',
      'Personal gear',
      'Travel insurance (mandatory)',
    ],
  },
  {
    name: 'Duo Package',
    price: '₹12,900',
    perPerson: true,
    highlight: true,
    badge: 'Best value',
    description: 'Same full experience, discounted when two of you sign up together.',
    inclusions: [
      'Everything in Solo Explorer',
      '₹2,000 discount per person vs Solo',
      'Private room option (subject to availability)',
      'Priority batch selection',
    ],
    exclusions: [
      'Travel to/from base city',
      'Personal gear',
      'Travel insurance (mandatory)',
    ],
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
                className={`rounded-3xl p-8 relative overflow-hidden ${
                  plan.highlight
                    ? 'bg-sunset text-white'
                    : 'bg-forest border border-white/10 text-sand'
                }`}
              >
                {plan.highlight && plan.badge && (
                  <span className="absolute top-5 right-5 bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                )}

                <h3 className="font-display text-2xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.highlight ? 'text-white/80' : 'text-sand/60'}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="font-accent text-5xl">{plan.price}</span>
                  {plan.perPerson && (
                    <span className={`text-sm ml-1 ${plan.highlight ? 'text-white/70' : 'text-sand/50'}`}>
                      /person
                    </span>
                  )}
                </div>

                <Button
                  variant={plan.highlight ? 'ghost' : 'outline'}
                  size="md"
                  fullWidth
                  onClick={onRegister}
                  className={
                    plan.highlight
                      ? 'bg-white text-sunset hover:bg-white/90'
                      : 'border-sunset text-sunset hover:bg-sunset hover:text-white'
                  }
                >
                  Register interest
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
