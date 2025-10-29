'use client'

import { useCallback } from 'react'

// Extend the global window object to include dataLayer
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export interface GTMEvent {
  event: string
  [key: string]: unknown
}

export const useGoogleTagManager = () => {
  // Push custom events to GTM
  const pushEvent = useCallback((eventData: GTMEvent) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push(eventData)
    }
  }, [])

  // Track page views
  const trackPageView = useCallback(
    (pagePath: string, pageTitle?: string) => {
      pushEvent({
        event: 'page_view',
        page_path: pagePath,
        page_title: pageTitle || document.title,
      })
    },
    [pushEvent],
  )

  // Track form submissions
  const trackFormSubmit = useCallback(
    (formName: string, formId?: string) => {
      pushEvent({
        event: 'form_submit',
        form_name: formName,
        form_id: formId,
      })
    },
    [pushEvent],
  )

  // Track button clicks
  const trackButtonClick = useCallback(
    (buttonText: string, buttonId?: string, location?: string) => {
      pushEvent({
        event: 'button_click',
        button_text: buttonText,
        button_id: buttonId,
        click_location: location,
      })
    },
    [pushEvent],
  )

  // Track phone number clicks
  const trackPhoneClick = useCallback(
    (phoneNumber: string, source?: string) => {
      pushEvent({
        event: 'phone_click',
        phone_number: phoneNumber,
        source: source,
      })
    },
    [pushEvent],
  )

  // Track booking events
  const trackBookingEvent = useCallback(
    (action: string, service?: string, value?: number) => {
      pushEvent({
        event: 'booking_interaction',
        booking_action: action,
        service_type: service,
        value: value,
      })
    },
    [pushEvent],
  )

  // Track service inquiries
  const trackServiceInquiry = useCallback(
    (serviceType: string, method: string) => {
      pushEvent({
        event: 'service_inquiry',
        service_type: serviceType,
        inquiry_method: method,
      })
    },
    [pushEvent],
  )

  // Track conversions
  const trackConversion = useCallback(
    (conversionType: string, value?: number, currency?: string) => {
      pushEvent({
        event: 'conversion',
        conversion_type: conversionType,
        value: value,
        currency: currency || 'USD',
      })
    },
    [pushEvent],
  )

  return {
    pushEvent,
    trackPageView,
    trackFormSubmit,
    trackButtonClick,
    trackPhoneClick,
    trackBookingEvent,
    trackServiceInquiry,
    trackConversion,
  }
}
