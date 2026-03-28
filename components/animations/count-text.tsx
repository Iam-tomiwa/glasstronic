"use client"

import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

interface CountUpProps {
  endValue: number
  className?: string
  formatFn?: (value: number) => string
}

export default function CountUp({ endValue, className, formatFn }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    stiffness: 60,
    damping: 20,
  })

  useEffect(() => {
    if (isInView) {
      motionValue.set(endValue)
    }
  }, [isInView, endValue, motionValue])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        const rounded = Math.round(latest)
        ref.current.textContent = formatFn ? formatFn(rounded) : String(rounded)
      }
    })
  }, [springValue, formatFn])

  return (
    <span ref={ref} className={className}>
      0
    </span>
  )
}
