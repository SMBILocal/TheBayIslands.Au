-- ========================================
-- FEATURED CONTENT SEED DATA
-- ========================================
-- Dummy data for homepage featured content
-- Includes: Premium businesses, classifieds, articles, events
-- Run this after main schema migrations
-- ========================================

-- ========================================
-- 1. FEATURED PREMIUM BUSINESSES
-- ========================================

-- Russell Island Bowls Club
INSERT INTO directory_listings (
  business_name,
  slug,
  description,
  category,
  location,
  address,
  phone,
  email,
  website,
  status,
  featured,
  premium_tier,
  operating_hours
) VALUES (
  'Russell Island Bowls Club',
  'russell-island-bowls-club',
  'Friendly community bowls club on Russell Island. Social bowls, competitions, barefoot bowls, and function hire. Licensed bar and bistro. New members welcome! Open 7 days with regular social events.',
  'Recreation & Sports',
  'russell-island',
  '23 High Street, Russell Island QLD 4184',
  '07 3409 7979',
  'info@ribowls.com.au',
  'https://russelislandbowls.com.au',
  'active',
  true,
  'premium',
  '{"monday": "10:00 AM - 10:00 PM", "tuesday": "10:00 AM - 10:00 PM", "wednesday": "10:00 AM - 10:00 PM", "thursday": "10:00 AM - 10:00 PM", "friday": "10:00 AM - Late", "saturday": "10:00 AM - Late", "sunday": "10:00 AM - 8:00 PM"}'
);

-- Shane's Concreting Services
INSERT INTO directory_listings (
  business_name,
  slug,
  description,
  category,
  location,
  address,
  phone,
  email,
  website,
  status,
  featured,
  premium_tier,
  operating_hours
) VALUES (
  'Shane''s Concreting Services',
  'shanes-concreting-services',
  'Professional concreting services across the Bay Islands and mainland. Driveways, patios, paths, slabs, and decorative concrete. 20+ years experience. Free quotes. Quality workmanship guaranteed. Servicing Russell, Macleay, Lamb Islands and Redland Bay area.',
  'Construction & Trades',
  'russell-island',
  'Russell Island QLD 4184',
  '0412 345 678',
  'shane@shanesconcreting.com.au',
  'https://shanesconcreting.com.au',
  'active',
  true,
  'premium',
  '{"monday": "7:00 AM - 5:00 PM", "tuesday": "7:00 AM - 5:00 PM", "wednesday": "7:00 AM - 5:00 PM", "thursday": "7:00 AM - 5:00 PM", "friday": "7:00 AM - 5:00 PM", "saturday": "By Appointment", "sunday": "Closed"}'
);

-- SeaLink Ferry Service
INSERT INTO directory_listings (
  business_name,
  slug,
  description,
  category,
  location,
  address,
  phone,
  email,
  website,
  status,
  featured,
  premium_tier,
  operating_hours
) VALUES (
  'SeaLink Bay Islands Ferry',
  'sealink-bay-islands-ferry',
  'Reliable ferry service connecting Bay Islands to Redland Bay mainland. Daily scheduled services for passengers and vehicles. Book online or pay on board. Go Cards accepted. Wheelchair accessible vessels. Scenic 40-minute journey across Moreton Bay.',
  'Transport & Logistics',
  'redland-bay',
  'Weinam Creek Marina, Redland Bay QLD 4165',
  '1300 SEALINK',
  'bayislands@sealink.com.au',
  'https://www.sealink.com.au/bay-islands',
  'active',
  true,
  'premium',
  '{"monday": "5:30 AM - 9:00 PM", "tuesday": "5:30 AM - 9:00 PM", "wednesday": "5:30 AM - 9:00 PM", "thursday": "5:30 AM - 9:00 PM", "friday": "5:30 AM - 11:00 PM", "saturday": "6:00 AM - 11:00 PM", "sunday": "6:00 AM - 9:00 PM"}'
);

-- The Prior Experience Consulting
INSERT INTO directory_listings (
  business_name,
  slug,
  description,
  category,
  location,
  address,
  phone,
  email,
  website,
  status,
  featured,
  premium_tier,
  operating_hours
) VALUES (
  'The Prior Experience',
  'the-prior-experience',
  'Strategic business consulting and leadership development. Helping Bay Islands businesses scale and succeed. Services include business planning, marketing strategy, operational efficiency, and team development. Remote work friendly - serving local and international clients.',
  'Professional Services',
  'macleay-island',
  'Macleay Island QLD 4184',
  '0423 456 789',
  'hello@thepriorexperience.com.au',
  'https://thepriorexperience.com.au',
  'active',
  true,
  'premium',
  '{"monday": "9:00 AM - 5:00 PM", "tuesday": "9:00 AM - 5:00 PM", "wednesday": "9:00 AM - 5:00 PM", "thursday": "9:00 AM - 5:00 PM", "friday": "9:00 AM - 3:00 PM", "saturday": "Closed", "sunday": "Closed"}'
);

