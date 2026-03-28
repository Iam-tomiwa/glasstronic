"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import SectionLabel from "@/components/section-label"
import FadeIn from "@/components/animations/fade-in"

export default function LayersSection() {
  const ref = useRef(null)

  // Track scroll within this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Scale from small → full
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.6, 1])

  // Optional: slight upward motion
  const y = useTransform(scrollYProgress, [0, 0.6], [100, 0])

  return (
    <section ref={ref} className="relative h-[300vh] bg-neutral-100">
      {/* Sticky container */}
      <div className="sticky top-0 flex min-h-screen flex-col items-center justify-start overflow-hidden pt-10 sm:justify-center sm:pt-20">
        <div className="z-10 mx-auto mb-10 w-[95%] text-center">
          <FadeIn>
            <h1 className="heading-1">
              Built in Layers. <br /> Defined by Precision.
            </h1>
          </FadeIn>
          <SectionLabel
            label="Advanced glass systems for modern construction"
            className="mx-auto mt-4 text-center text-xl tracking-widest"
          />

          <div className="mt-6">
            <Button>REQUEST A QUOTE</Button>
          </div>
        </div>

        {/* Animated Glass Image */}
        <motion.div
          style={{ scale, y }}
          className="relative w-[1010px] max-w-[90vw]"
        >
          <Image
            src="/images/layer-glass.png"
            alt="Glass layers"
            width={1200}
            height={800}
            className="h-auto w-full object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
