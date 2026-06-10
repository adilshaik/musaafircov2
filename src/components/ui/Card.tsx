import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export default function Card({
  children,
  className,
  hover = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-3xl overflow-hidden',
        hover &&
          'transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(26,36,33,0.15)]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
