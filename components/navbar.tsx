"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "HOME", href: "#" },
  { label: "ABOUT US", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "OUR PROCESS", href: "#process" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed right-0 left-0 z-50 transition-all duration-500",
        scrolled
          ? "top-0 bg-white/95 shadow-md backdrop-blur-md"
          : "top-4 px-4 md:top-6 md:px-6 lg:top-8 lg:px-8"
      )}
    >
      <div
        className={cn(
          "container flex h-[75px] items-center justify-between transition-all duration-500",
          !scrolled ? "bg-transparent" : "bg-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.svg"
            alt="Glasstronic"
            width={170}
            height={40}
            className={cn(
              "transition-all duration-500",
              !scrolled && "brightness-0 invert"
            )}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-12 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-[11px] font-bold tracking-[0.25em] transition-all duration-500 hover:underline",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            size="lg"
            asChild
            className={cn(
              "px-8 text-[11px] transition-all duration-500",
              !scrolled
                ? "bg-[#1A4D3B]/90 text-white hover:bg-[#1A4D3B]"
                : "bg-primary text-white hover:bg-primary/90"
            )}
          >
            <a href={"#contact"}>CONTACT US</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn(
            "p-1 md:hidden",
            scrolled ? "text-foreground" : "text-white"
          )}
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-white md:hidden"
          >
            <div className="container flex flex-col gap-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold tracking-[0.2em] text-foreground transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                size="lg"
                className="mt-4 w-full text-xs tracking-widest"
              >
                <a href={"#contact"}>CONTACT US</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
