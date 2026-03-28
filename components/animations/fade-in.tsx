"use client"

import { ReactNode, useRef } from "react"
import { motion, useInView, Variants } from "framer-motion"

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  start?: string // kept for API parity
  direction?: "up" | "down" | "left" | "right"
  stagger?: boolean
  staggerDelay?: number
}

const getDirectionOffset = (direction: FadeInProps["direction"]) => {
  switch (direction) {
    case "up":
      return { y: 20 }
    case "down":
      return { y: -20 }
    case "left":
      return { x: 20 }
    case "right":
      return { x: -20 }
    default:
      return { y: 20 }
  }
}

const FadeIn = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  stagger = false,
  staggerDelay = 0.4,
}: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const isInView = useInView(ref, {
    margin: "-20% 0px", // similar to "top 80%"
    once: false, // allows reverse on scroll out
  })

  const offset = getDirectionOffset(direction)

  // Parent container variants (for stagger)
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger ? staggerDelay : 0,
        delayChildren: delay,
      },
    },
  }

  // Child animation variants
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      ...offset,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={stagger ? containerVariants : undefined}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      transition={
        !stagger ? { delay, duration: 1, ease: "easeOut" } : undefined
      }
    >
      {stagger ? (
        // Wrap each child for stagger effect
        Array.isArray(children) ? (
          children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        ) : (
          <motion.div variants={itemVariants}>{children}</motion.div>
        )
      ) : (
        // No stagger, animate directly
        <motion.div variants={itemVariants}>{children}</motion.div>
      )}
    </motion.div>
  )
}

export default FadeIn
