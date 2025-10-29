import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tree Service Fruit Heights, UT | 24/7 Emergency | Clean Cuts Trees | Clean Cuts Trees',
  description:
    'Local tree service in Fruit Heights, UT—removal, trimming, stump grinding, and 24/7 emergency response.',
  keywords:
    'tree service Fruit Heights, tree removal Fruit Heights, emergency tree service, tree trimming Fruit Heights, Clean Cuts Trees',
}

export default function ServiceAreasfruitHeightsUtTreeServicePage() {
  const isServicePage = false
  const isServiceAreaPage = true

  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">Tree Service Fruit Heights, UT - Clean Cuts Trees</h1>
              </header>

              <div className="page-content-body">
                <>
                  <h1 key={0} className="content-heading">
                    Tree Service in Fruit Heights Ut Tree Service, UT
                  </h1>
                  <p key={1}>
                    Expert tree services in Fruit Heights, Utah. Clean Cuts Trees offers
                    professional tree removal, trimming, and emergency services with a focus on
                    safety and customer satisfaction. Professional Tree Care in Fruit Heights, UT
                    Fruit Heights' beautiful landscape deserves expert tree care. Clean Cuts Trees
                    provides comprehensive tree services to maintain your property's beauty and
                    safety. Full Range of Tree Services in Fruit Heights: Expert Tree Removal: Safe
                    removal with minimal landscape disruption Professional Tree Trimming: Pruning
                    for health, safety, and aesthetics Emergency Tree Response: Quick response to
                    storm damage and emergencies Stump Grinding Services: Complete stump removal and
                    site restoration Tree Health Evaluation: Assessment and treatment
                    recommendations Landscape Clearing: Site preparation and lot clearing Why Fruit
                    Heights Chooses Clean Cuts Trees Our reputation in Fruit Heights is built on:
                    Certified arborist expertise Complete licensing and insurance State-of-the-art
                    equipment Competitive and fair pricing Reliable and timely service Clean job
                    site practices 24/7 Emergency Tree Service in Fruit Heights When tree
                    emergencies occur, we're ready to respond immediately: Fallen trees on homes or
                    cars Storm damage assessment and cleanup Dangerous hanging branches Trees
                    blocking roads or driveways Power line clearance issues Contact Clean Cuts Trees
                    today for a free estimate on tree services in Fruit Heights, UT. We're your
                    local tree care professionals.
                  </p>
                </>
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
                      Fruit Heights
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
