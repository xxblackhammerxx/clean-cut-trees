import Link from 'next/link'
import { getPayload } from 'payload'

import BookingButton from '@/components/BookingButton'
import config from '@/payload.config'

export const metadata = {
  title: 'Tree Services | Removal, Trimming, Stump Grinding | Clean Cuts Trees',
  description:
    'Explore all our tree services: removal, trimming, stump grinding, storm cleanup, land clearing, and more. Licensed, insured, and local.',
}

export default async function ServicesPage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch all service pages (excluding problematic first service)
  const services = await payload.find({
    collection: 'pages',
    where: {
      and: [
        {
          pageType: {
            equals: 'service',
          },
        },
      ],
    },
    sort: 'title',
    limit: 100,
  })

  return (
    <div className="services-listing-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Full‑Service Tree Care</h1>
          <p>Professional tree care services throughout Davis, Weber, and Salt Lake Counties</p>
          <div className="services-hero-buttons">
            <BookingButton variant="primary" size="large">
              Schedule Service Now
            </BookingButton>
            <a href="tel:+18014737548" className="btn btn-phone btn-large">
              <span className="material-symbols-outlined">call</span>
              Call (801) 473-7548
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-listing">
        <div className="container">
          <div className="services-intro">
            <h2>Complete Tree Care Solutions</h2>
            <p>
              Clean Cuts Trees provides comprehensive tree services to residential and commercial
              properties throughout Utah. Our certified arborists use the latest equipment and
              techniques to ensure safe, efficient, and professional tree care.
            </p>
          </div>

          <div className="services-grid">
            {services.docs.map(
              (service: {
                id: string | number
                title: string
                excerpt?: string | null
                slug?: string | null
              }) => (
                <div key={service.id} className="service-card">
                  <div className="service-content">
                    <h3>{service.title.replace(' - Clean Cuts Trees', '')}</h3>
                    {service.excerpt && <p className="service-description">{service.excerpt}</p>}
                    <Link
                      href={`/services/${service.slug?.replace('services-', '') || ''}`}
                      className="service-link"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ),
            )}
          </div>

          {/* Emergency Service Spotlight */}
          <div className="emergency-spotlight">
            <div className="emergency-content">
              <div className="emergency-icon">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 48, color: '#2c5530' }}
                >
                  emergency
                </span>
              </div>
              <div className="emergency-text">
                <h3>24/7 Emergency Tree Service</h3>
                <p>
                  When tree emergencies strike, we&apos;re here to help. Our certified crews respond
                  immediately to fallen trees, storm damage, and hazardous situations.
                </p>
                <div className="emergency-buttons">
                  <a href="tel:+18014737548" className="btn btn-emergency">
                    Emergency: (801) 473-7548
                  </a>
                  <BookingButton variant="secondary" size="medium">
                    Schedule Service
                  </BookingButton>
                  <Link href="/services/emergency-tree-service" className="btn btn-outline">
                    Emergency Service Details
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas Section */}
          <div className="service-areas-section">
            <h3>Service Areas</h3>
            <p>
              We provide professional tree services throughout Utah&apos;s most populated areas:
            </p>
            <div className="service-areas-grid">
              <div className="county-group">
                <h4>Davis County</h4>
                <ul className="area-links">
                  <li>
                    <Link href="/service-areas/kaysville-ut-tree-service">
                      Kaysville Tree Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-areas/layton-ut-tree-service">Layton Tree Service</Link>
                  </li>
                  <li>
                    <Link href="/service-areas/bountiful-ut-tree-service">
                      Bountiful Tree Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-areas/farmington-ut-tree-service">
                      Farmington Tree Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-areas/centerville-ut-tree-service">
                      Centerville Tree Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-areas/clearfield-ut-tree-service">
                      Clearfield Tree Service
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="county-group">
                <h4>Weber County</h4>
                <ul className="area-links">
                  <li>
                    <Link href="/service-areas/ogden-ut-tree-service">Ogden Tree Service</Link>
                  </li>
                  <li>
                    <Link href="/service-areas/roy-ut-tree-service">Roy Tree Service</Link>
                  </li>
                  <li>
                    <Link href="/service-areas/north-ogden-ut-tree-service">
                      North Ogden Tree Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-areas/riverdale-ut-tree-service">
                      Riverdale Tree Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-areas/clinton-ut-tree-service">Clinton Tree Service</Link>
                  </li>
                  <li>
                    <Link href="/service-areas/west-haven-ut-tree-service">
                      West Haven Tree Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="all-areas-link">
              <Link href="/service-areas" className="btn btn-outline">
                View All Service Areas →
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="services-cta">
            <div className="cta-box">
              <h3>Ready to Schedule Service?</h3>
              <p>Contact us today for a free estimate on any of our tree services.</p>
              <div className="cta-buttons">
                <BookingButton variant="primary" size="large">
                  Book Service Online
                </BookingButton>
                <BookingButton variant="secondary" size="large">
                  Get Free Estimate
                </BookingButton>
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

          {/* Additional Info */}
          <div className="services-info">
            <div className="info-grid">
              <div className="info-card">
                <h4>
                  <span
                    className="material-symbols-outlined"
                    style={{ verticalAlign: 'middle', fontSize: 22, marginRight: 4 }}
                  >
                    workspace_premium
                  </span>{' '}
                  Licensed & Insured
                </h4>
                <p>Fully licensed, bonded, and insured for your peace of mind.</p>
              </div>
              <div className="info-card">
                <h4>
                  <span
                    className="material-symbols-outlined"
                    style={{ verticalAlign: 'middle', fontSize: 22, marginRight: 4 }}
                  >
                    bolt
                  </span>{' '}
                  Emergency Tree Service
                </h4>
                <p>Available around the clock for storm damage and emergencies.</p>
              </div>
              <div className="info-card">
                <h4>
                  <span
                    className="material-symbols-outlined"
                    style={{ verticalAlign: 'middle', fontSize: 22, marginRight: 4 }}
                  >
                    savings
                  </span>{' '}
                  Free Estimates
                </h4>
                <p>No-obligation quotes for all our tree services.</p>
              </div>
              <div className="info-card">
                <h4>
                  <span
                    className="material-symbols-outlined"
                    style={{ verticalAlign: 'middle', fontSize: 22, marginRight: 4 }}
                  >
                    diversity_3
                  </span>{' '}
                  Family Owned
                </h4>
                <p>Local, family-owned business serving Utah since 2010.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
