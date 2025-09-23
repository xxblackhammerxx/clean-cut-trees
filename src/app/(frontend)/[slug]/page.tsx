import { marked } from 'marked'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import config from '@/payload.config'

// Type definitions for Lexical content structure
interface LexicalTextNode {
  type: 'text'
  text: string
  [k: string]: unknown
}

interface LexicalImageNode {
  type: 'image'
  src?: string
  alt?: string
  value?: {
    url?: string
    alt?: string
  }
  [k: string]: unknown
}

interface LexicalImageMainNode {
  type: 'image'
  src?: string
  alt?: string
  value?: {
    url?: string
    alt?: string
  }
  caption?: {
    editorState?: {
      root?: {
        children?: LexicalCaptionNode[]
      }
    }
  }
  [k: string]: unknown
}

interface LexicalCaptionNode {
  children?: LexicalTextNode[]
  type?: string
  [k: string]: unknown
}

interface LexicalHeadingNode {
  type: 'heading'
  tag?: string
  children?: LexicalTextNode[]
  [k: string]: unknown
}

interface LexicalListNode {
  type: 'list'
  listType?: string
  children?: LexicalListItemNode[]
  [k: string]: unknown
}

interface LexicalListItemNode {
  children?: LexicalTextNode[]
  [k: string]: unknown
}

// More flexible type to match actual Payload structure
type LexicalNode = {
  type: string
  version?: number
  [k: string]: unknown
}

interface LexicalContent {
  root: {
    children: LexicalNode[]
    [k: string]: unknown
  }
  [k: string]: unknown
}

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const pages = await payload.find({
    collection: 'pages',
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        {
          slug: {
            not_like: 'services-%',
          },
        },
      ],
    },
    limit: 1,
  })

  const page = pages.docs[0]

  if (!page) {
    return {
      title: 'Page Not Found - Clean Cuts Trees',
    }
  }

  return {
    title: `${page.title} | Clean Cuts Trees`,
    description:
      page.excerpt || page.seo?.description || `Learn about ${page.title} at Clean Cuts Trees`,
    keywords: page.seo?.keywords || 'tree service, Clean Cuts Trees, Utah',
  }
}

