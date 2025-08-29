import { headers as getHeaders } from 'next/headers.js'
import Link from 'next/link'
import { getPayload } from 'payload'

import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Fetch homepage content
  const pages = await payload.find({
    collection: 'pages',
    where: {
      pageType: {
        equals: 'homepage',
      },
    },
    limit: 1,
  })

  const homePage = pages.docs[0]

  // Fetch services
  const services = await payload.find({
    collection: 'pages',
    where: {
      pageType: {
        equals: 'service',
      },
    },
    limit: 6,
  })

  // Fetch service areas
  const serviceAreas = await payload.find({
    collection: 'pages',
    where: {
      pageType: {
        equals: 'service-area',
      },
    },
    limit: 18,
  })

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              THE #1 EMERGENCY TREE SERVICES
              <br />
              COMPANY IN FRUIT HEIGHTS, UT &<br />
              SURROUNDING AREAS
            </h1>
            <h2 className="hero-subtitle">Open 24 Hours for Storm and Emergency Services</h2>
            <p className="hero-description">
              Clean Cuts Trees is the #1 tree service company in Davis, Weber and Salt Lake Counties
              providing expert tree care and all tree services.
            </p>
            <div className="hero-buttons">
              <Link href="/contact-us" className="btn btn-primary">
                CONTACT US NOW!
              </Link>
              <a href="tel:+18014737548" className="btn btn-phone">
                <span
                  className="material-symbols-outlined"
                  style={{ verticalAlign: 'middle', fontSize: 20, marginRight: 4 }}
                >
                  call
                </span>{' '}
                (801) 473-7548
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="partnership">
        <div className="container">
          <div className="partnership-banner">
            <img
              src="/rsl-acfu-partnership.png"
              alt="Real Salt Lake and America First Credit Union Partnership"
              className="partnership-image"
            />
            <p>
              Clean Cuts Trees is a Proud Partner of <strong>Real Salt Lake</strong> & Winner of the{' '}
              <strong>America First Credit Union</strong> 2024 Small Business Showcase.
            </p>
            <Link href="/real-salt-lake-partnership" className="btn btn-secondary">
              Read more
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">OUR SERVICES</h2>
          <p className="section-subtitle">
            We Are Your Local, Trusted and Professional Emergency Tree Service Providers
          </p>
          <p className="section-description">
            Clean Cuts Trees uses the latest knowledge and technology to make tree trimming and
            removal as safe and risk-free as possible.
          </p>

          <div className="services-grid">
            {services.docs.map((service: any) => {
              // Map service slugs to their corresponding images
              const serviceImages: { [key: string]: string } = {
                'tree-removal': '91521393324329d774d759f0d6e984de27d05cf5.jpg',
                'tree-trimming': '0429526e5171a025d4e084e303157911cde378f0.jpg',
                'emergency-tree-damage': '8fbc39738ff1ee4ba34f327cb5ffaa34024b11eb.jpg',
                'storm-clean-up': 'ce7b1b3d28de8121894f693f49d99deacc0fdfd9.jpg',
                'municipal-tree-service': '3360c69ff26cc8732183a7edd60e6ee6f293b9ee.jpg',
                'professional-land-clearing-services':
                  '654766ab01c63fc2cf45c8c5bdc851dcff4ceff2.jpg',
              }

              const serviceSlug = service.slug?.replace('services-', '') || ''
              const imagePath = serviceImages[serviceSlug]
                ? `/content-migration/assets/${serviceImages[serviceSlug]}`
                : '/content-migration/assets/6044a2199980b071066c9787705eaf1fd5e11a3e.png' // Fallback to Clean Cuts banner

              return (
                <div key={service.id} className="service-card">
                  <div className="service-image">
                    <img
                      src={imagePath}
                      alt={service.title.replace(' - Clean Cuts Trees', '')}
                      className="service-img"
                    />
                  </div>
                  <div className="service-content">
                    <h3>{service.title.replace(' - Clean Cuts Trees', '')}</h3>
                    <a href={`/services/${serviceSlug}`} className="service-link">
                      Learn More →
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats">
        <div className="container">
          <h2 className="section-title">
            OUR TREE SERVICE TEAM IS CERTIFIED, INSURED,
            <br />
            AND TRAINED TO THE HIGHEST STANDARDS
          </h2>
          <p className="section-subtitle">
            CALL US TODAY TO MEET THE TEAM FROM A LOCAL FAMILY-OWNED AND OPERATED TREE TRIMMING
            COMPANY
          </p>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <span className="material-symbols-outlined" style={{ fontSize: 48 }}>
                  sentiment_satisfied
                </span>
              </div>
              <div className="stat-number">600+</div>
              <div className="stat-label">HAPPY CUSTOMERS</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <span className="material-symbols-outlined" style={{ fontSize: 48 }}>
                  park
                </span>
              </div>
              <div className="stat-number">1500+</div>
              <div className="stat-label">TREES REMOVED</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <span className="material-symbols-outlined" style={{ fontSize: 48 }}>
                  eco
                </span>
              </div>
              <div className="stat-number">200+</div>
              <div className="stat-label">TREES PLANTED</div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <span className="material-symbols-outlined" style={{ fontSize: 48 }}>
                  thunderstorm
                </span>
              </div>
              <div className="stat-number">1500+</div>
              <div className="stat-label">STORM CLEAN UPS COMPLETED</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>
                Best and Reliable Tree Services
                <br />
                in all of Davis, Weber, and Salt Lake Counties
              </h2>
              <p>
                Serving all of Davis, Salt Lake and Weber County, Utah, including and nearby areas
              </p>
              <p>
                You might not give much thought to the trees in your front or backyard. You probably
                won&apos;t notice them growing, but trees, like all living things, need consistent
                care to stay healthy and strong. For example, tree limbs and stray branches need to
                be trimmed to keep their shape and ensure that they don&apos;t obstruct views and
                power lines. Falling branches and even entire trees can damage your family and
                property.
              </p>
              <p>
                For our customers in Salt Lake, Weber County, UT, Davis County, UT, Layton, UT and
                Fruit Heights, UT, Clean Cuts Trees is the tree removal company they choose to
                inspect, prune, and trim the trees around their property as well as remove trees,
                shrubs, and bushes when needed.
              </p>
              <Link href="/contact-us" className="btn btn-primary">
                CONTACT US NOW!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="reviews">
        <div className="container">
          <h2 className="section-title">What Our Satisfied Customers Are Saying…</h2>
          <p className="section-subtitle">If You Have Trees, Then You Need Clean Cuts!</p>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p>
                &ldquo;This is the third time we&apos;ve used Clean Cuts Trees, and once again, they
                delivered excellent service. Their response time was impressively fast, and they did
                a fantastic job at a very fair price. The work site was left spotless, which we
                really appreciated. Chaz, the job supervisor, was a pleasure to work with —
                professional, communicative, and made sure everything ran smoothly.&rdquo;
              </p>
              <div className="review-author">- M H.</div>
            </div>

            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p>
                &ldquo;First - the people. Zac and Laurie made the scheduling process easy. Then
                Chaz and crew showed up and made it all worth it. We LOVE our Black Walnut tree and
                have spent a couple seasons nursing it back to health from a beetle infestation with
                the help of an arborist. When Chaz and crew left all the dead was gone and the green
                looks great!&rdquo;
              </p>
              <div className="review-author">- Gregory P.</div>
            </div>

            <div className="review-card">
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
              <p>
                &ldquo;Chaz and his team did an AMAZING job helping to clean up my giant cherry tree
                that we almost lost. I&apos;m so grateful, and they cleaned up beautifully and left
                everything pristine. I&apos;m so grateful that my cherry tree still looks so good,
                even after having to cut the entire top off.&rdquo;
              </p>
              <div className="review-author">- Whitterbug</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">We&apos;re the Trusted Arborists in the Area.</h2>
          <p className="section-subtitle">
            Because we are professional, efficient, honest, and work closely with our customers
            every step of the way.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">workspace_premium</span>
              </div>
              <h3>Experienced & Professional</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">handshake</span>
              </div>
              <h3>Helpful & Friendly Support</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">savings</span>
              </div>
              <h3>Competitive Prices</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">assignment</span>
              </div>
              <h3>Free Estimates</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <h3>Licensed, Bonded & Insured</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">diversity_3</span>
              </div>
              <h3>Family Owned & Operated</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">check_circle</span>
              </div>
              <h3>100% Satisfaction Guaranteed</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">assignment_turned_in</span>
              </div>
              <h3>Hassle-free Insurance Claims</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas">
        <div className="container">
          <h2 className="section-title">
            We are Open 24 Hours for Storm and Emergency Services in Davis, Weber, and Salt Lake
            County UT and Surrounding Areas
          </h2>
          <p className="section-subtitle">
            Call us today to meet a team from a local family-owned and operated tree trimming
            company and schedule a free consultation.
          </p>

          <div className="areas-grid">
            {serviceAreas.docs.slice(0, 18).map((area: any) => (
              <div key={area.id} className="area-card">
                <div className="area-icon">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <h3>
                  {area.title.replace('Tree Service ', '').replace(', UT - Clean Cuts Trees', '')}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">We are here to answer all your tree related questions!</p>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>Why Is It Important To Trim My Trees?</h3>
              <p>
                Your trees are important and should be cared for. If you let them grow too thick,
                they could fall during storms! Trimming your trees is a great way to keep them
                healthy and strong. If their branches get too thick, they cause other problems for
                homeowners.
              </p>
            </div>
            <div className="faq-item">
              <h3>How Often Should Trees Be Trimmed?</h3>
              <p>
                Most trees should be trimmed every 3-5 years, depending on the species and growth
                rate. Fast-growing trees may need annual trimming, while slower-growing trees can go
                longer between trims.
              </p>
            </div>
            <div className="faq-item">
              <h3>Should I Cut Down A Tree Close To The House?</h3>
              <p>
                Trees too close to your house can cause damage to your roof, foundation, and
                plumbing. Our experts can assess whether removal or pruning is the best solution for
                your situation.
              </p>
            </div>
            <div className="faq-item">
              <h3>What Is Storm Cleanup?</h3>
              <p>
                Storm cleanup involves removing fallen trees, broken branches, and debris after
                severe weather. We provide 24/7 emergency services to clear your property safely and
                quickly.
              </p>
            </div>
          </div>

          <div className="faq-cta">
            <Link href="/faq" className="btn btn-secondary">
              DISCOVER MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">
            We are a Professional and Family-Owned Tree Service Provider
          </h2>
          <p className="section-subtitle">
            We&apos;re proud to serve the property owners of Davis, Salt Lake, and Weber County UT,
            and surrounding areas.
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <h3>
                <span
                  className="material-symbols-outlined"
                  style={{ verticalAlign: 'middle', fontSize: 22, marginRight: 4 }}
                >
                  location_on
                </span>{' '}
                Location
              </h3>
              <p>Fruit Heights, UT 84037</p>
            </div>
            <div className="contact-item">
              <h3>
                <span
                  className="material-symbols-outlined"
                  style={{ verticalAlign: 'middle', fontSize: 22, marginRight: 4 }}
                >
                  call
                </span>{' '}
                Phone
              </h3>
              <p>
                <a href="tel:+18014737548">(801) 473-7548</a>
              </p>
            </div>
            <div className="contact-item">
              <h3>
                <span
                  className="material-symbols-outlined"
                  style={{ verticalAlign: 'middle', fontSize: 22, marginRight: 4 }}
                >
                  mail
                </span>{' '}
                Email
              </h3>
              <p>
                <a href="mailto:estimates@cleancutstrees.com">estimates@cleancutstrees.com</a>
              </p>
            </div>
          </div>

          <div className="final-cta">
            <Link href="/contact-us" className="btn btn-primary btn-large">
              REQUEST A FREE ESTIMATE
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
