'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export const Collaboration = () => {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const extendedRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end end'],
  })
  const { scrollYProgress: scrollYProgressIncludingOverlap } = useScroll({
    target: extendedRef,
    offset: ['start end', 'end end'],
  })

  const scale = useTransform(scrollYProgressIncludingOverlap, [0.1, 0.4, 0.75, 1], [1, 1.1, 1.2, 1])
  const x = useTransform(
    scrollYProgressIncludingOverlap,
    [0.1, 0.25, 0.75, 1],
    ['0vw', '-2vw', '-5vw', '-5vw'],
  )
  const y = useTransform(scrollYProgressIncludingOverlap, [0.75, 1], ['0vh', '5vh'])
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0])

  const avatarGroupOpacity = useTransform(scrollYProgress, [0, 0.23, 0.25], [0, 0, 1])

  const avatarGroupX = useTransform(
    scrollYProgress,
    [0, 0.23, 0.25, 0.4, 0.45, 0.6, 0.65],
    ['60px', '60px', '40px', '40px', '20px', '20px', '0px'],
  )

  const avatarOneScale = useTransform(scrollYProgress, [0, 0.23, 0.25, 0.85, 0.9], [0, 0, 1, 1, 0])

  const avatarTwoScale = useTransform(scrollYProgress, [0, 0.4, 0.45], [0, 0, 1])

  const avatarTwoOpacity = useTransform(scrollYProgressIncludingOverlap, [0.9999, 1], [1, 0])

  const avatarThreeScale = useTransform(scrollYProgress, [0, 0.6, 0.65, 0.85, 0.9], [0, 0, 1, 1, 0])

  return (
    <section ref={targetRef} className="relative z-10 mt-[-30vh] h-[300vh]">
      <div ref={extendedRef} className="mb-[-120vh] h-[420vh] w-full">
        <div className="sticky top-[10vh]">
          <div className="flex justify-center">
            <motion.div style={{ scale, x, y }} className="origin-top">
              <motion.video
                src="/admin-ui/main-screen.mp4"
                className="h-auto max-h-none w-[70vw] rounded-xl"
                autoPlay
                loop
                muted
                style={{ opacity: 0.8 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
