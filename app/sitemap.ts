import { MetadataRoute } from 'next';
import { ALL_LOCATIONS } from '@/lib/locations';
import { BUSINESS_CATEGORIES } from '@/lib/business-categories';
import { categoryToSlug } from '@/lib/seo-helpers';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thebayislands.au';
  const currentDate = new Date().toISOString();

  // Generate suburb pages
  const suburbPages = ALL_LOCATIONS.map((location) => ({
    url: `${baseUrl}/suburbs/${location.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Generate category pages
  const categoryPages = BUSINESS_CATEGORIES.map((category) => ({
    url: `${baseUrl}/categories/${categoryToSlug(category)}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Generate popular suburb+category combination pages (money pages)
  const popularCategories = [
    'Cafes & Coffee Shops',
    'Restaurants',
    'Takeaway Food',
    'Doctors & Medical Centers',
    'Pharmacies',
    'Supermarkets & Groceries',
    'Convenience Stores',
    'Plumbers',
    'Electricians',
    'Builders & Construction',
    'Transport & Ferry Services',
    'Marina Services',
    'Real Estate Agents',
    'Hairdressers & Barbers',
    'Community Halls',
  ];

  const moneyPages: MetadataRoute.Sitemap = [];
  ALL_LOCATIONS.forEach((location) => {
    popularCategories.forEach((category) => {
      moneyPages.push({
        url: `${baseUrl}/${location.slug}/${categoryToSlug(category)}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      });
    });
  });

  return [
    // Home
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Main Service Pages
    {
      url: `${baseUrl}/directory`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/jobs`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/classifieds`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/upgrade`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Islands Hub
    {
      url: `${baseUrl}/islands`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/islands/russell`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/islands/macleay`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/islands/lamb`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/islands/karragarra`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    // Mainland Suburbs
    {
      url: `${baseUrl}/areas/mainland/redland-bay`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/areas/mainland/victoria-point`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/areas/mainland/cleveland`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/areas/mainland/capalaba`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Articles
    {
      url: `${baseUrl}/articles/community-infrastructure`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/transport-on-islands`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/education-schools-islands`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/recreation-sports-islands`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/island-events-calendar`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/tourism-attractions`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/food-dining`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles/business-directory-guide`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Suburb pages
    ...suburbPages,
    // Category pages
    ...categoryPages,
    // Money pages (suburb + category)
    ...moneyPages,
  ];
}
