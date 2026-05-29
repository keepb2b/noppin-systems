import type { Dictionary } from '../../i18n/types'

type ReasonItem = Dictionary['reasons']['items'][number]

type Props = ReasonItem & { reverse?: boolean }

export function NumberedReasonBlock({ number, title, description, imageAlt, reverse }: Props) {
  return (
    <article
      className={`scroll-reveal grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
        reverse ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950"
        aria-label={imageAlt}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-6xl font-bold text-white/10">{number}</span>
        </div>
        <div className="absolute bottom-4 left-4 rounded-full bg-coral-500 px-4 py-1 text-sm font-bold text-white">
          REASON {number}
        </div>
      </div>
      <div>
        <p className="font-display text-sm font-semibold text-coral-500">{number}</p>
        <h3 className="mt-2 text-2xl font-bold text-navy-900 md:text-3xl">{title}</h3>
        <p className="mt-4 leading-relaxed text-navy-700/85">{description}</p>
      </div>
    </article>
  )
}
