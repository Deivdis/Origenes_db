// components/Services.tsx
import React from 'react'

const Services: React.FC = () => {
  return (
    <section className="mb-40">
      <div className="text-center mb-32">
        <h2 className="text-5xl font-bold mb-4">
          Descubre nuestros servicios de
          <br />
          <span className="block mt-2">calidad y confianza</span>
        </h2>
        <p className="text-lg">
          En Origenes, nos enorgullece ofrecer una amplia gama de servicios para satisfacer las
          <br />
          necesidades de nuestros clientes. Desde envío rápido y eficiente hasta un excelente
          <br />
          soporte al cliente, nos esforzamos por brindar la mejor experiencia posible.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex flex-col items-center">
          <img
            className="w-64 h-64 mb-4 rounded-lg object-cover"
            src="/assets/images/unsplash-11.webp"
            alt="Envío rápido y eficiente"
          />
          <h3 className="text-xl font-bold mb-2">Envío rápido y eficiente</h3>
          <p className="text-center">
            Ofrecemos un servicio de envío rápido y confiable para que recibas tus productos a
            tiempo, sin demoras.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-64 h-64 mb-4 rounded-lg object-cover"
            src="/assets/images/unsplash-12.webp"
            alt="Soporte al cliente excepcional"
          />
          <h3 className="text-xl font-bold mb-2">Soporte al cliente excepcional</h3>
          <p className="text-center">
            Nuestro equipo de soporte al cliente está siempre disponible para ayudarte con cualquier
            consulta o problema que puedas tener.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-64 h-64 mb-4 rounded-lg object-cover"
            src="/assets/images/image-11.webp"
            alt="Garantía de satisfacción"
          />
          <h3 className="text-xl font-bold mb-2">Garantía de satisfacción</h3>
          <p className="text-center">
            Garantizamos tu satisfacción con nuestros productos. Si no estás completamente
            satisfecho, te ofrecemos una solución rápida y efectiva.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
