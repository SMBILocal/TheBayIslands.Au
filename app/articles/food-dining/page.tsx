import ArticleLayout from '@/components/ArticleLayout';
import { generateArticleMetadata } from '@/lib/metadata';

export const metadata = generateArticleMetadata({
  title: 'Food, Cafes & Local Dining on the Bay Islands',
  description: 'Complete dining guide to restaurants, cafes, clubs, markets, and local food on Russell, Macleay, Lamb, and Karragarra Islands. Fresh seafood, island bistros, and community meals.',
  keywords: [
    'SMBI restaurants',
    'Russell Island food',
    'Macleay Island dining',
    'island cafes Queensland',
    'Club Macleay bistro',
    'island fresh seafood',
    'community markets SMBI',
    'local island food'
  ],
  section: 'Food & Dining',
  publishedTime: '2026-01-19T00:00:00Z'
});

export default function FoodDiningPage() {
  return (
    <ArticleLayout
      title="Food, Cafes & Local Dining on the Bay Islands"
      description="Your complete guide to restaurants, cafes, clubs, markets, and fresh local food across the Southern Moreton Bay Islands"
      category="Food & Dining"
      datePublished="19 January 2026"
    >
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '2rem' }}>
        Island living means access to fresh local seafood, community clubs serving hearty meals, weekend markets with artisan produce, and a relaxed dining culture. While the Bay Islands aren't known for fine dining chains, the local food scene offers authentic island flavors, friendly service, and excellent value. This guide covers all your dining options across Russell, Macleay, Lamb, and Karragarra Islands.
      </p>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Russell Island Dining
      </h2>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Russell Island RSL Club
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        The social heart of Russell Island, the <strong>RSL Club</strong> offers affordable meals in a friendly atmosphere:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Bistro hours:</strong> Lunch Wed-Sun 12pm-2pm, Dinner Fri-Sat 6pm-8pm</li>
        <li><strong>Menu highlights:</strong> Schnitzels ($14-18), fish & chips ($16-20), roast of the day ($15), burgers ($12-16)</li>
        <li><strong>Daily specials:</strong> Thursday seniors' lunch ($12), Friday seafood basket ($18), Sunday roast ($16)</li>
        <li><strong>Bar menu:</strong> Light meals, snacks, and drinks available all day</li>
        <li><strong>Members/visitors:</strong> Visitors welcome (sign in at reception)</li>
        <li><strong>Live entertainment:</strong> Regular Friday night music and weekend raffles</li>
        <li><strong>Waterfront views:</strong> Outdoor seating overlooking Moreton Bay</li>
      </ul>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        <strong>📍 Location:</strong> 31 High Street, Russell Island | <strong>📞 Phone:</strong> (07) 3409 7666
      </p>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Russell Island Bowls Club
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Community club with casual dining and sporting views:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Hours:</strong> Kitchen open Wed-Sun lunch service</li>
        <li><strong>Specialties:</strong> Home-style cooking, generous portions, daily specials</li>
        <li><strong>Prices:</strong> Mains $12-18, kids meals $8-10</li>
        <li><strong>Atmosphere:</strong> Family-friendly, overlooks bowling greens</li>
        <li><strong>Events:</strong> Special meals for bowls tournaments and community events</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Supa IGA Food Court & Takeaway
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Russell's main supermarket features a small food court and takeaway section:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Hot food bar:</strong> Roast chicken, hot chips, pies, sausage rolls (Mon-Sat 8am-6pm)</li>
        <li><strong>Deli counter:</strong> Fresh sandwiches, wraps, salads made to order ($6-12)</li>
        <li><strong>Bakery:</strong> Fresh bread, rolls, cakes, pastries daily</li>
        <li><strong>Coffee:</strong> Basic espresso coffee service ($4-6)</li>
        <li><strong>Seating:</strong> Limited indoor tables and outdoor benches</li>
      </ul>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        <strong>📍 Location:</strong> 38 High Street, Russell Island | <strong>⏰ Hours:</strong> Mon-Sat 7am-7pm, Sun 8am-6pm
      </p>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Café at the Library
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Small volunteer-run café inside Russell Island Library:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Hours:</strong> Tue-Fri 10am-2pm (library hours)</li>
        <li><strong>Menu:</strong> Coffee/tea ($3-5), muffins, slices, cookies ($2-5)</li>
        <li><strong>Atmosphere:</strong> Quiet, community-focused, great for meetings</li>
        <li><strong>WiFi:</strong> Free library WiFi available</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Russell Island Community Market Food Stalls
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Every <strong>Sunday 8am-1pm</strong> at the Community Hall, the market features rotating food vendors:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Hot breakfast:</strong> Bacon & egg rolls, pancakes, sausages ($5-10)</li>
        <li><strong>Coffee van:</strong> Barista coffee, iced drinks ($4-7)</li>
        <li><strong>Fresh fruit & smoothies:</strong> Local tropical fruits, fresh juices</li>
        <li><strong>Baked goods:</strong> Homemade cakes, slices, jams, preserves</li>
        <li><strong>International food:</strong> Rotating vendors with Asian, European, and island cuisines ($8-15)</li>
      </ul>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Macleay Island Dining
      </h2>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Club Macleay Bistro
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        The islands' premier dining destination, <strong>Club Macleay</strong> offers upscale bistro fare with spectacular waterfront views:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Bistro hours:</strong> Lunch daily 12pm-2:30pm, Dinner Thu-Sat 6pm-8:30pm</li>
        <li><strong>Menu highlights:</strong>
          <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
            <li>Fresh Moreton Bay seafood: Grilled barramundi ($28), salt & pepper squid ($24), seafood platter ($45)</li>
            <li>Premium steaks: 300g sirloin ($32), scotch fillet ($36), eye fillet ($38)</li>
            <li>Modern Australian: Pork belly ($26), lamb rack ($34), chicken schnitzel ($22)</li>
            <li>Vegetarian options: Seasonal risotto ($20), grilled vegetables ($18)</li>
          </ul>
        </li>
        <li><strong>Bar menu:</strong> Lighter options, shared plates, salads ($12-20)</li>
        <li><strong>Desserts:</strong> House-made sticky date pudding, pavlova, cheesecake ($10-12)</li>
        <li><strong>Wine list:</strong> Curated selection of Australian wines by glass or bottle</li>
        <li><strong>Alfresco dining:</strong> Waterfront deck seating with bay views</li>
        <li><strong>Live music:</strong> Friday nights 6pm-9pm</li>
        <li><strong>Reservations:</strong> Recommended for dinner, especially weekends</li>
      </ul>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        <strong>📍 Location:</strong> 1 Benowa Road, Macleay Island | <strong>📞 Phone:</strong> (07) 3409 8233 | <strong>Dress code:</strong> Smart casual
      </p>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Macleay Island Golf Club Restaurant
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Award-winning clubhouse restaurant with panoramic fairway and bay views:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Hours:</strong> Breakfast Sat-Sun 7:30am-10am, Lunch Wed-Sun 11:30am-2:30pm</li>
        <li><strong>Breakfast menu:</strong> Big breakfast ($18), eggs benedict ($16), pancakes ($14), coffee & pastries</li>
        <li><strong>Lunch specials:</strong> Golfer's lunch ($15-20), club sandwiches, burgers, fish & chips</li>
        <li><strong>Daily roasts:</strong> Sunday traditional roast lunch ($20)</li>
        <li><strong>Functions:</strong> Available for private events, weddings, celebrations</li>
        <li><strong>Bar:</strong> Full bar service with local beers, wines, spirits</li>
        <li><strong>Non-golfer access:</strong> Restaurant open to public (golf cart hire available for access)</li>
      </ul>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        <strong>📞 Phone:</strong> (07) 3409 8888 | <strong>🏆 Awards:</strong> Best Island Bistro 2024 (Queensland Tourism)
      </p>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Macleay Island Shopping Centre Takeaway
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Convenience store and takeaway at the main shopping precinct:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Fish & chips:</strong> Fresh local fish, calamari, prawns, chips ($8-18)</li>
        <li><strong>Pizza:</strong> Wood-fired pizzas available Fri-Sat nights ($12-22)</li>
        <li><strong>Burgers & wraps:</strong> Beef, chicken, veggie options ($10-14)</li>
        <li><strong>Ice cream:</strong> Soft serve and premium tubs</li>
        <li><strong>Hours:</strong> Daily 8am-7pm (kitchen 10am-6pm)</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Macleay Arts & Crafts Fair Food Vendors
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        First Saturday of each month, 8am-12pm at the Community Centre:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Gourmet coffee:</strong> Specialty roasts, cold brew, iced lattes</li>
        <li><strong>Fresh pastries:</strong> Croissants, Danish, artisan breads</li>
        <li><strong>Organic produce:</strong> Farm-fresh fruits, vegetables, herbs</li>
        <li><strong>Artisan food:</strong> Local honey, jams, pickles, sauces</li>
        <li><strong>Food trucks:</strong> Rotating vendors with diverse cuisines</li>
      </ul>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Lamb Island Dining
      </h2>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Lamb Island Community Hall Café
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Volunteer-operated community café:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Hours:</strong> Market Saturdays 8am-12pm</li>
        <li><strong>Menu:</strong> Tea, coffee, light snacks, homemade cakes</li>
        <li><strong>Prices:</strong> $2-6 (proceeds support island programs)</li>
        <li><strong>Atmosphere:</strong> Friendly, local community hub</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Lamb Island Market Food Stalls
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Third Saturday of each month, 8am-12pm:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Breakfast items:</strong> Sausage sizzle, bacon rolls, eggs</li>
        <li><strong>Coffee cart:</strong> Espresso drinks, tea</li>
        <li><strong>Home baking:</strong> Cakes, slices, jams from local residents</li>
        <li><strong>Fresh produce:</strong> Island-grown fruits and vegetables</li>
      </ul>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Karragarra Island Dining
      </h2>

      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        As the smallest inhabited island with limited commercial facilities, Karragarra doesn't have permanent food services. Visitors should:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Bring supplies:</strong> Pack picnic food, snacks, and drinks</li>
        <li><strong>BBQ facilities:</strong> Public BBQs at beach reserve (BYO food)</li>
        <li><strong>Nearby options:</strong> Quick ferry to Russell or Macleay for meals</li>
        <li><strong>Special events:</strong> Occasional community BBQs and fundraiser meals</li>
      </ul>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Fresh Local Seafood & Fishing
      </h2>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Catch Your Own
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Moreton Bay offers excellent fishing opportunities:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Common catches:</strong> Whiting, bream, flathead, tailor, squid, crab</li>
        <li><strong>Fishing spots:</strong> Jetties, beaches, rock walls, boat ramps</li>
        <li><strong>Licenses:</strong> Queensland recreational fishing license required (free for seniors, $10-50 for others)</li>
        <li><strong>Limits:</strong> Check Queensland Fisheries for size/bag limits</li>
        <li><strong>Equipment hire:</strong> Basic tackle available at IGA stores</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Local Seafood Suppliers
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        While the islands don't have dedicated fishmongers, you can find fresh seafood at:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Community markets:</strong> Local fishers sometimes sell catch (early morning)</li>
        <li><strong>Mainland fishmongers:</strong> Redland Bay, Cleveland, Victoria Point (15-30min from ferry)</li>
        <li><strong>Supermarket seafood:</strong> Frozen and fresh options at IGA stores</li>
        <li><strong>Direct from boats:</strong> Tingara Boat Club members occasionally sell surplus catch</li>
      </ul>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Grocery Shopping & Supplies
      </h2>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Russell Island
      </h3>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Supa IGA:</strong> Full-service supermarket with fresh produce, meat, deli, bakery (Mon-Sat 7am-7pm, Sun 8am-6pm)</li>
        <li><strong>Prices:</strong> Slightly higher than mainland (10-15% premium due to freight)</li>
        <li><strong>Range:</strong> Good variety for essentials, limited specialty items</li>
        <li><strong>Alcohol:</strong> Beer, wine, spirits available (ID required)</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Macleay Island
      </h3>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Emerald Isle Shopping Centre:</strong> Smaller grocery store with essentials (Mon-Sat 8am-6pm, Sun 9am-4pm)</li>
        <li><strong>Southsea Village Convenience:</strong> Basic supplies, snacks, drinks (daily 7am-7pm)</li>
        <li><strong>Markets:</strong> Fresh local produce at monthly community market</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Lamb & Karragarra Islands
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        No permanent grocery stores. Residents typically:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li>Shop at Russell or Macleay Island stores (ferry connection)</li>
        <li>Stock up on mainland (Redland Bay, Cleveland)</li>
        <li>Use online grocery delivery to Redland Bay Marina (collect on return ferry)</li>
        <li>Purchase fresh produce at community markets</li>
      </ul>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Food Delivery & Takeaway Options
      </h2>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Island Delivery Services
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Limited delivery available on Russell and Macleay Islands:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>IGA delivery:</strong> Phone orders with free island delivery over $50 (Russell Island only)</li>
        <li><strong>Club meals takeaway:</strong> RSL and Club Macleay offer phone orders for pickup</li>
        <li><strong>No Uber Eats/DoorDash:</strong> Major delivery apps don't service the islands</li>
        <li><strong>Community deliveries:</strong> Informal neighbor-to-neighbor assistance available</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Mainland Ordering for Ferry Pickup
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Many residents order mainland takeaway for pickup at Redland Bay Marina:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Redland Bay restaurants:</strong> Chinese, Indian, pizza, Thai, fish & chips (time orders for ferry arrival)</li>
        <li><strong>Uber Eats/DoorDash:</strong> Deliver to Redland Bay Marina carpark</li>
        <li><strong>Tip:</strong> Bring insulated bag to keep food warm on ferry ride</li>
      </ul>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Special Diets & Dietary Requirements
      </h2>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Vegetarian & Vegan Options
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        While traditional island dining is meat-focused, options are improving:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Club Macleay:</strong> Vegetarian risotto, salads, grilled vegetables on regular menu</li>
        <li><strong>Golf Club:</strong> Vegetarian breakfast and lunch options available</li>
        <li><strong>Markets:</strong> Fresh produce, vegan baked goods from local vendors</li>
        <li><strong>Self-catering:</strong> IGA stocks plant-based products (tofu, meat alternatives, dairy-free milk)</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Gluten-Free & Allergy-Friendly
      </h3>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Club bistros:</strong> Can accommodate most dietary needs with advance notice (call ahead)</li>
        <li><strong>Supermarket:</strong> IGA stocks gluten-free bread, pasta, snacks</li>
        <li><strong>Fresh food focus:</strong> Seafood, fresh produce naturally gluten-free</li>
        <li><strong>Limited options:</strong> Specialized diet products best sourced from mainland</li>
      </ul>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Dining Tips for Island Visitors & New Residents
      </h2>

      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Limited hours:</strong> Most venues close early (6-8pm), limited Sunday/Monday service</li>
        <li><strong>Cash recommended:</strong> Some smaller vendors don't accept cards</li>
        <li><strong>Book ahead:</strong> Club Macleay and Golf Club require reservations for dinner (especially weekends)</li>
        <li><strong>Bring supplies:</strong> For extended stays, stock up on specialty items from mainland</li>
        <li><strong>Market shopping:</strong> Best fresh produce and homemade goods at weekend markets (arrive early)</li>
        <li><strong>Support local:</strong> Island businesses depend on community patronage</li>
        <li><strong>Seasonal variations:</strong> Some venues reduce hours in off-peak periods (check before visiting)</li>
        <li><strong>BYO friendly:</strong> Some venues allow BYO wine (check corkage fees)</li>
        <li><strong>Kids welcome:</strong> Most clubs and bistros family-friendly with kids menus</li>
        <li><strong>Dress code:</strong> Generally casual, except Club Macleay dinner (smart casual)</li>
      </ul>

      <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: 'clamp(2rem, 5vw, 3rem)', borderRadius: '1rem', marginTop: '3rem', color: 'white' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>
          Experience Island Dining
        </h2>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, marginBottom: '1.5rem', opacity: 0.95 }}>
          From waterfront bistros to community markets, the Bay Islands offer authentic local dining experiences. Book your table at Club Macleay, visit the Sunday markets, or catch your own Moreton Bay seafood for the ultimate island feast!
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <a 
            href="/directory" 
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
            View Full Directory
          </a>
          <a 
            href="/islands" 
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
            Explore Islands
          </a>
        </div>
      </div>

      <div style={{ marginTop: '3rem', padding: '2rem', background: '#f7fafc', borderRadius: '0.5rem', borderLeft: '4px solid #3b82f6' }}>
        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginBottom: '1rem' }}>
          🔗 Related Resources
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem' }}>
          <li><a href="/islands/russell" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Russell Island Directory (Restaurants & Shops)</a></li>
          <li><a href="/islands/macleay" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Macleay Island Directory (Fine Dining & Golf Club)</a></li>
          <li><a href="/articles/island-events-calendar" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Community Markets & Food Events</a></li>
          <li><a href="/articles/recreation-sports-islands" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Recreation & Sports (Fishing Clubs)</a></li>
          <li><a href="/articles/transport-on-islands" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Ferry Timetables & Getting There</a></li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#edf2f7', borderRadius: '0.5rem' }}>
        <h3 style={{ fontSize: 'clamp(1.125rem, 2.8vw, 1.25rem)', fontWeight: 600, color: '#2d3748', marginBottom: '0.75rem' }}>
          📞 Key Dining Contacts
        </h3>
        <ul style={{ fontSize: 'clamp(0.95rem, 2.3vw, 1.05rem)', lineHeight: 1.7, color: '#4a5568', marginLeft: '1.5rem', marginBottom: 0 }}>
          <li><strong>Club Macleay Bistro:</strong> (07) 3409 8233 (reservations recommended)</li>
          <li><strong>Macleay Island Golf Club Restaurant:</strong> (07) 3409 8888</li>
          <li><strong>Russell Island RSL Club:</strong> (07) 3409 7666</li>
          <li><strong>Russell Island Supa IGA:</strong> (07) 3409 8000 (grocery delivery available)</li>
          <li><strong>Tingara Boat Club:</strong> (07) 3409 8111 (fishing charters, boat tours)</li>
        </ul>
      </div>
    </ArticleLayout>
  );
}
