'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import CollabHero from '@/components/move-and-mind/CollabHero'
import CollabStory from '@/components/move-and-mind/CollabStory'
import DayFormat from '@/components/move-and-mind/DayFormat'
import ExpectationsGrid from '@/components/move-and-mind/ExpectationsGrid'
import PricingCards from '@/components/move-and-mind/PricingCards'
import RegistrationModal from '@/components/move-and-mind/RegistrationModal'
import StatBand from '@/components/shared/StatBand'
import CTABand from '@/components/shared/CTABand'
import { testimonials } from '@/data/testimonials'
import TestimonialCard from '@/components/shared/TestimonialCard'
import Container from '@/components/layout/Container'

const collabStats = [
  { value: '2', label: 'Events completed' },
  { value: '48', label: 'Participants' },
  { value: '5', label: 'Days per event' },
  { value: '100%', label: 'Would return' },
]

export default function MoveAndMindPage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <CollabHero onRegister={() => setModalOpen(true)} />
      <StatBand stats={collabStats} dark />
      <CollabStory />
      <DayFormat />
      <ExpectationsGrid />
      <PricingCards onRegister={() => setModalOpen(true)} />

      {/* Testimonials */}
      <section className="bg-forest py-16 md:py-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sunset mb-3">
            From participants
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-sand leading-tight mb-10">
            What they said.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} testimonial={t} dark />
            ))}
          </div>
        </Container>
      </section>

      <CTABand
        heading="Ready to run, travel, and come alive?"
        body="Next event is filling fast. Register your interest today and we'll send you the full itinerary."
        primaryLabel="Register now"
        primaryHref="#"
        secondaryLabel="Ask a question"
        secondaryHref="/contact"
        dark
      />

      <RegistrationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}
