import { useEffect, useRef, useState, useCallback } from 'react'
import { serviceStacks } from '../../data/serviceStacks'
import { useI18n } from '../../i18n'

interface CardItem {
  number: string
  title: string
  stack: readonly string[]
}

const INTERVAL_MS = 3000

export function ServiceStackCarousel() {
  const { dict } = useI18n()

  const items: CardItem[] = dict.services.items.map((s) => ({
    number: s.number,
    title: s.title,
    stack: serviceStacks[s.number] ?? [],
  }))

  const total = items.length
  const [active, setActive] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % total)
  }, [total])

  const goTo = (idx: number) => {
    setActive(((idx % total) + total) % total)
    resetTimer()
  }

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(advance, INTERVAL_MS)
  }

  useEffect(() => {
    timerRef.current = setInterval(advance, INTERVAL_MS)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [advance])

  // positions relative to active: -2, -1, 0, +1, +2
  const offsets = [-2, -1, 0, 1, 2]

  return (
    <div className="relative mx-auto w-full max-w-5xl select-none overflow-hidden px-4 py-8 md:px-6">
      {/* Arc track hidden */}

      {/* Cards */}
      <div className="relative flex h-[320px] items-end justify-center md:h-[360px]">
        {offsets.map((offset) => {
          const idx = ((active + offset) % total + total) % total
          const item = items[idx]
          const isCenter = offset === 0

          // Geometry along the arc
          const xPercent = offset * 22   // horizontal spread %
          const yPercent = offset === 0 ? 0 : Math.abs(offset) === 1 ? 8 : 20  // arc dip
          const scale = isCenter ? 1 : Math.abs(offset) === 1 ? 0.78 : 0.58
          const opacity = isCenter ? 1 : Math.abs(offset) === 1 ? 0.65 : 0.35
          const zIndex = isCenter ? 30 : Math.abs(offset) === 1 ? 20 : 10
          const blur = isCenter ? 0 : Math.abs(offset) === 1 ? 1 : 3

          return (
            <div
              key={item.number}
              onClick={() => !isCenter && goTo(idx)}
              style={{
                position: 'absolute',
                bottom: `${yPercent}%`,
                left: `calc(50% + ${xPercent}%)`,
                transform: `translateX(-50%) scale(${scale})`,
                opacity,
                zIndex,
                filter: `blur(${blur}px)`,
                transition: 'all 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: isCenter ? 'default' : 'pointer',
                width: '260px',
              }}
            >
              <article
                className={`overflow-hidden rounded-2xl border bg-white shadow-md transition-shadow duration-300 ${
                  isCenter
                    ? 'border-blue-200 shadow-xl ring-1 ring-blue-300/40'
                    : 'border-sand-200'
                }`}
              >
                {/* Browser chrome header */}
                <div className="flex items-center gap-1.5 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 px-4 py-2.5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                {/* Body */}
                <div className="flex flex-col items-center justify-end px-5 pb-6 pt-8"
                  style={{ minHeight: '200px' }}>

                  {/* Tech tags — only in center */}
                  <div
                    style={{
                      maxHeight: isCenter ? '120px' : '0px',
                      opacity: isCenter ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.45s ease, opacity 0.3s ease',
                      width: '100%',
                    }}
                  >
                    <ul className="mb-4 flex flex-wrap justify-center gap-1.5">
                      {item.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-aizome-200/80 bg-aizome-50 px-2.5 py-0.5 text-[11px] font-medium text-navy-800"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Title */}
                  <h3 className="text-center text-base font-bold text-navy-900">
                    {item.title}
                  </h3>
                  {/* EN subtitle */}
                  <p className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-cyan-500">
                    {'< '}SERVICE {item.number}{' >'}
                  </p>
                </div>
              </article>
            </div>
          )
        })}
      </div>

      {/* Dot indicators */}
      <div className="mt-6 flex justify-center gap-1.5">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to card ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? 'w-6 bg-coral-500' : 'w-1.5 bg-navy-700/25'
            }`}
          />
        ))}
      </div>

      {/* Prev / Next buttons */}
      <div className="mt-4 flex justify-center gap-4">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => goTo(active - 1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-200 bg-white text-navy-700 shadow-sm transition hover:border-coral-500 hover:text-coral-500"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => goTo(active + 1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-sand-200 bg-white text-navy-700 shadow-sm transition hover:border-coral-500 hover:text-coral-500"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
