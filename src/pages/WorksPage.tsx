import { useEffect, useMemo, useState } from 'react'
import { PageHero } from '../components/layout/PageHero'
import { CTASection } from '../components/layout/CTASection'
import { ArchiveFilter } from '../components/archive/ArchiveFilter'
import { WorkCard } from '../components/archive/WorkCard'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useI18n } from '../i18n'

const PAGE_SIZE = 3

export function WorksPage() {
  const { dict, locale } = useI18n()
  const [filterIdx, setFilterIdx] = useState(0)
  const [page, setPage] = useState(1)
  const ref = useScrollReveal({ staggerMs: 80 })

  useEffect(() => {
    setFilterIdx(0)
    setPage(1)
  }, [locale])

  useEffect(() => {
    setPage(1)
  }, [filterIdx])

  const filters = dict.works.filters

  const filtered = useMemo(() => {
    const filter = filters[filterIdx]
    if (filterIdx === 0) return dict.works.items
    return dict.works.items.filter((w) =>
      w.categories.some((c) => c.includes(filter) || filter.includes(c)),
    )
  }, [filterIdx, filters, dict.works.items])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE
    return filtered.slice(start, start + PAGE_SIZE)
  }, [filtered, currentPage])

  useEffect(() => {
    const container = ref.current
    if (!container) return
    container.querySelectorAll('.scroll-reveal:not(.is-visible)').forEach((el) => {
      el.classList.add('is-visible')
    })
  }, [paginated])

  return (
    <>
      <PageHero
        en={dict.works.page.en}
        ja={dict.works.page.ja}
        breadcrumbs={[{ label: dict.works.page.ja }]}
        variant="works"
      />
      <section ref={ref} className="py-16 md:py-24">
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
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((w) => (
              <WorkCard key={w.id} {...w} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="py-12 text-center text-navy-700/60">{dict.common.noResults}</p>
          )}
          {totalPages > 1 && (
            <nav className="mt-12 flex justify-center gap-2" aria-label="Pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  aria-current={p === currentPage ? 'page' : undefined}
                  onClick={() => setPage(p)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium transition-colors ${
                    p === currentPage
                      ? 'border-coral-500 bg-coral-500 text-white'
                      : 'border-sand-200 hover:border-coral-500 hover:bg-coral-500/10'
                  }`}
                >
                  {p}
                </button>
              ))}
            </nav>
          )}
        </div>
      </section>
      <CTASection />
    </>
  )
}
