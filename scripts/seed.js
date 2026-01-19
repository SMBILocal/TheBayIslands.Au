const { createClient } = require('@supabase/supabase-js')
require('dotenv').config({ path: '.env.local' })

async function run(){
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if(!url || !serviceKey){
    console.error('ERROR: Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local')
    process.exit(1)
  }

  const supabase = createClient(url, serviceKey)

  await supabase.from('articles').upsert([
    {title:'Complete Guide to Russell Island', slug:'russell-island-guide', excerpt:'Discover the charm, history, and attractions of Russell Island.', content:'Russell Island is the northernmost island in the Bay Islands, known for its pristine beaches, local shops, and warm community. Popular attractions include Russell Island State School historic site, local cafes, and water activities.'},
    {title:'Macleay Island: Gateway to Paradise', slug:'macleay-island-guide', excerpt:'Your complete guide to exploring Macleay Island.', content:'Macleay Island offers stunning coastal views, excellent dining options, and world-class accommodations. Known for eco-tourism, water sports, and vibrant community events throughout the year.'},
    {title:'Stradbroke Island Adventure Guide', slug:'stradbroke-island-guide', excerpt:'Outdoor activities and natural wonders await on Stradbroke Island.', content:'Home to some of the Bay Islands most stunning beaches, Stradbroke Island is perfect for surfing, fishing, hiking, and wildlife spotting. Popular with families and adventure seekers.'},
    {title:'Lamb Island: Local Favorite', slug:'lamb-island-guide', excerpt:'Hidden gem of the Bay Islands with quiet beaches and rich history.', content:'Lamb Island offers a more relaxed, local experience. Perfect for those seeking authentic island living with less tourist traffic.'},
    {title:'Business Spotlight: Rising Stars of SMBI', slug:'business-spotlight', excerpt:'Meet the entrepreneurs and business owners transforming the Bay Islands economy.', content:'From waterfront restaurants to boutique accommodations, discover the innovative businesses that make the Bay Islands thrive. Features include Island Cafe & Bakery, Bay Marina Services, and more.'},
    {title:'2026 Community Events Calendar', slug:'community-events-2026', excerpt:'All the festivals, markets, and events happening in the Bay Islands this year.', content:'January brings the Summerfest celebration, February features the local fishing competition, and throughout the year there are monthly markets, beach cleanups, and cultural celebrations.'},
    {title:'Sustainable Tourism in the Bay Islands', slug:'sustainable-tourism', excerpt:'How visitors can help preserve our islands while enjoying them.', content:'Learn about reef-safe practices, responsible wildlife viewing, and supporting local businesses. The Bay Islands are committed to preserving their natural beauty for future generations.'},
    {title:'Moving to the Bay Islands: What You Need to Know', slug:'moving-to-bay-islands', excerpt:'Complete guide for relocating to the Bay Islands.', content:'Housing options, visa information, cost of living, schools, and healthcare. Find everything you need to know about making the Bay Islands your new home.'}
  ])

  await supabase.from('jobs').upsert([
    {title:'Head Chef', company:'Island Cafe & Bakery', location:'Russell Island', description:'Experienced chef needed for busy waterfront cafe. Must have 5+ years experience. Competitive salary + benefits.'},
    {title:'Resort Manager', company:'Island Resort & Spa', location:'Macleay Island', description:'Manage daily operations of luxury 4-star resort. Hospitality background required. Full-time permanent position.'},
    {title:'Marine Mechanic', company:'Bay Marina Services', location:'Redland Bay', description:'Experienced marine engine mechanic. Boat maintenance and repair. Full-time role, weekends available.'},
    {title:'Tour Guide (Part-time)', company:'Island Tours Adventures', location:'Russell Island', description:'Lead kayak and snorkeling tours. Summer casual position, flexible hours, must be water-safety certified.'},
    {title:'Landscaping Team Lead', company:'Green Spaces Landscaping', location:'Cleveland', description:'Lead team of 4-5 landscapers. Commercial and residential projects. Drivers license required.'},
    {title:'General Store Manager', company:'Island Supplies & Hardware', location:'Russell Island', description:'Manage retail store operations, staff, and inventory. Must have retail management experience.'},
    {title:'Waitstaff', company:'The Bay Restaurant', location:'Macleay Island', description:'Join our growing restaurant team. Full and part-time positions available. No experience necessary.'},
    {title:'Cleaning & Housekeeping', company:'Island Resort & Spa', location:'Macleay Island', description:'Housekeeping staff for luxury resort. Experienced cleaners preferred. Full-time position.'},
    {title:'Fishing Charter Captain', company:'Blue Water Charters', location:'Redland Bay', description:'Lead sport fishing charters. Must have captain license and excellent customer service skills.'},
    {title:'Admin/Reception', company:'Bay Islands Medical Centre', location:'Cleveland', description:'Front desk and administrative support. Full-time, healthcare admin experience preferred.'}
  ])

  await supabase.from('events').upsert([
    {title:'Russell Island Farmers Market', starts_at:'2026-01-18T08:00:00Z', location:'Russell Island Community Centre', description:'Weekly farmers market featuring fresh produce, local honey, baked goods, and crafts. 8am-2pm every Saturday.'},
    {title:'Macleay Island Fishing Competition', starts_at:'2026-01-25T06:00:00Z', location:'Macleay Island Marina', description:'Annual sport fishing competition. $10,000 prize pool. Registration open now. All skill levels welcome.'},
    {title:'Bay Islands Summerfest', starts_at:'2026-02-01T10:00:00Z', location:'Cleveland Beachfront', description:'3-day festival featuring live music, food stalls, crafts, and water activities. Family-friendly. Free entry.'},
    {title:'Stradbroke Island Surf Competition', starts_at:'2026-02-08T07:00:00Z', location:'Main Beach, Stradbroke Island', description:'Professional and amateur divisions. $5,000 prize pool. Entry closes Jan 31st.'},
    {title:'Monthly Beach Cleanup', starts_at:'2026-02-15T09:00:00Z', location:'North Beach, Russell Island', description:'Community beach cleanup. All ages welcome. Tools provided. Coffee and donuts after.'},
    {title:'Island Business Networking Breakfast', starts_at:'2026-02-20T07:30:00Z', location:'Island Cafe & Bakery, Russell Island', description:'Monthly networking event for local business owners and entrepreneurs. Great coffee and networking opportunity.'},
    {title:'Lamb Island Heritage Walk', starts_at:'2026-02-22T10:00:00Z', location:'Lamb Island Historical Site', description:'Guided 2-hour walk exploring the islands history and indigenous heritage. Expert guides. Limited to 20 people.'},
    {title:'Spring Plant Fair', starts_at:'2026-03-01T09:00:00Z', location:'Russell Island Community Centre', description:'Local nurseries showcase plants, gardening tips, and supplies. Native plants featured.'}
  ])

  await supabase.from('businesses').upsert([
    {name:'Island Cafe & Bakery', category:'Cafe & Food', location:'Russell Island', description:'Award-winning cafe and bakery. Fresh pastries daily, excellent coffee, local ingredients. Perfect for breakfast and lunch.'},
    {name:'Bay Marina Services', category:'Marine & Water Sports', location:'Redland Bay', description:'Full-service marina with boat repairs, maintenance, fuel, and equipment rental. Expert mechanics, competitive pricing.'},
    {name:'Green Spaces Landscaping', category:'Landscaping & Garden', location:'Cleveland', description:'Professional landscaping for residential and commercial properties. Design consultation, regular maintenance, sustainable practices.'},
    {name:'Island Resort & Spa', category:'Hospitality & Tourism', location:'Macleay Island', description:'4-star luxury resort with spa, pool, restaurant. Oceanfront suites, wedding venue, conference facilities. Book direct for discounts.'},
    {name:'Island Supplies & Hardware', category:'Retail & Supplies', location:'Russell Island', description:'Everything you need for island living. Tools, building materials, paint, plumbing supplies, and local products.'},
    {name:'The Bay Restaurant', category:'Fine Dining', location:'Macleay Island', description:'Waterfront fine dining. Fresh seafood daily. Award-winning chef. Reservations recommended. Sunset views.'},
    {name:'Blue Water Charters', category:'Marine & Water Sports', location:'Redland Bay', description:'Sport fishing charters, snorkeling trips, scenic cruises. Professional captains, safety equipment provided. Half and full-day trips.'},
    {name:'Saltwater Stables', category:'Recreation & Tours', location:'Lamb Island', description:'Horseback riding on the beach, trail rides through native bush. All ages and abilities. Professional instruction.'},
    {name:'Bay Islands Medical Centre', category:'Healthcare', location:'Cleveland', description:'General practice, after-hours service, minor injuries clinic. Bulk billing available. Experienced team.'},
    {name:'Island Realty Group', category:'Real Estate', location:'Russell Island', description:'Local real estate specialists. Sales, rentals, investment properties. 20+ years experience in the Bay Islands market.'},
    {name:'Coral Reef Diving School', category:'Recreation & Tours', location:'Macleay Island', description:'PADI diving school. Beginner courses, advanced certifications, guided dives. Equipment rental available.'},
    {name:'The Boathouse Pub', category:'Cafe & Food', location:'Russell Island', description:'Traditional pub with great food, live music weekends, excellent selection of local craft beers. Dog-friendly outdoor area.'}
  ])

  await supabase.from('classifieds').upsert([
    {title:'Kayak for Sale - Sit-on-Top', price:'$280', location:'Russell Island', description:'2-year-old quality kayak. Excellent condition. Includes paddle and life jacket. Yellow, great for beginners.'},
    {title:'Fishing Rod Set - Like New', price:'$180', location:'Redland Bay', description:'Shimano rod and reel, never used. Includes tackle box and accessories. Paid $400 new.'},
    {title:'Electric Lawn Mower', price:'$150', location:'Cleveland', description:'24V battery-powered mower. Low hours, barely used. Great for island gardens.'},
    {title:'Sofa - 2 Seater, Barely Used', price:'$200', location:'Macleay Island', description:'Cream fabric sofa. Very comfortable. Moving overseas, must sell quickly.'},
    {title:'Mountain Bike - Adult Size', price:'$220', location:'Stradbroke Island', description:'Trek brand, excellent for island trails. Recently serviced. Great for exploring.'},
    {title:'Outdoor Furniture Set', price:'$300', location:'Lamb Island', description:'4-piece patio set with cushions. Teak wood, weather-resistant. Perfect condition.'},
    {title:'Surfboard - Beginner', price:'$150', location:'Stradbroke Island', description:'6-foot board, soft top. Great for learning. Slight ding repaired.'},
    {title:'Garden Tools Bundle', price:'$80', location:'Russell Island', description:'Complete set of garden tools, including spade, rake, hoe, pruners. All in good condition.'},
    {title:'Beach Tent - Pop-up', price:'$60', location:'Russell Island', description:'UV protection pop-up tent. Used 3 times. Great for the beach.'},
    {title:'BBQ Grill - Gas', price:'$250', location:'Macleay Island', description:'4-burner stainless steel BBQ. Works perfectly. Just upgraded to larger model.'}
  ])

  console.log('Seed complete')
}

run().catch(err=>{console.error(err);process.exit(1)})
