import Image from 'next/image'
import Container from '@/components/layout/Container'
import SectionLabel from '@/components/shared/SectionLabel'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

export default function CollabStory() {
  return (
    <section className="bg-forest-light py-16 md:py-24 overflow-hidden" id="events">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: story */}
          <RevealOnScroll>
            <SectionLabel dark>The story</SectionLabel>
            <h2
              className="font-display font-bold text-sand leading-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
            >
              Where travel meets{' '}
              <em className="text-sunset italic">movement</em>{' '}
              and mindfulness.
            </h2>

            <div className="space-y-4 text-sand/70 leading-relaxed mb-8">
              <p>
                MusaafirCo was built to help people discover India through curated group
                trips. MoveAndMind was built to help people move — to run, stretch, breathe,
                and live more fully. When we met, the question was obvious: what happens when
                you combine both things on a mountain?
              </p>
              <p>
                The answer: something we&rsquo;ve never experienced in 60+ trips. Morning trail
                runs through Himalayan villages. Sunrise yoga at 3,000m. Evening bonfires
                where the day&rsquo;s miles turn into stories. Community that forms fast because
                you&rsquo;ve already sweated and laughed together before the first full day is over.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-4 border-sunset bg-sunset/10 rounded-r-2xl px-6 py-5">
              <p className="font-display italic text-sand text-xl leading-relaxed">
                &ldquo;Not a fitness retreat and not a regular trip. The best parts of both, without compromise.&rdquo;
              </p>
            </blockquote>
          </RevealOnScroll>

          {/* Right: photo mosaic */}
          <RevealOnScroll delay={0.2}>
            <div className="grid grid-cols-2 gap-3 h-120">
              {/* Left col: tall image */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=600"
                  alt="Trail run through the hills"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Right col: stacked */}
              <div className="flex flex-col gap-3">
                {/* Top image */}
                <div className="relative rounded-2xl overflow-hidden flex-1">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=600"
                    alt="Sunrise yoga session"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                {/* Quote card */}
                <div className="bg-sunset rounded-2xl px-5 py-4 flex items-center justify-center shrink-0">
                  <p className="font-display italic text-white text-sm leading-relaxed text-center">
                    &ldquo;Strangers became family in 5 days.&rdquo;
                  </p>
                </div>
                {/* Stat card */}
                <div className="bg-white/6 border border-white/10 rounded-2xl px-5 py-4 shrink-0">
                  <p className="font-display font-bold text-3xl text-white leading-none">98%</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40 mt-1">Would return</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </Container>
    </section>
  )
}
