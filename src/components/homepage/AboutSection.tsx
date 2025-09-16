import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>
              Best and Reliable Tree Services
              <br />
              in all of Davis, Weber, and Salt Lake Counties
            </h2>
            <p>
              Serving all of Davis, Salt Lake and Weber County, Utah, including and nearby areas
            </p>
            <p>
              You might not give much thought to the trees in your front or backyard. You probably
              won&apos;t notice them growing, but trees, like all living things, need consistent
              tree care to stay healthy and strong. For example, tree limbs and stray branches need
              to be trimmed through professional trimming services to keep their shape and ensure
              that they don&apos;t obstruct views and power lines. Falling branches and even entire
              trees can damage your family and property, which is why emergency tree service and
              tree removal are critical services.
            </p>
            <p>
              For our customers in Salt Lake, Weber County, UT, Davis County, UT, Layton, UT and
              Fruit Heights, UT, Clean Cuts Trees is the tree removal company they choose to
              inspect, prune, and trim the trees around their property as well as provide emergency
              tree removal, professional tree services, tree care, and removal services for trees,
              shrubs, and bushes when needed. Our company provides comprehensive tree services with
              free estimates for every project.
            </p>
            <Link href="/contact-us" className="btn btn-primary">
              CONTACT US NOW!
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
