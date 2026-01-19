// Structured data generation for SEO - JSON-LD format

export interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'JobPosting' | 'Event' | 'Product' | 'BreadcrumbList' | 'FAQPage';
  data: any;
}

/**
 * Generate JSON-LD structured data for LocalBusiness (Directory listings)
 */
export function generateLocalBusinessSchema(business: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://thebayislands.au/directory/${business.id}`,
    name: business.business_name,
    description: business.description,
    url: business.website || `https://thebayislands.au/directory/${business.id}`,
    telephone: business.phone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address,
      addressLocality: mapLocationToCity(business.location),
      addressRegion: 'QLD',
      postalCode: mapLocationToPostcode(business.location),
      addressCountry: 'AU',
    },
    image: business.image_urls?.[0] || null,
    priceRange: '$',
    aggregateRating: business.rating ? {
      '@type': 'AggregateRating',
      ratingValue: business.rating,
      reviewCount: business.review_count || 1,
    } : undefined,
  };
}

/**
 * Generate JSON-LD structured data for JobPosting
 */
export function generateJobPostingSchema(job: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    '@id': `https://thebayislands.au/jobs/${job.id}`,
    title: job.title,
    description: job.description,
    hiringOrganization: {
      '@type': 'Organization',
      name: job.company_name,
      logo: null,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: mapLocationToCity(job.location),
        addressRegion: 'QLD',
        postalCode: mapLocationToPostcode(job.location),
        addressCountry: 'AU',
      },
    },
    employmentType: mapEmploymentType(job.employment_type),
    baseSalary: job.salary_min || job.salary_max ? {
      '@type': 'PriceSpecification',
      priceCurrency: 'AUD',
      price: job.salary_max,
      minPrice: job.salary_min,
      maxPrice: job.salary_max,
    } : undefined,
    datePosted: job.created_at,
    validThrough: job.expires_at,
  };
}

/**
 * Generate JSON-LD structured data for Event
 */
export function generateEventSchema(event: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    '@id': `https://thebayislands.au/events/${event.id}`,
    name: event.title,
    description: event.description,
    image: event.image_url || null,
    startDate: `${event.start_date}${event.start_time ? 'T' + event.start_time : ''}`,
    endDate: `${event.end_date}${event.end_time ? 'T' + event.end_time : ''}`,
    location: {
      '@type': 'Place',
      name: event.address,
      address: {
        '@type': 'PostalAddress',
        addressLocality: mapLocationToCity(event.location),
        addressRegion: 'QLD',
        postalCode: mapLocationToPostcode(event.location),
        addressCountry: 'AU',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: event.organizer_name || 'The Bay Islands',
    },
    offers: event.ticket_price ? {
      '@type': 'Offer',
      url: event.ticket_url || `https://thebayislands.au/events/${event.id}`,
      price: event.ticket_price,
      priceCurrency: 'AUD',
      availability: 'https://schema.org/PreOrder',
    } : undefined,
  };
}

/**
 * Generate JSON-LD structured data for Product (Classified)
 */
export function generateProductSchema(classified: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `https://thebayislands.au/classifieds/${classified.id}`,
    name: classified.title,
    description: classified.description,
    image: classified.image_urls || [],
    offers: {
      '@type': 'Offer',
      url: `https://thebayislands.au/classifieds/${classified.id}`,
      price: classified.price,
      priceCurrency: 'AUD',
      availability: classified.status === 'active' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
    },
    aggregateRating: classified.rating ? {
      '@type': 'AggregateRating',
      ratingValue: classified.rating,
      reviewCount: classified.review_count || 1,
    } : undefined,
  };
}

/**
 * Generate JSON-LD structured data for BreadcrumbList
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `https://thebayislands.au${crumb.url}`,
    })),
  };
}

/**
 * Generate JSON-LD structured data for FAQPage
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate JSON-LD structured data for Organization (main site)
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Bay Islands',
    url: 'https://thebayislands.au',
    logo: 'https://thebayislands.au/logo.svg',
    description: 'Community directory, jobs, events and classifieds for South Moreton Bay Islands',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Redland Bay',
      addressRegion: 'QLD',
      postalCode: '4165',
      addressCountry: 'AU',
    },
    sameAs: [
      'https://facebook.com/thebayislands',
      'https://instagram.com/thebayislands',
    ],
  };
}

// Helper functions for mapping
function mapLocationToCity(location: string): string {
  const locationMap: Record<string, string> = {
    'russell': 'Russell Island',
    'macleay': 'Macleay Island',
    'lamb': 'Lamb Island',
    'karragarra': 'Karragarra Island',
    'redland-bay': 'Redland Bay',
    'victoria-point': 'Victoria Point',
    'cleveland': 'Cleveland',
    'capalaba': 'Capalaba',
  };
  return locationMap[location] || location;
}

function mapLocationToPostcode(location: string): string {
  const postcodeMap: Record<string, string> = {
    'russell': '4184',
    'macleay': '4184',
    'lamb': '4184',
    'karragarra': '4184',
    'redland-bay': '4165',
    'victoria-point': '4165',
    'cleveland': '4163',
    'capalaba': '4157',
  };
  return postcodeMap[location] || '4165';
}

function mapEmploymentType(employmentType: string): string {
  const typeMap: Record<string, string> = {
    'full-time': 'FULL_TIME',
    'part-time': 'PART_TIME',
    'contract': 'CONTRACTOR',
    'casual': 'TEMPORARY',
    'volunteer': 'VOLUNTEER',
  };
  return typeMap[employmentType] || 'FULL_TIME';
}

/**
 * Create a JSON-LD script tag (for React)
 */
export function createStructuredDataScript(schema: any): string {
  return JSON.stringify(schema);
}
