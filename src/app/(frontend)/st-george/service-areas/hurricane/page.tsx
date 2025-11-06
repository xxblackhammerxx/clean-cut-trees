import Image from 'next/image'
import Link from 'next/link'

import { stGeorgeOfficeContact, emergencyContact } from '@/utils/contactInfo'

export const metadata = {
  title: 'Tree Service Hurricane UT | Emergency Tree Removal & Care | Clean Cuts Trees',
  description: 'Professional tree service in Hurricane, Utah. 24/7 emergency tree removal, trimming, stump grinding & arborist services. Serving Hurricane Valley with expert tree care. Free estimates!',
  keywords: 'Hurricane Utah tree service, tree removal Hurricane UT, emergency tree service Hurricane, tree trimming Hurricane Utah, arborist Hurricane Valley',
}

export default function HurricaneServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <Image
          src="/optimized/Emergency-Tree-Service-Team-1600w.webp"
          alt="Professional tree service in Hurricane Utah - Clean Cuts Trees serving Hurricane Valley"
          fill
          priority
          className="hero-background"
          sizes="100vw"
        />
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Professional Tree Service in Hurricane, Utah
            </h1>
            <h2 className="hero-subtitle">Expert Tree Care for Hurricane Valley</h2>
            <p className="hero-description">
              Clean Cuts Trees provides comprehensive tree services throughout Hurricane and the 
              surrounding Hurricane Valley area. Our certified arborists understand the unique 
              challenges of Hurricane's desert climate and wind patterns, delivering professional 
              tree removal, emergency services, trimming, and complete tree care solutions.
            </p>
            <div className="hero-buttons">
              <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                📅 BOOK HURRICANE SERVICE
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
          <h2 className="section-title">Hurricane Utah Tree Services</h2>
          <p className="section-subtitle">
            Professional tree care designed for Hurricane Valley's unique environment
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-content">
                <h3>Emergency Tree Removal</h3>
                <p>
                  24/7 emergency response for hurricane-force winds and severe weather events 
                  that frequently impact the Hurricane Valley area. Rapid cleanup and restoration services.
                </p>
                <Link href="/st-george/services/emergency-tree-removal" className="service-link">
                  Get Emergency Service →
                </Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Wind-Resistant Tree Trimming</h3>
                <p>
                  Specialized pruning techniques to help trees withstand Hurricane's notorious 
                  high winds while maintaining healthy growth and attractive appearance.
                </p>
                <Link href="/st-george/services/tree-trimming-pruning" className="service-link">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Complete Tree Removal</h3>
                <p>
                  Safe removal of hazardous, diseased, or unwanted trees throughout Hurricane's 
                  residential and commercial areas, including challenging terrain locations.
                </p>
                <Link href="/st-george/services/tree-removal" className="service-link">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Stump Grinding</h3>
                <p>
                  Professional stump grinding and removal services for Hurricane properties, 
                  including access to tight spaces and rocky terrain common in the area.
                </p>
                <Link href="/st-george/services/stump-grinding" className="service-link">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hurricane-Specific Challenges */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">Tree Care Challenges in Hurricane, Utah</h2>
          <div className="challenges-grid">
            <div className="challenge-item">
              <div className="challenge-icon">
                <span className="material-symbols-outlined">air</span>
              </div>
              <h3>High Wind Events</h3>
              <p>
                Hurricane is named for its frequent high wind events. Our tree care practices 
                focus on creating wind-resistant tree structures and rapid emergency response 
                when winds cause tree damage.
              </p>
            </div>

            <div className="challenge-item">
              <div className="challenge-icon">
                <span className="material-symbols-outlined">wb_sunny</span>
              </div>
              <h3>Desert Heat Stress</h3>
              <p>
                Intense summer heat and UV exposure can stress trees. We provide specialized 
                care techniques to help trees adapt and thrive in Hurricane's harsh desert conditions.
              </p>
            </div>

            <div className="challenge-item">
              <div className="challenge-icon">
                <span className="material-symbols-outlined">water_drop</span>
              </div>
              <h3>Water Conservation</h3>
              <p>
                Desert water restrictions require efficient tree care practices. Our pruning 
                techniques reduce water needs while maintaining tree health and beauty.
              </p>
            </div>

            <div className="challenge-item">
              <div className="challenge-icon">
                <span className="material-symbols-outlined">landscape</span>
              </div>
              <h3>Rocky Terrain</h3>
              <p>
                Hurricane's rocky landscape requires specialized equipment and techniques for 
                tree removal and care. Our team has extensive experience with challenging terrain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Knowledge */}
      <section className="comprehensive-services">
        <div className="container">
          <h2 className="section-title">Local Hurricane Valley Expertise</h2>
          <p className="section-subtitle">
            Deep understanding of Hurricane's unique environment and tree care needs
          </p>

          <div className="service-details">
            <div className="service-detail">
              <h3>Native Species Knowledge</h3>
              <p>
                We understand the native trees and plants that thrive in Hurricane Valley, 
                including desert species and those adapted to high-wind environments. Our care 
                practices support both native vegetation and landscape trees.
              </p>
            </div>

            <div className="service-detail">
              <h3>Seasonal Care Planning</h3>
              <p>
                Hurricane's seasonal weather patterns require strategic timing for tree care. 
                We plan trimming, treatments, and maintenance around wind seasons and extreme 
                heat periods for optimal tree health.
              </p>
            </div>

            <div className="service-detail">
              <h3>Development Area Experience</h3>
              <p>
                Hurricane's growing residential and commercial developments present unique 
                tree care challenges. We work with new construction, HOAs, and established 
                neighborhoods throughout the Hurricane Valley.
              </p>
            </div>

            <div className="service-detail">
              <h3>Emergency Response Network</h3>
              <p>
                Our Hurricane service area includes established relationships with local 
                utility companies, emergency services, and municipal authorities for rapid 
                coordination during weather emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hurricane Valley Areas */}
      <section className="service-areas">
        <div className="container">
          <h2 className="section-title">Hurricane Valley Service Areas</h2>
          <p className="section-subtitle">
            Professional tree services throughout Hurricane and surrounding communities
          </p>

          <div className="areas-grid">
            <div className="area-card">
              <div className="area-icon">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <h3>Hurricane City</h3>
              <p>Complete tree services for all Hurricane neighborhoods and commercial areas</p>
            </div>
            <div className="area-card">
              <div className="area-icon">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <h3>Hurricane Valley</h3>
              <p>Rural and residential areas throughout the broader Hurricane Valley region</p>
            </div>
            <div className="area-card">
              <div className="area-icon">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <h3>Virgin River Area</h3>
              <p>Specialized care for riparian trees and flood-prone areas near the Virgin River</p>
            </div>
            <div className="area-card">
              <div className="area-icon">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <h3>New Developments</h3>
              <p>Tree care for Hurricane's growing residential and commercial developments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="emergency-service">
        <div className="container">
          <div className="emergency-content">
            <div className="emergency-text">
              <h2>24/7 Emergency Response in Hurricane</h2>
              <p>
                Hurricane's frequent high wind events can create sudden tree emergencies. Our 
                emergency response team is familiar with Hurricane's street layout, common problem 
                areas, and priority routes for rapid response to tree emergencies throughout the valley.
              </p>
              <ul className="emergency-features">
                <li>Rapid response for Hurricane Valley wind emergencies</li>
                <li>Coordination with Hurricane City emergency services</li>
                <li>Power line clearance and utility coordination</li>
                <li>Road clearance for emergency vehicle access</li>
                <li>Insurance documentation and claim assistance</li>
                <li>Complete storm cleanup and debris removal</li>
              </ul>
              <div className="emergency-buttons">
                <a href={`tel:${stGeorgeOfficeContact.phoneLink}`} className="btn btn-primary">
                  🚨 HURRICANE EMERGENCY: {stGeorgeOfficeContact.phone}
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
                  alt="Emergency tree service response team in Hurricane Utah"
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
                  alt="Wind damage cleanup in Hurricane Valley Utah"
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
          <h2 className="section-title">Hurricane Tree Service FAQs</h2>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>How quickly can you respond to wind damage in Hurricane?</h3>
              <p>
                We typically respond to Hurricane Valley emergencies within 2-4 hours. During 
                major wind events affecting multiple areas, we prioritize based on safety hazards 
                and coordinate with local emergency services for efficient response.
              </p>
            </div>

            <div className="faq-item">
              <h3>What types of trees grow well in Hurricane's climate?</h3>
              <p>
                Hurricane's high desert climate supports drought-tolerant species like desert 
                willow, palo verde, and native Utah juniper. Many landscape trees like olive, 
                pomegranate, and certain palm species also adapt well with proper care.
              </p>
            </div>

            <div className="faq-item">
              <h3>How often should trees be trimmed in Hurricane's wind environment?</h3>
              <p>
                Trees in Hurricane should be evaluated annually for wind resistance. Fast-growing 
                species may need annual trimming, while established trees typically benefit from 
                professional assessment and trimming every 2-3 years.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you service rural areas outside Hurricane city limits?</h3>
              <p>
                Yes, we serve the entire Hurricane Valley area including rural properties, 
                ranch areas, and properties outside Hurricane city limits. We have equipment 
                suitable for remote locations and challenging access situations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">
            Hurricane Utah Tree Service Contact
          </h2>
          <p className="section-subtitle">
            Professional tree care for Hurricane Valley and surrounding areas
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
              <p>Available 24/7 for Hurricane Valley</p>
            </div>
            <div className="contact-item">
              <h3>
                <span className="material-symbols-outlined">assignment</span>
                Free Estimates
              </h3>
              <p>Professional assessment for all Hurricane area properties</p>
            </div>
          </div>

          <div className="final-cta">
            <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
              📅 SCHEDULE HURRICANE SERVICE
            </a>
            <a href={`tel:${stGeorgeOfficeContact.phoneLink}`} className="btn btn-secondary">
              🚨 EMERGENCY TREE SERVICE
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
