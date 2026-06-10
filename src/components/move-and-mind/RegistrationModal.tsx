'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Modal from '@/components/ui/Modal'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'

const steps = ['Plan', 'Details', 'Confirm'] as const

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone required'),
  plan: z.enum(['solo', 'duo']),
  message: z.string().optional(),
})

type FormData = z.infer<typeof schema>

interface RegistrationModalProps {
  open: boolean
  onClose: () => void
}

export default function RegistrationModal({
  open,
  onClose,
}: RegistrationModalProps) {
  const [step, setStep] = useState<0 | 1 | 2>(0)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { plan: 'solo' },
  })

  const selectedPlan = watch('plan')

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1000))
    console.log('Registration:', data)
    setSubmitting(false)
    setDone(true)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setStep(0)
      setDone(false)
    }, 300)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title="Register Interest — Move & Mind"
      size="md"
    >
      {done ? (
        <div className="text-center py-8">
          <div className="text-5xl mb-4">🎉</div>
          <h3 className="font-display text-2xl font-bold text-forest mb-3">
            You&rsquo;re on the list!
          </h3>
          <p className="text-stone mb-6">
            We&rsquo;ll send batch details and payment info to your email within 24
            hours. Can&rsquo;t wait to see you on the trail.
          </p>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </div>
      ) : (
        <div>
          {/* Step indicators */}
          <div className="flex items-center gap-2 mb-8">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    i <= step
                      ? 'bg-sunset text-white'
                      : 'bg-stone/10 text-stone'
                  }`}
                >
                  {i + 1}
                </div>
                <span
                  className={`text-xs font-semibold ${i <= step ? 'text-sunset' : 'text-stone'}`}
                >
                  {s}
                </span>
                {i < steps.length - 1 && (
                  <div className="h-px w-8 bg-stone/20 mx-1" />
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {step === 0 && (
              <div className="space-y-4">
                <p className="text-sm text-stone mb-4">
                  Choose your package:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {(['solo', 'duo'] as const).map((plan) => (
                    <button
                      type="button"
                      key={plan}
                      onClick={() => setValue('plan', plan)}
                      className={`rounded-2xl border-2 p-4 text-left transition-colors cursor-pointer ${
                        selectedPlan === plan
                          ? 'border-sunset bg-sunset/5'
                          : 'border-stone/20 hover:border-stone/40'
                      }`}
                    >
                      <p className="font-semibold text-forest capitalize mb-1">
                        {plan === 'solo' ? 'Solo Explorer' : 'Duo Package'}
                      </p>
                      <p className="text-sunset font-bold text-lg">
                        {plan === 'solo' ? '₹14,900' : '₹12,900'}
                      </p>
                      <p className="text-xs text-stone mt-1">per person</p>
                    </button>
                  ))}
                </div>
                <Button
                  type="button"
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={() => setStep(1)}
                >
                  Continue →
                </Button>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <Input
                  label="Full name"
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
                <Input
                  label="Phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  error={errors.phone?.message}
                  {...register('phone')}
                />
                <Textarea
                  label="Anything you want us to know? (optional)"
                  placeholder="Dietary requirements, medical conditions, fitness level..."
                  {...register('message')}
                />
                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    onClick={() => setStep(0)}
                  >
                    ← Back
                  </Button>
                  <Button
                    type="button"
                    variant="primary"
                    size="md"
                    fullWidth
                    onClick={() => {
                      const { name, email, phone } = errors
                      if (!name && !email && !phone) setStep(2)
                      else handleSubmit(() => setStep(2))()
                    }}
                  >
                    Review →
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <div className="bg-sand-dark rounded-2xl p-4 space-y-2 text-sm">
                  <p>
                    <span className="text-stone">Package:</span>{' '}
                    <span className="font-semibold text-forest capitalize">
                      {selectedPlan === 'solo' ? 'Solo Explorer — ₹14,900' : 'Duo Package — ₹12,900/person'}
                    </span>
                  </p>
                  <p>
                    <span className="text-stone">Note:</span>{' '}
                    <span className="text-forest">
                      Payment link will be sent to your email after confirmation.
                    </span>
                  </p>
                </div>
                <p className="text-xs text-stone leading-relaxed">
                  By registering, you confirm you&rsquo;ve read the inclusions and
                  exclusions. A ₹2,000 advance confirms your slot; full payment
                  due 14 days before the event.
                </p>
                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    onClick={() => setStep(1)}
                  >
                    ← Edit
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    fullWidth
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting...' : 'Confirm registration'}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      )}
    </Modal>
  )
}
