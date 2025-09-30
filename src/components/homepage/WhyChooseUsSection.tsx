import Link from 'next/link'

export default function WhyChooseUsSection() {
  return (
    <section className="why-choose-us">
      <div className="container">
        <h2 className="section-title">We&apos;re the Trusted Arborists in the Area.</h2>
        <p className="section-subtitle">
          Because we are professional, efficient, honest, and work closely with our customers every
          step of the way.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <span className="material-symbols-outlined">workspace_premium</span>
            </div>
            <h3>Experienced & Professional</h3>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <span className="material-symbols-outlined">handshake</span>
            </div>
            <h3>Helpful & Friendly Support</h3>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <span className="material-symbols-outlined">savings</span>
            </div>
            <h3>Competitive Prices</h3>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <span className="material-symbols-outlined">assignment</span>
            </div>
            <h3>Free Estimates</h3>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
            <h3>Licensed, Bonded & Insured</h3>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <span className="material-symbols-outlined">diversity_3</span>
            </div>
            <h3>Family Owned & Operated</h3>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <span className="material-symbols-outlined">check_circle</span>
            </div>
            <h3>100% Satisfaction Guaranteed</h3>
            <Link href="tel:+18014737548">*call for details*</Link>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <span className="material-symbols-outlined">assignment_turned_in</span>
            </div>
            <h3>Hassle-free Insurance Claims</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
