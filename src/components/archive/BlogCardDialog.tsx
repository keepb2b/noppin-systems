import { useEffect, useRef } from 'react'
import type { BlogPost } from '../../data/blogPosts'

interface Props {
  post: BlogPost | null
  onClose: () => void
}

export function BlogCardDialog({ post, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const el = dialogRef.current
    if (!el) return
    if (post) {
      el.showModal()
    } else {
      el.close()
    }
  }, [post])

  function handleClick(e: React.MouseEvent<HTMLDialogElement>) {
    if (e.target === dialogRef.current) onClose()
  }

  if (!post) return null

  return (
    <dialog
      ref={dialogRef}
      onClick={handleClick}
      onClose={onClose}
      className="m-auto w-full max-w-xl rounded-2xl border border-sand-200 bg-white p-0 shadow-2xl backdrop:bg-navy-950/60 backdrop:backdrop-blur-sm open:animate-[dialog-in_0.2s_ease-out]"
    >
      {/* Header image */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl bg-navy-900">
        <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
        <span className="absolute top-3 left-3 rounded-full bg-navy-950/75 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white backdrop-blur-sm">
          {post.serviceNumber}
        </span>
      </div>

      {/* Body */}
      <div className="max-h-[60vh] overflow-y-auto p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-navy-700/60">
          <time dateTime={post.date.replace(/\./g, '-')}>{post.date}</time>
          <span className="rounded-full bg-coral-500/10 px-2 py-0.5 font-medium text-coral-600">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-3 font-serif text-lg font-bold leading-snug text-navy-900">
          {post.description.title}
        </h2>

        {/* Overview */}
        <p className="mt-4 text-sm leading-relaxed text-navy-700/80">
          {post.description.overview}
        </p>

        {/* Key points */}
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-coral-500">主な内容</p>
          <ul className="mt-3 space-y-2">
            {post.description.points.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-navy-700">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end border-t border-sand-200 px-6 py-4">
        <button
          type="button"
          onClick={onClose}
          className="rounded-full bg-navy-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-coral-500"
        >
          閉じる
        </button>
      </div>
    </dialog>
  )
}
