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

    const revealTarget = (target: HTMLElement) => {
      const index = targets.indexOf(target)
      const delay = index >= 0 ? index * staggerMs : 0
      window.setTimeout(() => target.classList.add('is-visible'), delay)
      observer.unobserve(target)
    }

    const isInViewport = (target: HTMLElement) => {
      const rect = target.getBoundingClientRect()
      return rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.08
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          revealTarget(entry.target as HTMLElement)
        })
      },
      { threshold, rootMargin },
    )

    targets.forEach((t) => {
      if (isInViewport(t)) {
        revealTarget(t)
        return
      }
      observer.observe(t)
    })

    const onScroll = () => {
      targets.forEach((t) => {
        if (!t.classList.contains('is-visible') && isInViewport(t)) revealTarget(t)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [reduced, threshold, rootMargin, staggerMs])

  return ref
}
