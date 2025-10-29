import StructuredData from '@/components/StructuredData'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'Tree Service North Salt Lake, UT | 24/7 Emergency Tree Service | Clean Cuts Trees | Clean Cuts Trees',
  description:
    'Clean Cuts is uniquely situated and conveniently located “in the middle of everything.” North Salt Lake is not just a great place to raise a family, it is',
  keywords: 'tree service, Clean Cuts Trees, Utah',
}

export default function ServiceAreasnorthSaltLakeUtTreeServicePage() {
  const isServicePage = false
  const isServiceAreaPage = true

  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">Tree Service North Salt Lake, UT - Clean Cuts Trees</h1>
              </header>

              <div className="page-content-body">
                <StructuredData cityName="North Salt Lake" phoneNumber="(801) 473-7548" />
                <div className="markdown-content service-area-content">
                  <h2 className="service-heading section-heading">
                    Local Expertise: Understanding North Salt Lake's Urban Canopy
                  </h2>

                  <p className="service-paragraph section-paragraph">
                    At 4,200 feet elevation, North Salt Lake presents unique environmental
                    conditions that require specialized knowledge and experience. Our team has
                    developed comprehensive expertise working with the predominant tree species
                    thriving in this area, including London plane, Silver maple, Austrian pine,
                    Flowering pear, Linden. Each species requires specific care protocols that our
                    certified arborists have perfected through years of hands-on experience in Salt
                    Lake County.
                  </p>

                  <h3 className="service-subheading section-subheading">
                    London plane Specialist Care
                  </h3>

                  <p className="service-paragraph section-paragraph">
                    London plane trees are particularly prominent in North Salt Lake, requiring
                    specialized attention due to their specific growth patterns and susceptibility
                    to local environmental stressors. Our expert team provides comprehensive care
                    including structural pruning, disease prevention, and seasonal maintenance
                    tailored to optimize their health and longevity.
                  </p>

                  <h3 className="service-subheading section-subheading">
                    Comprehensive Species Management
                  </h3>

                  <p className="service-paragraph section-paragraph">
                    Our arborists maintain detailed knowledge of each species' requirements:
                  </p>

                  <ul className="service-list section-list">
                    <li className="service-list-item section-list-item">
                      Silver maple: Strategic pruning and health monitoring
                    </li>
                    <li className="service-list-item section-list-item">
                      Austrian pine: Specialized disease prevention and treatment
                    </li>
                    <li className="service-list-item section-list-item">
                      Flowering pear: Growth management and structural support
                    </li>
                    <li className="service-list-item section-list-item">
                      Linden: Environmental stress mitigation and care
                    </li>
                  </ul>

                  <h2 className="service-heading section-heading">
                    Addressing North Salt Lake-Specific Tree Care Challenges
                  </h2>

                  <p className="service-paragraph section-paragraph">
                    North Salt Lake's unique location and environmental conditions present specific
                    challenges that our experienced team addresses with proven, scientific
                    approaches:
                  </p>

                  <h3 className="service-subheading section-subheading">
                    Primary Challenge Management
                  </h3>

                  <p className="service-paragraph section-paragraph">
                    Refinery proximity considerations: Our team has developed specialized protocols
                    to address this common issue in North Salt Lake. Through comprehensive
                    assessment and targeted treatment plans, we provide effective solutions that
                    protect your trees' long-term health.
                  </p>

                  <p className="service-paragraph section-paragraph">
                    Industrial area transitions: This environmental factor significantly impacts
                    tree health in North Salt Lake. Our preventive care programs and responsive
                    treatment options ensure your trees remain healthy and structurally sound.
                  </p>

                  <p className="service-paragraph section-paragraph">
                    Creek management: Our expertise in managing this challenge has made us the
                    trusted choice for North Salt Lake property owners who want to maintain healthy,
                    beautiful trees despite local environmental pressures.
                  </p>
                </div>
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
                    <h3>Serving North Salt Lake</h3>
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
