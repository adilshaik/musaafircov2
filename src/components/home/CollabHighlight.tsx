import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

export default function CollabHighlight() {
  return (
    <section className="bg-forest-light py-16 md:py-24 overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sunset mb-4">
                MusaafirCo × MoveAndMind
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-sand mb-6 leading-tight">
                Run. Travel. Come Alive.
              </h2>
              <p className="text-sand/70 leading-relaxed mb-8">
                We partnered with MoveAndMind — a community built around movement,
                mindfulness, and outdoor energy — to create travel experiences that
                are as good for your body as they are for your soul. Morning trail
                runs, yoga at altitude, bonfires, and Himalayan sunrises.
              </p>
              <Button variant="primary" size="md">
                <Link href="/move-and-mind" className="flex items-center gap-2">
                  Explore the collab <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              <Image
                src="https://picsum.photos/seed/moveandmind/600/600"
                alt="MusaafirCo × MoveAndMind — trail running in the Himalayas"
                fill
                className="object-cover rounded-3xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute -bottom-4 -left-4 bg-sunset rounded-2xl px-5 py-3 shadow-lg">
                <p className="font-accent text-white text-2xl tracking-wide">Move &amp; Mind</p>
                <p className="text-white/70 text-xs mt-0.5">Next event: Feb 2026</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  )
}
