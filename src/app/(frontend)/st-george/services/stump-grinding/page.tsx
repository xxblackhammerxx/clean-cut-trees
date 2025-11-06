import Image from 'next/image'

import { stGeorgeOfficeContact, emergencyContact } from '@/utils/contactInfo'

export const metadata = {
  title: 'Stump Grinding St. George | Stump Removal Services | Clean Cuts Trees',
  description: 'Professional stump grinding and removal in St. George, Utah. Complete stump elimination for rocky terrain. ISA certified arborists serving Hurricane, Ivins & Washington County. Free estimates!',
  keywords: 'stump grinding St. George, stump removal Hurricane, tree stump grinding Ivins, rocky terrain stump removal Santa Clara, ISA certified arborist Washington Utah',
}

export default function StumpGrindingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <Image
          src="/optimized/Emergency-Tree-Service-Team-1600w.webp"
          alt="Professional stump grinding and removal services in St. George Utah - Clean Cuts Trees complete stump elimination"
          fill
          priority
          className="hero-background"
          sizes="100vw"
        />
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Professional Stump Grinding & Removal in St. George
            </h1>
            <h2 className="hero-subtitle">Complete Stump Elimination for Rocky Terrain</h2>
            <p className="hero-description">
              Clean Cuts Trees provides professional stump grinding and removal services throughout 
              St. George and Washington County. Our specialized equipment and experienced operators 
              with over a decade of local experience handle stumps in rocky terrain, tight spaces, 
              and challenging locations, completely eliminating unsightly stumps and reclaiming 
              your landscape.
            </p>
            <div className="hero-buttons">
              <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                📅 SCHEDULE STUMP GRINDING
              </a>
              <a href={`tel:${stGeorgeOfficeContact.phoneLink}`} className="btn btn-phone">
                <span className="material-symbols-outlined">call</span>
                {stGeorgeOfficeContact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stump Grinding Services */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Complete Stump Grinding Services</h2>
          <p className="section-subtitle">
            Specialized equipment for St. George's rocky terrain and challenging locations
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-content">
                <h3>Rocky Terrain Stump Grinding</h3>
                <p>
                  Specialized equipment designed for St. George's rocky soil conditions, capable 
                  of grinding stumps in challenging terrain where traditional equipment fails.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Large Stump Removal</h3>
                <p>
                  Complete grinding of large stumps from mature trees including cottonwoods, 
                  elms, and other substantial species common in St. George landscapes.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Tight Access Grinding</h3>
                <p>
                  Compact stump grinders for narrow gates, tight spaces between buildings, 
                  and areas with limited access throughout residential and commercial properties.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Multiple Stump Projects</h3>
                <p>
                  Efficient grinding of multiple stumps from land clearing, development projects, 
                  or landscape renovation with volume pricing for larger projects.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Deep Root Grinding</h3>
                <p>
                  Thorough grinding of main root systems to prevent regrowth and eliminate 
                  future sprouting, especially important for persistent species.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Site Restoration</h3>
                <p>
                  Complete cleanup, wood chip removal or distribution, soil backfill, and 
                  site preparation for new landscaping or construction projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Remove Stumps */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">Why Remove Stumps in St. George?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <span className="material-symbols-outlined">landscape</span>
              </div>
              <h3>Landscape Aesthetics</h3>
              <p>
                Eliminate unsightly stumps that detract from your property's appearance and 
                create obstacles in your landscape design and maintenance routines.
              </p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <h3>Safety Hazards</h3>
              <p>
                Remove tripping hazards and obstacles that can cause injuries, especially 
                dangerous for children playing or during evening hours when visibility is reduced.
              </p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <span className="material-symbols-outlined">bug_report</span>
              </div>
              <h3>Pest Prevention</h3>
              <p>
                Eliminate breeding grounds for termites, carpenter ants, and other wood-boring 
                insects that can spread to healthy trees and even your home's structure.
              </p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <span className="material-symbols-outlined">grass</span>
              </div>
              <h3>Lawn Maintenance</h3>
              <p>
                Allow for easier mowing, irrigation installation, and landscape maintenance 
                without obstacles that damage equipment or create maintenance difficulties.
              </p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h3>Property Value</h3>
              <p>
                Increase property value and curb appeal by eliminating unsightly stumps that 
                can make properties appear neglected or poorly maintained.
              </p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <span className="material-symbols-outlined">construction</span>
              </div>
              <h3>Construction Access</h3>
              <p>
                Clear areas for new construction, pool installation, or landscape projects 
                without underground obstacles from extensive root systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="comprehensive-services">
        <div className="container">
          <h2 className="section-title">Our Stump Grinding Process</h2>
          <p className="section-subtitle">
            Efficient, thorough stump removal designed for St. George's challenging conditions
          </p>

          <div className="service-details">
            <div className="service-detail">
              <h3>1. Site Assessment & Access Planning</h3>
              <p>
                We evaluate stump size, location, surrounding landscape, and access routes to 
                determine the best equipment and approach. Rocky terrain and tight spaces require 
                specialized planning for efficient, safe removal.
              </p>
            </div>

            <div className="service-detail">
              <h3>2. Utility Location & Protection</h3>
              <p>
                Before grinding, we locate underground utilities, irrigation lines, and other 
                infrastructure to prevent damage. Property protection measures are installed 
                to safeguard surrounding landscape and structures.
              </p>
            </div>

            <div className="service-detail">
              <h3>3. Professional Stump Grinding</h3>
              <p>
                Using appropriate equipment for the terrain and access conditions, we grind 
                stumps below ground level, typically 6-12 inches deep, and remove major root 
                systems to prevent regrowth and future problems.
              </p>
            </div>

            <div className="service-detail">
              <h3>4. Cleanup & Site Restoration</h3>
              <p>
                We remove wood chips (or distribute them as mulch if desired), backfill with 
                quality soil, and restore the area. Sites are left clean and ready for immediate 
                replanting or landscaping projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Expertise */}
      <section className="emergency-service">
        <div className="container">
          <div className="emergency-content">
            <div className="emergency-text">
              <h2>Specialized Equipment for Rocky Terrain</h2>
              <p>
                St. George's rocky soil and challenging terrain require specialized stump grinding 
                equipment. Our fleet includes compact grinders for tight spaces, powerful units 
                for large stumps, and track machines for rocky, uneven terrain throughout 
                Washington County.
              </p>
              <ul className="emergency-features">
                <li>Compact track grinders for rocky terrain and steep slopes</li>
                <li>Self-propelled units for tight access and gate restrictions</li>
                <li>Large capacity grinders for oversized stumps and root systems</li>
                <li>Specialized cutting teeth designed for rocky soil conditions</li>
                <li>Property protection systems and cleanup equipment</li>
                <li>Professional operators trained in challenging terrain operations</li>
              </ul>
              <div className="emergency-buttons">
                <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Schedule Service
                </a>
                <a href={`tel:${stGeorgeOfficeContact.phoneLink}`} className="btn btn-phone">
                  <span className="material-symbols-outlined">call</span>
                  Get Free Quote
                </a>
              </div>
            </div>
            <div className="emergency-gallery">
              <div className="gallery-image">
                <Image
                  src="/Emergency-Tree-Service-Team.jpg"
                  alt="Professional stump grinding equipment for rocky terrain in St. George Utah"
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
                  alt="Stump grinding and removal services in St. George challenging terrain"
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
          <h2 className="section-title">Stump Grinding FAQs</h2>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>How deep do you grind stumps in rocky soil?</h3>
              <p>
                We typically grind stumps 6-12 inches below ground level, depending on soil 
                conditions and intended use of the area. Rocky terrain may require specialized 
                techniques, but we ensure thorough removal to prevent regrowth.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can you access stumps in tight spaces and rocky areas?</h3>
              <p>
                Yes, we have compact, track-mounted grinders specifically designed for tight 
                access and rocky terrain. Our equipment can navigate narrow gates, slopes, 
                and challenging ground conditions throughout St. George.
              </p>
            </div>

            <div className="faq-item">
              <h3>What happens to the wood chips after grinding?</h3>
              <p>
                Wood chips can be removed completely, spread as mulch in landscaped areas, 
                or partially removed based on your preference. We'll discuss options during 
                your estimate and include cleanup in our service.
              </p>
            </div>

            <div className="faq-item">
              <h3>How much does stump grinding cost in St. George?</h3>
              <p>
                Costs vary based on stump size, quantity, access difficulty, and terrain 
                challenges. Rocky soil and tight access may affect pricing. We provide 
                detailed free estimates with transparent pricing and no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">
            Professional Stump Grinding in St. George
          </h2>
          <p className="section-subtitle">
            Serving St. George, Hurricane, Ivins, Santa Clara, Washington, and Leeds
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
                <span className="material-symbols-outlined">assignment</span>
                Free Estimates
              </h3>
              <p>Professional assessment and detailed quotes</p>
            </div>
            <div className="contact-item">
              <h3>
                <span className="material-symbols-outlined">landscape</span>
                Rocky Terrain Specialists
              </h3>
              <p>Specialized equipment for challenging conditions</p>
            </div>
          </div>

          <div className="final-cta">
            <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
              📅 SCHEDULE STUMP GRINDING
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
