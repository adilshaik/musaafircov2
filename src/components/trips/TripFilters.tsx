'use client'

import { Search, X } from 'lucide-react'
import type { TripType, Difficulty } from '@/types/trip'

export interface Filters {
  search: string
  type: TripType | ''
  difficulty: Difficulty | ''
  region: string
  maxPrice: number
}

export const defaultFilters: Filters = {
  search: '',
  type: '',
  difficulty: '',
  region: '',
  maxPrice: 50000,
}

const tripTypes: { value: TripType; label: string }[] = [
  { value: 'trek', label: 'Trek' },
  { value: 'weekend', label: 'Weekend' },
  { value: 'backpacking', label: 'Backpacking' },
  { value: 'roadtrip', label: 'Road Trip' },
  { value: 'collab', label: 'Collab' },
]

const difficulties: { value: Difficulty; label: string }[] = [
  { value: 'easy', label: 'Easy' },
  { value: 'moderate', label: 'Moderate' },
  { value: 'challenging', label: 'Challenging' },
  { value: 'tough', label: 'Tough' },
]

const regions = [
  'Himachal Pradesh',
  'Uttarakhand',
  'Rajasthan',
  'Goa',
  'Karnataka',
  'Ladakh',
]

const selectClass =
  'w-full rounded-xl border border-stone/20 bg-white px-3.5 py-2.5 text-sm text-forest appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-sunset/40 focus:border-sunset transition-colors hover:border-stone/40'

interface TripFiltersProps {
  filters: Filters
  onChange: (f: Filters) => void
}

export default function TripFilters({ filters, onChange }: TripFiltersProps) {
  const hasActive =
    filters.search !== '' ||
    filters.type !== '' ||
    filters.difficulty !== '' ||
    filters.region !== '' ||
    filters.maxPrice < 50000

  const reset = () => onChange(defaultFilters)

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-widest text-forest/60">
          Filters
        </h3>
        {hasActive && (
          <button
            onClick={reset}
            className="flex items-center gap-1 text-xs text-stone hover:text-forest transition-colors cursor-pointer"
          >
            <X size={12} /> Clear all
          </button>
        )}
      </div>

      {/* Search */}
      <div>
        <label className="block text-xs font-semibold text-stone uppercase tracking-wider mb-2">
          Search
        </label>
        <div className="relative">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone/50 pointer-events-none" />
          <input
            type="text"
            placeholder="Search trips..."
            value={filters.search}
            onChange={(e) => onChange({ ...filters, search: e.target.value })}
            className="w-full rounded-xl border border-stone/20 bg-white pl-9 pr-3.5 py-2.5 text-sm text-forest placeholder:text-stone/50 focus:outline-none focus:ring-2 focus:ring-sunset/40 focus:border-sunset transition-colors hover:border-stone/40"
          />
          {filters.search && (
            <button
              onClick={() => onChange({ ...filters, search: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone/50 hover:text-forest cursor-pointer"
            >
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Trip type */}
      <div>
        <label className="block text-xs font-semibold text-stone uppercase tracking-wider mb-2">
          Trip Type
        </label>
        <div className="relative">
          <select
            value={filters.type}
            onChange={(e) => onChange({ ...filters, type: e.target.value as TripType | '' })}
            className={selectClass}
          >
            <option value="">All Types</option>
            {tripTypes.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone/50">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Difficulty */}
      <div>
        <label className="block text-xs font-semibold text-stone uppercase tracking-wider mb-2">
          Difficulty
        </label>
        <div className="relative">
          <select
            value={filters.difficulty}
            onChange={(e) => onChange({ ...filters, difficulty: e.target.value as Difficulty | '' })}
            className={selectClass}
          >
            <option value="">Any Difficulty</option>
            {difficulties.map((d) => (
              <option key={d.value} value={d.value}>{d.label}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone/50">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Region */}
      <div>
        <label className="block text-xs font-semibold text-stone uppercase tracking-wider mb-2">
          Region
        </label>
        <div className="relative">
          <select
            value={filters.region}
            onChange={(e) => onChange({ ...filters, region: e.target.value })}
            className={selectClass}
          >
            <option value="">All Regions</option>
            {regions.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone/50">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Max price */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-semibold text-stone uppercase tracking-wider">
            Max Price
          </label>
          <span className="text-xs font-semibold text-forest">
            ₹{filters.maxPrice.toLocaleString('en-IN')}
          </span>
        </div>
        <input
          type="range"
          min={2000}
          max={50000}
          step={500}
          value={filters.maxPrice}
          onChange={(e) => onChange({ ...filters, maxPrice: Number(e.target.value) })}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-sunset bg-stone/20"
          style={{
            background: `linear-gradient(to right, #D97706 0%, #D97706 ${((filters.maxPrice - 2000) / (50000 - 2000)) * 100}%, #e5e7eb ${((filters.maxPrice - 2000) / (50000 - 2000)) * 100}%, #e5e7eb 100%)`,
          }}
        />
        <div className="flex justify-between text-[0.65rem] text-stone/60 mt-1.5">
          <span>₹2,000</span>
          <span>₹50,000</span>
        </div>
      </div>
    </div>
  )
}
