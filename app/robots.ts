import { MetadataRoute } from 'next';

/**
 * Dynamic robots.txt generation
 * When NEXT_PUBLIC_ALLOW_INDEXING=false, robots are blocked from crawling
 * When NEXT_PUBLIC_ALLOW_INDEXING=true, robots can crawl and index
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://thebayislands.au';
  const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true';

  if (!allowIndexing) {
    // Block all robots when not ready for indexing
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    };
  }

  // Allow indexing when ready
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/dashboard/', '/private/'],
        crawlDelay: 2,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/dashboard/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/', '/dashboard/'],
        crawlDelay: 1,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
