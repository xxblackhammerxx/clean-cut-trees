import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Safe Tree Removal Utah | Professional Tree Removal Services Clean Cut Trees | Clean Cuts Trees',
  description: 'Expert safe tree removal services in Utah. Advanced techniques, comprehensive safety protocols, and property protection. Emergency and scheduled removal available.',
  keywords: 'safe tree removal, tree removal services, professional tree removal, emergency tree removal, Utah tree removal',
}

export default function Services/safeTreeRemovalPage() {
  const isServicePage = false
  const isServiceAreaPage = false

  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">Safe Tree Removal Services</h1>
              </header>

              <div className="page-content-body">
                <>
      <h1 key={0} className="content-heading">Professional Safe Tree Removal Services</h1>
      <p key={1}>Clean Cut Trees has been Utah's trusted safe tree removal specialist for over 15 years, safely removing thousands of trees while protecting property, utilities, and surrounding landscapes. Our certified arborists and trained removal crews use advanced techniques, specialized equipment, and comprehensive safety protocols to ensure every removal is completed without incident or damage to your property.</p>
      <h2 key={2} className="content-heading">Comprehensive Pre-Removal Assessment</h2>
      <p key={3}>Safe tree removal begins with thorough assessment and planning. Our certified arborists evaluate tree condition and structural integrity, identify potential hazards including power lines and structures, assess site access and equipment requirements, and develop detailed removal strategies. We consider factors like tree lean, decay patterns, surrounding obstacles, and environmental conditions to ensure the safest possible removal approach.</p>
      <h2 key={4} className="content-heading">Advanced Removal Techniques</h2>
      <p key={5}>We employ multiple specialized removal techniques based on site conditions and tree characteristics. Sectional removal for trees near structures dismantles trees piece by piece using advanced rigging systems. Crane-assisted removal provides precise control for large trees in tight spaces. Directional felling safely brings down trees in open areas. Our crews are expert in controlled lowering techniques, precision cutting, and advanced rigging systems that eliminate unpredictable tree behavior.</p>
      <h2 key={6} className="content-heading">Professional Equipment and Safety Protocols</h2>
      <p key={7}>Our safety-first approach includes state-of-the-art equipment and strict protocols. We use professional-grade chainsaws with safety features, climbing equipment certified for arborist work, rigging hardware rated for tree loads, and crane services for complex removals. All crew members wear comprehensive PPE, follow OSHA safety standards, maintain constant communication during operations, and establish secure work zones to protect property and bystanders.</p>
      <h2 key={8} className="content-heading">Property and Landscape Protection</h2>
      <p key={9}>Protecting your property during tree removal is our priority. We use protective barriers for structures and vehicles, plywood and padding for sensitive landscaping, strategic placement of debris to minimize impact, and careful route planning for equipment access. Our crews work methodically to preserve existing trees, gardens, hardscaping, and lawn areas. We guarantee zero damage to your property when proper access is provided.</p>
      <h2 key={10} className="content-heading">Utility Coordination and Clearance</h2>
      <p key={11}>Trees near power lines and utilities require specialized coordination. We work directly with utility companies to ensure safe clearances, coordinate temporary service disconnection when necessary, use specialized techniques for working near energized lines, and maintain required safety distances throughout the removal process. Our crews are trained in electrical hazard recognition and follow strict protocols when working near any utility infrastructure.</p>
      <h2 key={12} className="content-heading">Complete Cleanup and Stump Options</h2>
      <p key={13}>Safe tree removal includes complete site cleanup and restoration. We provide thorough debris removal and hauling, professional wood chipping for organic disposal, site raking and restoration, and optional stump grinding services. We can also cut wood to specified lengths for firewood, deliver wood chips for landscaping use, and provide root zone treatment to prevent regrowth. Your property is left clean and ready for new landscaping or other uses.</p>
      <h2 key={14} className="content-heading">Insurance and Liability Protection</h2>
      <p key={15}>Clean Cut Trees carries comprehensive insurance including general liability, worker's compensation, and property damage coverage. We provide certificates of insurance before beginning work, maintain current licensing and bonding, follow all local permit requirements, and document all work with detailed photography. Our insurance and safety record demonstrates our commitment to protecting both our crews and your property interests.</p>
      <h2 key={16} className="content-heading">Emergency and Scheduled Removal Services</h2>
      <p key={17}>We provide both emergency and scheduled tree removal services throughout Utah. Emergency services respond quickly to storm-damaged, fallen, or immediately hazardous trees with 24/7 availability. Scheduled removals allow for optimal planning, timing, and coordination with other landscape projects. Both services maintain our same high safety standards and complete property protection protocols.</p>
      <h3 key={18} className="content-heading">Safe Tree Removal Estimate: (801) 473-7548</h3>
      <p key={19}>Trust your tree removal to Utah's safety experts. Contact Clean Cut Trees for professional assessment and guaranteed safe removal services. Our certified crews protect your property throughout Davis, Weber, and Salt Lake Counties.</p>
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
