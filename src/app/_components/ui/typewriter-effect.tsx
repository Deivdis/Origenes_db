'use client'

import { motion } from 'framer-motion'

import RichText from '../../_components/RichText'
import { cn } from '../../_utilities/cn'

export const TypewriterEffectSmooth = ({
  richText,
  className,
  cursorClassName,
}: {
  richText: any
  className?: string
  cursorClassName?: string
}) => {
  return (
    <div className={cn('flex items-center justify-center my-6', className)}>
      <motion.div
        className="overflow-hidden text-center flex items-center"
        initial={{
          width: '0%',
        }}
        whileInView={{
          width: 'fit-content',
        }}
        transition={{
          duration: 2,
          ease: 'linear',
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          <RichText content={richText} />
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
          'block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-green-700 ml-2',
          cursorClassName,
        )}
      ></motion.span>
    </div>
  )
}
