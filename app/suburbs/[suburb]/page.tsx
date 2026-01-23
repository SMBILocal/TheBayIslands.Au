import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ALL_LOCATIONS, LOCATION_LABELS } from '@/lib/locations';
import { generateBreadcrumbSchema, generateItemListSchema, mapLocationToCity } from '@/lib/seo-helpers';
import supabase from '@/lib/supabaseAdmin';

interface SuburbPageProps {
  params: { suburb: string };
}

async function getListingsBySuburb(suburb: string) {
  try {
    const { data, error } = await supabase
      .from('directory_listings')
      .select('*')
      .eq('location', suburb)
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
  return ALL_LOCATIONS.map((location) => ({
    suburb: location.slug,
  }));
}

export async function generateMetadata({ params }: SuburbPageProps): Promise<Metadata> {
  const location = ALL_LOCATIONS.find((loc) => loc.slug === params.suburb);
  if (!location) return { title: 'Suburb Not Found' };

  const suburbName = location.name;
  const description = `Discover local businesses and services in ${suburbName}. Browse our comprehensive directory of ${location.type === 'island' ? 'island' : 'mainland'} businesses including cafes, restaurants, shops, trades, health services, and more. ${location.description}`;

  return {
    title: `${suburbName} Business Directory | The Bay Islands`,
    description,
    openGraph: {
      title: `${suburbName} Business Directory`,
      description,
      url: `https://thebayislands.au/suburbs/${params.suburb}`,
      siteName: 'The Bay Islands',
      locale: 'en_AU',
      type: 'website',
    },
    alternates: {
      canonical: `https://thebayislands.au/suburbs/${params.suburb}`,
    },
  };
}

export default async function SuburbPage({ params }: SuburbPageProps) {
  const location = ALL_LOCATIONS.find((loc) => loc.slug === params.suburb);
  if (!location) notFound();

  const listings = await getListingsBySuburb(params.suburb);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Directory', url: '/directory' },
    { name: location.name, url: `/suburbs/${params.suburb}` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const itemListSchema = listings.length > 0 
    ? generateItemListSchema(listings, `${location.name} Businesses`, `/suburbs/${params.suburb}`)
    : null;

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
              <span>{location.name}</span>
            </nav>
            <h1 style={{ fontSize: 42, fontWeight: 700, margin: '0 0 16px 0' }}>
              {location.name} Businesses
            </h1>
            <p style={{ fontSize: 18, opacity: 0.95, margin: 0, maxWidth: 800 }}>
              {location.description}
            </p>
          </div>
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
          {/* Location Info */}
          <div style={{ background: 'white', borderRadius: 12, padding: 32, marginBottom: 32, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>About {location.name}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
              {location.population && (
                <div>
                  <div style={{ fontSize: 14, color: '#64748b', marginBottom: 4 }}>Population</div>
                  <div style={{ fontSize: 20, fontWeight: 600, color: '#0f172a' }}>{location.population.toLocaleString()}</div>
                </div>
              )}
              {location.distanceFromBrisbane && (
                <div>
                  <div style={{ fontSize: 14, color: '#64748b', marginBottom: 4 }}>Distance from Brisbane</div>
                  <div style={{ fontSize: 20, fontWeight: 600, color: '#0f172a' }}>{location.distanceFromBrisbane}</div>
                </div>
              )}
              <div>
                <div style={{ fontSize: 14, color: '#64748b', marginBottom: 4 }}>Type</div>
                <div style={{ fontSize: 20, fontWeight: 600, color: '#0f172a', textTransform: 'capitalize' }}>{location.type}</div>
              </div>
              {location.ferryAccess !== undefined && (
                <div>
                  <div style={{ fontSize: 14, color: '#64748b', marginBottom: 4 }}>Ferry Access</div>
                  <div style={{ fontSize: 20, fontWeight: 600, color: location.ferryAccess ? '#16a34a' : '#64748b' }}>
                    {location.ferryAccess ? 'Yes' : 'No'}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* SEO Content */}
          <div style={{ background: 'white', borderRadius: 12, padding: 32, marginBottom: 32, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>
              Find Local Services in {location.name}
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#475569', marginBottom: 16 }}>
              {location.name} is home to a vibrant community of local businesses serving residents and visitors across the Southern Moreton Bay Islands region. 
              Whether you're looking for essential services, dining options, professional trades, or recreational activities, our local business directory 
              connects you with trusted providers in {location.name}.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#475569', marginBottom: 16 }}>
              Our comprehensive directory features {listings.length} verified businesses operating in {location.name}, covering everything from 
              cafes and restaurants to health services, marine supplies, construction trades, and community facilities. Each listing provides 
              contact details, opening hours, and service information to help you find exactly what you need.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: '#475569' }}>
              Supporting local businesses strengthens our island community. Browse the listings below to discover quality services, 
              connect with experienced professionals, and keep your spending local. {location.ferryAccess ? 
              'Many businesses offer delivery or can arrange pickup near the ferry terminal for your convenience.' : 
              'Located on the mainland, many businesses provide services to island residents with delivery options available.'}
            </p>
          </div>

          {/* Business Listings */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 20 }}>
              {listings.length} {listings.length === 1 ? 'Business' : 'Businesses'} in {location.name}
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
                    <div style={{ fontSize: 14, color: '#0066b3', fontWeight: 600, marginBottom: 12 }}>
                      {listing.category}
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
                  No businesses listed yet in {location.name}
                </p>
                <p style={{ fontSize: 14, color: '#94a3b8' }}>
                  Are you a local business owner? <Link href="/upgrade" style={{ color: '#0066b3', fontWeight: 600 }}>Add your business</Link> to our directory.
                </p>
              </div>
            )}
          </div>

          {/* Related Links */}
          <div style={{ background: 'white', borderRadius: 12, padding: 32, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Explore More</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              <Link href="/directory" style={{ color: '#0066b3', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                → All Businesses
              </Link>
              <Link href="/islands" style={{ color: '#0066b3', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                → Island Guides
              </Link>
              <Link href="/events" style={{ color: '#0066b3', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                → Local Events
              </Link>
              <Link href="/jobs" style={{ color: '#0066b3', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                → Job Listings
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
