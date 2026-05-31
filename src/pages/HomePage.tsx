import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { achievementValues } from '../data/navigation'
import { Button } from '../components/ui/Button'
import { SectionTitle } from '../components/ui/SectionTitle'
import { CTASection } from '../components/layout/CTASection'
import { HeroTagList } from '../components/home/HeroTagList'
import { AchievementNumber } from '../components/home/AchievementNumber'
import { ConcernsRadialSection } from '../components/home/ConcernsRadialSection'
import { ReasonsChosenSection } from '../components/home/ReasonsChosenSection'
import { TestimonialsBand } from '../components/home/TestimonialsBand'
import { PricingBlock } from '../components/shared/PricingBlock'
import { WorkCaseStudyCard } from '../components/archive/WorkCaseStudyCard'
import { flattenWorkCases, getWorkCaseGroups } from '../data/workCases'
import { BlogCard } from '../components/archive/BlogCard'
import { FAQAccordion } from '../components/faq/FAQAccordion'
import { MovingLinesBg } from '../components/effects/MovingLinesBg'
import { useHeroAnimation } from '../hooks/useHeroAnimation'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useI18n } from '../i18n'

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const { dict, locale } = useI18n()
  useHeroAnimation(heroRef)
  const servicesRef = useScrollReveal<HTMLElement>({ staggerMs: 80 })
  const worksRef = useScrollReveal<HTMLElement>({ staggerMs: 80 })
  const faqRef = useScrollReveal<HTMLElement>()
  const blogRef = useScrollReveal<HTMLElement>({ staggerMs: 80 })
  const companyRef = useScrollReveal<HTMLElement>()
  const numbersRef = useScrollReveal<HTMLElement>({ staggerMs: 100 })

  return (
    <>
      <section
        ref={heroRef}
        className="hero-home-bg page-section relative min-h-[100dvh] w-full overflow-hidden bg-navy-950 pt-24 pb-[min(42vw,14rem)] text-white md:min-h-screen md:pb-20"
      >
        <MovingLinesBg />
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-coral-500/20 blur-3xl" data-hero="bg" />
        <div className="absolute bottom-20 -left-20 h-60 w-60 rounded-full bg-navy-700/40 blur-3xl" data-hero="bg" />

        <div className="relative mx-auto flex max-w-6xl flex-col px-4 pb-20 md:min-h-[calc(100vh-6rem)] md:justify-center md:px-6">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-coral-400" data-hero="line">
            {dict.home.heroEyebrow}
          </p>
          <h1
            className="mt-4 max-w-4xl text-2xl font-bold leading-snug md:text-3xl md:leading-snug lg:text-4xl lg:leading-snug"
            data-hero="line"
          >
            {dict.home.heroTitle1}
            {dict.home.heroTitle2 ? (
              <>
                <br />
                {dict.home.heroTitle2}
              </>
            ) : null}
          </h1>
          <p className="mt-6 max-w-xl text-white/70" data-hero="line">
            {dict.home.heroDesc}
          </p>
          <HeroTagList />
          <div className="mt-10 flex flex-wrap gap-4" data-hero="cta">
            <Button to="/contact" variant="primary">
              {dict.common.freeConsult}
            </Button>
            <Button to="/contact" variant="secondary" className="!border-white/40 !text-white hover:!bg-white hover:!text-navy-900">
              {dict.common.downloadDocs}
            </Button>
          </div>
        </div>
      </section>

      <section ref={numbersRef} className="section-band-washi-deep section-band-py-compact">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {achievementValues.map((a, i) => (
              <AchievementNumber
                key={i}
                value={a.value}
                suffix={a.suffix}
                label={dict.home.achievements[i].label}
                unit={dict.home.achievements[i].unit}
              />
            ))}
          </div>
          <div className="mt-10 flex justify-center gap-4">
            <Button to="/contact" variant="primary">{dict.common.freeConsultShort}</Button>
            <Button to="/contact" variant="outline">{dict.common.documentRequest}</Button>
          </div>
        </div>
      </section>

      <ConcernsRadialSection />

      <ReasonsChosenSection />

      <section ref={servicesRef} className="section-band-white section-band-py">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle en={dict.home.servicesPreview.en} ja={dict.home.servicesPreview.ja} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dict.services.items.slice(0, 6).map((s) => (
              <Link
                key={s.number}
                to="/services"
                className="scroll-reveal group rounded-2xl border border-sand-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-coral-500/30 hover:shadow-lg"
                data-cursor-hover
              >
                <p className="font-display text-sm text-coral-500">{s.number}</p>
                <h3 className="mt-2 text-lg font-bold text-navy-900 group-hover:text-coral-500">{s.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-navy-700/75">{s.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/services" variant="primary">{dict.home.servicesPreview.viewAll}</Button>
          </div>
        </div>
      </section>

      <section className="section-band-washi section-band-py">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle en={dict.home.price.en} ja={dict.home.price.ja} />
          <PricingBlock compact />
          <div className="mt-8 text-center">
            <Button to="/fee" variant="outline">{dict.home.price.viewDetail}</Button>
          </div>
        </div>
      </section>

      <section ref={worksRef} className="section-band-white section-band-py">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle en={dict.home.works.en} ja={dict.home.works.ja} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {flattenWorkCases(getWorkCaseGroups(locale))
              .slice(0, 6)
              .map((w) => (
                <WorkCaseStudyCard
                  key={w.id}
                  serviceNumber={w.serviceNumber}
                  serviceTitle={w.serviceTitle}
                  title={w.title}
                  challenge={w.challenge}
                  technicalDifficulty={w.technicalDifficulty}
                  solution={w.solution}
                  result={w.result}
                  compact
                  labels={{
                    highDifficulty: dict.works.highDifficulty,
                    challenge: dict.works.challenge,
                    technicalDifficulty: dict.works.technicalDifficulty,
                    solution: dict.works.solution,
                    result: dict.works.result,
                  }}
                />
              ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/works" variant="primary">{dict.home.works.viewAll}</Button>
          </div>
        </div>
      </section>

      <TestimonialsBand />

      <section ref={faqRef} className="section-band-white section-band-py">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <SectionTitle en={dict.home.faq.en} ja={dict.home.faq.ja} align="center" />
          <FAQAccordion items={dict.faq.items.slice(0, 4)} />
          <div className="mt-10 text-center">
            <Button to="/faq" variant="outline">{dict.home.faq.viewAll}</Button>
          </div>
        </div>
      </section>

      <section ref={blogRef} className="section-band-washi section-band-py">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle en={dict.home.blog.en} ja={dict.home.blog.ja} />
          <div className="grid gap-6 md:grid-cols-3">
            {dict.blog.items.map((p) => (
              <BlogCard key={p.id} {...p} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/blog" variant="primary">{dict.home.blog.viewAll}</Button>
          </div>
        </div>
      </section>

      <section ref={companyRef} className="section-band-white section-band-py">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle en={dict.home.company.en} ja={dict.home.company.ja} />
          <div className="scroll-reveal grid items-center gap-10 md:grid-cols-2">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950">
              <img
                src="/images/who_we_are_it_company_team_photo.png"
                alt={dict.home.company.ja}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div>
              <p className="leading-relaxed text-navy-700/85">
                {dict.home.company.desc}
              </p>
              <Button to="/company" variant="primary" className="mt-8">
                {dict.home.company.viewAll}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
