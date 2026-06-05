import type { BlogPost } from '../../data/blogPosts'

type Props = BlogPost & { onClick?: () => void }

export function BlogCard({ title, date, category, image, onClick }: Props) {
  return (
    /* outer wrapper gives room for the image to overflow upward */
    <div
      className="scroll-reveal group relative pt-8 cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
      data-cursor-hover
    >
      {/* Card body — wide rectangle */}
      <article className="relative overflow-visible rounded-2xl border border-navy-800 bg-navy-900 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg min-h-[120px] flex items-center pr-[44%] pl-5 py-5">

        {/* Left text */}
        <div className="flex flex-col justify-center">
          <h3 className="text-sm font-bold leading-snug text-white transition-colors group-hover:text-coral-400 md:text-[0.9375rem]">
            {title}
          </h3>
          <div className="mt-3 flex items-center gap-2 text-xs text-white/50">
            <time dateTime={date.replace(/\./g, '-')}>{date.replace(/\./g, '-')}</time>
            <span className="rounded border border-white/20 bg-white/10 px-2 py-0.5 font-medium text-white/75">
              {category}
            </span>
          </div>
        </div>

        {/* Image — overflows top, has bottom gap inside card */}
        <div className="pointer-events-none absolute -top-4 right-2 h-[calc(100%-1.5rem)] w-[42%] overflow-hidden rounded-xl shadow-md transition-transform duration-500 group-hover:scale-[1.03]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </article>
    </div>
  )
}
