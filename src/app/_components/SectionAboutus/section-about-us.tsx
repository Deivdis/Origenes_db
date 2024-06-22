import React from 'react'

const SectionAboutUs: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-6 mb-52">
      <div className="flex flex-col max-w-lg">
        <h2 className="text-3xl font-bold mb-4">
          Descubre la historia de Origenes y nuestra misión
        </h2>
        <p className="text-lg mb-6">
          En Origenes, nos dedicamos a ofrecer una amplia gama de productos naturales a través de
          nuestra página web. Nuestra misión es proporcionar a nuestros usuarios acceso a productos
          de calidad que promuevan un estilo de vida saludable.
        </p>
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <img
          className="w-full h-auto rounded-2xl"
          src="/assets/images/unsplash-4.webp"
          alt="Imagen de Origenes"
        />
      </div>
    </section>
  )
}

export default SectionAboutUs
