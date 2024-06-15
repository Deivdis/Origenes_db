'use client'
import React, { useEffect, useState } from 'react'

import { cn } from '../../../_utilities/cn'

import './index.module.scss'

type SpotlightProps = {
  className?: string
  fill?: string
}

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Adjust breakpoint as needed
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const responsiveStyles = {
    ...(isMobile
      ? {
          width: '90%', // Adjust width as needed for mobile
          height: '90%', // Adjust height as needed for mobile
          left: '45%', // Center horizontally for mobile
          top: '65%', // Slightly above center vertically for mobile
          transform: 'translate(-50%, -50%)', // Center transformation for mobile
        }
      : {
          width: '90%', // Desktop width
          height: '90%', // Desktop height
          left: '45%', // Center horizontally for desktop
          top: '35%', // Slightly above center vertically for desktop
          transform: 'translate(-50%, -50%)', // Center transformation for desktop
        }),
  }

  return (
    <svg
      className={cn('animate-spotlight pointer-events-none absolute', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3887 2842"
      fill="none"
      style={{
        overflow: 'visible',
        opacity: 0,
        zIndex: '-1',
        ...responsiveStyles,
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
