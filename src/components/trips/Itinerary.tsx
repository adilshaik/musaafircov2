'use client'

import { useState } from 'react'
import { ChevronDown, Utensils, Home } from 'lucide-react'
import type { ItineraryDay } from '@/types/trip'
import { cn } from '@/lib/utils'

interface ItineraryProps {
  days: ItineraryDay[]
}

export default function Itinerary({ days }: ItineraryProps) {
  const [expanded, setExpanded] = useState<Set<number>>(new Set([1]))

  const toggle = (day: number) =>
    setExpanded((prev) => {
      const next = new Set(prev)
      next.has(day) ? next.delete(day) : next.add(day)
      return next
    })

  return (
    <div className="space-y-3">
      {days.map((day) => {
        const isOpen = expanded.has(day.day)
        return (
          <div key={day.day} className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <button
              onClick={() => toggle(day.day)}
              aria-expanded={isOpen}
              className="w-full flex items-center gap-4 p-5 text-left cursor-pointer hover:bg-sand/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-sunset/10 flex items-center justify-center shrink-0">
                <span className="font-accent text-sunset text-lg">{day.day}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-stone font-semibold uppercase tracking-wider mb-0.5">
                  Day {day.day}
                </p>
                <p className="font-semibold text-forest truncate">{day.title}</p>
              </div>
              <ChevronDown
                size={18}
                className={cn(
                  'shrink-0 text-stone transition-transform duration-300',
                  isOpen && 'rotate-180'
                )}
              />
            </button>

            <div
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen ? 'max-h-96' : 'max-h-0'
              )}
            >
              <div className="px-5 pb-5 space-y-4 border-t border-stone/10">
                <p className="text-stone leading-relaxed text-sm pt-4">
                  {day.description}
                </p>
                {(day.meals && day.meals.length > 0) || day.stay ? (
                  <div className="flex flex-wrap gap-4 text-xs text-stone">
                    {day.meals && day.meals.length > 0 && (
                      <span className="flex items-center gap-1.5">
                        <Utensils size={12} />
                        {day.meals.join(' · ')}
                      </span>
                    )}
                    {day.stay && (
                      <span className="flex items-center gap-1.5">
                        <Home size={12} />
                        {day.stay}
                      </span>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
