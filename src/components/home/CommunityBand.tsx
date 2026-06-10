import Image from 'next/image'
import Container from '@/components/layout/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

const images = [
  'https://picsum.photos/seed/comm1/400/400',
  'https://picsum.photos/seed/comm2/400/400',
  'https://picsum.photos/seed/comm3/400/400',
  'https://picsum.photos/seed/comm4/400/400',
  'https://picsum.photos/seed/comm5/400/400',
  'https://picsum.photos/seed/comm6/400/400',
]

export default function CommunityBand() {
  return (
    <section className="bg-forest py-16 md:py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <div>
              <SectionLabel dark>Log</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-sand mb-6 leading-tight">
                Strangers who don&rsquo;t stay strangers.
              </h2>
              <p className="text-sand/70 leading-relaxed mb-4">
                Every trip starts with a group of people who happen to be going
                to the same mountain at the same time. By night two around a
                campfire, they&rsquo;re planning the next one.
              </p>
              <p className="text-sand/70 leading-relaxed">
                Our batches are small by design. You&rsquo;ll know everyone&rsquo;s name
                before the first trail marker. And when the trip ends, the group
                chat doesn&rsquo;t.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="grid grid-cols-3 gap-3">
              {images.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-square rounded-2xl overflow-hidden"
                  style={{ marginTop: i % 2 === 1 ? '1rem' : '0' }}
                >
                  <Image
                    src={src}
                    alt="Community traveller moment"
                    fill
                    className="object-cover"
                    sizes="150px"
                  />
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  )
}
