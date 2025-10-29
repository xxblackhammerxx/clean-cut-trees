import Link from 'next/link'

export default function ContactSection() {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">
          We are a Professional and Family-Owned Tree Service Provider
        </h2>
        <p className="section-subtitle">
          We&apos;re proud to serve the property owners of Davis, Salt Lake, and Weber County UT,
          and surrounding areas.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <h3>
              <span
                className="material-symbols-outlined"
                style={{ verticalAlign: 'middle', fontSize: 22, marginRight: 4 }}
              >
                location_on
              </span>
              Location
            </h3>
            <p>Fruit Heights, UT 84037</p>
          </div>
          <div className="contact-item">
            <h3>
              <span
                className="material-symbols-outlined"
                style={{ verticalAlign: 'middle', fontSize: 22, marginRight: 4 }}
              >
                call
              </span>
              Phone
            </h3>
            <p>
              <a href="tel:+18014737548">(801) 473-7548</a>
            </p>
          </div>
          <div className="contact-item">
            <h3>
              <span
                className="material-symbols-outlined"
                style={{ verticalAlign: 'middle', fontSize: 22, marginRight: 4 }}
              >
                mail
              </span>
              Email
            </h3>
            <p>
              <a href="mailto:estimates@cleancutstrees.com">estimates@cleancutstrees.com</a>
            </p>
          </div>
        </div>

        <div className="final-cta">
          <Link href="/contact-us" className="btn btn-primary btn-large">
            REQUEST A FREE ESTIMATE
          </Link>
        </div>
      </div>
    </section>
  )
}
