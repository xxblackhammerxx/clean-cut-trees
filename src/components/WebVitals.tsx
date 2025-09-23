'use client'

import { useReportWebVitals } from 'next/web-vitals'

interface WebVitalsProps {
  enableConsoleLogging?: boolean
  enableAnalytics?: boolean
  enableCustomEndpoint?: boolean
  debug?: boolean
}

export default function WebVitals({
  enableConsoleLogging = true,
  enableAnalytics = true,
  enableCustomEndpoint = true,
  debug = false,
}: WebVitalsProps = {}) {
  useReportWebVitals((metric) => {
    const isDev = process.env.NODE_ENV === 'development'
    const isProd = process.env.NODE_ENV === 'production'

    // Enhanced logging with color coding and rating
    if ((isDev && enableConsoleLogging) || debug) {
      const colorMap = {
        good: '🟢',
        'needs-improvement': '🟡',
        poor: '🔴',
      }

      const icon = colorMap[metric.rating as keyof typeof colorMap] || '⚪'
      const formattedValue =
        metric.name === 'CLS' ? metric.value.toFixed(3) : Math.round(metric.value)

      console.group(`${icon} [Web Vitals] ${metric.name}`)
      console.log(`Value: ${formattedValue}${metric.name === 'CLS' ? '' : 'ms'}`)
      console.log(`Rating: ${metric.rating}`)
      console.log(`Delta: ${metric.delta}`)
      console.log(`Navigation: ${metric.navigationType}`)
      console.log(`ID: ${metric.id}`)
      console.groupEnd()
    }

    // Send to Google Analytics 4 in production
    if (isProd && enableAnalytics && typeof gtag !== 'undefined') {
      gtag('event', metric.name, {
        custom_map: { metric_rating: 'rating' },
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
        rating: metric.rating,
      })
    }

    // Send to custom analytics endpoint
    if (enableCustomEndpoint && (isProd || debug)) {
      const payload = {
        name: metric.name,
        value: metric.value,
        id: metric.id,
        rating: metric.rating,
        delta: metric.delta,
        navigationType: metric.navigationType,
        timestamp: Date.now(),
        url: typeof window !== 'undefined' ? window.location.href : '',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
        // Additional context
        viewport:
          typeof window !== 'undefined'
            ? {
                width: window.innerWidth,
                height: window.innerHeight,
              }
            : null,
        connection:
          typeof navigator !== 'undefined' && 'connection' in navigator
            ? (navigator as any).connection?.effectiveType
            : null,
      }

      fetch('/api/web-vitals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        // Don't block page navigation
        keepalive: true,
      }).catch((error) => {
        if (debug) {
          console.error('Failed to send web vital:', error)
        }
      })
    }

    // Send to Vercel Analytics if available
    if (isProd && typeof window !== 'undefined' && 'va' in window) {
      ;(window as any).va('track', 'Web Vital', {
        metric: metric.name,
        value: metric.value,
        rating: metric.rating,
      })
    }
  })

  // This component doesn't render anything
  return null
}

// Type declarations
declare global {
  function gtag(...args: unknown[]): void

  interface Window {
    va?: (...args: unknown[]) => void
  }
}
