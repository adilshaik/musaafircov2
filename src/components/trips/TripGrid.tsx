import type { Trip } from '@/types/trip'
import TripCard from './TripCard'

interface TripGridProps {
  trips: Trip[]
}

export default function TripGrid({ trips }: TripGridProps) {
  if (trips.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-stone text-lg mb-2">No trips match your filters.</p>
        <p className="text-stone/70 text-sm">Try adjusting the filters to see more results.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 items-stretch">
      {trips.map((trip) => (
        <TripCard key={trip.slug} trip={trip} />
      ))}
    </div>
  )
}
