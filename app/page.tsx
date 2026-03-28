import Navbar from "@/components/navbar"
import HeroSection from "@/app/widgets/hero"
import AboutSection from "@/app/widgets/about"
import WhyGlassTronic from "./widgets/feature-section"
import ProjectsSection from "./widgets/projects"
import ServicesCarousel from "./widgets/services-section"
import LayersSection from "./widgets/layers-section"
import Footer from "@/components/footer"
import FAQSection from "./widgets/faq-section"

export default function Page() {
  return (
    <main>
      <Navbar />
      <div className="pt-[70px]">
        <HeroSection />
        <AboutSection />
        <WhyGlassTronic />
        <ProjectsSection />
        <ServicesCarousel />
        <LayersSection />
        <FAQSection />
      </div>
      <Footer />
    </main>
  )
}
