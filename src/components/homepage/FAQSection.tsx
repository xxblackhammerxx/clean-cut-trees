import Link from 'next/link'

export default function FAQSection() {
  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">We are here to answer all your tree related questions!</p>

        <div className="faq-grid">
          <div className="faq-item">
            <h3>Why Is It Important To Trim My Trees?</h3>
            <p>
              Your trees are important and should receive proper tree care. If you let them grow too
              thick, they could fall during storms! Professional tree trimming is a great way to
              keep them healthy and strong. Regular trimming and pruning tree services help maintain
              tree health, prevent branches from becoming hazardous, and protect your yard and
              property. If tree branches get too thick, they cause problems for homeowners and may
              require emergency tree removal services.
            </p>
          </div>
          <div className="faq-item">
            <h3>How Often Should Trees Be Trimmed?</h3>
            <p>
              Most trees should receive professional trimming services every 3-5 years, depending on
              the tree species and growth rate. Fast-growing trees may need annual tree care and
              trimming, while slower-growing trees can go longer between professional tree services.
              Our tree service company provides free estimates to assess your trees&apos; trimming
              needs and create a tree care schedule that keeps your trees healthy and your yard
              safe.
            </p>
          </div>
          <div className="faq-item">
            <h3>Should I Consider Tree Removal Close To The House?</h3>
            <p>
              Trees too close to your house can cause damage to your roof, foundation, and plumbing.
              Our professional tree service experts can assess whether tree removal or pruning tree
              branches is the best solution for your situation. We provide tree risk assessment and
              free estimates for tree removal services to help protect your property and ensure your
              yard remains safe.
            </p>
          </div>
          <div className="faq-item">
            <h3>What Is Emergency Tree Removal?</h3>
            <p>
              Emergency tree removal involves safely removing fallen trees, broken branches, and
              debris after severe weather. Our emergency tree service operates 24/7 to provide rapid
              tree emergency response for dangerous tree situations. We handle difficult jobs
              including emergency tree removal, storm cleanup, and emergency tree care to protect
              your property and ensure your yard is safe after tree emergencies.
            </p>
          </div>
        </div>

        <div className="faq-cta">
          <Link href="/faq" className="btn btn-secondary">
            DISCOVER MORE
          </Link>
        </div>
      </div>
    </section>
  )
}
