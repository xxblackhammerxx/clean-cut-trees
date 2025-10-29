import dotenv from 'dotenv'
import fs from 'fs/promises'
import path from 'path'
import { getPayload } from 'payload'

// Load environment variables
dotenv.config({ path: '.env' })

console.log('Environment check:')
console.log('PAYLOAD_SECRET exists:', !!process.env.PAYLOAD_SECRET)
console.log('PAYLOAD_SECRET length:', process.env.PAYLOAD_SECRET?.length)
console.log('DATABASE_URI exists:', !!process.env.DATABASE_URI)

// Type definitions for Lexical content structure
interface LexicalTextNode {
  type: 'text'
  text: string
  format?: number
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

interface LexicalLinkNode {
  type: 'link'
  url?: string
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

interface PayloadPage {
  id: string
  title: string
  slug: string
  pageType: 'homepage' | 'service' | 'service-area' | 'static'
  content: string | LexicalContent | null
  excerpt?: string
  featuredImage?: any
  seo?: {
    title?: string
    description?: string
    keywords?: string
    image?: any
  }
  publishedDate?: string
  status: 'published' | 'draft'
  createdAt: string
  updatedAt: string
}

const generatePageComponent = (page: PayloadPage): string => {
  const renderLexicalContentToJSX = (content: LexicalContent): string => {
    if (!content?.root?.children) {
      return `<p>Content not available</p>`
    }

    const renderNode = (node: LexicalNode, index: number): string => {
      switch (node.type) {
        case 'paragraph':
          const children = Array.isArray(node.children) ? node.children : []
          const paragraphContent = children
            .map((child: LexicalNode) => {
              if (child.type === 'text') {
                const textNode = child as LexicalTextNode
                let text = textNode.text || ''

                // Handle formatting
                if (textNode.format) {
                  if (textNode.format & 1) text = `<strong>${text}</strong>` // Bold
                  if (textNode.format & 2) text = `<em>${text}</em>` // Italic
                  if (textNode.format & 4) text = `<u>${text}</u>` // Underline
                }

                return text
              }
              if (child.type === 'link') {
                const linkNode = child as LexicalLinkNode
                const linkChildren = Array.isArray(linkNode.children) ? linkNode.children : []
                const linkText = linkChildren.map((c: LexicalTextNode) => c.text || '').join('')
                return `<Link href="${linkNode.url || '#'}">${linkText}</Link>`
              }
              return ''
            })
            .join('')

          return `<p key={${index}}>${paragraphContent}</p>`

        case 'heading':
          const headingNode = node as LexicalHeadingNode
          const headingChildren = Array.isArray(headingNode.children) ? headingNode.children : []
          const headingText = headingChildren
            .map((child: LexicalTextNode) => child.text || '')
            .join('')
          const tag = headingNode.tag || 'h2'
          const HeadingTag = tag.charAt(0).toUpperCase() + tag.slice(1)

          return `<${tag} key={${index}} className="content-heading">${headingText}</${tag}>`

        case 'list':
          const listNode = node as LexicalListNode
          const ListTag = listNode.listType === 'number' ? 'ol' : 'ul'
          const listChildren = Array.isArray(listNode.children) ? listNode.children : []
          const listItems = listChildren
            .map((listItem: LexicalListItemNode, itemIndex: number) => {
              const itemChildren = Array.isArray(listItem.children) ? listItem.children : []
              const itemText = itemChildren
                .map((child: LexicalTextNode) => child.text || '')
                .join('')
              return `<li key={${itemIndex}}>${itemText}</li>`
            })
            .join('\n          ')

          return `<${ListTag} key={${index}} className="content-list">
          ${listItems}
        </${ListTag}>`

        case 'image':
          const imageNode = node as LexicalImageMainNode
          const imageUrl = imageNode.src || imageNode.value?.url || ''
          const imageAlt = imageNode.alt || imageNode.value?.alt || ''

          let caption = ''
          if (imageNode.caption?.editorState?.root?.children) {
            const captionText = imageNode.caption.editorState.root.children
              .map((captionNode: LexicalCaptionNode) => {
                return Array.isArray(captionNode.children)
                  ? captionNode.children.map((child: LexicalTextNode) => child.text || '').join('')
                  : ''
              })
              .join('')

            if (captionText) {
              caption = `\n        <p className="image-caption">${captionText}</p>`
            }
          }

          return `<div key={${index}} className="content-image">
        <Image
          src="${imageUrl}"
          alt="${imageAlt}"
          width={800}
          height={600}
          className="content-img"
          style={{ maxWidth: '100%', height: 'auto', margin: '1rem 0' }}
        />${caption}
      </div>`

        default:
          return `{/* Unsupported content type: ${node.type} */}`
      }
    }

    const renderedNodes = content.root.children
      .map((node, index) => renderNode(node, index))
      .join('\n      ')

    return `<>
      ${renderedNodes}
    </>`
  }

  const renderMarkdownContentToJSX = (content: string): string => {
    // For markdown content, we'll use dangerouslySetInnerHTML for now
    // This could be improved to parse markdown to JSX
    return `<div 
      className="markdown-content" 
      dangerouslySetInnerHTML={{ 
        __html: marked(\`${content.replace(/`/g, '\\`')}\`) 
      }} 
    />`
  }

