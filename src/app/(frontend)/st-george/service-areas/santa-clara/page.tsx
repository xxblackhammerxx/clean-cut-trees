import Image from 'next/image'

import { stGeorgeOfficeContact, emergencyContact } from '@/utils/contactInfo'

export const metadata = {
  title: 'Tree Service Santa Clara UT | Professional Tree Care | Clean Cuts Trees',
  description: 'Expert tree service in Santa Clara, Utah. Professional tree removal, trimming, emergency services & arborist care. Serving Santa Clara River communities. Free estimates!',
  keywords: 'Santa Clara Utah tree service, tree removal Santa Clara UT, tree trimming Santa Clara Utah, arborist Santa Clara River, emergency tree service',
}

export default function SantaClaraServiceAreaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <Image
          src="/optimized/Emergency-Tree-Service-Team-1600w.webp"
          alt="Professional tree service in Santa Clara Utah - Clean Cuts Trees serving Santa Clara River communities"
          fill
          priority
          className="hero-background"
          sizes="100vw"
        />
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Professional Tree Service in Santa Clara, Utah
            </h1>
            <h2 className="hero-subtitle">Expert Tree Care for Santa Clara River Communities</h2>
            <p className="hero-description">
              Clean Cuts Trees provides comprehensive tree services throughout Santa Clara and 
              the Santa Clara River area. Our certified arborists understand the unique challenges 
              of Santa Clara's riparian environment and desert climate, delivering professional 
              tree care, emergency services, and complete tree management solutions.
            </p>
            <div className="hero-buttons">
              <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                📅 BOOK SANTA CLARA SERVICE
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
          <h2 className="section-title">Santa Clara Utah Tree Services</h2>
          <p className="section-subtitle">
            Specialized care for Santa Clara's river environment and desert landscape
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-content">
                <h3>Riparian Tree Care</h3>
                <p>
                  Specialized care for cottonwoods, willows, and other trees along the Santa Clara 
                  River, including flood damage recovery and water management considerations.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Emergency Storm Response</h3>
                <p>
                  24/7 emergency response for wind damage, flash flood impact, and storm-related 
                  tree emergencies throughout Santa Clara and surrounding areas.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Residential Tree Services</h3>
                <p>
                  Complete tree care for Santa Clara's residential communities, including mature 
                  tree maintenance and new landscape establishment.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Commercial Tree Management</h3>
                <p>
                  Professional tree services for Santa Clara's commercial properties, municipal 
                  areas, and public spaces with coordinated maintenance schedules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* River Environment Features */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">Santa Clara River Environment Expertise</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <span className="material-symbols-outlined">water</span>
              </div>
              <h3>River Corridor Management</h3>
              <p>
                Specialized knowledge of Santa Clara River ecology and riparian tree management, 
                including native species preservation and flood-resistant practices.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <span className="material-symbols-outlined">flood</span>
              </div>
              <h3>Flood Recovery Services</h3>
              <p>
                Expert assessment and recovery services for trees affected by Santa Clara River 
                flooding, including damage evaluation and restoration planning.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <h3>Native Species Care</h3>
              <p>
                Comprehensive care for Santa Clara's native cottonwoods, willows, and desert 
                species, preserving natural habitat while ensuring safety.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <span className="material-symbols-outlined">home_and_garden</span>
              </div>
              <h3>Landscape Integration</h3>
              <p>
                Expert integration of landscape trees with Santa Clara's natural environment, 
                balancing aesthetics with ecological preservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">Santa Clara Utah Tree Service Contact</h2>
          <p className="section-subtitle">
            Professional tree care for Santa Clara River communities
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
              <p>Available 24/7 for Santa Clara area</p>
            </div>
            <div className="contact-item">
              <h3>
                <span className="material-symbols-outlined">assignment</span>
                Free Estimates
              </h3>
              <p>Professional assessment for all Santa Clara properties</p>
            </div>
          </div>

          <div className="final-cta">
            <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
              📅 SCHEDULE SANTA CLARA SERVICE
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