-- Additional Featured Businesses for Sub-Carousel

INSERT INTO directory_listings (
  business_name, slug, description, category, location, phone, status, featured
) VALUES 
(
  'Island Paradise Cafe',
  'island-paradise-cafe',
  'Fresh coffee, homemade pastries, all-day breakfast. Waterfront dining on Macleay Island.',
  'Food & Dining',
  'macleay-island',
  '07 3409 1234',
  'active',
  true
),
(
  'Bay Islands Real Estate',
  'bay-islands-real-estate',
  'Your trusted local real estate agents. Sales, rentals, property management across all islands.',
  'Real Estate',
  'russell-island',
  '07 3409 5678',
  'active',
  true
),
(
  'Coastal Plumbing & Gas',
  'coastal-plumbing-gas',
  'Licensed plumber and gas fitter. 24/7 emergency service. All islands covered.',
  'Construction & Trades',
  'russell-island',
  '0411 222 333',
  'active',
  true
),
(
  'Island Gardening Services',
  'island-gardening-services',
  'Professional lawn mowing, gardening, landscaping. Weekly or fortnightly service.',
  'Home & Garden',
  'macleay-island',
  '0422 333 444',
  'active',
  true
),
(
  'Bay Medical Centre',
  'bay-medical-centre',
  'Bulk billing GP clinic. No appointment necessary. Open 6 days.',
  'Health & Medical',
  'russell-island',
  '07 3409 9999',
  'active',
  true
),
(
  'Island Auto Repairs',
  'island-auto-repairs',
  'Car servicing, repairs, roadworthy inspections. Mobile service available.',
  'Automotive',
  'russell-island',
  '07 3409 7777',
  'active',
  true
);

-- ========================================
-- 2. FEATURED CLASSIFIEDS
-- ========================================

INSERT INTO classifieds (
  title,
  slug,
  description,
  price,
  category,
  location,
  contact_name,
  contact_phone,
  contact_email,
  status,
  featured,
  images
) VALUES
(
  'Waterfront Home - Russell Island',
  'waterfront-home-russell-island',
  'Stunning 3 bedroom, 2 bathroom home with water views. Open plan living, modern kitchen, large deck, double garage. Walk to ferry. $750,000.',
  750000,
  'Property for Sale',
  'russell-island',
  'John Smith',
  '0412 345 678',
  'john@bayrealestate.com.au',
  'active',
  true,
  '["https://images.unsplash.com/photo-1568605114967-8130f3a36994"]'
),
(
  '2016 Toyota Hilux 4x4',
  '2016-toyota-hilux-4x4',
  'Excellent condition, 85,000km, one owner, full service history. Perfect island vehicle. $32,500 ONO.',
  32500,
  'Vehicles',
  'macleay-island',
  'Dave Wilson',
  '0423 456 789',
  'dave@example.com',
  'active',
  true,
  '["https://images.unsplash.com/photo-1533473359331-0135ef1b58bf"]'
),
(
  'Pontoon Boat with Trailer',
  'pontoon-boat-with-trailer',
  '5.5m pontoon boat, 60HP Yamaha outboard, great condition. Registered. Trailer included. $18,000.',
  18000,
  'Boats & Marine',
  'russell-island',
  'Mike Johnson',
  '0434 567 890',
  'mike@example.com',
  'active',
  true,
  '["https://images.unsplash.com/photo-1544551763-46a013bb70d5"]'
),
(
  'Antique Dining Table & Chairs',
  'antique-dining-table-chairs',
  'Beautiful solid timber dining suite. Table + 6 chairs. Excellent condition. $800.',
  800,
  'Furniture',
  'macleay-island',
  'Sarah Brown',
  '0445 678 901',
  'sarah@example.com',
  'active',
  true,
  '["https://images.unsplash.com/photo-1617806118233-18e1de247200"]'
),
(
  'Ride-On Lawn Mower',
  'ride-on-lawn-mower',
  'Cox 18HP ride-on mower. Good working order. $1,200 ONO.',
  1200,
  'Garden & Outdoor',
  'russell-island',
  'Tom Green',
  '0456 789 012',
  'tom@example.com',
  'active',
  true,
  '["https://images.unsplash.com/photo-1558618666-fcd25c85cd64"]'
),
(
  'Commercial Freezer',
  'commercial-freezer',
  '2-door upright commercial freezer. Perfect for cafe or restaurant. $2,500.',
  2500,
  'Business Equipment',
  'russell-island',
  'Lisa White',
  '0467 890 123',
  'lisa@example.com',
  'active',
  true,
  '["https://images.unsplash.com/photo-1584308972272-9e4e7685e80f"]'
);

