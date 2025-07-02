"use client"

import { Button } from "@/components/ui/button"

interface HeroProps {
  scrollToSection: (sectionId: string) => void
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative">
      {/* Desktop (1920px+) */}
      <div className="hidden 2xl:block w-full">
        <div className="max-w-[1920px] mx-auto px-8 text-center">
          <h1 className="text-8xl font-bold mb-8 heading-primary">
            TEAM RAM<span className="text-red-600">O</span>S
          </h1>

          <p className="text-xl mb-8 max-w-4xl mx-auto text-gray-300 font-century">
            Pronto para alcance resultados reais e conquiste o corpo dos seus sonhos através da minha consultoria!
          </p>

          <div>
            <Button
              size="lg"
              onClick={() => scrollToSection("servicos")}
              className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-12 py-4 text-lg font-century"
            >
              saiba mais!
            </Button>
          </div>
        </div>
      </div>

      {/* Laptop (1366px - 1919px) */}
      <div className="hidden xl:block 2xl:hidden w-full">
        <div className="max-w-[1366px] mx-auto px-6 text-center">
          <h1 className="text-7xl font-bold mb-8 heading-primary">
            TEAM RAM<span className="text-red-600">O</span>S
          </h1>

          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-300 font-century">
            Pronto para alcance resultados reais e conquiste o corpo dos seus sonhos através da minha consultoria!
          </p>

          <div>
            <Button
              size="lg"
              onClick={() => scrollToSection("servicos")}
              className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-10 py-4 text-lg font-century"
            >
              saiba mais!
            </Button>
          </div>
        </div>
      </div>

      {/* Tablet (810px - 1365px) */}
      <div className="hidden lg:block xl:hidden w-full">
        <div className="max-w-[810px] mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-6 heading-primary">
            TEAM RAM<span className="text-red-600">O</span>S
          </h1>

          <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-300 font-century">
            Pronto para alcance resultados reais e conquiste o corpo dos seus sonhos através da minha consultoria!
          </p>

          <div>
            <Button
              size="lg"
              onClick={() => scrollToSection("servicos")}
              className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 text-base font-century"
            >
              saiba mais!
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile (até 809px) */}
      <div className="block lg:hidden w-full">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 heading-primary">
            TEAM RAM<span className="text-red-600">O</span>S
          </h1>

          <p className="text-base md:text-lg mb-6 max-w-lg mx-auto text-gray-300 font-century">
            Pronto para alcance resultados reais e conquiste o corpo dos seus sonhos através da minha consultoria!
          </p>

          <div>
            <Button
              size="lg"
              onClick={() => scrollToSection("servicos")}
              className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 text-base font-century"
            >
              saiba mais!
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
