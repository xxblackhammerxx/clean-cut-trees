import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'Tree Service Weber County, UT | 24/7 Emergency Tree Service | Clean Cuts Trees | Clean Cuts Trees',
  description:
    'Clean Cuts Trees is a top rated tree service provider offering tree trimming and removal services in Weber County, Utah. Call the experts on our team today!',
  keywords: 'tree service, Clean Cuts Trees, Utah',
}

export default function ServiceAreasweberCountyUtTreeServicePage() {
  const isServicePage = false
  const isServiceAreaPage = true

  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">
                  Tree Service Tree Service Weber County, UT, UT - Clean Cuts Trees
                </h1>
              </header>

              <div className="page-content-body">
                <>
                  <h1 key={0} className="content-heading">
                    Tree Service in Weber County Ut Tree Service, UT
                  </h1>
                  <h2 key={1} className="content-heading">
                    Top-Notch Tree Service by Skilled _Arborists in Weber County, UT_
                  </h2>
                  <p key={2}>
                    The majestic trees on your Weber County property add aesthetic appeal, shade,
                    and even increase your property value. However, like any living thing, trees
                    require careful support to thrive. Neglected trees can easily become overgrown,
                    diseased, or hazardous.
                  </p>
                  <p key={3}>
                    Clean Cuts Trees, a premier tree company in Weber County, UT, offers
                    professional tree care service to residents of Weber County and surrounding
                    areas. Our experienced arborists are dedicated to keeping your trees healthy and
                    your property safe. From routine trimming and pruning to emergency storm
                    response and tree removal, Clean Cuts Trees provides a comprehensive range of
                    services tailored to your specific needs.
                  </p>
                  <p key={4}>
                    Whether you require complete tree removal, would like a hazardous limb trimmed,
                    or require professional land clearing services, Clean Cuts Trees has the
                    expertise and dedication to provide top-notch service.
                  </p>
                  <p key={5}>Contact Us for Weber County Tree Services</p>
                  <p key={6}>!A tree service job in Weber County, UT</p>
                  <h2 key={7} className="content-heading">
                    Our Tree Service Options in Weber County, UT
                  </h2>
                  <p key={8}>
                    Nestled within Weber County, Utah, Clean Cuts Trees isn’t just another tree
                    service company; we are your local experts with a deep understanding of the
                    unique challenges faced by the region’s trees. With a team of certified
                    arborists who call Weber County home, Clean Cuts Trees offers a personalized
                    approach to tree care that goes beyond textbook solutions.
                  </p>
                  <p key={9}>
                    Our knowledge extends beyond certifications. We have witnessed firsthand the
                    impact of local weather patterns, common pests, and specific diseases that can
                    plague Weber County’s trees. This local expertise translates into informed
                    recommendations and tailored solutions specifically designed to address the
                    needs of your trees.
                  </p>
                  <p key={10}>
                    But our team also understands that expertise is only half the equation. Our
                    unwavering commitment to customer service ensures a transparent and
                    collaborative experience. Forget confusing jargon and impersonal interactions.
                    Clean Cuts Trees prioritizes clear communication throughout the process. We
                    will  walk you through initial consultations, explain their recommendations, and
                    keep you informed every step of the way. This open dialogue empowers you to make
                    informed decisions about your property with confidence.
                  </p>
                  <p key={11}>
                    Clean Cuts Trees views ourselves as partners in maintaining the beauty and
                    safety of your Weber County landscape. Whether you’re concerned about a beloved
                    oak struggling with a local disease or a storm-damaged branch threatening your
                    home, we approach every project with respect for both the environment and your
                    property. Our goal isn’t just a one-time fix; it’s building long-lasting
                    relationships with the community they’re part of. So, for exceptional tree care
                    delivered with a local touch and unwavering customer commitment, look no further
                    than Clean Cuts Trees.
                  </p>
                  <h3 key={12} className="content-heading">
                    Our Professional Tree Care Services include:
                  </h3>
                  <p key={13}>
                    Tree Trimming & Pruning Tree Removal Services Emergency Tree Service Municipal
                    Tree Service Land & Lot Clearing And, much more!
                  </p>
                  <h4 key={14} className="content-heading">
                    Call us now 801-473-7548
                  </h4>
                  <h3 key={15} className="content-heading">
                    Get A Free Estimate
                  </h3>
                  <p key={16}>[](tel:+18014737548)</p>
                  <p key={17}>Contact Us Today for More Info!</p>
                  <h3 key={18} className="content-heading">
                    801-473-7548
                  </h3>
                  <h1 key={19} className="content-heading">
                    !A banner showing Clean Cuts Trees as a top-rated tree service.
                  </h1>
                  <p key={20}>!logo copy</p>
                  <p key={21}>
                    Clean Cuts Trees is the #1 tree service company in Fruit Heights serving all of
                    Davis, Salt Lake and Weber County, Utah, & surrounding areas.
                  </p>
                  <p key={22}>!badge copy</p>
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
                      Weber County
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
