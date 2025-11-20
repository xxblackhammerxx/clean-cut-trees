'use client'

import React from 'react'
import { trackPhoneConversion } from '@/utils/googleAdsConversion'

interface PhoneButtonProps {
  phoneNumber: string
  displayText?: string
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
  onClick?: () => void
}

/**
 * Phone button component that tracks conversions when clicked
 * Use this for phone links that lead to estimate requests
 */
export default function PhoneButton({
  phoneNumber,
  displayText,
  className = 'btn btn-phone',
  children,
  style,
  onClick,
}: PhoneButtonProps) {
  const handleClick = () => {
    // Track conversion for Google Ads
    trackPhoneConversion(phoneNumber)
    
    // Call additional onClick handler if provided
    if (onClick) {
      onClick()
    }
  }

  const phoneLink = phoneNumber.startsWith('tel:') ? phoneNumber : `tel:${phoneNumber}`
  const displayContent = children || displayText || phoneNumber

  return (
    <a
      href={phoneLink}
      className={className}
      onClick={handleClick}
      style={style}
    >
      {displayContent}
    </a>
  )
}
