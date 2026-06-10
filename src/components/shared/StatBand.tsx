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
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-stone/20 py-10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center py-4 px-6 text-center">
              <span className={`font-accent text-3xl sm:text-4xl md:text-5xl leading-none ${valueColor}`}>
                {stat.value}
              </span>
              <span className={`mt-1 text-xs font-semibold uppercase tracking-wider ${labelColor}`}>
                {stat.label}
              </span>
              {stat.description ? (
                <span className={`mt-2 max-w-36 text-xs leading-relaxed ${labelColor}`}>
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
