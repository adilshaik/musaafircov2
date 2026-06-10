import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Trip } from '@/types/trip'
import Container from '@/components/layout/Container'
import TripCard from '@/components/trips/TripCard'
import SectionLabel from '@/components/shared/SectionLabel'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

interface FeaturedTripsProps {
  trips: Trip[]
}

export default function FeaturedTrips({ trips }: FeaturedTripsProps) {
  return (
    <section className="bg-sand py-16 md:py-24">
      <Container>
        <div className="flex items-end justify-between mb-10">
          <div>
            <SectionLabel>Safar</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest leading-tight">
              Upcoming trips you&rsquo;ll want to join
            </h2>
          </div>
          <Link
            href="/trips"
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-sunset hover:gap-3 transition-all"
          >
            View all trips <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
          {trips.map((trip, i) => (
            <RevealOnScroll key={trip.slug} delay={i * 0.1} className="h-full">
              <TripCard trip={trip} />
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/trips"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sunset"
          >
            View all trips <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  )
}
