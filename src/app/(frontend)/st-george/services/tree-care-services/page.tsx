import Image from 'next/image'

import { stGeorgeOfficeContact, emergencyContact } from '@/utils/contactInfo'

export const metadata = {
  title: 'Tree Care Services St. George | Desert Tree Specialists | Clean Cuts Trees',
  description: 'Expert tree care services in St. George, Utah. Desert climate specialists providing comprehensive tree health, disease prevention & maintenance. Serving Hurricane, Ivins, Santa Clara & Washington County.',
  keywords: 'tree care St. George, desert tree specialists Hurricane, tree health Ivins, arborist Santa Clara, tree maintenance Washington Utah, ISA certified arborists',
}

export default function TreeCareServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <Image
          src="/optimized/Emergency-Tree-Service-Team-1600w.webp"
          alt="Professional tree care services in St. George Utah - Clean Cuts Trees desert climate specialists and ISA certified arborists"
          fill
          priority
          className="hero-background"
          sizes="100vw"
        />
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Professional Tree Care Services in St. George
            </h1>
            <h2 className="hero-subtitle">Desert Climate Tree Care Specialists</h2>
            <p className="hero-description">
              Clean Cuts Trees provides comprehensive tree care services specifically designed for 
              St. George's unique desert environment. Our ISA-certified arborists have over a 
              decade of experience maintaining healthy trees in Southern Utah's challenging climate, 
              helping your trees thrive despite extreme heat, drought, and high winds.
            </p>
            <div className="hero-buttons">
              <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                📅 SCHEDULE TREE CARE
              </a>
              <a href={`tel:${stGeorgeOfficeContact.phoneLink}`} className="btn btn-phone">
                <span className="material-symbols-outlined">call</span>
                {stGeorgeOfficeContact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Tree Care Services */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Comprehensive Desert Tree Care Services</h2>
          <p className="section-subtitle">
            Expert care for St. George's unique desert environment and tree species
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-content">
                <h3>Tree Health Assessment</h3>
                <p>
                  Comprehensive evaluation of tree health, identifying stress factors, diseases, 
                  and structural issues specific to desert climate conditions and local soil types.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Desert Tree Fertilization</h3>
                <p>
                  Specialized nutrient programs designed for St. George's alkaline soils and 
                  mineral-rich conditions, promoting healthy growth in challenging environments.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Drought Stress Management</h3>
                <p>
                  Expert care for drought-stressed trees including proper watering strategies, 
                  soil improvement, and protective treatments for extreme heat periods.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Disease Prevention & Treatment</h3>
                <p>
                  Proactive disease management including fungal prevention, pest control, and 
                  treatment programs specific to common desert tree diseases and infestations.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Soil Analysis & Improvement</h3>
                <p>
                  Professional soil testing and amendment recommendations to improve tree health 
                  in St. George's challenging soil conditions and high mineral content.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-content">
                <h3>Tree Support Systems</h3>
                <p>
                  Installation of cabling, bracing, and support systems to help trees withstand 
                  high winds and structural stress common in desert environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Expertise Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">Desert Climate Tree Care Expertise</h2>
          <p className="section-subtitle">
            Over a decade of specialized experience in St. George's unique environment
          </p>
          
          <div className="expertise-content">
            <div className="expertise-text">
              <h3>Local Environmental Expertise</h3>
              <p>
                At 2,860 feet elevation, St. George presents unique environmental challenges that 
                require specialized knowledge and experience. Our ISA-certified arborists have 
                developed comprehensive expertise working with both native desert species and 
                adapted ornamental trees that thrive in Southern Utah's extreme conditions.
              </p>
              
              <h3>Common Tree Species We Specialize In:</h3>
              <ul className="species-list">
                <li><strong>Desert Willow</strong> - Native drought-tolerant species requiring minimal water</li>
                <li><strong>Palo Verde</strong> - Desert-adapted with specialized pruning needs</li>
                <li><strong>Texas Red Oak</strong> - Heat-tolerant ornamental requiring careful management</li>
                <li><strong>Chinese Pistache</strong> - Popular shade tree needing wind protection</li>
                <li><strong>Jujube</strong> - Extremely drought-tolerant fruit tree</li>
                <li><strong>Pine Species</strong> - Various adapted pines requiring specific care</li>
                <li><strong>Live Oak</strong> - Long-lived shade trees needing structural support</li>
                <li><strong>Mesquite</strong> - Native species requiring specialized pruning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Desert-Specific Challenges */}
      <section className="comprehensive-services">
        <div className="container">
          <h2 className="section-title">Addressing St. George's Unique Tree Care Challenges</h2>
          <p className="section-subtitle">
            Expert solutions for desert climate tree health and maintenance
          </p>

          <div className="service-details">
            <div className="service-detail">
              <h3>Extreme Heat & UV Protection</h3>
              <p>
                St. George's intense summer heat (often exceeding 110°F) and high UV exposure create 
                significant stress for trees. Our care programs include protective treatments, proper 
                pruning to maintain canopy density for self-shading, and heat stress mitigation 
                strategies developed through years of local experience.
              </p>
            </div>

            <div className="service-detail">
              <h3>Water Management & Conservation</h3>
              <p>
                Desert trees require precise water management - too little causes stress, too much 
                can cause root rot. Our experts design customized irrigation strategies, soil 
                improvement programs, and drought adaptation techniques that help trees thrive 
                while conserving precious water resources.
              </p>
            </div>

            <div className="service-detail">
              <h3>Alkaline Soil Conditions</h3>
              <p>
                St. George's alkaline soils (pH 7.5-8.5) can limit nutrient availability for many 
                tree species. Our soil specialists provide targeted treatments, pH management, and 
                specialized fertilization programs that address mineral deficiencies and improve 
                tree health in challenging soil conditions.
              </p>
            </div>

            <div className="service-detail">
              <h3>High Wind Damage Prevention</h3>
              <p>
                Southern Utah's frequent high winds require strategic tree management. We provide 
                structural pruning for wind resistance, support system installation, and preventive 
                care that reduces wind damage risk while maintaining tree health and aesthetic value.
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
              <h2>Our Comprehensive Tree Care Process</h2>
              <p>
                Every tree care program begins with a thorough assessment of your trees' health, 
                the local environment, and specific challenges posed by St. George's desert climate. 
                Our ISA-certified arborists create customized care plans that address immediate needs 
                and long-term tree health goals.
              </p>
              <ul className="emergency-features">
                <li>Comprehensive tree health evaluation and risk assessment</li>
                <li>Soil testing and environmental condition analysis</li>
                <li>Customized care plans for species-specific needs</li>
                <li>Preventive treatments for common desert tree issues</li>
                <li>Ongoing monitoring and maintenance scheduling</li>
                <li>Emergency care for heat stress and wind damage</li>
              </ul>
              <div className="emergency-buttons">
                <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Schedule Assessment
                </a>
                <a href={`tel:${stGeorgeOfficeContact.phoneLink}`} className="btn btn-phone">
                  <span className="material-symbols-outlined">call</span>
                  Get Expert Consultation
                </a>
              </div>
            </div>
            <div className="emergency-gallery">
              <div className="gallery-image">
                <Image
                  src="/Emergency-Tree-Service-Team.jpg"
                  alt="ISA certified arborists providing expert tree care assessment in St. George Utah desert climate"
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
                  alt="Professional tree health maintenance and desert climate care in St. George"
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

      {/* Seasonal Care Programs */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Year-Round Tree Care Programs</h2>
          <p className="section-subtitle">
            Seasonal care designed for St. George's desert climate patterns
          </p>

          <div className="seasonal-care-grid">
            <div className="season-card">
              <h3>Spring Care (March - May)</h3>
              <ul>
                <li>Pre-season health assessment and structural evaluation</li>
                <li>Fertilization with desert-specific nutrient blends</li>
                <li>Pest prevention treatments before active season</li>
                <li>Irrigation system evaluation and adjustment</li>
                <li>Pruning for optimal summer heat protection</li>
              </ul>
            </div>

            <div className="season-card">
              <h3>Summer Care (June - August)</h3>
              <ul>
                <li>Heat stress monitoring and intervention</li>
                <li>Deep watering programs during extreme heat</li>
                <li>Emergency response for heat-damaged trees</li>
                <li>UV protection for sensitive species</li>
                <li>Minimal pruning to avoid additional stress</li>
              </ul>
            </div>

            <div className="season-card">
              <h3>Fall Care (September - November)</h3>
              <ul>
                <li>Recovery assessment after summer stress</li>
                <li>Structural pruning and maintenance</li>
                <li>Soil improvement and amendment programs</li>
                <li>Disease treatment and prevention</li>
                <li>Winter preparation and protection</li>
              </ul>
            </div>

            <div className="season-card">
              <h3>Winter Care (December - February)</h3>
              <ul>
                <li>Dormant season pruning for optimal tree structure</li>
                <li>Cold protection for sensitive species</li>
                <li>Planning for spring care and improvements</li>
                <li>Equipment maintenance and preparation</li>
                <li>Soil analysis and amendment planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Tree Care */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">Why Choose Clean Cuts Trees for Tree Care in St. George?</h2>
          <p className="section-subtitle">
            Proven expertise, local knowledge, and commitment to tree health excellence
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h3>ISA Certified Arborists</h3>
              <p>Our team holds International Society of Arboriculture certifications, ensuring the highest standards of tree care knowledge and practice.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">wb_sunny</span>
              </div>
              <h3>Desert Climate Specialists</h3>
              <p>Over a decade of experience specifically in St. George's unique desert environment and challenging growing conditions.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">science</span>
              </div>
              <h3>Scientific Approach</h3>
              <p>Evidence-based tree care using the latest research and techniques adapted for desert tree health and maintenance.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <h3>Environmental Stewardship</h3>
              <p>Sustainable tree care practices that conserve water, protect local ecosystems, and enhance urban canopy health.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <h3>Fully Licensed & Insured</h3>
              <p>Complete licensing and comprehensive insurance coverage for your protection and peace of mind.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <h3>Ongoing Support</h3>
              <p>Continuous monitoring, maintenance scheduling, and emergency response for comprehensive tree care service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <h2 className="section-title">Tree Care FAQs for St. George</h2>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>What makes tree care different in St. George's desert climate?</h3>
              <p>
                St. George's extreme heat, low humidity, alkaline soils, and high winds create unique 
                challenges. Trees need specialized care including heat stress management, precise 
                watering schedules, alkaline soil treatments, and structural support for wind resistance. 
                Our arborists understand these specific local conditions.
              </p>
            </div>

            <div className="faq-item">
              <h3>How often should trees be assessed in desert conditions?</h3>
              <p>
                We recommend annual comprehensive assessments, with additional monitoring during 
                extreme weather periods. Desert trees face more environmental stress, making regular 
                professional evaluation crucial for early problem detection and preventive care.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can you help trees that are already showing heat stress?</h3>
              <p>
                Yes, we specialize in treating heat-stressed trees. Our recovery programs include 
                emergency watering protocols, protective treatments, soil improvement, and ongoing 
                monitoring to help stressed trees recover and develop better heat tolerance.
              </p>
            </div>

            <div className="faq-item">
              <h3>What tree species do you recommend for St. George landscapes?</h3>
              <p>
                We recommend drought-tolerant species adapted to desert conditions such as Desert 
                Willow, Palo Verde, Texas Red Oak, Chinese Pistache, and native Mesquite. Our 
                arborists can assess your specific site conditions and recommend the best species 
                for your landscape goals.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you provide emergency tree care services?</h3>
              <p>
                Yes, we provide emergency response for heat-damaged trees, wind damage, and other 
                urgent tree health situations. Desert conditions can create sudden tree emergencies, 
                and our team is experienced in rapid assessment and treatment.
              </p>
            </div>

            <div className="faq-item">
              <h3>How do you handle St. George's alkaline soil conditions?</h3>
              <p>
                We provide comprehensive soil testing, pH management, and specialized fertilization 
                programs designed for alkaline soils. Our treatments improve nutrient availability 
                and help trees thrive despite challenging soil chemistry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">
            Expert Tree Care Services for St. George & Southern Utah
          </h2>
          <p className="section-subtitle">
            Serving St. George, Hurricane, Ivins, Santa Clara, Washington, and Leeds with specialized desert tree care
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
                Free Consultation
              </h3>
              <p>Comprehensive tree health assessment and care recommendations</p>
            </div>
            <div className="contact-item">
              <h3>
                <span className="material-symbols-outlined">schedule</span>
                Emergency Service
              </h3>
              <p>Available for urgent tree health and safety situations</p>
            </div>
          </div>

          <div className="final-cta">
            <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
              📅 SCHEDULE TREE CARE ASSESSMENT
            </a>
            <a href={`tel:${stGeorgeOfficeContact.phoneLink}`} className="btn btn-secondary">
              🌳 GET EXPERT CONSULTATION
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
