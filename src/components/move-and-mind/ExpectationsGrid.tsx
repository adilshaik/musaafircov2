import { Footprints, Mountain, Gamepad2, Flame, Camera, Users2 } from 'lucide-react'
import Container from '@/components/layout/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

const features = [
  {
    icon: Footprints,
    title: 'Trail runs',
    body: 'Guided morning runs through local trails. All paces welcome — it is about the landscape, not the clock.',
  },
  {
    icon: Mountain,
    title: 'Trekking',
    body: 'Curated day hikes and multi-day treks in the most beautiful parts of India.',
  },
  {
    icon: Gamepad2,
    title: 'Rave & games',
    body: 'Music-led energy, playful challenges, and group games that make it easy to loosen up and connect.',
  },
  {
    icon: Flame,
    title: 'Bonfire nights',
    body: 'End every day around a fire. Stories, music, star-gazing, and the kind of conversation that only happens outdoors.',
  },
  {
    icon: Camera,
    title: 'Captured memories',
    body: 'Professional photography on every event. Your moments, documented — so you can actually be in them.',
  },
  {
    icon: Users2,
    title: 'Community',
    body: 'Small groups, big connections. By day three, it doesn\'t feel like a trip. It feels like your people.',
  },
]

export default function ExpectationsGrid() {
  return (
    <section className="bg-forest py-16 md:py-24">
      <Container>
        <RevealOnScroll>
          <div className="mb-12">
            <SectionLabel dark>What to expect</SectionLabel>
            <h2
              className="font-display font-bold text-sand leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
            >
              Six days that change your week,<br className="hidden md:block" /> and possibly your year.
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <RevealOnScroll key={f.title} delay={i * 0.08}>
              <div className="bg-forest-light rounded-3xl p-6 border border-white/5 hover:border-sunset/30 transition-colors h-full flex flex-col gap-4">
                {/* Number + icon */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-sunset/10 flex items-center justify-center shrink-0">
                    <f.icon size={22} className="text-sunset" />
                  </div>
                  <span className="font-accent text-5xl text-sunset/20 leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-display font-bold text-sand text-xl">{f.title}</h3>
                <p className="text-sand/60 text-sm leading-relaxed flex-1">{f.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
