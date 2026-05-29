import { PageHero } from '../components/layout/PageHero'
import { CTASection } from '../components/layout/CTASection'
import { PricingBlock } from '../components/shared/PricingBlock'
import { Button } from '../components/ui/Button'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useI18n } from '../i18n'

export function FeePage() {
  const ref = useScrollReveal({ staggerMs: 60 })
  const { dict } = useI18n()

  return (
    <>
      <PageHero
        en={dict.fee.page.en}
        ja={dict.fee.page.ja}
        breadcrumbs={[{ label: dict.fee.page.ja }]}
        variant="pricing"
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-xl font-bold text-navy-900">{dict.fee.basicTitle}</h2>
          <PricingBlock />
          <div ref={ref} className="mt-16">
            <h2 className="text-xl font-bold text-navy-900">{dict.fee.pageFeeTitle}</h2>
            <ul className="mt-6 divide-y divide-sand-200 rounded-2xl border border-sand-200 bg-white">
              {dict.fee.pageFees.map((row) => (
                <li key={row.name} className="scroll-reveal flex items-center justify-between px-6 py-4">
                  <span className="text-navy-800">{row.name}</span>
                  <span className="font-semibold text-navy-900">{row.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="scroll-reveal mt-12 rounded-2xl bg-sand-100 p-6 text-sm text-navy-700/80">
            <p className="font-semibold text-navy-900">{dict.fee.notesTitle}</p>
            <ul className="mt-3 list-inside list-disc space-y-1">
              {dict.fee.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
          <div className="mt-10 text-center">
            <Button to="/contact" variant="primary">{dict.fee.requestQuote}</Button>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
