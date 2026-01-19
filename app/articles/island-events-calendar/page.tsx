import ArticleLayout from '@/components/ArticleLayout';
import Link from 'next/link';

export default function IslandEventsPage() {
  return (
    <ArticleLayout
      title="Island Events & Community Calendar"
      description="Stay updated with South Moreton Bay Islands events including community markets, arts, sports, and island festivals for Russell, Macleay, Lamb, and Karragarra Islands"
      category="Events & Community"
    >
      <h2>Introduction</h2>
      <p>
        The South Moreton Bay Islands thrive on community engagement and vibrant events year-round. From weekly markets to seasonal festivals, cultural activities to sports competitions, the islands offer residents and visitors engaging activities that foster community spirit and celebrate island life.
      </p>

      <h2>📅 Weekly & Monthly Events</h2>
      
      <h3>Community Markets</h3>
      <div style={{background: '#f1f5f9', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
        <p><strong>Russell Island Community Market</strong></p>
        <ul>
          <li><strong>When:</strong> Weekly (check local listings for current schedule)</li>
          <li><strong>Where:</strong> Community centre/hall area</li>
          <li><strong>Features:</strong> Fresh local produce, handmade crafts, baked goods, coffee, live music</li>
          <li><strong>Vendors:</strong> Local artisans, growers, food stalls</li>
        </ul>

        <p style={{marginTop: '16px'}}><strong>Macleay Island Arts & Crafts Fair</strong></p>
        <ul>
          <li><strong>When:</strong> Monthly markets & seasonal fairs</li>
          <li><strong>Where:</strong> Community venue or foreshore area</li>
          <li><strong>Features:</strong> Island art, pottery, jewelry, local crafts, plants</li>
        </ul>

        <p style={{marginTop: '16px'}}><strong>Lamb Island Market & Food Stalls</strong></p>
        <ul>
          <li><strong>When:</strong> Seasonal community markets</li>
          <li><strong>Features:</strong> Fresh produce, baked goods, community pop-ups near ferry</li>
        </ul>
      </div>

      <h3>Sports Competitions</h3>
      <ul>
        <li><strong>Bowls Competitions:</strong> Weekly club bowls at Russell & Macleay bowls clubs</li>
        <li><strong>Golf Tournaments:</strong> Regular competitions at Macleay Island Golf Club</li>
        <li><strong>Fishing Competitions:</strong> Russell Island Sports Fishing Club events</li>
        <li><strong>Cricket & Soccer:</strong> Seasonal leagues & social matches</li>
      </ul>

      <h3>School & Youth Events</h3>
      <ul>
        <li>School fetes & fundraisers (Russell & Macleay Island State Schools)</li>
        <li>Sports carnivals & athletics days</li>
        <li>School concerts & graduation ceremonies</li>
        <li>Youth club activities & programs</li>
      </ul>

      <h2>🎉 Seasonal Festivals & Major Events</h2>
      
      <h3>Annual Island Festival</h3>
      <div style={{background: '#fed7aa', padding: '20px', borderRadius: '8px', marginBottom: '20px', borderLeft: '4px solid #c85a17'}}>
        <p><strong>SMBI Community Festival</strong></p>
        <ul>
          <li><strong>When:</strong> Annual event (typically spring/summer)</li>
          <li><strong>Where:</strong> Rotating between islands or central venue</li>
          <li><strong>Features:</strong>
            <ul style={{marginTop: '8px'}}>
              <li>Live music & entertainment</li>
              <li>Local food vendors & island cuisine</li>
              <li>Arts & crafts market with island artisans</li>
              <li>Kids' activities, rides, face painting</li>
              <li>Community performances & cultural displays</li>
              <li>Exhibitions celebrating island heritage</li>
            </ul>
          </li>
        </ul>
      </div>

      <h3>Environmental & Conservation Events</h3>
      <ul>
        <li><strong>Island Clean-Up Days:</strong> Community beach & park clean-up events</li>
        <li><strong>Tree Planting:</strong> Environmental restoration programs</li>
        <li><strong>Wildlife Awareness:</strong> Birdwatching events, marine conservation talks</li>
        <li><strong>Sustainability Workshops:</strong> Composting, water conservation, eco-living</li>
      </ul>

      <h3>Holiday Events</h3>
      <div style={{background: '#f1f5f9', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
        <p><strong>Christmas & New Year</strong></p>
        <ul>
          <li>Island Christmas markets with festive goods</li>
          <li>Community carols & holiday concerts</li>
          <li>Club Christmas dinners (RSL, bowls clubs)</li>
          <li>New Year's Eve celebrations & fireworks</li>
        </ul>

        <p style={{marginTop: '16px'}}><strong>Easter</strong></p>
        <ul>
          <li>Easter egg hunts for children</li>
          <li>Community gatherings & Easter lunches</li>
          <li>School holiday programs</li>
        </ul>

        <p style={{marginTop: '16px'}}><strong>ANZAC Day</strong></p>
        <ul>
          <li>Dawn service at RSL clubs</li>
          <li>Community commemorations</li>
          <li>Two-up games & traditional activities</li>
        </ul>
      </div>

      <h2>🎭 Arts & Culture Events</h2>
      
      <h3>Gallery Exhibitions</h3>
      <ul>
        <li><strong>Macleay Island Galleries:</strong> Rotating art exhibitions featuring local & visiting artists</li>
        <li><strong>Community Art Shows:</strong> Annual exhibitions at community centres</li>
        <li><strong>Pottery & Crafts Displays:</strong> Handmade island artisan works</li>
      </ul>

      <h3>Performances & Entertainment</h3>
      <ul>
        <li><strong>Live Music:</strong> Regular gigs at clubs (RSL, bowls clubs)</li>
        <li><strong>Community Theatre:</strong> Amateur theatre productions & performances</li>
        <li><strong>School Concerts:</strong> Music, drama, dance performances by students</li>
        <li><strong>Open Mic Nights:</strong> Community talent showcases</li>
      </ul>

      <h3>Workshops & Classes</h3>
      <ul>
        <li>Art & painting workshops at community centres</li>
        <li>Pottery classes & craft sessions</li>
        <li>Photography walks & nature art</li>
        <li>Cultural heritage talks & presentations</li>
      </ul>

      <h2>🏛️ Community Hubs & Event Venues</h2>
      
      <h3>Community Halls</h3>
      <ul>
        <li><strong>Russell Island Community Hall:</strong> Markets, workshops, meetings, celebrations</li>
        <li><strong>Macleay Island Community Centre:</strong> Classes, exhibitions, social gatherings</li>
        <li><strong>Lamb Island Pioneer Hall:</strong> Community events, heritage functions</li>
      </ul>

      <h3>Clubs & Social Venues</h3>
      <ul>
        <li><strong>Russell Island RSL Club:</strong> Entertainment nights, trivia, live music, community dinners</li>
        <li><strong>Russell Island Bowls Club:</strong> Social bowls, bistro meals, events</li>
        <li><strong>Club Macleay:</strong> Waterfront dining, entertainment, club events</li>
        <li><strong>Macleay Island Golf Club:</strong> Golf tournaments, social functions, clubhouse events</li>
      </ul>

      <h3>Libraries</h3>
      <ul>
        <li><strong>Russell Island Library:</strong> Storytime, workshops, community programs, exhibitions</li>
        <li><strong>Macleay Island Library:</strong> Book clubs, classes, community events</li>
      </ul>

      <h2>🚢 Travel & Access for Events</h2>
      
      <div style={{background: '#e0f2fe', padding: '20px', borderRadius: '8px', marginBottom: '20px', borderLeft: '4px solid #0066b3'}}>
        <h3 style={{marginTop: 0}}>Ferry Services for Events</h3>
        <ul>
          <li><strong>Regular Services:</strong> Daily ferry + bus connections from Redland Bay Marina</li>
          <li><strong>Special Event Services:</strong> Additional ferries for major festivals (check schedules)</li>
          <li><strong>Booking:</strong> <a href="https://translink.com.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>TransLink</a> or Stradbroke Ferries</li>
        </ul>

        <h3>Parking & Ride-Share</h3>
        <ul>
          <li>Car parks at Redland Bay Marina (short & long-term)</li>
          <li>Ride-share pickup zones for event attendees</li>
          <li>Shuttle services from clubs for community events</li>
        </ul>
      </div>

      <h2>📢 Finding Out About Events</h2>
      
      <h3>Event Information Sources</h3>
      <ul>
        <li><strong>Redland City Council:</strong> <a href="https://www.redland.qld.gov.au/events" target="_blank" rel="noopener" style={{color: '#0066b3'}}>Official events calendar</a></li>
        <li><strong>Local Facebook Groups:</strong> SMBI community groups, island-specific pages</li>
        <li><strong>Community Noticeboards:</strong> At ferry terminals, shops, libraries</li>
        <li><strong>Club Websites:</strong> RSL, bowls clubs, golf club event schedules</li>
        <li><strong>School Newsletters:</strong> School fetes, concerts, community events</li>
        <li><strong>The Bay Islands Hub:</strong> <Link href="/events" style={{color: '#0066b3'}}>Check our events page</Link></li>
      </ul>

      <h3>Community Organizations</h3>
      <ul>
        <li><strong>SMBI Chamber of Commerce:</strong> Business & community event coordination</li>
        <li><strong>Progress Associations:</strong> Russell, Macleay, Lamb Island community advocacy & events</li>
        <li><strong>Lions Club of Macleay Island:</strong> Charity events & fundraisers</li>
        <li><strong>Bay Islands Community Services (BICS):</strong> Community programs & social events</li>
      </ul>

      <h2>🎪 Event Planning on the Islands</h2>
      
      <h3>Hosting Your Own Event</h3>
      <p>
        Community halls and venues are available for private hire:
      </p>
      <ul>
        <li><strong>Weddings & Celebrations:</strong> Community halls, club venues, beachfront locations</li>
        <li><strong>Business Functions:</strong> Meeting rooms, conference spaces</li>
        <li><strong>Markets & Fairs:</strong> Stall bookings at community markets</li>
        <li><strong>Sports Events:</strong> Field & facility bookings through council</li>
      </ul>

      <h3>Venue Hire Contacts</h3>
      <ul>
        <li><strong>Redland City Council:</strong> Community hall bookings</li>
        <li><strong>Club Macleay:</strong> Function room hire</li>
        <li><strong>RSL Clubs:</strong> Event space & catering</li>
        <li><strong>Community Centres:</strong> Workshop & meeting room hire</li>
      </ul>

      <h2>💡 Event Tips for Visitors</h2>
      
      <div style={{background: '#f1f5f9', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
        <ul>
          <li>✅ Book ferry tickets in advance for major events (can sell out)</li>
          <li>✅ Check weather forecasts (ferries may be affected by conditions)</li>
          <li>✅ Arrive early for parking at Redland Bay Marina during peak times</li>
          <li>✅ Bring cash for markets & small vendors (not all accept cards)</li>
          <li>✅ Follow community event pages for last-minute updates</li>
          <li>✅ Support local vendors & artists at markets</li>
        </ul>
      </div>

      <h2>🔗 Related Resources</h2>
      <ul>
        <li><Link href="/events" style={{color: '#0066b3'}}>The Bay Islands Events Listing</Link></li>
        <li><Link href="/islands" style={{color: '#0066b3'}}>Island Guides — Community & Culture</Link></li>
        <li><Link href="/articles/recreation-sports-islands" style={{color: '#0066b3'}}>Recreation & Sports Events</Link></li>
        <li><Link href="/articles/transport-on-islands" style={{color: '#0066b3'}}>Ferry & Transport Guide</Link></li>
      </ul>

      <h2>📞 Event Contacts</h2>
      <div style={{background: '#e0f2fe', padding: '20px', borderRadius: '8px'}}>
        <ul style={{marginBottom: 0}}>
          <li><strong>Redland City Council Events:</strong> <a href="https://www.redland.qld.gov.au/events" target="_blank" rel="noopener" style={{color: '#0066b3'}}>redland.qld.gov.au/events</a></li>
          <li><strong>TransLink (Ferry Services):</strong> <a href="https://translink.com.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>translink.com.au</a></li>
          <li><strong>Bay Islands Community Services:</strong> Local community programs & events</li>
          <li><strong>SMBI Chamber of Commerce:</strong> Business & community networking events</li>
        </ul>
      </div>
    </ArticleLayout>
  );
}