export default async function GeneralPage({ params }: Props) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const pages = await payload.find({
    collection: 'pages',
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        {
          slug: {
            not_like: 'services-%',
          },
        },
      ],
    },
    limit: 1,
  })

  const page = pages.docs[0]

  if (!page) {
    notFound()
  }

  const renderContent = (content: string | LexicalContent | null | undefined) => {
    if (!content) {
      return <p>Content not available</p>
    }
    if (typeof content === 'string') {
      // Configure marked for safe HTML rendering
      marked.setOptions({
        breaks: true,
        gfm: true,
      })

      // Fix broken external image URLs before parsing
      let fixedContent = content

      // Replace broken external image URLs with local fallbacks or remove them
      fixedContent = fixedContent.replace(
        /!\[([^\]]*)\]\(https:\/\/cleancutstrees\.com\/wp-content\/uploads\/[^)]*\)/g,
        '<!-- External image removed: $1 (original site no longer available) -->',
      )

      // Replace social media "Follow" links with proper icons
      // First, let's handle the list format and make them inline

      // Parse markdown to HTML
      const htmlContent = marked(fixedContent)

      // Return HTML content with proper React rendering
      return <div className="markdown-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    }

    // Handle rich text content (Lexical format)
    if (content && content.root && content.root.children) {
      const renderLexicalNode = (node: LexicalNode, nodeIndex: number): React.ReactNode => {
        if (node.type === 'paragraph') {
          const children = Array.isArray(node.children) ? node.children : []
          return (
            <p key={nodeIndex} className="content-paragraph">
              {children.map((child: LexicalNode, childIndex: number) => {
                if (child.type === 'text') {
                  return (child as { text?: string }).text || ''
                }
                if (child.type === 'image') {
                  const imageChild = child as LexicalImageNode
                  return (
                    <Image
                      key={childIndex}
                      src={imageChild.src || imageChild.value?.url || ''}
                      alt={imageChild.alt || imageChild.value?.alt || ''}
                      width={400}
                      height={300}
                      className="inline-image"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  )
                }
                return null
              })}
            </p>
          )
        }
        if (node.type === 'image') {
          const imageNode = node as LexicalImageMainNode
          return (
            <div key={nodeIndex} className="content-image">
              <Image
                src={imageNode.src || imageNode.value?.url || ''}
                alt={imageNode.alt || imageNode.value?.alt || ''}
                width={800}
                height={600}
                className="content-img"
                style={{ maxWidth: '100%', height: 'auto', margin: '1rem 0' }}
              />
              {imageNode.caption &&
                imageNode.caption.editorState?.root?.children &&
                Array.isArray(imageNode.caption.editorState.root.children) &&
                imageNode.caption.editorState.root.children.length > 0 && (
                  <p className="image-caption">
                    {imageNode.caption.editorState.root.children
                      .map((captionNode: LexicalCaptionNode) => {
                        return Array.isArray(captionNode.children)
                          ? captionNode.children
                              .map((child: LexicalTextNode) => child.text || '')
                              .join('')
                          : ''
                      })
                      .join('')}
                  </p>
                )}
            </div>
          )
        }
        if (node.type === 'heading') {
          const headingNode = node as LexicalHeadingNode
          const headingLevel = headingNode.tag || 'h2'
          const children = Array.isArray(headingNode.children) ? headingNode.children : []
          const headingText = children.map((child: LexicalTextNode) => child.text || '').join('')

          if (headingLevel === 'h1') {
            return (
              <h1 key={nodeIndex} className="content-heading">
                {headingText}
              </h1>
            )
          }
          if (headingLevel === 'h2') {
            return (
              <h2 key={nodeIndex} className="content-heading">
                {headingText}
              </h2>
            )
          }
          if (headingLevel === 'h3') {
            return (
              <h3 key={nodeIndex} className="content-heading">
                {headingText}
              </h3>
            )
          }
          return (
            <h2 key={nodeIndex} className="content-heading">
              {headingText}
            </h2>
          )
        }
        if (node.type === 'list') {
          const listNode = node as LexicalListNode
          const ListComponent = listNode.listType === 'number' ? 'ol' : 'ul'
          const children = Array.isArray(listNode.children) ? listNode.children : []
          return (
            <ListComponent key={nodeIndex} className="content-list">
              {children.map((listItem: LexicalListItemNode, itemIndex: number) => {
                const itemChildren = Array.isArray(listItem.children) ? listItem.children : []
                return (
                  <li key={itemIndex} className="content-list-item">
                    {itemChildren.map((child: LexicalTextNode) => child.text || '').join('')}
                  </li>
                )
              })}
            </ListComponent>
          )
        }
        return null
      }

      return content.root.children.map(renderLexicalNode)
    }

    return <p>Content not available</p>
  }

  const _getPageTypeLabel = (pageType: string): string => {
    switch (pageType) {
      case 'service':
        return 'Service'
      case 'service-area':
        return 'Service Area'
      case 'static':
        return 'Page'
      default:
        return 'Page'
    }
  }

  const isServicePage = page.pageType === 'service'
  const isServiceAreaPage = page.pageType === 'service-area'

  return (
    <div className="general-page">
      {/* Page Content */}
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">{page.title}</h1>
              </header>

              <div className="page-content-body">{renderContent(page.content)}</div>

              {/* Service-specific CTAs */}
              {isServicePage && (
                <div className="service-cta">
                  <div className="cta-box">
                    <h3>Ready to Get Started?</h3>
                    <p>Contact us today for a free estimate on this service.</p>
                    <div className="cta-buttons">
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
                  </div>
                </div>
              )}

              {/* Service Area specific CTAs */}
              {isServiceAreaPage && (
                <div className="service-area-cta">
                  <div className="cta-box">
                    <h3>
                      Serving{' '}
                      {page.title
                        .replace('Tree Service ', '')
                        .replace(', UT - Clean Cuts Trees', '')}
                    </h3>
                    <p>We&apos;re proud to provide professional tree services to this community.</p>
                    <div className="cta-buttons">
                      <Link href="/contact-us" className="btn btn-primary">
                        Schedule Service
                      </Link>
                      <Link href="tel:+18014737548" className="btn btn-phone">
                        📞 Call Now
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="page-sidebar">
              <div className="sidebar-widget cta-widget">
                <h3>Need Tree Service?</h3>
                <p>Get expert tree care from Utah&apos;s most trusted professionals.</p>
                <Link href="/contact-us" className="btn btn-primary">
                  Free Estimate
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

              {isServicePage && (
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
                      <Link href="/services/professional-land-clearing-services">
                        Land Clearing
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/municipal-tree-service">Municipal Service</Link>
                    </li>
                  </ul>
                </div>
              )}

              {isServiceAreaPage && (
                <div className="sidebar-widget">
                  <h3>Service Areas</h3>
                  <ul className="areas-list">
                    <li>
                      <Link href="/service-areas/kaysville-ut-tree-service">Kaysville</Link>
                    </li>
                    <li>
                      <Link href="/service-areas/layton-ut-tree-service">Layton</Link>
                    </li>
                    <li>
                      <Link href="/service-areas/bountiful-ut-tree-service">Bountiful</Link>
                    </li>
                    <li>
                      <Link href="/service-areas/farmington-ut-tree-service">Farmington</Link>
                    </li>
                    <li>
                      <Link href="/service-areas/centerville-ut-tree-service">Centerville</Link>
                    </li>
                  </ul>
                </div>
              )}

              <div className="sidebar-widget">
                <h3>Why Choose Clean Cuts Trees?</h3>
                <ul className="features-list">
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>{' '}
                    Licensed & Insured
                  </li>
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>{' '}
                    24/7 Emergency Service
                  </li>
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>{' '}
                    Free Estimates
                  </li>
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>{' '}
                    Family Owned & Operated
                  </li>
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>{' '}
                    Professional Equipment
                  </li>
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>{' '}
                    Satisfaction Guaranteed
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </div>
  )
}
