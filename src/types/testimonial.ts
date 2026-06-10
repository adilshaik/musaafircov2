export interface Testimonial {
  id: string
  name: string
  initials: string
  text: string
  trip: string
  date: string
  rating: 1 | 2 | 3 | 4 | 5
  featured?: boolean
}
