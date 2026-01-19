import { Metadata } from 'next';

export function generateArticleMetadata(params: {
  title: string;
  description: string;
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
}): Metadata {
  const {
    title,
    description,
    keywords = [],
    publishedTime = '2026-01-19T00:00:00Z',
    modifiedTime = '2026-01-19T00:00:00Z',
    authors = ['The Bay Islands Team'],
    section = 'Community'
  } = params;

  const siteName = 'The Bay Islands';
  const baseUrl = 'https://thebayislands.au';
  const fullTitle = `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      'South Moreton Bay Islands',
      'SMBI',
      'Russell Island',
      'Macleay Island',
      'Lamb Island',
      'Karragarra Island',
      'Queensland islands',
      'Moreton Bay'
    ],
    authors: authors.map(name => ({ name })),
    creator: siteName,
    publisher: siteName,
    openGraph: {
      title: fullTitle,
      description,
      siteName,
      locale: 'en_AU',
      type: 'article',
      publishedTime,
      modifiedTime,
      authors,
      section,
      url: baseUrl,
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${baseUrl}/og-image.jpg`],
    },
    alternates: {
      canonical: baseUrl,
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
  };
}

export function generatePageMetadata(params: {
  title: string;
  description: string;
  keywords?: string[];
}): Metadata {
  const { title, description, keywords = [] } = params;
  
  const siteName = 'The Bay Islands';
  const baseUrl = 'https://thebayislands.au';
  const fullTitle = title.includes('|') ? title : `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      'South Moreton Bay Islands',
      'SMBI',
      'island living',
      'Queensland',
      'community hub'
    ],
    openGraph: {
      title: fullTitle,
      description,
      siteName,
      locale: 'en_AU',
      type: 'website',
      url: baseUrl,
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${baseUrl}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
