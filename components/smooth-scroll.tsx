"use client"

import { useEffect, type ReactNode } from "react"

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    let targetY = window.scrollY
    let currentY = window.scrollY
    let rafId: number

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      targetY = Math.max(
        0,
        Math.min(
          document.documentElement.scrollHeight - window.innerHeight,
          targetY + e.deltaY
        )
      )
    }

    const tick = () => {
      currentY = lerp(currentY, targetY, 0.09)
      if (Math.abs(currentY - targetY) > 0.5) {
        window.scrollTo(0, currentY)
      }
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener("wheel", handleWheel)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return <>{children}</>
}
