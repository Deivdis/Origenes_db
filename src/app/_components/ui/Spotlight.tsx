import React from 'react'

import { cn } from '../../_utilities/cn'

import './Spotlight.css'

type SpotlightProps = {
  className?: string
  fill?: string
}

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        'animate-spotlight pointer-events-none absolute h-[169%] w-[138%] lg:w-[84%] opacity-0',
        className,
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3887 2842"
      fill="none"
      style={{
        overflow: 'visible',
        left: '46%',
        top: '25%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        zIndex: '-1',
      }}
    >
      <g filter="url(#filter)">
        <ellipse
          cx="273.501"
          cy="273.501"
          rx="1905.1"
          ry="1905.1"
          transform="matrix(-0.822377 -0.569943 -0.569943 0.822377 2500.88 2500.99)"
          fill={fill || 'green'}
          fillOpacity="0.21"
        />
      </g>
      <defs>
        <filter
          id="filter"
          x="0.838989"
          y="0.860352"
          width="4981.16"
          height="4981.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8" />
        </filter>
      </defs>
    </svg>
  )
}
