'use client'

import React from 'react'
import { trackBookingConversion } from '@/utils/googleAdsConversion'

interface HouseCallProLinkProps {
  href?: string
  className?: string
  children?: React.ReactNode
  target?: string
  rel?: string
}

/**
 * HouseCall Pro booking link that tracks conversions when clicked
 * Use this for direct links to the HouseCall Pro booking form
 */
export default function HouseCallProLink({
  href = 'https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343',
  className = 'btn btn-primary',
  children = 'Schedule Service',
  target = '_blank',
  rel = 'noopener noreferrer',
}: HouseCallProLinkProps) {
  const handleClick = () => {
    // Track conversion for Google Ads
    trackBookingConversion()
  }

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  )
}
