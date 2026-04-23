'use client'
import { useState, useEffect, useRef } from 'react'

export function useCountUp(target, duration = 1800) {
  const [value, setValue] = useState(0)
  const nodeRef = useRef(null)
  const fired = useRef(false)

  useEffect(() => {
    const el = nodeRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true
          const t0 = performance.now()
          const tick = (now) => {
            const p = Math.min((now - t0) / duration, 1)
            setValue(Math.round(target * (1 - (1 - p) ** 3)))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return [value, nodeRef]
}
