'use client'

import { useState } from 'react'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function NewsletterCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="bg-sand-dark py-16 md:py-20">
      <Container narrow className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sunset mb-3">
          Stay in the loop
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-forest leading-tight mb-4">
          New trips land in your inbox first.
        </h2>
        <p className="text-stone mb-8 max-w-md mx-auto">
          No spam. Just trip announcements, early-bird slots, and the occasional campfire story.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-2 bg-forest text-sand px-8 py-4 rounded-full font-semibold">
            ✓ You&rsquo;re on the list!
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" variant="primary" size="md">
              Subscribe
            </Button>
          </form>
        )}
      </Container>
    </section>
  )
}
