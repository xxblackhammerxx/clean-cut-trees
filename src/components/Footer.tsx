'use client'

import Link from 'next/link'

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
                <Link href="/services/emergency-tree-service">24/7 Emergency Service</Link>
              </li>
              <li>
                <Link href="/services/tree-removal">Tree Removal</Link>
              </li>
              <li>
                <Link href="/services/tree-trimming">Tree Trimming</Link>
              </li>
              <li>
                <Link href="/services/storm-clean-up">Storm Cleanup</Link>
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
                <Link href="/service-areas/kaysville-ut-tree-service">Kaysville</Link>
              </li>
              <li>
                <Link href="/service-areas/layton-ut-tree-service">Layton</Link>
              </li>
              <li>
                <Link href="/service-areas/bountiful-ut-tree-service">Bountiful</Link>
              </li>
              <li>
                <Link href="/service-areas/ogden-ut-tree-service">Ogden</Link>
              </li>
              <li>
                <Link href="/service-areas/roy-ut-tree-service">Roy</Link>
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
              <Link href="/contact-us" className="footer-button">
                Get Free Estimate
              </Link>
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
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCSMH2M8_eCp3TM7lxs7HC1w/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link youtube"
                  aria-label="Follow us on YouTube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="https://www.instagram.com/clean_cuts_trees/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link instagram"
                  aria-label="Follow us on Instagram"
                >
                  <i className="fab fa-instagram"></i>
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
