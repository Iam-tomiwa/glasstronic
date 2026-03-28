"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import SectionLabel from "@/components/section-label"
import { cn } from "@/lib/utils"

export default function LayersSection() {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Track scroll within this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Scale from small → full
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.6, 1])

  // Optional: slight upward motion
  const yScroll = useTransform(scrollYProgress, [0, 0.6], [100, 0])

  return (
    <section
      ref={ref}
      className={cn("relative bg-neutral-100", isMobile ? "h-auto py-20" : "h-[300vh]")}
    >
      {/* Sticky container */}
      <div
        className={cn(
          "flex flex-col items-center overflow-hidden pt-10",
          !isMobile && "sticky top-0 min-h-screen justify-center sm:pt-20"
        )}
      >
        <div className="z-10 mx-auto mb-10 w-[95%] text-center">
          <h1 className="heading-1">
            Built in Layers. <br /> Defined by Precision.
          </h1>
          <SectionLabel
            label="Advanced glass systems for modern construction"
            className="mx-auto mt-4 text-center text-base tracking-widest sm:text-lg"
          />

          <div className="mt-6">
            <Button>REQUEST A QUOTE</Button>
          </div>
        </div>

        {/* Animated Glass Image */}
        <motion.div
          style={!isMobile ? { scale, y: yScroll } : {}}
          initial={isMobile ? { opacity: 0, y: 40 } : false}
          whileInView={isMobile ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
