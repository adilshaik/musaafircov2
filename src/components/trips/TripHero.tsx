import Image from 'next/image'
import { MapPin } from 'lucide-react'
import type { Trip } from '@/types/trip'
import Badge from '@/components/ui/Badge'

const typeLabel: Record<Trip['type'], string> = {
  trek: 'Trek',
  weekend: 'Weekend',
  backpacking: 'Backpacking',
  roadtrip: 'Road Trip',
  collab: 'Collab',
}

interface TripHeroProps {
  trip: Trip
}

export default function TripHero({ trip }: TripHeroProps) {
  return (
    <div className="relative h-[55vh] min-h-100 md:h-[70vh] overflow-hidden">
      <Image
        src={trip.heroImage}
        alt={trip.title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-forest/90 via-forest/30 to-transparent" />

      <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex gap-2 mb-4">
            <Badge variant="sunset">{typeLabel[trip.type]}</Badge>
            <Badge variant="forest" className="capitalize">{trip.difficulty}</Badge>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
            {trip.title}
          </h1>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <MapPin size={14} />
            <span>{trip.location}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
