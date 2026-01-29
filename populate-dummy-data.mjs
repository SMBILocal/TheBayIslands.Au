import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jazreuartewyrmbfhtdz.supabase.co';
const supabaseServiceKey = 'sb_secret_b2qQ4DIFS_jEqvJpfJBfzw_Jx6Nk0rw';

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { autoRefreshToken: false, persistSession: false }
});

console.log('╔════════════════════════════════════════╗');
console.log('║   ADDING DUMMY DATA TO DATABASE        ║');
console.log('╚════════════════════════════════════════╝\n');

// Get all auth users (not user_profiles, since email is in auth.users)
const { data: { users: authUsers }, error: authError } = await supabase.auth.admin.listUsers();

if (authError) {
  console.log('Error fetching auth users:', authError.message);
  process.exit(1);
}

console.log(`📧 Found ${authUsers?.length || 0} users`);
if (authUsers && authUsers.length > 0) {
  authUsers.forEach(u => {
    const role = u.app_metadata?.role || 'user';
    console.log(`   - ${u.email} (${role})`);
  });
}
console.log();

// Map to our user format
const users = authUsers?.map(u => ({
  id: u.id,
  email: u.email,
  full_name: u.user_metadata?.full_name || u.email?.split('@')[0],
  role: u.app_metadata?.role || 'user'
}));

// Categories for different content types
const categories = [
  { name: 'Restaurants & Cafes', type: 'directory', slug: 'restaurants-cafes' },
  { name: 'Hotels & Accommodation', type: 'directory', slug: 'hotels-accommodation' },
  { name: 'Real Estate', type: 'directory', slug: 'real-estate' },
  { name: 'Health & Wellness', type: 'directory', slug: 'health-wellness' },
  { name: 'Automotive', type: 'directory', slug: 'automotive' },
  { name: 'Education', type: 'directory', slug: 'education' },
  { name: 'Local News', type: 'article', slug: 'local-news' },
  { name: 'Community Events', type: 'article', slug: 'community' },
  { name: 'Environment', type: 'article', slug: 'environment' },
  { name: 'Sports & Recreation', type: 'article', slug: 'sports' },
];

console.log('📁 Creating categories...\n');
for (const cat of categories) {
  const { error } = await supabase
    .from('categories')
    .upsert({
      name: cat.name,
      slug: cat.slug,
      type: cat.type,
      description: `${cat.name} category`,
      active: true
    }, { onConflict: 'slug' });
  
  if (!error) console.log(`✅ ${cat.name}`);
}

// Create directory listings for super admin
const superAdmin = users?.find(u => u.role === 'super_admin');
if (superAdmin) {
  console.log(`\n🏢 Creating directory listings for ${superAdmin.email}...\n`);
  
  const listings = [
    {
      user_id: superAdmin.id,
      business_name: 'Bay Islands Seafood Restaurant',
      description: 'Fresh local seafood with stunning bay views. Family-owned since 1985.',
      category: 'restaurants-cafes',
      suburb: 'redland-bay',
      address: '123 Marine Parade, Redland Bay QLD 4165',
      phone: '07 3829 1234',
      email: 'info@bayislandsseafood.com.au',
      website: 'https://bayislandsseafood.com.au',
      hours: 'Mon-Sun: 11am-9pm',
      status: 'active',
      featured: true,
      verified: true,
      premium_tier: 'premium'
    },
    {
      user_id: superAdmin.id,
      business_name: 'North Stradbroke Island Resort',
      description: 'Luxury beachfront accommodation on North Stradbroke Island.',
      category: 'hotels-accommodation',
      suburb: 'north-stradbroke-island',
      address: '45 East Coast Road, Point Lookout QLD 4183',
      phone: '07 3415 2000',
      email: 'bookings@nsiresort.com.au',
      website: 'https://nsiresort.com.au',
      hours: '24/7 Reception',
      status: 'active',
      featured: true,
      verified: true,
      premium_tier: 'premium'
    },
    {
      user_id: superAdmin.id,
      business_name: 'Macleay Island Medical Centre',
      description: 'Comprehensive medical services for Macleay Island residents and visitors.',
      category: 'health-wellness',
      suburb: 'macleay-island',
      address: '78 High Central Road, Macleay Island QLD 4184',
      phone: '07 3409 8800',
      email: 'reception@macleaymedical.com.au',
      hours: 'Mon-Fri: 8am-5pm, Sat: 9am-12pm',
      status: 'active',
      verified: true
    },
    {
      user_id: superAdmin.id,
      business_name: 'Russell Island Community School',
      description: 'Quality education for local island children from Prep to Year 6.',
      category: 'education',
      suburb: 'russell-island',
      address: '12 School Road, Russell Island QLD 4184',
      phone: '07 3409 6200',
      email: 'admin@russellislandschool.eq.edu.au',
      hours: 'School Terms: Mon-Fri 8:30am-3pm',
      status: 'active',
      verified: true
    }
  ];
  
  for (const listing of listings) {
    const { error } = await supabase
      .from('directory_listings')
      .insert(listing);
    
    if (!error) {
      console.log(`✅ ${listing.business_name}`);
    } else {
      console.log(`❌ ${listing.business_name}: ${error.message}`);
    }
  }
}