  const renderContent = (): string => {
    if (!page.content) {
      return `<p>Content not available</p>`
    }

    if (typeof page.content === 'string') {
      return renderMarkdownContentToJSX(page.content)
    }

    if (page.content && typeof page.content === 'object' && 'root' in page.content) {
      return renderLexicalContentToJSX(page.content as LexicalContent)
    }

    return `<p>Content not available</p>`
  }

  const seoTitle = page.seo?.title || page.title
  const seoDescription =
    page.seo?.description || page.excerpt || `Learn about ${page.title} at Clean Cuts Trees`
  const seoKeywords = page.seo?.keywords || 'tree service, Clean Cuts Trees, Utah'

  const needsMarked = typeof page.content === 'string'
  const needsLink =
    typeof page.content === 'object' && JSON.stringify(page.content).includes('"type":"link"')

  return `import { Metadata } from 'next'${
    needsMarked
      ? `
import { marked } from 'marked'`
      : ''
  }
import Image from 'next/image'${
    needsLink
      ? `
import Link from 'next/link'`
      : ''
  }

export const metadata: Metadata = {
  title: '${seoTitle} | Clean Cuts Trees',
  description: '${seoDescription}',
  keywords: '${seoKeywords}',
}

export default function ${page.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')}Page() {
  const isServicePage = ${page.pageType === 'service'}
  const isServiceAreaPage = ${page.pageType === 'service-area'}

  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">${page.title}</h1>
              </header>

              <div className="page-content-body">
                ${renderContent()}
              </div>

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
                    <p>We're proud to provide professional tree services to this community.</p>
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
                <p>Get expert tree care from Utah's most trusted professionals.</p>
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
                      <Link href="/services/emergency-tree-service">Emergency Service</Link>
                    </li>
                    <li>
                      <Link href="/services/storm-cleanup">Storm Cleanup</Link>
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
`
}

const sanitizeSlug = (slug: string): string => {
  return slug.replace(/[^a-zA-Z0-9-]/g, '-').replace(/--+/g, '-')
}

const createDirectoryPath = (pageType: string, slug: string): string => {
  const baseDir =
    '/Users/eric.blackham/codebase/personal/gainz/client-sites-3000/clean-cut-trees/src/app/(frontend)'

  switch (pageType) {
    case 'service':
      return path.join(baseDir, 'services', sanitizeSlug(slug))
    case 'service-area':
      return path.join(baseDir, 'service-areas', sanitizeSlug(slug))
    case 'homepage':
      return baseDir // Homepage goes to root
    default:
      return path.join(baseDir, sanitizeSlug(slug))
  }
}

async function convertPagesToStatic() {
  console.log('🚀 Starting conversion of Payload CMS pages to static files...')

  try {
    // Import config dynamically to ensure env vars are loaded
    const { default: config } = await import('../src/payload.config.js')
    const payload = await getPayload({ config })

    console.log('✅ Connected to Payload CMS')

    // Fetch all published pages
    const pages = await payload.find({
      collection: 'pages',
      where: {
        status: {
          equals: 'published',
        },
      },
      limit: 1000, // Adjust if you have more pages
      depth: 0,
    })

    console.log(`📄 Found ${pages.docs.length} published pages`)

    let convertedCount = 0
    let skippedCount = 0

    for (const page of pages.docs as PayloadPage[]) {
      console.log(`\n🔄 Processing: ${page.title} (${page.slug})`)

      try {
        const directoryPath = createDirectoryPath(page.pageType, page.slug)
        const filePath = path.join(directoryPath, 'page.tsx')

        // Check if directory exists, create if not
        await fs.mkdir(directoryPath, { recursive: true })

        // Check if file already exists
        try {
          await fs.access(filePath)
          console.log(`   ⚠️  File already exists, skipping: ${filePath}`)
          skippedCount++
          continue
        } catch {
          // File doesn't exist, proceed with creation
        }

        // Generate the page component
        const pageComponent = generatePageComponent(page)

        // Write the file
        await fs.writeFile(filePath, pageComponent, 'utf-8')

        console.log(`   ✅ Created: ${filePath}`)
        convertedCount++
      } catch (error) {
        console.error(`   ❌ Error processing ${page.slug}:`, error)
      }
    }

    console.log(`\n🎉 Conversion complete!`)
    console.log(`   📝 Converted: ${convertedCount} pages`)
    console.log(`   ⏭️  Skipped: ${skippedCount} pages (already exist)`)
  } catch (error) {
    console.error('❌ Error during conversion:', error)
  } finally {
    process.exit(0)
  }
}

// Run the conversion
convertPagesToStatic()
