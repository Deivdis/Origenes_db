import React from 'react'

const BeneFits: React.FC = () => {
  return (
    <section className="p-6 mb-30 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col max-w-lg space-y-6">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Beneficios de usar productos naturales</h2>
          <p className="text-lg">
            Usar productos naturales tiene numerosos beneficios para mejorar nuestra salud y cuidar
            del medio ambiente. Descubre cómo puedes disfrutar de una vida más saludable y
            sostenible.
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Mejora tu bienestar y cuida del planeta</h3>
            <p>
              Los productos naturales no solo mejoran tu salud personal, sino que también son
              amigables con el medio ambiente.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              Productos naturales para una vida más saludable
            </h3>
            <p>
              Al elegir productos naturales, te aseguras de consumir menos productos químicos y
              aditivos, promoviendo una vida más saludable.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              Cuida de ti y del medio ambiente con nuestros productos naturales
            </h3>
            <p>
              Nuestros productos naturales están diseñados para ofrecerte lo mejor de la naturaleza,
              ayudándote a vivir de manera más consciente y sostenible.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center items-center">
        <img
          className="w-full h-auto rounded-lg object-cover"
          src="/assets/images/unsplash-15.webp"
          alt="Beneficios de productos naturales"
        />
      </div>
    </section>
  )
}

export default BeneFits
