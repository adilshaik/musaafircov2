'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Trip } from '@/types/trip'
import Badge from '@/components/ui/Badge'
import { formatPrice } from '@/lib/utils'

const difficultyColor: Record<Trip['difficulty'], 'default' | 'sunset' | 'forest' | 'stone'> = {
  easy: 'default',
  moderate: 'sunset',
  challenging: 'forest',
  tough: 'forest',
}

const typeLabel: Record<Trip['type'], string> = {
  trek: 'Trek',
  weekend: 'Weekend',
  backpacking: 'Backpacking',
  roadtrip: 'Road Trip',
  collab: 'Collab',
}

interface TripCardProps {
  trip: Trip
}

export default function TripCard({ trip }: TripCardProps) {
  const nextDate = trip.dates[0]

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }} className="h-full">
      <Link href={`/trips/${trip.slug}`} className="group block h-full">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_60px_rgba(26,36,33,0.15)] transition-shadow duration-300 flex flex-col h-full">
          {/* Image */}
          <div className="relative aspect-4/3 overflow-hidden shrink-0">
            <Image
              src={trip.heroImage}
              alt={trip.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <Badge variant="forest">{typeLabel[trip.type]}</Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-display font-semibold text-forest text-lg leading-snug">
                {trip.title}
              </h3>
              <Badge variant={difficultyColor[trip.difficulty]} className="shrink-0 capitalize">
                {trip.difficulty}
              </Badge>
            </div>

            <div className="flex items-center gap-1.5 text-stone text-xs mb-3">
              <MapPin size={12} />
              <span>{trip.region}</span>
            </div>

            <p className="text-stone text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
              {trip.summary}
            </p>

            <div className="flex items-center gap-4 text-xs text-stone border-t border-stone/10 pt-4 mt-auto">
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {trip.durationDays}D
              </span>
              {nextDate && (
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {new Date(nextDate.startDate).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'short',
                  })}
                </span>
              )}
              <span className="ml-auto font-semibold text-forest text-sm">
                {formatPrice(trip.basePrice)}
                <span className="text-stone font-normal text-xs"> /person</span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
