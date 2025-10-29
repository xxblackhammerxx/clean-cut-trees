import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Photo Gallery - Clean Cuts Trees | Clean Cuts Trees',
  description:
    'Clean Cuts Trees is the #1 tree service company in Fruit Heights serving all of Davis, Salt Lake and Weber County, Utah, & surrounding areas.',
  keywords: 'tree service, Clean Cuts Trees, Utah',
}

export default function PhotoGalleryPage() {
  const isServicePage = false
  const isServiceAreaPage = false

  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">Photo Gallery - Clean Cuts Trees</h1>
              </header>

              <div className="page-content-body">
                <>
                  <h1 key={0} className="content-heading">
                    Photo Gallery
                  </h1>
                  <p key={1}>
                    ![](/content-migration/assets/49c64b80b755991cd9d6b21f7778cb0d19d47078.jpg)
                  </p>
                  <p key={2}>
                    ![](/content-migration/assets/ca918983e0515be150f9cf13b91a7e303e2eaa35.jpg)
                  </p>
                  <p key={3}>![](/content-migration/assets/677-400x284.jpg)</p>
                  <p key={4}>![](/content-migration/assets/678-400x284.jpg)</p>
                  <p key={5}>
                    ![](/content-migration/assets/ca052a041cbe80ab5352945eff3586f457009c6b.jpg)
                  </p>
                  <p key={6}>
                    ![](/content-migration/assets/7180d33567c6071f5c9c6762337cb04079de820e.jpg)
                  </p>
                  <p key={7}>
                    ![](/content-migration/assets/4114cb4028bbfc336538183363901d093566db91.jpg)
                  </p>
                  <p key={8}>
                    ![](/content-migration/assets/77810ed39db689c5120a88bce0fd8993aa36004e.jpg)
                  </p>
                  <p key={9}>
                    ![](/content-migration/assets/48378311_2415749735134132_3352690035768950784_o-400x284.jpg)
                  </p>
                  <p key={10}>
                    ![](/content-migration/assets/99d38a2bcd7869f7b569f2dde0a720c564f25765.jpg)
                  </p>
                  <p key={11}>
                    ![](/content-migration/assets/115254506_4093103014065454_3490691944237121999_n-400x284.jpg)
                  </p>
                  <p key={12}>
                    ![](/content-migration/assets/0a45d9b1dd26287a7572d619d5ab78f47426bad1.jpg)
                  </p>
                  <p key={13}>
                    ![](/content-migration/assets/176840158_5389508761091533_4628962348562391359_n-400x284.jpg)
                  </p>
                  <p key={14}>
                    ![](/content-migration/assets/5870e582ae51137af184e040b7dca9373005ba34.jpg)
                  </p>
                  <p key={15}>
                    ![](/content-migration/assets/887af861b1fc8ef0a3bea47cb356c6225a47d281.jpg)
                  </p>
                  <p key={16}>
                    ![](/content-migration/assets/925fe62812e4241859d405e4a72b492c34d7b8b0.jpg)
                  </p>
                  <p key={17}>
                    ![](/content-migration/assets/90a72a227ad891035b642ec45be5e268ec58682c.jpg)
                  </p>
                  <p key={18}>
                    ![](/content-migration/assets/0b2af6bc5f0a775628661aa6a3c587b5216ed4da.jpeg)
                  </p>
                  <p key={19}>
                    ![](/content-migration/assets/d5b43017ccc5ee6b1b4168a5af31fbfadbf4e04e.jpeg)
                  </p>
                  <p key={20}>
                    ![](/content-migration/assets/2598b45c1fe7319cd28205ac79f0bd95a39642e7.jpeg)
                  </p>
                  <p key={21}>
                    ![A banner showing Clean Cuts Trees as a top-rated tree
                    service.](https://cleancutstrees.com/contact-us/)
                  </p>
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
