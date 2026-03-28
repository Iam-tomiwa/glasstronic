import FadeIn from "@/components/animations/fade-in"
import SectionLabel from "@/components/section-label"
import Image from "next/image"

export const features = [
  {
    title: "Advanced Processing Technology",
    description:
      "State-of-the-art machinery enables accurate cutting, shaping, and finishing of glass to meet complex design and engineering requirements.",
    icon: <Image src="/icons/chart.svg" alt="chart" width={24} height={24} />,
  },
  {
    title: "Local Manufacturing Advantage",
    description:
      "By producing locally, we reduce lead times, lower costs, and ensure consistent availability for projects across Nigeria.",
    icon: <Image src="/icons/house.svg" alt="factory" width={24} height={24} />,
  },
  {
    title: "Utmost Quality You Can Trust",
    description:
      "Every glass unit is processed with strict quality control to meet international standards for strength, safety, and durability.",
    icon: (
      <Image
        src="/icons/presentation.svg"
        alt="shield"
        width={24}
        height={24}
      />
    ),
  },
  {
    title: "Custom Engineering Solutions",
    description:
      "We collaborate with architects, contractors, and developers to deliver bespoke glass solutions for unique and technically demanding projects.",
    icon: (
      <Image src="/icons/house-2.svg" alt="house-2" width={24} height={24} />
    ),
  },
]

export default function WhyGlassTronic() {
  return (
    <section className="bg-accent py-20">
      <div className="mx-auto w-[95%] max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <FadeIn>
            <h2 className="heading-1 text-primary">Why Glasstronic?</h2>
          </FadeIn>
          <SectionLabel
            label="Core Value Preposition"
            className="mt-4 uppercase"
          />
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => {
            return (
              <FadeIn
                className="h-full border border-[#BABABA] bg-white p-4 transition"
                key={feature.title}
                delay={0.4 + index * 0.1}
              >
                <>
                  {/* Icon */}
                  <div className="mb-4 flex h-10 w-10 items-center justify-center border border-gray-200">
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
