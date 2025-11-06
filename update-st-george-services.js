#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

// List of St. George service pages to update
const servicePages = [
  'src/app/(frontend)/st-george/services/stump-grinding/page.tsx',
  'src/app/(frontend)/st-george/services/tree-trimming-pruning/page.tsx',
  'src/app/(frontend)/st-george/services/tree-care-services/page.tsx',
  'src/app/(frontend)/st-george/services/emergency-tree-removal/page.tsx',
]

// Function to update a service page
function updateServicePage(filePath) {
  console.log(`Updating ${filePath}...`)
  
  let content = fs.readFileSync(filePath, 'utf-8')
  
  // Add import statement after BookingButton import
  const importRegex = /(import BookingButton from '@\/components\/BookingButton')/
  const hasImport = content.includes("import { stGeorgeOfficeContact, emergencyContact } from '@/utils/contactInfo'")
  
  if (!hasImport && importRegex.test(content)) {
    content = content.replace(
      importRegex,
      '$1\nimport { stGeorgeOfficeContact, emergencyContact } from \'@/utils/contactInfo\''
    )
  }
  
  // Replace phone number references
  content = content.replace(/tel:\+18014737548/g, `tel:$\{stGeorgeOfficeContact.phoneLink\}`)
  content = content.replace(/\(801\) 473-7548/g, '$\{stGeorgeOfficeContact.phone\}')
  
  // Handle specific patterns for hero sections and contact info
  content = content.replace(
    /href="tel:\$\{stGeorgeOfficeContact\.phoneLink\}"/g,
    'href={`tel:${stGeorgeOfficeContact.phoneLink}`}'
  )
  content = content.replace(
    /\$\{stGeorgeOfficeContact\.phone\}/g,
    '{stGeorgeOfficeContact.phone}'
  )
  
  // For emergency service pages, keep emergency number for 24/7 service
  if (filePath.includes('emergency-tree-removal')) {
    // In emergency pages, use emergency contact for the main emergency number
    const emergencyPattern = /24\/7.*?href=\{`tel:\$\{stGeorgeOfficeContact\.phoneLink\}`\}.*?\{stGeorgeOfficeContact\.phone\}/g
    content = content.replace(emergencyPattern, (match) => {
      return match
        .replace('stGeorgeOfficeContact.phoneLink', 'emergencyContact.phoneLink')
        .replace('stGeorgeOfficeContact.phone', 'emergencyContact.phone')
    })
  }
  
  fs.writeFileSync(filePath, content)
  console.log(`✅ Updated ${filePath}`)
}

// Update all service pages
servicePages.forEach(updateServicePage)

console.log('🎉 All St. George service pages updated!')
