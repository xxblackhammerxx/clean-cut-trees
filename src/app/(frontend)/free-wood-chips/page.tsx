import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Wood Chips - Clean Cuts Trees | Clean Cuts Trees',
  description: `At Clean Cuts Trees, we're committed to providing top-notch tree services while also supporting our environment. As part of this commitment, we're excited to offer free wood chips to our clients. These wood chips are a byproduct of our tree trimming and removal services, and we believe they can be a valuable resource for your garden.`,
  keywords: 'tree service, Clean Cuts Trees, Utah',
}

export default function FreeWoodChipsPage() {
  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">Free Wood Chips - Clean Cuts Trees</h1>
              </header>

              <div className="page-content-body">
                <>
                  <h1 key={0} className="content-heading">
                    Free Wood Chips
                  </h1>
                  <h2 key={1} className="content-heading">
                    Free Wood Chips for Your Garden
                  </h2>
                  <p key={2}>
                    At Clean Cuts Trees, we’re committed to providing top-notch tree services while
                    also supporting our environment. As part of this commitment, we’re excited to
                    offer free wood chips to our clients. These wood chips are a byproduct of our
                    tree trimming and removal services, and we believe they can be a valuable
                    resource for your garden.
                  </p>
                  <h2 key={3} className="content-heading">
                    Benefits of Wood Chips for Your Garden
                  </h2>
                  <p key={4}>
                    Wood chips offer numerous advantages when used as mulch in your garden:
                  </p>
                  <p key={5}>
                    Moisture Retention: A layer of wood chips helps retain soil moisture, reducing
                    the need for frequent watering. Weed Suppression: Wood chips create a barrier
                    that inhibits weed growth, making garden maintenance easier. Soil Health
                    Improvement: As wood chips decompose, they enrich the soil with organic matter
                    and nutrients. Temperature Regulation: Wood chips insulate the soil, keeping it
                    cooler in summer and warmer in winter. Erosion Prevention: The protective layer
                    of wood chips helps prevent soil erosion, especially in sloped areas. Aesthetic
                    Appeal: Wood chips can enhance the visual appearance of your garden, giving it a
                    natural, rustic look.
                  </p>
                  <h2 key={6} className="content-heading">
                    Our Environmental Commitment
                  </h2>
                  <p key={7}>
                    At Clean Cuts Trees, we offer free wood chips as part of our dedication to
                    environmental sustainability. Here’s why:
                  </p>
                  <p key={8}>
                    Waste Reduction: By repurposing wood chips, we divert organic waste from
                    landfills, reducing methane emissions. Promoting Sustainable Gardening: We
                    encourage eco-friendly gardening practices that reduce the need for chemical
                    fertilizers and excessive watering. Supporting Local Ecosystems: Wood chips help
                    create healthier soil, which in turn supports local plant and animal life.
                    Carbon Sequestration: As wood chips decompose, they slowly release carbon back
                    into the soil, aiding in carbon sequestration.
                  </p>
                  <h2 key={9} className="content-heading">
                    How to Get Your Free Wood Chips
                  </h2>
                  <p key={10}>
                    If you’re interested in obtaining free wood chips for your garden, please
                    contact us at Clean Cuts Trees. We’ll be happy to arrange a delivery when we
                    have wood chips available from our tree services in your area.
                  </p>
                  <p key={11}>
                    By using our free wood chips, you’re not only benefiting your garden but also
                    contributing to a more sustainable community. Join us in our effort to make a
                    positive impact on our local environment, one garden at a time.
                  </p>
                  <h3 key={12} className="content-heading">
                    Get A Free Estimate
                  </h3>
                  <p key={13}>[](tel:+18014737548)</p>
                  <p key={14}>Contact Us Today for More Info!</p>
                  <h3 key={15} className="content-heading">
                    801-473-7548
                  </h3>
                  <h1 key={16} className="content-heading">
                    !A banner showing Clean Cuts Trees as a top-rated tree service.
                  </h1>
                </>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="page-sidebar">
              <div className="sidebar-widget cta-widget">
                <h3>Need Tree Service?</h3>
                <p>Get expert tree care from Utah&apos;s most trusted professionals.</p>
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
