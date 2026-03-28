"use client"

import FadeIn from "@/components/animations/fade-in"
import TextAnim from "@/components/animations/text-anim"
import GlassCube from "@/components/glass-cube"
import SectionLabel from "@/components/section-label"

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left: 3D Cube */}
          <FadeIn delay={0.2} className="relative order-2 lg:order-1">
            <GlassCube />
          </FadeIn>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <FadeIn delay={0.1}>
              <h2 className="heading-1 text-primary">
                Shaping the future with Specialist Glass Products
              </h2>
            </FadeIn>
            <SectionLabel label="About Us" />

            <div className="space-y-6">
              <TextAnim
                text={[
                  "Welcome to Glasstronic Technologies Limited, where innovation meets precision engineering. As a forward-thinking glass processing company, we go beyond manufacturing, we deliver advanced solutions that shape modern architecture.",
                  "Our mission is to provide high-performance glass systems that not only meet technical demands but elevate the design and functionality of every space. By combining cutting-edge machinery with expert craftsmanship, we create glass solutions tailored to today's evolving construction needs.",
                ]}
                className="text-base leading-relaxed text-[#0B4C3E]/70 md:text-[17px]"
                color="#0B4C3E"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
