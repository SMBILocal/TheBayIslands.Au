import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BUSINESS_CATEGORIES } from '@/lib/business-categories';
import { generateBreadcrumbSchema, generateItemListSchema, categoryToSlug, slugToCategory } from '@/lib/seo-helpers';
import supabase from '@/lib/supabaseAdmin';

interface CategoryPageProps {
  params: { category: string };
}

async function getListingsByCategory(category: string) {
  try {
    const { data, error } = await supabase
      .from('directory_listings')
      .select('*')
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
  return BUSINESS_CATEGORIES.map((category) => ({
    category: categoryToSlug(category),
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryName = slugToCategory(params.category, BUSINESS_CATEGORIES);
  if (!categoryName) return { title: 'Category Not Found' };

  const description = `Find ${categoryName.toLowerCase()} businesses across the Southern Moreton Bay Islands. Browse verified local providers in ${categoryName.toLowerCase()} serving Russell Island, Macleay Island, Lamb Island, Karragarra Island, and surrounding Redlands Coast suburbs. Contact details, hours, and reviews.`;

  return {
    title: `${categoryName} | Bay Islands Business Directory`,
    description,
    openGraph: {
      title: `${categoryName} - Bay Islands Directory`,
      description,
      url: `https://thebayislands.au/categories/${params.category}`,
      siteName: 'The Bay Islands',
      locale: 'en_AU',
      type: 'website',
    },
    alternates: {
      canonical: `https://thebayislands.au/categories/${params.category}`,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = slugToCategory(params.category, BUSINESS_CATEGORIES);
  if (!categoryName) notFound();

  const listings = await getListingsByCategory(categoryName);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Directory', url: '/directory' },
    { name: categoryName, url: `/categories/${params.category}` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const itemListSchema = listings.length > 0 
    ? generateItemListSchema(listings, `${categoryName} Businesses`, `/categories/${params.category}`)
    : null;

  // Group listings by location
  const listingsByLocation: Record<string, typeof listings> = {};
  listings.forEach((listing) => {
    if (!listingsByLocation[listing.location]) {
      listingsByLocation[listing.location] = [];
    }
    listingsByLocation[listing.location].push(listing);
  });

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

      <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
        <div style={{ background: 'linear-gradient(135deg, #0066b3 0%, #004a8a 100%)', color: 'white', padding: '60px 20px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <nav style={{ fontSize: 14, marginBottom: 16, opacity: 0.9 }}>
              <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              {' / '}
              <Link href="/directory" style={{ color: 'white', textDecoration: 'none' }}>Directory</Link>
              {' / '}
              <span>{categoryName}</span>
            </nav>
            <h1 style={{ fontSize: 42, fontWeight: 700, margin: '0 0 16px 0' }}>
              {categoryName}
            </h1>
            <p style={{ fontSize: 18, opacity: 0.95, margin: 0 }}>
              Find trusted {categoryName.toLowerCase()} providers across the Bay Islands and Redlands Coast
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
          {/* SEO Content */}
          <div style={{ background: 'white', borderRadius: 12, padding: 32, marginBottom: 32, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
              {categoryName} Services in the Bay Islands
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#475569', marginBottom: 16 }}>
              Looking for reliable {categoryName.toLowerCase()} services in the Southern Moreton Bay Islands region? 
              Our comprehensive business directory connects you with verified local providers offering professional {categoryName.toLowerCase()} services 
              across Russell Island, Macleay Island, Lamb Island, Karragarra Island, and the surrounding Redlands Coast suburbs including 
              Redland Bay, Victoria Point, Cleveland, and Capalaba.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#475569', marginBottom: 16 }}>
              We've listed {listings.length} trusted {categoryName.toLowerCase()} {listings.length === 1 ? 'business' : 'businesses'} in our directory, 
              each providing quality services to the local community. Every listing includes contact information, service areas, opening hours, 
              and detailed business descriptions to help you make informed decisions about which provider best meets your needs.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#475569' }}>
              Supporting local {categoryName.toLowerCase()} businesses helps strengthen our island economy and ensures you receive personalized service 
              from providers who understand the unique needs of island and coastal living. Browse our directory below to find the perfect 
              {categoryName.toLowerCase()} service for your requirements, whether you're a permanent resident or just visiting the Bay Islands.
            </p>
          </div>

          {/* Business Listings */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>
              {listings.length} {listings.length === 1 ? 'Business' : 'Businesses'} Found
            </h2>

            {listings.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
                {listings.map((listing) => (
                  <Link
                    key={listing.id}
                    href={`/directory/${listing.id}`}
                    style={{
                      display: 'block',
                      background: 'white',
                      borderRadius: 12,
                      padding: 24,
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                      textDecoration: 'none',
                      color: 'inherit',
                      border: listing.featured ? '2px solid #0066b3' : '1px solid #e2e8f0',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                  >
                    {listing.featured && (
                      <div style={{ 
                        display: 'inline-block',
                        background: '#0066b3', 
                        color: 'white', 
                        fontSize: 11, 
                        fontWeight: 700, 
                        padding: '4px 8px', 
                        borderRadius: 4,
                        marginBottom: 12,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        Featured
                      </div>
                    )}
                    <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>
                      {listing.business_name}
                    </h3>
                    <div style={{ fontSize: 13, color: '#64748b', fontWeight: 600, marginBottom: 12 }}>
                      📍 {listing.location.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </div>
                    <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.6, marginBottom: 12 }}>
                      {listing.description.length > 150 
                        ? listing.description.substring(0, 150) + '...' 
                        : listing.description}
                    </p>
                    {listing.phone && (
                      <div style={{ fontSize: 14, color: '#475569', marginTop: 12 }}>
                        📞 {listing.phone}
                      </div>
                    )}
                  </Link>
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
                  No {categoryName.toLowerCase()} businesses listed yet
                </p>
                <p style={{ fontSize: 14, color: '#94a3b8' }}>
                  Are you a {categoryName.toLowerCase()} provider? <Link href="/upgrade" style={{ color: '#0066b3', fontWeight: 600 }}>Add your business</Link> to our directory.
                </p>
              </div>
            )}
          </div>

          {/* Coverage by Location */}
          {Object.keys(listingsByLocation).length > 0 && (
            <div style={{ background: 'white', borderRadius: 12, padding: 32, marginBottom: 32, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>
                {categoryName} by Location
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                {Object.entries(listingsByLocation).map(([location, items]) => (
                  <Link
                    key={location}
                    href={`/${location}/${params.category}`}
                    style={{
                      display: 'block',
                      padding: 16,
                      background: '#f8fafc',
                      borderRadius: 8,
                      textDecoration: 'none',
                      color: '#0f172a',
                      border: '1px solid #e2e8f0',
                    }}
                  >
                    <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>
                      {location.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </div>
                    <div style={{ fontSize: 14, color: '#0066b3', fontWeight: 600 }}>
                      {items.length} {items.length === 1 ? 'business' : 'businesses'} →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Related Categories */}
          <div style={{ background: 'white', borderRadius: 12, padding: 32, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Browse Other Categories</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {BUSINESS_CATEGORIES.slice(0, 20).map((cat) => (
                <Link
                  key={cat}
                  href={`/categories/${categoryToSlug(cat)}`}
                  style={{
                    display: 'inline-block',
                    padding: '8px 12px',
                    background: cat === categoryName ? '#0066b3' : '#f8fafc',
                    color: cat === categoryName ? 'white' : '#475569',
                    borderRadius: 6,
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: 'none',
                    border: '1px solid #e2e8f0',
                  }}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
