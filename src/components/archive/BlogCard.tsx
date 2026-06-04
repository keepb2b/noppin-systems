import type { BlogPost } from '../../data/blogPosts'

type Props = BlogPost

export function BlogCard({ title, date, category, excerpt, image, serviceNumber }: Props) {
  return (
    <article
      className="scroll-reveal group flex flex-col overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      data-cursor-hover
    >
      <div className="blog-card-image relative aspect-[16/9] overflow-hidden bg-navy-900">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="blog-card-flow" aria-hidden />
        <div className="blog-card-flow-shimmer" aria-hidden />
        <span className="absolute top-3 left-3 z-10 rounded-full bg-navy-950/75 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white backdrop-blur-sm">
          {serviceNumber}
        </span>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3 text-xs text-navy-700/60">
          <time dateTime={date.replace(/\./g, '-')}>{date}</time>
          <span className="rounded-full bg-coral-500/10 px-2 py-0.5 font-medium text-coral-600">{category}</span>
        </div>
        <h3 className="mt-3 font-semibold text-navy-900 transition-colors group-hover:text-coral-500">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-700/75">{excerpt}</p>
      </div>
    </article>
  )
}
