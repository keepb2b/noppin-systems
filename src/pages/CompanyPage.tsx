import { useEffect } from 'react'
import { PageHero } from '../components/layout/PageHero'
import { CTASection } from '../components/layout/CTASection'
import { CompanyInfoTable } from '../components/company/CompanyInfoTable'
import { ExecutiveCard } from '../components/company/ExecutiveCard'
import { SectionTitle } from '../components/ui/SectionTitle'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useI18n } from '../i18n'

export function CompanyPage() {
  const ref = useScrollReveal<HTMLElement>({ staggerMs: 100 })
  const { dict } = useI18n()

  useEffect(() => {
    const container = ref.current
    if (!container) return
    container.querySelectorAll('.scroll-reveal:not(.is-visible)').forEach((el) => {
      el.classList.add('is-visible')
    })
  }, [dict.company.executives])

  return (
    <>
      <PageHero
        en={dict.company.page.en}
        ja={dict.company.page.ja}
        breadcrumbs={[{ label: dict.company.page.ja }]}
        variant="company"
      />
      <section ref={ref} className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle en={dict.company.profile.en} ja={dict.company.profile.ja} align="center" />
          <div className="mx-auto mt-10 max-w-md">
            {dict.company.executives.map((executive) => (
              <ExecutiveCard key={executive.id} {...executive} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-3xl">
            <CompanyInfoTable />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
