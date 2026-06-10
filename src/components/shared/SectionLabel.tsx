import { cn } from '@/lib/utils'

interface SectionLabelProps {
  children: string
  dark?: boolean
  className?: string
}

export default function SectionLabel({
  children,
  dark = false,
  className,
}: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-3 mb-3', className)}>
      <span className="text-xs font-bold uppercase tracking-[0.3em] text-sunset">
        {children}
      </span>
      <span className="block w-8 h-px bg-sunset/50 shrink-0" />
    </div>
  )
}
