"use client"

import FadeIn from "@/components/animations/fade-in"
import TextAnim from "@/components/animations/text-anim"
import SectionLabel from "@/components/section-label"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="mx-auto w-[95%] max-w-[1100px]">
        <div className="flex flex-col items-center gap-16 sm:flex-row">
          <div className="min-w-[40%]">
            <FadeIn delay={0.2} className="relative order-2 lg:order-1">
              <Image
                src={"/images/about-us.png"}
                width={500}
                height={500}
                alt="About Us"
                className="aspect-2.5/3 w-full"
              />
            </FadeIn>
          </div>

          {/* Right: Content */}
          <div className="lg:order- order-1 max-w-[520px]">
            <FadeIn delay={0.1}>
              <h2 className="heading-2 text-primary">
                Excellence through glass innovation
              </h2>
            </FadeIn>
            <SectionLabel className="uppercase" label="About Us" />

            <div className="space-y-6">
              <TextAnim
                text={[
                  "We’re driven by a passion for excellence, combining precision craftsmanship with advanced technology to create products that enhance spaces with safety, beauty, and durability. Our operations is an unwavering commitment to integrity, transparency and accountability.",
                  "We place our clients at the centre of everything we do, ensuring that every solution meets their unique needs and maintain the highest standards of service and reliability.",
                  "With a vision to become the definitive choice for glass processing in Nigeria and across Africa, we push the boundaries of innovation, transforming everyday spaces into extraordinary experiences.",
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
