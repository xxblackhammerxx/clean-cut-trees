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

export async function POST(request: NextRequest) {
  // Check environment first
  const envCheck = checkEnvironment()
  if (envCheck) return envCheck
  try {
    const payload = await getPayload({ config })
    const data = await request.json()

    // Validate required fields
    if (!data.title) {
      return NextResponse.json({ error: 'Title is required' }, { status: 400 })
    }

    // Auto-generate slug if not provided
    if (!data.slug) {
      data.slug = data.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '')
    }

    // Set default values
    const blogPostData = {
      title: data.title,
      slug: data.slug,
      content: data.content || '',
      excerpt: data.excerpt || '',
      publishedDate: data.publishedDate || new Date().toISOString(),
      author: data.author || 'Clean Cut Trees',
      status: data.status || 'published',
      ...data,
    }

    // Create the blog post
    const result = await payload.create({
      collection: 'blog-posts',
      data: blogPostData,
    })

    return NextResponse.json({
      success: true,
      data: result,
      message: 'Blog post created successfully',
    })
  } catch (error) {
    console.error('Error creating blog post:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create blog post',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}

export async function GET(request: NextRequest) {
  // Check environment first
  const envCheck = checkEnvironment()
  if (envCheck) return envCheck
  try {
    const payload = await getPayload({ config })
    const { searchParams } = new URL(request.url)

    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const status = searchParams.get('status') || 'published'

    const result = await payload.find({
      collection: 'blog-posts',
      page,
      limit,
      where: {
        status: {
          equals: status,
        },
      },
      sort: '-publishedDate',
    })

    return NextResponse.json({
      success: true,
      data: result.docs,
      pagination: {
        page: result.page,
        limit: result.limit,
        totalPages: result.totalPages,
        totalDocs: result.totalDocs,
        hasNextPage: result.hasNextPage,
        hasPrevPage: result.hasPrevPage,
      },
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch blog posts',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
