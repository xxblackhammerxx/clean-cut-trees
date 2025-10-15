// Example usage in your components

import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics'
import { useGoogleTagManager } from '@/hooks/useGoogleTagManager'

export default function ExampleComponent() {
  const { trackButtonClick, trackPhoneCall, trackFormSubmission } = useGoogleAnalytics()
  const { trackBookingEvent, trackServiceInquiry } = useGoogleTagManager()

  const handleBookingClick = () => {
    // Track with both GA4 and GTM for comprehensive data
    trackButtonClick('Book Now Button', 'header')
    trackBookingEvent('booking_started', 'tree_removal')
  }

  const handlePhoneClick = () => {
    const phoneNumber = '801-473-7548'
    trackPhoneCall(phoneNumber, 'header_click')

    // Also track in GTM
    trackServiceInquiry('phone_call', 'header')
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    trackFormSubmission('contact_form')

    // Process form...
  }

  return (
    <div>
      <button onClick={handleBookingClick}>Book Tree Service</button>

      <a href="tel:801-473-7548" onClick={handlePhoneClick}>
        Call Now
      </a>

      <form onSubmit={handleFormSubmit}>
        {/* Form fields */}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

/*
// Alternative approach: Track events directly without hooks

// In any component where you need tracking:
const trackEvent = (eventName: string, parameters?: any) => {
  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
  
  // Google Tag Manager
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...parameters
    })
  }
}

// Usage:
const handleClick = () => {
  trackEvent('button_click', {
    button_name: 'emergency_service',
    page_location: 'homepage'
  })
}
*/
