import ArticleLayout from '@/components/ArticleLayout';
import Link from 'next/link';

export default function TransportPage() {
  return (
    <ArticleLayout
      title="Transport on the South Moreton Bay Islands"
      description="Complete guide to ferry services, bus connections, vehicle transport, and getting around Russell, Macleay, Lamb, and Karragarra Islands"
      category="Travel & Transport"
    >
      <h2>Introduction</h2>
      <p>
        Transport is the lifeline of island living on the South Moreton Bay Islands. With well-established ferry services, integrated bus connections, and modern infrastructure, getting to and around the islands is reliable and convenient. This guide covers everything you need to know about SMBI transport.
      </p>

      <h2>🚢 Ferry Services</h2>
      
      <h3>Main Ferry Operators</h3>
      <div style={{background: '#e0f2fe', padding: '20px', borderRadius: '8px', marginBottom: '20px', borderLeft: '4px solid #0066b3'}}>
        <p><strong>Stradbroke Ferries</strong></p>
        <ul>
          <li>High-speed passenger vessels & conventional ferries</li>
          <li>Multiple daily services to all islands</li>
          <li>Modern fleet with comfortable seating</li>
          <li>Onboard amenities: Toilets, sheltered seating</li>
        </ul>

        <p style={{marginTop: '16px'}}><strong>TransLink SeaLink</strong></p>
        <ul>
          <li>Integrated ferry + bus services</li>
          <li>Go Card compatible ticketing</li>
          <li>Connections to Brisbane public transport network</li>
          <li>Website: <a href="https://translink.com.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>translink.com.au</a></li>
        </ul>
      </div>

      <h3>Ferry Schedules by Island</h3>
      
      <h4>Russell Island</h4>
      <ul>
        <li><strong>Departure Point:</strong> Redland Bay Marina</li>
        <li><strong>Journey Time:</strong> 40–50 minutes</li>
        <li><strong>Daily Services:</strong> 4–6 sailings (check current timetables)</li>
        <li><strong>First Ferry:</strong> ~6:30 AM (weekdays)</li>
        <li><strong>Last Ferry:</strong> ~6:00 PM (subject to variation)</li>
      </ul>

      <h4>Macleay Island</h4>
      <ul>
        <li><strong>Departure Point:</strong> Redland Bay Marina</li>
        <li><strong>Journey Time:</strong> 50–60 minutes</li>
        <li><strong>Daily Services:</strong> 3–5 sailings</li>
        <li><strong>Route:</strong> Often via Russell Island</li>
      </ul>

      <h4>Lamb Island</h4>
      <ul>
        <li><strong>Departure Point:</strong> Redland Bay Marina</li>
        <li><strong>Journey Time:</strong> 55–65 minutes</li>
        <li><strong>Daily Services:</strong> 3–4 sailings</li>
      </ul>

      <h4>Karragarra Island</h4>
      <ul>
        <li><strong>Departure Point:</strong> Redland Bay Marina</li>
        <li><strong>Journey Time:</strong> 60+ minutes</li>
        <li><strong>Daily Services:</strong> 2–3 sailings</li>
        <li><strong>Note:</strong> Limited services; check schedule carefully</li>
      </ul>

      <div style={{background: '#fef3c7', padding: '16px', borderRadius: '8px', marginTop: '20px', marginBottom: '20px'}}>
        <p style={{margin: 0}}><strong>⚠️ Important:</strong> Ferry schedules are subject to tides, weather conditions, and seasonal variations. Always check current timetables before travel.</p>
      </div>

      <h3>Ferry Fares</h3>
      <table style={{width: '100%', borderCollapse: 'collapse', marginBottom: '20px'}}>
        <thead>
          <tr style={{background: '#f1f5f9', borderBottom: '2px solid #cbd5e1'}}>
            <th style={{padding: '12px', textAlign: 'left'}}>Ticket Type</th>
            <th style={{padding: '12px', textAlign: 'left'}}>Estimated Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{borderBottom: '1px solid #e2e8f0'}}>
            <td style={{padding: '12px'}}>Adult Return</td>
            <td style={{padding: '12px'}}>$30–45</td>
          </tr>
          <tr style={{borderBottom: '1px solid #e2e8f0'}}>
            <td style={{padding: '12px'}}>Child Return</td>
            <td style={{padding: '12px'}}>$15–25</td>
          </tr>
          <tr style={{borderBottom: '1px solid #e2e8f0'}}>
            <td style={{padding: '12px'}}>Concession Return</td>
            <td style={{padding: '12px'}}>$20–35</td>
          </tr>
          <tr style={{borderBottom: '1px solid #e2e8f0'}}>
            <td style={{padding: '12px'}}>Monthly Pass (Resident)</td>
            <td style={{padding: '12px'}}>$400–600</td>
          </tr>
          <tr>
            <td style={{padding: '12px'}}>Vehicle Barge (One-way)</td>
            <td style={{padding: '12px'}}>$150–250</td>
          </tr>
        </tbody>
      </table>

      <h2>🚗 Vehicle Transport</h2>
      
      <h3>Vehicle Barge Services</h3>
      <p>
        Car and vehicle transport is available via dedicated barge services:
      </p>
      <ul>
        <li><strong>Booking Required:</strong> Advance booking essential (48 hours minimum recommended)</li>
        <li><strong>Service Frequency:</strong> 2–4 weekly sailings depending on demand</li>
        <li><strong>Vehicle Types:</strong> Cars, 4WDs, trailers, boats, motorcycles</li>
        <li><strong>Load Restrictions:</strong> Weight and size limits apply</li>
        <li><strong>Cost:</strong> Varies by vehicle type and island destination</li>
      </ul>

      <h3>On-Island Transport</h3>
      <p>
        Once on the islands, transport options include:
      </p>
      <ul>
        <li><strong>Private Vehicles:</strong> Many residents maintain cars on the islands</li>
        <li><strong>Golf Carts:</strong> Popular for short trips and local errands</li>
        <li><strong>Bicycles:</strong> Ideal for flat terrain on Russell and Macleay</li>
        <li><strong>Walking:</strong> Many amenities within walking distance</li>
      </ul>

      <h2>🚌 Bus Services</h2>
      
      <h3>Redland Bay Marina to Brisbane</h3>
      <p>
        Integrated bus services connect ferry arrivals to mainland destinations:
      </p>
      <ul>
        <li><strong>Route:</strong> Redland Bay Marina → Victoria Point → Cleveland → Brisbane CBD</li>
        <li><strong>Journey Time:</strong> ~20 mins to Victoria Point, ~60 mins to Brisbane CBD</li>
        <li><strong>Frequency:</strong> Regular services throughout the day</li>
        <li><strong>Ticketing:</strong> Go Card or paper tickets</li>
        <li><strong>Operator:</strong> TransLink Brisbane</li>
      </ul>

      <h3>Island Shuttle Services</h3>
      <ul>
        <li><strong>Russell Island:</strong> Local taxi services available</li>
        <li><strong>Macleay Island:</strong> Community shuttle and courtesy buses from clubs</li>
        <li><strong>Courtesy Buses:</strong> RSL and bowls clubs offer member transport</li>
      </ul>

      <h2>🏢 Redland Bay Marina Facilities</h2>
      
      <h3>Parking</h3>
      <div style={{background: '#f1f5f9', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
        <p><strong>Short-Term Parking</strong></p>
        <ul>
          <li>Drop-off zones near ferry terminal</li>
          <li>1–4 hour parking for ferry connections</li>
          <li>Ticketed parking (pay & display)</li>
        </ul>

        <p style={{marginTop: '16px'}}><strong>Long-Term Parking</strong></p>
        <ul>
          <li>Daily & weekly rates available</li>
          <li>Secure parking areas with lighting</li>
          <li>Ideal for island residents commuting to mainland</li>
          <li>Prepaid parking options available</li>
        </ul>
      </div>

      <h3>Amenities at Redland Bay Marina</h3>
      <ul>
        <li><strong>Waiting Areas:</strong> Sheltered seating with weather protection</li>
        <li><strong>Toilets:</strong> Public facilities available</li>
        <li><strong>Food & Coffee:</strong> Cafés and takeaway outlets nearby</li>
        <li><strong>Information:</strong> Ferry schedules and tourist information</li>
        <li><strong>Accessibility:</strong> Wheelchair-accessible facilities</li>
      </ul>

      <h2>🛴 Alternative Transport</h2>
      
      <h3>Water Taxis</h3>
      <ul>
        <li>Private water taxi services available for charter</li>
        <li>Flexible schedules for emergencies or special events</li>
        <li>Inter-island connections</li>
        <li>Higher cost but greater flexibility</li>
      </ul>

      <h3>Ride-Share & Taxis</h3>
      <ul>
        <li><strong>Mainland:</strong> Uber, DiDi, and taxis available at Redland Bay Marina</li>
        <li><strong>Pickup Zones:</strong> Designated areas for ride-share collection</li>
        <li><strong>Island Taxis:</strong> Limited service on Russell Island</li>
      </ul>

      <h2>♿ Accessibility</h2>
      
      <h3>Accessible Ferry Services</h3>
      <ul>
        <li>Wheelchair-accessible vessels available</li>
        <li>Assistance available from ferry staff</li>
        <li>Priority boarding for passengers with disabilities</li>
        <li>Accessible toilets on larger ferries</li>
      </ul>

      <h3>Mainland Accessibility</h3>
      <ul>
        <li>Accessible bus services to/from marina</li>
        <li>Wheelchair-accessible parking at Redland Bay Marina</li>
        <li>Ramps and accessible pathways at terminals</li>
      </ul>

      <h2>💡 Travel Tips</h2>
      
      <div style={{background: '#e0f2fe', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
        <h3 style={{marginTop: 0}}>For Regular Commuters</h3>
        <ul>
          <li>✅ Purchase monthly ferry passes for significant savings</li>
          <li>✅ Book vehicle barge well in advance (minimum 48 hours)</li>
          <li>✅ Use Go Card for integrated ferry + bus journeys</li>
          <li>✅ Check weather forecasts before travel (services may be affected)</li>
          <li>✅ Arrive at ferry terminal 15 minutes before departure</li>
        </ul>

        <h3>For Visitors & Tourists</h3>
        <ul>
          <li>🏝️ Book return ferry tickets in advance during peak seasons</li>
          <li>🏝️ Check current timetables on TransLink website</li>
          <li>🏝️ Plan extra time for connections (ferries can run slightly late)</li>
          <li>🏝️ Bring light luggage (easy to carry on/off ferry)</li>
          <li>🏝️ Consider day trip options to multiple islands</li>
        </ul>
      </div>

      <h2>📱 Booking & Information</h2>
      
      <h3>Online Resources</h3>
      <ul>
        <li><strong>TransLink:</strong> <a href="https://translink.com.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>translink.com.au</a> — Ferry schedules, Go Card, bus connections</li>
        <li><strong>Stradbroke Ferries:</strong> Online booking and timetables</li>
        <li><strong>My TransLink App:</strong> Real-time updates, journey planning, mobile tickets</li>
      </ul>

      <h3>Contact Information</h3>
      <ul>
        <li><strong>TransLink Customer Service:</strong> 13 12 30</li>
        <li><strong>Ferry Terminal (Redland Bay):</strong> Check signage for current contact</li>
        <li><strong>Emergency Transport:</strong> Contact operators directly for urgent bookings</li>
      </ul>

      <h2>🔗 Related Resources</h2>
      <ul>
        <li><Link href="/islands" style={{color: '#0066b3'}}>Complete Islands Guide</Link></li>
        <li><Link href="/articles/community-infrastructure" style={{color: '#0066b3'}}>Community Infrastructure & Services</Link></li>
        <li><Link href="/islands/russell" style={{color: '#0066b3'}}>Russell Island — Getting There</Link></li>
        <li><Link href="/islands/macleay" style={{color: '#0066b3'}}>Macleay Island — Access & Transport</Link></li>
      </ul>
    </ArticleLayout>
  );
}
