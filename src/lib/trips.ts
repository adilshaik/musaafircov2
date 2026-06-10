import { trips } from '@/data/trips'
import type { Trip } from '@/types/trip'

export async function getAllTrips(): Promise<Trip[]> {
  return trips
}

export async function getTripBySlug(slug: string): Promise<Trip | undefined> {
  return trips.find((t) => t.slug === slug)
}

export async function getFeaturedTrips(): Promise<Trip[]> {
  return trips.filter((t) => t.featured)
}
