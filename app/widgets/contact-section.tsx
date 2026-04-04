"use client"

import FadeIn from "@/components/animations/fade-in"
import SectionLabel from "@/components/section-label"
import { Button } from "@/components/ui/button"
import { CONTAINER_SIDE_PADDING } from "./services-section"

export default function ContactSection() {
  const address =
    "1 Adeyemi Bero Crescent off Anthony Oshodi Expressway by Total Filling Station Ilupeju"
  const encodedAddress = encodeURIComponent(address)
  // Since I don't have a real API key, I'll use the iframe embed URL pattern for public searches if possible,
  // or just a standard embed link that doesn't strictly require a key for basic display if it works,
  // but a standard "search" embed often works better.
  const embedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`

  return (
    <section id="contact" className="bg-accent pt-24 pb-20 md:pt-32">
      <div className="mx-auto w-[95%] max-w-[1200px]">
        <FadeIn>
          <h2 className="heading-2 text-primary">
            Have an inquiry, or comment?
          </h2>
        </FadeIn>

        <SectionLabel label="REACH OUT" />
        <div className="-mt-4 flex flex-col gap-16 lg:flex-row lg:items-end lg:gap-24">
          {/* Left: Info & Map */}
          <div className="flex-1">
            <div className="mt-12 space-y-4">
              <div>
                <p className="text-xl font-semibold text-primary">
                  Glasstronic Technologies Limited
                </p>
                <p className="leading-relaxed text-primary/80">
                  1 Adeyemi Bero Crescent off Anthony Oshodi <br />
                  Expressway by Total Filling Station Ilupeju
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-primary">
                  Telephone Line
                </p>
                <p className="text-primary/80">
                  <a href="tel:+2342019063200">+234 201 906 3200</a>,{" "}
                  <a href="tel:+2342019063206">+234 201 906 3206</a>
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-primary">
                  Email Address
                </p>
                <a
                  href="mailto:glasstronictech@gmail.com"
                  className="text-primary/80"
                >
                  glasstronictech@gmail.com
                </a>
              </div>
            </div>

            <FadeIn delay={0.3} className="mt-12">
              <div className="aspect-video w-full overflow-hidden rounded-2xl border border-black/5 grayscale-[0.3] transition-all duration-700 hover:grayscale-0">
                <iframe
                  title="Company Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  src={embedUrl}
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </FadeIn>
          </div>

          {/* Right: Form */}
          <div className="flex-1 rounded-3xl bg-slate-50/10">
            <FadeIn delay={0.2}>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium text-primary"
                    >
                      First Name*
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      required
                      className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-4 transition-all focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium text-primary"
                    >
                      Last Name*
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      required
                      className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-4 transition-all focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-primary"
                  >
                    Email*
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-xl border border-black/10 bg-white px-4 py-4 transition-all focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-primary"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="mt-1 w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-4 transition-all focus:border-primary focus:outline-none"
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <div className="relative mt-1 flex items-center">
                    <input
                      id="consent"
                      type="checkbox"
                      required
                      className="h-5 w-5 cursor-pointer rounded border-black/10 text-primary shadow focus:ring-primary"
                    />
                  </div>
                  <label
                    htmlFor="consent"
                    className="cursor-pointer text-sm leading-relaxed"
                  >
                    I hereby consent to my data being processed by{" "}
                    <span className="font-bold text-primary">
                      Glasstronic Technologies Limited
                    </span>
                  </label>
                </div>

                <div className="pt-4">
                  <Button>SEND MESSAGE</Button>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
