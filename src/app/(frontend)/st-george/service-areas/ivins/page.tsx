import Image from 'next/image'
import Link from 'next/link'

import { stGeorgeOfficeContact, emergencyContact } from '@/utils/contactInfo'

export const metadata = {
  title: 'Tree Service Ivins UT | Professional Tree Care & Removal | Clean Cuts Trees',
  description: 'Expert tree service in Ivins, Utah. Professional tree removal, trimming, stump grinding & emergency services. Serving Ivins desert communities with specialized tree care. Free estimates!',
  keywords: 'Ivins Utah tree service, tree removal Ivins UT, tree trimming Ivins Utah, arborist Ivins, desert tree care Ivins',
}

export default function IvinsServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <Image
          src="/optimized/Emergency-Tree-Service-Team-1600w.webp"
          alt="Professional tree service in Ivins Utah - Clean Cuts Trees serving Ivins desert communities"
          fill
          priority
          className="hero-background"
          sizes="100vw"
        />
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Professional Tree Service in Ivins, Utah
            </h1>
            <h2 className="hero-subtitle">Desert Tree Care Specialists</h2>
            <p className="hero-description">
              Clean Cuts Trees provides expert tree services throughout Ivins and the surrounding 
              desert communities. Our certified arborists specialize in caring for trees in Ivins' 
              unique high desert environment, offering professional tree removal, emergency services, 
              trimming, and comprehensive tree care for residential and commercial properties.
            </p>
            <div className="hero-buttons">
              <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                📅 BOOK IVINS SERVICE
              </a>
              <a href={`tel:${stGeorgeOfficeContact.phoneLink}`} className="btn btn-phone">
                <span className="material-symbols-outlined">call</span>
                {stGeorgeOfficeContact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Services */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Ivins Utah Tree Services</h2>
          <p className="section-subtitle">
            Specialized tree care for Ivins' desert landscape and growing communities
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-content">
                <h3>Desert Tree Care</h3>
                <p>
                  Specialized care for native and adapted tree species in Ivins' high desert 
                  environment, including drought management and heat stress protection.
                </p>
                <Link href="/st-george/services/tree-trimming-pruning" className="service-link">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Emergency Tree Removal</h3>
                <p>
                  24/7 emergency response for wind damage, fallen trees, and hazardous situations 
                  throughout Ivins' residential and commercial areas.
                </p>
                <Link href="/st-george/services/emergency-tree-removal" className="service-link">
                  Get Emergency Service →
                </Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Red Rock Area Tree Removal</h3>
                <p>
                  Safe tree removal in Ivins' scenic red rock areas with specialized techniques 
                  to protect the natural landscape and surrounding vegetation.
                </p>
                <Link href="/st-george/services/tree-removal" className="service-link">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Residential Tree Services</h3>
                <p>
                  Complete tree care for Ivins' growing residential communities, including 
                  HOA properties and custom home landscapes.
                </p>
                <Link href="/st-george/services/stump-grinding" className="service-link">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ivins-Specific Features */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">Tree Care in Ivins' Unique Environment</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <span className="material-symbols-outlined">landscape</span>
              </div>
              <h3>Red Rock Landscape</h3>
              <p>
                Ivins' stunning red rock landscape requires careful tree care to preserve 
                natural beauty while maintaining safety. Our techniques protect both trees 
                and the scenic environment.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <span className="material-symbols-outlined">home</span>
              </div>
              <h3>Custom Home Properties</h3>
              <p>
                Many Ivins properties feature custom landscaping with unique tree placement. 
                We provide specialized care for high-value landscape trees and complex designs.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <span className="material-symbols-outlined">water_drop</span>
              </div>
              <h3>Water-Wise Tree Care</h3>
              <p>
                Desert water conservation is crucial in Ivins. Our pruning and care practices 
                reduce tree water needs while maintaining health and appearance.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <span className="material-symbols-outlined">group</span>
              </div>
              <h3>HOA & Community Services</h3>
              <p>
                Professional tree maintenance for Ivins' HOA communities and shared spaces, 
                ensuring consistent quality and coordinated scheduling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="comprehensive-services">
        <div className="container">
          <h2 className="section-title">Ivins Local Tree Care Expertise</h2>
          <p className="section-subtitle">
            Deep knowledge of Ivins' environment and community needs
          </p>

          <div className="service-details">
            <div className="service-detail">
              <h3>Native Desert Species</h3>
              <p>
                Ivins' natural landscape includes unique desert species that require specialized 
                knowledge. We understand how to care for native trees while integrating landscape 
                trees into the desert environment.
              </p>
            </div>

            <div className="service-detail">
              <h3>Residential Development Experience</h3>
              <p>
                Ivins has seen significant residential growth with varying landscape designs. 
                Our team works with new developments, established neighborhoods, and rural 
                properties throughout the area.
              </p>
            </div>

            <div className="service-detail">
              <h3>Scenic Area Preservation</h3>
              <p>
                Many Ivins properties are located in or near scenic areas requiring careful 
                tree management. We balance tree care needs with preservation of natural 
                beauty and environmental protection.
              </p>
            </div>

            <div className="service-detail">
              <h3>Climate Adaptation Strategies</h3>
              <p>
                Ivins' high desert climate requires specific tree care approaches. We help 
                trees adapt to elevation changes, temperature extremes, and seasonal variations 
                unique to the area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas">
        <div className="container">
          <h2 className="section-title">Ivins Area Tree Services</h2>
          <p className="section-subtitle">
            Professional tree care throughout Ivins and surrounding desert communities
          </p>

          <div className="areas-grid">
            <div className="area-card">
              <div className="area-icon">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <h3>Ivins City</h3>
              <p>Complete tree services for all Ivins neighborhoods and commercial properties</p>
            </div>
            <div className="area-card">
              <div className="area-icon">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <h3>Red Canyon Area</h3>
              <p>Specialized tree care in Ivins' scenic red rock and canyon areas</p>
            </div>
            <div className="area-card">
              <div className="area-icon">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <h3>Residential Communities</h3>
              <p>HOA and private community tree maintenance throughout Ivins</p>
            </div>
            <div className="area-card">
              <div className="area-icon">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <h3>Rural Properties</h3>
              <p>Tree services for Ivins' rural and estate properties with challenging access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="emergency-service">
        <div className="container">
          <div className="emergency-content">
            <div className="emergency-text">
              <h2>Emergency Tree Services in Ivins</h2>
              <p>
                Ivins' desert winds and occasional severe weather can create tree emergencies. 
                Our emergency response team understands Ivins' layout, common problem areas, 
                and priority access routes for rapid response throughout the community.
              </p>
              <ul className="emergency-features">
                <li>Rapid response for Ivins wind and storm emergencies</li>
                <li>Coordination with Ivins City emergency services</li>
                <li>Specialized equipment for red rock terrain access</li>
                <li>Protection of scenic areas during emergency operations</li>
                <li>Complete storm cleanup and landscape restoration</li>
                <li>Insurance documentation and claim assistance</li>
              </ul>
              <div className="emergency-buttons">
                <a href={`tel:${stGeorgeOfficeContact.phoneLink}`} className="btn btn-primary">
                  🚨 IVINS EMERGENCY: {stGeorgeOfficeContact.phone}
                </a>
                <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Schedule Regular Service
                </a>
              </div>
            </div>
            <div className="emergency-gallery">
              <div className="gallery-image">
                <Image
                  src="/Emergency-Tree-Service-Team.jpg"
                  alt="Emergency tree service team in Ivins Utah red rock area"
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
                  alt="Tree care services in Ivins desert landscape"
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

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <h2 className="section-title">Ivins Tree Service FAQs</h2>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>What tree species work best in Ivins' desert climate?</h3>
              <p>
                Ivins' high desert environment supports drought-tolerant species like desert 
                willow, palo verde, and native shrub oak. Landscape trees like olive, 
                pomegranate, and certain ornamental species adapt well with proper care.
              </p>
            </div>

            <div className="faq-item">
              <h3>How do you protect the red rock landscape during tree work?</h3>
              <p>
                We use specialized equipment and techniques to minimize impact on Ivins' 
                sensitive red rock areas. Our crews are trained in low-impact methods that 
                preserve natural beauty while completing necessary tree work safely.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you work with Ivins HOAs and community associations?</h3>
              <p>
                Yes, we provide regular maintenance contracts for HOAs and community 
                associations throughout Ivins. We coordinate scheduling, provide consistent 
                quality, and work within community guidelines and budgets.
              </p>
            </div>

            <div className="faq-item">
              <h3>How do elevation changes in Ivins affect tree care?</h3>
              <p>
                Ivins' varying elevations create microclimates that affect tree growth and 
                care needs. Our arborists understand these variations and adjust care practices 
                based on specific location conditions and elevation factors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">
            Ivins Utah Tree Service Contact
          </h2>
          <p className="section-subtitle">
            Professional tree care for Ivins and surrounding desert communities
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <h3>
                <span className="material-symbols-outlined">call</span>
                Phone
              </h3>
              <p>
                <a href={`tel:${stGeorgeOfficeContact.phoneLink}`}>{stGeorgeOfficeContact.phone}</a>
              </p>
            </div>
            <div className="contact-item">
              <h3>
                <span className="material-symbols-outlined">schedule</span>
                Emergency Service
              </h3>
              <p>Available 24/7 for Ivins area</p>
            </div>
            <div className="contact-item">
              <h3>
                <span className="material-symbols-outlined">assignment</span>
                Free Estimates
              </h3>
              <p>Professional assessment for all Ivins properties</p>
            </div>
          </div>

          <div className="final-cta">
            <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
              📅 SCHEDULE IVINS SERVICE
            </a>
            <a href={`tel:${stGeorgeOfficeContact.phoneLink}`} className="btn btn-secondary">
              💰 GET FREE ESTIMATE
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
