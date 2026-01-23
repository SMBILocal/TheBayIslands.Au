import { LOCATION_LABELS } from './locations';

interface DirectoryListing {
  id: string;
  slug?: string;
  business_name?: string;
  name?: string;
  description: string;
  category: string;
  location: string;
  phone?: string | null;
  email?: string | null;
  website?: string | null;
  address?: string;
  image_urls?: string[] | null;
  hours?: string | null;
}

/**
 * Generate LocalBusiness JSON-LD schema for directory listings
 */
export function generateLocalBusinessSchema(listing: DirectoryListing) {
  const businessName = listing.business_name || listing.name || 'Business';
  const businessId = listing.slug || listing.id;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://thebayislands.au/directory/${businessId}`,
    name: businessName,
    description: listing.description,
    url: listing.website || `https://thebayislands.au/directory/${businessId}`,
    telephone: listing.phone || undefined,
    email: listing.email || undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: listing.address || '',
      addressLocality: mapLocationToCity(listing.location),
      addressRegion: 'QLD',
      postalCode: mapLocationToPostcode(listing.location),
      addressCountry: 'AU',
    },
    image: listing.image_urls?.[0] || undefined,
    openingHours: listing.hours || undefined,
  };
}

/**
 * Generate BreadcrumbList JSON-LD schema for navigation
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
 * Generate Organization JSON-LD schema for the site
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Bay Islands',
    alternateName: 'TheBayIslands.Au',
    url: 'https://thebayislands.au',
    logo: 'https://thebayislands.au/logo.svg',
    description: 'Your complete guide to the Southern Moreton Bay Islands - directory, jobs, events, classifieds, and community information for Russell Island, Macleay Island, Lamb Island, and Karragarra Island.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Redland Bay',
      addressRegion: 'QLD',
      postalCode: '4165',
      addressCountry: 'AU',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Russell Island',
      },
      {
        '@type': 'City',
        name: 'Macleay Island',
      },
      {
        '@type': 'City',
        name: 'Lamb Island',
      },
      {
        '@type': 'City',
        name: 'Karragarra Island',
      },
      {
        '@type': 'City',
        name: 'Redland Bay',
      },
      {
        '@type': 'City',
        name: 'Victoria Point',
      },
      {
        '@type': 'City',
        name: 'Cleveland',
      },
      {
        '@type': 'City',
        name: 'Capalaba',
      },
    ],
  };
}

/**
 * Generate ItemList JSON-LD schema for listing pages
 */
export function generateItemListSchema(
  items: DirectoryListing[],
  listName: string,
  listUrl: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    url: `https://thebayislands.au${listUrl}`,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'LocalBusiness',
        name: item.business_name || item.name || 'Business',
        url: `https://thebayislands.au/directory/${item.slug || item.id}`,
        description: item.description,
      },
    })),
  };
}

/**
 * Helper: Map location slug to city name
 */
export function mapLocationToCity(location: string): string {
  return LOCATION_LABELS[location] || location;
}

/**
 * Helper: Map location slug to postcode
 */
export function mapLocationToPostcode(location: string): string {
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

/**
 * Helper: Convert category to URL-friendly slug
 */
export function categoryToSlug(category: string): string {
  return category
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

/**
 * Helper: Convert slug back to category name
 */
export function slugToCategory(slug: string, categories: readonly string[]): string | null {
  const normalized = slug.toLowerCase();
  return categories.find(cat => categoryToSlug(cat) === normalized) || null;
}
