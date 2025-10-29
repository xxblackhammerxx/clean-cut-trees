import Script from 'next/script'

interface StructuredDataProps {
  cityName: string
  phoneNumber?: string
}

function generateStructuredData(cityName: string, phoneNumber: string = '(801) 473-7548') {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Clean Cuts Trees',
    image: 'https://www.cleancutstrees.com/assets/clean-cuts-logo.png',
    '@id': `https://www.cleancutstrees.com/service-areas/${cityName.toLowerCase().replace(/\s+/g, '-')}-ut-tree-service`,
    url: `https://www.cleancutstrees.com/service-areas/${cityName.toLowerCase().replace(/\s+/g, '-')}-ut-tree-service`,
    telephone: phoneNumber,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Utah',
      addressLocality: cityName,
      addressRegion: 'UT',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    serviceArea: {
      '@type': 'City',
      name: `${cityName}, Utah`,
    },
    priceRange: '$$',
    services: [
      'Tree Removal',
      'Tree Trimming',
      'Tree Pruning',
      'Emergency Tree Service',
      'Storm Cleanup',
      'Land Clearing',
      'Municipal Tree Service',
    ],
  }
}

export default function StructuredData({
  cityName,
  phoneNumber = '(801) 473-7548',
}: StructuredDataProps) {
  const structuredData = generateStructuredData(cityName, phoneNumber)

  return (
    <Script
      id={`structured-data-${cityName.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
