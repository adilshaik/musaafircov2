import { Star } from 'lucide-react'
import type { Testimonial } from '@/types/testimonial'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  testimonial: Testimonial
  dark?: boolean
}

export default function TestimonialCard({
  testimonial,
  dark = false,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl p-6 flex flex-col gap-4 h-full',
        dark ? 'bg-forest-light' : 'bg-white shadow-sm'
      )}
    >
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < testimonial.rating ? 'text-sunset fill-sunset' : 'text-stone/30'
            }
          />
        ))}
      </div>

      <p
        className={cn(
          'font-display italic text-base leading-relaxed flex-1',
          dark ? 'text-sand/80' : 'text-forest/80'
        )}
      >
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-2 border-t border-stone/10">
        <div className="w-9 h-9 rounded-full bg-sunset/20 flex items-center justify-center shrink-0">
          <span className="text-xs font-bold text-sunset">
            {testimonial.initials}
          </span>
        </div>
        <div>
          <p className={cn('text-sm font-semibold', dark ? 'text-sand' : 'text-forest')}>
            {testimonial.name}
          </p>
          <p className="text-xs text-stone">{testimonial.trip}</p>
        </div>
      </div>
    </div>
  )
}
