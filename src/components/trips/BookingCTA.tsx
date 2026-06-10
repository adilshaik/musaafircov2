'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import type { Trip } from '@/types/trip'
import Button from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils'

interface BookingCTAProps {
  trip: Trip
}

export default function BookingCTA({ trip }: BookingCTAProps) {
  const nextDate = trip.dates.find((d) => d.slotsLeft > 0)

  return (
    <>
      {/* Desktop sticky sidebar card */}
      <div className="hidden lg:block sticky top-24">
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(26,36,33,0.12)] p-6 space-y-5">
          <div>
            <p className="text-xs text-stone uppercase tracking-wider">Starting from</p>
            <p className="font-accent text-4xl text-forest mt-1">
              {formatPrice(trip.basePrice)}
              <span className="font-sans text-sm text-stone font-normal ml-1">/person</span>
            </p>
          </div>

          {nextDate && (
            <div className="bg-sand-dark rounded-2xl p-4 text-sm">
              <p className="text-stone">
                Next batch:{' '}
                <span className="font-semibold text-forest">
                  {new Date(nextDate.startDate).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </span>
              </p>
              <p className="text-stone mt-1">
                Slots left:{' '}
                <span
                  className={`font-semibold ${nextDate.slotsLeft <= 3 ? 'text-sunset' : 'text-forest'}`}
                >
                  {nextDate.slotsLeft} of {nextDate.slotsTotal}
                </span>
              </p>
            </div>
          )}

          <Button variant="primary" size="md" fullWidth>
            <Link href={`/contact?trip=${trip.slug}`}>Book this trip</Link>
          </Button>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full border-2 border-green-500 text-green-600 font-semibold text-sm hover:bg-green-50 transition-colors"
          >
            <MessageCircle size={16} />
            Ask on WhatsApp
          </a>
        </div>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white border-t border-stone/10 px-4 py-3 flex items-center gap-3">
        <div className="flex-1">
          <p className="text-xs text-stone">From</p>
          <p className="font-semibold text-forest">{formatPrice(trip.basePrice)}</p>
        </div>
        <Button variant="primary" size="md">
          <Link href={`/contact?trip=${trip.slug}`}>Book now</Link>
        </Button>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full border-2 border-green-500 text-green-600"
          aria-label="WhatsApp"
        >
          <MessageCircle size={18} />
        </a>
      </div>
    </>
  )
}
