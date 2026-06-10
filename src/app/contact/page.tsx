'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { Mail, MessageCircle, Share2 } from 'lucide-react'
import Container from '@/components/layout/Container'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'
import SectionLabel from '@/components/shared/SectionLabel'
import RevealOnScroll from '@/components/shared/RevealOnScroll'
import { submitContactForm } from '@/lib/api'

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Tell us a bit more (at least 10 characters)'),
  destination: z.string().optional(),
  groupSize: z.string().optional(),
  budget: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    await submitContactForm(data)
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* Header */}
      <div className="bg-forest pt-28 pb-16">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sunset mb-3 font-sans">
            Get in touch
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-sand mb-4">
            Let&rsquo;s plan something together.
          </h1>
          <p className="text-sand/60 max-w-md">
            Have a question about a trip, want to plan a custom group experience, or just want to say hello — we&rsquo;re here.
          </p>
        </Container>
      </div>

      <div className="bg-sand py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <RevealOnScroll>
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="text-5xl mb-6">🏔️</div>
                    <h2 className="font-display text-3xl font-bold text-forest mb-4">
                      Message received!
                    </h2>
                    <p className="text-stone max-w-sm mx-auto">
                      We&rsquo;ll get back to you within 24 hours. In the meantime,
                      browse our{' '}
                      <a href="/trips" className="text-sunset font-semibold hover:underline">
                        upcoming trips
                      </a>
                      .
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Input
                        label="Your name"
                        placeholder="Priya Sharma"
                        error={errors.name?.message}
                        {...register('name')}
                      />
                      <Input
                        label="Email"
                        type="email"
                        placeholder="priya@email.com"
                        error={errors.email?.message}
                        {...register('email')}
                      />
                    </div>

                    <Input
                      label="Phone (optional)"
                      type="tel"
                      placeholder="+91 98765 43210"
                      {...register('phone')}
                    />

                    <Textarea
                      label="Message"
                      placeholder="Tell us about your trip plans, questions, or anything else..."
                      error={errors.message?.message}
                      {...register('message')}
                    />

                    <div className="border-t border-stone/10 pt-5">
                      <SectionLabel>Custom trip enquiry (optional)</SectionLabel>
                      <div className="grid sm:grid-cols-3 gap-5 mt-4">
                        <Input
                          label="Destination"
                          placeholder="Spiti Valley"
                          {...register('destination')}
                        />
                        <Input
                          label="Group size"
                          type="number"
                          placeholder="6"
                          {...register('groupSize')}
                        />
                        <Input
                          label="Budget (per person)"
                          placeholder="₹15,000"
                          {...register('budget')}
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={submitting}
                    >
                      {submitting ? 'Sending...' : 'Send message'}
                    </Button>
                  </form>
                )}
              </RevealOnScroll>
            </div>

            {/* Contact info sidebar */}
            <aside className="lg:col-span-2 space-y-8">
              <RevealOnScroll delay={0.2}>
                <div>
                  <h2 className="font-display text-2xl font-bold text-forest mb-6">
                    Other ways to reach us
                  </h2>

                  <div className="space-y-5">
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl hover:shadow-sm transition-shadow group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                        <MessageCircle size={20} className="text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-forest text-sm">WhatsApp</p>
                        <p className="text-stone text-xs">Fastest response — usually under 2 hrs</p>
                      </div>
                    </a>

                    <a
                      href="mailto:hello@musaafirco.in"
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl hover:shadow-sm transition-shadow"
                    >
                      <div className="w-10 h-10 rounded-xl bg-sunset/10 flex items-center justify-center">
                        <Mail size={20} className="text-sunset" />
                      </div>
                      <div>
                        <p className="font-semibold text-forest text-sm">Email</p>
                        <p className="text-stone text-xs">hello@musaafirco.in</p>
                      </div>
                    </a>

                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white rounded-2xl hover:shadow-sm transition-shadow"
                    >
                      <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                        <Share2 size={20} className="text-purple-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-forest text-sm">Instagram</p>
                        <p className="text-stone text-xs">@musaafirco</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="bg-forest-light rounded-3xl p-6 mt-8">
                  <p className="text-sunset text-xs font-semibold uppercase tracking-wider mb-2">
                    Response time
                  </p>
                  <p className="text-sand font-semibold mb-1">We reply within 24 hours.</p>
                  <p className="text-sand/60 text-sm">
                    For urgent trip queries, WhatsApp is the fastest way to reach us. For booking and payment questions, email works best.
                  </p>
                </div>
              </RevealOnScroll>
            </aside>
          </div>
        </Container>
      </div>
    </>
  )
}
