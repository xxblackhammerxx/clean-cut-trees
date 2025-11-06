import Image from 'next/image'
import Link from 'next/link'

import { stGeorgeOfficeContact, emergencyContact } from '@/utils/contactInfo'

// Enable static generation for better performance
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export const metadata = {
  title: 'St. George Tree Service Clean Cuts Trees',
  description: 'Professional tree service in St. George, Utah. Tree removal, tree trimming, stump grinding & tree care. Serving Hurricane, Ivins, Santa Clara, Washington & Leeds. Free estimates!',
  keywords: 'St. George tree service, tree removal St. George, tree service Utah, tree trimming Hurricane, stump grinding Ivins, arborist Santa Clara',
  openGraph: {
    title: 'St. George Tree Service & Tree Care',
    description: 'Professional tree service in St. George, Utah. Emergency tree removal, tree trimming, stump grinding & tree care.',
    type: 'website',
    locale: 'en_US',
  },
}

const stGeorgeServices = [
  {
    id: 1,
    title: 'Tree Care & Services',
    slug: 'tree-care-services',
    description: 'Tree care for local desert climate trees and shrubs.',
  },
  {
    id: 2,
    title: 'Tree Trimming & Pruning',
    slug: 'tree-trimming-pruning',
    description: 'Professional tree trimming and pruning services to maintain healthy, beautiful trees',
  },
  {
    id: 3,
    title: 'Tree Removal',
    slug: 'tree-removal',
    description: 'Safe and complete tree removal for unwanted, diseased, or dangerous trees',
  },
  {
    id: 4,
    title: 'Stump Grinding',
    slug: 'stump-grinding',
    description: 'Complete stump removal and grinding services to reclaim your landscape',
  },
]

const stGeorgeServiceAreas = [
  { id: 1, title: 'St. George', slug: 'st-george' },
  { id: 2, title: 'Hurricane', slug: 'hurricane' },
  { id: 3, title: 'Ivins', slug: 'ivins' },
  { id: 4, title: 'Santa Clara', slug: 'santa-clara' },
  { id: 5, title: 'Washington', slug: 'washington' },
  { id: 6, title: 'Leeds', slug: 'leeds' },
]

