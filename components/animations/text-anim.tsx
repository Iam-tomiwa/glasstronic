"use client"

import { useRef, useMemo } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { cn } from "@/lib/utils"

interface SlideUpTextProps {
  text: string | string[]
  endTransition?: string // kept for API parity
  color?: string
  className?: string
  delay?: number // base index delay
}

interface WordProps {
  word: string
  i: number
  stagger: number
  duration: number
  scrollYProgress: MotionValue<number>
  color: string
}

function Word({ word, i, stagger, duration, scrollYProgress, color }: WordProps) {
  // Calculate start and end points based on dynamic stagger
  const start = i * stagger
  const end = start + duration

  // Map scroll progress → opacity & color
  // We use 0.1 as base opacity for a "ghostly" pre-state
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1])

  const wordColor = useTransform(
    scrollYProgress,
    [start, end],
    ["#a0a0a0", color]
  )

  return (
    <motion.span
      style={{
        opacity,
        color: wordColor,
        display: "inline-block",
        whiteSpace: "pre",
      }}
    >
      {word}
      {"\u00A0"}
    </motion.span>
  )
}

export default function TextAnim({
  text,
  className,
  color = "#000000",
  delay = 0,
}: SlideUpTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Normalize text to array of paragraphs
  const paragraphs = useMemo(() => (Array.isArray(text) ? text : [text]), [text])

  // Count total words to calculate appropriate stagger
  const totalWords = useMemo(() => {
    return paragraphs.reduce((acc, para) => acc + para.split(" ").filter(w => w.length > 0).length, 0) + delay
  }, [paragraphs, delay])

  // We want the last word to finish at exactly 1.0
  // duration is how long each word stays in its transition (e.g. 20% of the total scroll)
  const duration = 0.15
  const stagger = totalWords > 0 ? (1 - duration) / totalWords : 0.03

  // Scroll progress tracking
  // Offset "start 80%" starts when container enters 80% of viewport
  // Offset "end 20%" ends when container is mostly out of view
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 20%"], 
  })

  let wordCounter = delay

  return (
    <div ref={containerRef} className={cn(className, "min-h-[50px]")}>
      {paragraphs.map((para, paraIndex) => {
        const words = para.split(" ").filter(w => w.length > 0)
        
        return (
          <div key={paraIndex} className={cn(paraIndex > 0 && "mt-6")}>
            {words.map((word) => {
              const currentIdx = wordCounter++
              return (
                <Word
                  key={currentIdx}
                  word={word}
                  i={currentIdx}
                  stagger={stagger}
                  duration={duration}
                  scrollYProgress={scrollYProgress}
                  color={color}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
