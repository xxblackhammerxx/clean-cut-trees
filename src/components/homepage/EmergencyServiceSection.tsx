import OptimizedImage from '@/components/OptimizedImage'
import Link from 'next/link'

export default function EmergencyServiceSection() {
  return (
    <section className="emergency-service">
      <div className="container">
        <div className="emergency-content">
          <div className="emergency-text">
            <h2>24/7 Emergency Tree Removal & Service</h2>
            <p>
              When tree emergencies strike, every minute counts. Our certified arborists provide
              rapid response for emergency tree removal, fallen trees, storm damage, and hazardous
              tree situations throughout Davis and Weber Counties. We specialize in emergency tree
              service, tree emergency response, and professional tree risk assessment to protect
              your property and family.
            </p>
            <ul className="emergency-features">
              <li>Available 24 hours a day, 7 days a week for emergency tree service</li>
              <li>Licensed and insured emergency tree removal crews</li>
              <li>Professional equipment for safe tree removal and tree care</li>
              <li>Insurance claim assistance for tree damage</li>
              <li>Emergency tree removal services for difficult jobs</li>
              <li>Professional tree services for storm cleanup and debris removal</li>
            </ul>
            <div className="emergency-buttons">
              <a href="tel:+18014737548" className="btn btn-emergency">
                <span className="material-symbols-outlined">call</span>
                Emergency: (801) 473-7548
              </a>
              <Link href="/services/emergency-tree-service" className="btn btn-secondary">
                Learn About Emergency Service
              </Link>
            </div>
          </div>
          <div className="emergency-gallery">
            <div className="gallery-image">
              <OptimizedImage
                src="/emergency-tree-service1.jpg"
                alt="Emergency tree service - professional crew handling fallen tree near power lines"
                className="emergency-img"
                width={400}
                height={300}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
            </div>

            <div className="gallery-image">
              <OptimizedImage
                src="/Emergency-tree-service2.jpg"
                alt="Emergency tree service - hazardous tree removal by Clean Cuts Trees"
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
  )
}
