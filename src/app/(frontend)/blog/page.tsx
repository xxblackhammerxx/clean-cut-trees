import Link from 'next/link'
import { getPayload } from 'payload'

import BookingButton from '@/components/BookingButton'
import config from '@/payload.config'

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

  // Fetch categories for filtering
  const categories = await payload.find({
    collection: 'categories',
    limit: 100,
  })

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

            {/* Sidebar */}
            <aside className="blog-sidebar">
              <div className="sidebar-widget">
                <h3>Categories</h3>
                <ul className="category-list">
                  {categories.docs.map(
                    (category: {
                      id: string | number
                      slug?: string | null
                      title?: string | null
                    }) => (
                      <li key={category.id}>
                        <Link href={`/blog?category=${category.slug}`}>
                          {category.title?.replace(' - Clean Cuts Trees', '') || 'Category'}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="sidebar-widget">
                <h3>Popular Topics</h3>
                <ul className="topics-list">
                  <li>
                    <Link href="/blog?tag=tree-removal">Tree Removal</Link>
                  </li>
                  <li>
                    <Link href="/blog?tag=tree-trimming">Tree Trimming</Link>
                  </li>
                  <li>
                    <Link href="/blog?tag=tree-pruning">Tree Pruning</Link>
                  </li>
                  <li>
                    <Link href="/blog?tag=emergency-service">Emergency Service</Link>
                  </li>
                  <li>
                    <Link href="/blog?tag=storm-damage">Storm Damage</Link>
                  </li>
                </ul>
              </div>

              <div className="sidebar-widget cta-widget">
                <h3>Need Tree Service?</h3>
                <p>Get a free estimate from Utah&apos;s trusted tree service professionals.</p>
                <BookingButton variant="primary" size="medium">
                  Get Free Estimate
                </BookingButton>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
