import { Metadata } from 'next'

import PageSidebar from '@/components/PageSidebar'
export const metadata: Metadata = {
  title: 'HOA Tree Management Services | Homeowner Association Tree Care Utah | Clean Cuts Trees',
  description:
    'Professional HOA tree management for Utah communities. Serving 150+ associations with budget planning, resident communication, and comprehensive tree care programs.',
  keywords:
    'HOA tree management, homeowner association tree care, community tree services, Utah HOA arborist',
}

export default function HoaTreeManagementPage() {
  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">HOA Tree Management Services</h1>
              </header>

              <div className="page-content-body">
                <>
                  <h1 key={0} className="content-heading">
                    HOA Tree Management Services
                  </h1>
                  <p key={1}>
                    Clean Cut Trees manages tree care for over 150 Utah homeowner associations,
                    maintaining community forests for more than 25,000 residents. Our HOA
                    specialists understand the unique challenges of community tree management, from
                    budget planning and resident communications to liability management and
                    aesthetic consistency across neighborhoods.
                  </p>
                  <h2 key={2} className="content-heading">
                    Specialized HOA Services
                  </h2>
                  <p key={3}>
                    Our HOA programs include community-wide tree assessments, annual maintenance
                    planning with budget forecasting, coordinated seasonal care to maintain
                    neighborhood aesthetics, resident communication and education programs,
                    emergency response coordination, and detailed reporting for board meetings and
                    compliance documentation.
                  </p>
                  <h2 key={4} className="content-heading">
                    HOA Management Benefits
                  </h2>
                  <p key={5}>
                    Professional HOA tree management increases property values community-wide,
                    reduces liability exposure and insurance costs, provides consistent neighborhood
                    aesthetics, prevents costly emergency situations through preventive care, and
                    offers transparent budget planning with predictable annual costs. Our client
                    HOAs report average property value increases of 8-12%.
                  </p>
                  <h2 key={6} className="content-heading">
                    Board Support and Communication
                  </h2>
                  <p key={7}>
                    We provide comprehensive board support including detailed annual reports, budget
                    planning assistance, resident newsletter content, and professional presentations
                    for board meetings. Our HOA specialists serve as technical advisors, helping
                    boards make informed decisions about community tree management while maintaining
                    transparent communication with residents.
                  </p>
                  <h3 key={8} className="content-heading">
                    HOA Services Contact: (801) 473-7548
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
