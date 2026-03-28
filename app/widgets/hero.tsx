"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import CountUp from "@/components/animations/count-text"
import { cn } from "@/lib/utils"

const slides = [
  "/images/hero-bg.png",
  "/images/services.png",
  "/images/hero-bg.png",
  "/images/services.png",
]

const stats = [
  {
    label: "PROVEN INDUSTRY EXPERIENCE",
    prefix: "Over ",
    value: 20,
    suffix: "+",
  },
  {
    label: "PROJECTS COMPLETED NATIONWIDE",
    prefix: "Over ",
    value: 500,
    suffix: "+",
  },
  {
    label: "LARGE-SCALE PRODUCTION FACILITY",
    value: 70000,
    suffix: " sq. ft",
    formatFn: (n: number) => n.toLocaleString("en-US"),
  },
  {
    label: "GLASS CAPABILITY",
    static: "6000mm x 3210mm",
  },
]

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 + 0.2, duration: 0.7, ease: EASE },
  }),
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
  }

  useEffect(() => {
    resetInterval()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const handleDotClick = (index: number) => {
    setCurrent(index)
    resetInterval()
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[calc(100vh-100px)] min-h-[600px] overflow-hidden">
        {/* Slides */}
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <Image
              src={slides[current]}
              alt={`Hero slide ${current + 1}`}
              fill
              priority={current === 0}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-end pb-20 md:pb-24">
          <div className="container text-white">
            <motion.h1
              custom={0}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="mb-5 max-w-lg text-4xl leading-[1.1] font-medium sm:text-5xl lg:text-[3.5rem]"
            >
              Engineered Glass for Modern Construction
            </motion.h1>

            <motion.p
              custom={1}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="mb-8 max-w-md leading-relaxed"
            >
              At Glasstronic Technologies Limited, we combine cutting-edge
              technology with precision craftsmanship to deliver
              high-performance glass solutions for today&apos;s most demanding
              architectural and construction projects.
            </motion.p>

            <motion.div
              custom={2}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              <Button>REQUEST A QUOTE</Button>
            </motion.div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-7 left-0 z-10 w-full">
          <div className="container flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "h-[6px] cursor-pointer rounded-full transition-all duration-400",
                  i === current ? "w-7 bg-white" : "w-[6px] bg-white/45"
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-secondary">
        <div className="container">
          <div className="flex flex-wrap divide-y py-8 text-center text-white sm:divide-x sm:divide-y-0 lg:py-16">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className={cn(
                  "flex grow flex-col justify-center px-6 py-8 lg:py-0",
                  // "border-white"
                  // i < stats.length - 1 && "border-b lg:border-r lg:border-b-0",
                  // i < 2 && "sm:border-r sm:border-b-0",
                  i === 1 && "sm:border-r-0 lg:border-r"
                )}
              >
                <p className="mb-3 text-xs leading-relaxed tracking-[0.2em] uppercase">
                  {stat.label}
                </p>
                <p className="text-3xl leading-none font-bold md:text-[2.1rem]">
                  {stat.static ? (
                    stat.static
                  ) : (
                    <>
                      {stat.prefix}
                      <CountUp
                        endValue={stat.value!}
                        formatFn={stat.formatFn}
                      />
                      {stat.suffix}
                    </>
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
