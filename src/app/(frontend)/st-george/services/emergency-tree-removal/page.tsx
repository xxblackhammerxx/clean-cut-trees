import Image from 'next/image'

import { stGeorgeOfficeContact, emergencyContact } from '@/utils/contactInfo'

export const metadata = {
  title: 'Emergency Tree Removal St. George | 24/7 Tree Service | Clean Cuts Trees',
  description: '24/7 emergency tree removal in St. George, Utah. Fast response for fallen trees, storm damage & hazardous situations. ISA certified arborists serving Hurricane, Ivins & Washington County.',
  keywords: 'emergency tree removal St. George, 24/7 tree service Utah, storm damage cleanup St. George, fallen tree removal Hurricane, emergency arborist Ivins, wind damage cleanup',
}

export default function EmergencyTreeRemovalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <Image
          src="/optimized/Emergency-Tree-Service-Team-1600w.webp"
          alt="24/7 emergency tree removal service in St. George Utah - Clean Cuts Trees rapid response team"
          fill
          priority
          className="hero-background"
          sizes="100vw"
        />
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              24/7 Emergency Tree Removal in St. George, Utah
            </h1>
            <h2 className="hero-subtitle">Rapid Response for Tree Emergencies</h2>
            <p className="hero-description">
              When trees fall or become dangerous in St. George's high winds and desert storms, 
              every minute counts. Our ISA-certified emergency tree removal team provides 24/7 
              response throughout Washington County with over a decade of experience in desert 
              conditions, safely removing fallen trees and clearing hazardous situations to 
              protect your property and restore access.
            </p>
            <div className="hero-buttons">
              <a href={`tel:${stGeorgeOfficeContact.phoneLink}`} className="btn btn-primary">
                🚨 CALL NOW: {stGeorgeOfficeContact.phone}
              </a>
              <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">
                Schedule Non-Emergency Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">St. George Emergency Tree Services</h2>
          <p className="section-subtitle">
            Professional emergency response for all tree-related crises
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-content">
                <h3>Fallen Tree Removal</h3>
                <p>
                  Rapid removal of trees that have fallen across roads, driveways, or onto structures. 
                  Our team safely cuts and removes fallen trees while minimizing additional property damage.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Storm Damage Cleanup</h3>
                <p>
                  Complete cleanup of tree debris after wind storms, including broken branches, 
                  damaged trees, and scattered debris throughout your property.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Power Line Clearance</h3>
                <p>
                  Emergency removal of trees and branches that have fallen on or are threatening 
                  power lines. We coordinate with utility companies for safe restoration of power.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Hazardous Tree Assessment</h3>
                <p>
                  Immediate evaluation of trees that pose imminent danger to people or property, 
                  with emergency stabilization or removal as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Emergency Expertise */}
      <section className="comprehensive-services">
        <div className="container">
          <h2 className="section-title">Desert Climate Emergency Tree Expertise</h2>
          <p className="section-subtitle">
            Over a decade of experience with St. George's unique emergency tree situations
          </p>

          <div className="service-details">
            <div className="service-detail">
              <h3>High Wind Emergency Response</h3>
              <p>
                St. George's location between canyon systems creates unique wind patterns that can 
                cause sudden tree emergencies. Our team has extensive experience with wind damage 
                patterns specific to Southern Utah, allowing us to quickly assess situations and 
                respond with appropriate equipment and safety protocols.
              </p>
            </div>

            <div className="service-detail">
              <h3>Desert Storm Damage Specialists</h3>
              <p>
                Desert storms in Southern Utah can be intense but brief, causing concentrated damage 
                to trees stressed by extreme heat and drought. Our ISA-certified arborists understand 
                how these conditions affect tree failure patterns and can quickly prioritize removals 
                based on actual risk levels.
              </p>
            </div>

            <div className="service-detail">
              <h3>Rocky Terrain Emergency Operations</h3>
              <p>
                Emergency tree removal in St. George's rocky terrain requires specialized equipment 
                and techniques. Our team has the experience and tools to safely access fallen trees 
                in challenging locations throughout Washington County's varied topography, from 
                suburban developments to rural properties.
              </p>
            </div>

            <div className="service-detail">
              <h3>Power Line Coordination Experience</h3>
              <p>
                We have established relationships with local utility companies and understand 
                St. George's power grid layout. This local knowledge allows us to coordinate 
                effectively during power line emergencies and restore services more quickly 
                while maintaining safety protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Process */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">Our Emergency Response Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Emergency Call</h3>
              <p>Call {emergencyContact.phone} for immediate response. Our team is available 24/7 for tree emergencies throughout St. George and Washington County.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Rapid Assessment</h3>
              <p>Our certified arborists quickly assess the situation, identify immediate hazards, and develop a safe removal plan.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Safe Removal</h3>
              <p>Using specialized equipment, we safely remove the tree or debris while protecting surrounding property and restoring access.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Complete Cleanup</h3>
              <p>We remove all debris, clean the area, and provide documentation for insurance claims if needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Emergency Service */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">Why Choose Our Emergency Tree Service?</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <h3>24/7 Availability</h3>
              <p>Round-the-clock emergency response for urgent tree situations</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">speed</span>
              </div>
              <h3>Rapid Response</h3>
              <p>Typical response time of 2-4 hours for emergency situations</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">security</span>
              </div>
              <h3>Safety First</h3>
              <p>Trained professionals with specialized safety equipment and protocols</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <h3>Licensed & Insured</h3>
              <p>Fully licensed and insured for emergency tree removal operations</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">handshake</span>
              </div>
              <h3>Insurance Assistance</h3>
              <p>Help with insurance documentation and claims for storm damage</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">landscape</span>
              </div>
              <h3>Local Expertise</h3>
              <p>Experienced with St. George's terrain, climate, and wind patterns</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <h2 className="section-title">Emergency Tree Service FAQs</h2>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>When should I call for emergency tree removal?</h3>
              <p>
                Call immediately if a tree has fallen on your house, car, or power lines, is blocking 
                a road or driveway, or if a tree is leaning dangerously and could fall. Also call if 
                large branches are hanging and could fall at any time.
              </p>
            </div>

            <div className="faq-item">
              <h3>How quickly can you respond to emergencies in St. George?</h3>
              <p>
                We typically respond within 2-4 hours for true emergencies. Response time may vary 
                during severe weather events when multiple emergencies occur simultaneously throughout 
                Washington County.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you work with insurance companies?</h3>
              <p>
                Yes, we frequently work with insurance companies for storm damage claims. We provide 
                detailed documentation, photos, and reports to help with your insurance claim process.
              </p>
            </div>

            <div className="faq-item">
              <h3>What areas do you serve for emergency calls?</h3>
              <p>
                We provide 24/7 emergency tree removal throughout St. George, Hurricane, Ivins, 
                Santa Clara, Washington, Leeds, and all of Washington County. We also respond to 
                emergencies in surrounding areas when possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Emergency Tree Removal Contact</h2>
          <p className="section-subtitle">
            Available 24/7 for tree emergencies in St. George and Washington County
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <h3>
                <span className="material-symbols-outlined">emergency</span>
                Emergency Line
              </h3>
              <p>
                <a href={`tel:${stGeorgeOfficeContact.phoneLink}`} style={{ color: '#dc2626', fontWeight: 'bold' }}>
                  {stGeorgeOfficeContact.phone}
                </a>
              </p>
            </div>
            <div className="contact-item">
              <h3>
                <span className="material-symbols-outlined">schedule</span>
                Availability
              </h3>
              <p>24 Hours / 7 Days a Week</p>
            </div>
            <div className="contact-item">
              <h3>
                <span className="material-symbols-outlined">location_on</span>
                Service Area
              </h3>
              <p>St. George & Washington County</p>
            </div>
          </div>

          <div className="final-cta">
            <a href={`tel:${stGeorgeOfficeContact.phoneLink}`} className="btn btn-primary" style={{ fontSize: '1.2rem' }}>
              🚨 CALL FOR EMERGENCY SERVICE
            </a>
            <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">
              Schedule Non-Emergency Service
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
