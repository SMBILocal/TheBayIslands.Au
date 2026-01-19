import { Metadata } from 'next';

export interface MetadataGeneratorProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'business.business';
  author?: string;
  published?: string;
  updated?: string;
  canonical?: string;
}

/**
 * Generate comprehensive metadata for SEO
 */
export function generateComprehensiveMetadata(props: MetadataGeneratorProps): Metadata {
  const {
    title,
    description,
    keywords = [],
    image = 'https://thebayislands.au/og-image.png',
    url = 'https://thebayislands.au',
    type = 'website',
    author = 'The Bay Islands',
    published,
    updated,
    canonical = url,
  } = props;

  const fullTitle = `${title} | The Bay Islands`;

  return {
    title: fullTitle,
    description,
    keywords: ['Bay Islands', 'South Moreton Bay', 'Russell Island', 'Macleay Island', ...keywords],
    authors: [{ name: author }],
    creator: author,
    publisher: author,
    openGraph: {
      type: type as any,
      url,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/png',
        },
      ],
      siteName: 'The Bay Islands',
      locale: 'en_AU',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      site: '@thebayislands',
      creator: '@thebayislands',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    },
    alternates: {
      canonical,
    },
    ...(published && {
      other: {
        'article:published_time': published,
        'article:modified_time': updated || published,
        'article:author': author,
      },
    }),
  };
}

/**
 * Generate metadata for directory listings
 */
export function generateDirectoryMetadata(business: any): Metadata {
  return generateComprehensiveMetadata({
    title: business.business_name,
    description: business.description.substring(0, 160),
    keywords: [business.category, business.location],
    image: business.image_urls?.[0],
    url: `https://thebayislands.au/directory/${business.id}`,
    type: 'business.business',
  });
}

/**
 * Generate metadata for job listings
 */
export function generateJobMetadata(job: any): Metadata {
  return generateComprehensiveMetadata({
    title: `${job.title} at ${job.company_name}`,
    description: job.description.substring(0, 160),
    keywords: [job.category, job.employment_type, job.location],
    image: job.image_url,
    url: `https://thebayislands.au/jobs/${job.id}`,
    type: 'article',
    published: job.created_at,
    updated: job.updated_at,
  });
}

/**
 * Generate metadata for events
 */
export function generateEventMetadata(event: any): Metadata {
  return generateComprehensiveMetadata({
    title: event.title,
    description: event.description.substring(0, 160),
    keywords: [event.category, event.location],
    image: event.image_url,
    url: `https://thebayislands.au/events/${event.id}`,
    type: 'article',
    published: event.created_at,
    updated: event.updated_at,
  });
}

/**
 * Generate metadata for classifieds
 */
export function generateClassifiedMetadata(classified: any): Metadata {
  return generateComprehensiveMetadata({
    title: classified.title,
    description: classified.description.substring(0, 160),
    keywords: [classified.category, classified.condition, classified.location],
    image: classified.image_urls?.[0],
    url: `https://thebayislands.au/classifieds/${classified.id}`,
    type: 'product',
  });
}

/**
 * Meta tags for robots and crawling
 */
export const robotsMetadata = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    'max-video-preview': -1,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
};

/**
 * Verification codes for search engines
 */
export const verificationCodes = {
  google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
};
