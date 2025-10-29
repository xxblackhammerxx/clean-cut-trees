import { Metadata } from 'next'

import PageSidebar from '@/components/PageSidebar'
export const metadata: Metadata = {
  title: 'Tree Treatment & Healthcare Services | Professional Tree Health Utah | Clean Cuts Trees',
  description:
    'Expert tree healthcare services in Utah. Disease treatment, pest management, and nutritional therapy by certified arborists. Preventive programs for healthier trees.',
  keywords:
    'tree healthcare, tree treatment, tree disease treatment, pest management, tree nutrition, Utah arborist, tree health assessment',
}

export default function TreeTreatmentHealthcarePage() {
  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">Tree Treatment and Healthcare Services</h1>
              </header>

              <div className="page-content-body">
                <>
                  <h1 key={0} className="content-heading">
                    Professional Tree Treatment and Healthcare Services
                  </h1>
                  <p key={1}>
                    Clean Cut Trees has been Utah's premier tree healthcare provider for over 15
                    years, treating more than 50,000 trees across Davis, Weber, and Salt Lake
                    Counties. Our certified arborists and plant pathologists combine advanced
                    diagnostics with proven treatment protocols to restore tree health, prevent
                    disease spread, and extend tree lifespans by decades.
                  </p>
                  <h2 key={2} className="content-heading">
                    Expert Tree Health Assessment
                  </h2>
                  <p key={3}>
                    Our certified arborists conduct comprehensive tree health evaluations using
                    advanced diagnostic equipment including resistograph testing for internal decay,
                    aerial root zone analysis, and digital canopy assessment. We identify stress
                    factors including pest infestations, fungal diseases, nutrient deficiencies,
                    soil compaction, and environmental stressors unique to Utah's climate
                    conditions.
                  </p>
                  <h2 key={4} className="content-heading">
                    Disease Treatment and Prevention
                  </h2>
                  <p key={5}>
                    We specialize in treating Utah's most common tree diseases including fire blight
                    in fruit trees, cytospora canker in spruces, oak wilt, and various fungal
                    infections. Our treatment protocols include targeted fungicide applications,
                    soil amendments, trunk injections, and integrated pest management strategies. We
                    maintain a 94% success rate in arresting disease progression when caught early.
                  </p>
                  <h2 key={6} className="content-heading">
                    Nutritional Therapy and Soil Health
                  </h2>
                  <p key={7}>
                    Utah's alkaline soils often create nutrient deficiencies that weaken trees. Our
                    soil scientists analyze pH levels, nutrient content, and microbial activity to
                    develop customized fertilization programs. We provide deep root fertilization,
                    mycorrhizal inoculation, organic matter enhancement, and pH correction
                    treatments. Our nutrient therapy programs have improved tree vigor in 98% of
                    treated properties.
                  </p>
                  <h2 key={8} className="content-heading">
                    Integrated Pest Management
                  </h2>
                  <p key={9}>
                    We combat Utah's most destructive tree pests including emerald ash borer, spider
                    mites, aphids, scale insects, and bark beetles. Our IPM approach combines
                    biological controls, targeted treatments, and preventive measures while
                    minimizing environmental impact. We use systemic treatments, beneficial insect
                    releases, and precision timing based on pest life cycles and local weather
                    patterns.
                  </p>
                  <h2 key={10} className="content-heading">
                    Preventive Healthcare Programs
                  </h2>
                  <p key={11}>
                    Prevention is the most cost-effective approach to tree healthcare. Our annual
                    programs include bi-annual health assessments, seasonal treatments timed to
                    Utah's climate patterns, proactive pest monitoring, soil health maintenance, and
                    stress mitigation strategies. Properties enrolled in our preventive programs
                    experience 87% fewer emergency tree situations and significant long-term cost
                    savings.
                  </p>
                  <h2 key={12} className="content-heading">
                    Why Choose Clean Cut Trees for Tree Healthcare
                  </h2>
                  <p key={13}>
                    Our team includes ISA Certified Arborists, licensed pest control professionals,
                    and soil scientists with specialized Utah experience. We maintain
                    state-of-the-art diagnostic equipment, use only proven treatment methods, and
                    provide detailed treatment plans with progress monitoring. Our 15-year track
                    record includes successful treatment of heritage trees, large-scale commercial
                    properties, and residential landscapes throughout Northern Utah.
                  </p>
                  <h3 key={14} className="content-heading">
                    Schedule Tree Health Assessment: (801) 473-7548
                  </h3>
                  <p key={15}>
                    Protect your trees with professional healthcare services. Contact Clean Cut
                    Trees today for comprehensive tree treatment and ongoing health management
                    programs throughout Davis, Weber, and Salt Lake Counties.
                  </p>
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
