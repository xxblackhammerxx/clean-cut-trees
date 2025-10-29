interface ContentSection {
  type: 'heading' | 'paragraph' | 'list' | 'subheading' | 'subsubheading'
  content: string
  level?: number
  items?: string[]
}

export function parseServiceAreaContent(rawContent: string): ContentSection[] {
  const lines = rawContent.split('\n').filter((line) => line.trim() !== '')
  const sections: ContentSection[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    // Skip empty lines
    if (!line) continue

    // Main headings (no # prefix, standalone lines that are followed by content)
    if (isMainHeading(line, lines, i)) {
      sections.push({
        type: 'heading',
        content: line,
        level: 2,
      })
    }
    // Subheadings (typically shorter lines followed by lists or paragraphs)
    else if (isSubHeading(line, lines, i)) {
      sections.push({
        type: 'subheading',
        content: line,
        level: 3,
      })
    }
    // Sub-subheadings (even shorter, often ending with ":")
    else if (isSubSubHeading(line)) {
      sections.push({
        type: 'subsubheading',
        content: line.replace(':', ''),
        level: 4,
      })
    }
    // Lists (lines with bullet points or colons)
    else if (isListItem(line) && shouldGroupAsList(lines, i)) {
      const listItems: string[] = []
      let j = i

      // Collect consecutive list items
      while (j < lines.length && isListItem(lines[j].trim())) {
        const item = cleanListItem(lines[j].trim())
        if (item) listItems.push(item)
        j++
      }

      sections.push({
        type: 'list',
        content: '',
        items: listItems,
      })

      // Skip the processed lines
      i = j - 1
    }
    // Regular paragraphs
    else if (line.length > 20 && !isListItem(line)) {
      sections.push({
        type: 'paragraph',
        content: line,
      })
    }
  }

  return sections
}

function isMainHeading(line: string, lines: string[], index: number): boolean {
  // Major section headers - look for patterns like "Local Expertise:", "Comprehensive Tree Service", etc.
  const headingPatterns = [
    /^Local Expertise:/,
    /^Comprehensive Tree Service/,
    /^Expert Tree Removal/,
    /^Professional Tree Trimming/,
    /^24\/7 Emergency/,
    /^Advanced Tree Health/,
    /^Municipal and Commercial/,
    /^Why .* Residents Choose/,
    /^Seasonal Tree Care/,
    /^Advanced Tree Care Technologies/,
    /^Transparent Pricing/,
    /^Customer Testimonials/,
    /^Contact Clean Cuts Trees/,
    /Addressing .*-Specific Tree Care Challenges$/,
    /Solutions for .* Properties$/,
  ]

  // Check explicit patterns first
  if (headingPatterns.some((pattern) => pattern.test(line))) {
    return true
  }

  // Check if it looks like a heading (shorter line followed by longer content)
  if (line.length > 15 && line.length < 80 && !line.includes(':') && !line.includes('.')) {
    const nextLine = lines[index + 1]
    return Boolean(nextLine && nextLine.length > 50)
  }

  return false
}

function isSubHeading(line: string, lines: string[], index: number): boolean {
  const subHeadingPatterns = [
    /Specialist Care$/,
    /Management$/,
    /Services$/,
    /Experience$/,
    /Certifications/,
    /Responsibility$/,
    /^Spring Tree Care/,
    /^Summer Management/,
    /^Fall Preparation/,
    /^Winter Care/,
    /^Diagnostic Technologies$/,
    /^Treatment Applications$/,
    /^Service Guarantees/,
    /Neighborhood-Specific Services$/,
    /Primary Challenge Management$/,
    /Comprehensive Species Management$/,
  ]

  return (
    subHeadingPatterns.some((pattern) => pattern.test(line)) ||
    (line.length < 60 &&
      line.length > 10 &&
      !line.includes(':') &&
      index < lines.length - 1 &&
      lines[index + 1].length > 30)
  )
}

function isSubSubHeading(line: string): boolean {
  return line.endsWith(':') && line.length < 50 && line.length > 5
}

function isListItem(line: string): boolean {
  return (
    (line.includes(':') && !line.endsWith(':') && line.length < 100) ||
    line.match(/^[A-Z][a-z]+ [a-z]+:/) !== null ||
    line.match(/^- /) !== null ||
    (line.includes(' and ') && line.length < 80)
  )
}

function shouldGroupAsList(lines: string[], startIndex: number): boolean {
  let consecutiveItems = 0
  for (let i = startIndex; i < Math.min(startIndex + 5, lines.length); i++) {
    if (isListItem(lines[i].trim())) {
      consecutiveItems++
    } else {
      break
    }
  }
  return consecutiveItems >= 2
}

function cleanListItem(line: string): string {
  return line.replace(/^- /, '').replace(/^• /, '').trim()
}

export function generateStructuredData(cityName: string, phoneNumber: string = '(801) 473-7548') {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Clean Cuts Trees',
    image: 'https://www.cleancutstrees.com/assets/clean-cuts-logo.png',
    '@id': `https://www.cleancutstrees.com/service-areas/${cityName.toLowerCase()}-ut-tree-service`,
    url: `https://www.cleancutstrees.com/service-areas/${cityName.toLowerCase()}-ut-tree-service`,
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
