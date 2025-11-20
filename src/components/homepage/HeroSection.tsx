import OptimizedImage from '@/components/OptimizedImage'
import PhoneButton from '@/components/PhoneButton'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-background-container">
        <OptimizedImage
          src="/emergency-tree-service1.jpg"
          alt="Emergency tree service hero background"
          fill
          priority
          className="hero-background"
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">Emergency Tree Service & Tree Care in Davis & Weber Counties</h1>
        <h2 className="hero-subtitle">Open 24 Hours for Storm and Tree Services</h2>
        <p className="hero-description">
          Clean Cuts Trees is the #1 tree service company in Davis, Weber and Salt Lake Counties
          providing expert tree care, professional tree removal, emergency tree service, and
          comprehensive tree services. Our certified arborists offer emergency tree removal, tree
          trimming, pruning tree services, and complete tree care solutions for residential and
          commercial properties.
        </p>
        <div className="hero-buttons">
          <Link href="/contact-us" className="btn btn-primary">
            CONTACT US NOW!
          </Link>
          <PhoneButton 
            phoneNumber="+18014737548" 
            className="btn btn-phone"
            style={{ verticalAlign: 'middle', fontSize: 20, marginRight: 4 }}
          >
            <span
              className="material-symbols-outlined"
              style={{ verticalAlign: 'middle', fontSize: 20, marginRight: 4 }}
            >
              call
            </span>
            (801) 473-7548
          </PhoneButton>
        </div>
      </div>
    </section>
  )
}
