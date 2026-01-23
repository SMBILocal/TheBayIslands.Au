import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ALL_LOCATIONS } from '@/lib/locations';
import { BUSINESS_CATEGORIES } from '@/lib/business-categories';
import { 
  generateBreadcrumbSchema, 
  generateItemListSchema, 
  generateLocalBusinessSchema,
  categoryToSlug, 
  slugToCategory,
  mapLocationToCity,
} from '@/lib/seo-helpers';
import supabase from '@/lib/supabaseAdmin';

interface MoneyPageProps {
  params: { suburb: string; category: string };
}

async function getListingsBySuburbAndCategory(suburb: string, category: string) {
  try {
    const { data, error } = await supabase
      .from('directory_listings')
      .select('*')
      .eq('location', suburb)
      .eq('category', category)
      .eq('status', 'active')
      .order('featured', { ascending: false })
      .order('business_name', { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching listings:', error);
    return [];
  }
}

export async function generateStaticParams() {
  // Generate params for common suburb/category combinations
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

  const params: { suburb: string; category: string }[] = [];

  // Generate for all locations but only popular categories to keep build time reasonable
  ALL_LOCATIONS.forEach((location) => {
    popularCategories.forEach((category) => {
      params.push({
        suburb: location.slug,
        category: categoryToSlug(category),
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: MoneyPageProps): Promise<Metadata> {
  const location = ALL_LOCATIONS.find((loc) => loc.slug === params.suburb);
  const categoryName = slugToCategory(params.category, BUSINESS_CATEGORIES);

  if (!location || !categoryName) {
    return { title: 'Page Not Found' };
  }

  const title = `${categoryName} in ${location.name} | Bay Islands Directory`;
  const description = `Find the best ${categoryName.toLowerCase()} in ${location.name}. Browse local ${categoryName.toLowerCase()} businesses with verified contact details, opening hours, and customer reviews. Serving ${location.name} and the Southern Moreton Bay Islands region.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://thebayislands.au/${params.suburb}/${params.category}`,
      siteName: 'The Bay Islands',
      locale: 'en_AU',
      type: 'website',
    },
    alternates: {
      canonical: `https://thebayislands.au/${params.suburb}/${params.category}`,
    },
  };
}

export default async function MoneyPage({ params }: MoneyPageProps) {
  const location = ALL_LOCATIONS.find((loc) => loc.slug === params.suburb);
  const categoryName = slugToCategory(params.category, BUSINESS_CATEGORIES);

  if (!location || !categoryName) notFound();

  const listings = await getListingsBySuburbAndCategory(params.suburb, categoryName);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Directory', url: '/directory' },
    { name: location.name, url: `/suburbs/${params.suburb}` },
    { name: categoryName, url: `/${params.suburb}/${params.category}` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const itemListSchema = listings.length > 0 
    ? generateItemListSchema(listings, `${categoryName} in ${location.name}`, `/${params.suburb}/${params.category}`)
    : null;

  // Generate LocalBusiness schema for each listing
  const businessSchemas = listings.map((listing) => generateLocalBusinessSchema(listing));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {itemListSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
      )}
      {businessSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
        <div style={{ background: 'linear-gradient(135deg, #0066b3 0%, #004a8a 100%)', color: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <nav style={{ fontSize: 14, marginBottom: 16, opacity: 0.9 }}>
              <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              {' / '}
              <Link href="/directory" style={{ color: 'white', textDecoration: 'none' }}>Directory</Link>
              {' / '}
              <Link href={`/suburbs/${params.suburb}`} style={{ color: 'white', textDecoration: 'none' }}>{location.name}</Link>
              {' / '}
              <span>{categoryName}</span>
            </nav>
            <h1 style={{ fontSize: 42, fontWeight: 700, margin: '0 0 16px 0' }}>
              {categoryName} in {location.name}
            </h1>
            <p style={{ fontSize: 18, opacity: 0.95, margin: 0 }}>
              Your complete guide to {categoryName.toLowerCase()} services in {location.name}
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
          {/* SEO Content */}
          <div style={{ background: 'white', borderRadius: 12, padding: 32, marginBottom: 32, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
              Find {categoryName} Services in {location.name}
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#475569', marginBottom: 16 }}>
              Looking for trusted {categoryName.toLowerCase()} in {location.name}? You've come to the right place. 
              Our directory features {listings.length} verified local {categoryName.toLowerCase()} {listings.length === 1 ? 'business' : 'businesses'} operating 
              in {location.name}, providing essential services to residents and visitors in the Southern Moreton Bay Islands area.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#475569', marginBottom: 16 }}>
              {location.name} {location.type === 'island' ? 'is an island community' : 'serves the island community'} with 
              a population of {location.population?.toLocaleString() || 'several thousand'} people, located approximately {location.distanceFromBrisbane} from Brisbane. 
              The {categoryName.toLowerCase()} businesses listed here understand the unique needs of {location.type === 'island' ? 'island living' : 'mainland residents serving the islands'}, 
              including {location.ferryAccess ? 'ferry scheduling, delivery logistics, and island-specific requirements' : 'convenient access for island residents and mainland customers'}.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#475569', marginBottom: 16 }}>
              Each {categoryName.toLowerCase()} listing includes detailed contact information, business hours, service descriptions, and customer reviews 
              to help you make informed decisions. Whether you're a long-time resident of {location.name} or just visiting the Southern Moreton Bay Islands, 
              you'll find the local {categoryName.toLowerCase()} services you need right here.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#475569' }}>
              Supporting local {categoryName.toLowerCase()} businesses in {location.name} helps strengthen our island economy and ensures 
              you receive personalized service from providers who know the area well. Browse our verified directory below to connect with 
              professional {categoryName.toLowerCase()} providers serving {location.name} and the broader Bay Islands community.
            </p>
          </div>

          {/* Business Listings */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>
              {listings.length} {categoryName} {listings.length === 1 ? 'Business' : 'Businesses'} in {location.name}
            </h2>

            {listings.length > 0 ? (
              <div style={{ display: 'grid', gap: 24 }}>
                {listings.map((listing) => (
                  <div
                    key={listing.id}
                    style={{
                      background: 'white',
                      borderRadius: 12,
                      padding: 32,
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                      border: listing.featured ? '2px solid #0066b3' : '1px solid #e2e8f0',
                    }}
                  >
                    {listing.featured && (
                      <div style={{ 
                        display: 'inline-block',
                        background: '#0066b3', 
                        color: 'white', 
                        fontSize: 11, 
                        fontWeight: 700, 
                        padding: '4px 10px', 
                        borderRadius: 4,
                        marginBottom: 16,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        Featured Business
                      </div>
                    )}
                    <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12, color: '#0f172a' }}>
                      {listing.business_name}
                    </h3>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 16 }}>
                      {listing.phone && (
                        <div>
                          <div style={{ fontSize: 13, color: '#64748b', marginBottom: 4 }}>Phone</div>
                          <a href={`tel:${listing.phone}`} style={{ fontSize: 16, fontWeight: 600, color: '#0066b3', textDecoration: 'none' }}>
                            {listing.phone}
                          </a>
                        </div>
                      )}
                      {listing.email && (
                        <div>
                          <div style={{ fontSize: 13, color: '#64748b', marginBottom: 4 }}>Email</div>
                          <a href={`mailto:${listing.email}`} style={{ fontSize: 16, fontWeight: 600, color: '#0066b3', textDecoration: 'none' }}>
                            {listing.email}
                          </a>
                        </div>
                      )}
                      {listing.address && (
                        <div>
                          <div style={{ fontSize: 13, color: '#64748b', marginBottom: 4 }}>Address</div>
                          <div style={{ fontSize: 16, fontWeight: 600, color: '#0f172a' }}>{listing.address}</div>
                        </div>
                      )}
                    </div>

                    <p style={{ fontSize: 15, lineHeight: 1.7, color: '#475569', marginBottom: 16 }}>
                      {listing.description}
                    </p>

                    {listing.hours && (
                      <div style={{ marginBottom: 16 }}>
                        <div style={{ fontSize: 13, color: '#64748b', marginBottom: 8, fontWeight: 600 }}>Opening Hours</div>
                        <div style={{ fontSize: 14, color: '#475569', whiteSpace: 'pre-line' }}>
                          {listing.hours}
                        </div>
                      </div>
                    )}

                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                      <Link
                        href={`/directory/${listing.id}`}
                        style={{
                          display: 'inline-block',
                          padding: '12px 24px',
                          background: '#0066b3',
                          color: 'white',
                          borderRadius: 8,
                          fontSize: 14,
                          fontWeight: 600,
                          textDecoration: 'none',
                        }}
                      >
                        View Full Details
                      </Link>
                      {listing.website && (
                        <a
                          href={listing.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-block',
                            padding: '12px 24px',
                            background: 'white',
                            color: '#0066b3',
                            border: '2px solid #0066b3',
                            borderRadius: 8,
                            fontSize: 14,
                            fontWeight: 600,
                            textDecoration: 'none',
                          }}
                        >
                          Visit Website →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ 
                background: 'white', 
                borderRadius: 12, 
                padding: 60, 
                textAlign: 'center',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
              }}>
                <p style={{ fontSize: 18, color: '#64748b', marginBottom: 16 }}>
                  No {categoryName.toLowerCase()} businesses currently listed in {location.name}
                </p>
                <p style={{ fontSize: 14, color: '#94a3b8', marginBottom: 20 }}>
                  Check back soon or explore nearby areas for similar services.
                </p>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link 
                    href={`/suburbs/${params.suburb}`}
                    style={{
                      display: 'inline-block',
                      padding: '12px 20px',
                      background: '#0066b3',
                      color: 'white',
                      borderRadius: 8,
                      fontSize: 14,
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    All {location.name} Businesses
                  </Link>
                  <Link 
                    href={`/categories/${params.category}`}
                    style={{
                      display: 'inline-block',
                      padding: '12px 20px',
                      background: 'white',
                      color: '#0066b3',
                      border: '2px solid #0066b3',
                      borderRadius: 8,
                      fontSize: 14,
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    All {categoryName}
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Related Links */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            <div style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>More in {location.name}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Link href={`/suburbs/${params.suburb}`} style={{ color: '#0066b3', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                  → All {location.name} Businesses
                </Link>
                <Link href={`/islands/${params.suburb}`} style={{ color: '#0066b3', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                  → About {location.name}
                </Link>
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>More {categoryName}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <Link href={`/categories/${params.category}`} style={{ color: '#0066b3', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                  → All {categoryName}
                </Link>
                {ALL_LOCATIONS.filter(loc => loc.slug !== params.suburb).slice(0, 3).map(loc => (
                  <Link 
                    key={loc.slug}
                    href={`/${loc.slug}/${params.category}`} 
                    style={{ color: '#0066b3', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}
                  >
                    → {categoryName} in {loc.name}
                  </Link>
                ))}
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: 12, padding: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>Add Your Business</h3>
              <p style={{ fontSize: 14, color: '#64748b', marginBottom: 12 }}>
                Own a {categoryName.toLowerCase()} business in {location.name}?
              </p>
              <Link 
                href="/upgrade"
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  background: '#0066b3',
                  color: 'white',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                List Your Business
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
