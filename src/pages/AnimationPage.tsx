import { useEffect, useMemo, useState } from 'react'
import { PageHero } from '../components/layout/PageHero'
import { CTASection } from '../components/layout/CTASection'
import { ArchiveFilter } from '../components/archive/ArchiveFilter'
import { AnimationCard } from '../components/archive/AnimationCard'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useI18n } from '../i18n'

export function AnimationPage() {
  const { dict, locale } = useI18n()
  const [filterIdx, setFilterIdx] = useState(0)
  const ref = useScrollReveal({ staggerMs: 80 })

  useEffect(() => {
    setFilterIdx(0)
  }, [locale])

  const filters = dict.animation.filters

  const filtered = useMemo(() => {
    if (filterIdx === 0) return dict.animation.items
    const filter = filters[filterIdx]
    return dict.animation.items.filter((a) => a.category === filter)
  }, [filterIdx, filters, dict.animation.items])

  return (
    <>
      <PageHero
        en={dict.animation.page.en}
        ja={dict.animation.page.ja}
        breadcrumbs={[{ label: dict.animation.page.ja }]}
        variant="animation"
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <ArchiveFilter
            filters={filters}
            active={filters[filterIdx]}
            onChange={(label) => {
              const idx = filters.indexOf(label)
              if (idx >= 0) setFilterIdx(idx)
            }}
            label={dict.animation.label}
          />
          <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a) => (
              <AnimationCard key={a.id} {...a} />
            ))}
          </div>
          <nav className="mt-12 flex justify-center gap-2" aria-label="Pagination">
            {[1, 2].map((p) => (
              <button
                key={p}
                type="button"
                className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium transition-colors ${
                  p === 1 ? 'border-coral-500 bg-coral-500 text-white' : 'border-sand-200 hover:border-coral-500'
                }`}
              >
                {p}
              </button>
            ))}
          </nav>
        </div>
      </section>
      <CTASection />
    </>
  )
}
