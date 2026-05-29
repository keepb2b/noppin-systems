import { PageHero } from '../components/layout/PageHero'
import { CTASection } from '../components/layout/CTASection'
import { NumberedServiceBlock } from '../components/shared/NumberedServiceBlock'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useI18n } from '../i18n'

export function ServicesPage() {
  const ref = useScrollReveal<HTMLElement>()
  const { dict } = useI18n()

  return (
    <>
      <PageHero
        en={dict.services.page.en}
        ja={dict.services.page.ja}
        breadcrumbs={[{ label: dict.services.page.ja }]}
        variant="services"
      />
      <section ref={ref} className="py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          {dict.services.items.map((s, i) => (
            <NumberedServiceBlock key={s.number} {...s} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  )
}
