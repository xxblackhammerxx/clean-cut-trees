import BookingButton from '@/components/BookingButton'
import Link from 'next/link'
import PartnersGrid from '@/components/PartnersGrid'

export const metadata = {
  title: 'Service Partners & Offers | Clean Cuts Trees Utah',
  description:
    'Explore our trusted service partners and joint offers for complete home and property services in Utah. Quality partnerships for comprehensive solutions.',
}

const servicePartners = [
  {
    name: 'Legacy Roofing',
    category: 'Roofing',
    services: ['Roof Installation', 'Roof Repair', 'Storm Damage'],
    description:
      'Trusted roofing professionals serving Utah with quality craftsmanship and reliable service.',
    phone: 'Contact for quote',
    website: 'https://legacyroofingutah.com/',
    jointOffer: 'Coordinated scheduling with tree removal services',
    logo: '/partners/legacy-roofing.png',
  },
  {
    name: 'The Roofing Experience',
    category: 'Roofing',
    services: ['Residential Roofing', 'Commercial Roofing', 'Roof Maintenance'],
    description:
      'Expert roofing solutions with a focus on customer experience and quality results.',
    phone: 'Contact for quote',
    website: 'https://theroofingexperience.com/',
    jointOffer: 'Bundle tree removal with roofing services for project coordination',
    logo: '/partners/roofing-experience.png',
  },
  {
    name: 'Skilled Tradesmen Services Plumbing',
    category: 'Plumbing',
    services: ['Plumbing Repair', 'Installation', 'Emergency Services'],
    description: 'Professional plumbing services with skilled craftsmen and reliable solutions.',
    phone: 'Contact for quote',
    website: 'https://www.skilledtradesmanllc.com/',
    jointOffer: 'Coordinated plumbing and tree service scheduling available',
    logo: '/partners/skilled-tradesmen.png',
  },
  {
    name: 'Overland Lawn & Landscape',
    category: 'Landscaping',
    services: ['Landscape Design', 'Installation', 'Maintenance'],
    description:
      'Complete landscaping services to transform your outdoor spaces with professional design and installation.',
    phone: 'Contact for quote',
    website: 'https://overlandincorporated.com/',
    jointOffer: 'Complete property transformation with tree and landscape services',
    logo: '/partners/overland-landscape.png',
  },
  {
    name: 'Aridscape',
    category: 'Landscaping',
    services: ['Landscape Design', 'Drought-Resistant Landscaping', 'Hardscaping'],
    description:
      'Specialist in water-wise landscape design and drought-resistant outdoor solutions for Utah properties.',
    phone: 'Contact for quote',
    website: 'https://www.aridscapeutah.com/landscape-design/',
    jointOffer: 'Tree removal followed by drought-resistant landscape installation',
    logo: '/partners/aridscape.png',
  },
  {
    name: 'Lift Construction',
    category: 'Restoration',
    services: ['Home Restoration', 'Construction', 'Remodeling'],
    description:
      'Quality construction and restoration services for residential and commercial properties.',
    phone: 'Contact for quote',
    website: 'https://www.liftut.net/',
    jointOffer: 'Storm damage tree removal and property restoration coordination',
    logo: '/partners/lift-construction.png',
  },
  {
    name: 'Apex Clean Air',
    category: 'HVAC',
    services: ['HVAC Installation', 'Air Quality', 'System Maintenance'],
    description: 'Professional HVAC services focused on clean air solutions and system efficiency.',
    phone: 'Contact for quote',
    website: 'https://apexcleanair.com/',
    jointOffer: 'HVAC service coordination with tree work scheduling',
    logo: '/partners/apex-clean-air.png',
  },
  {
    name: 'Utah Mechanical Systems',
    category: 'HVAC',
    services: ['Heating', 'Air Conditioning', 'Mechanical Systems'],
    description: 'Complete mechanical systems services for residential and commercial HVAC needs.',
    phone: 'Contact for quote',
    website: 'https://utahmech.com/',
    jointOffer: 'Mechanical system services bundled with tree care',
    logo: '/partners/utah-mechanical.png',
  },
  {
    name: 'paintEZ',
    category: 'Painting',
    services: ['Interior Painting', 'Exterior Painting', 'Commercial Painting'],
    description:
      'Professional painting services serving Northern Utah with quality results and customer satisfaction.',
    phone: 'Contact for quote',
    website: 'https://paintez.com/northern-utah/',
    jointOffer: 'Complete property refresh with tree and painting services',
    logo: '/partners/paintez.png',
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
            <Link href="/contact-us" className="btn btn-large">
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

          <PartnersGrid servicePartners={servicePartners} categories={categories} />
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
    </div>
  )
}
