import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'Tree Service Washington Terrace, UT | 24/7 Emergency | Clean Cuts Trees | Clean Cuts Trees',
  description:
    'Local tree service in Washington Terrace, UT—removal, trimming, stump grinding, and 24/7 emergency response.',
  keywords:
    'tree service Washington Terrace, tree removal Washington Terrace, emergency tree service, tree trimming Washington Terrace, Clean Cuts Trees',
}

export default function ServiceAreaswashingtonTerraceUtTreeServicePage() {
  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">
                  Tree Service Washington Terrace, UT - Clean Cuts Trees
                </h1>
              </header>

              <div className="page-content-body">
                <>
                  <h1 key={0} className="content-heading">
                    Tree Service in Washington Terrace Ut Tree Service, UT
                  </h1>
                  <p key={1}>
                    Quality tree services in Washington Terrace, Utah. Clean Cuts Trees provides
                    expert tree removal, trimming, and emergency services for residential and
                    commercial properties. Expert Tree Care in Washington Terrace, UT Washington
                    Terrace residents choose Clean Cuts Trees for reliable, professional tree
                    services that prioritize safety and property protection. Complete Tree Services
                    in Washington Terrace: Professional Tree Removal: Safe, efficient tree removal
                    services Tree Trimming & Pruning: Expert pruning for tree health and safety 24/7
                    Emergency Services: Immediate response to tree emergencies Stump Grinding:
                    Complete stump removal and site cleanup Tree Assessment: Professional evaluation
                    and recommendations Land Clearing: Site preparation and development clearing Why
                    Washington Terrace Trusts Clean Cuts Trees Our commitment to Washington Terrace
                    includes: Certified arborist expertise Licensed and insured operations
                    Professional-grade equipment Competitive pricing with free estimates Prompt and
                    reliable service Community-focused approach Emergency Tree Service Available
                    24/7 Tree emergencies require immediate attention. We provide: Storm damage
                    cleanup and assessment Fallen tree removal Hazardous branch removal Property
                    access restoration Emergency safety evaluations Choose Clean Cuts Trees for
                    professional tree services in Washington Terrace, UT. Contact us today for your
                    free consultation.
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
