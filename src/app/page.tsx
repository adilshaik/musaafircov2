import { getFeaturedTrips } from '@/lib/trips'
import { testimonials } from '@/data/testimonials'
import Hero from '@/components/home/Hero'
import FeaturedTrips from '@/components/home/FeaturedTrips'
import WhyMusaafir from '@/components/home/WhyMusaafir'
import PopularDestinations from '@/components/home/PopularDestinations'
import CommunityBand from '@/components/home/CommunityBand'
import SafetyGuides from '@/components/home/SafetyGuides'
import Testimonials from '@/components/home/Testimonials'
import CollabHighlight from '@/components/home/CollabHighlight'
import NewsletterCTA from '@/components/home/NewsletterCTA'
import StatBand from '@/components/shared/StatBand'

const stats = [
  { value: '60+', label: 'Trips completed' },
  { value: '800+', label: 'Happy travellers' },
  { value: '12', label: 'Max batch size' },
  { value: '100%', label: 'Safety record' },
]

export default async function HomePage() {
  const featured = await getFeaturedTrips()

  return (
    <>
      <Hero />
      <StatBand stats={stats} />
      <FeaturedTrips trips={featured} />
      <WhyMusaafir />
      <PopularDestinations />
      <CommunityBand />
      <SafetyGuides />
      <Testimonials testimonials={testimonials} />
      <CollabHighlight />
      <NewsletterCTA />
    </>
  )
}
