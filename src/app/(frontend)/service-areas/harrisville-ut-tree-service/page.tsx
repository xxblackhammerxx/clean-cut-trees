import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tree Service Harrisville, UT | 24/7 Emergency | Clean Cuts Trees | Clean Cuts Trees',
  description:
    'Local tree service in Harrisville, UT—removal, trimming, stump grinding, and 24/7 emergency response.',
  keywords:
    'tree service Harrisville, tree removal Harrisville, emergency tree service, tree trimming Harrisville, Clean Cuts Trees',
}

export default function ServiceAreasharrisvilleUtTreeServicePage() {
  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">Tree Service Harrisville, UT - Clean Cuts Trees</h1>
              </header>

              <div className="page-content-body">
                <>
                  <h1 key={0} className="content-heading">
                    Tree Service in Harrisville Ut Tree Service, UT
                  </h1>
                  <p key={1}>
                    Professional tree care in Harrisville, Utah. Clean Cuts Trees offers
                    comprehensive tree services including removal, trimming, and emergency response
                    with certified arborists. Trusted Tree Services in Harrisville, UT Harrisville
                    property owners depend on Clean Cuts Trees for professional tree care that
                    enhances safety and property value. Full Tree Service Solutions in Harrisville:
                    Safe Tree Removal: Precision removal with minimal impact Tree Trimming &
                    Pruning: Health and safety-focused pruning Emergency Tree Response: 24/7
                    availability for urgent needs Stump Grinding: Professional stump removal and
                    restoration Tree Health Care: Disease management and prevention Municipal
                    Services: Commercial and city property maintenance The Clean Cuts Advantage in
                    Harrisville What makes us Harrisville&apos;s preferred tree service: ISA
                    certified arborists on staff Complete licensing and insurance coverage Modern
                    equipment and safety standards Fair pricing with free estimates Local expertise
                    and community involvement Commitment to environmental responsibility 24/7
                    Emergency Tree Services Our emergency response team is always ready for:
                    Storm-damaged trees and cleanup Trees threatening structures Dangerous hanging
                    branches Blocked driveways and walkways Power line tree issues Experience
                    professional tree care in Harrisville, UT. Contact Clean Cuts Trees for your
                    free estimate and consultation.
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
