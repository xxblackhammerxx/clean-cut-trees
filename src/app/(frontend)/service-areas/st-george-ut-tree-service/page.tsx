import { Metadata } from 'next'
import Image from 'next/image'

import PageSidebar from '@/components/PageSidebar'
import BookingButton from '@/components/BookingButton'
export const metadata: Metadata = {
  title:
    'Tree Service St. George UT | Emergency Removal & Pruning | Clean Cut Trees | Clean Cuts Trees',
  description:
    'Professional tree services in St. George, Utah. Emergency tree removal, pruning, stump grinding. Serving Southern Utah. Call (801) 473-7548',
  keywords:
    'St George tree service, Utah tree removal, Southern Utah tree care, tree service Washington County',
}

export default function ServiceAreasstGeorgeUtTreeServicePage() {
  return (
    <div className="general-page">
      {/* Hero Section */}
      <section className="hero">
        <Image
          src="/st-george-tree-service.jpg"
          alt="Professional tree service in St. George, Utah - Clean Cut Trees serving Southern Utah with expert tree care and emergency services"
          fill
          priority
          className="hero-background"
          sizes="100vw"
        />
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Tree Service St. George, UT - Clean Cut Trees
            </h1>
            <h2 className="hero-subtitle">Expert Tree Care for Southern Utah's Desert Climate</h2>
            <p className="hero-description">
              Professional tree services in St. George, Utah. Emergency tree removal, 
              pruning, stump grinding. Serving Southern Utah with ISA-certified arborists.
            </p>
            <div className="hero-buttons">
              <BookingButton variant="primary" size="large">
                Get Free Estimate
              </BookingButton>
              <a href="tel:+18014737548" className="btn btn-phone">
                <span
                  className="material-symbols-outlined"
                  style={{ verticalAlign: 'middle', fontSize: 20, marginRight: 4 }}
                >
                  call
                </span>
                (801) 473-7548
              </a>
            </div>
          </div>
        </div>
      </section>

      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">Tree Service St. George, UT - Clean Cut Trees</h1>
              </header>

              <div className="page-content-body">
                <>
                  <h1 key={0} className="content-heading">
                    Professional Tree Services in St. George, Utah
                  </h1>
                  <p key={1}></p>
                  <p key={2}>
                    Clean Cut Trees is proud to serve St. George and Southern Utah with safe,
                    professional, and reliable tree care. Our ISA-certified arborists bring years of
                    experience maintaining and protecting trees in Washington County’s unique desert
                    climate. Whether you need emergency tree removal after a storm or routine
                    pruning to keep your property healthy and beautiful, our team is ready to help.
                  </p>
                  <p key={3}></p>
                  <p key={4}>Trusted Tree Care Experts in Southern Utah</p>
                  <p key={5}></p>
                  <p key={6}>
                    Trees in the St. George area face unique challenges such as high winds, intense
                    sunlight, and dry conditions. Our team understands how to care for both native
                    and ornamental species in this environment, ensuring proper growth, structure,
                    and long-term health. We combine modern arborist techniques with hands-on local
                    experience to deliver safe and sustainable results.
                  </p>
                  <p key={7}></p>
                  <p key={8}>Our core services include:</p>
                  <p key={9}></p>
                  <p key={10}>
                    Emergency Tree Removal – Response for hazardous or storm-damaged trees.
                  </p>
                  <p key={11}></p>
                  
                  {/* Emergency Services Gallery */}
                  <div className="emergency-services-gallery" style={{ margin: '2rem 0' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                      <div style={{ textAlign: 'center' }}>
                        <Image
                          src="/Emergency-Tree-Service-Team.jpg"
                          alt="Emergency tree removal team in St. George, Utah"
                          width={250}
                          height={180}
                          style={{ borderRadius: '8px', objectFit: 'cover' }}
                        />
                        <h4 style={{ margin: '0.5rem 0', fontSize: '1.1rem', fontWeight: 'bold' }}>Emergency Response</h4>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>Rapid response for storm damage and fallen trees</p>
                      </div>
                      
                      <div style={{ textAlign: 'center' }}>
                        <Image
                          src="/Emergency-Tree-Service-Equipment.jpg"
                          alt="Professional tree service equipment for St. George services"
                          width={250}
                          height={180}
                          style={{ borderRadius: '8px', objectFit: 'cover' }}
                        />
                        <h4 style={{ margin: '0.5rem 0', fontSize: '1.1rem', fontWeight: 'bold' }}>Professional Equipment</h4>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>Specialized equipment for desert terrain</p>
                      </div>
                      
                      <div style={{ textAlign: 'center' }}>
                        <Image
                          src="/Emergency-tree-service2.jpg"
                          alt="Hazardous tree removal in St. George Utah"
                          width={250}
                          height={180}
                          style={{ borderRadius: '8px', objectFit: 'cover' }}
                        />
                        <h4 style={{ margin: '0.5rem 0', fontSize: '1.1rem', fontWeight: 'bold' }}>Hazardous Tree Removal</h4>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>Safe removal in challenging conditions</p>
                      </div>
                    </div>
                  </div>
                  <p key={12}>
                    Tree Trimming and Pruning – Structural pruning, canopy shaping, and fruit tree
                    maintenance.
                  </p>
                  <p key={13}></p>
                  <p key={14}>
                    Stump Grinding and Removal – Full removal to restore your landscape and prevent
                    pests.
                  </p>
                  <p key={15}></p>
                  <p key={16}>
                    Tree Health and Treatment – Diagnosis and treatment for disease, insects, and
                    drought stress.
                  </p>
                  <p key={17}></p>
                  <p key={18}>
                    Commercial and HOA Tree Management – Reliable maintenance for multiple
                    properties.
                  </p>
                  <p key={19}></p>
                  <p key={20}>
                    Lot Clearing and Property Management – Safe clearing for construction or large
                    properties.
                  </p>
                  <p key={21}></p>
                  <p key={22}>Serving St. George and Surrounding Areas</p>
                  <p key={23}></p>
                  <p key={24}>We proudly provide professional tree services throughout:</p>
                  <p key={25}></p>
                  <p key={26}>St. George</p>
                  <p key={27}></p>
                  <p key={28}>Washington City</p>
                  <p key={29}></p>
                  <p key={30}>Hurricane</p>
                  <p key={31}></p>
                  <p key={32}>Santa Clara</p>
                  <p key={33}></p>
                  <p key={34}>Ivins</p>
                  <p key={35}></p>
                  <p key={36}>La Verkin</p>
                  <p key={37}></p>
                  <p key={38}>Toquerville</p>
                  <p key={39}></p>
                  <p key={40}>and other nearby Washington County communities</p>
                  <p key={41}></p>
                  <p key={42}>
                    Clean Cut Trees is fully licensed and insured, and we’re familiar with local
                    safety standards and municipal requirements for tree work in Southern Utah.
                  </p>
                  <p key={43}></p>
                  <p key={44}>Why Homeowners in St. George Choose Clean Cut Trees</p>
                  <p key={45}></p>
                  <p key={46}>Certified arborists with extensive local experience.</p>
                  <p key={47}></p>
                  <p key={48}>Safety-first approach that follows OSHA standards.</p>
                  <p key={49}></p>
                  <p key={50}>Transparent pricing with no hidden fees.</p>
                  <p key={51}></p>
                  <p key={52}>Excellent customer reviews and repeat clients.</p>
                  <p key={53}></p>
                  <p key={54}>
                    Locally owned and operated with a focus on trust and professionalism.
                  </p>
                  <p key={55}></p>
                  <p key={56}>Get a Free Tree Service Estimate</p>
                  <p key={57}></p>
                  <p key={58}>
                    Whether you need hazardous tree removal, stump grinding, or seasonal pruning,
                    Clean Cut Trees is here to help protect your property and enhance your
                    landscape. Contact our team today for a free estimate on tree services in St.
                    George, Utah.
                  </p>
                  
                  {/* Additional Services Gallery */}
                  <div className="additional-services-gallery" style={{ margin: '3rem 0' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem', color: '#2c5530' }}>
                      Our Comprehensive Tree Services in St. George
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                      <div style={{ textAlign: 'center', padding: '1rem', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                        <Image
                          src="/Emergency-Tree-Service-Always-Ready.jpg"
                          alt="Professional tree trimming and pruning services in St. George"
                          width={220}
                          height={160}
                          style={{ borderRadius: '6px', objectFit: 'cover', marginBottom: '1rem' }}
                        />
                        <h4 style={{ margin: '0.5rem 0', fontSize: '1.1rem', fontWeight: 'bold', color: '#2c5530' }}>Tree Trimming & Pruning</h4>
                        <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.4' }}>Specialized desert climate pruning techniques for optimal tree health</p>
                      </div>
                      
                      <div style={{ textAlign: 'center', padding: '1rem', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                        <Image
                          src="/emergency-tree-service1.jpg"
                          alt="Stump grinding services in St. George rocky terrain"
                          width={220}
                          height={160}
                          style={{ borderRadius: '6px', objectFit: 'cover', marginBottom: '1rem' }}
                        />
                        <h4 style={{ margin: '0.5rem 0', fontSize: '1.1rem', fontWeight: 'bold', color: '#2c5530' }}>Stump Grinding</h4>
                        <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.4' }}>Complete stump removal in rocky desert soil conditions</p>
                      </div>
                      
                      <div style={{ textAlign: 'center', padding: '1rem', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                        <Image
                          src="/Emergency-Tree-Service-Team-optimized.webp"
                          alt="Tree health assessment and care in St. George Utah"
                          width={220}
                          height={160}
                          style={{ borderRadius: '6px', objectFit: 'cover', marginBottom: '1rem' }}
                        />
                        <h4 style={{ margin: '0.5rem 0', fontSize: '1.1rem', fontWeight: 'bold', color: '#2c5530' }}>Tree Health Care</h4>
                        <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.4' }}>Drought stress management and comprehensive desert tree care</p>
                      </div>
                    </div>
                  </div>
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
