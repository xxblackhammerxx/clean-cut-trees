import Link from 'next/link'
import { ReactNode } from 'react'

interface PageSidebarProps {
  children?: ReactNode
}

export default function PageSidebar({ children }: PageSidebarProps) {
  return (
    <aside className="page-sidebar">
      <div className="sidebar-widget cta-widget">
        <h3>Need Tree Service?</h3>
        <p>Get expert tree care from Utah's most trusted professionals.</p>
        <Link href="/contact-us" className="btn btn-primary">
          Free Estimate
        </Link>
        <Link href="tel:+18014737548" className="btn btn-phone">
          <span
            className="material-symbols-outlined"
            style={{ verticalAlign: 'middle', fontSize: 20, marginRight: 4 }}
          >
            call
          </span>
          (801) 473-7548
        </Link>
      </div>

      {children}

      <div className="sidebar-widget">
        <h3>Why Choose Clean Cuts Trees?</h3>
        <ul className="features-list">
          <li>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
            >
              check_circle
            </span>
            Licensed & Insured
          </li>
          <li>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
            >
              check_circle
            </span>
            24/7 Emergency Service
          </li>
          <li>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
            >
              check_circle
            </span>
            Free Estimates
          </li>
          <li>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
            >
              check_circle
            </span>
            Family Owned & Operated
          </li>
          <li>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
            >
              check_circle
            </span>
            Professional Equipment
          </li>
          <li>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
            >
              check_circle
            </span>
            Satisfaction Guaranteed
          </li>
        </ul>
      </div>
    </aside>
  )
}
