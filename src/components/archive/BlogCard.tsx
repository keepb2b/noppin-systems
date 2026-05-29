import type { Dictionary } from '../../i18n/types'

type BlogItem = Dictionary['blog']['items'][number]

export function BlogCard({ title, date, category, excerpt }: BlogItem) {
  return (
    <article
      className="scroll-reveal group flex flex-col overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      data-cursor-hover
    >
      <div className="aspect-[16/9] bg-gradient-to-br from-sand-100 to-sand-200 transition-transform duration-300 group-hover:scale-[1.02]" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-navy-700/60">
          <time dateTime={date.replace(/\./g, '-')}>{date}</time>
          <span className="rounded-full bg-coral-500/10 px-2 py-0.5 font-medium text-coral-600">{category}</span>
        </div>
        <h3 className="mt-3 font-semibold text-navy-900 group-hover:text-coral-500 transition-colors">{title}</h3>
        <p className="mt-2 flex-1 text-sm text-navy-700/75">{excerpt}</p>
      </div>
    </article>
  )
}
