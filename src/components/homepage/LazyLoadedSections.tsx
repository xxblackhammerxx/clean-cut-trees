'use client'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Lazy load the heavy sections that are below the fold
const EmergencyServiceSection = dynamic(() => import('./EmergencyServiceSection'), {
  loading: () => <div className="loading-skeleton h-96 bg-gray-100 animate-pulse"></div>,
})

const PartnershipSection = dynamic(() => import('./PartnershipSection'), {
  loading: () => <div className="loading-skeleton h-32 bg-gray-100 animate-pulse"></div>,
})

const StatsSection = dynamic(() => import('./StatsSection'), {
  loading: () => <div className="loading-skeleton h-64 bg-gray-100 animate-pulse"></div>,
})

const ComprehensiveServicesSection = dynamic(() => import('./ComprehensiveServicesSection'), {
  loading: () => <div className="loading-skeleton h-80 bg-gray-100 animate-pulse"></div>,
})

const AboutSection = dynamic(() => import('./AboutSection'), {
  loading: () => <div className="loading-skeleton h-64 bg-gray-100 animate-pulse"></div>,
})

const ReviewsSection = dynamic(() => import('./ReviewsSection'), {
  loading: () => <div className="loading-skeleton h-96 bg-gray-100 animate-pulse"></div>,
})

const WhyChooseUsSection = dynamic(() => import('./WhyChooseUsSection'), {
  loading: () => <div className="loading-skeleton h-80 bg-gray-100 animate-pulse"></div>,
})

const ServiceAreasSection = dynamic(() => import('./ServiceAreasSection'), {
  loading: () => <div className="loading-skeleton h-96 bg-gray-100 animate-pulse"></div>,
})

const FAQSection = dynamic(() => import('./FAQSection'), {
  loading: () => <div className="loading-skeleton h-96 bg-gray-100 animate-pulse"></div>,
})

const ContactSection = dynamic(() => import('./ContactSection'), {
  loading: () => <div className="loading-skeleton h-64 bg-gray-100 animate-pulse"></div>,
})

export default function LazyLoadedSections() {
  return (
    <>
      <Suspense fallback={<div className="loading-skeleton h-96 bg-gray-100 animate-pulse"></div>}>
        <EmergencyServiceSection />
      </Suspense>

      <Suspense fallback={<div className="loading-skeleton h-32 bg-gray-100 animate-pulse"></div>}>
        <PartnershipSection />
      </Suspense>

      <Suspense fallback={<div className="loading-skeleton h-64 bg-gray-100 animate-pulse"></div>}>
        <StatsSection />
      </Suspense>

      <Suspense fallback={<div className="loading-skeleton h-80 bg-gray-100 animate-pulse"></div>}>
        <ComprehensiveServicesSection />
      </Suspense>

      <Suspense fallback={<div className="loading-skeleton h-64 bg-gray-100 animate-pulse"></div>}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<div className="loading-skeleton h-96 bg-gray-100 animate-pulse"></div>}>
        <ReviewsSection />
      </Suspense>

      <Suspense fallback={<div className="loading-skeleton h-80 bg-gray-100 animate-pulse"></div>}>
        <WhyChooseUsSection />
      </Suspense>

      <Suspense fallback={<div className="loading-skeleton h-96 bg-gray-100 animate-pulse"></div>}>
        <ServiceAreasSection />
      </Suspense>

      <Suspense fallback={<div className="loading-skeleton h-96 bg-gray-100 animate-pulse"></div>}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<div className="loading-skeleton h-64 bg-gray-100 animate-pulse"></div>}>
        <ContactSection />
      </Suspense>
    </>
  )
}
