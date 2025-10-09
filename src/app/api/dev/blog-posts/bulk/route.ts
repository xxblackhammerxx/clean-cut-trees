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
    const { posts } = await request.json()

    if (!Array.isArray(posts)) {
      return NextResponse.json({ error: 'Posts must be an array' }, { status: 400 })
    }

    const results = []
    const errors = []

    for (let i = 0; i < posts.length; i++) {
      const post = posts[i]

      try {
        // Validate required fields
        if (!post.title) {
          throw new Error(`Post ${i + 1}: Title is required`)
        }

        // Auto-generate slug if not provided
        if (!post.slug) {
          post.slug = post.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '')
        }

        // Set default values
        const blogPostData = {
          title: post.title,
          slug: post.slug,
          content: post.content || '',
          excerpt: post.excerpt || '',
          publishedDate: post.publishedDate || new Date().toISOString(),
          author: post.author || 'Clean Cut Trees',
          status: post.status || 'published',
          ...post,
        }

        // Create the blog post
        const result = await payload.create({
          collection: 'blog-posts',
          data: blogPostData,
        })

        results.push(result)
      } catch (error) {
        errors.push({
          index: i + 1,
          error: error instanceof Error ? error.message : 'Unknown error',
          data: post,
        })
      }
    }

    return NextResponse.json({
      success: true,
      message: `Successfully created ${results.length} blog posts`,
      data: results,
      errors: errors.length > 0 ? errors : undefined,
      summary: {
        total: posts.length,
        created: results.length,
        failed: errors.length,
      },
    })
  } catch (error) {
    console.error('Error bulk creating blog posts:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to bulk create blog posts',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
