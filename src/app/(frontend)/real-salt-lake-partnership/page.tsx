import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tree Removal Service - Clean Cuts Trees | Clean Cuts Trees',
  description:
    'We are so excited to announce our partnership with Real Salt Lake and America First Credit Union and our passion Clean Cuts Trees. Now, when you head to',
  keywords: 'tree service, Clean Cuts Trees, Utah',
}

export default function RealSaltLakePartnershipPage() {
  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <main className="page-main">
              <div className="page-content-body">
                <>
                  <h1 key={0} className="content-heading">
                    Real Salt Lake Partnership
                  </h1>
                  <h2 key={1} className="content-heading">
                    Clean Cuts Trees wins the Small Business Showcase at the awards ceremony with
                    Real Salt Lake and America First Credit Union!
                  </h2>
                  <p key={2}>
                    We are so excited to announce our partnership with Real Salt Lake and America
                    First Credit Union and our passion Clean Cuts Trees. Now, when you head to
                    America First Field, you will see our signage in various areas with us
                    representing!
                  </p>
                  <p key={3}>Clean Cuts Trees at the Awards Ceremony</p>
                  <p key={5}>
                    Clean Cuts Trees, a local tree care company, recently celebrated a significant
                    victory by winning the coveted Small Business Showcase hosted by America First
                    Credit Union in partnership with Real Salt Lake. This prestigious award
                    recognizes outstanding local businesses and provides them with a valuable
                    platform for growth and increased visibility.
                  </p>
                  <p key={6}>
                    Five finalists competed for the coveted prize package, which includes valuable
                    marketing support such as prominent signage at America First Field, home of Real
                    Salt Lake, and digital assets designed to enhance their online presence. The
                    showcase exemplifies America First Credit Union’s commitment to fostering a
                    thriving local business community by providing a unique opportunity for small
                    businesses to shine.
                  </p>
                  <p key={9}>
                    The Small Business Showcase has a proven track record of success, empowering
                    previous winners with valuable marketing exposure and a significant boost in
                    business growth. This initiative not only benefits the winning businesses but
                    also strengthens the local economy by supporting and celebrating the
                    entrepreneurial spirit within the community.
                  </p>
                </>
              </div>
            </main>
          </div>
        </div>
      </article>
    </div>
  )
}
