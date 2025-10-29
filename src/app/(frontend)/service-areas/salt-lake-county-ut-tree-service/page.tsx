import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'Tree Service Salt Lake County, UT | 24/7 Emergency Tree Service | Clean Cuts Trees | Clean Cuts Trees',
  description:
    'Clean Cuts Trees is a top rated tree service provider offering tree trimming and removal services in Salt Lake County, Utah. Call the experts on our team today!',
  keywords: 'tree service, Clean Cuts Trees, Utah',
}

export default function ServiceAreassaltLakeCountyUtTreeServicePage() {
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
                  Tree Service Tree Service Salt Lake County, UT, UT - Clean Cuts Trees
                </h1>
              </header>

              <div className="page-content-body">
                <>
                  <h1 key={0} className="content-heading">
                    Tree Service in Salt Lake County Ut Tree Service, UT
                  </h1>
                  <h2 key={1} className="content-heading">
                    Expert Tree Service by High-Quality _Arborists in Salt Lake County, UT_
                  </h2>
                  <p key={2}>
                    In the heart of Salt Lake County, Utah, Clean Cuts Trees stands as a beacon of
                    professional tree care. With a commitment to fostering healthy trees and
                    ensuring the safety of your property, Clean Cuts Trees offers a comprehensive
                    range of tree service options tailored to your specific needs. Our team of
                    certified arborists is not only skilled but also passionate about preserving the
                    natural beauty of your landscape while safeguarding your surroundings.
                  </p>
                  <p key={3}>
                    From routine pruning and trimming to emergency storm response and tree removal,
                    Clean Cuts Trees has the expertise to handle any tree care challenge. Our
                    meticulous approach and dedication to using industry-best practices ensure that
                    your trees and property receive the highest quality care, promoting their
                    longevity and vitality.
                  </p>
                  <p key={4}>Contact Us for Salt Lake County Tree Services</p>
                  <p key={5}>!A tree service job in Salt Lake County, UT</p>
                  <h2 key={6} className="content-heading">
                    Our Tree Service Options in Salt Lake County, UT
                  </h2>
                  <p key={7}>
                    At Clean Cuts Trees, we believe that exceptional tree care goes beyond just
                    cutting branches. It’s about building a relationship with our clients based on
                    trust, transparency, and open communication. Our team of certified arborists is
                    dedicated to understanding your unique needs and providing personalized
                    solutions.
                  </p>
                  <p key={8}>
                    As a local Salt Lake County company, we have a deep understanding of the
                    specific challenges that trees in this region face. From the harsh winter
                    weather to the occasional pest outbreaks, we’ve seen it all. This local
                    expertise allows us to provide informed recommendations and tailored solutions
                    to ensure the health and vitality of your trees.
                  </p>
                  <p key={9}>
                    We pride ourselves on our commitment to customer satisfaction. We believe that
                    every client deserves a clear understanding of our services, pricing, and
                    timelines. Our team is always available to answer your questions, address your
                    concerns, and provide expert advice. And, we will make sure that you recieve
                    clear communication before, during and after the process. We strive to create a
                    positive and hassle-free experience for all of our customers.
                  </p>
                  <p key={10}>
                    Beyond our technical expertise and commitment to customer service, Clean Cuts
                    Trees is dedicated to providing exceptional value. We offer competitive pricing
                    without compromising on quality. Our team of certified arborists uses
                    state-of-the-art equipment and techniques to ensure efficient and effective tree
                    care at competative prices.
                  </p>
                  <p key={11}>
                    When you are looking for the finest tree service in Salt Lake County, look no
                    further than Clean Cuts Trees. Our team will always provide reliable,
                    affordable, and professional tree care services.
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
                      Salt Lake County
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
