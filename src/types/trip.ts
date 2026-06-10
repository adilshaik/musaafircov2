export type TripType = 'trek' | 'weekend' | 'backpacking' | 'roadtrip' | 'collab'
export type Difficulty = 'easy' | 'moderate' | 'challenging' | 'tough'

export interface ItineraryDay {
  day: number
  title: string
  description: string
  meals?: string[]
  stay?: string
}

export interface TripDate {
  id: string
  startDate: string
  endDate: string
  slotsTotal: number
  slotsLeft: number
  priceOverride?: number
}

export interface Trip {
  slug: string
  title: string
  type: TripType
  region: string
  location: string
  durationDays: number
  basePrice: number
  difficulty: Difficulty
  summary: string
  heroImage: string
  gallery: string[]
  itinerary: ItineraryDay[]
  inclusions: string[]
  exclusions: string[]
  thingsToCarry: string[]
  safetyNotes: string[]
  faqs: { q: string; a: string }[]
  dates: TripDate[]
  featured?: boolean
}
