import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tree Removal Service - Clean Cuts Trees | Clean Cuts Trees',
  description:
    'We are so excited to announce our partnership with Real Salt Lake and America First Credit Union and our passion Clean Cuts Trees. Now, when you head to',
  keywords: 'tree service, Clean Cuts Trees, Utah',
}

export default function RealSaltLakePartnershipPage() {
  const isServicePage = false
  const isServiceAreaPage = false

  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">Tree Removal Service - Clean Cuts Trees</h1>
              </header>

              <div className="page-content-body">
                <>
                  <h1 key={0} className="content-heading">
                    Real Salt Lake Partnership
                  </h1>
                  <h1 key={1} className="content-heading">
                    Clean Cuts Trees wins the Small Business Showcase at the awards ceremony with
                    Real Salt Lake and America First Credit Union!
                  </h1>
                  <p key={2}>
                    We are so excited to announce our partnership with Real Salt Lake and America
                    First Credit Union and our passion Clean Cuts Trees. Now, when you head to
                    America First Field, you will see our signage in various areas with us
                    representing!
                  </p>
                  <p key={3}>Clean Cuts Trees at the Awards Ceremony</p>
                  <p key={4}>!image2</p>
                  <p key={5}>
                    Clean Cuts Trees, a local tree care company, recently celebrated a significant
                    victory by winning the coveted Small Business Showcase hosted by America First
                    Credit Union in partnership with Real Salt Lake. This prestigious award
                    recognizes outstanding local businesses and provides them with a valuable
                    platform for growth and increased visibility.
                  </p>
                  <p key={6}>
                    Five finalists competed for the coveted prize package, which includes valuable
                    marketing support such as prominent signage at America First Field, home of Real
                    Salt Lake, and digital assets designed to enhance their online presence. The
                    showcase exemplifies America First Credit Union’s commitment to fostering a
                    thriving local business community by providing a unique opportunity for small
                    businesses to shine.
                  </p>
                  <p key={7}>!image5</p>
                  <p key={8}>!image1</p>
                  <p key={9}>
                    The Small Business Showcase has a proven track record of success, empowering
                    previous winners with valuable marketing exposure and a significant boost in
                    business growth. This initiative not only benefits the winning businesses but
                    also strengthens the local economy by supporting and celebrating the
                    entrepreneurial spirit within the community.
                  </p>
                  <p key={10}>More Pictures from this Awesome Event!</p>
                  <p key={11}>!image3</p>
                  <p key={12}>!image6</p>
                  <p key={13}>!image4</p>
                  <h3 key={14} className="content-heading">
                    Get A Free Estimate
                  </h3>
                  <p key={15}>[](tel:+18014737548)</p>
                  <p key={16}>Contact Us Today for More Info!</p>
                  <h3 key={17} className="content-heading">
                    801-473-7548
                  </h3>
                  <h1 key={18} className="content-heading">
                    !A banner showing Clean Cuts Trees as a top-rated tree service.
                  </h1>
                  <p key={19}>!logo copy</p>
                  <p key={20}>
                    Clean Cuts Trees is the #1 tree service company in Fruit Heights serving all of
                    Davis, Salt Lake and Weber County, Utah, & surrounding areas.
                  </p>
                  <p key={21}>!badge copy</p>
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
