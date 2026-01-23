const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

async function run() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !serviceKey) {
    console.error('ERROR: Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local before seeding')
    process.exit(1)
  }

  const supabase = createClient(url, serviceKey)
  const userId = '11111111-1111-1111-1111-111111111111'

  const { error: userError } = await supabase.from('users').upsert([{
    id: userId,
    email: 'seed@example.com',
    username: 'seed-user',
    avatar_url: null,
    bio: 'Seed user for initial content',
    user_role: 'admin',
    is_premium: false,
    subscription_tier: 'free',
    subscription_status: 'active',
    notification_preferences: { email_notifications: true, moderation_alerts: true }
  }])
  if (userError) throw userError

  const now = new Date()
  const plus30 = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString()
  const plus60 = new Date(now.getTime() + 60 * 24 * 60 * 60 * 1000).toISOString()

  const { error: directoryError } = await supabase.from('directory_listings').upsert([
    {
      user_id: userId,
      business_name: 'Island Cafe & Bakery',
      description: 'Award-winning cafe and bakery with local ingredients and waterfront views.',
      category: 'Cafe & Food',
      subcategory: 'Cafe',
      location: 'russell',
      phone: '+61 7 0000 0000',
      email: 'hello@islandcafe.example',
      website: 'https://islandcafe.example',
      address: '1 Bay Terrace, Russell Island',
      image_urls: ['https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800'],
      hours: 'Mon-Sun 7am-4pm',
      featured: true,
      featured_until: plus30,
      status: 'active',
      approval_status: 'approved'
    },
    {
      user_id: userId,
      business_name: 'Bay Marina Services',
      description: 'Full-service marina with repairs, maintenance, fuel, and equipment rental.',
      category: 'Marine & Water Sports',
      subcategory: 'Marine Services',
      location: 'redland-bay',
      phone: '+61 7 0000 0001',
      email: 'service@baymarina.example',
      website: 'https://baymarina.example',
      address: '22 Marina Parade, Redland Bay',
      featured: false,
      status: 'active',
      approval_status: 'approved'
    }
  ])
  if (directoryError) throw directoryError

  const { error: jobsError } = await supabase.from('jobs').upsert([
    {
      user_id: userId,
      title: 'Head Chef',
      description: 'Experienced chef needed for busy waterfront cafe. 5+ years experience.',
      company_name: 'Island Cafe & Bakery',
      category: 'Hospitality',
      employment_type: 'full-time',
      location: 'russell',
      salary_min: 75000,
      salary_max: 90000,
      experience_level: 'mid',
      featured: true,
      featured_until: plus30,
      status: 'active',
      expires_at: plus30,
      approval_status: 'approved'
    },
    {
      user_id: userId,
      title: 'Marine Mechanic',
      description: 'Marine engine mechanic for charter boats and maintenance.',
      company_name: 'Bay Marina Services',
      category: 'Trades',
      employment_type: 'full-time',
      location: 'redland-bay',
      salary_min: 65000,
      salary_max: 82000,
      experience_level: 'mid',
      featured: false,
      status: 'active',
      expires_at: plus30,
      approval_status: 'approved'
    }
  ])
  if (jobsError) throw jobsError

  const { error: eventsError } = await supabase.from('events').upsert([
    {
      user_id: userId,
      title: 'Russell Island Farmers Market',
      description: 'Weekly market with fresh produce, local honey, and crafts.',
      category: 'Community',
      location: 'russell',
      start_date: now.toISOString(),
      end_date: now.toISOString(),
      start_time: '08:00',
      end_time: '14:00',
      address: 'Russell Island Community Centre',
      ticket_url: null,
      ticket_price: 0,
      featured: true,
      featured_until: plus60,
      status: 'upcoming',
      approval_status: 'approved'
    },
    {
      user_id: userId,
      title: 'Macleay Island Fishing Competition',
      description: 'Annual fishing competition with $10k prize pool.',
      category: 'Sports',
      location: 'macleay',
      start_date: plus30,
      end_date: plus30,
      start_time: '06:00',
      end_time: '15:00',
      address: 'Macleay Island Marina',
      ticket_url: null,
      ticket_price: 25,
      featured: false,
      status: 'upcoming',
      approval_status: 'approved'
    }
  ])
  if (eventsError) throw eventsError

  const { error: classifiedsError } = await supabase.from('classifieds').upsert([
    {
      user_id: userId,
      title: 'Kayak for Sale - Sit-on-Top',
      description: 'Quality kayak, includes paddle and life jacket.',
      category: 'Sports & Outdoors',
      subcategory: 'Water Sports',
      condition: 'like-new',
      location: 'russell',
      price: 280,
      negotiable: true,
      image_urls: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800'],
      contact_method: 'email',
      contact_info: 'seller@example.com',
      featured: true,
      featured_until: plus30,
      status: 'active',
      expires_at: plus60,
      approval_status: 'approved'
    },
    {
      user_id: userId,
      title: 'Electric Lawn Mower',
      description: '24V battery-powered mower, low hours, great condition.',
      category: 'Home & Garden',
      subcategory: 'Garden',
      condition: 'good',
      location: 'cleveland',
      price: 150,
      negotiable: false,
      contact_method: 'email',
      contact_info: 'seller2@example.com',
      featured: false,
      status: 'active',
      expires_at: plus60,
      approval_status: 'approved'
    }
  ])
  if (classifiedsError) throw classifiedsError

  console.log('Seed v0.0.2 content inserted successfully')
}

run().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
