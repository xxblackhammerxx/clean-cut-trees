import OptimizedImage from '@/components/OptimizedImage'
import { defaultServiceImage, ServiceData, serviceImages } from '@/data/homepage-data'
import Link from 'next/link'

interface ServiceCardProps {
  service: ServiceData
  priority?: boolean
}

export default function ServiceCard({ service, priority = false }: ServiceCardProps) {
  const serviceSlug = service.slug?.replace('services-', '') || ''
  const imagePath = serviceImages[serviceSlug]
    ? `/assets/${serviceImages[serviceSlug]}`
    : `/assets/${defaultServiceImage}`

  return (
    <div className="service-card">
      <div className="service-image">
        <OptimizedImage
          src={imagePath}
          alt={service.title.replace(' - Clean Cuts Trees', '')}
          className="service-img"
          width={400}
          height={300}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
        />
      </div>
      <div className="service-content">
        <h3>{service.title.replace(' - Clean Cuts Trees', '')}</h3>
        <Link href={`/services/${serviceSlug}`} className="service-link">
          {serviceSlug === 'emergency-tree-service' ? 'Get Emergency Service →' : 'Learn More →'}
        </Link>
      </div>
    </div>
  )
}
