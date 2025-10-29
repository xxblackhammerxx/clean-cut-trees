import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:
    'Tree Service Hooper, UT | 24/7 Emergency Tree Service | Clean Cuts Trees | Clean Cuts Trees',
  description:
    'Clean Cuts is uniquely situated and conveniently located “in the middle of everything.” Hooper is not just a great place to raise a family, it is also a great',
  keywords: 'tree service, Clean Cuts Trees, Utah',
}

export default function ServiceAreashooperUtTreeServicePage() {
  const isServicePage = false
  const isServiceAreaPage = true

  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">Tree Service Hooper, UT - Clean Cuts Trees</h1>
              </header>

              <div className="page-content-body">
                <>
                  <h1 key={0} className="content-heading">
                    Tree Service in Hooper Ut Tree Service, UT
                  </h1>
                  <h3 key={1} className="content-heading">
                    TREE REMOVAL SERVICES
                  </h3>
                  <h1 key={2} className="content-heading">
                    Professional Tree Services by _Experienced Arborists in Hooper_
                  </h1>
                  <p key={3}>
                    Clean Cuts is uniquely situated and conveniently located “in the middle of
                    everything.” Hooper is not just a great place to raise a family, it is also a
                    great place to enjoy nature through the nearby magnificent national forests.
                  </p>
                  <p key={4}>
                    Our arborists at Clean Cuts Trees have years of experience servicing trees and
                    land for both residential and commercial properties in Hooper, UT. There is no
                    job too big or too small for our experienced team. Rest easy knowing that our
                    licensed, insured, and certified technicians will complete every job with the
                    highest quality and satisfaction.
                  </p>
                  <p key={5}>
                    Give us a call today for all your tree service needs in Hooper, UT! This
                    includes tree trimming, tree removal, tree pruning and maintenance, municipal
                    tree services, land clearing, and emergency tree services when the weather and
                    elements get the best of your trees.
                  </p>
                  <p key={6}>For Hooper Tree Services - Click Here</p>
                  <h3 key={7} className="content-heading">
                    BEST TREE TRIMING SERVICE
                  </h3>
                  <h2 key={8} className="content-heading">
                    Tree Services in _Hooper, UT_
                  </h2>
                  <p key={9}>
                    At Clean Cuts Trees, your satisfaction is our top priority. We may use the
                    newest technology and equipment, but we believe in genuine old-fashioned common
                    courtesy and guarantee that you will receive second-to-none customer service by
                    all our experienced technicians in Hooper, UT. As a family-owned business, it is
                    our goal to make every customer feel like they are a part of our family too –
                    because that is how we treat our customers – as family.
                  </p>
                  <p key={10}>
                    We use the safest, most advanced methods, while fine-tuning our services, as we
                    have grown. Whether you need basic tree maintenance or emergency cleanup, our
                    arborists have you covered. Safety has always been our priority. All our
                    arborists are certified and professionally trained so you can rest assured that
                    your property is in the best hands. At Clean Cuts Trees, we can guarantee you
                    the highest quality and customer service in the industry. We have hundreds of
                    loyal customers across the Hooper, UT, area thanks to not only our outstanding
                    service, but also our competitive pricing.
                  </p>
                  <p key={11}>
                    Our work is guaranteed, and we never stop until the job is perfect.
                  </p>
                  <p key={12}>
                    Contact us today to receive a free quote or schedule a service. Our friendly
                    customer service representatives will be more than happy to answer any questions
                    and guide you through our tree services in Hooper, UT. We look forward to
                    serving you!
                  </p>
                  <h3 key={13} className="content-heading">
                    Our Professional Tree Care Services include:
                  </h3>
                  <p key={14}>
                    Tree Trimming & Pruning Tree Removal Services Emergency Tree Service Municipal
                    Tree Service Land & Lot Clearing And, much more!
                  </p>
                  <h4 key={15} className="content-heading">
                    Call us now 801-473-7548
                  </h4>
                  <p key={16}>!81969417_3408989879143441_7878023739550466048_o</p>
                  <h3 key={17} className="content-heading">
                    Get A Free Estimate
                  </h3>
                  <p key={18}>[](tel:+18014737548)</p>
                  <p key={19}>Contact Us Today for More Info!</p>
                  <h3 key={20} className="content-heading">
                    801-473-7548
                  </h3>
                  <h1 key={21} className="content-heading">
                    !A banner showing Clean Cuts Trees as a top-rated tree service.
                  </h1>
                  <p key={22}>!logo copy</p>
                  <p key={23}>
                    Clean Cuts Trees is the #1 tree service company in Fruit Heights serving all of
                    Davis, Salt Lake and Weber County, Utah, & surrounding areas.
                  </p>
                  <p key={24}>!badge copy</p>
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
                      Hooper
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
