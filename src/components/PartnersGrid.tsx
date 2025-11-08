'use client'
import { useState } from 'react'

interface ServicePartner {
  name: string
  category: string
  services: string[]
  description: string
  phone: string
  website: string
  jointOffer: string
  logo: string
}

interface PartnersGridProps {
  servicePartners: ServicePartner[]
  categories: string[]
}

export default function PartnersGrid({ servicePartners, categories }: PartnersGridProps) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredPartners =
    activeCategory === 'all'
      ? servicePartners
      : servicePartners.filter((partner) => partner.category === activeCategory)

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category)
  }

  return (
    <>
      {/* Category Filter */}
      <div className="category-filters">
        <button
          className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => handleCategoryFilter('all')}
          data-category="all"
        >
          All Services
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryFilter(category)}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            data-category={category}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Partners Grid */}
      <div className="partners-grid">
        {filteredPartners.map((partner, index) => (
          <div key={index} className="partner-card" data-category={partner.category}>
            <div className="partner-header">
              <div className="partner-logo">
                <div className="logo-placeholder">
                  {partner.name
                    .split(' ')
                    .map((word) => word[0])
                    .join('')}
                </div>
              </div>
              <div className="partner-info">
                <h3>{partner.name}</h3>
                <span className="category-badge">{partner.category}</span>
              </div>
            </div>

            <div className="partner-services">
              <h4>Services:</h4>
              <ul>
                {partner.services.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>
            </div>

            <p className="partner-description">{partner.description}</p>

            <div className="joint-offer">
              <h4>🤝 Joint Offer:</h4>
              <p>{partner.jointOffer}</p>
            </div>

            <div className="partner-contact">
              <a
                href={`tel:${partner.phone.replace(/[^0-9]/g, '')}`}
                className="contact-btn phone-btn"
              >
                📞 {partner.phone}
              </a>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn website-btn"
              >
                🌐 Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
