import { homepageServices } from '@/data/homepage-data'
import HeroSection from '@/components/homepage/HeroSection'
import ServiceCard from '@/components/homepage/ServiceCard'
import LazyLoadedSections from '@/components/homepage/LazyLoadedSections'
import './styles.css'

// Enable static generation for better performance
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Critical above-the-fold content */}
      <HeroSection />

      {/* Services Section - Above the fold */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">OUR TREE REMOVAL & TREE CARE SERVICES</h2>
          <p className="section-subtitle">
            We Are Your Local, Trusted and Professional Emergency Tree Service Providers
          </p>
          <p className="section-description">
            Clean Cuts Trees uses the latest knowledge and technology to make tree trimming and
            removal as safe and risk-free as possible. Our professional tree services include
            emergency tree service, tree removal, tree care, trimming, and pruning tree operations.
            Whether you need routine tree maintenance or emergency tree removal after storms, our
            experienced team provides reliable tree services with free estimates for all residential
            and commercial properties.
          </p>

          <div className="services-grid">
            {homepageServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                priority={index < 2} // Prioritize first 2 service images
              />
            ))}
          </div>
        </div>
      </section>

      {/* All remaining sections are lazy loaded */}
      <LazyLoadedSections />
    </>
  )
}
