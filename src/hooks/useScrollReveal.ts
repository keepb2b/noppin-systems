import { useEffect, useRef } from 'react'
import { useReducedMotion } from './useReducedMotion'

type Options = {
  threshold?: number
  rootMargin?: string
  staggerMs?: number
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options: Options = {}) {
  const ref = useRef<T>(null)
  const reduced = useReducedMotion()
  const { threshold = 0.2, rootMargin = '0px 0px -10% 0px', staggerMs = 0 } = options

  useEffect(() => {
    const el = ref.current
    if (!el || reduced) {
      el?.classList.add('is-visible')
      el?.querySelectorAll('.scroll-reveal').forEach((c) => c.classList.add('is-visible'))
      return
    }

    const targets = el.classList.contains('scroll-reveal')
      ? [el]
      : [...el.querySelectorAll<HTMLElement>('.scroll-reveal')]

    if (targets.length === 0) {
      el.classList.add('scroll-reveal')
      targets.push(el)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const target = entry.target as HTMLElement
          const index = targets.indexOf(target)
          const delay = index >= 0 ? index * staggerMs : 0
          window.setTimeout(() => target.classList.add('is-visible'), delay)
          observer.unobserve(target)
        })
      },
      { threshold, rootMargin },
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [reduced, threshold, rootMargin, staggerMs])

  return ref
}
