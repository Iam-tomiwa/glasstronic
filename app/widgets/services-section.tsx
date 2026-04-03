"use client"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SectionLabel from "@/components/section-label"
import FadeIn from "@/components/animations/fade-in"

const services = [
  { title: "Glass cutting", image: "/images/cutting-shaping.png" },
  {
    title: "Edge & surface finishing",
    image: "/images/edging-surface-finish.png",
  },
  {
    title: "Fabrication & Processing",
    image: "/images/fabrication-processing.png",
  },
  { title: "Strength & Insulation", image: "/images/strength-insulation.png" },
  { title: "Hardware", image: "/images/hardware.png" },
  { title: "Assembly", image: "/images/assembly.png" },
]

// Left/Right edge of the 1400px container (px-6 = 1.5rem)
const CONTAINER_SIDE_PADDING = "max(1.5rem, calc((100vw - 1400px) / 2))"

export default function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: false })
  const [progress, setProgress] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const update = () => setProgress(emblaApi.scrollProgress())
    emblaApi.on("scroll", update)
    emblaApi.on("reInit", update)
    update()
  }, [emblaApi])

  return (
    <section className="overflow-hidden bg-white py-30" id="services">
      {/* Header */}
      <div className="mx-auto mb-14 max-w-[1400px] px-6 text-center">
        <FadeIn>
          <h2 className="heading-2">
            Complete Glass
            <br />
            Processing Solutions
          </h2>
        </FadeIn>
        <SectionLabel
          label=" Our Services"
          className="mx-auto mt-4 w-max uppercase"
        />
      </div>
      <FadeIn>
        {/* Carousel — starts at container left edge, bleeds to right page edge */}
        <div ref={emblaRef}>
          <div
            className="flex gap-4 md:gap-5"
            style={{
              paddingLeft: CONTAINER_SIDE_PADDING,
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="min-w-0 flex-[0_0_78vw] border sm:flex-[0_0_52vw] md:flex-[0_0_38vw] lg:flex-[0_0_28vw] xl:flex-[0_0_25vw]"
                style={{
                  marginRight:
                    index === services.length - 1
                      ? CONTAINER_SIDE_PADDING
                      : undefined,
                }}
              >
                {/* Card */}
                <div className="relative aspect-2/3 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 78vw, (max-width: 768px) 52vw, (max-width: 1024px) 38vw, 28vw"
                  />

                  {/* Trapezoid white footer — diagonal top edge (higher-left → lower-right) */}
                  <div
                    className="absolute right-0 bottom-0 left-0 flex h-[100px] flex-col justify-center bg-white px-6"
                    style={{
                      clipPath:
                        "polygon(90% 0, 100% 30%, 100% 100%, 0 100%, 0 0)",
                    }}
                  >
                    <h3 className="text-xl text-gray-900">{service.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="container flex items-center gap-5 pt-8">
          <div className="flex shrink-0 gap-3">
            <button
              onClick={scrollPrev}
              aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-green-900 text-white transition-colors hover:bg-green-800 active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-green-900 text-white transition-colors hover:bg-green-800 active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Progress track */}
          <div className="relative h-[4px] max-w-[600px] flex-1 bg-gray-200">
            <div
              className="absolute inset-y-0 left-0 h-[5px] bg-green-900"
              style={{ width: `calc(${progress * 100}% + 20px)` }}
            />
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
