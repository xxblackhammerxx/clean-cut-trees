import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sitemap - Clean Cuts Trees | Clean Cuts Trees',
  description:
    'Clean Cuts Trees is the #1 tree service company in Fruit Heights serving all of Davis and Weber County, Utah, including Layton & surounding areas.',
  keywords: 'tree service, Clean Cuts Trees, Utah',
}

export default function SitemapPage() {
  return (
    <div className="general-page">
      <article className="page-content">
        <div className="container">
          <div className="page-layout">
            <div className="page-main">
              <header className="page-header">
                <h1 className="page-title">Sitemap - Clean Cuts Trees</h1>
              </header>

              <div className="page-content-body">
                <>
                  <h1 key={0} className="content-heading">
                    Sitemap
                  </h1>
                  <h2 key={1} className="content-heading">
                    Posts
                  </h2>
                  <p key={2}>
                    3 Common Tree Moths in Utah You Need to Watch For 3 Reasons Why Tree Removal in
                    Utah Should Be Left to the Professionals 5 Benefits Of Contracting Tree Planting
                    Professionals In Utah 5 Common Trees Most Likely to Fall in the Wind 5 Effective
                    Ways To Preserve Trees in Clinton, UT 5 Important Reasons for Tree Pruning 7
                    Tree Planting Tips To Ensuring Lasting Growth Brief Guide to Storm Preparedness
                    for Trees Does Cutting Down Trees Increase Property Value? Essential Benefits of
                    Trimming Trees Regularly in North Ogden, UT Everything You Should Know About
                    Hiring a Tree Removal Service Five Tips on How To Choose a Tree Service in South
                    Weber, UT Half of My Tree Is Dead in Farmington, UT: What Causes It? How
                    Clearing Land Can Increase Property Value How Do Trees Regulate the Climate: Why
                    Plants Trees? How Far Can a Tree Lean Before It Falls in Layton, UT? How Long
                    Does It Take To Remove a Tree? How To Clear Overgrown Land Safely in Pleasant
                    View, UT How To Cut Down a Tree Near a House How To Fix Girdling Tree Roots in
                    Layton, UT How to Kill Poison Ivy on a Tree: Two Tips How To Make a Tree Fall a
                    Certain Way How to Prevent Your Trees Dying From Drought in Utah How To Remove
                    Big Tree Roots From the Ground in Clinton, UT How to Save an Underwatered Tree
                    on Your Property How To Tell if a Tree Is Dead or Dormant How To Tell If Your
                    Trees Need Trimming This Season How To Tell When It’s Time To Remove a Tree The
                    Benefits of Deep Root Fertilization on Layton, UT, Trees The Difference Between
                    Tree Trimming and Tree Pruning in Syracuse, UT Tree Boring Insects: Treatment
                    and Prevention Tips for Riverdale, UT Residents   Tree Only Has Branches on One
                    Side - What Does It Mean Tree Removal Permit in Ogden, UT - City of Ogden Tree
                    Ordinance Tree Rot: Causes, Solutions, and Prevention What Are the Signs of Ash
                    Tree Disease in Eden, UT?  What Does a Municipal Tree Service Do? What is
                    Considered a Tree Emergency: Factors to Consider What Questions to Ask a Tree
                    Removal Service in Kaysville What To Do When Tree Branches Hang Over Your Roof
                    What To Do When Tree Storm Damage Wreaks Havoc What To Know Before Planting
                    Non-Native Trees on Your Yard   Which Tree Roots Damage Foundations? Why Are
                    Curved Trees Dangerous? Why Is My Tree Not Growing Leaves? Why Major Tree
                    Cleanup After Storm Should Be Done By Professionals Will Damaged Tree Roots Grow
                    Back? Winter Maintenance: Best Kept Secret for Healthy Trees
                  </p>
                  <h2 key={3} className="content-heading">
                    Pages
                  </h2>
                  <p key={4}>
                    About Us Blog Contact Us Demo FAQ Free Wood Chips Home News & Media Photo
                    Gallery Privacy Policy Real Salt Lake Partnership Referrals Sample Page Service
                    Areas Bountiful Centerville Clearfield Clinton Eden Farmington Farr West Hooper
                    Kaysville Layton North Ogden North Salt Lake Plain City Pleasant View Riverdale
                    Roy South Weber Syracuse Tree Service Davis County, UT Tree Service Salt Lake
                    County, UT Tree Service Weber County, UT West Haven Services Emergency Tree
                    Damage Municipal Tree Service Professional Land Clearing Services Storm Clean Up
                    Tree Removal Tree Trimming Sitemap Testimonials Thank You
                  </p>
                  <h2 key={5} className="content-heading">
                    Divi Overlays
                  </h2>
                  <p key={6}>Form</p>
                  <h2 key={7} className="content-heading">
                    Categories
                  </h2>
                  <p key={8}>
                    General Tree-Related Tips Land Clearing & Development Professional Tree Services
                    Seasonal Tree Care Guide Tree Care Services Tree Planting Tree Pruning Tree
                    Removal Tree Removal Guide Tree Removal Services Tree Services Tree Trimming and
                    Pruning Uncategorized
                  </p>
                  <p key={9}>!logo copy</p>
                  <p key={10}>
                    Clean Cuts Trees is the #1 tree service company in Fruit Heights serving all of
                    Davis, Salt Lake and Weber County, Utah, & surrounding areas.
                  </p>
                  <p key={11}>!badge copy</p>
                </>
              </div>
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
                  </span>
                  (801) 473-7548
                </Link>
              </div>

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
