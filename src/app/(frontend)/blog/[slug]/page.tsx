import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import config from '@/payload.config'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const blogPosts = await payload.find({
    collection: 'blog-posts',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  })

  const post = blogPosts.docs[0]

  if (!post) {
    return {
      title: 'Post Not Found - Clean Cuts Trees',
    }
  }

  return {
    title: `${post.title} | Clean Cuts Trees Blog`,
    description: post.excerpt || `Read about ${post.title} on the Clean Cuts Trees blog`,
    keywords: post.seo?.keywords || 'tree service, tree care, Clean Cuts Trees',
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const blogPosts = await payload.find({
    collection: 'blog-posts',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 2,
    limit: 1,
  })

  const post = blogPosts.docs[0]

  if (!post) {
    notFound()
  }

  // Fetch related posts
  const relatedPosts = await payload.find({
    collection: 'blog-posts',
    where: {
      id: {
        not_equals: post.id,
      },
    },
    sort: '-publishedDate',
    limit: 3,
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

  const renderContent = (
    content: string | { root?: { children?: { [k: string]: unknown }[] } } | null | undefined,
  ) => {
    if (typeof content === 'string') {
      // Handle markdown or plain text content
      return content.split('\n').map((paragraph, index) => (
        <p key={index} className="content-paragraph">
          {paragraph}
        </p>
      ))
    }

    // Handle rich text content (Lexical format)
    if (content && content.root && content.root.children) {
      return content.root.children.map(
        (
          node: {
            type?: string
            tag?: string
            children?: { text?: string }[]
            [k: string]: unknown
          },
          index: number,
        ) => {
          if (node.type === 'paragraph') {
            return (
              <p key={index} className="content-paragraph">
                {node.children
                  ?.map((child: { text?: string }, _childIndex: number) => child.text || '')
                  .join('')}
              </p>
            )
          }
          if (node.type === 'heading') {
            const headingLevel = node.tag || 'h2'
            if (headingLevel === 'h1') {
              return (
                <h1 key={index} className="content-heading">
                  {node.children
                    ?.map((child: { text?: string }, _childIndex: number) => child.text || '')
                    .join('')}
                </h1>
              )
            }
            if (headingLevel === 'h2') {
              return (
                <h2 key={index} className="content-heading">
                  {node.children
                    ?.map((child: { text?: string }, _childIndex: number) => child.text || '')
                    .join('')}
                </h2>
              )
            }
            if (headingLevel === 'h3') {
              return (
                <h3 key={index} className="content-heading">
                  {node.children
                    ?.map((child: { text?: string }, _childIndex: number) => child.text || '')
                    .join('')}
                </h3>
              )
            }
            return (
              <h2 key={index} className="content-heading">
                {node.children
                  ?.map((child: { text?: string }, _childIndex: number) => child.text || '')
                  .join('')}
              </h2>
            )
          }
          return null
        },
      )
    }

    return <p>Content not available</p>
  }

  return (
    <div className="blog-post-page">
      {/* Breadcrumb */}
      <section className="breadcrumb">
        <div className="container">
          <nav className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span>→</span>
            <Link href="/blog">Blog</Link>
            <span>→</span>
            <span>{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Post Content */}
      <article className="blog-post">
        <div className="container">
          <div className="post-layout">
            <div className="post-main">
              <header className="post-header">
                <div className="post-meta">
                  <span className="post-date">{formatDate(post.publishedDate)}</span>
                  <span className="post-reading-time">{getReadingTime(post.content)}</span>
                  {post.author && <span className="post-author">By {post.author}</span>}
                </div>

                <h1 className="post-title">{post.title}</h1>

                {post.excerpt && (
                  <div className="post-excerpt">
                    <p>{post.excerpt}</p>
                  </div>
                )}

                {post.categories && post.categories.length > 0 && (
                  <div className="post-categories">
                    {post.categories.map(
                      (category: number | { id: string | number; title?: string }) => {
                        const categoryData =
                          typeof category === 'number'
                            ? { id: category, title: 'Category' }
                            : category
                        return (
                          <span key={categoryData.id} className="category-tag">
                            {categoryData.title?.replace(' - Clean Cuts Trees', '') || 'Category'}
                          </span>
                        )
                      },
                    )}
                  </div>
                )}
              </header>

              <div className="post-content">{renderContent(post.content)}</div>

              {post.tags && post.tags.length > 0 && (
                <footer className="post-footer">
                  <div className="post-tags">
                    <strong>Tags: </strong>
                    {post.tags.map(
                      (tag: number | { id: string | number; title?: string }, index: number) => {
                        const tagData = typeof tag === 'number' ? { id: tag, title: 'Tag' } : tag
                        return (
                          <span key={tagData.id}>
                            {tagData.title?.replace(' - Clean Cuts Trees', '') || 'Tag'}
                            {index < (post.tags?.length || 0) - 1 && ', '}
                          </span>
                        )
                      },
                    )}
                  </div>
                </footer>
              )}
            </div>

            {/* Sidebar */}
            <aside className="post-sidebar">
              <div className="sidebar-widget cta-widget">
                <h3>Need Professional Tree Service?</h3>
                <p>Our certified arborists are ready to help with all your tree care needs.</p>
                <Link href="/contact-us" className="btn btn-primary">
                  Get Free Estimate
                </Link>
                <Link href="tel:+18014737548" className="btn btn-phone">
                  <span
                    className="material-symbols-outlined"
                    style={{ verticalAlign: 'middle', fontSize: 20, marginRight: 4 }}
                  >
                    call
                  </span>{' '}
                  (801) 473-7548
                </Link>
              </div>

              <div className="sidebar-widget">
                <h3>Our Services</h3>
                <ul className="services-list">
                  <li>
                    <Link href="/services/tree-removal">Tree Removal</Link>
                  </li>
                  <li>
                    <Link href="/services/tree-trimming">Tree Trimming</Link>
                  </li>
                  <li>
                    <Link href="/services/emergency-tree-damage">Emergency Service</Link>
                  </li>
                  <li>
                    <Link href="/services/storm-clean-up">Storm Cleanup</Link>
                  </li>
                  <li>
                    <Link href="/services/professional-land-clearing-services">Land Clearing</Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.docs.length > 0 && (
        <section className="related-posts">
          <div className="container">
            <h2>Related Articles</h2>
            <div className="related-posts-grid">
              {relatedPosts.docs.map(
                (relatedPost: {
                  id: string | number
                  slug?: string | null
                  title: string
                  excerpt?: string | null
                  publishedDate?: string | null
                }) => (
                  <div key={relatedPost.id} className="related-post-card">
                    <h3>
                      <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                    </h3>
                    {relatedPost.excerpt && <p>{relatedPost.excerpt.substring(0, 120)}...</p>}
                    <div className="related-post-meta">
                      <span>
                        {relatedPost.publishedDate
                          ? formatDate(relatedPost.publishedDate)
                          : 'Published'}
                      </span>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
