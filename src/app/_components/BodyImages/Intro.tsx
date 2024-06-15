'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

import Background from '../../../../public/assets/images/unsplash-2.webp'

export default function Intro() {
  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '150vh'])

  return (
    <div className="h-screen overflow-hidden rounded-2xl">
      <motion.div style={{ y, width: '100%', height: '100vh' }} className="relative h-full">
        <Image src={Background} fill alt="image" style={{ objectFit: 'cover' }} />
      </motion.div>
    </div>
  )
}
