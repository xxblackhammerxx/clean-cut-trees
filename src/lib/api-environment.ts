/**
 * API Environment Utility
 *
 * Helper functions to check API availability and environment status
 */

export function isAPIAvailable(): boolean {
  return process.env.NODE_ENV !== 'production'
}

export function getEnvironmentStatus() {
  const isProduction = process.env.NODE_ENV === 'production'
  const isDevelopment = process.env.NODE_ENV === 'development'
  const isTest = process.env.NODE_ENV === 'test'

  return {
    environment: process.env.NODE_ENV || 'unknown',
    isProduction,
    isDevelopment,
    isTest,
    customAPIsAvailable: !isProduction,
    payloadAPIsAvailable: true,
    adminAvailable: true,
  }
}

export function logEnvironmentStatus() {
  const status = getEnvironmentStatus()

  console.log('🔧 Environment Status:')
  console.log(`  Environment: ${status.environment}`)
  console.log(`  Custom APIs: ${status.customAPIsAvailable ? '✅ Available' : '❌ Disabled'}`)
  console.log(`  Payload APIs: ${status.payloadAPIsAvailable ? '✅ Available' : '❌ Disabled'}`)
  console.log(`  Admin Panel: ${status.adminAvailable ? '✅ Available' : '❌ Disabled'}`)

  if (!status.customAPIsAvailable) {
    console.log('\n💡 To enable custom APIs, set NODE_ENV=development')
    console.log('   Use native Payload APIs or admin panel for production content management')
  }
}

export async function checkAPIHealth(baseUrl: string = 'http://localhost:3000') {
  const status = getEnvironmentStatus()
  const results = {
    environment: status.environment,
    customAPIs: {
      available: status.customAPIsAvailable,
      endpoints: {} as Record<string, boolean>,
    },
    nativeAPIs: {
      available: status.payloadAPIsAvailable,
      endpoints: {} as Record<string, boolean>,
    },
  }

  // Test custom API endpoints (only if available)
  if (status.customAPIsAvailable) {
    const customEndpoints = [
      '/api/blog-posts',
      '/api/pages',
      '/api/blog-posts/bulk',
      '/api/pages/bulk',
    ]

    for (const endpoint of customEndpoints) {
      try {
        const response = await fetch(`${baseUrl}${endpoint}`)
        results.customAPIs.endpoints[endpoint] = response.status !== 404
      } catch (_error) {
        results.customAPIs.endpoints[endpoint] = false
      }
    }
  }

  // Test native Payload API endpoints
  const nativeEndpoints = [
    '/api/blog-posts', // This will be the native one in production
    '/api/pages',
  ]

  for (const endpoint of nativeEndpoints) {
    try {
      const response = await fetch(`${baseUrl}${endpoint}`)
      results.nativeAPIs.endpoints[endpoint] = response.status < 500
    } catch (_error) {
      results.nativeAPIs.endpoints[endpoint] = false
    }
  }

  return results
}

// Export environment check function for use in API routes
export function createEnvironmentCheck() {
  return function checkEnvironment() {
    if (process.env.NODE_ENV === 'production') {
      return {
        success: false,
        error: 'This API endpoint is not available in production',
        message: 'Development-only endpoint',
        hint: 'Use native Payload APIs or admin panel for production content management',
      }
    }
    return null
  }
}
