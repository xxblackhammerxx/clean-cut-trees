import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commercial Property Tree Management | Business Tree Services Utah | Clean Cuts Trees',
  description:
    'Professional commercial tree management for Utah businesses. Certified maintenance programs, risk assessment, compliance documentation. Trusted by 200+ properties.',
  keywords:
    'commercial tree management, business tree services, commercial property maintenance, Utah commercial arborist',
}

export default function PropertyManagementTreesPage() {
  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">Commercial Property Tree Management Services</h1>
              </header>

              <div className="page-content-body">
                <>
                  <h1 key={0} className="content-heading">
                    Commercial Property Tree Management Services
                  </h1>
                  <p key={1}>
                    Over 200 Utah commercial properties trust Clean Cut Trees for comprehensive tree
                    management services. Our certified arborists have developed specialized
                    protocols for office complexes, retail centers, industrial sites, and healthcare
                    facilities, maintaining over 15,000 commercial trees with a 98% client retention
                    rate and documented liability risk reduction of 85%.
                  </p>
                  <h2 key={2} className="content-heading">
                    Comprehensive Commercial Tree Services
                  </h2>
                  <p key={3}>
                    Our commercial services include preventive maintenance programs, risk
                    assessments and hazard mitigation, seasonal pruning schedules, emergency
                    response services, compliance documentation for insurance and regulations, and
                    integrated pest management. We work with property managers to develop customized
                    maintenance plans that minimize business disruption while maximizing tree health
                    and safety.
                  </p>
                  <h2 key={4} className="content-heading">
                    Commercial Service Packages
                  </h2>
                  <p key={5}>
                    Bronze Package includes annual tree health assessments and basic pruning as
                    needed. Silver Package adds bi-annual inspections, seasonal maintenance
                    programs, and pest monitoring. Gold Package provides quarterly comprehensive
                    care, priority emergency response, and detailed compliance reporting. All
                    packages include liability insurance coverage and professional documentation.
                  </p>
                  <h2 key={6} className="content-heading">
                    ROI and Risk Management Benefits
                  </h2>
                  <p key={7}>
                    Professional commercial tree management provides measurable returns through
                    reduced liability exposure, lower insurance premiums, enhanced property values,
                    and improved tenant satisfaction. Our documented case studies show that
                    proactive tree care costs 65% less than reactive emergency services while
                    preventing 90% of tree-related property damage incidents.
                  </p>
                  <h3 key={8} className="content-heading">
                    Commercial Services Contact: (801) 473-7548
                  </h3>
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
