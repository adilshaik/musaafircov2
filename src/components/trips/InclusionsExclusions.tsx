import { Check, X } from 'lucide-react'

interface InclusionsExclusionsProps {
  inclusions: string[]
  exclusions: string[]
}

export default function InclusionsExclusions({
  inclusions,
  exclusions,
}: InclusionsExclusionsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-3xl p-6">
        <h3 className="font-display font-semibold text-forest mb-4 flex items-center gap-2">
          <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
            <Check size={13} className="text-green-600" />
          </span>
          What&rsquo;s included
        </h3>
        <ul className="space-y-3">
          {inclusions.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-stone">
              <Check size={14} className="text-green-500 mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-3xl p-6">
        <h3 className="font-display font-semibold text-forest mb-4 flex items-center gap-2">
          <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
            <X size={13} className="text-red-500" />
          </span>
          Not included
        </h3>
        <ul className="space-y-3">
          {exclusions.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-stone">
              <X size={14} className="text-red-400 mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
