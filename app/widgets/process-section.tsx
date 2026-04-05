"use client"

import { useRef, useMemo, useState, useEffect } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion"
import FadeIn from "@/components/animations/fade-in"
import SectionLabel from "@/components/section-label"
import Image from "next/image"

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin by assessing your requirements, specifications, and design intent to define the best glass solution.",
  },
  {
    number: "02",
    title: "Design & Engineering",
    description:
      "We work with provided specifications where applicable but can also develop solutions tailored to your project's needs.",
  },
  {
    number: "03",
    title: "Fabrication",
    description:
      "Using state-of-the-art machinery, we cut, shape, and process glass to exact standards with strict quality control.",
  },
  {
    number: "04",
    title: "Installation, Support and Delivery",
    description:
      "We coordinate safe delivery and support installation, with ongoing assistance for reliable performance.",
  },
]

interface SyncedWordProps {
  word: string
  index: number
  total: number
  progress: MotionValue<number>
  baseColor: string
  activeColor: string
  duration: number
}

function SyncedWord({
  word,
  index,
  total,
  progress,
  baseColor,
  activeColor,
  duration,
}: SyncedWordProps) {
  const stagger = (1 - duration) / total
  const start = index * stagger
  const end = start + duration

  const opacity = useTransform(progress, [start, end], [0.35, 1])
  const color = useTransform(progress, [start, end], [baseColor, activeColor])

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block whitespace-pre"
    >
      {word}
      {"\u00A0"}
    </motion.span>
  )
}

function StepItem({
  step,
  isLast,
}: {
  step: (typeof PROCESS_STEPS)[0]
  isLast: boolean
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "start 45%"],
  })

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const titleWords = useMemo(() => step.title.split(" "), [step.title])
  const descWords = useMemo(
    () => step.description.split(" "),
    [step.description]
  )

  const totalUnits = 2 + titleWords.length + descWords.length
  const duration = 0.25

  const numberBg = useTransform(progress, [0, 0.15], ["#f5f5f5", "#0B4C3E"])
  const numberText = useTransform(progress, [0, 0.15], ["#a0a0a0", "#ffffff"])
  const numberOpacity = useTransform(progress, [0, 0.15], [0.4, 1])

  return (
    <div id="process" ref={containerRef} className="relative pb-10 last:pb-0">
      {!isLast && (
        <div className="absolute top-10 bottom-10 left-[19px] w-px border-l border-dashed border-[#0B4C3E]/20" />
      )}

      <div className="flex gap-8">
        <motion.div
          style={{
            backgroundColor: numberBg,
            color: numberText,
            opacity: numberOpacity,
          }}
          className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center text-[10px] font-bold tracking-widest"
        >
          {step.number}
        </motion.div>

        <div className="flex-1 pt-1">
          <h3 className="mb-2 flex flex-wrap text-xl leading-tight font-medium tracking-tight">
            {titleWords.map((word, i) => (
              <SyncedWord
                key={`title-${i}`}
                word={word}
                index={2 + i}
                total={totalUnits}
                progress={progress}
                baseColor="#a0a0a0"
                activeColor="#000000"
                duration={duration}
              />
            ))}
          </h3>
          <p className="flex max-w-[480px] flex-wrap text-[17px] leading-relaxed">
            {descWords.map((word, i) => (
              <SyncedWord
                key={`desc-${i}`}
                word={word}
                index={2 + titleWords.length + i}
                total={totalUnits}
                progress={progress}
                baseColor="#d1d1d1"
                activeColor="#000000"
                duration={duration}
              />
            ))}
          </p>
        </div>
      </div>
    </div>
  )
}

function NBNote() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "start 60%"],
  })

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const nbText =
    "Our process adapts to meet the unique demands of each project."
  const nbWords = useMemo(() => nbText.split(" "), [nbText])

  return (
    <div ref={containerRef} className="text-[17px] leading-relaxed md:mt-6">
      <span className="mr-2 font-bold">NB:</span>
      <div className="inline flex-wrap">
        {nbWords.map((word, i) => (
          <SyncedWord
            key={`nb-${i}`}
            word={word}
            index={i}
            total={nbWords.length}
            progress={progress}
            baseColor="#d1d1d1"
            activeColor="#000000"
            duration={0.3}
          />
        ))}
      </div>
    </div>
  )
}

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const imageTranslateY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.4, 1, 1, 0.4]
  )

  return (
    <div ref={sectionRef} className="relative bg-white py-24 pb-12 md:pt-32">
      <div className="flex flex-col items-start lg:flex-row">
        {/* Left Content Area: Uses dynamic padding to match site layout */}
        <div
          className="flex flex-col lg:w-1/2"
          style={{ paddingLeft: "max(1.5rem, calc((100vw - 1400px) / 2))" }}
        >
          <div className="mb-20 pr-6">
            <FadeIn>
              <h2 className="heading-2 mb-2 text-primary">
                Built with Precision.
                <br />
                Delivered with Control.
              </h2>
            </FadeIn>
            <SectionLabel label="THE ARTISTRY OF GLASS PROCESSING" />
          </div>

          <div className="w-full max-w-[440px]">
            {PROCESS_STEPS.map((step, idx) => (
              <StepItem
                key={step.number}
                step={step}
                isLast={idx === PROCESS_STEPS.length - 1}
              />
            ))}

            <NBNote />
          </div>
        </div>

        {/* Right Area: Touching edge on desktop, sticky behavior */}
        <div className="relative mt-16 w-full flex-1 lg:mt-0 lg:w-auto">
          <div className="lg:sticky lg:top-32 lg:flex lg:h-[calc(100vh-8rem)] lg:items-center">
            <FadeIn
              direction="up"
              delay={0.2}
              threshold={0.1}
              className="w-full"
            >
              <motion.div
                style={{
                  y: isMobile ? 0 : imageTranslateY,
                  opacity: imageOpacity,
                }}
                className="relative overflow-hidden"
              >
                <Image
                  src="/images/process-glass-left.png"
                  alt="Glass processing perfection"
                  width={720}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-auto w-full object-cover"
                  priority
                />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}
