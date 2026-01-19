import ArticleLayout from '@/components/ArticleLayout';
import Link from 'next/link';

export default function RecreationSportsPage() {
  return (
    <ArticleLayout
      title="Recreation & Sports on the South Moreton Bay Islands"
      description="Discover parks, sports clubs, golf, bowls, swimming, boating, and outdoor activities across Russell, Macleay, Lamb, and Karragarra Islands"
      category="Recreation & Lifestyle"
    >
      <h2>Introduction</h2>
      <p>
        Life on the South Moreton Bay Islands isn't just scenic — it's active! Locals and visitors enjoy organized sports, parks, trails, water activities, clubs, and facilities that serve every age and interest. From championship golf to community bowls, from fishing to BMX, the islands offer exceptional outdoor recreation in a beautiful island setting.
      </p>

      <h2>⛳ Golf</h2>
      
      <h3>Macleay Island Golf Club</h3>
      <div style={{background: '#fed7aa', padding: '20px', borderRadius: '8px', marginBottom: '20px', borderLeft: '4px solid #c85a17'}}>
        <p><strong>World-Class 9-Hole Championship Course</strong></p>
        <ul>
          <li><strong>Location:</strong> Central Macleay Island with stunning ocean views</li>
          <li><strong>Course:</strong> Championship-standard 9-hole layout</li>
          <li><strong>Facilities:</strong> Clubhouse restaurant & bar, pro shop, practice areas</li>
          <li><strong>Membership:</strong> Full, social, and visitor memberships available</li>
          <li><strong>Visitor Rounds:</strong> Welcome — book ahead for tee times</li>
          <li><strong>Tournaments:</strong> Regular competitions, club championships, social events</li>
          <li><strong>Tuition:</strong> Golf lessons available from club professionals</li>
        </ul>

        <p><strong>Why It's Special</strong></p>
        <p>
          Macleay Island Golf Club is renowned as one of Australia's most picturesque island golf courses. With ocean views, tropical surroundings, and a challenging layout, it attracts golfers from across Queensland and beyond.
        </p>
      </div>

      <h3>Bay Islands Golf Club</h3>
      <ul>
        <li><strong>Location:</strong> Macleay Island</li>
        <li><strong>Activities:</strong> Social golf, community events, club gatherings</li>
        <li><strong>Membership:</strong> Community-focused club with inclusive membership</li>
      </ul>

      <h2>🎳 Lawn Bowls</h2>
      
      <h3>Russell Island Bowls Club</h3>
      <ul>
        <li><strong>Location:</strong> Russell Island, near town centre</li>
        <li><strong>Facilities:</strong> Championship bowling greens, clubhouse bistro & bar</li>
        <li><strong>Activities:</strong> Competitive bowls, social bowls, barefoot bowls</li>
        <li><strong>Events:</strong> Weekly competitions, tournaments, social nights</li>
        <li><strong>Dining:</strong> Bistro meals, lunches, entertainment</li>
        <li><strong>Courtesy Bus:</strong> Available for members</li>
      </ul>

      <h3>Club Macleay (Macleay Island Bowls Club)</h3>
      <ul>
        <li><strong>Location:</strong> Waterfront Macleay Island with scenic views</li>
        <li><strong>Facilities:</strong> Bowling greens, fine dining bistro, bar, function rooms</li>
        <li><strong>Activities:</strong> League bowls, social competitions, community events</li>
        <li><strong>Dining:</strong> Waterfront restaurant with steak nights & specials</li>
        <li><strong>Membership:</strong> Social & bowling memberships available</li>
      </ul>

      <h3>Macleay Island Bowling Green</h3>
      <ul>
        <li><strong>Activities:</strong> League play, social events, club championships</li>
        <li><strong>Community Focus:</strong> Welcoming atmosphere for all skill levels</li>
      </ul>

      <h2>🏊 Swimming & Water Sports</h2>
      
      <h3>Russell Island Public Swimming Pool</h3>
      <ul>
        <li><strong>Location:</strong> Jackson Road, Russell Island</li>
        <li><strong>Facilities:</strong> Community pool with family-friendly amenities</li>
        <li><strong>Season:</strong> Open seasonally (check for current hours)</li>
        <li><strong>Activities:</strong> Lap swimming, family swims, swimming lessons</li>
      </ul>

      <h3>Island Beaches</h3>
      <div style={{background: '#f1f5f9', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
        <p><strong>Russell Island</strong></p>
        <ul>
          <li><strong>Sandy Beach Recreation Reserve:</strong> Lifeguard-patrolled beach, playground, picnic facilities</li>
          <li>Swimming enclosures and safe beach areas</li>
        </ul>

        <p style={{marginTop: '16px'}}><strong>Macleay Island</strong></p>
        <ul>
          <li><strong>Dalpura Beach & Pat's Point:</strong> Scenic beach with swimming enclosures, BBQ areas, picnic spots</li>
          <li>Calm water swimming ideal for families</li>
        </ul>

        <p style={{marginTop: '16px'}}><strong>Karragarra Island</strong></p>
        <ul>
          <li><strong>Karragarra Esplanade:</strong> Family-safe swimming enclosure, BBQ areas, shaded picnic spots near jetty</li>
        </ul>
      </div>

      <h3>Boating & Sailing</h3>
      <ul>
        <li><strong>Tingara Boat Club (Russell Island):</strong> Sailing, boating, marine social events</li>
        <li><strong>Multiple Boat Ramps:</strong> Well-maintained ramps on Russell & Macleay Islands</li>
        <li><strong>Fishing:</strong> Tinny fishing, kayaking, recreational boating in Moreton Bay</li>
        <li><strong>Kayaking & Paddleboarding:</strong> Popular between islands and in tidal flats</li>
      </ul>

      <h2>🚴 Cycling & BMX</h2>
      
      <h3>Russell Island BMX Park</h3>
      <ul>
        <li><strong>Facility:</strong> Dedicated BMX track with courses for all skill levels</li>
        <li><strong>Users:</strong> Juniors, teens, and adults</li>
        <li><strong>Events:</strong> Community BMX competitions</li>
        <li><strong>Location:</strong> Near sports facilities on Russell Island</li>
      </ul>

      <h3>Cycling & Walking Paths</h3>
      <ul>
        <li><strong>Macleay Island Heritage Trail:</strong> Coastal walk & cycle route with scenic ocean views</li>
        <li><strong>Russell Island Paths:</strong> Designated walking/cycling paths throughout the island</li>
        <li><strong>Lamb Island Walking Route:</strong> Lucas Drive circuit with wildlife & ocean views</li>
      </ul>

      <h2>⚽ Team Sports</h2>
      
      <h3>Sports Fields & Facilities</h3>
      <div style={{background: '#f1f5f9', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
        <p><strong>Russell Island</strong></p>
        <ul>
          <li><strong>Jackson Road Oval:</strong> Cricket, soccer, community sports fields</li>
          <li><strong>Tennis & Basketball Courts:</strong> Combined sports courts near school facilities</li>
        </ul>

        <p style={{marginTop: '16px'}}><strong>Organized Sports Clubs</strong></p>
        <ul>
          <li><strong>Bay Islands United FC:</strong> Junior & senior soccer</li>
          <li><strong>Russell Island Sports Fishing Club:</strong> Fishing competitions & events</li>
          <li><strong>Cricket Clubs:</strong> Social & competitive cricket</li>
        </ul>
      </div>

      <h2>🎯 Community Sports Clubs</h2>
      
      <h3>RSL Clubs</h3>
      <ul>
        <li><strong>Russell Island RSL Sub-Branch:</strong> Social club, entertainment, community sport support, functions</li>
        <li>Venue for community gatherings and fundraising events</li>
      </ul>

      <h3>Hash House Harriers</h3>
      <ul>
        <li><strong>SMBI Hash House Harriers:</strong> Social running group with regular "hash runs"</li>
        <li>Family-friendly outdoor exercise & socializing</li>
      </ul>

      <h3>Running & Fitness</h3>
      <ul>
        <li><strong>Running Wild:</strong> Community fitness & running group</li>
        <li><strong>Beach Walks:</strong> Regular social walking groups</li>
        <li><strong>Outdoor Fitness:</strong> Parks & reserves for personal training</li>
      </ul>

      <h2>🏞️ Parks & Outdoor Spaces</h2>
      
      <h3>Russell Island Parks</h3>
      <ul>
        <li><strong>Sandy Beach Recreation Reserve:</strong> Beach, playground, picnic areas, BBQ facilities</li>
        <li><strong>Whistling Kite Wetlands:</strong> Bushwalking, birdwatching, nature conservation</li>
        <li><strong>Community Parks:</strong> Shaded playgrounds, picnic spots</li>
      </ul>

      <h3>Macleay Island Parks</h3>
      <ul>
        <li><strong>Pat's Point & Dalpura Beach:</strong> Lookout, swimming, BBQ, picnic facilities</li>
        <li><strong>Heritage Trail:</strong> Walking & nature observation routes</li>
      </ul>

      <h3>Lamb & Karragarra Islands</h3>
      <ul>
        <li><strong>Pioneer Park (Lamb Island):</strong> Shaded picnic areas, walking paths, local recreation</li>
        <li><strong>Karragarra Esplanade:</strong> Foreshore walk, playground, picnic tables, swimming enclosure</li>
      </ul>

      <h2>🐦 Nature & Wildlife Activities</h2>
      
      <h3>Birdwatching</h3>
      <ul>
        <li><strong>Whistling Kite Wetlands (Russell Island):</strong> Native bird sanctuary</li>
        <li><strong>Coastal Trails:</strong> Migratory bird spotting along beaches</li>
        <li><strong>Best Times:</strong> Early morning & late afternoon</li>
      </ul>

      <h3>Fishing</h3>
      <ul>
        <li><strong>Species:</strong> Bream, whiting, tailor, flathead</li>
        <li><strong>Locations:</strong> Boat ramps, jetties, beaches</li>
        <li><strong>Clubs:</strong> Russell Island Sports Fishing Club</li>
      </ul>

      <h2>💡 Recreation Tips</h2>
      
      <div style={{background: '#e0f2fe', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
        <h3 style={{marginTop: 0}}>For Visitors</h3>
        <ul>
          <li>✅ Check club event calendars for bowls competitions, golf days, RSL community nights</li>
          <li>✅ Bring fishing gear — local species include bream, whiting, tailor</li>
          <li>✅ Use ferry schedule to plan weekend sport trips or family outings</li>
          <li>✅ Book golf rounds ahead at Macleay Island Golf Club</li>
        </ul>

        <h3>For Residents</h3>
        <ul>
          <li>🏝️ Join a club for social connections & regular activities</li>
          <li>🏝️ Participate in community sports competitions</li>
          <li>🏝️ Explore walking trails & heritage paths</li>
          <li>🏝️ Support local sports clubs & volunteer</li>
        </ul>
      </div>

      <h2>🔗 Related Resources</h2>
      <ul>
        <li><Link href="/islands/russell" style={{color: '#0066b3'}}>Russell Island — Sports & Recreation</Link></li>
        <li><Link href="/islands/macleay" style={{color: '#0066b3'}}>Macleay Island — Golf & Recreation</Link></li>
        <li><Link href="/articles/community-infrastructure" style={{color: '#0066b3'}}>Community Facilities & Amenities</Link></li>
        <li><Link href="/events" style={{color: '#0066b3'}}>Community Events Calendar</Link></li>
      </ul>

      <h2>📞 Sports Club Contacts</h2>
      <div style={{background: '#f1f5f9', padding: '20px', borderRadius: '8px'}}>
        <ul style={{marginBottom: 0}}>
          <li><strong>Macleay Island Golf Club:</strong> Check club website for bookings & memberships</li>
          <li><strong>Club Macleay:</strong> Waterfront dining & bowls — visit in person or check local listings</li>
          <li><strong>Russell Island Bowls Club:</strong> Contact via club phone or visit for membership info</li>
          <li><strong>Redland City Council (Parks):</strong> <a href="https://www.redland.qld.gov.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>redland.qld.gov.au</a></li>
        </ul>
      </div>
    </ArticleLayout>
  );
}
