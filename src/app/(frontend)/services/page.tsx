import Link from 'next/link'
import { getPayload } from 'payload'

import config from '@/payload.config'

export const metadata = {
  title: 'Tree Services - Clean Cuts Trees | Professional Tree Care in Utah',
  description:
    'Explore our comprehensive tree services including tree removal, trimming, emergency service, and land clearing throughout Utah.',
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
          <h1>Our Tree Services</h1>
          <p>Professional tree care services throughout Davis, Weber, and Salt Lake Counties</p>
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
            {services.docs.map((service: any) => (
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
            ))}
          </div>

          {/* Call to Action */}
          <div className="services-cta">
            <div className="cta-box">
              <h3>Ready to Schedule Service?</h3>
              <p>Contact us today for a free estimate on any of our tree services.</p>
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
                  24/7 Emergency Service
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
