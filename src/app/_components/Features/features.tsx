'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import { stylesWithCssVar } from '../../_utilities/motion'

export const Features = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end end'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.9, 1], [0.8, 0.8, 1])
  const x = useTransform(scrollYProgress, [0.3, 1], ['50%', '0%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.85, 0.9], [1, 1, 0.4, 0.4, 1])

  const text1Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [0, 1, 0])
  const text1Y = useTransform(scrollYProgress, [0.3, 0.4, 0.5], ['30px', '0px', '-30px'])

  const text2Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0])
  const text2Y = useTransform(scrollYProgress, [0.5, 0.6, 0.7], ['30px', '0px', '-30px'])

  const text3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.9], [0, 1, 0])
  const text3Y = useTransform(scrollYProgress, [0.7, 0.8, 0.9], ['30px', '0px', '-30px'])

  return (
    <section ref={targetRef} className="flex h-[500vh] flex-col items-center justify-start">
      <div className="sticky top-[16.7vh] h-[66.8vh] px-16 text-4xl font-mono leading-[1] [&_p]:w-[45rem] [&_p]:max-w-[90%]">
        <motion.div style={{ x, scale }} className="relative h-full">
          <motion.figure style={{ opacity }} className="h-full">
            <video
              src="/admin-ui/main-screen-4.mp4"
              className="h-auto max-h-none w-[70vw] rounded-xl h-full w-auto"
              autoPlay
              loop
              muted
            />
          </motion.figure>
        </motion.div>
        <motion.p
          style={stylesWithCssVar({
            opacity: text1Opacity,
            '--y': text1Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-0"
        >
          <span className="text-green-700">Únete a Nuestra Comunidad Natural</span>
          <br />
          Explora nuestro blog, lleno de consejos prácticos, recetas saludables y artículos informativos sobre el mundo de la vida natural.
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text2Opacity,
            '--y': text2Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-0"
        >
          <span className="text-green-700">Además</span>
          <br />
          Mantente al tanto de nuestras ofertas exclusivas y eventos especiales al unirte a nuestra comunidad en línea.
        </motion.p>
        <motion.p
          style={stylesWithCssVar({
            opacity: text3Opacity,
            '--y': text3Y,
          })}
          className="translate-y-centered-offset absolute top-1/2 left-0"
        >
          <span className="text-green-700">En Naturaleza Viva</span>
          <br />
          No solo te ofrecemos productos, sino un estilo de vida centrado en la armonía con la naturaleza. ¡Descubre el poder de lo natural y eleva tu bienestar hoy mismo!
        </motion.p>
      </div>
    </section>
  )
}
