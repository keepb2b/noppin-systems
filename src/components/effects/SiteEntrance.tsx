import { useEffect, useMemo, useRef } from 'react'
import gsap from 'gsap'
import { entranceCopy } from '../../data/entrance'
import { useReducedMotion } from '../../hooks/useReducedMotion'

type Props = {
  onComplete: () => void
}

type PetalConfig = {
  id: number
  left: string
  size: number
  delay: string
  duration: string
  drift: string
  opacity: number
  hue: string
}

function SakuraPetalIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden>
      <g fill={color}>
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse key={deg} cx="20" cy="11" rx="5.5" ry="9" transform={`rotate(${deg} 20 20)`} />
        ))}
      </g>
      <circle cx="20" cy="20" r="3.5" fill="#fff5f7" opacity="0.95" />
    </svg>
  )
}

function buildPetals(): PetalConfig[] {
  const hues = ['#ffb7c5', '#ffc8d4', '#f4a4b0', '#ffd4dc', '#ffeef2']
  return Array.from({ length: 32 }, (_, i) => ({
    id: i,
    left: `${((i * 23.7 + 4) % 96) + 2}%`,
    size: 11 + (i % 5) * 5,
    delay: `${((i * 0.41) % 6).toFixed(2)}s`,
    duration: `${(5.5 + (i % 6) * 1.1).toFixed(1)}s`,
    drift: `${-55 + (i % 11) * 11}px`,
    opacity: 0.55 + (i % 4) * 0.1,
    hue: hues[i % hues.length],
  }))
}

