import Link from 'next/link'
import OptimizedImage from '@/components/OptimizedImage'

export default function PartnershipSection() {
  return (
    <section className="partnership">
      <div className="container">
        <div className="partnership-banner">
          <OptimizedImage
            src="/rsl-acfu-partnership.png"
            alt="Real Salt Lake and America First Credit Union Partnership"
            className="partnership-image"
            width={600}
            height={200}
            sizes="(max-width: 768px) 100vw, 600px"
            loading="lazy"
          />
          <p>
            Clean Cuts Trees is a Proud Partner of <strong>Real Salt Lake</strong> & Winner of the{' '}
            <strong>America First Credit Union</strong> 2024 Small Business Showcase.
          </p>
          <Link href="/real-salt-lake-partnership" className="btn btn-secondary">
            Read more
          </Link>
        </div>
      </div>
    </section>
  )
}
