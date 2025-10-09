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
      collection: 'blog-posts',
      id,
    })

    return NextResponse.json({
      success: true,
      data: result,
    })
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch blog post',
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
    const data = await request.json()

    const result = await payload.update({
      collection: 'blog-posts',
      id,
      data,
    })

    return NextResponse.json({
      success: true,
      data: result,
      message: 'Blog post updated successfully',
    })
  } catch (error) {
    console.error('Error updating blog post:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update blog post',
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
      collection: 'blog-posts',
      id,
    })

    return NextResponse.json({
      success: true,
      message: 'Blog post deleted successfully',
    })
  } catch (error) {
    console.error('Error deleting blog post:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to delete blog post',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
