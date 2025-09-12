'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
          <Link href="/services" className="navbar-link">
            Services
          </Link>
          <Link href="/service-areas" className="navbar-link">
            Service Areas
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
              <img
                src="/cleancutslogo.png"
                alt="Clean Cuts Trees Logo"
                className="mobile-logo-image"
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
            <Link href="/services" className="mobile-link" onClick={closeMenu}>
              Services
            </Link>
            <Link href="/service-areas" className="mobile-link" onClick={closeMenu}>
              Service Areas
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
