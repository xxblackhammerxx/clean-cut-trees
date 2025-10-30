import Link from 'next/link'
import { getPayload } from 'payload'

import config from '@/payload.config'

import PageSidebar from '@/components/PageSidebar'

// Enable static generation
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export const metadata = {
  title: 'Blog - Clean Cuts Trees | Tree Care Tips & News',
  description:
    'Read our latest blog posts about tree care, maintenance tips, and tree service insights from the experts at Clean Cuts Trees.',
}

export default async function BlogPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch all blog posts
  const blogPosts = await payload.find({
    collection: 'blog-posts',
    sort: '-publishedDate',
    limit: 20,
    depth: 2,
  })

  // Note: Categories could be used for filtering in the future if needed
  // const categories = await payload.find({
  //   collection: 'categories',
  //   limit: 100,
  // })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getReadingTime = (
    content: string | { [k: string]: unknown } | null | undefined,
  ): string => {
    if (!content) return '5 min read'
    const text = typeof content === 'string' ? content : JSON.stringify(content)
    const wordsPerMinute = 200
    const wordCount = text.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / wordsPerMinute)
    return `${readingTime} min read`
  }

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <h1>Tree Care Blog</h1>
          <p>
            Expert advice, tips, and insights from Utah&apos;s leading tree service professionals
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">
        <div className="container">
          <div className="blog-layout">
            {/* Main Content */}
            <div className="blog-main">
              <div className="blog-posts">
                {blogPosts.docs.map(
                  (post: {
                    id: string | number
                    slug?: string | null
                    title: string
                    publishedDate?: string | null
                    content?: string | { [k: string]: unknown } | null
                    excerpt?: string | null
                    categories?: Array<
                      number | { id: string | number; title?: string | null }
                    > | null
                  }) => (
                    <article key={post.id} className="blog-post-card">
                      <div className="post-content">
                        <div className="post-meta">
                          <span className="post-date">
                            {post.publishedDate ? formatDate(post.publishedDate) : 'Published'}
                          </span>
                          <span className="post-reading-time">{getReadingTime(post.content)}</span>
                        </div>

                        <h2 className="post-title">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>

                        {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}

                        <div className="post-footer">
                          <div className="post-categories">
                            {post.categories && post.categories.length > 0 && (
                              <>
                                {post.categories
                                  .slice(0, 2)
                                  .map(
                                    (
                                      category:
                                        | number
                                        | { id: string | number; title?: string | null },
                                    ) => {
                                      const categoryData =
                                        typeof category === 'number'
                                          ? { id: category, title: 'Category' }
                                          : category
                                      return (
                                        <span key={categoryData.id} className="category-tag">
                                          {categoryData.title?.replace(' - Clean Cuts Trees', '') ||
                                            'Category'}
                                        </span>
                                      )
                                    },
                                  )}
                              </>
                            )}
                          </div>

                          <Link href={`/blog/${post.slug}`} className="read-more">
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ),
                )}
              </div>

              {blogPosts.totalDocs === 0 && (
                <div className="no-posts">
                  <h3>No blog posts found</h3>
                  <p>Check back soon for expert tree care tips and insights!</p>
                </div>
              )}

              {/* Pagination could go here if needed */}
              {blogPosts.totalPages > 1 && (
                <div className="pagination">
                  <p>
                    Showing {blogPosts.docs.length} of {blogPosts.totalDocs} posts
                  </p>
                </div>
              )}
            </div>

            <PageSidebar />
          </div>
        </div>
      </section>
    </div>
  )
}
