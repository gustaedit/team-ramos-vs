"use client"

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Contact from "@/components/Contact"
import Transformations from "@/components/Transformations"
import Protocols from "@/components/Protocols"
import About from "@/components/About"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"

export default function PersonalTrainerSite() {
  // Função para scroll suave
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header scrollToSection={scrollToSection} />

      <Hero scrollToSection={scrollToSection} />

      {/* Red Banner */}
      <section className="bg-red-600 py-4 overflow-hidden">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-scroll">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="mx-8 font-century">
                • Método Lapidando Diamantes • Definição além do corpo • Mente focada • Hábitos que geram orgulho
              </span>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <Contact />
      <Transformations />
      <Protocols />
      <About />
      <FAQ />
      <Footer scrollToSection={scrollToSection} />
    </div>
  )
}
