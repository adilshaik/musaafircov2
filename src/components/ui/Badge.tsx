import { cn } from '@/lib/utils'

type BadgeVariant = 'default' | 'sunset' | 'forest' | 'stone' | 'outline'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-sand-dark text-forest',
  sunset: 'bg-sunset text-white',
  forest: 'bg-forest text-sand',
  stone: 'bg-stone/10 text-stone',
  outline: 'border border-stone text-stone bg-transparent',
}

export default function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
