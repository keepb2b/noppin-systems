import { SectionTitle } from '../ui/SectionTitle'
import { useI18n } from '../../i18n'
import type { Dictionary } from '../../i18n/types'

type TestimonialItem = Dictionary['testimonials']['items'][number]

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <article className="testimonial-card flex w-[min(340px,85vw)] shrink-0 gap-4 rounded-2xl border border-sand-200 bg-white p-6 shadow-sm md:w-[400px] md:p-8">
      <div className="relative shrink-0">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold text-white shadow-md ring-4 ring-white md:h-16 md:w-16 md:text-base"
          style={{
            background: `linear-gradient(135deg, ${item.avatarFrom} 0%, ${item.avatarTo} 100%)`,
          }}
          aria-hidden
        >
          {item.initials}
        </div>
        <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-white bg-coral-500" aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-base leading-relaxed text-navy-800 md:text-lg">&ldquo;{item.quote}&rdquo;</p>
        <footer className="mt-4 border-t border-sand-100 pt-3">
          <cite className="not-italic">
            <span className="block text-sm font-semibold text-navy-900">{item.author}</span>
            <span className="mt-0.5 block text-xs text-navy-700/65">{item.role}</span>
          </cite>
        </footer>
      </div>
    </article>
  )
}

function MarqueeTrack({ items, ariaHidden }: { items: TestimonialItem[]; ariaHidden?: boolean }) {
  return (
    <div className="testimonials-track flex shrink-0 items-stretch gap-5 pr-5 md:gap-6 md:pr-6" aria-hidden={ariaHidden}>
      {items.map((item) => (
        <TestimonialCard key={`${ariaHidden ? 'dup-' : ''}${item.id}`} item={item} />
      ))}
    </div>
  )
}

export function TestimonialsBand() {
  const { dict } = useI18n()
  const { section, items } = dict.testimonials
  const loopItems = [...items, ...items]

  return (
    <section className="page-section section-band-washi-deep section-band-py overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle en={section.en} ja={section.ja} />
      </div>

      <div
        className="testimonials-marquee group relative mt-10 md:mt-12"
        aria-label={`${section.ja} — scroll`}
      >
        <div className="testimonials-marquee-fade pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-20" />
        <div className="testimonials-marquee-fade pointer-events-none absolute inset-y-0 right-0 z-10 w-12 rotate-180 md:w-20" />

        <div className="testimonials-marquee-inner flex w-max">
          <MarqueeTrack items={loopItems} />
          <MarqueeTrack items={loopItems} ariaHidden />
        </div>
      </div>
    </section>
  )
}
