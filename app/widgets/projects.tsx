"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import SectionLabel from "@/components/section-label"
import FadeIn from "@/components/animations/fade-in"
export const projects = [
  {
    title: "The Banji Hallway",
    description:
      "The Banji Hallway project utilized Glasstronic's advanced glazing solutions to create a stunning architectural feature.",
    image: "/images/project-1.png",
  },
  {
    title: "The Opus by Zaha Hadidi",
    description:
      "A complex glass structure with high-end engineering precision.",
    image: "/images/hero-bg.png",
  },
  {
    title: "The Amani Conference Center",
    description: "Modern conference design with custom glazing solutions.",
    image: "/images/project-1.png",
  },
  {
    title: "The Ikoyi Towers Project",
    description: "High-rise glass facade with premium finishing.",
    image: "/images/glass-cube.png",
  },
]

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeProject = projects[activeIndex]

  return (
    <section className="bg-secondary py-20 text-white">
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <h2 className="heading-1">Built for Every Sector</h2>

          <SectionLabel
            label="Our Projects"
            color="white"
            className="uppercase"
          />
        </div>

        {/* Layout */}
        <FadeIn>
          <div className="grid items-start gap-16 md:grid-cols-2">
            {/* LEFT: Accordion */}
            <div className="space-y-4">
              {projects.map((project, index) => {
                const isActive = index === activeIndex

                return (
                  <div
                    key={index}
                    className="cursor-pointer border-t border-white pt-4"
                    onClick={() => setActiveIndex(index)}
                  >
                    {/* Title */}
                    <h3
                      className={`text-lg transition md:text-xl ${
                        isActive ? "font-semibold" : ""
                      }`}
                    >
                      {project.title}
                    </h3>

                    {/* EXPANDED CONTENT */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-sm leading-relaxed">
                            {project.description}
                          </p>

                          <Button className="mt-4">READ MORE</Button>

                          {/* MOBILE IMAGE */}
                          <div className="mt-6 md:hidden">
                            <motion.div
                              key={project.image}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              <Image
                                src={project.image}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="h-auto w-full object-cover"
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>

            {/* RIGHT: Desktop Image */}
            <div className="hidden md:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.image}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    width={700}
                    height={500}
                    className="h-[500px] w-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
