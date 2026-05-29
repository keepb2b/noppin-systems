import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useI18n } from '../../i18n'

export function PricingBlock({ compact = false }: { compact?: boolean }) {
  const ref = useScrollReveal<HTMLElement>({ staggerMs: 80 })
  const { dict } = useI18n()
  const items = dict.fee.pricing

  return (
    <section ref={ref} className={compact ? '' : 'py-16 md:py-24'}>
      <div className={`grid gap-4 ${compact ? 'md:grid-cols-3' : 'md:grid-cols-3'}`}>
        {items.map((item) => (
          <div key={item.label} className="scroll-reveal rounded-2xl border border-sand-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-navy-700/70">{item.label}</p>
            <p className="mt-2 font-display text-3xl font-bold text-navy-900 md:text-4xl">
              {item.price}
              <span className="ml-1 text-base font-medium text-navy-700">{item.unit}</span>
            </p>
            <p className="mt-2 text-xs text-navy-700/60">{item.note}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
