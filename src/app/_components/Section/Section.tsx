'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

import Background from '../../../../public/assets/images/unsplash-1.webp'

export default function Section() {
  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="relative z-10 md:p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between">
        <p className="w-full md:w-[50vw] text-[4vw] md:text-[2vw] self-end uppercase mix-blend-difference">
          Te brindamos una amplia gama de suplementos nutricionales cuidadosamente seleccionados
          para mejorar tu bienestar.
        </p>
        <p className="text-[5vw] uppercase mix-blend-difference">Bienestar Natural</p>
      </div>
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
      <motion.div style={{ y, position: 'relative' }} className="relative w-full h-full">
          <Image src={Background} fill alt="image" style={{ objectFit: 'cover' }} />
        </motion.div>
      </div>
    </div>
  )
}
