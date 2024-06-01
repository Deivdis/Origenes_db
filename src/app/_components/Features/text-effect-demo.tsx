'use client'
import { TextGenerateEffect } from '../ui/text-generate-effect'

const words = `¡Prepárate para una experiencia de compras como nunca antes con nuestras Ofertas del Mes!
          Cada La compra viene con ventajas y ofertas exclusivas, lo que hace de este mes una celebración del conocimiento. opciones y ofertas increíbles.
          ¡No te lo pierdas! 🎁🛒
`

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />
}