// Create articles
console.log('\n📰 Creating articles...\n');
const articleAuthors = users?.slice(0, 4) || [];
const articles = [
  {
    user_id: articleAuthors[0]?.id,
    title: 'New Ferry Service Announced for Bay Islands',
    slug: 'new-ferry-service-bay-islands',
    excerpt: 'Increased ferry services to improve connectivity between the mainland and Southern Moreton Bay Islands.',
    content: '<p>The Queensland Government has announced a significant upgrade to ferry services connecting the Southern Moreton Bay Islands to the mainland. The new schedule will include additional services during peak times and improved weekend availability.</p><p>This development comes after years of advocacy from local residents and businesses who rely on the ferry for daily transportation.</p>',
    category: 'local-news',
    author: articleAuthors[0]?.full_name || 'SMBI Local Staff',
    featured_image: '/images/ferry.jpg',
    status: 'published',
    featured: true,
    published_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    user_id: articleAuthors[1]?.id,
    title: 'Russell Island Markets Return This Weekend',
    slug: 'russell-island-markets-return',
    excerpt: 'Popular community markets back with local crafts, produce, and food stalls.',
    content: '<p>The beloved Russell Island Community Markets are returning this weekend after a brief hiatus. Locals and visitors can browse stalls featuring handmade crafts, fresh local produce, and delicious food.</p><p>The markets will be held at the Russell Island Community Hall from 8am to 2pm every Saturday.</p>',
    category: 'community',
    author: articleAuthors[1]?.full_name || 'Community Reporter',
    status: 'published',
    featured: true,
    published_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    user_id: articleAuthors[2]?.id,
    title: 'Marine Conservation Efforts Show Positive Results',
    slug: 'marine-conservation-positive-results',
    excerpt: 'Local conservation groups report increased marine life in Moreton Bay waters.',
    content: '<p>Marine conservation efforts in Moreton Bay are paying off, with researchers documenting increased populations of sea turtles, dolphins, and dugongs in the area.</p><p>The success is attributed to community education programs and stricter enforcement of environmental protections.</p>',
    category: 'environment',
    author: articleAuthors[2]?.full_name || 'Environment Editor',
    featured_image: '/images/turtle.jpg',
    status: 'published',
    featured: true,
    published_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
  }
];

for (const article of articles) {
  if (article.user_id) {
    const { error } = await supabase
      .from('articles')
      .insert(article);
    
    if (!error) {
      console.log(`✅ ${article.title}`);
    } else {
      console.log(`❌ ${article.title}: ${error.message}`);
    }
  }
}

// Create events
console.log('\n📅 Creating events...\n');
const events = [
  {
    user_id: articleAuthors[0]?.id,
    title: 'Macleay Island Beach Cleanup Day',
    slug: 'macleay-island-beach-cleanup',
    description: 'Join the community for our monthly beach cleanup. BYO gloves and bags provided!',
    event_date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
    event_time: '09:00:00',
    location: 'Dalpura Beach, Macleay Island',
    suburb: 'macleay-island',
    organizer: 'Macleay Island Environmental Group',
    contact_email: 'events@macleayenv.org.au',
    contact_phone: '0412 345 678',
    status: 'active',
    featured: true,
    free_event: true
  },
  {
    user_id: articleAuthors[1]?.id,
    title: 'North Stradbroke Island Music Festival',
    slug: 'nsi-music-festival-2026',
    description: 'Three days of live music featuring local and national artists on stunning Straddie.',
    event_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    event_time: '15:00:00',
    location: 'Main Beach, Point Lookout',
    suburb: 'north-stradbroke-island',
    organizer: 'Straddie Arts Collective',
    contact_email: 'info@straddiearts.com.au',
    ticket_price: 150.00,
    ticket_url: 'https://straddiearts.com.au/tickets',
    status: 'active',
    featured: true,
    free_event: false
  }
];

for (const event of events) {
  if (event.user_id) {
    const { error } = await supabase
      .from('events')
      .insert(event);
    
    if (!error) {
      console.log(`✅ ${event.title}`);
    } else {
      console.log(`❌ ${event.title}: ${error.message}`);
    }
  }
}

