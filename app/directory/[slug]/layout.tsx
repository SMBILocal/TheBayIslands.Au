import { Metadata } from 'next';
import supabase from '@/lib/supabaseAdmin';
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/seo-helpers';

interface DirectoryLayoutProps {
  children: React.ReactNode;
  params: { slug: string };
}

async function getListing(slug: string) {
  try {
    const { data, error } = await supabase
      .from('directory_listings')
      .select('*')
      .or(`id.eq.${slug},slug.eq.${slug}`)
      .eq('status', 'active')
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching listing:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const listing = await getListing(params.slug);

  if (!listing) {
    return {
      title: 'Business Not Found | The Bay Islands',
      description: 'The business you are looking for could not be found.',
    };
  }

  const title = `${listing.business_name} - ${listing.category} | The Bay Islands`;
  const description = listing.description.length > 160 
    ? listing.description.substring(0, 157) + '...' 
    : listing.description;

  return {
    title,
    description,
    openGraph: {
      title: listing.business_name,
      description,
      url: `https://thebayislands.au/directory/${params.slug}`,
      siteName: 'The Bay Islands',
      locale: 'en_AU',
      type: 'website',
    },
    alternates: {
      canonical: `https://thebayislands.au/directory/${params.slug}`,
    },
  };
}

export default async function DirectoryLayout({ children, params }: DirectoryLayoutProps) {
  const listing = await getListing(params.slug);

  if (!listing) {
    return <>{children}</>;
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Directory', url: '/directory' },
    { name: listing.category, url: `/categories/${listing.category.toLowerCase().replace(/\s+/g, '-')}` },
    { name: listing.business_name, url: `/directory/${params.slug}` },
  ];

  const businessSchema = generateLocalBusinessSchema(listing);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
