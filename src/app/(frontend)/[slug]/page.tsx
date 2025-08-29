import { marked } from 'marked'
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

  const renderContent = (content: any) => {
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
      fixedContent = fixedContent.replace(
        /-\s*\[Follow\]\(https:\/\/www\.facebook\.com\/CleanCutsTrees\/[^)]*\)/g,
        '<a href="https://www.facebook.com/CleanCutsTrees/" target="_blank" rel="noopener noreferrer" class="social-link-inline facebook" aria-label="Follow us on Facebook"><i class="fab fa-facebook-f"></i></a>',
      )

      fixedContent = fixedContent.replace(
        /-\s*\[Follow\]\(https:\/\/www\.youtube\.com\/channel\/UCSMH2M8_eCp3TM7lxs7HC1w\/videos[^)]*\)/g,
        '<a href="https://www.youtube.com/channel/UCSMH2M8_eCp3TM7lxs7HC1w/videos" target="_blank" rel="noopener noreferrer" class="social-link-inline youtube" aria-label="Follow us on YouTube"><i class="fab fa-youtube"></i></a>',
      )

      fixedContent = fixedContent.replace(
        /-\s*\[Follow\]\(https:\/\/www\.instagram\.com\/clean_cuts_trees\/[^)]*\)/g,
        '<a href="https://www.instagram.com/clean_cuts_trees/" target="_blank" rel="noopener noreferrer" class="social-link-inline instagram" aria-label="Follow us on Instagram"><i class="fab fa-instagram"></i></a>',
      )

      // Also handle non-list format
      // Facebook
      fixedContent = fixedContent.replace(
        /\[Follow\]\(https:\/\/www\.facebook\.com\/CleanCutsTrees\/[^)]*\)/g,
        '<a href="https://www.facebook.com/CleanCutsTrees/" target="_blank" rel="noopener noreferrer" class="social-link-inline facebook" aria-label="Follow us on Facebook"><i class="fab fa-facebook-f"></i></a>',
      )

      // YouTube
      fixedContent = fixedContent.replace(
        /\[Follow\]\(https:\/\/www\.youtube\.com\/channel\/UCSMH2M8_eCp3TM7lxs7HC1w\/videos[^)]*\)/g,
        '<a href="https://www.youtube.com/channel/UCSMH2M8_eCp3TM7lxs7HC1w/videos" target="_blank" rel="noopener noreferrer" class="social-link-inline youtube" aria-label="Follow us on YouTube"><i class="fab fa-youtube"></i></a>',
      )

      // Instagram
      fixedContent = fixedContent.replace(
        /\[Follow\]\(https:\/\/www\.instagram\.com\/clean_cuts_trees\/[^)]*\)/g,
        '<a href="https://www.instagram.com/clean_cuts_trees/" target="_blank" rel="noopener noreferrer" class="social-link-inline instagram" aria-label="Follow us on Instagram"><i class="fab fa-instagram"></i></a>',
      )

      // Remove empty headings at the end of content (Our Services, Service Areas, Location with no content)
      fixedContent = fixedContent.replace(/###\s*(Our Services|Service Areas|Location)\s*$/gm, '')

      // Wrap consecutive social media links in a container
      fixedContent = fixedContent.replace(
        /((?:<a[^>]*class="social-link-inline[^>]*>.*?<\/a>\s*){2,})/g,
        '<div class="social-links-container">$1</div>',
      )

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

  const getPageTypeLabel = (pageType: string) => {
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
      {/* Breadcrumb */}
      <section className="breadcrumb">
        <div className="container">
          <nav className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span>→</span>
            {isServicePage && (
              <>
                <Link href="/services">Services</Link>
                <span>→</span>
              </>
            )}
            {isServiceAreaPage && (
              <>
                <Link href="/service-areas">Service Areas</Link>
                <span>→</span>
              </>
            )}
            <span>{page.title}</span>
          </nav>
        </div>
      </section>

      {/* Page Content */}
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">{page.title}</h1>

                {page.excerpt && (
                  <div className="page-excerpt">
                    <p>{page.excerpt}</p>
                  </div>
                )}
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
