import type { Dictionary } from '../../i18n/types'

type AnimationItem = Dictionary['animation']['items'][number]

export function AnimationCard({ title, category, description }: AnimationItem) {
  return (
    <article
      className="scroll-reveal group overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      data-cursor-hover
    >
      <div className="relative aspect-video overflow-hidden bg-navy-900">
        <div className="absolute inset-0 line-bg opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-12 w-12 rounded-full border-2 border-coral-500/50 transition-transform duration-300 group-hover:scale-110 group-hover:border-coral-500" />
        </div>
        <span className="absolute top-3 right-3 rounded-full bg-white/10 px-2 py-1 text-xs text-white backdrop-blur">
          {category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-navy-900 group-hover:text-coral-500 transition-colors">{title}</h3>
        <p className="mt-2 text-sm text-navy-700/70">{description}</p>
      </div>
    </article>
  )
}
