import { marked } from 'marked'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'

import BookingButton from '@/components/BookingButton'
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

  // Look for service area pages by constructing the full slug
  const serviceAreaSlug = `service-areas-${slug}`

  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: serviceAreaSlug,
      },
    },
    limit: 1,
  })

  const page = pages.docs[0]

  if (!page) {
    return {
      title: 'Service Area Not Found - Clean Cuts Trees',
    }
  }

  return {
    title: page.seo?.title || `${page.title} | Clean Cuts Trees`,
    description:
      page.seo?.description || page.excerpt || `Professional tree services in ${page.title.replace(' - Clean Cuts Trees', '')}. Licensed, insured, and trusted local tree care.`,
    keywords: page.seo?.keywords || 'tree service, tree removal, tree trimming, emergency tree service',
  }
}

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Look for service area pages by constructing the full slug
  const serviceAreaSlug = `service-areas-${slug}`

  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: serviceAreaSlug,
      },
    },
    limit: 1,
  })

  const page = pages.docs[0]

  if (!page) {
    notFound()
  }

  // Get the city name from the page title for better formatting
  const cityName = page.title.replace(' - Clean Cuts Trees', '').replace('Tree Service ', '')

  // Render content function for both markdown and rich text
  const renderContent = (content: any) => {
    // Handle markdown content
    if (typeof content === 'string') {
      // Clean up and fix content issues
      const fixedContent = content
        .replace(/!\[([^\]]*)\]\(https:\/\/cleancutstrees\.com\/wp-content\/uploads\/[^)]*\)/g, 
          '<!-- External image removed: $1 (original site no longer available) -->')

      // Parse markdown to HTML
      const htmlContent = marked(fixedContent)

      return <div className="markdown-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    }

    // Handle rich text content (Lexical format)
    if (content && content.root && content.root.children) {
      const renderLexicalNode = (node: any, nodeIndex: number): React.ReactNode => {
        if (node.type === 'paragraph') {
          return (
            <p key={nodeIndex} className="content-paragraph">
              {node.children?.map((child: any, _childIndex: number) => child.text || '').join('')}
            </p>
          )
        }
        if (node.type === 'heading') {
          const headingLevel = node.tag || 'h2'
          const headingText = node.children?.map((child: any) => child.text || '').join('')

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
          const ListComponent = node.listType === 'number' ? 'ol' : 'ul'
          return (
            <ListComponent key={nodeIndex} className="content-list">
              {node.children?.map((listItem: any, itemIndex: number) => (
                <li key={itemIndex} className="content-list-item">
                  {listItem.children?.map((child: any) => child.text || '').join('')}
                </li>
              ))}
            </ListComponent>
          )
        }
        return null
      }

      return content.root.children.map(renderLexicalNode)
    }

    return <p>Content not available</p>
  }

  return (
    <div className="service-area-page">
      {/* Breadcrumb */}
      <section className="breadcrumb">
        <div className="container">
          <nav className="breadcrumb-nav">
            <Link href="/">Home</Link>
            <span>→</span>
            <Link href="/service-areas">Service Areas</Link>
            <span>→</span>
            <span>{cityName}</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="service-area-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="main-content">
              <header className="service-area-header">
                <h1>Tree Service {cityName}</h1>
              </header>

              <div className="service-area-body">
                {renderContent(page.content)}
              </div>

              {/* Emergency CTA */}
              <div className="emergency-cta">
                <h3>Need Emergency Tree Service in {cityName}?</h3>
                <p>Call us now for 24/7 emergency tree removal and storm damage cleanup.</p>
                <div className="cta-buttons">
                  <a href="tel:+18014737548" className="btn btn-emergency">
                    <span className="material-symbols-outlined">call</span>
                    (801) 473-7548
                  </a>
                  <BookingButton variant="secondary" size="medium">
                    Get Free Estimate
                  </BookingButton>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="content-sidebar">
              <div className="sidebar-widget">
                <h3>Our Services in {cityName}</h3>
                <ul className="services-list">
                  <li>
                    <Link href="/services/tree-removal">Tree Removal</Link>
                  </li>
                  <li>
                    <Link href="/services/tree-trimming">Tree Trimming & Pruning</Link>
                  </li>
                  <li>
                    <Link href="/services/emergency-tree-damage">Emergency Tree Service</Link>
                  </li>
                  <li>
                    <Link href="/services/storm-clean-up">Storm Damage Cleanup</Link>
                  </li>
                  <li>
                    <Link href="/services/professional-land-clearing-services">Land Clearing</Link>
                  </li>
                  <li>
                    <Link href="/services/municipal-tree-service">Municipal Tree Service</Link>
                  </li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h3>Why Choose Clean Cuts Trees?</h3>
                <ul className="features-list">
                  <li>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}>
                      check_circle
                    </span>{' '}
                    Licensed & Insured
                  </li>
                  <li>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}>
                      check_circle
                    </span>{' '}
                    24/7 Emergency Service
                  </li>
                  <li>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}>
                      check_circle
                    </span>{' '}
                    Free Estimates
                  </li>
                  <li>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}>
                      check_circle
                    </span>{' '}
                    ISA Certified Arborists
                  </li>
                  <li>
                    <span className="material-symbols-outlined" style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}>
                      check_circle
                    </span>{' '}
                    Professional Equipment
                  </li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h3>Nearby Service Areas</h3>
                <ul className="nearby-areas">
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
                    <Link href="/service-areas/clearfield-ut-tree-service">Clearfield</Link>
                  </li>
                  <li>
                    <Link href="/service-areas/farmington-ut-tree-service">Farmington</Link>
                  </li>
                  <li>
                    <Link href="/service-areas/centerville-ut-tree-service">Centerville</Link>
                  </li>
                  <li>
                    <Link href="/service-areas/roy-ut-tree-service">Roy</Link>
                  </li>
                  <li>
                    <Link href="/service-areas/north-ogden-ut-tree-service">North Ogden</Link>
                  </li>
                </ul>
              </div>

              <div className="sidebar-widget cta-widget">
                <h3>Get Your Free Estimate</h3>
                <p>Ready to get started on your tree service project in {cityName}?</p>
                <Link href="/contact-us" className="sidebar-cta-button">
                  Contact Us Today
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
