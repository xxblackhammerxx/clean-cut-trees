import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Clean Cuts Trees | Clean Cuts Trees',
  description:
    'When it comes to getting rid of unwanted trees on your property, you want someone who can get the job done quickly and efficiently while keeping costs down.',
  keywords: 'tree service, Clean Cuts Trees, Utah',
}

export default function AboutUsPage() {
  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <main className="page-main">
              <header className="page-header">
                <h1 className="page-title">About Us - Clean Cuts Trees</h1>
              </header>

              <div className="page-content-body">
                <>
                  <p key={0}>
                    When it comes to getting rid of unwanted trees on your property, you want
                    someone who can get the job done quickly and efficiently while keeping costs
                    down. We offer affordable rates for any size job that will leave you with no
                    mess behind.
                  </p>
                  <p key={1}>
                    Clean Cuts is your go-to solution when it comes to getting rid of trees. Our
                    team has years of experience in the industry, which means we know exactly what
                    needs to be done to ensure a safe and efficient process. Our prices beat the
                    competition, and our services are unmatched in quality.
                  </p>
                  <p key={2}>
                    We make sure our work is of top quality every single time with no hassle
                    involved. When you need someone who knows how to take care of your trees, Give
                    us a call today or schedule online with our convenient quote request form! Check
                    out what some of our customers have said about their experiences working with us
                    below! You won&apos;t find better than us!
                  </p>
                  <p key={3}>
                    Clean Cuts Trees is the #1 tree service company in Fruit Heights serving all of
                    Davis, Salt Lake and Weber County, Utah, & surrounding areas.
                  </p>
                </>
              </div>
            </main>

            <aside className="page-sidebar">
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
          </div>
        </div>
      </article>
    </div>
  )
}
