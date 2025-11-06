import Image from 'next/image'

import { stGeorgeOfficeContact, emergencyContact } from '@/utils/contactInfo'

export const metadata = {
  title: 'Tree Service Washington UT | Professional Tree Care | Clean Cuts Trees',
  description: 'Expert tree service in Washington, Utah. Professional tree removal, trimming, emergency services & arborist care. Serving Washington City & surrounding areas. Free estimates!',
  keywords: 'Washington Utah tree service, tree removal Washington UT, tree trimming Washington City, arborist Washington Utah, emergency tree service',
}

export default function WashingtonServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <Image
          src="/optimized/Emergency-Tree-Service-Team-1600w.webp"
          alt="Professional tree service in Washington Utah - Clean Cuts Trees serving Washington City"
          fill
          priority
          className="hero-background"
          sizes="100vw"
        />
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Professional Tree Service in Washington, Utah
            </h1>
            <h2 className="hero-subtitle">Expert Tree Care for Washington City</h2>
            <p className="hero-description">
              Clean Cuts Trees provides comprehensive tree services throughout Washington City 
              and surrounding areas. Our certified arborists understand Washington's unique 
              desert environment and growing community needs, delivering professional tree 
              removal, emergency services, trimming, and complete tree care solutions.
            </p>
            <div className="hero-buttons">
              <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                📅 BOOK WASHINGTON SERVICE
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
          <h2 className="section-title">Washington Utah Tree Services</h2>
          <p className="section-subtitle">
            Professional tree care for Washington City's growing communities
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-content">
                <h3>Community Tree Management</h3>
                <p>
                  Professional tree services for Washington City's residential communities, 
                  commercial areas, and municipal properties with coordinated maintenance.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>New Development Tree Services</h3>
                <p>
                  Tree care for Washington's growing residential and commercial developments, 
                  including new construction and landscape establishment.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Emergency Tree Response</h3>
                <p>
                  24/7 emergency response for wind damage, storm emergencies, and hazardous 
                  tree situations throughout Washington City and surrounding areas.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Desert Landscape Tree Care</h3>
                <p>
                  Specialized care for trees in Washington's desert landscape, including 
                  drought management and heat tolerance optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Washington City Features */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">Washington City Tree Care Expertise</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <span className="material-symbols-outlined">location_city</span>
              </div>
              <h3>Growing Community Services</h3>
              <p>
                Washington City's rapid growth requires professional tree management for new 
                neighborhoods, commercial areas, and infrastructure development projects.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <span className="material-symbols-outlined">construction</span>
              </div>
              <h3>Development Tree Services</h3>
              <p>
                Expert tree services for Washington's ongoing development, including pre-construction 
                assessment, protection, and post-construction landscape establishment.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <span className="material-symbols-outlined">park</span>
              </div>
              <h3>Municipal Tree Care</h3>
              <p>
                Professional maintenance for Washington City's parks, public spaces, and 
                municipal trees with coordinated scheduling and quality standards.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <h3>HOA & Community Services</h3>
              <p>
                Comprehensive tree maintenance programs for Washington's HOAs and planned 
                communities with consistent quality and professional management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Washington Utah Tree Service Contact</h2>
          <p className="section-subtitle">
            Professional tree care for Washington City and surrounding areas
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
              <p>Available 24/7 for Washington City area</p>
            </div>
            <div className="contact-item">
              <h3>
                <span className="material-symbols-outlined">assignment</span>
                Free Estimates
              </h3>
              <p>Professional assessment for all Washington properties</p>
            </div>
          </div>

          <div className="final-cta">
            <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
              📅 SCHEDULE WASHINGTON SERVICE
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
