'use client'

import { useCallback } from 'react'

// Extend the global window object to include gtag
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void
    dataLayer: any[]
  }
}

export interface EventOptions {
  action: string
  category: string
  label?: string
  value?: number
  custom_parameters?: Record<string, any>
}

export const useGoogleAnalytics = () => {
  // Track page views
  const trackPageView = useCallback((url: string, title?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        // Replace with your actual GA4 ID
        page_title: title || document.title,
        page_location: url,
      })
    }
  }, [])

  // Track custom events
  const trackEvent = useCallback(
    ({ action, category, label, value, custom_parameters }: EventOptions) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value,
          ...custom_parameters,
        })
      }
    },
    [],
  )

  // Track conversions (for Google Ads)
  const trackConversion = useCallback((conversionId: string, conversionLabel?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: `${conversionId}/${conversionLabel}`,
      })
    }
  }, [])

  // Track form submissions
  const trackFormSubmission = useCallback(
    (formName: string) => {
      trackEvent({
        action: 'form_submit',
        category: 'engagement',
        label: formName,
      })
    },
    [trackEvent],
  )

  // Track button clicks
  const trackButtonClick = useCallback(
    (buttonName: string, location?: string) => {
      trackEvent({
        action: 'click',
        category: 'engagement',
        label: buttonName,
        custom_parameters: {
          location: location,
        },
      })
    },
    [trackEvent],
  )

  // Track phone calls (useful for tree service business)
  const trackPhoneCall = useCallback(
    (phoneNumber: string, source?: string) => {
      trackEvent({
        action: 'phone_call',
        category: 'conversion',
        label: phoneNumber,
        custom_parameters: {
          source: source,
        },
      })
    },
    [trackEvent],
  )

  // Track booking interactions
  const trackBookingInteraction = useCallback(
    (action: string, service?: string) => {
      trackEvent({
        action: action,
        category: 'booking',
        label: service,
      })
    },
    [trackEvent],
  )

  return {
    trackPageView,
    trackEvent,
    trackConversion,
    trackFormSubmission,
    trackButtonClick,
    trackPhoneCall,
    trackBookingInteraction,
  }
}
