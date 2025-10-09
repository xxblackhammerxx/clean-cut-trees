import config from '@/payload.config'
import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'

// Only allow in development environment
function checkEnvironment() {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json(
      {
        success: false,
        error: 'This API endpoint is not available in production',
        message: 'Development-only endpoint',
      },
      { status: 404 },
    )
  }
  return null
}

interface RouteParams {
  params: Promise<{
    id: string
  }>
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  // Check environment first
  const envCheck = checkEnvironment()
  if (envCheck) return envCheck

  try {
    const { id } = await params
    const payload = await getPayload({ config })

    const result = await payload.findByID({
      collection: 'pages',
      id,
    })

    return NextResponse.json({
      success: true,
      data: result,
    })
  } catch (error) {
    console.error('Error fetching page:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch page',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}

export async function PATCH(request: NextRequest, { params }: RouteParams) {
  // Check environment first
  const envCheck = checkEnvironment()
  if (envCheck) return envCheck

  try {
    const { id } = await params
    const payload = await getPayload({ config })
    
    // Debug: Log request details
    console.log('PATCH request received for page ID:', id)
    console.log('Content-Type:', request.headers.get('content-type'))
    
    // Get the raw body first for debugging
    const rawBody = await request.text()
    console.log('Raw request body:', rawBody.substring(0, 200) + (rawBody.length > 200 ? '...' : ''))
    
    // Try to parse the JSON
    let data
    try {
      data = JSON.parse(rawBody)
    } catch (parseError) {
      console.error('JSON parse error:', parseError)
      console.error('Raw body causing parse error:', rawBody)
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid JSON in request body',
          details: parseError instanceof Error ? parseError.message : 'JSON parsing failed',
          rawBody: rawBody.substring(0, 500), // Include part of raw body for debugging
        },
        { status: 400 },
      )
    }

    const result = await payload.update({
      collection: 'pages',
      id,
      data,
    })

    return NextResponse.json({
      success: true,
      data: result,
      message: 'Page updated successfully',
    })
  } catch (error) {
    console.error('Error updating page:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update page',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  // Check environment first
  const envCheck = checkEnvironment()
  if (envCheck) return envCheck

  try {
    const { id } = await params
    const payload = await getPayload({ config })

    await payload.delete({
      collection: 'pages',
      id,
    })

    return NextResponse.json({
      success: true,
      message: 'Page deleted successfully',
    })
  } catch (error) {
    console.error('Error deleting page:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to delete page',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
