import { generateStructuredData, parseServiceAreaContent } from '@/utils/contentParser'
import Script from 'next/script'

interface ServiceAreaContentProps {
  content: string
  cityName: string
  phoneNumber?: string
}

export default function ServiceAreaContent({
  content,
  cityName,
  phoneNumber = '(801) 473-7548',
}: ServiceAreaContentProps) {
  const sections = parseServiceAreaContent(content)
  const structuredData = generateStructuredData(cityName, phoneNumber)

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="markdown-content service-area-content">
        {sections.map((section, index) => {
          switch (section.type) {
            case 'heading':
              return section.level === 2 ? (
                <h2 key={index} className="service-heading section-heading">
                  {section.content}
                </h2>
              ) : (
                <h3 key={index} className="service-heading section-heading">
                  {section.content}
                </h3>
              )

            case 'subheading':
              return (
                <h3 key={index} className="service-subheading section-subheading">
                  {section.content}
                </h3>
              )

            case 'subsubheading':
              return (
                <h4 key={index} className="service-subsubheading section-subsubheading">
                  {section.content}
                </h4>
              )

            case 'paragraph':
              return (
                <p key={index} className="service-paragraph section-paragraph">
                  {section.content}
                </p>
              )

            case 'list':
              return (
                <ul key={index} className="service-list section-list">
                  {section.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="service-list-item section-list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              )

            default:
              return null
          }
        })}
      </div>
    </>
  )
}
