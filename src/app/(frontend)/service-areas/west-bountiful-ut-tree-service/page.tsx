import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tree Service West Bountiful, UT | 24/7 Emergency | Clean Cuts Trees | Clean Cuts Trees',
  description:
    'Local tree service in West Bountiful, UT—removal, trimming, stump grinding, and 24/7 emergency response.',
  keywords:
    'tree service West Bountiful, tree removal West Bountiful, emergency tree service, tree trimming West Bountiful, Clean Cuts Trees',
}

export default function ServiceAreaswestBountifulUtTreeServicePage() {
  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">Tree Service West Bountiful, UT - Clean Cuts Trees</h1>
              </header>

              <div className="page-content-body">
                <>
                  <h1 key={0} className="content-heading">
                    Tree Service in West Bountiful Ut Tree Service, UT
                  </h1>
                  <p key={1}>
                    Expert tree services in West Bountiful, Utah. Clean Cuts Trees provides
                    professional tree removal, trimming, and emergency services with a focus on
                    safety and customer satisfaction. Professional Tree Care in West Bountiful, UT
                    West Bountiful's beautiful homes and landscapes deserve expert tree care. Clean
                    Cuts Trees provides comprehensive services to maintain your property's value and
                    safety. Complete Tree Services in West Bountiful: Expert Tree Removal: Safe,
                    efficient removal with property protection Professional Tree Trimming:
                    Health-focused pruning and shaping Emergency Tree Services: 24/7 response to
                    urgent situations Stump Grinding: Complete stump removal and site cleanup Tree
                    Health Assessment: Professional evaluation and treatment Landscape Services:
                    Land clearing and site preparation Why West Bountiful Chooses Clean Cuts Trees
                    Our reputation in West Bountiful is built on: Certified arborist expertise Full
                    licensing and comprehensive insurance Professional equipment and techniques
                    Competitive pricing with transparency Reliable service and communication
                    Community-focused business practices Emergency Tree Services Available 24/7 When
                    tree emergencies occur in West Bountiful, we respond quickly: Storm damage
                    assessment and cleanup Fallen trees on homes or vehicles Hazardous branch
                    situations Access restoration Safety evaluations Trust Clean Cuts Trees for
                    professional tree services in West Bountiful, UT. Contact us today for your free
                    estimate.
                  </p>
                </>
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
                  </span>
                  (801) 473-7548
                </Link>
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
                    </span>
                    Licensed & Insured
                  </li>
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>
                    24/7 Emergency Service
                  </li>
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>
                    Free Estimates
                  </li>
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>
                    Family Owned & Operated
                  </li>
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>
                    Professional Equipment
                  </li>
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>
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
