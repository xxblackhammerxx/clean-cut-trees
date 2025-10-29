'use client'

import { useEffect, useState } from 'react'

interface WebVitalMetric {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  timestamp: number
}

interface WebVitalCustomEvent extends CustomEvent {
  detail: WebVitalMetric
}

export default function WebVitalsDashboard() {
  const [metrics, setMetrics] = useState<WebVitalMetric[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return

    // Listen for custom events from WebVitals component
    const handleWebVital = (event: WebVitalCustomEvent) => {
      if (event.detail) {
        setMetrics((prev) => {
          const newMetrics = [...prev, event.detail].slice(-50) // Keep last 50 metrics
          return newMetrics
        })
      }
    }

    window.addEventListener('web-vital', handleWebVital as EventListener)

    // Show/hide with keyboard shortcut
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('web-vital', handleWebVital as EventListener)
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  if (!isVisible || process.env.NODE_ENV !== 'development') {
    return null
  }

  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'good':
        return '#22c55e'
      case 'needs-improvement':
        return '#f59e0b'
      case 'poor':
        return '#ef4444'
      default:
        return '#6b7280'
    }
  }

  const formatValue = (name: string, value: number) => {
    if (name === 'CLS') {
      return value.toFixed(3)
    }
    return `${Math.round(value)}ms`
  }

  const getThresholds = (name: string) => {
    const thresholds: Record<string, { good: number; poor: number; unit: string }> = {
      FCP: { good: 1800, poor: 3000, unit: 'ms' },
      LCP: { good: 2500, poor: 4000, unit: 'ms' },
      FID: { good: 100, poor: 300, unit: 'ms' },
      CLS: { good: 0.1, poor: 0.25, unit: '' },
      TTFB: { good: 800, poor: 1800, unit: 'ms' },
      INP: { good: 200, poor: 500, unit: 'ms' },
    }
    return thresholds[name] || { good: 0, poor: 0, unit: '' }
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: 'rgba(0, 0, 0, 0.9)',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        fontSize: '14px',
        fontFamily: 'monospace',
        zIndex: 9999,
        minWidth: '300px',
        maxWidth: '400px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          paddingBottom: '8px',
        }}
      >
        <h3 style={{ margin: 0, fontSize: '16px' }}>🔍 Web Vitals Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            fontSize: '18px',
          }}
        >
          ×
        </button>
      </div>

      {metrics.length === 0 ? (
        <p style={{ color: '#9ca3af', fontStyle: 'italic' }}>
          Navigate around to collect metrics...
        </p>
      ) : (
        <div>
          {metrics.map((metric) => {
            const thresholds = getThresholds(metric.name)
            return (
              <div key={metric.name} style={{ marginBottom: '12px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ fontWeight: 'bold' }}>{metric.name}</span>
                  <span
                    style={{
                      color: getRatingColor(metric.rating),
                      fontWeight: 'bold',
                    }}
                  >
                    {formatValue(metric.name, metric.value)}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#9ca3af',
                    marginTop: '2px',
                  }}
                >
                  Good: &lt;{thresholds.good}
                  {thresholds.unit} | Poor: &gt;{thresholds.poor}
                  {thresholds.unit}
                </div>
                <div
                  style={{
                    height: '4px',
                    background: '#374151',
                    borderRadius: '2px',
                    marginTop: '4px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      background: getRatingColor(metric.rating),
                      width: `${Math.min(100, (metric.value / (thresholds.poor * 1.5)) * 100)}%`,
                      borderRadius: '2px',
                      transition: 'width 0.3s ease',
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      )}

      <div
        style={{
          marginTop: '16px',
          paddingTop: '8px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          fontSize: '12px',
          color: '#9ca3af',
        }}
      >
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  )
}
