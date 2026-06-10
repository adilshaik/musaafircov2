import { notFound } from 'next/navigation'
import { getTripBySlug, getAllTrips } from '@/lib/trips'
import type { Metadata } from 'next'
import TripHero from '@/components/trips/TripHero'
import TripQuickFacts from '@/components/trips/TripQuickFacts'
import Itinerary from '@/components/trips/Itinerary'
import InclusionsExclusions from '@/components/trips/InclusionsExclusions'
import BookingCTA from '@/components/trips/BookingCTA'
import Accordion from '@/components/ui/Accordion'
import Container from '@/components/layout/Container'
import { Backpack, ShieldCheck } from 'lucide-react'

export async function generateStaticParams() {
  const trips = await getAllTrips()
  return trips.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const trip = await getTripBySlug(slug)
  if (!trip) return {}
  return {
    title: trip.title,
    description: trip.summary,
  }
}

export default async function TripDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const trip = await getTripBySlug(slug)
  if (!trip) notFound()

  const faqItems = trip.faqs.map((f, i) => ({
    id: `faq-${i}`,
    question: f.q,
    answer: f.a,
  }))

  return (
    <>
      <TripHero trip={trip} />

      {/* Main layout */}
      <div className="bg-sand pb-24 lg:pb-12">
        <Container className="py-10">
          <div className="flex gap-10 items-start">
            {/* Left column — main content */}
            <div className="flex-1 min-w-0 space-y-12">
              {/* Quick facts */}
              <TripQuickFacts trip={trip} />

              {/* Summary */}
              <div>
                <h2 className="font-display text-2xl font-bold text-forest mb-4">
                  About this trip
                </h2>
                <p className="text-stone leading-relaxed">{trip.summary}</p>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="font-display text-2xl font-bold text-forest mb-6">
                  Day-by-day itinerary
                </h2>
                <Itinerary days={trip.itinerary} />
              </div>

              {/* Inclusions / Exclusions */}
              <div>
                <h2 className="font-display text-2xl font-bold text-forest mb-6">
                  What&rsquo;s included
                </h2>
                <InclusionsExclusions
                  inclusions={trip.inclusions}
                  exclusions={trip.exclusions}
                />
              </div>

              {/* Things to carry */}
              {trip.thingsToCarry.length > 0 && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-forest mb-6 flex items-center gap-2">
                    <Backpack size={22} className="text-sunset" /> Things to carry
                  </h2>
                  <div className="bg-white rounded-3xl p-6">
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {trip.thingsToCarry.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-stone">
                          <span className="text-sunset mt-1">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Safety notes */}
              {trip.safetyNotes.length > 0 && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-forest mb-6 flex items-center gap-2">
                    <ShieldCheck size={22} className="text-sunset" /> Safety & fitness
                  </h2>
                  <div className="bg-white rounded-3xl p-6 space-y-3">
                    {trip.safetyNotes.map((note) => (
                      <p key={note} className="text-sm text-stone leading-relaxed flex gap-2">
                        <span className="text-sunset shrink-0 mt-1">✓</span>
                        {note}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {faqItems.length > 0 && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-forest mb-6">
                    Frequently asked questions
                  </h2>
                  <div className="bg-white rounded-3xl px-6">
                    <Accordion items={faqItems} />
                  </div>
                </div>
              )}
            </div>

            {/* Right column — booking CTA (desktop) */}
            <aside className="w-80 shrink-0">
              <BookingCTA trip={trip} />
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
