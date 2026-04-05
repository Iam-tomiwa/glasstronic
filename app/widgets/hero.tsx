"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import CountUp from "@/components/animations/count-text"
import { cn } from "@/lib/utils"
import Link from "next/link"

const slides = [
  "/images/hero-1.png",
  "/images/hero-2.png",
  "/images/hero-3.png",
  "/images/hero-4.png",
  "/images/hero-5.png",
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
    <div className="mx-auto w-[95%] bg-background py-4 md:py-6">
      {/* ── Hero Box ── */}
      <section className="relative flex h-[85vh] min-h-[600px] flex-col justify-center overflow-hidden rounded-xl">
        {/* Slides */}
        <div className="absolute inset-0">
          {slides.map((src, i) => (
            <motion.div
              key={src}
              className="absolute inset-0"
              initial={false}
              animate={{ opacity: i === current ? 1 : 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <Image
                src={src}
                alt={`Hero slide ${i + 1}`}
                fill
                priority={i === 0}
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content Container */}
        <div className="z-10 container flex grow flex-col justify-end pb-30 text-white">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-6 lg:gap-20">
            {/* Left side: Heading */}
            <motion.div
              custom={0}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="heading-1 max-w-[570px]">
                Engineered Glass for Modern Construction
              </h1>
              <div className="absolute bottom-8 flex items-center gap-1 pt-4 sm:static">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    className={cn(
                      "h-[10px] cursor-pointer rounded-full transition-all duration-400",
                      i === current ? "w-10 bg-white" : "w-2.5 bg-white/30"
                    )}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right side: Description & CTA */}
            <motion.div
              custom={1}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="max-w-[580px] lg:ml-auto"
            >
              <p className="mb-6 text-lg leading-relaxed text-white/90 sm:pt-2 md:text-2xl">
                At Glasstronic Technologies Limited, we combine cutting-edge
                technology with precision craftsmanship to deliver glass
                solutions for a variety of projects.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-white px-10 text-[10px] font-bold tracking-[0.2em] text-black hover:bg-primary hover:text-white"
              >
                <a href="#contact">CONTACT US</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Box ── */}
      <section className="mt-4 rounded-xl bg-secondary">
        <div className="container">
          <div className="flex flex-wrap divide-y py-8 text-center text-white sm:divide-x sm:divide-y-0 lg:flex-nowrap lg:py-16">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className={cn(
                  "flex grow flex-col justify-center px-6 py-8 lg:py-0",
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
    </div>
  )
}
