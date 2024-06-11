import React from 'react'

import { VelocityScroll } from '../ui/scroll-based-velocity'

export default function velocityScrollDemo() {
  return (
    <div>
      <VelocityScroll
        text="Belleza Natural"
        default_velocity={5}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      />
    </div>
  )
}
