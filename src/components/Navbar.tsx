'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import BookingButton from './BookingButton'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.getElementById('navbar')
      if (navbar && !navbar.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
    setOpenDropdown(null)
  }

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav id="navbar" className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo" onClick={closeMenu}>
          <Image
            src="/cleancutslogo.png"
            alt="Clean Cuts Trees Logo"
            width={150}
            height={50}
            priority
            sizes="150px"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="navbar-menu">
          <Link href="/" className="navbar-link">
            Home
          </Link>

          {/* Services Dropdown */}
          <div
            className={`navbar-dropdown ${openDropdown === 'services' ? 'active' : ''}`}
            onMouseEnter={() => handleDropdownToggle('services')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link href="/services" className="navbar-link dropdown-trigger">
              Services
              <span className="dropdown-arrow">↓</span>
            </Link>
            <div className="dropdown-menu">
              <div className="dropdown-content">
                <Link href="/services/emergency-tree-service" className="dropdown-item">
                  Emergency Tree Service
                </Link>
                <Link href="/services/tree-removal" className="dropdown-item">
                  Tree Removal
                </Link>
                <Link href="/services/safe-tree-removal" className="dropdown-item">
                  Safe Tree Removal
                </Link>
                <Link href="/services/tree-trimming" className="dropdown-item">
                  Tree Trimming & Pruning
                </Link>
                <Link href="/services/fruit-tree-pruning" className="dropdown-item">
                  Fruit Tree Pruning
                </Link>
                <Link href="/services/storm-clean-up" className="dropdown-item">
                  Storm Damage Cleanup
                </Link>
                <Link href="/services/stump-grinding" className="dropdown-item">
                  Stump Grinding
                </Link>
                <Link href="/services/tree-treatment-healthcare" className="dropdown-item">
                  Tree Treatment & Healthcare
                </Link>
                <Link
                  href="/services/professional-land-clearing-services"
                  className="dropdown-item"
                >
                  Land Clearing
                </Link>
                <Link href="/services/municipal-tree-service" className="dropdown-item">
                  Municipal Tree Service
                </Link>
                <Link
                  href="/services/commercial-property-tree-management"
                  className="dropdown-item"
                >
                  Commercial Property Management
                </Link>
                <Link href="/services/hoa-tree-management" className="dropdown-item">
                  HOA Tree Management
                </Link>
                <Link href="/services/property-management-trees" className="dropdown-item">
                  Property Management Trees
                </Link>
                <Link href="/services/hazardous-tree-removal" className="dropdown-item">
                  Hazardous Tree Removal
                </Link>
                <Link href="/services/falling-branches" className="dropdown-item">
                  Falling Branches
                </Link>
                <Link href="/services/landscaping-tree" className="dropdown-item">
                  Landscaping Tree
                </Link>
                <Link href="/services/overgrown-trees" className="dropdown-item">
                  Overgrown Trees
                </Link>
              </div>
            </div>
          </div>

          {/* Service Areas Dropdown */}
          <div
            className={`navbar-dropdown ${openDropdown === 'areas' ? 'active' : ''}`}
            onMouseEnter={() => handleDropdownToggle('areas')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link href="/service-areas" className="navbar-link dropdown-trigger">
              Service Areas
              <span className="dropdown-arrow">↓</span>
            </Link>
            <div className="dropdown-menu dropdown-menu-wide">
              <div className="dropdown-content">
                <div className="dropdown-section">
                  <h4>Davis County</h4>
                  <Link href="/service-areas/kaysville-ut-tree-service" className="dropdown-item">
                    Kaysville
                  </Link>
                  <Link href="/service-areas/layton-ut-tree-service" className="dropdown-item">
                    Layton
                  </Link>
                  <Link href="/service-areas/bountiful-ut-tree-service" className="dropdown-item">
                    Bountiful
                  </Link>
                  <Link href="/service-areas/farmington-ut-tree-service" className="dropdown-item">
                    Farmington
                  </Link>
                  <Link href="/service-areas/centerville-ut-tree-service" className="dropdown-item">
                    Centerville
                  </Link>
                  <Link href="/service-areas/clearfield-ut-tree-service" className="dropdown-item">
                    Clearfield
                  </Link>
                  <Link href="/service-areas/woods-cross-ut-tree-service" className="dropdown-item">
                    Woods Cross
                  </Link>
                </div>
                <div className="dropdown-section">
                  <h4>Weber County</h4>
                  <Link href="/service-areas/ogden-ut-tree-service" className="dropdown-item">
                    Ogden
                  </Link>
                  <Link href="/service-areas/roy-ut-tree-service" className="dropdown-item">
                    Roy
                  </Link>
                  <Link href="/service-areas/north-ogden-ut-tree-service" className="dropdown-item">
                    North Ogden
                  </Link>
                  <Link href="/service-areas/riverdale-ut-tree-service" className="dropdown-item">
                    Riverdale
                  </Link>
                  <Link href="/service-areas/south-weber-ut-tree-service" className="dropdown-item">
                    South Weber
                  </Link>
                </div>
                <div className="dropdown-section">
                  <h4>Salt Lake County</h4>
                  <Link
                    href="/service-areas/salt-lake-city-ut-tree-service"
                    className="dropdown-item"
                  >
                    Salt Lake City
                  </Link>
                  <Link
                    href="/service-areas/west-valley-city-ut-tree-service"
                    className="dropdown-item"
                  >
                    West Valley City
                  </Link>
                  <Link href="/service-areas/murray-ut-tree-service" className="dropdown-item">
                    Murray
                  </Link>
                  <Link href="/service-areas/sandy-ut-tree-service" className="dropdown-item">
                    Sandy
                  </Link>
                  <Link
                    href="/service-areas/north-salt-lake-ut-tree-service"
                    className="dropdown-item"
                  >
                    North Salt Lake
                  </Link>

                  <Link
                    href="/service-areas/south-jordan-ut-tree-service"
                    className="dropdown-item"
                  >
                    South Jordan
                  </Link>
                  <Link href="/service-areas/west-jordan-ut-tree-service" className="dropdown-item">
                    West Jordan
                  </Link>
                  <Link href="/service-areas/draper-ut-tree-service" className="dropdown-item">
                    Draper
                  </Link>
                </div>
                <div className="dropdown-section">
                  <h4>Southern Utah</h4>
                  <Link
                    href="/service-areas/st-george-ut-tree-service"
                    className="dropdown-item priority-area"
                  >
                    St. George ⭐
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/service-partners" className="navbar-link">
            Service Partners
          </Link>
          <Link href="/blog" className="navbar-link">
            Blog
          </Link>
          <Link href="/about-us" className="navbar-link">
            About
          </Link>
          <Link href="/contact-us" className="navbar-link">
            Contact
          </Link>
          <BookingButton variant="primary" size="small" className="navbar-book-btn">
            Book Now
          </BookingButton>
          <Link href="tel:+18014737548" className="navbar-phone">
            (801) 473-7548
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-button ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <div className="mobile-logo">
              <Image
                src="/cleancutslogo.png"
                alt="Clean Cuts Trees Logo"
                className="mobile-logo-image"
                width={40}
                height={40}
              />
              <span>Clean Cuts Trees</span>
            </div>
            <button className="mobile-close" onClick={closeMenu}>
              ✕
            </button>
          </div>

          <div className="mobile-menu-links">
            <Link href="/" className="mobile-link" onClick={closeMenu}>
              Home
            </Link>

            {/* Services Section */}
            <div className="mobile-section">
              <Link
                href="/services"
                className="mobile-link mobile-section-title"
                onClick={closeMenu}
              >
                Services
              </Link>
              <div className="mobile-submenu">
                <Link
                  href="/services/emergency-tree-service"
                  className="mobile-sublink"
                  onClick={closeMenu}
                >
                  Emergency Tree Service
                </Link>
                <Link href="/services/tree-removal" className="mobile-sublink" onClick={closeMenu}>
                  Tree Removal
                </Link>
                <Link
                  href="/services/safe-tree-removal"
                  className="mobile-sublink"
                  onClick={closeMenu}
                >
                  Safe Tree Removal
                </Link>
                <Link href="/services/tree-trimming" className="mobile-sublink" onClick={closeMenu}>
                  Tree Trimming & Pruning
                </Link>
                <Link
                  href="/services/fruit-tree-pruning"
                  className="mobile-sublink"
                  onClick={closeMenu}
                >
                  Fruit Tree Pruning
                </Link>
                <Link
                  href="/services/storm-clean-up"
                  className="mobile-sublink"
                  onClick={closeMenu}
                >
                  Storm Cleanup
                </Link>
                <Link
                  href="/services/stump-grinding"
                  className="mobile-sublink"
                  onClick={closeMenu}
                >
                  Stump Grinding
                </Link>
                <Link
                  href="/services/tree-treatment-healthcare"
                  className="mobile-sublink"
                  onClick={closeMenu}
                >
                  Tree Treatment & Healthcare
                </Link>
                <Link
                  href="/services/professional-land-clearing-services"
                  className="mobile-sublink"
                  onClick={closeMenu}
                >
                  Land Clearing
                </Link>
                <Link
                  href="/services/municipal-tree-service"
                  className="mobile-sublink"
                  onClick={closeMenu}
                >
                  Municipal Service
                </Link>
                <Link
                  href="/services/commercial-property-tree-management"
                  className="mobile-sublink"
                  onClick={closeMenu}
                >
                  Commercial Property Management
                </Link>
                <Link
                  href="/services/hoa-tree-management"
                  className="mobile-sublink"
                  onClick={closeMenu}
                >
                  HOA Tree Management
                </Link>
                <Link
                  href="/services/property-management-trees"
                  className="mobile-sublink"
                  onClick={closeMenu}
                >
                  Property Management Trees
                </Link>
                <Link
                  href="/services/hazardous-tree-removal"
                  className="mobile-sublink"
                  onClick={closeMenu}
                >
                  Hazardous Tree Removal
                </Link>
                <Link
                  href="/services/falling-branches"
                  className="mobile-sublink"
                  onClick={closeMenu}
                >
                  Falling Branches
                </Link>
                <Link
                  href="/services/landscaping-tree"
                  className="mobile-sublink"
                  onClick={closeMenu}
                >
                  Landscaping Tree
                </Link>
                <Link
                  href="/services/overgrown-trees"
                  className="mobile-sublink"
                  onClick={closeMenu}
                >
                  Overgrown Trees
                </Link>
              </div>
            </div>

            {/* Service Areas Section */}
            <div className="mobile-section">
              <Link
                href="/service-areas"
                className="mobile-link mobile-section-title"
                onClick={closeMenu}
              >
                Service Areas
              </Link>
              <div className="mobile-submenu">
                <div className="mobile-area-group">
                  <h5>Davis County</h5>
                  <Link
                    href="/service-areas/kaysville-ut-tree-service"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    Kaysville
                  </Link>
                  <Link
                    href="/service-areas/layton-ut-tree-service"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    Layton
                  </Link>
                  <Link
                    href="/service-areas/bountiful-ut-tree-service"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    Bountiful
                  </Link>
                  <Link
                    href="/service-areas/farmington-ut-tree-service"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    Farmington
                  </Link>
                  <Link
                    href="/service-areas/centerville-ut-tree-service"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    Centerville
                  </Link>
                  <Link
                    href="/service-areas/clearfield-ut-tree-service"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    Clearfield
                  </Link>
                </div>
                <div className="mobile-area-group">
                  <h5>Weber County</h5>
                  <Link
                    href="/service-areas/ogden-ut-tree-service"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    Ogden
                  </Link>
                  <Link
                    href="/service-areas/roy-ut-tree-service"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    Roy
                  </Link>
                  <Link
                    href="/service-areas/north-ogden-ut-tree-service"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    North Ogden
                  </Link>
                  <Link
                    href="/service-areas/riverdale-ut-tree-service"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    Riverdale
                  </Link>
                </div>
                <div className="mobile-area-group">
                  <h5>Salt Lake County</h5>
                  <Link
                    href="/service-areas/salt-lake-city-ut-tree-service"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    Salt Lake City
                  </Link>
                  <Link
                    href="/service-areas/west-valley-city-ut-tree-service"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    West Valley City
                  </Link>
                  <Link
                    href="/service-areas/murray-ut-tree-service"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    Murray
                  </Link>
                  <Link
                    href="/service-areas/sandy-ut-tree-service"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    Sandy
                  </Link>
                  <Link
                    href="/service-areas/north-salt-lake-ut-tree-service"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    North Salt Lake
                  </Link>
                  <Link
                    href="/service-areas/south-weber-ut-tree-service"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    South Weber
                  </Link>
                  <Link
                    href="/service-areas/woods-cross-ut-tree-service"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    Woods Cross
                  </Link>
                </div>
                <div className="mobile-area-group">
                  <h5>Priority Areas</h5>
                  <Link
                    href="/service-areas/st-george-ut-tree-service"
                    className="mobile-sublink priority-area"
                    onClick={closeMenu}
                  >
                    St. George ⭐
                  </Link>
                  <Link
                    href="/service-areas/south-jordan-ut-tree-service"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    South Jordan
                  </Link>
                  <Link
                    href="/service-areas/west-jordan-ut-tree-service"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    West Jordan
                  </Link>
                  <Link
                    href="/service-areas/draper-ut-tree-service"
                    className="mobile-sublink"
                    onClick={closeMenu}
                  >
                    Draper
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/service-partners" className="mobile-link" onClick={closeMenu}>
              Service Partners
            </Link>
            <Link href="/blog" className="mobile-link" onClick={closeMenu}>
              Blog
            </Link>
            <Link href="/about-us" className="mobile-link" onClick={closeMenu}>
              About
            </Link>
            <Link href="/contact-us" className="mobile-link" onClick={closeMenu}>
              Contact
            </Link>
            <div className="mobile-booking-section">
              <BookingButton variant="primary" size="medium" className="mobile-book-btn">
                📱 Book Service Online
              </BookingButton>
            </div>
          </div>

          <div className="mobile-menu-footer">
            <Link href="tel:+18014737548" className="mobile-phone" onClick={closeMenu}>
              (801) 473-7548
            </Link>
            <div className="mobile-hours">
              <p>24/7 Emergency Service Available</p>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
      </div>
    </nav>
  )
}

export default Navbar
