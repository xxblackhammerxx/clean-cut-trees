import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tree Service South Ogden, UT | 24/7 Emergency | Clean Cuts Trees | Clean Cuts Trees',
  description:
    'Local tree service in South Ogden, UT—removal, trimming, stump grinding, and 24/7 emergency response.',
  keywords:
    'tree service South Ogden, tree removal South Ogden, emergency tree service, tree trimming South Ogden, Clean Cuts Trees',
}

export default function ServiceAreassouthOgdenUtTreeServicePage() {
  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">Tree Service South Ogden, UT - Clean Cuts Trees</h1>
              </header>

              <div className="page-content-body">
                <>
                  <h1 key={0} className="content-heading">
                    Tree Service in South Ogden Ut Tree Service, UT
                  </h1>
                  <p key={1}>
                    Professional tree care services in South Ogden, Utah. Clean Cuts Trees provides
                    expert tree removal, trimming, and emergency services for residential and
                    commercial properties. Trusted Tree Care in South Ogden, UT South Ogden
                    residents trust Clean Cuts Trees for all their tree service needs. Our certified
                    arborists provide safe, efficient, and professional tree care services. Complete
                    Tree Services in South Ogden: Safe Tree Removal: Proper techniques to remove
                    trees without property damage Tree Trimming & Pruning: Health-focused pruning
                    and aesthetic shaping 24/7 Emergency Response: Immediate help when storms strike
                    Stump Grinding: Professional stump removal and cleanup Tree Health Care: Disease
                    diagnosis and treatment Municipal Services: Commercial and municipal tree
                    maintenance The Clean Cuts Difference in South Ogden What sets us apart in the
                    South Ogden tree service market: Local knowledge of Utah tree species and
                    climate Full licensing and comprehensive insurance Modern equipment and safety
                    protocols Transparent pricing with free estimates Commitment to customer
                    satisfaction Environmental responsibility Emergency Tree Services Available 24/7
                    Tree emergencies don&apos;t wait for business hours. We provide round-the-clock
                    emergency services for: Storm-damaged trees Trees threatening structures Blocked
                    access ways Power line interference Hazardous hanging branches Get your free
                    estimate today! Contact Clean Cuts Trees for professional tree services in South
                    Ogden, UT.
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
