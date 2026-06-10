import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: 'section' | 'div' | 'article'
  label?: string
  dark?: boolean
}

export default function Section({
  as: Tag = 'section',
  label,
  dark = false,
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn(
        'py-16 md:py-24',
        dark ? 'bg-forest text-sand' : 'bg-sand',
        className
      )}
      {...props}
    >
      {label && (
        <div className="mx-auto mb-3 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <p
            className={cn(
              'text-xs font-semibold uppercase tracking-[0.2em]',
              dark ? 'text-sunset' : 'text-sunset'
            )}
          >
            {label}
          </p>
        </div>
      )}
      {children}
    </Tag>
  )
}
