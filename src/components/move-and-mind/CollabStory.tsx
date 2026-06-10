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
              A coastal reset for people who like to{' '}
              <em className="text-sunset italic">move</em>.
            </h2>

            <div className="space-y-4 text-sand/70 leading-relaxed mb-8">
              <p>
                MusaafirCo brings the route, stay, and the ease of showing up to a
                well-held group trip. MoveAndMind brings the morning miles, the stretch,
                the games, the music, and the reminder that your body can be part of the story too.
              </p>
              <p>
                This first chapter is simple on purpose: leave Hyderabad, reach the coast,
                run by the water, recover slowly, eat together, and let the night turn strangers
                into your people. No pressure to perform. No packed itinerary for the sake of it.
                Just movement, sea air, and a weekend that feels longer than it is.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote className="border-l-4 border-sunset bg-sunset/10 rounded-r-2xl px-6 py-5">
              <p className="font-display italic text-sand text-xl leading-relaxed">
                &ldquo;Not a race, not a retreat, not a regular trip. A weekend where travel finally moves at your pace.&rdquo;
              </p>
            </blockquote>
          </RevealOnScroll>

          {/* Right: photo mosaic */}
          <RevealOnScroll delay={0.2}>
            <div className="grid grid-cols-2 gap-3 h-120">
              {/* Left col: tall image */}
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1642783319793-10b89c2d79bb?auto=format&fit=crop&q=82&w=1200"
                  alt="A group running through waves on the beach"
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
                    src="https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?auto=format&fit=crop&q=82&w=1200"
                    alt="A group gathered around a beach fire at sunset"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                {/* Quote card */}
                <div className="bg-sunset rounded-2xl px-5 py-4 flex items-center justify-center shrink-0">
                  <p className="font-display italic text-white text-sm leading-relaxed text-center">
                    &ldquo;Strangers become family in 2 days.&rdquo;
                  </p>
                </div>
                {/* Stat card */}
                <div className="bg-white/6 border border-white/10 rounded-2xl px-5 py-4 shrink-0">
                  <p className="font-display font-bold text-3xl text-white leading-none">All paces</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40 mt-1">Run, dance, play</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

        </div>
      </Container>
    </section>
  )
}
