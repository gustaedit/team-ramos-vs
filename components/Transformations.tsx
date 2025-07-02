"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const transformations = [
  {
    name: "João Carlos",
    before: "85kg",
    after: "75kg",
    time: "3 meses",
    testimonial: "Perdi 10kg e ganhei muito mais disposição para o dia a dia. O acompanhamento foi fundamental!",
    rating: 5,
  },
  {
    name: "Maria Silva",
    before: "70kg",
    after: "65kg",
    time: "4 meses",
    testimonial: "Consegui definir meu corpo e me sinto muito mais confiante. Recomendo para todas!",
    rating: 5,
  },
  {
    name: "Pedro Santos",
    before: "90kg",
    after: "82kg",
    time: "5 meses",
    testimonial: "Transformação incrível! Não só perdi peso como ganhei massa muscular.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    before: "68kg",
    after: "62kg",
    time: "3 meses",
    testimonial: "Método eficiente e personalizado. Resultados visíveis desde a primeira semana!",
    rating: 5,
  },
]

export default function Transformations() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % transformations.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % transformations.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + transformations.length) % transformations.length)
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 heading-primary">
            Transformações
          </h2>
          <p className="text-gray-300 font-century">Resultados reais de clientes reais</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div className="bg-white text-black rounded-lg border-4 border-red-600 overflow-hidden">
              <div className="bg-red-600 text-white p-4">
                <h3 className="text-xl font-bold heading-primary">{transformations[currentSlide].name}</h3>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-gray-500 font-century">Antes/Depois</span>
                    </div>
                    <div className="flex justify-between text-sm font-bold font-century">
                      <span>Antes: {transformations[currentSlide].before}</span>
                      <span>Depois: {transformations[currentSlide].after}</span>
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-2 font-century">
                      Tempo: {transformations[currentSlide].time}
                    </p>
                  </div>
                  <div>
                    <div className="flex mb-4">
                      {[...Array(transformations[currentSlide].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm italic font-century">"{transformations[currentSlide].testimonial}"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-red-600" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
