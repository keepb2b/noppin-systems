import { PageHero } from '../components/layout/PageHero'
import { CTASection } from '../components/layout/CTASection'
import { CompanyInfoTable } from '../components/company/CompanyInfoTable'
import { SectionTitle } from '../components/ui/SectionTitle'
import { useI18n } from '../i18n'

export function CompanyPage() {
  const { dict } = useI18n()

  return (
    <>
      <PageHero
        en={dict.company.page.en}
        ja={dict.company.page.ja}
        breadcrumbs={[{ label: dict.company.page.ja }]}
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <SectionTitle en={dict.company.profile.en} ja={dict.company.profile.ja} />
          <CompanyInfoTable />
        </div>
      </section>
      <CTASection />
    </>
  )
}
