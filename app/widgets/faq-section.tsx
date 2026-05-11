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
    question: "WHERE IS GLASSTRONIC TECHNOLOGIES LOCATED?",
    answer: `GTL is strategicaly located in the heart of Lagos at the
Ilupeju Industrial Estate. Our central location alows us to
efficiently serve both the Mainland and Island markets,
ensuring faster delivery times and easier site visits for
our clients.`,
  },
  {
    value: "item-2",
    question: "WHAT DOES GLASSTRONIC TECHNOLOGIES DO?",
    answer: `We are a premium glass processing company
specializing in high-quality architectural and
functional glass. We use advanced technology and
precise craftsmanship to process glass that is safe,
beautiful, and durable.`,
  },
  {
    value: "item-3",
    question: "WHAT CAN I EXPECT WHEN WORKING WITH GLASSTRONIC TECHNOLOGIES?",
    answer: `At GTL, our operations are built on integrity, transparency, and
accountability. We carry our clients along through the glass process,
ensuring that every solution is tailored specificaly to your unique
project needs.`,
  },
  {
    value: "item-4",
    question: "WHO ARE WE?",
    answer: `GTL is a forward-thinking glass processing company delivering
high-quality, innovative solutions across diverse applications.
With a focus on precision, durability, and refined design, we
create glass products that enhance safety and elevate
experiences. Built on integrity and reliability, we take our clients
requests and process them to meet their unique needs. Our goal
is to out pace legacy leaders in Nigeria and across Africa.`,
  },
  {
    value: "item-5",
    question: "WHAT DO WE DO?",
    answer: `At GTL, we ofer various glass processing solutions from
toughening, tempering, washing, laminating to peculiar
glass designs, as wel as cuting and making timely
delivery to you. Our glass has been engineered for
strength, safety, and refined finishing.`,
  },
  {
    value: "item-6",
    question: "WHAT DO WE OFFER?",
    answer: `At GTL, we ofer precision-driven services including glass
cuting, polishing, custom fabrication, and professional
instalation ensuring every project is executed with
accuracy, durability, and atention to detail.`,
  },
]

export default function FAQSection() {
  return (
    <section className="bg-accent px-6 py-24 md:px-16">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:gap-16">
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
