import { Footprints, Gamepad2, Coffee, Binoculars, Camera, Flame } from 'lucide-react'
import Container from '@/components/layout/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

const schedule = [
  {
    time: '05:30',
    icon: Footprints,
    label: 'Trail Run',
    desc: 'Guided morning run through local trails. All paces welcome — the landscape is the reward, not the clock.',
    dark: true,
  },
  {
    time: '07:30',
    icon: Gamepad2,
    label: 'Rave & Game',
    desc: 'Music, playful group games, and easy movement to loosen up after the run. No pressure, just laughs and coastal energy.',
    dark: false,
  },
  {
    time: '09:00',
    icon: Coffee,
    label: 'Breakfast & Reset',
    desc: 'A proper meal, group debrief, and time to absorb the morning before the day unfolds.',
    dark: false,
  },
  {
    time: '11:00',
    icon: Binoculars,
    label: 'Trek / Explore',
    desc: 'Curated hike or village walk led by our trek leader. This is the centrepiece of each day.',
    dark: true,
  },
  {
    time: '17:00',
    icon: Camera,
    label: 'Golden Hour',
    desc: 'Photography walk with our professional. Your job is to be present — the album handles itself.',
    dark: false,
  },
  {
    time: '19:30',
    icon: Flame,
    label: 'Bonfire & Stories',
    desc: 'Every night ends around a fire. Miles become memories. Strangers become friends.',
    dark: false,
  },
]

export default function DayFormat() {
  return (
    <section className="bg-sand py-16 md:py-24">
      <Container>
        <RevealOnScroll>
          <div className="max-w-xl mb-12">
            <SectionLabel>The format</SectionLabel>
            <h2
              className="font-display font-bold text-forest leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
            >
              A day in the hills — what it actually looks like.
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {schedule.map((item, i) => (
            <RevealOnScroll key={item.time} delay={i * 0.08}>
              <div
                className={`rounded-3xl p-4 sm:p-6 h-full flex flex-col gap-3 sm:gap-4 ${
                  item.dark
                    ? 'bg-forest text-sand'
                    : 'bg-white shadow-sm border border-forest/6'
                }`}
              >
                {/* Time + icon row */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${
                      item.dark ? 'bg-sunset/20' : 'bg-sunset/10'
                    }`}
                  >
                    <item.icon size={18} className="text-sunset" />
                  </div>
                  <span className="font-accent text-xl sm:text-2xl text-sunset tracking-wide">
                    {item.time}
                  </span>
                </div>

                <h3
                  className={`font-display font-bold text-lg sm:text-xl leading-snug ${
                    item.dark ? 'text-sand' : 'text-forest'
                  }`}
                >
                  {item.label}
                </h3>

                <p
                  className={`text-sm leading-relaxed flex-1 ${
                    item.dark ? 'text-sand/65' : 'text-stone'
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
