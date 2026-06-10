'use client'

import { useState, useMemo } from 'react'
import { trips } from '@/data/trips'
import type { Filters } from '@/components/trips/TripFilters'
import TripFilters, { defaultFilters } from '@/components/trips/TripFilters'
import TripGrid from '@/components/trips/TripGrid'
import Container from '@/components/layout/Container'

export default function TripsPage() {
  const [filters, setFilters] = useState<Filters>(defaultFilters)

  const filtered = useMemo(() => {
    return trips.filter((t) => {
      if (filters.search) {
        const q = filters.search.toLowerCase()
        if (!t.title.toLowerCase().includes(q) && !t.region.toLowerCase().includes(q) && !t.location.toLowerCase().includes(q)) return false
      }
      if (filters.type && t.type !== filters.type) return false
      if (filters.difficulty && t.difficulty !== filters.difficulty) return false
      if (filters.region && t.region !== filters.region) return false
      if (t.basePrice > filters.maxPrice) return false
      return true
    })
  }, [filters])

  return (
    <>
      {/* Page header */}
      <div className="bg-forest pt-28 pb-12">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sunset mb-3">
            Safar
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-sand mb-3">
            All Trips
          </h1>
          <p className="text-sand/60 max-w-lg">
            Treks, weekend escapes, road trips, and backpacking adventures across India.
            Small batches. Big experiences.
          </p>
        </Container>
      </div>

      {/* Content */}
      <div className="bg-sand py-12">
        <Container>
          <div className="flex gap-10 items-start">
            {/* Sidebar filters */}
            <aside className="w-60 shrink-0 hidden md:block sticky top-24">
              <TripFilters filters={filters} onChange={setFilters} />
            </aside>

            {/* Results */}
            <div className="flex-1 min-w-0">
              {/* Mobile filters */}
              <div className="md:hidden mb-6">
                <TripFilters filters={filters} onChange={setFilters} />
              </div>

              <p className="text-sm text-stone mb-6">
                {filtered.length} trip{filtered.length !== 1 ? 's' : ''} found
              </p>
              <TripGrid trips={filtered} />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
