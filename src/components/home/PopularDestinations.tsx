import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

const destinations = [
  {
    name: 'Himachal Pradesh',
    tagline: 'Peaks, valleys & pine',
    image: 'https://picsum.photos/seed/himachal/600/800',
    href: '/trips?region=Himachal+Pradesh',
  },
  {
    name: 'Uttarakhand',
    tagline: 'The Char Dham & beyond',
    image: 'https://picsum.photos/seed/uttarakhand/600/800',
    href: '/trips?region=Uttarakhand',
  },
  {
    name: 'Rajasthan',
    tagline: 'Desert, forts & colour',
    image: 'https://picsum.photos/seed/rajasthan/600/800',
    href: '/trips?region=Rajasthan',
  },
  {
    name: 'Goa',
    tagline: 'Beaches, history & spice',
    image: 'https://picsum.photos/seed/goa-dest/600/800',
    href: '/trips?region=Goa',
  },
  {
    name: 'Karnataka',
    tagline: 'Coffee hills & coastline',
    image: 'https://picsum.photos/seed/karnataka/600/800',
    href: '/trips?region=Karnataka',
  },
  {
    name: 'Ladakh & Spiti',
    tagline: 'The cold desert call',
    image: 'https://picsum.photos/seed/ladakh/600/800',
    href: '/trips?region=Ladakh',
  },
]

export default function PopularDestinations() {
  return (
    <section className="bg-sand py-16 md:py-24">
      <Container>
        <div className="mb-12">
          <SectionLabel>Destinations</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-forest leading-tight">
            Where do you want to go?
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {destinations.map((dest, i) => (
            <RevealOnScroll key={dest.name} delay={i * 0.07}>
              <Link
                href={dest.href}
                className="group relative block rounded-3xl overflow-hidden aspect-3/4"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-forest/80 via-forest/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="font-display text-white text-xl font-bold leading-tight">
                    {dest.name}
                  </p>
                  <p className="text-white/70 text-xs mt-1">{dest.tagline}</p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
