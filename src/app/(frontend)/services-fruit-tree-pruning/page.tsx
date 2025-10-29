import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fruit Tree Pruning Services Utah | Professional Apple Cherry Peach Pruning | Clean Cuts Trees',
  description: 'Expert fruit tree pruning in Utah by certified arborists. Specialized techniques for apple, cherry, peach, pear trees. Increase fruit production and tree health.',
  keywords: 'fruit tree pruning Utah, apple tree pruning, cherry tree pruning, peach tree pruning, fruit tree care, orchard maintenance',
}

export default function Services/fruitTreePruningPage() {
  const isServicePage = false
  const isServiceAreaPage = false

  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">Professional Fruit Tree Pruning Services</h1>
              </header>

              <div className="page-content-body">
                <>
      <h1 key={0} className="content-heading">Expert Fruit Tree Pruning Services in Utah</h1>
      <p key={1}>Clean Cut Trees has been Utah's leading fruit tree pruning specialist for over 15 years, maintaining thousands of apple, cherry, peach, pear, and apricot trees across Northern Utah. Our certified arborists understand the unique pruning requirements of each fruit variety, combining traditional techniques with modern horticultural science to maximize fruit production, tree health, and longevity.</p>
      <h2 key={2} className="content-heading">Utah-Specific Fruit Tree Expertise</h2>
      <p key={3}>Utah's unique climate presents specific challenges for fruit tree care. Our pruning techniques account for late spring frosts, intense summer heat, and variable winter conditions. We specialize in Utah-hardy varieties including Honeycrisp apples, Montmorency cherries, and Elberta peaches, understanding their specific growth patterns, bloom timing, and pruning responses in our high-altitude, semi-arid climate.</p>
      <h2 key={4} className="content-heading">Optimal Pruning Timing and Techniques</h2>
      <p key={5}>Timing is critical for fruit tree pruning success. We perform dormant season pruning from late February through early March, before bud break but after the harshest winter weather passes. Our techniques include crown thinning for light penetration, selective branch removal for air circulation, spur pruning for increased fruit production, and structural pruning for long-term tree stability. Each cut is made with precision to promote healing and prevent disease entry.</p>
      <h2 key={6} className="content-heading">Maximizing Fruit Production</h2>
      <p key={7}>Proper pruning increases fruit size, quality, and annual production consistency. We remove water sprouts and suckers that compete for nutrients, thin fruiting spurs to prevent biennial bearing, open canopies for sunlight penetration essential for sugar development, and maintain proper branch angles for optimal fruit bearing. Our clients typically see 30-50% increases in quality fruit production within two years.</p>
      <h2 key={8} className="content-heading">Disease Prevention Through Pruning</h2>
      <p key={9}>Strategic pruning prevents common Utah fruit tree diseases including fire blight, cytospora canker, and brown rot. We remove infected wood, improve air circulation to reduce humidity-related fungal issues, eliminate crossing branches that create wounds, and sterilize tools between trees to prevent disease transmission. Our disease-prevention pruning reduces treatment needs by up to 80%.</p>
      <h2 key={10} className="content-heading">Young Tree Training and Mature Tree Renovation</h2>
      <p key={11}>We provide comprehensive care from young tree training to mature tree renovation. Young trees receive structural pruning to establish strong frameworks, scaffold selection for optimal branch arrangement, and leader development for balanced growth. Mature or neglected trees benefit from gradual renovation pruning, height reduction without topping, and restoration of productive capacity while maintaining tree health and structure.</p>
      <h2 key={12} className="content-heading">Professional Equipment and Expertise</h2>
      <p key={13}>Our certified arborists use professional-grade pruning tools including bypass pruners, lopping shears, and specialized saws designed for clean cuts that heal properly. We maintain sharp, sanitized equipment and follow ANSI A300 pruning standards. Our team includes ISA Certified Arborists with specialized fruit tree training and decades of experience with Utah varieties and growing conditions.</p>
      <h3 key={14} className="content-heading">Schedule Your Fruit Tree Pruning: (801) 473-7548</h3>
      <p key={15}>Maximize your fruit harvest with professional pruning services. Contact Clean Cut Trees for expert fruit tree care throughout Davis, Weber, and Salt Lake Counties. Early scheduling ensures optimal timing for your trees.</p>
    </>
              </div>

              {/* Service-specific CTAs */}
              {isServicePage && (
                <div className="service-cta">
                  <div className="cta-box">
                    <h3>Ready to Get Started?</h3>
                    <p>Contact us today for a free estimate on this service.</p>
                    <div className="cta-buttons">
                      <Link href="/contact-us" className="btn btn-primary">
                        Get Free Estimate
                      </Link>
                      <Link href="tel:+18014737548" className="btn btn-phone">
                        <span
                          className="material-symbols-outlined"
                          style={{ verticalAlign: 'middle', fontSize: 20, marginRight: 4 }}
                        >
                          call
                        </span>{' '}
                        (801) 473-7548
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Service Area specific CTAs */}
              {isServiceAreaPage && (
                <div className="service-area-cta">
                  <div className="cta-box">
                    <h3>
                      Serving{' '}
                      
                    </h3>
                    <p>We're proud to provide professional tree services to this community.</p>
                    <div className="cta-buttons">
                      <Link href="/contact-us" className="btn btn-primary">
                        Schedule Service
                      </Link>
                      <Link href="tel:+18014737548" className="btn btn-phone">
                        📞 Call Now
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
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
                  </span>{' '}
                  (801) 473-7548
                </Link>
              </div>

              {isServicePage && (
                <div className="sidebar-widget">
                  <h3>Our Services</h3>
                  <ul className="services-list">
                    <li>
                      <Link href="/services/tree-removal">Tree Removal</Link>
                    </li>
                    <li>
                      <Link href="/services/tree-trimming">Tree Trimming</Link>
                    </li>
                    <li>
                      <Link href="/services/emergency-tree-service">Emergency Service</Link>
                    </li>
                    <li>
                      <Link href="/services/storm-cleanup">Storm Cleanup</Link>
                    </li>
                    <li>
                      <Link href="/services/professional-land-clearing-services">
                        Land Clearing
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/municipal-tree-service">Municipal Service</Link>
                    </li>
                  </ul>
                </div>
              )}

              {isServiceAreaPage && (
                <div className="sidebar-widget">
                  <h3>Service Areas</h3>
                  <ul className="areas-list">
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
                  </ul>
                </div>
              )}

              <div className="sidebar-widget">
                <h3>Why Choose Clean Cuts Trees?</h3>
                <ul className="features-list">
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>{' '}
                    Licensed & Insured
                  </li>
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>{' '}
                    24/7 Emergency Service
                  </li>
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>{' '}
                    Free Estimates
                  </li>
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>{' '}
                    Family Owned & Operated
                  </li>
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>{' '}
                    Professional Equipment
                  </li>
                  <li>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}
                    >
                      check_circle
                    </span>{' '}
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
