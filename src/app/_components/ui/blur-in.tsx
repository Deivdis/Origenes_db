'use client'
import { motion } from 'framer-motion'

import { cn } from '../../_utilities/cn'

interface BlurIntProps {
  word: string
  className?: string
  variant?: {
    hidden: { filter: string; opacity: number }
    visible: { filter: string; opacity: number }
  }
  duration?: number
}
const BlurIn = ({ word, className, variant, duration = 1 }: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: 'blur(10px)', opacity: 0 },
    visible: { filter: 'blur(0px)', opacity: 1 },
  }
  const combinedVariants = variant || defaultVariants

  return (
    <motion.h3
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        className,
        'font-display font-bold tracking-[-0.02em] drop-shadow-sm md:leading-[5rem]',
      )}
    >
      {word}
    </motion.h3>
  )
}

export default BlurIn
