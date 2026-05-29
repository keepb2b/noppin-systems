import { useEffect, useMemo, useState } from 'react'
import { PageHero } from '../components/layout/PageHero'
import { CTASection } from '../components/layout/CTASection'
import { ArchiveFilter } from '../components/archive/ArchiveFilter'
import { WorkCard } from '../components/archive/WorkCard'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useI18n } from '../i18n'

export function WorksPage() {
  const { dict, locale } = useI18n()
  const [filterIdx, setFilterIdx] = useState(0)
  const ref = useScrollReveal({ staggerMs: 80 })

  useEffect(() => {
    setFilterIdx(0)
  }, [locale])

  const filters = dict.works.filters

  const filtered = useMemo(() => {
    const filter = filters[filterIdx]
    if (filterIdx === 0) return dict.works.items
    return dict.works.items.filter((w) =>
      w.categories.some((c) => c.includes(filter) || filter.includes(c)),
    )
  }, [filterIdx, filters, dict.works.items])

  return (
    <>
      <PageHero
        en={dict.works.page.en}
        ja={dict.works.page.ja}
        breadcrumbs={[{ label: dict.works.page.ja }]}
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
            label={dict.works.label}
          />
          <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((w) => (
              <WorkCard key={w.id} {...w} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-12 text-center text-navy-700/60">{dict.common.noResults}</p>
          )}
          <nav className="mt-12 flex justify-center gap-2" aria-label="Pagination">
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                type="button"
                className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium transition-colors ${
                  p === 1 ? 'border-coral-500 bg-coral-500 text-white' : 'border-sand-200 hover:border-coral-500 hover:bg-coral-500/10'
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
