import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/parallaxHero.css'

/**
 * ParallaxHero
 * Props:
 *  - title: string
 *  - subtitle?: string
 *  - imageUrl: string
 *  - speed?: number (parallax intensity, default 1.5)
 *  - minWidth?: number (px to enable width-growth effect, default 991)
 *  - startOffset?: number (px from top to start width animation, default 10)
 *  - widthFromVW?: number (default 40)  -> starting width in vw when width animation is enabled
 *  - widthToVW?: number (default 100)   -> end width in vw when width animation is enabled
 */
export default function ParallaxHero({
  title,
  subtitle,
  imageUrl,
  speed = 1.5,
  minWidth = 991,
  startOffset = 10,
  widthFromVW = 40,
  widthToVW = 100,
}) {
  const sectionRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const el = sectionRef.current
    const bg = bgRef.current
    if (!el || !bg) return

    const mm = gsap.matchMedia()
    const cleanup = []

    // Desktop: parallax + width growth
    mm.add(`(min-width: ${minWidth}px)`, () => {
      const t1 = gsap.fromTo(
        bg,
        { yPercent: -20, scale: 1 },
        {
          yPercent: 20 * Math.max(1, Math.min(2, Math.abs(speed))),
          scale: 1.05,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: `top+=${startOffset}px bottom`,
            end: 'bottom top',
            scrub: true,
          },
        }
      )
      cleanup.push(() => t1.kill())

      gsap.set(bg, { width: `${widthFromVW}vw` })
      const tween = gsap.to(bg, {
        width: `${widthToVW}vw`,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: `top+=${startOffset}px bottom`,
          end: 'bottom top',
          scrub: true,
        },
      })
      cleanup.push(() => tween.kill())
      return () => {}
    })

    // Mobile: parallax only (tune values to visually match desktop feel)
    mm.add(`(max-width: ${minWidth - 1}px)`, () => {
      const t2 = gsap.fromTo(
        bg,
        { yPercent: -15, scale: 1 },
        {
          yPercent: 15 * Math.max(1, Math.min(2, Math.abs(speed))),
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      )
      cleanup.push(() => t2.kill())
      return () => {}
    })

    return () => {
      cleanup.forEach((fn) => typeof fn === 'function' && fn())
      mm.revert()
    }
  }, [speed, minWidth, startOffset, widthFromVW, widthToVW])

  return (
    <section ref={sectionRef} className="mt-parallax-section section-parallax py-0 my-0">
      <div
        ref={bgRef}
        className="mt-parallax-bg"
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-hidden
      />
      <div className="mt-parallax-content">
        <div className="container py-5 my-5">
          <div className="row justify-content-center py-5 my-5">
            <div className="col-lg-10 text-center">
              {title && <h1 className="mt-parallax-title mb-3">{title}</h1>}
              {subtitle && <h4 className="mt-parallax-subtitle mb-0">{subtitle}</h4>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


