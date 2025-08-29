import { marked } from 'marked'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import config from '@/payload.config'
import fs from 'fs'
import path from 'path'

type Props = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Look for service pages by constructing the full slug
  const serviceSlug = `services-${slug}`

  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: serviceSlug,
      },
    },
    limit: 1,
  })

  const page = pages.docs[0]

  if (!page) {
    return {
      title: 'Service Not Found - Clean Cuts Trees',
    }
  }

  return {
    title: `${page.title} | Clean Cuts Trees`,
    description:
      page.excerpt || page.seo?.description || `Learn about ${page.title} at Clean Cuts Trees`,
    keywords: page.seo?.keywords || 'tree service, Clean Cuts Trees, Utah',
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Look for service pages by constructing the full slug
  const serviceSlug = `services-${slug}`

  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: serviceSlug,
      },
    },
    limit: 1,
  })

  const page = pages.docs[0]

  if (!page) {
    notFound()
  }

  const renderContent = (content: any) => {
    if (typeof content === 'string') {
      // Configure marked for safe HTML rendering
      marked.setOptions({
        breaks: true,
        gfm: true,
      })

      // Fix broken external image URLs before parsing
      let fixedContent = content

      // Prepare assets index from content-migration/assets
      const assetsDir = path.join(process.cwd(), 'content-migration', 'assets')
      let assets: string[] = []
      try {
        assets = fs.readdirSync(assetsDir)
      } catch (e) {
        // assets folder not found or unreadable; leave assets empty and fallbacks will be used
        assets = []
      }

      // Helper to find a local asset by matching the basename (loose match)
      const findLocalAsset = (origFilename: string) => {
        if (!origFilename) return null
        const noExt = origFilename.replace(/\.[^.]+$/, '')
        // prefer exact match
        const exact = assets.find((a) => a === origFilename)
        if (exact) return exact
        // case-insensitive contains match
        const byContains = assets.find((a) => a.toLowerCase().includes(noExt.toLowerCase()))
        if (byContains) return byContains
        return null
      }

      // Replace markdown image references with local asset paths when possible or an inline placeholder
      fixedContent = fixedContent.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
        try {
          // extract filename from URL or path
          let origFilename = src
          try {
            const u = new URL(src)
            origFilename = path.basename(u.pathname)
          } catch (e) {
            // not a full URL, just take basename
            origFilename = path.basename(src)
          }

          const found = findLocalAsset(origFilename)
          if (found) {
            const localPath = `/content-migration/assets/${found}`
            return `<img src="${localPath}" alt="${alt || ''}" class="markdown-image" />`
          }
        } catch (err) {
          // fall through to placeholder
        }

        // Inline SVG placeholder (small neutral image) to avoid broken image icon
        const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(
          `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='300' viewBox='0 0 600 300'><rect width='100%' height='100%' fill='%23f7f7f7'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-family='Arial,Helvetica,sans-serif' font-size='16'>Image unavailable</text></svg>`,
        )}`

        return `<img src="${placeholder}" alt="${alt || 'Image unavailable'}" class="markdown-image placeholder" />`
      })

      // Parse markdown to HTML
      const htmlContent = marked(fixedContent)

      // Return HTML content with proper React rendering
      return <div className="markdown-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    }

    // Handle rich text content (Lexical format)
    if (content && content.root && content.root.children) {
      return content.root.children.map((node: any, index: number) => {
        if (node.type === 'paragraph') {
          return (
            <p key={index} className="content-paragraph">
              {node.children?.map((child: any) => child.text || '').join('')}
            </p>
          )
        }
        if (node.type === 'heading') {
          const headingLevel = node.tag || 'h2'
          if (headingLevel === 'h1') {
            return (
              <h1 key={index} className="content-heading">
                {node.children?.map((child: any) => child.text || '').join('')}
              </h1>
            )
          }
          if (headingLevel === 'h2') {
            return (
              <h2 key={index} className="content-heading">
                {node.children?.map((child: any) => child.text || '').join('')}
              </h2>
            )
          }
          if (headingLevel === 'h3') {
            return (
              <h3 key={index} className="content-heading">
                {node.children?.map((child: any) => child.text || '').join('')}
              </h3>
            )
          }
          return (
            <h2 key={index} className="content-heading">
              {node.children?.map((child: any) => child.text || '').join('')}
            </h2>
          )
        }
        return null
      })
    }

    return <p>Content not available</p>
  }

  return (
    <div className="service-page">
      {/* Breadcrumb */}
      <section className="breadcrumb">
        <div className="container">
          <nav className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span>→</span>
            <Link href="/services">Services</Link>
            <span>→</span>
            <span>{page.title}</span>
          </nav>
        </div>
      </section>

      {/* Service Content */}
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <div className="page-content-body">{renderContent(page.content)}</div>

              {/* Service-specific CTAs */}
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
                  <li>
                    <Link href="/services/municipal-tree-service">Municipal Service</Link>
                  </li>
                </ul>
              </div>

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

// Generate static params for all service pages
export async function generateStaticParams() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        like: 'services-%',
      },
    },
    limit: 100,
  })

  return pages.docs
    .map((page) => ({
      slug: page.slug?.replace('services-', '') || '',
    }))
    .filter((param) => param.slug !== '')
}
