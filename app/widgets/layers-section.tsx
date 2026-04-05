"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import SectionLabel from "@/components/section-label"
import { cn } from "@/lib/utils"

export default function LayersSection() {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Track scroll within this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Set CSS variables for high-performance native-feeling tracking
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`)
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`)
  }, [])

  // Scale from small → full
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.6, 1])

  // Optional: slight upward motion
  const yScroll = useTransform(scrollYProgress, [0, 0.6], [100, 0])

  return (
    <section
      ref={ref}
      className={cn("relative", isMobile ? "h-auto pb-20" : "h-[300vh] pb-20")}
    >
      {/* Sticky container */}
      <div
        className={cn(
          "flex flex-col items-center overflow-hidden sm:pt-10",
          !isMobile && "sticky top-0 min-h-screen justify-center md:pt-20"
        )}
      >
        <div className="z-10 mx-auto mb-10 w-[95%] text-center">
          <h1 className="heading-2">
            Built in Layers. <br /> Defined by Precision.
          </h1>
          <SectionLabel
            label="SEAMLESS EXECUTION"
            className="mx-auto mt-4 text-center text-base tracking-widest sm:text-lg"
          />
          <p className="mx-auto mt-4 max-w-[750px] text-center text-xl">
            Every project follows a structured process and every layer is
            processed with precision, ensuring seamless performance from
            fabrication to final installation.
          </p>

          <div className="mt-6">
            <Button className="uppercase">Contact Us</Button>
          </div>
        </div>

        {/* Animated Glass Image */}
        <motion.div
          style={!isMobile ? { scale, y: yScroll } : {}}
          initial={isMobile ? { opacity: 0, y: 40 } : false}
          whileInView={isMobile ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative w-[1010px] max-w-[90vw] overflow-hidden rounded-xl"
          onMouseMove={handleMouseMove}
        >
          {/* Base Image */}
          <div className="relative h-full w-full">
            <Image
              src="/images/layer-glass.png"
              alt="Glass layers"
              width={1200}
              height={800}
              className="h-auto w-full object-contain"
              priority
            />
          </div>

          {/* Liquid Glass Zoom Layer */}
          {!isMobile && (
            <div
              className={cn(
                "pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                "hidden lg:block"
              )}
              style={
                {
                  WebkitMaskImage: `radial-gradient(circle 120px at var(--mouse-x) var(--mouse-y), black 100%, transparent 100%)`,
                  maskImage: `radial-gradient(circle 120px at var(--mouse-x) var(--mouse-y), black 100%, transparent 100%)`,
                } as React.CSSProperties
              }
            >
              {/* Magnified Image */}
              <div className="relative h-full w-full scale-[1.15]">
                <Image
                  src="/images/layer-glass.png"
                  alt="Magnified Glass layers"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-contain brightness-110 contrast-110 saturate-125"
                  priority
                />
              </div>

              {/* Lens highlight and border */}
              <div
                className="absolute inset-0"
                style={
                  {
                    background: `radial-gradient(circle 120px at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1), transparent 100%)`,
                  } as React.CSSProperties
                }
              />
              <div
                className="absolute inset-0"
                style={
                  {
                    WebkitMaskImage: `radial-gradient(circle 120px at var(--mouse-x) var(--mouse-y), transparent 99%, black 100%)`,
                    maskImage: `radial-gradient(circle 120px at var(--mouse-x) var(--mouse-y), transparent 99%, black 100%)`,
                    border: "1px solid rgba(255, 255, 255, 0.35)",
                    borderRadius: "inherit",
                  } as React.CSSProperties
                }
              />
            </div>
          )}

          {/* Glass Lens Rim Light (Circular highlight that follows mouse) */}
          {!isMobile && (
            <div
              className="pointer-events-none absolute inset-0 z-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={
                {
                  background: `radial-gradient(circle 121px at var(--mouse-x) var(--mouse-y), transparent 98%, rgba(255,255,255,0.4) 99%, transparent 100%)`,
                } as React.CSSProperties
              }
            />
          )}
        </motion.div>
      </div>
    </section>
  )
}
