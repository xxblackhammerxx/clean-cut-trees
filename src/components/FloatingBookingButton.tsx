'use client'

import React, { useState, useEffect } from 'react'
import BookingButton from './BookingButton'

export default function FloatingBookingButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show floating button after scrolling down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <div className="floating-booking-button">
      <BookingButton variant="primary" size="medium" className="floating-btn">
        📞 Book Now
      </BookingButton>
    </div>
  )
}
