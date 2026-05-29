import { Button } from '../ui/Button'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useI18n } from '../../i18n'

export function CTASection() {
  const ref = useScrollReveal<HTMLElement>()
  const { dict } = useI18n()

  return (
    <section ref={ref} className="border-y border-sand-200 bg-navy-900 py-16 md:py-20">
      <div className="scroll-reveal mx-auto max-w-6xl px-4 text-center md:px-6">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-coral-400">
          {dict.cta.labelEn}
        </p>
        <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">{dict.cta.title}</h2>
        <p className="mt-4 text-lg font-semibold text-white">
          <a href="tel:03-1234-5678" className="hover:text-coral-400 transition-colors">
            03-1234-5678
          </a>
        </p>
        <p className="mt-1 text-sm text-white/60">{dict.common.phoneHours}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button to="/contact" variant="primary">
            {dict.common.freeConsult}
          </Button>
          <Button href="https://www.chatwork.com" variant="secondary" className="!border-white/30 !text-white hover:!bg-white hover:!text-navy-900">
            {dict.cta.chatwork}
          </Button>
        </div>
      </div>
    </section>
  )
}
