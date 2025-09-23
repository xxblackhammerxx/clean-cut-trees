'use client'

import React from 'react'

interface BookingButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  className?: string
  children?: React.ReactNode
}

// Extend the Window interface to include HCPWidget
declare global {
  interface Window {
    HCPWidget?: {
      openModal: () => void
    }
  }
}

export default function BookingButton({ 
  variant = 'primary', 
  size = 'medium', 
  className = '',
  children = 'Book Online'
}: BookingButtonProps) {
  const baseClasses = 'hcp-button'
  const variantClasses = {
    primary: 'btn btn-primary',
    secondary: 'btn btn-secondary', 
    outline: 'btn btn-outline'
  }
  
  const sizeClasses = {
    small: 'btn-small',
    medium: '',
    large: 'btn-large'
  }
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim()

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.HCPWidget) {
      window.HCPWidget.openModal()
    } else {
      // Fallback to contact page if script hasn't loaded
      window.location.href = '/contact-us'
    }
  }

  return (
    <button 
      data-token="b4a00fdb66b64c1da2f367aa3c485101" 
      data-orgname="Clean-Cuts-Trees" 
      className={buttonClasses}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
