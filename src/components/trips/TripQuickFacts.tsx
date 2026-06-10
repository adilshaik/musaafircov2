import { Calendar, Clock, IndianRupee, Mountain, Users } from 'lucide-react'
import type { Trip } from '@/types/trip'
import { formatPrice } from '@/lib/utils'

interface TripQuickFactsProps {
  trip: Trip
}

export default function TripQuickFacts({ trip }: TripQuickFactsProps) {
  const nextDate = trip.dates[0]
  const minSlotsLeft = Math.min(...trip.dates.map((d) => d.slotsLeft))

  const facts = [
    {
      icon: Clock,
      label: 'Duration',
      value: `${trip.durationDays} days`,
    },
    {
      icon: IndianRupee,
      label: 'Starting from',
      value: formatPrice(trip.basePrice),
    },
    {
      icon: Mountain,
      label: 'Difficulty',
      value: trip.difficulty.charAt(0).toUpperCase() + trip.difficulty.slice(1),
    },
    {
      icon: Calendar,
      label: 'Next batch',
      value: nextDate
        ? new Date(nextDate.startDate).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })
        : 'TBA',
    },
    {
      icon: Users,
      label: 'Slots left',
      value: minSlotsLeft > 0 ? `${minSlotsLeft} available` : 'Waitlist',
    },
  ]

  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 md:p-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-stone/10">
        {facts.map((f) => (
          <div key={f.label} className="flex flex-col gap-1.5 pt-4 first:pt-0 md:pt-0 md:px-4 first:pl-0 last:pr-0">
            <div className="flex items-center gap-1.5 text-stone">
              <f.icon size={14} />
              <span className="text-xs uppercase tracking-wider font-semibold">{f.label}</span>
            </div>
            <p className="font-semibold text-forest">{f.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
