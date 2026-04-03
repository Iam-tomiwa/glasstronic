"use client"

import FadeIn from "@/components/animations/fade-in"
import SectionLabel from "@/components/section-label"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
  {
    value: "item-1",
    question: "What glass solutions does Glasstronic offer?",
    answer:
      "Glasstronic provides a wide range of architectural glass solutions including laminated, tempered, and insulated systems.",
  },
  {
    value: "item-2",
    question: "Does Glasstronic offer custom glass solutions?",
    answer:
      "Yes! Glasstronic offers custom glass solutions tailored to your project's specifications.",
  },
  {
    value: "item-3",
    question: "Does Glasstronic offer on-site consultations?",
    answer:
      "Yes, on-site consultations are available to better understand your project requirements.",
  },
  {
    value: "item-4",
    question: "Where can I see examples of Glasstronic's work?",
    answer:
      "You can explore our portfolio section to view completed projects and case studies.",
  },
  {
    value: "item-5",
    question: "What is Glasstronic's typical project timeline?",
    answer:
      "Timelines vary depending on scope, but most projects range from a few weeks to several months.",
  },
]

export default function FAQSection() {
  return (
    <section className="bg-accent px-6 py-24 md:px-16">
      <div className="mx-auto flex max-w-7xl justify-between gap-16">
        {/* Left Side */}
        <div>
          <FadeIn>
            <h2 className="heading-2">
              Your Questions,
              <br />
              Answered
            </h2>
          </FadeIn>

          <SectionLabel label="FAQ" className="mt-6 text-xl" />
        </div>

        {/* Right Side - Accordion */}
        <FadeIn delay={0.4}>
          <div className="max-w-xl xl:w-xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="border bg-white px-6"
                >
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-gray-600">
                    <div className="pb-4">{item.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
