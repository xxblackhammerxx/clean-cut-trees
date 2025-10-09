import { getEnvironmentStatus } from '@/lib/api-environment'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const status = getEnvironmentStatus()

  const apiStatus = {
    environment: status.environment,
    timestamp: new Date().toISOString(),
    apis: {
      custom: {
        available: status.customAPIsAvailable,
        reason: status.customAPIsAvailable
          ? 'Running in development mode'
          : 'Disabled in production for security',
        endpoints: status.customAPIsAvailable
          ? [
              'POST /api/dev/blog-posts',
              'GET /api/dev/blog-posts',
              'GET /api/dev/blog-posts/[id]',
              'PATCH /api/dev/blog-posts/[id]',
              'DELETE /api/dev/blog-posts/[id]',
              'POST /api/dev/blog-posts/bulk',
              'POST /api/dev/pages',
              'GET /api/dev/pages',
              'GET /api/dev/pages/[id]',
              'PATCH /api/dev/pages/[id]',
              'DELETE /api/dev/pages/[id]',
              'POST /api/dev/pages/bulk',
            ]
          : [],
      },
      payload: {
        available: status.payloadAPIsAvailable,
        reason: 'Native Payload CMS APIs',
        endpoints: [
          'GET /api/blog-posts (native)',
          'POST /api/blog-posts (native, auth required)',
          'GET /api/pages (native)',
          'POST /api/pages (native, auth required)',
          'GET /api/media',
          'GET /api/categories',
          'GET /api/tags',
        ],
      },
      admin: {
        available: status.adminAvailable,
        url: '/admin',
        reason: 'Payload CMS Admin Panel',
      },
    },
    recommendations: {
      development: [
        'Use custom APIs for rapid content creation and testing',
        'Test with scripts in /scripts/ directory',
        'All endpoints available without authentication',
      ],
      production: [
        'Use Payload admin panel for content management',
        'Use native Payload APIs with proper authentication',
        'Custom APIs disabled for security',
      ],
    },
  }

  return NextResponse.json(apiStatus)
}
