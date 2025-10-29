import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Referrals - Clean Cuts Trees | Clean Cuts Trees',
  description: 'When you refer someone to us, everyone wins!',
  keywords: 'tree service, Clean Cuts Trees, Utah',
}

export default function ReferralsPage() {
  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <main className="page-main">
              <header className="page-header">
                <h1 className="page-title">Referrals - Clean Cuts Trees</h1>
              </header>

              <div className="page-content-body">
                <>
                  <h1 key={0} className="content-heading">
                    Referrals
                  </h1>
                  <h2 key={1} className="content-heading">
                    _*Love Our Service? Send friends, score gift cards!*_
                  </h2>
                  <p key={2}>__When you refer someone to us, everyone wins!__</p>
                  <p key={3}>
                    __You get a $20 Amazon Gift Card (delivered digitally)__ __They get $35 off
                    their first service__
                  </p>
                  <p key={4}>__It’s easy:__</p>
                  <p key={5}>
                    __Share our name with a friend, family member, or neighbor.__ __They mention
                    your name when booking.__ __Once their service is complete, you’ll receive your
                    gift card by email!__
                  </p>
                  <p key={6}>__There’s no limit-refer as many people as you like!__</p>
                  <h2 key={7} className="content-heading">
                    Refer Us Today
                  </h2>
                  <p key={8}>!logo copy</p>
                  <p key={9}>
                    Clean Cuts Trees is the #1 tree service company in Fruit Heights serving all of
                    Davis, Salt Lake and Weber County, Utah, & surrounding areas.
                  </p>
                  <p key={10}>!badge copy</p>
                </>
              </div>
            </main>

            <aside className="page-sidebar">
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