// Create classifieds
console.log('\n🏷️  Creating classifieds...\n');
const classifieds = [
  {
    user_id: articleAuthors[2]?.id,
    title: 'Boat for Sale - 5m Tinnie with 50HP Motor',
    slug: 'boat-sale-5m-tinnie',
    description: 'Well-maintained aluminium tinnie perfect for bay fishing. Includes trailer.',
    price: 8500.00,
    category: 'vehicles-boats',
    location: 'Redland Bay',
    suburb: 'redland-bay',
    contact_name: 'John Smith',
    contact_phone: '0400 123 456',
    contact_email: 'john.smith@example.com',
    status: 'active',
    featured: false
  },
  {
    user_id: articleAuthors[3]?.id,
    title: 'Island Property for Rent - 2BR Unit',
    slug: 'russell-island-2br-rental',
    description: 'Comfortable 2 bedroom unit on Russell Island. Water views, close to ferry.',
    price: 350.00,
    category: 'property',
    location: 'Russell Island',
    suburb: 'russell-island',
    contact_name: 'Bay Islands Realty',
    contact_phone: '07 3409 7777',
    status: 'active',
    featured: true
  }
];

for (const classified of classifieds) {
  if (classified.user_id) {
    const { error } = await supabase
      .from('classifieds')
      .insert(classified);
    
    if (!error) {
      console.log(`✅ ${classified.title}`);
    } else {
      console.log(`❌ ${classified.title}: ${error.message}`);
    }
  }
}

// Create comments across all content
console.log('\n💬 Creating comments from all users...\n');

const { data: allArticles } = await supabase.from('articles').select('id, title');
const { data: allListings } = await supabase.from('directory_listings').select('id, business_name');
const { data: allEvents } = await supabase.from('events').select('id, title');

const commentTexts = [
  'Great article! Very informative.',
  'Thanks for sharing this news.',
  'Looking forward to this!',
  'This is exactly what we needed.',
  'Excellent initiative for the community.',
  'Can\'t wait to check this out!',
  'Well written and helpful information.',
  'Thanks for keeping us updated.',
];

let commentCount = 0;

// Comments on articles
if (allArticles && users) {
  for (const article of allArticles) {
    const numComments = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < numComments; i++) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const randomText = commentTexts[Math.floor(Math.random() * commentTexts.length)];
      
      const { error } = await supabase.from('comments').insert({
        user_id: randomUser.id,
        content_type: 'article',
        content_id: article.id,
        comment: randomText,
        status: 'approved',
        created_at: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString()
      });
      
      if (!error) commentCount++;
    }
  }
}

// Comments on directory listings
if (allListings && users) {
  for (const listing of allListings) {
    const numComments = Math.floor(Math.random() * 4) + 1;
    for (let i = 0; i < numComments; i++) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const listingComments = [
        'Great service! Highly recommend.',
        'Professional and friendly staff.',
        'Best in the area!',
        'Always reliable and helpful.',
        'Quality service every time.',
      ];
      const randomText = listingComments[Math.floor(Math.random() * listingComments.length)];
      
      const { error } = await supabase.from('comments').insert({
        user_id: randomUser.id,
        content_type: 'directory_listing',
        content_id: listing.id,
        comment: randomText,
        status: 'approved',
        created_at: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString()
      });
      
      if (!error) commentCount++;
    }
  }
}

// Comments on events
if (allEvents && users) {
  for (const event of allEvents) {
    const numComments = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < numComments; i++) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const eventComments = [
        'Count me in!',
        'This sounds amazing!',
        'Will definitely be there.',
        'Great event for the community!',
      ];
      const randomText = eventComments[Math.floor(Math.random() * eventComments.length)];
      
      const { error } = await supabase.from('comments').insert({
        user_id: randomUser.id,
        content_type: 'event',
        content_id: event.id,
        comment: randomText,
        status: 'approved',
        created_at: new Date(Date.now() - Math.random() * 5 * 24 * 60 * 60 * 1000).toISOString()
      });
      
      if (!error) commentCount++;
    }
  }
}

console.log(`✅ Created ${commentCount} comments\n`);

console.log('\n═══════════════════════════════════════');
console.log('📊 FINAL SUMMARY');
console.log('═══════════════════════════════════════\n');

const { count: listingCount } = await supabase.from('directory_listings').select('*', { count: 'exact', head: true });
const { count: articleCount } = await supabase.from('articles').select('*', { count: 'exact', head: true });
const { count: eventCount } = await supabase.from('events').select('*', { count: 'exact', head: true });
const { count: classifiedCount } = await supabase.from('classifieds').select('*', { count: 'exact', head: true });
const { count: finalCommentCount } = await supabase.from('comments').select('*', { count: 'exact', head: true });
const { count: categoryCount } = await supabase.from('categories').select('*', { count: 'exact', head: true });

console.log(`✅ Categories: ${categoryCount}`);
console.log(`✅ Directory Listings: ${listingCount}`);
console.log(`✅ Articles: ${articleCount}`);
console.log(`✅ Events: ${eventCount}`);
console.log(`✅ Classifieds: ${classifiedCount}`);
console.log(`✅ Comments: ${finalCommentCount}`);
console.log('\n✨ Database populated with dummy data!\n');
