import Navbar from "@/components/navbar"
import HeroSection from "@/app/widgets/hero"
import AboutSection from "@/app/widgets/about"
import WhyGlassTronic from "./widgets/feature-section"
import ServicesCarousel from "./widgets/services-section"
import LayersSection from "./widgets/layers-section"
import Footer from "@/components/footer"
import FAQSection from "./widgets/faq-section"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyGlassTronic />
      {/* <ProjectsSection /> */}
      <ServicesCarousel />
      <LayersSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
