import Image from 'next/image'

import { stGeorgeOfficeContact, emergencyContact } from '@/utils/contactInfo'

export const metadata = {
  title: 'Tree Service Leeds UT | Professional Tree Care & Removal | Clean Cuts Trees',
  description: 'Expert tree service in Leeds, Utah. Professional tree removal, trimming, emergency services for Leeds rural properties. Specialized equipment for challenging terrain. Free estimates!',
  keywords: 'Leeds Utah tree service, tree removal Leeds UT, rural tree service Leeds, emergency tree removal Leeds Utah, arborist Leeds',
}

export default function LeedsServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <Image
          src="/optimized/Emergency-Tree-Service-Team-1600w.webp"
          alt="Professional tree service in Leeds Utah - Clean Cuts Trees serving Leeds rural properties"
          fill
          priority
          className="hero-background"
          sizes="100vw"
        />
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Professional Tree Service in Leeds, Utah
            </h1>
            <h2 className="hero-subtitle">Rural Property Tree Care Specialists</h2>
            <p className="hero-description">
              Clean Cuts Trees provides specialized tree services for Leeds and surrounding 
              rural areas. Our team understands the unique challenges of Leeds' remote locations, 
              challenging terrain, and diverse property types, delivering professional tree 
              removal, emergency services, and comprehensive tree care with specialized equipment.
            </p>
            <div className="hero-buttons">
              <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                📅 BOOK LEEDS SERVICE
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
          <h2 className="section-title">Leeds Utah Tree Services</h2>
          <p className="section-subtitle">
            Specialized tree care for Leeds' rural properties and challenging terrain
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-content">
                <h3>Rural Property Tree Services</h3>
                <p>
                  Comprehensive tree care for Leeds' rural properties, ranches, and remote 
                  locations with specialized equipment for challenging access situations.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Challenging Terrain Specialists</h3>
                <p>
                  Expert tree removal and care in Leeds' rugged terrain including steep slopes, 
                  rocky areas, and remote locations requiring specialized equipment and techniques.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Emergency Response</h3>
                <p>
                  24/7 emergency tree services for Leeds area properties, including rapid response 
                  for wind damage and storm-related tree emergencies in remote locations.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Large Property Management</h3>
                <p>
                  Tree management services for Leeds' large properties, including multiple-tree 
                  projects, land clearing, and ongoing maintenance programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leeds-Specific Features */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">Leeds Rural Property Expertise</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <span className="material-symbols-outlined">landscape</span>
              </div>
              <h3>Remote Access Specialists</h3>
              <p>
                Leeds' rural properties often require specialized access solutions. Our equipment 
                and techniques are designed for remote locations and challenging terrain conditions.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <span className="material-symbols-outlined">agriculture</span>
              </div>
              <h3>Ranch & Farm Tree Services</h3>
              <p>
                Professional tree services for Leeds area ranches and agricultural properties, 
                including windbreak maintenance and pasture tree management.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <span className="material-symbols-outlined">emergency</span>
              </div>
              <h3>Extended Response Area</h3>
              <p>
                Emergency services extending throughout the Leeds area and surrounding rural 
                communities with coordination for remote emergency situations.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <span className="material-symbols-outlined">precision_manufacturing</span>
              </div>
              <h3>Specialized Equipment</h3>
              <p>
                Compact, all-terrain equipment designed for Leeds' challenging access conditions, 
                rocky terrain, and variable ground conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Leeds Utah Tree Service Contact</h2>
          <p className="section-subtitle">
            Professional tree care for Leeds rural properties and surrounding areas
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
              <p>Available 24/7 for Leeds area</p>
            </div>
            <div className="contact-item">
              <h3>
                <span className="material-symbols-outlined">assignment</span>
                Free Estimates
              </h3>
              <p>Professional assessment for all Leeds properties</p>
            </div>
          </div>

          <div className="final-cta">
            <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
              📅 SCHEDULE LEEDS SERVICE
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
