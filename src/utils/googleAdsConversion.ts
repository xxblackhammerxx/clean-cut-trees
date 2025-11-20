'use client'

// Google Ads Conversion Tracking Configuration
export const GOOGLE_ADS_CONFIG = {
  conversionId: 'AW-10810466317',
  conversionLabel: 'XjtiCMyRhJwYEI3A6qIo',
  sendTo: 'AW-10810466317/XjtiCMyRhJwYEI3A6qIo',
}

// Use existing gtag interface from other components

/**
 * Google Ads Conversion Tracking Function
 * Call this when someone clicks on buttons that lead to the HouseCall Pro form
 * @param url - Optional URL to redirect to after conversion tracking
 */
export function gtag_report_conversion(url?: string): boolean {
  const callback = function () {
    if (typeof url !== 'undefined') {
      window.location.href = url
    }
  }

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_CONFIG.sendTo,
      event_callback: callback,
    })
  } else {
    // Fallback: if gtag is not available, still execute the callback
    callback()
  }

  return false
}

/**
 * Track conversion for booking button clicks
 * This is specifically for buttons that open the HouseCall Pro booking form
 */
export function trackBookingConversion(): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_CONFIG.sendTo,
      value: 1.0,
      currency: 'USD',
    })
  }
}

/**
 * Track conversion for phone clicks that lead to estimates
 * @param phoneNumber - The phone number clicked
 */
export function trackPhoneConversion(phoneNumber?: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_CONFIG.sendTo,
      value: 1.0,
      currency: 'USD',
      custom_parameters: {
        phone_number: phoneNumber,
      },
    })
  }
}

/**
 * Track conversion for contact form submissions
 */
export function trackContactFormConversion(): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_CONFIG.sendTo,
      value: 1.0,
      currency: 'USD',
    })
  }
}
