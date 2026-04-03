import FadeIn from "@/components/animations/fade-in"
import SectionLabel from "@/components/section-label"
import Image from "next/image"

export const features = [
  {
    title: "Excellence",
    description:
      "Uncompromising commitment to superior quality through precision and craftsmanship.",
    icon: (
      <Image src="/icons/chart.svg" alt="excellence" width={24} height={24} />
    ),
  },
  {
    title: "Innovation",
    description:
      "Embracing advanced technology and forward-thinking to continuously improve.",
    icon: (
      <Image src="/icons/house.svg" alt="innovation" width={24} height={24} />
    ),
  },
  {
    title: "Integrity",
    description:
      "We thrive by conducting business with honesty, transparency, and accountability.",
    icon: (
      <Image
        src="/icons/presentation.svg"
        alt="integrity"
        width={24}
        height={24}
      />
    ),
  },
  {
    title: "Collaboration",
    description:
      "Teamwork gets the work done and utilize it to achieve exceptional results.",
    icon: (
      <Image
        src="/icons/chart.svg"
        alt="collaboration"
        width={24}
        height={24}
      />
    ),
  },
  {
    title: "Safety & Reliability",
    description:
      "Prioritizing safety and durability in every product and process.",
    icon: <Image src="/icons/house.svg" alt="safety" width={24} height={24} />,
  },
  {
    title: "Customer Commitment",
    description:
      "Placing our clients at the center of everything we do. We are committed.",
    icon: (
      <Image
        src="/icons/house-2.svg"
        alt="customer commitment"
        width={24}
        height={24}
      />
    ),
  },
]

export default function WhyGlassTronic() {
  return (
    <section className="bg-accent py-20">
      <div className="mx-auto w-[95%] max-w-[1200px]">
        {/* Header */}
        <div className="mb-12">
          <FadeIn>
            <h2 className="heading-2 text-primary">Why Glasstronic?</h2>
          </FadeIn>
          <SectionLabel
            label="Core Value Preposition"
            className="mt-4 uppercase"
          />
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
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
