"use client"

import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-6 heading-primary">
                Team Ramos - <span className="text-red-600">Personal particular</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg font-century">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia error cum voluptas, maiores repudiandae
                laborum mollitia doloremque. Exercitationem distinctio corrupti voluptas expedita iste tempore dolorem
                minus, consequuntur itaque unde alias.
              </p>
              <div>
                <Button
                  onClick={() => window.open("https://www.instagram.com/teamramos94/", "_blank")}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg flex items-center space-x-2 font-century hover:scale-105 transition-transform"
                >
                  <span>SEGUIR!</span>
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-red-600 hover:scale-105 transition-transform">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ramos%20cruzado.jpg-njRiubjOBL0LSj5yxnaWMTw5auZtoR.jpeg"
                  alt="Team Ramos na academia"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
