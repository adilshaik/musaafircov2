'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFormspark } from '@formspark/use-formspark'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Modal from '@/components/ui/Modal'
import Input from '@/components/ui/Input'
import { CheckCircle2, ChevronLeft, Loader2, QrCode, Zap } from 'lucide-react'

// ── Replace with your actual Formspark form ID ──────────────────────────────
const FORMSPARK_FORM_ID = 'YOUR_FORM_ID'

const schema = z.object({
  name: z.string().min(2, 'Full name is required'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(10, 'Enter a valid phone number'),
  plan: z.enum(['solo', 'duo']),
  transactionId: z.string().min(6, 'Enter your UPI transaction ID'),
})

type FormData = z.infer<typeof schema>

interface RegistrationModalProps {
  open: boolean
  onClose: () => void
}

const plans = [
  {
    id: 'solo' as const,
    label: 'Solo',
    price: '₹5,999',
    amount: 5999,
    note: 'per person',
    emoji: '🏃',
    features: ['1 runner slot', 'Shared stay', 'All meals included'],
  },
  {
    id: 'duo' as const,
    label: 'Duo',
    price: '₹10,999',
    amount: 10999,
    note: 'per couple',
    emoji: '👫',
    features: ['2 runner slots', 'Private room', 'All meals included'],
  },
]

// Animated laser scanner line — uses sunset colour to stay on brand
function ScannerLine() {
  return (
    <motion.div
      className="absolute left-0 right-0 h-0.5 rounded-full"
      style={{
        background:
          'linear-gradient(90deg, transparent, #D97706, transparent)',
        boxShadow: '0 0 8px 2px rgba(217,119,6,0.55)',
      }}
      initial={{ top: '10%', opacity: 0 }}
      animate={{ top: ['10%', '85%', '10%'], opacity: [0, 1, 1, 1, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

// Corner brackets — forest colour
function ScannerCorners() {
  const corners = [
    'top-0 left-0 border-t-2 border-l-2 rounded-tl-md',
    'top-0 right-0 border-t-2 border-r-2 rounded-tr-md',
    'bottom-0 left-0 border-b-2 border-l-2 rounded-bl-md',
    'bottom-0 right-0 border-b-2 border-r-2 rounded-br-md',
  ]
  return (
    <>
      {corners.map((cls, i) => (
        <motion.div
          key={i}
          className={`absolute w-6 h-6 border-sunset ${cls}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.08, duration: 0.3 }}
        />
      ))}
    </>
  )
}

export default function RegistrationModal({ open, onClose }: RegistrationModalProps) {
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0)
  const [qrLoaded, setQrLoaded] = useState(false)
  const [done, setDone] = useState(false)

  const [submit, submitting] = useFormspark({ formId: 'YKOEFgBjx' })

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { plan: 'solo' },
  })

  const selectedPlan = watch('plan')
  const selectedPlanData = plans.find((p) => p.id === selectedPlan)!

  const onSubmit = async (data: FormData) => {
    await submit({
      name: data.name,
      email: data.email,
      phone: data.phone,
      plan: data.plan,
      transactionId: data.transactionId,
      _subject: `New Move & Mind Registration — ${data.name}`,
    })
    setDone(true)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setStep(0)
      setDone(false)
      setQrLoaded(false)
    }, 350)
  }

  const goToStep1 = () => setStep(1)
  const goToStep2 = async () => {
    const valid = await trigger(['name', 'email', 'phone'])
    if (valid) setStep(2)
  }
  const goToStep3 = () => {
    setQrLoaded(false)
    setStep(3)
  }

  const stepLabels = ['Package', 'Details', 'Confirm', 'Pay']

  return (
    <Modal open={open} onClose={handleClose} size="md">
      <div className="relative overflow-hidden">
        {done ? (
          /* ── Success screen ───────────────────────────────────── */
          <motion.div
            className="text-center py-10 px-4"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
              className="flex justify-center mb-5"
            >
              <div className="w-20 h-20 rounded-full bg-sunset/10 flex items-center justify-center">
                <CheckCircle2 size={44} className="text-sunset" strokeWidth={1.5} />
              </div>
            </motion.div>
            <h3 className="font-display text-2xl font-bold text-forest mb-2">
              You&rsquo;re confirmed! 🎉
            </h3>
            <p className="text-stone text-sm leading-relaxed max-w-xs mx-auto mb-8">
              We&rsquo;ve received your registration and payment details. Expect a
              confirmation email shortly with the full itinerary.
            </p>
            <button
              onClick={handleClose}
              className="inline-flex items-center gap-2 rounded-full bg-forest text-sand px-8 py-3 text-sm font-semibold hover:bg-forest/90 transition-colors cursor-pointer"
            >
              Close
            </button>
          </motion.div>
        ) : (
          <div className="pt-6 pb-2 px-1">
            {/* Step progress bar */}
            <div className="flex items-center justify-between mb-8 px-1">
              {stepLabels.map((label, i) => (
                <div key={label} className="flex items-center">
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${i < step
                          ? 'bg-sunset text-white'
                          : i === step
                            ? 'bg-forest text-sand ring-4 ring-forest/15'
                            : 'bg-stone/10 text-stone/40'
                        }`}
                    >
                      {i < step ? '✓' : i + 1}
                    </div>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider transition-colors ${i <= step ? 'text-forest' : 'text-stone/35'
                        }`}
                    >
                      {label}
                    </span>
                  </div>
                  {i < stepLabels.length - 1 && (
                    <div className="w-8 md:w-14 h-px mx-2 mb-4 overflow-hidden bg-stone/10 rounded-full">
                      <motion.div
                        className="h-full bg-sunset rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: i < step ? '100%' : '0%' }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <AnimatePresence mode="wait">
                {/* ── Step 0: Package ─────────────────────────────── */}
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-stone/50 mb-3">
                      Choose your package
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {plans.map((plan) => (
                        <button
                          type="button"
                          key={plan.id}
                          onClick={() => setValue('plan', plan.id)}
                          className={`rounded-2xl border-2 p-4 text-left transition-all duration-200 cursor-pointer ${selectedPlan === plan.id
                              ? 'border-sunset bg-sunset/5 shadow-md shadow-sunset/10'
                              : 'border-stone/15 hover:border-stone/30'
                            }`}
                        >
                          <span className="text-2xl">{plan.emoji}</span>
                          <p className="font-bold text-forest mt-2 text-base">{plan.label}</p>
                          <p className="text-sunset font-extrabold text-xl mt-0.5">{plan.price}</p>
                          <p className="text-xs text-stone mt-0.5 mb-2">{plan.note}</p>
                          <ul className="space-y-1">
                            {plan.features.map((f) => (
                              <li key={f} className="text-xs text-stone/70 flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-sunset/60 inline-block flex-shrink-0" />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={goToStep1}
                      className="w-full rounded-full bg-forest text-sand py-3.5 text-sm font-semibold hover:bg-forest/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Zap size={16} />
                      Continue with {selectedPlanData.label} — {selectedPlanData.price}
                    </button>
                  </motion.div>
                )}

                {/* ── Step 1: Details ──────────────────────────────── */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-stone/50 mb-3">
                      Your details
                    </p>
                    <Input
                      label="Full name"
                      placeholder="Priya Sharma"
                      error={errors.name?.message}
                      {...register('name')}
                    />
                    <Input
                      label="Email address"
                      type="email"
                      placeholder="priya@email.com"
                      error={errors.email?.message}
                      {...register('email')}
                    />
                    <Input
                      label="Phone number"
                      type="tel"
                      placeholder="+91 98765 43210"
                      error={errors.phone?.message}
                      {...register('phone')}
                    />
                    <div className="flex gap-3 pt-1">
                      <button
                        type="button"
                        onClick={() => setStep(0)}
                        className="flex items-center gap-1.5 rounded-full border-2 border-stone/20 text-stone px-5 py-3 text-sm font-semibold hover:border-forest hover:text-forest transition-colors cursor-pointer"
                      >
                        <ChevronLeft size={16} />
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={goToStep2}
                        className="flex-1 rounded-full bg-forest text-sand py-3 text-sm font-semibold hover:bg-forest/90 active:scale-[0.98] transition-all cursor-pointer"
                      >
                        Review details →
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ── Step 2: Confirm ──────────────────────────────── */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-stone/50">
                      Confirm your details
                    </p>
                    <div className="rounded-2xl bg-sand-dark border border-stone/10 divide-y divide-stone/10">
                      {[
                        { label: 'Name', value: watch('name') },
                        { label: 'Email', value: watch('email') },
                        { label: 'Phone', value: watch('phone') },
                        {
                          label: 'Package',
                          value: `${selectedPlanData.label} — ${selectedPlanData.price} ${selectedPlanData.note}`,
                        },
                      ].map(({ label, value }) => (
                        <div key={label} className="flex justify-between px-4 py-3 text-sm">
                          <span className="text-stone/60 font-medium">{label}</span>
                          <span className="text-forest font-semibold text-right max-w-[55%] truncate">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                    {/* Total due */}
                    <div className="rounded-2xl bg-forest text-sand px-4 py-3 flex items-center justify-between">
                      <span className="text-sm font-semibold text-sand/70">Total due</span>
                      <span className="text-sunset font-extrabold text-xl">
                        {selectedPlanData.price}
                      </span>
                    </div>
                    <p className="text-xs text-stone/50 leading-relaxed">
                      Full payment is required to confirm your slot. No refunds within 7 days of the event.
                    </p>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex items-center gap-1.5 rounded-full border-2 border-stone/20 text-stone px-5 py-3 text-sm font-semibold hover:border-forest hover:text-forest transition-colors cursor-pointer"
                      >
                        <ChevronLeft size={16} />
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={goToStep3}
                        className="flex-1 rounded-full bg-sunset text-white py-3 text-sm font-semibold hover:bg-sunset-dark active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <QrCode size={16} />
                        Pay {selectedPlanData.price} →
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ── Step 3: GPay + Transaction ID ────────────────── */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    <div className="text-center">
                      <p className="text-xs font-semibold uppercase tracking-widest text-stone/50 mb-1">
                        Scan to pay
                      </p>
                      <p className="text-forest font-extrabold text-2xl">{selectedPlanData.price}</p>
                      <p className="text-stone/50 text-xs mt-0.5">{selectedPlanData.note} · full payment</p>
                    </div>

                    {/* QR card */}
                    <div className="flex flex-col items-center">
                      <div className="relative w-52 h-52 rounded-2xl overflow-hidden border-2 border-stone/10 shadow-lg shadow-forest/10 bg-white">
                        {/* Loading overlay */}
                        <AnimatePresence>
                          {!qrLoaded && (
                            <motion.div
                              className="absolute inset-0 z-10 bg-white flex flex-col items-center justify-center gap-3"
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                            >
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                              >
                                <Loader2 size={28} className="text-sunset" />
                              </motion.div>
                              <span className="text-xs text-stone/50 font-medium">Loading scanner…</span>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        <Image
                          src="/gpay-qr.png"
                          alt="Google Pay QR Code"
                          fill
                          className="object-contain p-2"
                          onLoad={() => setTimeout(() => setQrLoaded(true), 800)}
                          priority
                        />

                        {/* Scan animation (only after QR loads) */}
                        {qrLoaded && (
                          <div className="absolute inset-0 z-20 pointer-events-none">
                            <ScannerLine />
                            <ScannerCorners />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-stone/40 mt-3 text-center">
                        Open Google Pay / any UPI app and scan this code
                      </p>
                    </div>

                    {/* Transaction ID field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-widest text-stone/50 block">
                        UPI Transaction ID
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 426781234567"
                        {...register('transactionId')}
                        className={`w-full rounded-xl border-2 px-4 py-3 text-sm text-forest font-mono placeholder:text-stone/30 outline-none transition-colors bg-sand-dark ${errors.transactionId
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-stone/15 focus:border-sunset'
                          }`}
                      />
                      {errors.transactionId && (
                        <p className="text-xs text-red-500 mt-1">{errors.transactionId.message}</p>
                      )}
                      <p className="text-xs text-stone/40 leading-relaxed">
                        Find this in your UPI app under payment history after completing the transfer.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex items-center gap-1.5 rounded-full border-2 border-stone/20 text-stone px-5 py-3 text-sm font-semibold hover:border-forest hover:text-forest transition-colors cursor-pointer"
                      >
                        <ChevronLeft size={16} />
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="flex-1 rounded-full bg-forest text-sand py-3 text-sm font-semibold hover:bg-forest/90 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {submitting ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Submitting…
                          </>
                        ) : (
                          'Confirm registration ✓'
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        )}
      </div>
    </Modal>
  )
}