-- ========================================
-- 3. FEATURED ARTICLES
-- ========================================

INSERT INTO articles (
  title,
  slug,
  excerpt,
  content,
  author,
  category,
  featured_image,
  status,
  featured,
  published_at
) VALUES
(
  'Top 10 Things to Do on Russell Island',
  'top-10-things-russell-island',
  'Discover the best activities, attractions, and hidden gems on Russell Island. From bowls to beaches, cafes to nature walks.',
  '<h2>Introduction</h2><p>Russell Island offers a unique blend of relaxed island living and modern conveniences...</p>',
  'Bay Islands Team',
  'Island Guides',
  'https://images.unsplash.com/photo-1559827260-dc66d52bef19',
  'published',
  true,
  NOW()
),
(
  'Ferry Schedule Changes - What You Need to Know',
  'ferry-schedule-changes-2026',
  'SeaLink announces new timetable for Bay Islands ferry service starting February 2026. More services, better connections.',
  '<h2>New Schedule Details</h2><p>Starting February 1st, 2026, SeaLink will introduce additional ferry services...</p>',
  'Transport Update',
  'News',
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5',
  'published',
  true,
  NOW() - INTERVAL '2 days'
),
(
  'Island Business Spotlight: Shane''s Concreting',
  'business-spotlight-shanes-concreting',
  'Meet Shane Smith, the concrete expert who''s been serving the Bay Islands for over 20 years.',
  '<h2>Family Business with Island Roots</h2><p>Shane grew up on Russell Island and started his concreting business...</p>',
  'Business Features',
  'Business Spotlight',
  'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d',
  'published',
  true,
  NOW() - INTERVAL '5 days'
),
(
  'Best Cafes and Restaurants on the Bay Islands',
  'best-cafes-restaurants-bay-islands',
  'Your complete guide to dining out across Russell, Macleay, Lamb, and Karragarra Islands.',
  '<h2>Culinary Delights</h2><p>The Bay Islands may be small, but the food scene is thriving...</p>',
  'Food & Dining',
  'Lifestyle',
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
  'published',
  true,
  NOW() - INTERVAL '1 week'
);

-- ========================================
-- 4. FEATURED EVENTS
-- ========================================

INSERT INTO events (
  title,
  slug,
  description,
  event_date,
  end_date,
  location,
  address,
  category,
  organizer_name,
  organizer_email,
  organizer_phone,
  ticket_price,
  ticket_url,
  status,
  featured,
  event_image
) VALUES
(
  'Russell Island Community Markets',
  'russell-island-markets-feb-2026',
  'Monthly community markets featuring local produce, crafts, food stalls, and live music. Family friendly. Free entry.',
  '2026-02-08 08:00:00',
  '2026-02-08 13:00:00',
  'russell-island',
  'Lions Park, Russell Island',
  'Markets & Fairs',
  'Russell Island Progress Association',
  'markets@ripa.org.au',
  '07 3409 1111',
  0,
  null,
  'active',
  true,
  'https://images.unsplash.com/photo-1533900298318-6b8da08a523e'
),
(
  'Barefoot Bowls Night',
  'barefoot-bowls-feb-2026',
  'Come and try barefoot bowls! No experience necessary. Includes finger food and drink specials. $15 per person.',
  '2026-02-14 17:00:00',
  '2026-02-14 21:00:00',
  'russell-island',
  'Russell Island Bowls Club, 23 High Street',
  'Sports & Recreation',
  'Russell Island Bowls Club',
  'info@ribowls.com.au',
  '07 3409 7979',
  15,
  'https://russelislandbowls.com.au/events',
  'active',
  true,
  'https://images.unsplash.com/photo-1561820018-90b90fadb1e6'
),
(
  'Island Art Exhibition',
  'macleay-art-exhibition-2026',
  'Annual exhibition featuring local artists. Paintings, sculptures, photography. Opening night with wine and cheese.',
  '2026-02-20 18:00:00',
  '2026-02-27 16:00:00',
  'macleay-island',
  'Macleay Island Community Hall',
  'Arts & Culture',
  'Bay Islands Arts Society',
  'arts@bayislands.org.au',
  '0412 123 456',
  0,
  null,
  'active',
  true,
  'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b'
),
(
  'Kids Beach Clean-Up Day',
  'beach-cleanup-march-2026',
  'Join us for a family-friendly beach clean-up. All ages welcome. BBQ lunch provided. Bring gloves and buckets.',
  '2026-03-01 09:00:00',
  '2026-03-01 13:00:00',
  'russell-island',
  'Main Beach, Russell Island',
  'Community',
  'Bay Islands Environment Group',
  'environment@bayislands.org.au',
  '0423 234 567',
  0,
  null,
  'active',
  true,
  'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5'
),
(
  'Ferry Commuter Networking Breakfast',
  'ferry-networking-feb-2026',
  'Monthly breakfast networking for island residents who commute to Brisbane. Share tips, make connections.',
  '2026-02-12 07:00:00',
  '2026-02-12 09:00:00',
  'redland-bay',
  'Redland Bay Marina Cafe',
  'Business & Networking',
  'Island Business Network',
  'network@islandbusiness.com.au',
  '0434 345 678',
  20,
  'https://islandbusiness.com.au/events',
  'active',
  true,
  'https://images.unsplash.com/photo-1511578314322-379afb476865'
),
(
  'Island Trivia Night',
  'trivia-night-march-2026',
  'Test your knowledge at our monthly trivia night. Teams of 4. Prizes for 1st, 2nd, 3rd. $10 per person includes supper.',
  '2026-03-07 19:00:00',
  '2026-03-07 22:00:00',
  'russell-island',
  'Russell Island Bowls Club',
  'Social Events',
  'Russell Island Bowls Club',
  'info@ribowls.com.au',
  '07 3409 7979',
  10,
  'https://russelislandbowls.com.au/trivia',
  'active',
  true,
  'https://images.unsplash.com/photo-1606761568499-6d2451b23c66'
);

