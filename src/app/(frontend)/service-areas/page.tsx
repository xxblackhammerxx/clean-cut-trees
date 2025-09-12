import Link from 'next/link'
import { getPayload } from 'payload'

import config from '@/payload.config'

export const metadata = {
  title: 'Service Areas - Clean Cuts Trees | Tree Service Throughout Utah',
  description:
    'We provide professional tree services throughout Davis, Weber, and Salt Lake Counties including Kaysville, Layton, Bountiful, and surrounding areas.',
}

export default async function ServiceAreasPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch all service area pages
  const serviceAreas = await payload.find({
    collection: 'pages',
    where: {
      pageType: {
        equals: 'service-area',
      },
    },
    sort: 'title',
    limit: 100,
  })

  // Group service areas by county (simplified grouping)
  const groupedAreas = serviceAreas.docs.reduce((acc: any, area: any) => {
    let county = 'Other'
    const title = area.title.toLowerCase()

    if (
      title.includes('davis county') ||
      title.includes('kaysville') ||
      title.includes('layton') ||
      title.includes('bountiful') ||
      title.includes('centerville') ||
      title.includes('farmington') ||
      title.includes('clearfield')
    ) {
      county = 'Davis County'
    } else if (
      title.includes('weber county') ||
      title.includes('ogden') ||
      title.includes('roy') ||
      title.includes('riverdale') ||
      title.includes('plain city') ||
      title.includes('hooper') ||
      title.includes('clinton')
    ) {
      county = 'Weber County'
    } else if (
      title.includes('salt lake county') ||
      title.includes('north salt lake') ||
      title.includes('south weber')
    ) {
      county = 'Salt Lake County'
    }

    if (!acc[county]) {
      acc[county] = []
    }
    acc[county].push(area)
    return acc
  }, {})

  return (
    <div className="service-areas-page">
      {/* Hero Section */}
      <section className="service-areas-hero">
        <div className="container">
          <h1>Tree Service Coverage Areas Throughout Utah</h1>
          <p>Professional tree services and 24/7 emergency response throughout Northern Utah</p>
          <div className="hero-cta">
            <a href="tel:+18014737548" className="btn btn-emergency">
              Emergency: (801) 473-7548
            </a>
            <Link href="/contact-us" className="btn btn-secondary">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Content */}
      <section className="service-areas-content">
        <div className="container">
          <div className="content-intro">
            <h2>Complete Tree Services Throughout Northern Utah</h2>
            <p>
              Clean Cuts Trees provides comprehensive tree care services across Davis, Weber, and Salt Lake Counties. 
              Our certified arborists deliver professional tree services with a focus on safety, efficiency, and customer satisfaction.
            </p>
          </div>

          {/* Services Overview */}
          <div className="services-overview">
            <h3>Our Tree Services Include:</h3>
            <div className="services-grid">
              <div className="service-item">
                <Link href="/services/emergency-tree-service">24/7 Emergency Tree Service</Link>
              </div>
              <div className="service-item">
                <Link href="/services/tree-removal">Professional Tree Removal</Link>
              </div>
              <div className="service-item">
                <Link href="/services/tree-trimming">Tree Trimming & Pruning</Link>
              </div>
              <div className="service-item">
                <Link href="/services/storm-clean-up">Storm Damage Cleanup</Link>
              </div>
              <div className="service-item">
                <Link href="/services/professional-land-clearing-services">Land Clearing Services</Link>
              </div>
              <div className="service-item">
                <Link href="/services/municipal-tree-service">Municipal Tree Service</Link>
              </div>
            </div>
          </div>
          <div className="areas-intro">
            <h2>Serving Northern Utah Communities</h2>
            <p>
              Clean Cuts Trees proudly serves homeowners and businesses throughout Davis, Weber, and
              Salt Lake Counties. Our local expertise and commitment to quality service has made us
              the trusted choice for tree care across Northern Utah.
            </p>
          </div>

          {Object.entries(groupedAreas).map(([county, areas]) => {
            const areasList = areas as any[]
            return (
              <div key={county} className="county-section">
                <h3 className="county-title">{county}</h3>
                <div className="areas-grid">
                  {areasList.map((area: any) => (
                    <div key={area.id} className="area-card">
                      <div className="area-content">
                        <h4>
                          {area.title
                            .replace('Tree Service ', '')
                            .replace(', UT - Clean Cuts Trees', '')
                            .replace('Tree Service Tree Service ', '')}
                        </h4>
                        {area.excerpt && (
                          <p className="area-description">{area.excerpt.substring(0, 120)}...</p>
                        )}
                        <Link href={`/${area.slug}`} className="area-link">
                          View Service Area →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}

          {/* Emergency Service Notice */}
          <div className="emergency-notice">
            <div className="notice-box">
              <h3>
                <span
                  className="material-symbols-outlined"
                  style={{ verticalAlign: 'middle', fontSize: 22, marginRight: 4 }}
                >
                  emergency
                </span>{' '}
                24/7 Emergency Tree Service
              </h3>
              <p>
                Storm damage? Fallen tree? We provide emergency tree services 24 hours a day, 7 days
                a week throughout all our service areas.
              </p>
              <Link href="tel:+18014737548" className="btn btn-primary">
                <span
                  className="material-symbols-outlined"
                  style={{ verticalAlign: 'middle', fontSize: 20, marginRight: 4 }}
                >
                  call
                </span>{' '}
                Emergency Line: (801) 473-7548
              </Link>
            </div>
          </div>

          {/* Service Promise */}
          <div className="service-promise">
            <h3>Our Service Promise</h3>
            <div className="promise-grid">
              <div className="promise-item">
                <div className="promise-icon">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <h4>Local Expertise</h4>
                <p>We know the unique challenges of Utah&apos;s climate and tree species.</p>
              </div>
              <div className="promise-item">
                <div className="promise-icon">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <h4>Fast Response</h4>
                <p>Quick response times for all service requests and emergencies.</p>
              </div>
              <div className="promise-item">
                <div className="promise-icon">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <h4>Quality Guaranteed</h4>
                <p>100% satisfaction guarantee on all our tree services.</p>
              </div>
              <div className="promise-item">
                <div className="promise-icon">
                  <span className="material-symbols-outlined">savings</span>
                </div>
                <h4>Fair Pricing</h4>
                <p>Competitive, transparent pricing with free estimates.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="areas-cta">
            <div className="cta-box">
              <h3>Ready to Schedule Service?</h3>
              <p>Contact us today to schedule tree service in your area.</p>
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
      </section>
    </div>
  )
}
