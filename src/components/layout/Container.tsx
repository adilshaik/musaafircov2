import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  narrow?: boolean
}

export default function Container({
  children,
  className,
  narrow = false,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        narrow ? 'max-w-3xl' : 'max-w-7xl',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