export default function StGeorgePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <Image
          src="/st-george-tree-service.jpg"
          alt="Professional tree service in St. George, Utah - Clean Cuts Trees serving Southern Utah with expert tree care, removal, and emergency services"
          fill
          priority
          className="hero-background"
          sizes="100vw"
        />
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              St. George Tree Service & Professional Tree Care
            </h1>
            <h2 className="hero-subtitle">Tree Services St. George, Utah</h2>
            <p className="hero-description">
              Clean Cuts Trees provides professional tree services throughout St. George and Southern Utah.
              Our certified arborists offer emergency tree removal, tree trimming, stump grinding, and 
              comprehensive tree care solutions for residential and commercial properties in Hurricane, 
              Ivins, Santa Clara, Washington, and Leeds.
            </p>
            <div className="hero-buttons">
              <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                🚀 BOOK ONLINE NOW!
              </a>
              <a href={`tel:${stGeorgeOfficeContact.phoneLink}`} className="btn btn-phone">
                <span
                  className="material-symbols-outlined"
                  style={{ verticalAlign: 'middle', fontSize: 20, marginRight: 4 }}
                >
                  call
                </span>
                {stGeorgeOfficeContact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">ST. GEORGE TREE REMOVAL & TREE CARE SERVICES</h2>
          <p className="section-subtitle">
            Professional Tree Services for Southern Utah's Unique Climate
          </p>
          <p className="section-description">
            St. George's desert climate and high winds create unique challenges for tree care. 
            Our experienced team understands the specific needs of trees in Southern Utah, from 
            drought-stressed trees to wind damage prevention. We provide emergency tree removal, 
            routine tree maintenance, and specialized desert tree care services throughout 
            Washington County.
          </p>

          <div className="services-grid">
            {stGeorgeServices.map((service, index) => {
              // Map different emergency tree service images to each service
              const serviceImages = [
                "/Emergency-Tree-Service-Team.jpg", // Emergency Tree Removal
                "/Emergency-Tree-Service-Equipment.jpg", // Tree Trimming & Pruning
                "/Emergency-tree-service2.jpg", // Tree Removal
                "/Emergency-Tree-Service-Always-Ready.jpg", // Stump Grinding
              ];
              
              return (
                <div key={service.id} className="service-card">
                  <div className="service-image">
                    <Image
                      src={serviceImages[index] || "/assets/cleancutstrees-banner.jpg"}
                      alt={`${service.title} - Professional tree service in St. George, Utah`}
                      className="service-img"
                      width={400}
                      height={300}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                      loading={index < 2 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link href={`/st-george/services/${service.slug}`} className="service-link">
                      {service.slug === 'emergency-tree-removal'
                        ? 'Get Emergency Service →'
                        : 'Learn More →'}
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Emergency Service Section */}
      <section className="emergency-service">
        <div className="container">
          <div className="emergency-content">
            <div className="emergency-text">
              <h2>Tree Services St. George</h2>
              <p>
                Southern Utah's high winds and sudden weather changes can create dangerous tree 
                emergencies. Our emergency tree service operates around the clock to handle fallen 
                trees, storm damage, and hazardous tree situations throughout St. George and 
                Washington County. We understand the urgency of tree emergencies in desert climates 
                where property damage can escalate quickly.
              </p>
              <ul className="emergency-features">
                <li>Emergency response throughout St. George area</li>
                <li>Specialized equipment for desert terrain and rocky soil</li>
                <li>Licensed and insured for all Washington County municipalities</li>
                <li>Insurance claim assistance for wind and storm damage</li>
                <li>Rapid response for power line clearance emergencies</li>
                <li>Complete cleanup and debris removal services</li>
              </ul>
              <div className="emergency-buttons">
                <a href={`tel:${emergencyContact.phoneLink}`} className="btn" style={{ color: 'black' }}>
                  <span className="material-symbols-outlined">call</span>
                  Emergency: {emergencyContact.phone}
                </a>
                <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Schedule Service
                </a>
                <Link href="/st-george/services/emergency-tree-removal" className="btn btn-outline">
                  Learn About Emergency Service
                </Link>
              </div>
            </div>
            <div className="emergency-gallery">
              <div className="gallery-image">
                <Image
                  src="/Emergency-Tree-Service-Team.jpg"
                  alt="Clean Cuts Trees emergency tree service team ready for 24/7 response in St. George and Southern Utah"
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
                  alt="Emergency tree removal service - wind damage cleanup by Clean Cuts Trees in St. George Utah"
                  className="emergency-img"
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="gallery-image">
                <Image
                  src="/optimized/Emergency-Tree-Service-Always-Ready-640w.webp"
                  alt="Emergency tree service - hazardous tree removal in St. George desert climate"
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

      {/* Desert Tree Care Section */}
      <section className="comprehensive-services">
        <div className="container">
          <h2 className="section-title">Desert Tree Care Specialists</h2>
          <p className="section-subtitle">
            Expert Tree Services for St. George's Unique Desert Environment
          </p>

          <div className="service-details">
            <div className="service-detail">
              <h3>Desert Climate Tree Care</h3>
              <p>
                St. George's high desert climate requires specialized tree care knowledge. Our arborists 
                understand how drought stress, extreme heat, and mineral-rich soil affect tree health. 
                We provide customized tree care programs that help your trees thrive in Southern Utah's 
                challenging environment, including proper watering schedules and drought-resistant pruning techniques.
              </p>
            </div>

            <div className="service-detail">
              <h3>Wind Damage Prevention & Repair</h3>
              <p>
                Southern Utah's high winds can cause significant tree damage. Our preventive tree care 
                services include strategic pruning to reduce wind resistance, crown thinning for better 
                airflow, and structural support systems for vulnerable trees. When wind damage occurs, 
                our emergency response team provides rapid cleanup and tree restoration services.
              </p>
            </div>

            <div className="service-detail">
              <h3>Native & Adapted Species Expertise</h3>
              <p>
                We specialize in caring for both native desert trees and adapted species commonly planted 
                in St. George landscapes. From mature cottonwoods along the Virgin River to ornamental 
                trees in residential developments, our team knows how to properly maintain each species 
                for optimal health and longevity in the desert environment.
              </p>
            </div>

            <div className="service-detail">
              <h3>Rocky Terrain Specialists</h3>
              <p>
                St. George's rocky terrain and challenging soil conditions require specialized equipment 
                and techniques. Our team has extensive experience working in rocky areas, steep slopes, 
                and difficult access locations throughout Washington County. We use specialized equipment 
                designed for desert terrain to safely remove trees and provide care services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="service-areas">
        <div className="container">
          <h2 className="section-title">
            Professional Tree Services Throughout Southern Utah
          </h2>
          <p className="section-subtitle">
            Serving St. George and surrounding communities with expert tree care and emergency services
          </p>

          <div className="areas-grid">
            {stGeorgeServiceAreas.map((area) => (
              <div key={area.id} className="area-card">
                <div className="area-icon">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <h3>
                  <Link href={`/st-george/service-areas/${area.slug}`}>
                    {area.title}
                  </Link>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for St. George */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">Why Choose Clean Cuts Trees in St. George?</h2>
          <p className="section-subtitle">
            Local expertise combined with professional service standards
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">wb_sunny</span>
              </div>
              <h3>Desert Climate Expertise</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">air</span>
              </div>
              <h3>Wind Damage Specialists</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <h3>Emergency Response</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">landscape</span>
              </div>
              <h3>Rocky Terrain Equipment</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">verified_user</span>
              </div>
              <h3>Licensed & Insured</h3>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span className="material-symbols-outlined">assignment</span>
              </div>
              <h3>Free Estimates</h3>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - St. George Specific */}
      <section className="faq">
        <div className="container">
          <h2 className="section-title">St. George Tree Care FAQs</h2>
          <p className="section-subtitle">Common questions about tree care in Southern Utah's desert climate</p>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>How does the desert climate affect tree care in St. George?</h3>
              <p>
                St. George's high desert climate creates unique challenges including drought stress, 
                extreme temperature fluctuations, and high winds. Trees require specialized watering 
                schedules, protective pruning techniques, and regular monitoring for heat stress. 
                Our arborists understand these local conditions and provide customized care programs.
              </p>
            </div>
            <div className="faq-item">
              <h3>When is the best time to trim trees in St. George?</h3>
              <p>
                In St. George's climate, late fall through early spring is typically the best time 
                for tree trimming. This avoids the extreme summer heat that can stress freshly pruned 
                trees. However, emergency trimming and storm damage cleanup may be necessary year-round. 
                We assess each situation individually for optimal timing.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you handle the rocky terrain common in St. George?</h3>
              <p>
                Yes, our team has specialized equipment and extensive experience working in St. George's 
                rocky terrain. We use compact, maneuverable equipment designed for challenging landscapes 
                and can safely access trees in difficult locations throughout Washington County's varied topography.
              </p>
            </div>
            <div className="faq-item">
              <h3>How quickly can you respond to wind damage emergencies?</h3>
              <p>
                We provide emergency response throughout the St. George area. High winds are 
                common in Southern Utah, and we understand the urgency of clearing fallen trees 
                from roads, power lines, and structures. Our typical response time for emergencies 
                is within 2-4 hours during normal business hours, depending on the severity of weather conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2 className="section-title">
            Professional Tree Service for St. George & Southern Utah
          </h2>
          <p className="section-subtitle">
            Serving St. George, Hurricane, Ivins, Santa Clara, Washington, Leeds, and surrounding areas
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <h3>
                <span
                  className="material-symbols-outlined"
                  style={{ verticalAlign: 'middle', fontSize: 22, marginRight: 4 }}
                >
                  location_on
                </span>
                St. George Office
              </h3>
              <p>{stGeorgeOfficeContact.address.full}</p>
            </div>
            <div className="contact-item">
              <h3>
                <span
                  className="material-symbols-outlined"
                  style={{ verticalAlign: 'middle', fontSize: 22, marginRight: 4 }}
                >
                  call
                </span>
                Phone
              </h3>
              <p>
                <a href={`tel:${stGeorgeOfficeContact.phoneLink}`}>{stGeorgeOfficeContact.phone}</a>
              </p>
            </div>
            <div className="contact-item">
              <h3>
                <span
                  className="material-symbols-outlined"
                  style={{ verticalAlign: 'middle', fontSize: 22, marginRight: 4 }}
                >
                  schedule
                </span>
                Emergency Service
              </h3>
              <p>24/7 Emergency: <a href={`tel:${emergencyContact.phoneLink}`}>{emergencyContact.phone}</a></p>
            </div>
          </div>

          <div className="final-cta">
            <a href="https://book.housecallpro.com/book/Clean-Cuts-Trees/b4a00fdb66b64c1da2f367aa3c485101?v2=true&attr=5343" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
              📅 BOOK ST. GEORGE SERVICE
            </a>
            <a href={`tel:${emergencyContact.phoneLink}`} className="btn btn-secondary">
              🚨 EMERGENCY: {emergencyContact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
