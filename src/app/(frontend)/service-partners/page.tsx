import BookingButton from '@/components/BookingButton'
import Link from 'next/link'

export const metadata = {
  title: 'Service Partners & Offers | Clean Cuts Trees Utah',
  description:
    'Explore our trusted service partners and joint offers for complete home and property services in Utah. Quality partnerships for comprehensive solutions.',
}

const servicePartners = [
  {
    name: 'Utah Home Restoration',
    category: 'Home Improvement',
    services: ['Roofing', 'Siding', 'Window Replacement'],
    description: 'Complete home exterior restoration services with 25+ years of experience.',
    phone: '(801) 555-0123',
    website: 'https://utahhomerestoration.com',
    jointOffer: '10% off when combined with tree removal services',
    logo: '/partners/utah-home-restoration.png',
  },
  {
    name: 'Mountain View Landscaping',
    category: 'Landscaping',
    services: ['Landscape Design', 'Irrigation', 'Hardscaping'],
    description: 'Award-winning landscape design and installation throughout the Wasatch Front.',
    phone: '(801) 555-0124',
    website: 'https://mountainviewlandscaping.com',
    jointOffer: 'Free landscape consultation with tree service package',
    logo: '/partners/mountain-view-landscaping.png',
  },
  {
    name: 'Utah Power Washing Pros',
    category: 'Cleaning Services',
    services: ['Pressure Washing', 'Soft Washing', 'Concrete Cleaning'],
    description:
      'Professional exterior cleaning services for residential and commercial properties.',
    phone: '(801) 555-0125',
    website: 'https://utahpowerwashing.com',
    jointOffer: '15% off combined tree and property cleaning services',
    logo: '/partners/utah-power-washing.png',
  },
  {
    name: 'Wasatch Fence Company',
    category: 'Fencing',
    services: ['Privacy Fencing', 'Chain Link', 'Ornamental Iron'],
    description: 'Quality fencing solutions with professional installation and repair services.',
    phone: '(801) 555-0126',
    website: 'https://wasatchfence.com',
    jointOffer: 'Bundle tree removal with new fence installation for savings',
    logo: '/partners/wasatch-fence.png',
  },
  {
    name: 'Utah Concrete Solutions',
    category: 'Concrete Services',
    services: ['Driveways', 'Patios', 'Sidewalks'],
    description: 'Expert concrete installation and repair with lifetime warranties.',
    phone: '(801) 555-0127',
    website: 'https://utahconcrete.com',
    jointOffer: 'Free concrete consultation with land clearing services',
    logo: '/partners/utah-concrete.png',
  },
  {
    name: 'Alpine HVAC Systems',
    category: 'HVAC',
    services: ['Heating', 'Air Conditioning', 'Duct Cleaning'],
    description: 'Complete HVAC services with 24/7 emergency support.',
    phone: '(801) 555-0128',
    website: 'https://alpinehvac.com',
    jointOffer: '10% off HVAC service when scheduling tree work',
    logo: '/partners/alpine-hvac.png',
  },
  {
    name: 'Utah Solar Solutions',
    category: 'Solar Energy',
    services: ['Solar Installation', 'Energy Audits', 'Battery Storage'],
    description: 'Leading solar energy solutions with competitive financing options.',
    phone: '(801) 555-0129',
    website: 'https://utahsolar.com',
    jointOffer: 'Tree removal + solar installation package deals available',
    logo: '/partners/utah-solar.png',
  },
  {
    name: 'Granite State Insurance',
    category: 'Insurance',
    services: ['Property Insurance', 'Storm Damage Claims', 'Risk Assessment'],
    description: 'Comprehensive insurance solutions with fast claim processing.',
    phone: '(801) 555-0130',
    website: 'https://graniteinsurance.com',
    jointOffer: 'Storm damage assessment coordination with tree services',
    logo: '/partners/granite-insurance.png',
  },
]

const categories = [...new Set(servicePartners.map((partner) => partner.category))]

export default function ServicePartnersPage() {
  return (
    <div className="service-partners-page">
      {/* Hero Section */}
      <section className="partners-hero">
        <div className="container">
          <h1>Service Partners & Joint Offers</h1>
          <p>
            Complete your project with our trusted network of Utah service providers. Save money
            with our exclusive joint offers and bundled services.
          </p>
          <div className="hero-buttons">
            <BookingButton variant="primary" size="large">
              Get Combined Quote
            </BookingButton>
            <Link href="/contact-us" className="btn btn-outline btn-large">
              Ask About Partnerships
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="partners-grid-section">
        <div className="container">
          <h2>Our Trusted Partner Network</h2>
          <p className="section-intro">
            We&apos;ve partnered with Utah&apos;s most reliable service providers to offer you
            complete property solutions with exclusive discounts and coordinated scheduling.
          </p>

          {/* Category Filter */}
          <div className="category-filters">
            <button className="filter-btn active" data-category="all">
              All Services
            </button>
            {categories.map((category) => (
              <button key={category} className="filter-btn" data-category={category}>
                {category}
              </button>
            ))}
          </div>

          {/* Partners Grid */}
          <div className="partners-grid">
            {servicePartners.map((partner, index) => (
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
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2>How Our Partnership Program Works</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Schedule Your Tree Service</h3>
              <p>Book your tree removal, trimming, or other tree services with Clean Cuts Trees.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Mention Additional Needs</h3>
              <p>
                Let us know about any other property services you need - landscaping, fencing, etc.
              </p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Get Connected & Save</h3>
              <p>
                We&apos;ll connect you with our trusted partners and apply your joint offer
                discounts.
              </p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Coordinated Service</h3>
              <p>
                Enjoy seamless scheduling and quality service from our verified partner network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefits-content">
              <h2>Why Choose Our Partner Network?</h2>
              <ul className="benefits-list">
                <li>
                  <span className="benefit-icon">✓</span>
                  <strong>Pre-Vetted Professionals:</strong> All partners are licensed, insured, and
                  proven reliable.
                </li>
                <li>
                  <span className="benefit-icon">✓</span>
                  <strong>Exclusive Discounts:</strong> Save money with joint offers not available
                  elsewhere.
                </li>
                <li>
                  <span className="benefit-icon">✓</span>
                  <strong>Coordinated Scheduling:</strong> We help coordinate multiple services for
                  efficiency.
                </li>
                <li>
                  <span className="benefit-icon">✓</span>
                  <strong>Quality Guarantee:</strong> Our reputation backs every partner
                  recommendation.
                </li>
                <li>
                  <span className="benefit-icon">✓</span>
                  <strong>Local Expertise:</strong> All partners know Utah&apos;s unique climate and
                  regulations.
                </li>
              </ul>
            </div>
            <div className="benefits-image">
              <div className="image-placeholder">Partnership Benefits Illustration</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partners-cta">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Get Started?</h2>
            <p>
              Contact Clean Cuts Trees today to learn more about our services and how our partner
              network can help complete your property project.
            </p>
            <div className="cta-buttons">
              <BookingButton variant="primary" size="large">
                Schedule Tree Service
              </BookingButton>
              <Link href="tel:+18014737548" className="btn btn-phone btn-large">
                📞 (801) 473-7548
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
