-- Populate database with dummy data for testing
-- Run this in Supabase SQL Editor

-- First, get user IDs from auth.users
DO $$
DECLARE
  super_admin_id uuid;
  admin_id uuid;
  moderator_id uuid;
  editor_id uuid;
  user_id uuid;
BEGIN
  -- Get user IDs
  SELECT id INTO super_admin_id FROM auth.users WHERE email = 'smbilocal@gmail.com' LIMIT 1;
  SELECT id INTO admin_id FROM auth.users WHERE email = 'administrator@thebayislands.au' LIMIT 1;
  SELECT id INTO moderator_id FROM auth.users WHERE email = 'moderator@thebayislands.au' LIMIT 1;
  SELECT id INTO editor_id FROM auth.users WHERE email = 'editor@thebayislands.au' LIMIT 1;
  SELECT id INTO user_id FROM auth.users WHERE email = 'user@thebayislands.au' LIMIT 1;

  -- Insert categories
  INSERT INTO categories (name, slug, type, description, active) VALUES
    ('Restaurants & Cafes', 'restaurants-cafes', 'directory', 'Restaurants and cafes', true),
    ('Hotels & Accommodation', 'hotels-accommodation', 'directory', 'Hotels and accommodation', true),
    ('Real Estate', 'real-estate', 'directory', 'Real estate services', true),
    ('Health & Wellness', 'health-wellness', 'directory', 'Health and wellness services', true),
    ('Automotive', 'automotive', 'directory', 'Automotive services', true),
    ('Education', 'education', 'directory', 'Educational institutions', true),
    ('Local News', 'local-news', 'article', 'Local news articles', true),
    ('Community Events', 'community', 'article', 'Community news', true),
    ('Environment', 'environment', 'article', 'Environmental news', true),
    ('Sports & Recreation', 'sports', 'article', 'Sports and recreation', true)
  ON CONFLICT (slug) DO NOTHING;

  -- Insert directory listings
  INSERT INTO directory_listings (
    user_id, business_name, description, category, suburb, 
    address, phone, email, website, hours, 
    status, featured, verified, premium_tier
  ) VALUES
    (
      super_admin_id,
      'Bay Islands Seafood Restaurant',
      'Fresh local seafood with stunning bay views. Family-owned since 1985.',
      'restaurants-cafes',
      'redland-bay',
      '123 Marine Parade, Redland Bay QLD 4165',
      '07 3829 1234',
      'info@bayislandsseafood.com.au',
      'https://bayislandsseafood.com.au',
      'Mon-Sun: 11am-9pm',
      'active',
      true,
      true,
      'premium'
    ),
    (
      super_admin_id,
      'North Stradbroke Island Resort',
      'Luxury beachfront accommodation on North Stradbroke Island.',
      'hotels-accommodation',
      'north-stradbroke-island',
      '45 East Coast Road, Point Lookout QLD 4183',
      '07 3415 2000',
      'bookings@nsiresort.com.au',
      'https://nsiresort.com.au',
      '24/7 Reception',
      'active',
      true,
      true,
      'premium'
    ),
    (
      super_admin_id,
      'Macleay Island Medical Centre',
      'Comprehensive medical services for Macleay Island residents and visitors.',
      'health-wellness',
      'macleay-island',
      '78 High Central Road, Macleay Island QLD 4184',
      '07 3409 8800',
      'reception@macleaymedical.com.au',
      NULL,
      'Mon-Fri: 8am-5pm, Sat: 9am-12pm',
      'active',
      false,
      true,
      NULL
    ),
    (
      super_admin_id,
      'Russell Island Community School',
      'Quality education for local island children from Prep to Year 6.',
      'education',
      'russell-island',
      '12 School Road, Russell Island QLD 4184',
      '07 3409 6200',
      'admin@russellislandschool.eq.edu.au',
      NULL,
      'School Terms: Mon-Fri 8:30am-3pm',
      'active',
      false,
      true,
      NULL
    );

  -- Insert articles
  INSERT INTO articles (
    user_id, title, slug, excerpt, content, category, 
    author, featured_image, status, featured, published_at
  ) VALUES
    (
      super_admin_id,
      'New Ferry Service Announced for Bay Islands',
      'new-ferry-service-bay-islands',
      'Increased ferry services to improve connectivity between the mainland and Southern Moreton Bay Islands.',
      '<p>The Queensland Government has announced a significant upgrade to ferry services connecting the Southern Moreton Bay Islands to the mainland. The new schedule will include additional services during peak times and improved weekend availability.</p><p>This development comes after years of advocacy from local residents and businesses who rely on the ferry for daily transportation.</p>',
      'local-news',
      'SMBI Local Staff',
      '/images/ferry.jpg',
      'published',
      true,
      NOW() - INTERVAL '2 days'
    ),
    (
      moderator_id,
      'Russell Island Markets Return This Weekend',
      'russell-island-markets-return',
      'Popular community markets back with local crafts, produce, and food stalls.',
      '<p>The beloved Russell Island Community Markets are returning this weekend after a brief hiatus. Locals and visitors can browse stalls featuring handmade crafts, fresh local produce, and delicious food.</p><p>The markets will be held at the Russell Island Community Hall from 8am to 2pm every Saturday.</p>',
      'community',
      'Community Reporter',
      NULL,
      'published',
      true,
      NOW() - INTERVAL '5 days'
    ),
    (
      editor_id,
      'Marine Conservation Efforts Show Positive Results',
      'marine-conservation-positive-results',
      'Local conservation groups report increased marine life in Moreton Bay waters.',
      '<p>Marine conservation efforts in Moreton Bay are paying off, with researchers documenting increased populations of sea turtles, dolphins, and dugongs in the area.</p><p>The success is attributed to community education programs and stricter enforcement of environmental protections.</p>',
      'environment',
      'Environment Editor',
      '/images/turtle.jpg',
      'published',
      true,
      NOW() - INTERVAL '7 days'
    );

  -- Insert events
  INSERT INTO events (
    user_id, title, slug, description, event_date, event_time,
    location, suburb, organizer, contact_email, contact_phone,
    status, featured, free_event, ticket_price, ticket_url
  ) VALUES
    (
      super_admin_id,
      'Macleay Island Beach Cleanup Day',
      'macleay-island-beach-cleanup',
      'Join the community for our monthly beach cleanup. BYO gloves and bags provided!',
      NOW() + INTERVAL '10 days',
      '09:00:00',
      'Dalpura Beach, Macleay Island',
      'macleay-island',
      'Macleay Island Environmental Group',
      'events@macleayenv.org.au',
      '0412 345 678',
      'active',
      true,
      true,
      NULL,
      NULL
    ),
    (
      moderator_id,
      'North Stradbroke Island Music Festival',
      'nsi-music-festival-2026',
      'Three days of live music featuring local and national artists on stunning Straddie.',
      NOW() + INTERVAL '30 days',
      '15:00:00',
      'Main Beach, Point Lookout',
      'north-stradbroke-island',
      'Straddie Arts Collective',
      'info@straddiearts.com.au',
      NULL,
      'active',
      true,
      false,
      150.00,
      'https://straddiearts.com.au/tickets'
    );

  -- Insert classifieds
  INSERT INTO classifieds (
    user_id, title, slug, description, price, category, location, suburb,
    contact_name, contact_phone, contact_email, status, featured
  ) VALUES
    (
      editor_id,
      'Boat for Sale - 5m Tinnie with 50HP Motor',
      'boat-sale-5m-tinnie',
      'Well-maintained aluminium tinnie perfect for bay fishing. Includes trailer.',
      8500.00,
      'vehicles-boats',
      'Redland Bay',
      'redland-bay',
      'John Smith',
      '0400 123 456',
      'john.smith@example.com',
      'active',
      false
    ),
    (
      user_id,
      'Island Property for Rent - 2BR Unit',
      'russell-island-2br-rental',
      'Comfortable 2 bedroom unit on Russell Island. Water views, close to ferry.',
      350.00,
      'property',
      'Russell Island',
      'russell-island',
      'Bay Islands Realty',
      '07 3409 7777',
      NULL,
      'active',
      true
    );

  RAISE NOTICE 'Dummy data inserted successfully!';
END $$;
