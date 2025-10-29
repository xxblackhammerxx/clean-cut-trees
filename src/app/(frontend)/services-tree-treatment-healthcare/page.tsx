import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tree Treatment & Healthcare Services | Professional Tree Health Utah | Clean Cuts Trees',
  description: 'Expert tree healthcare services in Utah. Disease treatment, pest management, and nutritional therapy by certified arborists. Preventive programs for healthier trees.',
  keywords: 'tree healthcare, tree treatment, tree disease treatment, pest management, tree nutrition, Utah arborist, tree health assessment',
}

export default function Services/treeTreatmentHealthcarePage() {
  const isServicePage = false
  const isServiceAreaPage = false

  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">Tree Treatment and Healthcare Services</h1>
              </header>

              <div className="page-content-body">
                <>
      <h1 key={0} className="content-heading">Professional Tree Treatment and Healthcare Services</h1>
      <p key={1}>Clean Cut Trees has been Utah's premier tree healthcare provider for over 15 years, treating more than 50,000 trees across Davis, Weber, and Salt Lake Counties. Our certified arborists and plant pathologists combine advanced diagnostics with proven treatment protocols to restore tree health, prevent disease spread, and extend tree lifespans by decades.</p>
      <h2 key={2} className="content-heading">Expert Tree Health Assessment</h2>
      <p key={3}>Our certified arborists conduct comprehensive tree health evaluations using advanced diagnostic equipment including resistograph testing for internal decay, aerial root zone analysis, and digital canopy assessment. We identify stress factors including pest infestations, fungal diseases, nutrient deficiencies, soil compaction, and environmental stressors unique to Utah's climate conditions.</p>
      <h2 key={4} className="content-heading">Disease Treatment and Prevention</h2>
      <p key={5}>We specialize in treating Utah's most common tree diseases including fire blight in fruit trees, cytospora canker in spruces, oak wilt, and various fungal infections. Our treatment protocols include targeted fungicide applications, soil amendments, trunk injections, and integrated pest management strategies. We maintain a 94% success rate in arresting disease progression when caught early.</p>
      <h2 key={6} className="content-heading">Nutritional Therapy and Soil Health</h2>
      <p key={7}>Utah's alkaline soils often create nutrient deficiencies that weaken trees. Our soil scientists analyze pH levels, nutrient content, and microbial activity to develop customized fertilization programs. We provide deep root fertilization, mycorrhizal inoculation, organic matter enhancement, and pH correction treatments. Our nutrient therapy programs have improved tree vigor in 98% of treated properties.</p>
      <h2 key={8} className="content-heading">Integrated Pest Management</h2>
      <p key={9}>We combat Utah's most destructive tree pests including emerald ash borer, spider mites, aphids, scale insects, and bark beetles. Our IPM approach combines biological controls, targeted treatments, and preventive measures while minimizing environmental impact. We use systemic treatments, beneficial insect releases, and precision timing based on pest life cycles and local weather patterns.</p>
      <h2 key={10} className="content-heading">Preventive Healthcare Programs</h2>
      <p key={11}>Prevention is the most cost-effective approach to tree healthcare. Our annual programs include bi-annual health assessments, seasonal treatments timed to Utah's climate patterns, proactive pest monitoring, soil health maintenance, and stress mitigation strategies. Properties enrolled in our preventive programs experience 87% fewer emergency tree situations and significant long-term cost savings.</p>
      <h2 key={12} className="content-heading">Why Choose Clean Cut Trees for Tree Healthcare</h2>
      <p key={13}>Our team includes ISA Certified Arborists, licensed pest control professionals, and soil scientists with specialized Utah experience. We maintain state-of-the-art diagnostic equipment, use only proven treatment methods, and provide detailed treatment plans with progress monitoring. Our 15-year track record includes successful treatment of heritage trees, large-scale commercial properties, and residential landscapes throughout Northern Utah.</p>
      <h3 key={14} className="content-heading">Schedule Tree Health Assessment: (801) 473-7548</h3>
      <p key={15}>Protect your trees with professional healthcare services. Contact Clean Cut Trees today for comprehensive tree treatment and ongoing health management programs throughout Davis, Weber, and Salt Lake Counties.</p>
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
