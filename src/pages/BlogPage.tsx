import { useEffect, useMemo, useState } from 'react'
import { PageHero } from '../components/layout/PageHero'
import { CTASection } from '../components/layout/CTASection'
import { ArchiveFilter } from '../components/archive/ArchiveFilter'
import { BlogCard } from '../components/archive/BlogCard'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useI18n } from '../i18n'

export function BlogPage() {
  const { dict, locale } = useI18n()
  const [filterIdx, setFilterIdx] = useState(0)
  const ref = useScrollReveal({ staggerMs: 80 })

  useEffect(() => {
    setFilterIdx(0)
  }, [locale])

  const filters = dict.blog.filters

  const filtered = useMemo(() => {
    if (filterIdx === 0) return dict.blog.items
    const filter = filters[filterIdx]
    return dict.blog.items.filter((p) => p.category === filter)
  }, [filterIdx, filters, dict.blog.items])

  return (
    <>
      <PageHero
        en={dict.blog.page.en}
        ja={dict.blog.page.ja}
        breadcrumbs={[{ label: dict.blog.page.ja }]}
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
          />
          <div ref={ref} className="grid gap-6 md:grid-cols-3">
            {filtered.map((p) => (
              <BlogCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
