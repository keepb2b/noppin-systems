type Props = {
  filters: readonly string[]
  active: string
  onChange: (value: string) => void
  label?: string
}

export function ArchiveFilter({ filters, active, onChange, label }: Props) {
  return (
    <div className="mb-8">
      {label && <p className="mb-4 text-sm font-semibold text-navy-800">{label}</p>}
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => onChange(f)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
              active === f
                ? 'border-coral-500 bg-coral-500 text-white'
                : 'border-sand-200 bg-white text-navy-800 hover:border-coral-500 hover:bg-coral-500/10 hover:text-coral-600'
            }`}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  )
}