-- ========================================
-- 5. FEATURED JOBS
-- ========================================

INSERT INTO jobs (
  title,
  slug,
  company,
  description,
  location,
  employment_type,
  salary_min,
  salary_max,
  category,
  requirements,
  benefits,
  contact_email,
  contact_phone,
  application_url,
  status,
  featured,
  expires_at
) VALUES
(
  'Cafe Manager',
  'cafe-manager-island-paradise',
  'Island Paradise Cafe',
  'Experienced cafe manager needed for busy waterfront cafe on Macleay Island. Lead a small team, manage stock, customer service.',
  'macleay-island',
  'Full-time',
  55000,
  65000,
  'Hospitality',
  'Minimum 2 years cafe management experience, RSA, food safety certificate',
  'Staff meals, flexible roster, beautiful waterfront location',
  'jobs@islandparadisecafe.com.au',
  '07 3409 1234',
  null,
  'active',
  true,
  NOW() + INTERVAL '30 days'
),
(
  'Qualified Plumber',
  'qualified-plumber-coastal',
  'Coastal Plumbing & Gas',
  'Join our growing team! Must have plumbing license, own vehicle, and tools. Island work with mainland clients.',
  'russell-island',
  'Full-time',
  70000,
  85000,
  'Trades',
  'Plumbing license, driver license, own tools',
  'Company vehicle, phone, competitive salary, work-life balance',
  'jobs@coastalplumbing.com.au',
  '0411 222 333',
  null,
  'active',
  true,
  NOW() + INTERVAL '30 days'
),
(
  'Real Estate Sales Agent',
  'real-estate-agent-bay-islands',
  'Bay Islands Real Estate',
  'Motivated sales agent wanted for established island agency. Full training provided. Work from our Russell Island office.',
  'russell-island',
  'Full-time / Part-time',
  50000,
  120000,
  'Sales & Marketing',
  'Real estate license (or willing to obtain), driver license, excellent communication',
  'High commission structure, flexible hours, established client base',
  'careers@bayislandsrealestate.com.au',
  '07 3409 5678',
  null,
  'active',
  true,
  NOW() + INTERVAL '30 days'
),
(
  'Gardener / Landscaper',
  'gardener-island-gardening',
  'Island Gardening Services',
  'Looking for reliable gardener to join our team. Mowing, gardening, basic landscaping. Own transport essential.',
  'macleay-island',
  'Casual',
  25,
  30,
  'Trades',
  'Experience in gardening/lawn care, own vehicle and basic tools',
  'Flexible hours, regular work, friendly team',
  'work@islandgardening.com.au',
  '0422 333 444',
  null,
  'active',
  true,
  NOW() + INTERVAL '30 days'
);

-- ========================================
-- SUCCESS MESSAGE
-- ========================================

DO $$
BEGIN
  RAISE NOTICE '======================================';
  RAISE NOTICE 'FEATURED CONTENT SEED DATA COMPLETE';
  RAISE NOTICE '======================================';
  RAISE NOTICE '';
  RAISE NOTICE 'Created:';
  RAISE NOTICE '- 10 Featured Businesses (4 premium + 6 basic)';
  RAISE NOTICE '- 6 Featured Classifieds';
  RAISE NOTICE '- 4 Featured Articles';
  RAISE NOTICE '- 6 Featured Events';
  RAISE NOTICE '- 4 Featured Jobs';
  RAISE NOTICE '';
  RAISE NOTICE 'Ready for homepage display!';
  RAISE NOTICE '======================================';
END $$;
