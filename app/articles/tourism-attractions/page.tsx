import ArticleLayout from '@/components/ArticleLayout';
import { generateArticleMetadata } from '@/lib/metadata';

export const metadata = generateArticleMetadata({
  title: 'Tourism & Attractions on the Bay Islands',
  description: 'Discover the top tourist attractions, beaches, walking trails, museums, and heritage sites across Russell, Macleay, Lamb, and Karragarra Islands in Moreton Bay.',
  keywords: [
    'SMBI tourism',
    'Russell Island attractions',
    'Macleay Island beaches',
    'island walking trails',
    'Moreton Bay heritage',
    'Queensland island tourism',
    'Lamb Island activities',
    'Karragarra Island'
  ],
  section: 'Tourism',
  publishedTime: '2026-01-19T00:00:00Z'
});

export default function TourismAttractionsPage() {
  return (
    <ArticleLayout
      title="Tourism & Attractions on the Bay Islands"
      description="Your complete guide to beaches, trails, heritage sites, museums, and must-see attractions across the Southern Moreton Bay Islands"
      category="Tourism & Recreation"
      datePublished="19 January 2026"
    >
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '2rem' }}>
        The Southern Moreton Bay Islands offer a unique blend of natural beauty, rich history, and laid-back island charm. From pristine beaches and scenic walking trails to heritage museums and cultural sites, there's something for every visitor. Whether you're planning a day trip or an extended island getaway, this guide covers all the must-see attractions across Russell, Macleay, Lamb, and Karragarra Islands.
      </p>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Russell Island Attractions
      </h2>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Sandy Beach Reserve
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Russell Island's most popular beach destination, <strong>Sandy Beach</strong> offers calm, shallow waters perfect for families with young children. The beach features:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Swimming enclosure:</strong> Netted area for safe swimming</li>
        <li><strong>Picnic facilities:</strong> BBQs, shelters, tables, and toilets</li>
        <li><strong>Playground:</strong> Modern play equipment for kids</li>
        <li><strong>Foreshore walking path:</strong> 1.2km scenic walk along the waterfront</li>
        <li><strong>Kayak launch:</strong> Easy access for paddling around the bay</li>
        <li><strong>Fishing spots:</strong> Popular for whiting, bream, and flathead</li>
      </ul>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        The beach is accessible via Sandy Beach Road and offers ample parking. Visit early morning or late afternoon for the best light and fewer crowds.
      </p>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Whistling Kite Wetlands & Wildlife Reserve
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        A hidden gem for nature lovers, the <strong>Whistling Kite Wetlands</strong> is a 15-hectare conservation area featuring:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Boardwalk trails:</strong> Elevated walkways through mangroves and wetlands</li>
        <li><strong>Birdwatching platforms:</strong> Spot over 120 bird species including kites, herons, egrets, and pelicans</li>
        <li><strong>Educational signage:</strong> Learn about wetland ecology and native species</li>
        <li><strong>Wildlife viewing:</strong> Wallabies, echidnas, water dragons, and turtles</li>
        <li><strong>Photography opportunities:</strong> Stunning sunrise and sunset views</li>
      </ul>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        The reserve is free to visit and open year-round. Bring binoculars, insect repellent, and sturdy shoes. Best visited early morning when wildlife is most active.
      </p>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Russell Island BMX Park
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Queensland's premier island BMX facility features a <strong>competition-grade track</strong> with jumps, berms, and rhythm sections suitable for all skill levels. The park hosts regular club events and is free to use. Located at Jackson Road Sports Complex.
      </p>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Russell Island Heritage Museum
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Discover the island's history from the Quandamooka People through to modern settlement. The museum displays:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li>Indigenous artefacts and cultural displays</li>
        <li>Early settler photographs and documents</li>
        <li>Maritime history and fishing heritage</li>
        <li>Military history (WWII observation posts)</li>
        <li>Community memorabilia and oral histories</li>
      </ul>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Open Saturdays 10am-2pm at the Community Hall. Entry by gold coin donation.
      </p>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Macleay Island Attractions
      </h2>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Macleay Island Golf Club
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        The jewel of Macleay Island, this <strong>championship 9-hole course</strong> offers:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>18-hole rounds:</strong> Play the front 9 twice for a full round (different tees)</li>
        <li><strong>Stunning bay views:</strong> Panoramic vistas of Moreton Bay from elevated fairways</li>
        <li><strong>Native wildlife:</strong> Kangaroos, wallabies, and birdlife on the course</li>
        <li><strong>Clubhouse restaurant:</strong> Award-winning bistro with waterfront dining</li>
        <li><strong>Visitor packages:</strong> Day memberships available for tourists ($40-60)</li>
        <li><strong>Pro shop & equipment hire:</strong> Clubs, carts, and gear available</li>
      </ul>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Book tee times online or call (07) 3409 8888. Open daily from 7am. The course is accessible via golf cart from the ferry terminal.
      </p>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Dalpura Beach & Foreshore Reserve
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Macleay's premium beach destination features:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Sandy beach:</strong> Natural sand beach with gentle slope</li>
        <li><strong>Foreshore parkland:</strong> Grassed areas for picnics and sports</li>
        <li><strong>Walking/cycling path:</strong> 2.5km sealed path connecting to Heritage Trail</li>
        <li><strong>Fishing jetty:</strong> Popular spot for families and anglers</li>
        <li><strong>Sunset views:</strong> Western-facing beach perfect for evening photography</li>
        <li><strong>Boat ramp access:</strong> Launch small craft and kayaks</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Macleay Island Galleries & Artists Studios
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Macleay has a thriving arts community with several galleries and studios open to visitors:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Island Artists Gallery:</strong> Rotating exhibitions featuring local painters, sculptors, and photographers (open Fri-Sun)</li>
        <li><strong>Pottery studios:</strong> Watch artisans at work and purchase handmade ceramics</li>
        <li><strong>Textile & fiber arts:</strong> Quilting, weaving, and textile installations</li>
        <li><strong>Annual Arts Trail:</strong> Self-guided tour of 15+ studios (held each May)</li>
        <li><strong>Workshops:</strong> Regular weekend classes in painting, pottery, and photography</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Macleay Island Heritage Trail
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        A <strong>5.2km loop trail</strong> showcasing the island's history and natural beauty:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Heritage markers:</strong> 20+ interpretive signs about Indigenous and settler history</li>
        <li><strong>Native bushland:</strong> Eucalypt forest, banksia groves, and coastal heath</li>
        <li><strong>Wildlife corridors:</strong> Spot koalas, wallabies, and echidnas</li>
        <li><strong>Scenic lookouts:</strong> Panoramic views of Moreton Bay and North Stradbroke Island</li>
        <li><strong>Family-friendly:</strong> Mostly flat terrain, suitable for all ages</li>
        <li><strong>Bike-friendly:</strong> Shared path for walking and cycling</li>
      </ul>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Download the trail map from Redland City Council website or pick up a printed copy at the library. Allow 2-3 hours for a leisurely walk with photo stops.
      </p>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Lamb Island Attractions
      </h2>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Pioneer Park & Historical Precinct
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Lamb Island's heritage hub preserves the island's pioneering past:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Original settlers' cottages:</strong> Restored 1920s homes open for tours</li>
        <li><strong>Agricultural displays:</strong> Vintage farming equipment and tools</li>
        <li><strong>Community hall:</strong> Historic building hosting markets and events</li>
        <li><strong>Memorial gardens:</strong> Peaceful walking paths and native plantings</li>
        <li><strong>Picnic area:</strong> BBQs, shelters, and waterfront views</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Lamb Island Wetlands Circuit
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        A <strong>3.8km loop walk</strong> through diverse ecosystems:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li>Mangrove boardwalks with interpretive signage</li>
        <li>Freshwater wetlands teeming with birdlife</li>
        <li>Coastal dune vegetation and wildflowers (spring)</li>
        <li>Fishing access points along tidal creeks</li>
        <li>Educational stops about ecosystem services</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Lamb Island Beaches
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Lamb's quieter beaches offer:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>North Beach:</strong> Shallow, calm waters ideal for young families</li>
        <li><strong>Esplanade Beach:</strong> Long stretch perfect for morning walks and shell collecting</li>
        <li><strong>Fishing spots:</strong> Rocky outcrops for bream and whiting</li>
        <li><strong>Kayaking:</strong> Protected waters for paddling beginners</li>
      </ul>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Karragarra Island Attractions
      </h2>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Karragarra Beach & Swimming Enclosure
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        The smallest inhabited island offers secluded beach experiences:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Netted swimming area:</strong> Safe year-round swimming</li>
        <li><strong>White sand beach:</strong> Pristine shoreline with clear waters</li>
        <li><strong>Picnic facilities:</strong> Shaded areas and basic amenities</li>
        <li><strong>Low visitation:</strong> Escape the crowds on weekdays</li>
        <li><strong>Fishing access:</strong> Beach and rock fishing opportunities</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Karragarra Esplanade Walk
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        A peaceful <strong>2.2km waterfront walk</strong> featuring:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li>Coastal views of Moreton Bay and shipping channels</li>
        <li>Native coastal vegetation and birdwatching</li>
        <li>Historical markers about island settlement</li>
        <li>Quiet retreat for meditation and reflection</li>
      </ul>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Water-Based Activities & Tours
      </h2>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Kayaking & Stand-Up Paddleboarding
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        The calm, protected waters of Moreton Bay make the islands perfect for paddling:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Island circumnavigation:</strong> Paddle around Russell (4-5 hours) or Macleay (6-7 hours)</li>
        <li><strong>Mangrove exploration:</strong> Guided tours through tidal creeks and wetlands</li>
        <li><strong>Wildlife encounters:</strong> Dolphins, dugongs, turtles, and rays commonly sighted</li>
        <li><strong>Rental options:</strong> Kayaks and SUPs available at ferry terminal (Russell Island) - $30-50 per day</li>
        <li><strong>Guided eco-tours:</strong> 3-hour sunset paddles with local operators ($80-120 per person)</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Fishing Charters & Boat Tours
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Local operators offer specialized tours:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Half-day fishing trips:</strong> Target snapper, whiting, bream, and tailor ($150-200 per person, gear included)</li>
        <li><strong>Island-hopping cruises:</strong> Visit all four islands in one day ($100-150 per person)</li>
        <li><strong>Sunset dinner cruises:</strong> Cruise Moreton Bay with gourmet meal ($180-250 per person)</li>
        <li><strong>Private charter:</strong> Customize your experience ($600-1200 for 4-6 people)</li>
      </ul>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Book through Tingara Boat Club or local operators listed in <a href="/directory" style={{ color: '#3b82f6', textDecoration: 'underline' }}>The Bay Islands Directory</a>.
      </p>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Seasonal Highlights & Events
      </h2>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Spring (September - November)
      </h3>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Wildflower season:</strong> Native banksias, grevilleas, and wildflowers in bloom</li>
        <li><strong>Macleay Island Arts Trail:</strong> Annual studio open days (May)</li>
        <li><strong>Turtle nesting:</strong> Green and loggerhead turtles on northern beaches</li>
        <li><strong>Perfect weather:</strong> 20-26°C, ideal for hiking and outdoor activities</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Summer (December - February)
      </h3>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Beach season:</strong> Warm water (24-28°C) perfect for swimming</li>
        <li><strong>SMBI Community Festival:</strong> Annual celebration with live music, markets, and activities</li>
        <li><strong>Christmas markets:</strong> Special holiday markets at all islands</li>
        <li><strong>New Year fireworks:</strong> Waterfront celebrations</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Autumn (March - May)
      </h3>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Fishing season:</strong> Peak season for tailor, whiting, and bream</li>
        <li><strong>Mild temperatures:</strong> 18-25°C, excellent for hiking and cycling</li>
        <li><strong>ANZAC Day services:</strong> Dawn services at RSL clubs</li>
        <li><strong>Lower humidity:</strong> Most comfortable time for outdoor exploration</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Winter (June - August)
      </h3>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Whale watching:</strong> Humpback whales migrate through Moreton Bay (June-November)</li>
        <li><strong>Clear skies:</strong> Best time for astrophotography and stargazing</li>
        <li><strong>Cooler hiking:</strong> 15-22°C, perfect for long walks and trails</li>
        <li><strong>Visitor discounts:</strong> Off-peak rates for accommodation and tours</li>
      </ul>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Visitor Information & Planning
      </h2>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Getting There
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        All islands are accessible via passenger ferry from <strong>Redland Bay Marina</strong>:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Ferry times:</strong> Russell (40-50min), Macleay (50-60min), Lamb (55-65min), Karragarra (60-70min)</li>
        <li><strong>Fare:</strong> Adult return $30-45, children $15-25</li>
        <li><strong>Operators:</strong> Stradbroke Ferries, TransLink SeaLink</li>
        <li><strong>Parking:</strong> Short-term and long-term options at marina ($8-18 per day)</li>
      </ul>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        See our complete <a href="/articles/transport-on-islands" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Transport Guide</a> for detailed ferry schedules and booking information.
      </p>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Accommodation Options
      </h3>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Holiday rentals:</strong> Waterfront homes and cottages ($150-400 per night)</li>
        <li><strong>Bed & breakfasts:</strong> Island charm with personal service ($120-200 per night)</li>
        <li><strong>Camping:</strong> Limited sites available (permits required through Council)</li>
        <li><strong>Day trips:</strong> Most attractions accessible in 6-8 hour visit</li>
      </ul>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Book accommodation well in advance for peak seasons (December-January, Easter). Check <a href="/directory" style={{ color: '#3b82f6', textDecoration: 'underline' }}>The Bay Islands Directory</a> for current listings.
      </p>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        What to Bring
      </h3>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Sun protection:</strong> Hat, sunscreen, sunglasses (UV index high year-round)</li>
        <li><strong>Walking shoes:</strong> Sturdy footwear for trails and beaches</li>
        <li><strong>Insect repellent:</strong> Mosquitoes active at dawn/dusk, especially near wetlands</li>
        <li><strong>Water bottle:</strong> Stay hydrated during outdoor activities</li>
        <li><strong>Cash:</strong> Some vendors don't accept card payments</li>
        <li><strong>Camera/binoculars:</strong> Wildlife and scenic photo opportunities</li>
        <li><strong>Reusable bags:</strong> For market shopping and reducing waste</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Visitor Etiquette
      </h3>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Respect private property:</strong> Stay on marked trails and public areas</li>
        <li><strong>Take rubbish with you:</strong> Limited bins on trails</li>
        <li><strong>Wildlife watching:</strong> Observe from distance, don't feed or approach</li>
        <li><strong>Quiet hours:</strong> Respect residential areas (noise after 9pm)</li>
        <li><strong>Speed limits:</strong> 40-50 km/h on island roads, watch for wildlife</li>
        <li><strong>Support local:</strong> Shop at island businesses and markets</li>
      </ul>

      <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: 'clamp(2rem, 5vw, 3rem)', borderRadius: '1rem', marginTop: '3rem', color: 'white' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>
          Plan Your Island Adventure
        </h2>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, marginBottom: '1.5rem', opacity: 0.95 }}>
          Whether you're seeking outdoor adventure, cultural experiences, or peaceful relaxation, the Southern Moreton Bay Islands offer diverse attractions for every visitor. Start planning your island getaway today!
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <a 
            href="/islands" 
            style={{ 
              background: 'white', 
              color: '#667eea', 
              padding: '0.75rem 1.5rem', 
              borderRadius: '0.5rem', 
              fontWeight: 600, 
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Explore Island Guides
          </a>
          <a 
            href="/articles/transport-on-islands" 
            style={{ 
              background: 'rgba(255,255,255,0.2)', 
              color: 'white', 
              padding: '0.75rem 1.5rem', 
              borderRadius: '0.5rem', 
              fontWeight: 600, 
              textDecoration: 'none',
              display: 'inline-block',
              border: '2px solid white'
            }}
          >
            Ferry Timetables
          </a>
        </div>
      </div>

      <div style={{ marginTop: '3rem', padding: '2rem', background: '#f7fafc', borderRadius: '0.5rem', borderLeft: '4px solid #3b82f6' }}>
        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginBottom: '1rem' }}>
          🔗 Related Resources
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem' }}>
          <li><a href="/islands/russell" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Russell Island Complete Guide</a></li>
          <li><a href="/islands/macleay" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Macleay Island Complete Guide</a></li>
          <li><a href="/articles/recreation-sports-islands" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Recreation & Sports on the Islands</a></li>
          <li><a href="/articles/island-events-calendar" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Island Events & Community Calendar</a></li>
          <li><a href="/events" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Current Events & Activities</a></li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#edf2f7', borderRadius: '0.5rem' }}>
        <h3 style={{ fontSize: 'clamp(1.125rem, 2.8vw, 1.25rem)', fontWeight: 600, color: '#2d3748', marginBottom: '0.75rem' }}>
          📞 Key Tourism Contacts
        </h3>
        <ul style={{ fontSize: 'clamp(0.95rem, 2.3vw, 1.05rem)', lineHeight: 1.7, color: '#4a5568', marginLeft: '1.5rem', marginBottom: 0 }}>
          <li><strong>Redland City Council Visitor Information:</strong> (07) 3829 8999 | <a href="https://www.redland.qld.gov.au/tourism" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'underline' }}>redland.qld.gov.au/tourism</a></li>
          <li><strong>Ferry Bookings (Stradbroke Ferries):</strong> (07) 3286 1964 | <a href="https://www.stradbrokeferries.com.au" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'underline' }}>stradbrokeferries.com.au</a></li>
          <li><strong>TransLink SeaLink:</strong> 13 12 30 | <a href="https://translink.com.au" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'underline' }}>translink.com.au</a></li>
          <li><strong>Macleay Island Golf Club:</strong> (07) 3409 8888</li>
          <li><strong>Emergency Services:</strong> 000 (Police, Fire, Ambulance)</li>
        </ul>
      </div>
    </ArticleLayout>
  );
}
