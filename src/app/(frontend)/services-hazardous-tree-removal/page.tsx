import { Metadata } from 'next'

import PageSidebar from '@/components/PageSidebar'
export const metadata: Metadata = {
  title: 'Large & Hazardous Tree Removal Emergency Services | Clean Cut Trees | Clean Cuts Trees',
  description:
    'Expert large and hazardous tree removal with 15+ years experience. ISA-certified arborists, advanced equipment, 24/7 emergency response throughout Utah.',
  keywords:
    'large tree removal, hazardous tree removal, emergency tree removal, crane tree removal, Utah tree removal',
}

export default function HazardousTreeRemovalPage() {
  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">
                  Large and Hazardous Tree Removal - Emergency Specialists
                </h1>
              </header>

              <div className="page-content-body">
                <>
                  <h1 key={0} className="content-heading">
                    Large and Hazardous Tree Removal - Emergency Specialists
                  </h1>
                  <p key={1}>
                    With over 15 years of specialized experience removing hazardous trees throughout
                    Utah, our ISA-certified arborists have safely removed over 3,000 dangerous trees
                    without a single safety incident. We specialize in the most challenging
                    situations - trees over 80 feet tall, specimens threatening power lines, and
                    emergency removals requiring crane operations and advanced rigging techniques.
                  </p>
                  <h2 key={2} className="content-heading">
                    When Trees Become Immediate Hazards
                  </h2>
                  <p key={3}>
                    Large trees become hazardous when storm damage creates structural instability,
                    when disease weakens their root systems, or when construction activities
                    compromise their stability. Our emergency assessment protocols, developed
                    through responding to over 800 storm damage calls, identify immediate threats
                    and prioritize removals based on risk to life and property.
                  </p>
                  <h2 key={4} className="content-heading">
                    Specialized Equipment for Large Tree Removal
                  </h2>
                  <p key={5}>
                    Our fleet includes 90-foot crane trucks, 75-foot bucket trucks, and advanced
                    rigging systems capable of safely dismantling trees in sections weighing over
                    2,000 pounds each. We maintain over $400,000 in specialized equipment
                    specifically for hazardous tree removal, ensuring we can handle any situation
                    safely and efficiently.
                  </p>
                  <h2 key={6} className="content-heading">
                    24/7 Emergency Response Protocol
                  </h2>
                  <p key={7}>
                    Our emergency crews respond within 2 hours for life-threatening situations and
                    within 4 hours for property-threatening scenarios. We coordinate with utility
                    companies, emergency services, and insurance providers to ensure rapid, safe
                    resolution of hazardous tree situations throughout Davis, Weber, and Salt Lake
                    Counties.
                  </p>
                  <h3 key={8} className="content-heading">
                    Emergency Contact: (801) 473-7548
                  </h3>
                </>
              </div>
            </div>

            <PageSidebar />
          </div>
        </div>
      </article>
    </div>
  )
}
