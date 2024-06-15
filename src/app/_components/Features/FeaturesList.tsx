'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Features: React.FC = () => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  const images = {
    organic: '/assets/images/image-2.webp',
    sustainable: '/assets/images/image-3.webp',
    wellness: '/assets/images/image-4.webp',
  }

  return (
    <section className="flex flex-col md:flex-row items-start justify-between p-6 mb-40">
      <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center items-center">
        <motion.div className="w-full h-auto rounded-2xl overflow-hidden">
          <motion.img
            className="w-full h-auto"
            src={hoveredFeature ? images[hoveredFeature] : images.organic}
            alt="Imagen de características"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
      <div className="flex flex-col max-w-lg space-y-4">
        <div
          onMouseEnter={() => setHoveredFeature('organic')}
          onMouseLeave={() => setHoveredFeature(null)}
        >
          <h3 className="text-2xl font-bold mb-2">Productos orgánicos y naturales</h3>
          <p className="text-lg">
            Nuestros productos son cultivados de manera sostenible y respetuosa con el medio
            ambiente, garantizando la calidad y frescura que buscas.
          </p>
        </div>
        <div
          onMouseEnter={() => setHoveredFeature('sustainable')}
          onMouseLeave={() => setHoveredFeature(null)}
        >
          <h3 className="text-2xl font-bold mb-2">Sostenibilidad garantizada</h3>
          <p className="text-lg">
            Nos preocupamos por el impacto ambiental, por lo que nuestros productos son provenientes
            de fuentes sostenibles y contribuyen al cuidado del planeta.
          </p>
        </div>
        <div
          onMouseEnter={() => setHoveredFeature('wellness')}
          onMouseLeave={() => setHoveredFeature(null)}
        >
          <h3 className="text-2xl font-bold mb-2">Salud y bienestar</h3>
          <p className="text-lg">
            Nuestros productos naturales te brindan los nutrientes esenciales para una vida
            saludable, sin comprometer el sabor ni la calidad.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Features
