import Container from '@/components/layout/Container'

interface Stat {
  value: string
  label: string
  description?: string
}

interface StatBandProps {
  stats: Stat[]
  dark?: boolean
}

export default function StatBand({ stats, dark = false }: StatBandProps) {
  const bg = dark ? 'bg-forest-light' : 'bg-sand-dark'
  const valueColor = dark ? 'text-sunset' : 'text-sunset'
  const labelColor = dark ? 'text-sand/60' : 'text-stone'

  return (
    <div className={bg}>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x divide-stone/20 py-6 sm:py-10 gap-y-4 md:gap-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center py-2 sm:py-4 px-3 sm:px-6 text-center">
              <span className={`font-accent text-2xl sm:text-3xl md:text-5xl leading-none ${valueColor}`}>
                {stat.value}
              </span>
              <span className={`mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider ${labelColor}`}>
                {stat.label}
              </span>
              {stat.description ? (
                <span className={`mt-1 sm:mt-2 max-w-36 text-[10px] sm:text-xs leading-relaxed hidden sm:block ${labelColor}`}>
                  {stat.description}
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
