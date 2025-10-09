'use client'

import Link from 'next/link'
import BookingButton from './BookingButton'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Clean Cuts Trees</h3>
              <p className="footer-tagline">Professional Tree Care Services</p>
            </div>
            <p className="footer-description">
              The #1 tree service company in Davis, Weber and Salt Lake Counties. We provide expert
              tree care with certified arborists and professional equipment.
            </p>
            <div className="footer-badges">
              <span className="badge">Licensed & Insured</span>
              <span className="badge">24/7 Emergency</span>
              <span className="badge">Free Estimates</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li>
                <Link href="/services/emergency-tree-service">Emergency Tree Service</Link>
              </li>
              <li>
                <Link href="/services/tree-removal">Tree Removal</Link>
              </li>
              <li>
                <Link href="/services/tree-trimming">Tree Trimming</Link>
              </li>
              <li>
                <Link href="/services/storm-cleanup">Storm Cleanup</Link>
              </li>
              <li>
                <Link href="/services/professional-land-clearing-services">Land Clearing</Link>
              </li>
              <li>
                <Link href="/services/municipal-tree-service">Municipal Service</Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="footer-section">
            <h4>Service Areas</h4>
            <ul className="footer-links">
              <li>
                <Link href="/service-areas">All Service Areas</Link>
              </li>
              <li>
                <span className="county-label">DAVIS COUNTY:</span>
              </li>
              <li>
                <Link href="/service-areas/kaysville-ut-tree-service">Kaysville</Link>
              </li>
              <li>
                <Link href="/service-areas/layton-ut-tree-service">Layton</Link>
              </li>
              <li>
                <Link href="/service-areas/bountiful-ut-tree-service">Bountiful</Link>
              </li>
              <li>
                <Link href="/service-areas/farmington-ut-tree-service">Farmington</Link>
              </li>
              <li>
                <Link href="/service-areas/centerville-ut-tree-service">Centerville</Link>
              </li>
              <li>
                <Link href="/service-areas/clearfield-ut-tree-service">Clearfield</Link>
              </li>
              <li>
                <Link href="/service-areas/woods-cross-ut-tree-service">Woods Cross</Link>
              </li>
              <li>
                <span className="county-label">WEBER COUNTY:</span>
              </li>
              <li>
                <Link href="/service-areas/ogden-ut-tree-service">Ogden</Link>
              </li>
              <li>
                <Link href="/service-areas/roy-ut-tree-service">Roy</Link>
              </li>
              <li>
                <Link href="/service-areas/north-ogden-ut-tree-service">North Ogden</Link>
              </li>
              <li>
                <Link href="/service-areas/riverdale-ut-tree-service">Riverdale</Link>
              </li>
              <li>
                <Link href="/service-areas/south-weber-ut-tree-service">South Weber</Link>
              </li>
              <li>
                <span className="county-label">SALT LAKE COUNTY:</span>
              </li>
              <li>
                <Link href="/service-areas/salt-lake-city-ut-tree-service">Salt Lake City</Link>
              </li>
              <li>
                <Link href="/service-areas/west-valley-city-ut-tree-service">West Valley City</Link>
              </li>
              <li>
                <Link href="/service-areas/murray-ut-tree-service">Murray</Link>
              </li>
              <li>
                <Link href="/service-areas/sandy-ut-tree-service">Sandy</Link>
              </li>
              <li>
                <Link href="/service-areas/north-salt-lake-ut-tree-service">North Salt Lake</Link>
              </li>
              <li>
                <Link href="/service-areas/south-jordan-ut-tree-service">South Jordan</Link>
              </li>
              <li>
                <Link href="/service-areas/west-jordan-ut-tree-service">West Jordan</Link>
              </li>
              <li>
                <Link href="/service-areas/draper-ut-tree-service">Draper</Link>
              </li>
              <li>
                <span className="county-label">SOUTHERN UTAH:</span>
              </li>
              <li>
                <Link href="/service-areas/st-george-ut-tree-service">St. George ⭐</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon material-symbols-outlined">call</span>
                <div>
                  <Link href="tel:+18014737548" className="phone-link">
                    (801) 473-7548
                  </Link>
                  <p>24/7 Emergency Available</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon material-symbols-outlined">location_on</span>
                <div>
                  <p>Serving Davis, Weber & Salt Lake Counties</p>
                  <p>Utah, United States</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon material-symbols-outlined">schedule</span>
                <div>
                  <p>
                    <strong>Business Hours:</strong>
                  </p>
                  <p>Mon-Fri: 7AM - 6PM</p>
                  <p>Emergency: 24/7</p>
                </div>
              </div>
            </div>

            <div className="footer-cta">
              <BookingButton variant="primary" size="medium" className="footer-book-btn">
                Get Free Estimate
              </BookingButton>
            </div>

            {/* Social Media Links */}
            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/CleanCutsTrees/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link facebook"
                  aria-label="Follow us on Facebook"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCSMH2M8_eCp3TM7lxs7HC1w/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link youtube"
                  aria-label="Follow us on YouTube"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/clean_cuts_trees/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link instagram"
                  aria-label="Follow us on Instagram"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Links */}
        <div className="footer-secondary">
          <div className="footer-nav">
            <Link href="/">Home</Link>
            <Link href="/about-us">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact-us">Contact</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms</Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Clean Cuts Trees. All rights reserved.</p>
            <p>Professional tree care services in Utah since 2010.</p>
          </div>

          <div className="footer-certifications">
            <span>
              <span className="material-symbols-outlined">workspace_premium</span> Licensed
            </span>
            <span>
              <span className="material-symbols-outlined">verified_user</span> Insured
            </span>
            <span>
              <span className="material-symbols-outlined">park</span> Certified Arborists
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
