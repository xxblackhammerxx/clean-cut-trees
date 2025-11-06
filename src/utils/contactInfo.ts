// Contact information utilities for different locations

export interface ContactInfo {
  phone: string
  phoneLink: string
  address: {
    street: string
    suite?: string
    city: string
    state: string
    zip: string
    full: string
  }
  serviceArea: string
  emergencyAvailable: boolean
}

// Main office contact information
export const mainOfficeContact: ContactInfo = {
  phone: '(801) 473-7548',
  phoneLink: '+18014737548',
  address: {
    street: 'Fruit Heights',
    city: 'Fruit Heights',
    state: 'UT',
    zip: '84037',
    full: 'Fruit Heights, UT 84037'
  },
  serviceArea: 'Davis, Weber & Salt Lake Counties',
  emergencyAvailable: true
}

// St. George office contact information
export const stGeorgeOfficeContact: ContactInfo = {
  phone: '(435) 334-1818',
  phoneLink: '+14353341818',
  address: {
    street: '169 W. 2710 S. Circle',
    suite: 'Suite 202-A',
    city: 'St. George',
    state: 'UT',
    zip: '84790',
    full: '169 W. 2710 S. Circle, Suite 202-A, St. George, UT 84790'
  },
  serviceArea: 'St. George & Washington County',
  emergencyAvailable: true
}

// Function to get contact info based on location/page
export function getContactInfo(location: 'main' | 'st-george' = 'main'): ContactInfo {
  switch (location) {
    case 'st-george':
      return stGeorgeOfficeContact
    case 'main':
    default:
      return mainOfficeContact
  }
}

// Emergency number (always the main number for 24/7 service)
export const emergencyContact = mainOfficeContact

// Check if a path is a St. George page
export function isStGeorgePage(pathname: string): boolean {
  return pathname.includes('/st-george')
}

// Get appropriate contact info based on pathname
export function getContactInfoByPath(pathname: string): ContactInfo {
  return isStGeorgePage(pathname) ? stGeorgeOfficeContact : mainOfficeContact
}
