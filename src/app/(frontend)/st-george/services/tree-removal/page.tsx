import Image from 'next/image'

import HouseCallProLink from '@/components/HouseCallProLink'
import PhoneButton from '@/components/PhoneButton'
import { stGeorgeOfficeContact, emergencyContact } from '@/utils/contactInfo'

export const metadata = {
  title: 'Tree Removal St. George | Safe Tree Removal Services | Clean Cuts Trees',
  description: 'Professional tree removal in St. George, Utah. Safe removal of unwanted, diseased & dangerous trees. Rocky terrain specialists with ISA certified arborists serving Hurricane, Ivins & Washington County. Free estimates!',
  keywords: 'tree removal St. George, tree cutting Hurricane, dangerous tree removal Ivins, rocky terrain tree removal Santa Clara, ISA certified arborist Washington Utah',
}

export default function TreeRemovalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <Image
          src="/optimized/Emergency-Tree-Service-Team-1600w.webp"
          alt="Professional tree removal services in St. George Utah - Clean Cuts Trees safe tree cutting and removal"
          fill
          priority
          className="hero-background"
          sizes="100vw"
        />
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Professional Tree Removal Services in St. George
            </h1>
            <h2 className="hero-subtitle">Safe, Complete Tree Removal for Rocky Terrain</h2>
            <p className="hero-description">
              Clean Cuts Trees specializes in safe, complete tree removal throughout St. George 
              and Washington County. Our ISA-certified arborists with over a decade of local 
              experience handle challenging removals in rocky terrain, tight spaces, and difficult 
              access areas while protecting your property and landscape using specialized equipment 
              designed for desert conditions.
            </p>
            <div className="hero-buttons">
              <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                📅 SCHEDULE REMOVAL
              </a>
              <a href={`tel:${stGeorgeOfficeContact.phoneLink}`} className="btn btn-phone">
                <span className="material-symbols-outlined">call</span>
                {stGeorgeOfficeContact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tree Removal Services */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Complete Tree Removal Services</h2>
          <p className="section-subtitle">
            Specialized equipment and techniques for St. George's challenging terrain
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-content">
                <h3>Hazardous Tree Removal</h3>
                <p>
                  Safe removal of dangerous, diseased, or structurally compromised trees that 
                  pose risks to people, property, or power lines in St. George's high wind environment.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Rocky Terrain Specialists</h3>
                <p>
                  Specialized equipment and techniques for tree removal in St. George's challenging 
                  rocky terrain, steep slopes, and difficult access locations throughout Washington County.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Large Tree Removal</h3>
                <p>
                  Expert removal of mature trees including cottonwoods, elms, and other large 
                  species using crane services and advanced rigging techniques when necessary.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Tight Space Removal</h3>
                <p>
                  Precise tree removal in confined areas between buildings, near pools, or in 
                  landscaped areas where protection of surrounding plants and structures is critical.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Dead Tree Removal</h3>
                <p>
                  Removal of dead and dying trees that can become extremely hazardous in desert 
                  winds, with careful attention to preventing property damage during removal.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Complete Cleanup</h3>
                <p>
                  Comprehensive debris removal, wood chipping, and site restoration leaving your 
                  property clean and ready for new landscaping or construction projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Remove Trees Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">Common Reasons for Tree Removal in St. George</h2>
          <div className="reasons-grid">
            <div className="reason-item">
              <div className="reason-icon">
                <span className="material-symbols-outlined">warning</span>
              </div>
              <h3>Safety Hazards</h3>
              <p>
                Trees that are dead, diseased, or structurally compromised pose significant risks 
                in St. George's high wind conditions and should be removed promptly.
              </p>
            </div>

            <div className="reason-item">
              <div className="reason-icon">
                <span className="material-symbols-outlined">construction</span>
              </div>
              <h3>Construction Projects</h3>
              <p>
                Tree removal for home additions, pool installations, or landscape renovations 
                requires careful planning and professional execution.
              </p>
            </div>

            <div className="reason-item">
              <div className="reason-icon">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <h3>Power Line Conflicts</h3>
              <p>
                Trees growing too close to power lines create safety hazards and require 
                professional removal to maintain safe electrical infrastructure.
              </p>
            </div>

            <div className="reason-item">
              <div className="reason-icon">
                <span className="material-symbols-outlined">home</span>
              </div>
              <h3>Property Damage Risk</h3>
              <p>
                Trees too close to homes, pools, or other structures may cause foundation 
                damage, roof problems, or create liability concerns.
              </p>
            </div>

            <div className="reason-item">
              <div className="reason-icon">
                <span className="material-symbols-outlined">sick</span>
              </div>
              <h3>Disease & Pest Control</h3>
              <p>
                Severely diseased or pest-infested trees may need removal to prevent spread 
                to healthy trees and maintain landscape health.
              </p>
            </div>

            <div className="reason-item">
              <div className="reason-icon">
                <span className="material-symbols-outlined">landscape</span>
              </div>
              <h3>Landscape Renovation</h3>
              <p>
                Updating landscape design for water conservation, better plant selection, 
                or aesthetic improvements may require strategic tree removal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="comprehensive-services">
        <div className="container">
          <h2 className="section-title">Our Professional Tree Removal Process</h2>
          <p className="section-subtitle">
            Safe, systematic approach to tree removal in challenging St. George terrain
          </p>

          <div className="service-details">
            <div className="service-detail">
              <h3>1. Site Assessment & Planning</h3>
              <p>
                Our certified arborists evaluate the tree, surrounding structures, utilities, and 
                terrain conditions to develop the safest, most efficient removal strategy. We 
                identify potential hazards and plan protection measures for your property.
              </p>
            </div>

            <div className="service-detail">
              <h3>2. Permits & Utility Clearance</h3>
              <p>
                We handle any required permits and coordinate with utility companies when necessary. 
                Our team ensures all safety protocols are followed and proper notifications are made 
                before beginning removal operations.
              </p>
            </div>

            <div className="service-detail">
              <h3>3. Safe Tree Removal</h3>
              <p>
                Using advanced rigging techniques, specialized equipment, and systematic cutting 
                methods, we safely remove trees piece by piece. Our approach minimizes risk to 
                people, property, and surrounding landscape.
              </p>
            </div>

            <div className="service-detail">
              <h3>4. Complete Cleanup & Restoration</h3>
              <p>
                We remove all debris, grind the stump if requested, and restore the area. Wood 
                can be processed into firewood or chips for mulch, and the site is left clean 
                and ready for your next landscaping project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Safety */}
      <section className="emergency-service">
        <div className="container">
          <div className="emergency-content">
            <div className="emergency-text">
              <h2>Specialized Equipment for Rocky Terrain</h2>
              <p>
                St. George's rocky landscape requires specialized equipment and techniques for 
                safe tree removal. Our team uses compact, maneuverable equipment designed for 
                challenging terrain, plus advanced rigging systems for precise tree removal 
                in difficult locations.
              </p>
              <ul className="emergency-features">
                <li>Compact equipment for rocky terrain and tight spaces</li>
                <li>Advanced rigging systems for controlled tree removal</li>
                <li>Crane services for large or difficult tree removals</li>
                <li>Protection systems for surrounding landscape and structures</li>
                <li>Comprehensive safety protocols and insurance coverage</li>
                <li>Environmentally responsible debris disposal and recycling</li>
              </ul>
              <div className="emergency-buttons">
                <HouseCallProLink className="btn btn-primary">
                  Schedule Assessment
                </HouseCallProLink>
                <PhoneButton 
                  phoneNumber={stGeorgeOfficeContact.phoneLink}
                  className="btn btn-phone"
                >
                  <span className="material-symbols-outlined">call</span>
                  Get Free Estimate
                </PhoneButton>
              </div>
            </div>
            <div className="emergency-gallery">
              <div className="gallery-image">
                <Image
                  src="/Emergency-Tree-Service-Team.jpg"
                  alt="Professional tree removal equipment for rocky terrain in St. George Utah"
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
                  alt="Safe tree removal techniques in challenging St. George terrain"
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
          <h2 className="section-title">Tree Removal FAQs</h2>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>How much does tree removal cost in St. George?</h3>
              <p>
                Tree removal costs vary based on size, location, accessibility, and complexity. 
                Rocky terrain and tight spaces may require specialized techniques. We provide 
                detailed free estimates with no hidden fees or surprises.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you remove trees in rocky areas and steep slopes?</h3>
              <p>
                Yes, we specialize in tree removal in St. George's challenging rocky terrain. 
                Our team has specialized equipment and extensive experience working on steep 
                slopes and in rocky areas throughout Washington County.
              </p>
            </div>

            <div className="faq-item">
              <h3>Is stump removal included in tree removal services?</h3>
              <p>
                Stump grinding is typically a separate service but can be included in your 
                tree removal package. We'll discuss stump removal options during your 
                free estimate and provide pricing for complete removal.
              </p>
            </div>

            <div className="faq-item">
              <h3>How long does tree removal take?</h3>
              <p>
                Most tree removals are completed in one day, though large or complex removals 
                in challenging terrain may take longer. We'll provide an estimated timeline 
                during your consultation based on the specific project requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">
            Professional Tree Removal in St. George
          </h2>
          <p className="section-subtitle">
            Serving St. George, Hurricane, Ivins, Santa Clara, Washington, and Leeds
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <h3>
                <span className="material-symbols-outlined">location_on</span>
                St. George Office
              </h3>
              <p>{stGeorgeOfficeContact.address.full}</p>
            </div>
            <div className="contact-item">
              <h3>
                <span className="material-symbols-outlined">call</span>
                Phone
              </h3>
              <p>
                <PhoneButton phoneNumber={stGeorgeOfficeContact.phoneLink} className="" displayText={stGeorgeOfficeContact.phone} />
              </p>
            </div>
            <div className="contact-item">
              <h3>
                <span className="material-symbols-outlined">emergency</span>
                Emergency Service
              </h3>
              <p>24/7: <PhoneButton phoneNumber={emergencyContact.phoneLink} className="" displayText={emergencyContact.phone} /></p>
            </div>
          </div>

          <div className="final-cta">
            <HouseCallProLink className="btn btn-primary btn-large">
              📅 SCHEDULE TREE REMOVAL
            </HouseCallProLink>
            <PhoneButton 
              phoneNumber={stGeorgeOfficeContact.phoneLink}
              className="btn btn-secondary"
            >
              💰 GET FREE ESTIMATE
            </PhoneButton>
          </div>
        </div>
      </section>
    </>
  )
}
