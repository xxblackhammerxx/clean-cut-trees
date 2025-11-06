import Image from 'next/image'

import { stGeorgeOfficeContact, emergencyContact } from '@/utils/contactInfo'

export const metadata = {
  title: 'Tree Trimming & Pruning St. George | Professional Tree Care | Clean Cuts Trees',
  description: 'Expert tree trimming and pruning in St. George, Utah. Desert-specialized ISA certified arborists providing crown thinning, deadwood removal & wind-resistant pruning. Serving Hurricane, Ivins & Washington County.',
  keywords: 'tree trimming St. George, tree pruning Hurricane, ISA certified arborist Ivins, crown thinning Santa Clara, deadwood removal Washington Utah',
}

export default function TreeTrimmingPruningPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <Image
          src="/optimized/Emergency-Tree-Service-Team-1600w.webp"
          alt="Professional tree trimming and pruning services in St. George Utah - Clean Cuts Trees certified arborists"
          fill
          priority
          className="hero-background"
          sizes="100vw"
        />
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Professional Tree Trimming & Pruning in St. George
            </h1>
            <h2 className="hero-subtitle">Desert-Specialized Tree Care Services</h2>
            <p className="hero-description">
              Clean Cuts Trees provides expert tree trimming and pruning services designed for 
              St. George's unique desert climate. Our ISA-certified arborists with over a decade 
              of local experience understand how to maintain healthy, beautiful trees that can 
              withstand high winds and drought conditions while enhancing your property's value 
              and safety.
            </p>
            <div className="hero-buttons">
              <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                📅 SCHEDULE TRIMMING
              </a>
              <a href={`tel:${stGeorgeOfficeContact.phoneLink}`} className="btn btn-phone">
                <span className="material-symbols-outlined">call</span>
                {stGeorgeOfficeContact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trimming Services */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">St. George Tree Trimming & Pruning Services</h2>
          <p className="section-subtitle">
            Specialized techniques for desert climate tree health and wind resistance
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-content">
                <h3>Crown Thinning</h3>
                <p>
                  Selective removal of branches to reduce wind resistance and allow better airflow 
                  through the tree canopy, essential for St. George's high wind conditions.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Deadwood Removal</h3>
                <p>
                  Removal of dead, diseased, or damaged branches that can become hazardous in 
                  desert winds and compromise the tree's overall health and structure.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Structural Pruning</h3>
                <p>
                  Strategic pruning to develop strong tree structure and prevent branch failure, 
                  especially important for young trees in harsh desert conditions.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Clearance Pruning</h3>
                <p>
                  Trimming branches away from buildings, power lines, and walkways to maintain 
                  proper clearances and prevent damage during wind events.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Desert Tree Maintenance</h3>
                <p>
                  Specialized pruning techniques for desert-adapted trees, focusing on water 
                  conservation and heat stress reduction while maintaining tree health.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Fruit Tree Pruning</h3>
                <p>
                  Specialized pruning for fruit trees to maximize production while maintaining 
                  tree health in St. George's challenging desert growing conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">Benefits of Professional Tree Trimming in St. George</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>Wind Damage Prevention</h3>
              <p>
                Proper pruning reduces wind resistance and prevents branch breakage during St. George's 
                frequent high wind events, protecting your property and surrounding areas.
              </p>
            </div>

            <div className="benefit-item">
              <h3>Improved Tree Health</h3>
              <p>
                Removing dead and diseased wood prevents the spread of disease and pests while 
                improving the tree's ability to cope with desert stress conditions.
              </p>
            </div>

            <div className="benefit-item">
              <h3>Enhanced Safety</h3>
              <p>
                Regular trimming eliminates hazardous branches and maintains proper clearances 
                from structures, reducing liability and protecting your family.
              </p>
            </div>

            <div className="benefit-item">
              <h3>Better Tree Structure</h3>
              <p>
                Professional pruning develops strong tree architecture that can better withstand 
                environmental stresses and have a longer, healthier lifespan.
              </p>
            </div>

            <div className="benefit-item">
              <h3>Increased Property Value</h3>
              <p>
                Well-maintained trees enhance curb appeal and property value while providing 
                essential shade in the desert climate.
              </p>
            </div>

            <div className="benefit-item">
              <h3>Desert Adaptation</h3>
              <p>
                Specialized pruning techniques help trees adapt to desert conditions, reducing 
                water stress and improving survival rates in harsh climates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timing Section */}
      <section className="comprehensive-services">
        <div className="container">
          <h2 className="section-title">Optimal Timing for Tree Trimming in St. George</h2>
          <p className="section-subtitle">
            Desert climate considerations for healthy pruning practices
          </p>

          <div className="service-details">
            <div className="service-detail">
              <h3>Fall & Winter Pruning (October - February)</h3>
              <p>
                The ideal time for most tree pruning in St. George. Cooler temperatures reduce 
                stress on freshly cut trees, and dormant season pruning promotes healthy spring 
                growth while minimizing disease risk.
              </p>
            </div>

            <div className="service-detail">
              <h3>Early Spring Pruning (March - April)</h3>
              <p>
                Suitable for fruit trees and spring-flowering species. Pruning before active 
                growth begins allows trees to heal quickly and direct energy into new, healthy growth.
              </p>
            </div>

            <div className="service-detail">
              <h3>Summer Considerations</h3>
              <p>
                Limited pruning during extreme heat months (June-August) to avoid stress. Emergency 
                pruning for safety reasons is always performed regardless of season, with special 
                care taken to minimize tree stress.
              </p>
            </div>

            <div className="service-detail">
              <h3>Storm Season Preparation</h3>
              <p>
                Pre-season pruning before typical wind periods helps reduce storm damage risk. 
                We recommend annual assessment and pruning to maintain wind-resistant tree structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="emergency-service">
        <div className="container">
          <div className="emergency-content">
            <div className="emergency-text">
              <h2>Our Professional Trimming Process</h2>
              <p>
                Every tree trimming project begins with careful assessment of your tree's health, 
                structure, and specific needs in St. George's desert environment. Our certified 
                arborists develop customized pruning plans that enhance tree health while addressing 
                safety concerns and aesthetic goals.
              </p>
              <ul className="emergency-features">
                <li>Comprehensive tree health assessment and risk evaluation</li>
                <li>Customized pruning plan based on species and local conditions</li>
                <li>Professional-grade equipment for precise, clean cuts</li>
                <li>Proper wound treatment to prevent disease and pest entry</li>
                <li>Complete debris removal and site cleanup</li>
                <li>Follow-up care recommendations and scheduling</li>
              </ul>
              <div className="emergency-buttons">
                <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Schedule Assessment
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
                  alt="Professional tree trimming equipment and certified arborists in St. George Utah"
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
                  alt="Tree pruning and crown thinning services in St. George desert climate"
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
          <h2 className="section-title">Tree Trimming & Pruning FAQs</h2>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>How often should trees be trimmed in St. George's climate?</h3>
              <p>
                Most trees in St. George benefit from professional trimming every 3-5 years, 
                though some fast-growing species may need annual attention. Desert conditions 
                can stress trees, making regular maintenance crucial for health and safety.
              </p>
            </div>

            <div className="faq-item">
              <h3>Is summer tree trimming safe in the desert heat?</h3>
              <p>
                We avoid non-emergency trimming during peak summer heat to prevent additional 
                stress on trees. However, hazardous branches and emergency situations are 
                addressed year-round with special care to minimize tree stress.
              </p>
            </div>

            <div className="faq-item">
              <h3>How does desert climate affect pruning techniques?</h3>
              <p>
                Desert pruning focuses on wind resistance, heat tolerance, and water conservation. 
                We use specialized techniques like crown thinning to reduce wind sail while 
                maintaining enough canopy for shade and protection.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you trim all types of trees found in St. George?</h3>
              <p>
                Yes, our arborists are experienced with both native desert species and adapted 
                ornamental trees common in St. George landscaping. We understand the specific 
                needs of each species in the local climate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">
            Professional Tree Trimming Services in St. George
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
                <span className="material-symbols-outlined">verified_user</span>
                Certified Arborists
              </h3>
              <p>Licensed and insured tree care professionals</p>
            </div>
          </div>

          <div className="final-cta">
            <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
              📅 SCHEDULE TREE TRIMMING
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
