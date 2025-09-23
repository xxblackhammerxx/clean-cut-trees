import { headers as getHeaders } from 'next/headers.js'
import Link from 'next/link'
import Image from 'next/image'
import { getPayload } from 'payload'

import config from '@/payload.config'
import BookingButton from '@/components/BookingButton'
import './styles.css'

export default async function HomePage() {
  const _headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  // Optimize queries with Promise.all for parallel execution
  const [services, serviceAreas] = await Promise.all([
    // Fetch only essential services
    payload.find({
      collection: 'pages',
      where: {
        pageType: {
          equals: 'service',
        },
      },
      limit: 6,
      select: {
        id: true,
        title: true,
        slug: true,
      },
    }),
    // Fetch limited service areas
    payload.find({
      collection: 'pages',
      where: {
        pageType: {
          equals: 'service-area',
        },
      },
      limit: 12, // Reduced from 18 for faster loading
      select: {
        id: true,
        title: true,
        slug: true,
      },
    }),
  ])

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <Image
          src="/Emergency-Tree-Service-Team.jpg"
          alt="Clean Cuts Trees professional emergency tree service team in Davis and Weber Counties - licensed arborists ready for 24/7 storm damage and tree removal"
          fill
          priority
          className="hero-background"
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Emergency Tree Service & Tree Care in Davis & Weber Counties
            </h1>
            <h2 className="hero-subtitle">Open 24 Hours for Storm and Tree Services</h2>
            <p className="hero-description">
              Clean Cuts Trees is the #1 tree service company in Davis, Weber and Salt Lake Counties
              providing expert tree care, professional tree removal, emergency tree service, and comprehensive tree services. Our certified arborists offer emergency tree removal, tree trimming, pruning tree services, and complete tree care solutions for residential and commercial properties.
            </p>
            <div className="hero-buttons">
              <BookingButton variant="primary" size="large">
                🚀 BOOK ONLINE NOW!
              </BookingButton>
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

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">OUR TREE REMOVAL & TREE CARE SERVICES</h2>
          <p className="section-subtitle">
            We Are Your Local, Trusted and Professional Emergency Tree Service Providers
          </p>
          <p className="section-description">
            Clean Cuts Trees uses the latest knowledge and technology to make tree trimming and
            removal as safe and risk-free as possible. Our professional tree services include emergency tree service, tree removal, tree care, trimming, and pruning tree operations. Whether you need routine tree maintenance or emergency tree removal after storms, our experienced team provides reliable tree services with free estimates for all residential and commercial properties.
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
                ? `/assets/${serviceImages[serviceSlug]}`
                : '/assets/6044a2199980b071066c9787705eaf1fd5e11a3e.png' // Fallback to Clean Cuts banner

              return (
                <div key={service.id} className="service-card">
                  <div className="service-image">
                    <Image
                      src={imagePath}
                      alt={service.title.replace(' - Clean Cuts Trees', '')}
                      className="service-img"
                      width={400}
                      height={300}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={services.docs.indexOf(service) < 2}
                      loading={services.docs.indexOf(service) < 2 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <div className="service-content">
                    <h3>{service.title.replace(' - Clean Cuts Trees', '')}</h3>
                    <a href={`/services/${serviceSlug}`} className="service-link">
                      {serviceSlug === 'emergency-tree-damage' || serviceSlug === 'emergency-tree-service' 
                        ? 'Get Emergency Service →' 
                        : 'Learn More →'}
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Emergency Service Section */}
      <section className="emergency-service">
        <div className="container">
          <div className="emergency-content">
            <div className="emergency-text">
              <h2>24/7 Emergency Tree Removal & Service</h2>
              <p>
                When tree emergencies strike, every minute counts. Our certified arborists provide rapid response for emergency tree removal, fallen trees, storm damage, and hazardous tree situations throughout Davis and Weber Counties. We specialize in emergency tree service, tree emergency response, and professional tree risk assessment to protect your property and family.
              </p>
              <ul className="emergency-features">
                <li>✓ Available 24 hours a day, 7 days a week for emergency tree service</li>
                <li>✓ Licensed and insured emergency tree removal crews</li>
                <li>✓ Professional equipment for safe tree removal and tree care</li>
                <li>✓ Insurance claim assistance for tree damage</li>
                <li>✓ Emergency tree removal services for difficult jobs</li>
                <li>✓ Professional tree services for storm cleanup and debris removal</li>
              </ul>
              <div className="emergency-buttons">
                <a href="tel:+18014737548" className="btn btn-emergency">
                  <span className="material-symbols-outlined">call</span>
                  Emergency: (801) 473-7548
                </a>
                <BookingButton variant="secondary" size="medium">
                  Schedule Service
                </BookingButton>
                <Link href="/services/emergency-tree-service" className="btn btn-outline">
                  Learn About Emergency Service
                </Link>
              </div>
            </div>
            <div className="emergency-gallery">
              <div className="gallery-image">
                <Image 
                  src="/Emergency-Tree-Service-Team.jpg"
                  alt="Clean Cuts Trees professional emergency tree service team ready for 24/7 response in Davis and Weber Counties Utah"
                  className="emergency-img"
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>
              <div className="gallery-image">
                <Image 
                  src="/Emergency-tree-service2.jpg"
                  alt="Emergency tree removal service - storm damage cleanup by Clean Cuts Trees licensed arborists"
                  className="emergency-img"
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="gallery-image">
                <Image 
                  src="/Emergency-tree-service2.jpg"
                  alt="Emergency tree service - hazardous tree removal by Clean Cuts Trees"
                  className="emergency-img"
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="partnership">
        <div className="container">
          <div className="partnership-banner">
            <Image
              src="/rsl-acfu-partnership.png"
              alt="Real Salt Lake and America First Credit Union Partnership"
              className="partnership-image"
              width={600}
              height={200}
              sizes="(max-width: 768px) 100vw, 600px"
              loading="lazy"
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

      {/* Statistics Section */}
      <section className="stats">
        <div className="container">
          <h2 className="section-title">
            OUR TREE CARE TEAM IS CERTIFIED, INSURED,
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

      {/* Comprehensive Tree Services Section */}
      <section className="comprehensive-services">
        <div className="container">
          <h2 className="section-title">Complete Tree Care & Professional Tree Services</h2>
          <p className="section-subtitle">
            From Emergency Tree Removal to Routine Tree Care - We Handle All Your Tree Service Needs
          </p>
          
          <div className="service-details">
            <div className="service-detail">
              <h3>Emergency Tree Service & Tree Emergency Response</h3>
              <p>
                Our emergency tree service operates 24/7 to handle tree emergencies, fallen trees, and dangerous tree situations. Whether you need emergency tree removal after a storm or immediate tree care for damaged trees, our professional tree service team responds quickly with the right equipment and expertise. We provide emergency tree services throughout your yard and property, ensuring safe tree removal and cleanup.
              </p>
            </div>
            
            <div className="service-detail">
              <h3>Professional Tree Removal Services</h3>
              <p>
                Our tree removal services include complete tree removal, stump removal, and branch removal for trees of all sizes. From small trees in tight spaces to large tree removal projects, our professional tree removal company handles difficult jobs with precision. We provide free estimates for all tree removal services and ensure your yard is left clean after every tree removal project.
              </p>
            </div>
            
            <div className="service-detail">
              <h3>Tree Care & Tree Trimming Services</h3>
              <p>
                Regular tree care is essential for healthy trees and safe properties. Our tree care services include professional tree trimming, pruning tree operations, tree risk assessment, and ongoing tree maintenance. Proper trimming not only improves tree health but also prevents branches from becoming hazardous during storms. Our tree care experts assess each tree&apos;s needs and provide customized tree services.
              </p>
            </div>
            
            <div className="service-detail">
              <h3>Why Choose Our Tree Service Company</h3>
              <p>
                As a leading tree service company, we combine years of experience with professional equipment to deliver superior tree services. Our team provides tree removal, tree care, emergency tree service, and tree emergency response with a focus on safety and customer satisfaction. Every tree service includes a free estimate, and we work with insurance companies for storm damage claims.
              </p>
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
                tree care to stay healthy and strong. For example, tree limbs and stray branches need to
                be trimmed through professional trimming services to keep their shape and ensure that they don&apos;t obstruct views and
                power lines. Falling branches and even entire trees can damage your family and
                property, which is why emergency tree service and tree removal are critical services.
              </p>
              <p>
                For our customers in Salt Lake, Weber County, UT, Davis County, UT, Layton, UT and
                Fruit Heights, UT, Clean Cuts Trees is the tree removal company they choose to
                inspect, prune, and trim the trees around their property as well as provide emergency tree removal, professional tree services,
                tree care, and removal services for trees, shrubs, and bushes when needed. Our company provides comprehensive tree services with free estimates for every project.
              </p>
              <div className="about-buttons">
                <BookingButton variant="primary" size="large">
                  BOOK SERVICE ONLINE
                </BookingButton>
                <Link href="/contact-us" className="btn btn-secondary">
                  CONTACT US NOW!
                </Link>
              </div>
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
            We are Open 24 Hours for Storm and Tree Services in Davis, Weber, and Salt Lake
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
                Your trees are important and should receive proper tree care. If you let them grow too thick,
                they could fall during storms! Professional tree trimming is a great way to keep them
                healthy and strong. Regular trimming and pruning tree services help maintain tree health, prevent branches from becoming hazardous, and protect your yard and property. If tree branches get too thick, they cause problems for
                homeowners and may require emergency tree removal services.
              </p>
            </div>
            <div className="faq-item">
              <h3>How Often Should Trees Be Trimmed?</h3>
              <p>
                Most trees should receive professional trimming services every 3-5 years, depending on the tree species and growth
                rate. Fast-growing trees may need annual tree care and trimming, while slower-growing trees can go
                longer between professional tree services. Our tree service company provides free estimates to assess your trees&apos; trimming needs and create a tree care schedule that keeps your trees healthy and your yard safe.
              </p>
            </div>
            <div className="faq-item">
              <h3>Should I Consider Tree Removal Close To The House?</h3>
              <p>
                Trees too close to your house can cause damage to your roof, foundation, and
                plumbing. Our professional tree service experts can assess whether tree removal or pruning tree branches is the best solution for
                your situation. We provide tree risk assessment and free estimates for tree removal services to help protect your property and ensure your yard remains safe.
              </p>
            </div>
            <div className="faq-item">
              <h3>What Is Emergency Tree Removal?</h3>
              <p>
                Emergency tree removal involves safely removing fallen trees, broken branches, and debris after
                severe weather. Our emergency tree service operates 24/7 to provide rapid tree emergency response for dangerous tree situations. We handle difficult jobs including emergency tree removal, storm cleanup, and emergency tree care to protect your property and ensure your yard is safe after tree emergencies.
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
            <BookingButton variant="primary" size="large">
              📅 BOOK YOUR SERVICE NOW
            </BookingButton>
            <BookingButton variant="secondary" size="large">
              💰 GET FREE ESTIMATE
            </BookingButton>
          </div>
        </div>
      </section>
    </>
  )
}