export function SiteEntrance({ onComplete }: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const petals = useMemo(() => buildPetals(), [])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    document.body.classList.add('site-entrance-active')

    const world = root.querySelector<HTMLElement>('[data-entrance="world"]')
    const doorLeft = root.querySelector<HTMLElement>('[data-entrance="door-left"]')
    const doorRight = root.querySelector<HTMLElement>('[data-entrance="door-right"]')
    const sunlight = root.querySelector<HTMLElement>('[data-entrance="sunlight"]')
    const rays = root.querySelector<HTMLElement>('[data-entrance="rays"]')
    const wash = root.querySelector<HTMLElement>('[data-entrance="wash"]')
    const bloom = root.querySelector<HTMLElement>('[data-entrance="bloom"]')

    if (!world || !doorLeft || !doorRight || !sunlight || !rays || !wash || !bloom) {
      document.body.classList.remove('site-entrance-active')
      onComplete()
      return
    }

    gsap.set([doorLeft, doorRight], { rotationY: 0, transformOrigin: 'center center' })
    gsap.set(doorLeft, { transformOrigin: 'left center' })
    gsap.set(doorRight, { transformOrigin: 'right center' })
    gsap.set(sunlight, { opacity: 0.15, scale: 0.6 })
    gsap.set(rays, { opacity: 0 })
    gsap.set(wash, { opacity: 0, scale: 0.4 })
    gsap.set(bloom, { opacity: 0 })
    gsap.set(world, { z: -820, scale: 0.58 })

    const tl = gsap.timeline({
      defaults: { ease: 'power2.inOut' },
      onComplete: () => {
        document.body.classList.remove('site-entrance-active')
        onComplete()
      },
    })

    tl.to(world, {
      z: 0,
      scale: 1,
      duration: 3.2,
      ease: 'power1.inOut',
    })

    tl.to(
      doorLeft,
      {
        rotationY: -82,
        duration: 2.4,
        ease: 'power2.inOut',
      },
      2.8,
    )
    tl.to(
      doorRight,
      {
        rotationY: 82,
        duration: 2.4,
        ease: 'power2.inOut',
      },
      2.8,
    )
    tl.to(
      sunlight,
      {
        opacity: 1,
        scale: 1.35,
        duration: 2.2,
        ease: 'power2.out',
      },
      3.1,
    )
    tl.to(
      rays,
      {
        opacity: 1,
        duration: 1.8,
        ease: 'power1.out',
      },
      3.6,
    )

    tl.to(
      bloom,
      {
        opacity: 1,
        duration: 1.1,
        ease: 'power2.in',
      },
      5.0,
    )
    tl.to(
      wash,
      {
        opacity: 1,
        scale: 1.15,
        duration: 1.2,
        ease: 'power2.in',
      },
      5.1,
    )
    tl.to(
      root,
      {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
      },
      6.0,
    )

    return () => {
      tl.kill()
      document.body.classList.remove('site-entrance-active')
    }
  }, [onComplete])

  return (
    <div ref={rootRef} className="site-entrance" aria-hidden="true">
      {!reduced && (
        <div className="site-entrance-sakura">
          {petals.map((p) => (
            <span
              key={p.id}
              className="site-entrance-petal"
              style={
                {
                  left: p.left,
                  '--drift': p.drift,
                  '--petal-opacity': p.opacity,
                  animationDelay: p.delay,
                  animationDuration: p.duration,
                } as React.CSSProperties
              }
            >
              <SakuraPetalIcon size={p.size} color={p.hue} />
            </span>
          ))}
        </div>
      )}

      <div className="site-entrance-viewport">
        <div className="site-entrance-camera">
          <div className="site-entrance-world" data-entrance="world">
          <div className="site-entrance-ceiling" />
          <div className="site-entrance-wall site-entrance-wall--left" />
          <div className="site-entrance-wall site-entrance-wall--right" />

          <div className="site-entrance-floor-ground" />
          <div className="site-entrance-floor-wrap">
            <div className="site-entrance-floor" />
            <div className="site-entrance-floor-front" />
            <div className="site-entrance-floor-shine" />
          </div>

          <div className="site-entrance-lobby-glow" />

          <div className="site-entrance-doorway">
            <div className="site-entrance-sunlight" data-entrance="sunlight">
              <div className="site-entrance-sun-core" />
            </div>

            <div className="site-entrance-door-frame">
              <div className="site-entrance-frame-cap">
                <div className="site-entrance-lintel-lines">
                  <p className="site-entrance-engraved site-entrance-engraved--lintel">{entranceCopy.lintel.en}</p>
                  <p className="site-entrance-engraved site-entrance-engraved--lintel site-entrance-engraved--ja">
                    {entranceCopy.lintel.ja}
                  </p>
                </div>
              </div>
              <div className="site-entrance-door site-entrance-door--left" data-entrance="door-left">
                <div className="site-entrance-door-panel">
                  <div className="site-entrance-door-glass">
                    <div className="site-entrance-bilingual-stack">
                      <span className="site-entrance-engraved site-entrance-engraved--door">{entranceCopy.doorLeft.en[0]}</span>
                      <span className="site-entrance-engraved site-entrance-engraved--door site-entrance-engraved--ja">
                        {entranceCopy.doorLeft.ja[0]}
                      </span>
                    </div>
                    <div className="site-entrance-bilingual-stack site-entrance-bilingual-stack--sub">
                      <span className="site-entrance-engraved site-entrance-engraved--door site-entrance-engraved--sub">
                        {entranceCopy.doorLeft.en[1]}
                      </span>
                      <span className="site-entrance-engraved site-entrance-engraved--door site-entrance-engraved--sub site-entrance-engraved--ja">
                        {entranceCopy.doorLeft.ja[1]}
                      </span>
                    </div>
                  </div>
                  <div className="site-entrance-door-handle" />
                </div>
              </div>
              <div className="site-entrance-door site-entrance-door--right" data-entrance="door-right">
                <div className="site-entrance-door-panel">
                  <div className="site-entrance-door-glass">
                    <div className="site-entrance-bilingual-stack">
                      <span className="site-entrance-engraved site-entrance-engraved--door">{entranceCopy.doorRight.en[0]}</span>
                      <span className="site-entrance-engraved site-entrance-engraved--door site-entrance-engraved--ja">
                        {entranceCopy.doorRight.ja[0]}
                      </span>
                    </div>
                    <div className="site-entrance-bilingual-stack site-entrance-bilingual-stack--sub">
                      <span className="site-entrance-engraved site-entrance-engraved--door site-entrance-engraved--sub">
                        {entranceCopy.doorRight.en[1]}
                      </span>
                      <span className="site-entrance-engraved site-entrance-engraved--door site-entrance-engraved--sub site-entrance-engraved--ja">
                        {entranceCopy.doorRight.ja[1]}
                      </span>
                    </div>
                  </div>
                  <div className="site-entrance-door-handle site-entrance-door-handle--right" />
                </div>
              </div>
              <div className="site-entrance-door-sill" />
            </div>
          </div>

          <div className="site-entrance-reflection" />
          <div className="site-entrance-door-shadow" />
        </div>
        </div>
      </div>

      <div className="site-entrance-rays" data-entrance="rays" />
      <div className="site-entrance-bloom" data-entrance="bloom" />
      <div className="site-entrance-light-wash" data-entrance="wash" />
    </div>
  )
}
