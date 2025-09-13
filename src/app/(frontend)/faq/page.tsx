import FAQAccordion from '@/components/FAQAccordion'
import Link from 'next/link'

export async function generateMetadata() {
  return {
    title: 'Frequently Asked Questions - Clean Cuts Trees',
    description:
      'Find answers to common questions about tree removal, trimming, pruning, and other professional tree services in Utah.',
    keywords:
      'tree service FAQ, tree removal questions, tree trimming Utah, tree care answers, Clean Cuts Trees',
  }
}

const faqData = [
  {
    category: 'General Tree Services',
    questions: [
      {
        question: 'What services does Clean Cuts Trees provide?',
        answer:
          'We offer comprehensive tree services including tree removal, tree trimming and pruning, stump grinding, emergency tree services, municipal tree services, tree health assessments, and storm damage cleanup throughout Davis, Weber, and Salt Lake Counties.',
      },
      {
        question: 'Do you provide free estimates?',
        answer:
          'Yes! We provide free, no-obligation estimates for all our tree services. Our certified arborists will assess your trees and provide detailed recommendations and pricing.',
      },
      {
        question: 'Are you licensed and insured?',
        answer:
          'Absolutely. Clean Cuts Trees is fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers&apos; compensation to protect both our team and your property.',
      },
      {
        question: 'What areas do you serve?',
        answer:
          'We proudly serve Davis County, Weber County, and Salt Lake County in Utah, including Kaysville, Layton, Farmington, Bountiful, Syracuse, Clinton, Roy, Ogden, Salt Lake City, and surrounding communities.',
      },
    ],
  },
  {
    category: 'Tree Removal',
    questions: [
      {
        question: 'When should a tree be removed?',
        answer:
          'Trees should be removed when they pose safety hazards, are diseased beyond treatment, dead, structurally compromised, interfering with power lines or structures, or causing property damage. Our arborists can assess your specific situation.',
      },
      {
        question: 'How much does tree removal cost?',
        answer:
          'Tree removal costs vary based on factors like tree size, location, complexity, and site accessibility. Most residential tree removals range from $300 to $3,000. We provide detailed written estimates for all projects.',
      },
      {
        question: 'Do I need a permit to remove a tree?',
        answer:
          'Permit requirements vary by city and tree size/species. Many Utah municipalities require permits for trees over certain diameters or protected species. We can help you navigate local regulations and obtain necessary permits.',
      },
      {
        question: 'Will you clean up after tree removal?',
        answer:
          'Yes! Complete cleanup is included in our tree removal service. We remove all branches, logs, and debris, leaving your property clean and tidy. Stump grinding can be added for complete removal.',
      },
    ],
  },
  {
    category: 'Tree Trimming & Pruning',
    questions: [
      {
        question: 'When is the best time to trim trees?',
        answer:
          'In Utah, the best time for most tree trimming is late fall through early spring when trees are dormant. However, dead, diseased, or hazardous branches should be removed immediately regardless of season.',
      },
      {
        question: 'How often should trees be trimmed?',
        answer:
          'Most mature trees benefit from professional trimming every 3-5 years, while younger trees may need more frequent attention. Fruit trees often require annual pruning for optimal health and production.',
      },
      {
        question: 'What&apos;s the difference between trimming and pruning?',
        answer:
          'Trimming typically refers to cutting back overgrown branches for appearance and safety, while pruning is more precise removal of specific branches to improve tree health, structure, and growth patterns.',
      },
      {
        question: 'Can trimming damage my tree?',
        answer:
          'When done correctly by certified professionals, trimming improves tree health. However, improper cutting, over-trimming, or topping can severely damage or kill trees. That&apos;s why professional service is essential.',
      },
    ],
  },
  {
    category: 'Emergency Services',
    questions: [
      {
        question: 'Do you provide 24/7 emergency tree services?',
        answer:
          'Yes! We offer 24/7 emergency tree services for storm damage, fallen trees blocking roads or threatening structures, and other urgent tree-related hazards throughout our service area.',
      },
      {
        question: 'What constitutes a tree emergency?',
        answer:
          'Tree emergencies include fallen trees blocking access, trees or branches threatening structures, hanging branches after storms, trees on power lines, or any tree-related situation posing immediate safety risks.',
      },
      {
        question: 'How quickly can you respond to emergencies?',
        answer:
          'We prioritize emergency calls and typically respond within 2-4 hours during business hours and as quickly as possible for after-hours emergencies, depending on weather conditions and safety factors.',
      },
    ],
  },
  {
    category: 'Costs & Payment',
    questions: [
      {
        question: 'How do you determine pricing?',
        answer:
          'Pricing is based on tree size, species, location, complexity of removal/trimming, site accessibility, disposal requirements, and time needed. We provide transparent, detailed written estimates before any work begins.',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept cash, checks, and major credit cards. Payment is typically due upon completion of work, though we may require deposits for larger projects.',
      },
      {
        question: 'Do you offer financing options?',
        answer:
          'For larger projects, we may offer financing options. Contact us to discuss payment plans that work for your budget and project needs.',
      },
    ],
  },
  {
    category: 'Safety & Insurance',
    questions: [
      {
        question: 'What happens if my property is damaged during work?',
        answer:
          'While damage is extremely rare due to our professional practices, we carry comprehensive liability insurance that covers any accidental property damage during our tree services.',
      },
      {
        question: 'Are your workers covered by insurance?',
        answer:
          'Yes, all our team members are covered by workers&apos; compensation insurance. You&apos;re never liable for injuries that might occur on your property during our work.',
      },
      {
        question: 'How do you ensure safety during tree work?',
        answer:
          'Our certified arborists follow industry safety standards, use professional equipment, assess risks before starting, and maintain clear work zones. Safety is our top priority on every job.',
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="page-wrapper">
      <FAQAccordion />
      {/* Hero Section */}
      <section className="hero-section faq-hero">
        <div className="hero-content">
          <div className="container">
            <h1>Frequently Asked Questions</h1>
            <p>
              Find answers to common questions about our professional tree services in Utah.
              Can&apos;t find what you&apos;re looking for? Contact us directly!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-intro">
            <h2>Everything You Need to Know About Our Tree Services</h2>
            <p>
              As Utah&apos;s trusted tree service professionals, we&apos;ve compiled answers to the
              most common questions we receive. Our certified arborists are always happy to provide
              additional information for your specific needs.
            </p>
          </div>

          <div className="faq-categories">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="faq-category">
                <h3 className="category-title">{category.category}</h3>
                <div className="faq-items">
                  {category.questions.map((item, itemIndex) => (
                    <div key={itemIndex} className="faq-item">
                      <div className="faq-question">
                        <h4>{item.question}</h4>
                        <span className="faq-toggle">+</span>
                      </div>
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="faq-cta">
            <div className="cta-content">
              <h3>Still Have Questions?</h3>
              <p>
                Our certified arborists are here to help! Get personalized answers and a free
                estimate for your tree service needs.
              </p>
              <div className="cta-buttons">
                <Link href="/contact-us" className="btn btn-primary">
                  Get Free Estimate
                </Link>
                <a href="tel:(801) 683-1851" className="btn btn-secondary">
                  Call (801) 683-1851
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="faq-quick-links">
            <h3>Related Pages</h3>
            <div className="quick-links-grid">
              <Link href="/services" className="quick-link">
                <h4>Our Services</h4>
                <p>View all tree services we provide</p>
              </Link>
              <Link href="/service-areas" className="quick-link">
                <h4>Service Areas</h4>
                <p>Areas we serve in Utah</p>
              </Link>
              <Link href="/contact-us" className="quick-link">
                <h4>Contact Us</h4>
                <p>Get in touch for personalized help</p>
              </Link>
              <Link href="/blog" className="quick-link">
                <h4>Tree Care Blog</h4>
                <p>Tips and advice from our experts</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
