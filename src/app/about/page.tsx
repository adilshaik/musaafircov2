import type { Metadata } from 'next'
import Image from 'next/image'
import Container from '@/components/layout/Container'
import StatBand from '@/components/shared/StatBand'
import CTABand from '@/components/shared/CTABand'
import RevealOnScroll from '@/components/shared/RevealOnScroll'
import SectionLabel from '@/components/shared/SectionLabel'
import { Heart, Mountain, Users, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'MusaafirCo is a travel and trekking platform helping people discover India through curated group trips. Learn about our mission, values, and team.',
}

const values = [
  {
    icon: Heart,
    title: 'Affordability',
    body: 'Incredible travel shouldn\'t require a salary sacrifice. We keep costs honest by running lean, efficient operations with no commissions to aggregators.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety',
    body: 'Certified guides, detailed protocols, emergency planning, and medical equipment on every trip. Non-negotiable.',
  },
  {
    icon: Users,
    title: 'Community',
    body: 'The best part of any trip is the people. We keep groups small and curate batches so strangers become friends.',
  },
  {
    icon: Mountain,
    title: 'Memorable travel',
    body: 'Not just another trip. We design for the moments you\'ll be telling stories about ten years from now.',
  },
]

const team = [
  {
    name: 'Rahul Mehta',
    role: 'Founder & Head of Trips',
    image: 'https://picsum.photos/seed/rahul/200/200',
    bio: '12 years of trekking in the Himalayas. Has summited 14 peaks above 5,000m. Spent three years leading treks for a Manali operator before starting MusaafirCo.',
  },
  {
    name: 'Ananya Krishnan',
    role: 'Community & Experience',
    image: 'https://picsum.photos/seed/ananya/200/200',
    bio: 'Former product designer who realised she was happiest when planning trips for friends. Joined Rahul in year two and built the community from 50 to 800+ travellers.',
  },
  {
    name: 'Kabir Nair',
    role: 'Trek Leader & Safety',
    image: 'https://picsum.photos/seed/kabir/200/200',
    bio: 'WMRT Level 3 certified. Has led 80+ high-altitude treks across Himachal and Uttarakhand. Previously with Indian Army mountaineering expeditions.',
  },
]

const stats = [
  { value: '60+', label: 'Trips completed' },
  { value: '800+', label: 'Community members' },
  { value: '4.9', label: 'Average rating' },
  { value: '3', label: 'Years running' },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-forest pt-28 pb-16">
        <Container>
          <RevealOnScroll>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sunset mb-4">
              Our story
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-sand leading-tight max-w-3xl mb-6">
              Built by travellers, for travellers.
            </h1>
            <p className="text-sand/70 max-w-xl leading-relaxed text-lg">
              MusaafirCo started as a WhatsApp group of friends planning a
              Kedarkantha trek. Three years later, we&rsquo;re a community of 800+
              travellers who refuse to experience India from a tour bus.
            </p>
          </RevealOnScroll>
        </Container>
      </div>

      <StatBand stats={stats} />

      {/* Mission */}
      <section className="bg-sand py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <SectionLabel>Mission</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-forest leading-tight mb-6">
                Make the mountains accessible to everyone.
              </h2>
              <div className="space-y-4 text-stone leading-relaxed">
                <p>
                  Most Indians never trek. Not because they don&rsquo;t want to — but
                  because it feels complicated, expensive, or unsafe. Which guide do you
                  trust? How do you handle altitude sickness? What if you&rsquo;re alone?
                </p>
                <p>
                  MusaafirCo answers all of those questions. We handle the logistics,
                  the safety, the companions. You just show up.
                </p>
                <p>
                  We believe the best travel experiences are built around three things:
                  genuine curiosity about a place, people worth experiencing it with,
                  and the confidence that comes from proper preparation.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="relative aspect-square max-w-md">
                <Image
                  src="https://picsum.photos/seed/about-mission/600/600"
                  alt="MusaafirCo trek group at a Himalayan campsite"
                  fill
                  className="object-cover rounded-3xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-sand-dark py-16 md:py-24">
        <Container>
          <RevealOnScroll>
            <SectionLabel>What we stand for</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest leading-tight mb-12">
              Four values, no exceptions.
            </h2>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i * 0.1}>
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sunset/10 flex items-center justify-center">
                    <v.icon size={22} className="text-sunset" />
                  </div>
                  <h3 className="font-display font-semibold text-forest text-lg">{v.title}</h3>
                  <p className="text-stone text-sm leading-relaxed">{v.body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="bg-sand py-16 md:py-24">
        <Container>
          <RevealOnScroll>
            <SectionLabel>Log</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest leading-tight mb-12">
              The people behind the trips.
            </h2>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <RevealOnScroll key={member.name} delay={i * 0.12}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
                  <div className="relative aspect-square">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-forest">
                      {member.name}
                    </h3>
                    <p className="text-sunset text-sm font-semibold mb-3">{member.role}</p>
                    <p className="text-stone text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        heading="Ready to travel with us?"
        body="Browse upcoming trips and find your next adventure. We'd love to have you on the trail."
        primaryLabel="Explore trips"
        primaryHref="/trips"
        secondaryLabel="Get in touch"
        secondaryHref="/contact"
        dark
      />
    </>
  )
}
