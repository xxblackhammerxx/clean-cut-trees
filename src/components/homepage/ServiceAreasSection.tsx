'use client'
import { homepageServiceAreas } from '@/data/homepage-data'
import { useState } from 'react'

export default function ServiceAreasSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedAreas = showAll ? homepageServiceAreas : homepageServiceAreas.slice(0, 12)

  return (
    <section className="service-areas">
      <div className="container">
        <h2 className="section-title">
          We are Open 24 Hours for Storm and Tree Services in Davis, Weber, and Salt Lake County UT
          and Surrounding Areas
        </h2>
        <p className="section-subtitle">
          Call us today to meet a team from a local family-owned and operated tree trimming company
          and schedule a free consultation.
        </p>

        <div className="areas-grid">
          {displayedAreas.map((area) => (
            <div key={area.id} className="area-card">
              <div className="area-icon">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <h3>{area.title}</h3>
            </div>
          ))}
        </div>

        {!showAll && homepageServiceAreas.length > 12 && (
          <div className="text-center mt-6">
            <button onClick={() => setShowAll(true)} className="btn btn-secondary">
              Show All Areas
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
