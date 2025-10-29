import { Metadata } from 'next'

import PageSidebar from '@/components/PageSidebar'
export const metadata: Metadata = {
  title: 'Professional Stump Grinding Services | Clean Cut Trees Utah | Clean Cuts Trees',
  description:
    'Complete stump removal services in Utah. Professional stump grinding with specialized equipment. Free estimates. Call (801) 473-7548',
  keywords: 'stump grinding, stump removal, tree stump grinding, Utah stump grinding',
}

export default function StumpGrindingPage() {
  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">Professional Stump Grinding Services</h1>
              </header>

              <div className="page-content-body">
                <>
                  <h1 key={0} className="content-heading">
                    Professional Stump Grinding Services
                  </h1>
                  <p key={1}>
                    Clean Cut Trees provides professional stump grinding services to completely
                    remove tree stumps and restore your landscape throughout Utah. We use
                    specialized equipment to grind stumps below ground level, allowing you to
                    reclaim your outdoor space.
                  </p>
                  <h2 key={2} className="content-heading">
                    Why Remove Tree Stumps?
                  </h2>
                  <p key={3}>
                    Stumps can cause safety hazards, interfere with lawn maintenance, attract pests,
                    and diminish your property value. Professional stump grinding eliminates these
                    issues while reclaiming valuable yard space.
                  </p>
                  <h3 key={4} className="content-heading">
                    Contact Us: (801) 473-7548
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
