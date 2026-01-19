import ArticleLayout from '@/components/ArticleLayout';
import Link from 'next/link';

export default function CommunityInfrastructurePage() {
  return (
    <ArticleLayout
      title="Community Infrastructure & Public Services"
      description="Complete guide to healthcare, education, transport, and public services across Russell, Macleay, Lamb, and Karragarra Islands"
      category="Local Services"
    >
      <h2>Introduction</h2>
      <p>
        The South Moreton Bay Islands provide a well-connected community infrastructure network that balances island charm with access to mainland facilities. From healthcare and education to transport and government services, SMBI residents enjoy comprehensive support that makes island living both convenient and secure.
      </p>

      <h2>🏥 Healthcare & Medical Services</h2>
      
      <h3>Russell Island Medical Centre</h3>
      <ul>
        <li><strong>Services:</strong> General practitioner consultations, pathology, minor procedures</li>
        <li><strong>Hours:</strong> Monday–Friday (check for current schedule)</li>
        <li><strong>Location:</strong> Near town centre, accessible from ferry terminal</li>
        <li><strong>Pharmacy:</strong> On-site prescription dispensing</li>
      </ul>

      <h3>Macleay Island Medical Clinic</h3>
      <ul>
        <li><strong>Services:</strong> GP consultations, chronic disease management, health checks</li>
        <li><strong>Location:</strong> Central Macleay Island, near shopping centres</li>
      </ul>

      <h3>Emergency & Specialist Care</h3>
      <ul>
        <li><strong>Redland Hospital</strong> (mainland, 45–60 mins) — Major medical care, emergency department, specialist services</li>
        <li><strong>Queensland Ambulance Service</strong> — Accessible via 000 emergency calls</li>
        <li><strong>Telehealth:</strong> Available for after-hours consultations and specialist referrals</li>
      </ul>

      <h2>📚 Education Facilities</h2>
      
      <h3>Primary Schools</h3>
      <div style={{background: '#f1f5f9', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
        <p><strong>Russell Island State School</strong></p>
        <ul>
          <li>Grades: Prep to Year 6</li>
          <li>Enrollment: ~200 students</li>
          <li>Programs: Core curriculum, sports, arts, community focus</li>
          <li>Website: <a href="https://russellislandss.eq.edu.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>russellislandss.eq.edu.au</a></li>
        </ul>

        <p style={{marginTop: '16px'}}><strong>Macleay Island State School</strong></p>
        <ul>
          <li>Grades: Prep to Year 6</li>
          <li>Enrollment: ~150 students</li>
          <li>Programs: Academic excellence, outdoor education, island heritage studies</li>
          <li>Website: <a href="https://macleayislandss.eq.edu.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>macleayislandss.eq.edu.au</a></li>
        </ul>
      </div>

      <h3>Kindergartens & Preschools</h3>
      <ul>
        <li>Community-run kindergarten programs on Russell & Macleay Islands</li>
        <li>Private childcare options available</li>
        <li>Playgroup sessions at community centres</li>
      </ul>

      <h3>Secondary Education</h3>
      <p>
        Students access mainland high schools via integrated ferry + bus transport (~45 mins total travel):
      </p>
      <ul>
        <li><strong>Cleveland State High School</strong> — Academic & vocational programs</li>
        <li><strong>Victoria Point State High School</strong> — Comprehensive secondary education</li>
        <li>School transport coordinated through <a href="https://translink.com.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>TransLink</a></li>
      </ul>

      <h2>📚 Libraries & Community Hubs</h2>
      
      <h3>Russell Island Library</h3>
      <ul>
        <li>Books, DVDs, magazines, public internet access</li>
        <li>Community programs: Storytime, workshops, exhibitions</li>
        <li>Free Wi-Fi for visitors</li>
      </ul>

      <h3>Macleay Island Community Centre</h3>
      <ul>
        <li>Library services, meeting rooms, events</li>
        <li>Community workshops and classes</li>
        <li>Social gathering space</li>
      </ul>

      <h3>Community Halls</h3>
      <ul>
        <li>Available for hire: weddings, parties, meetings</li>
        <li>Host local markets, festivals, community events</li>
        <li>Island-specific halls on Russell, Macleay, and Lamb Islands</li>
      </ul>

      <h2>🚗 Transport & Connectivity</h2>
      
      <h3>Ferry Services</h3>
      <p>
        All islands are serviced by daily ferry operations from <strong>Redland Bay Marina</strong>:
      </p>
      <ul>
        <li><strong>Operators:</strong> Stradbroke Ferries, TransLink SeaLink</li>
        <li><strong>Frequency:</strong> 3–6 daily services (subject to tides & weather)</li>
        <li><strong>Journey Times:</strong> 40–65 minutes depending on island</li>
        <li><strong>Vehicle Barge:</strong> Available for car transport (booking required)</li>
        <li><strong>Booking:</strong> <a href="https://translink.com.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>TransLink.com.au</a></li>
      </ul>

      <h3>Bus & Shuttle Services</h3>
      <ul>
        <li>Integrated bus services from Redland Bay Marina to Brisbane CBD</li>
        <li>Local shuttle services on Russell & Macleay Islands</li>
        <li>Courtesy buses from clubs (RSL, bowls clubs)</li>
      </ul>

      <h3>Redland Bay Marina Facilities</h3>
      <ul>
        <li><strong>Car Parks:</strong> Short-term & long-term parking available</li>
        <li><strong>Ride-Share Zones:</strong> Designated pickup/drop-off areas</li>
        <li><strong>Shuttle Services:</strong> To/from local suburbs</li>
        <li><strong>Amenities:</strong> Waiting areas, toilets, food outlets</li>
      </ul>

      <h2>🏛️ Government & Social Services</h2>
      
      <h3>Redland City Council</h3>
      <ul>
        <li><strong>Services:</strong> Development applications, rates, waste management, infrastructure</li>
        <li><strong>Website:</strong> <a href="https://www.redland.qld.gov.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>redland.qld.gov.au</a></li>
        <li><strong>Contact:</strong> Council offices accessible via mainland (Cleveland, Victoria Point)</li>
      </ul>

      <h3>Centrelink & Services Australia</h3>
      <ul>
        <li>Social security payments, Medicare, family assistance</li>
        <li>Services accessible via mainland offices or online</li>
        <li><strong>Website:</strong> <a href="https://www.servicesaustralia.gov.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>servicesaustralia.gov.au</a></li>
      </ul>

      <h3>Queensland Police Service</h3>
      <ul>
        <li>Community policing presence on islands</li>
        <li>Emergency response via 000</li>
        <li>Mainland stations: Redland Bay, Victoria Point</li>
      </ul>

      <h3>Postal Services</h3>
      <ul>
        <li><strong>Russell Island Post Office</strong> — Mail, parcels, banking services</li>
        <li>Regular mail delivery to all islands</li>
        <li>Parcel delivery via Australia Post and private carriers</li>
      </ul>

      <h2>♻️ Waste Management & Utilities</h2>
      
      <h3>Council Waste Collection</h3>
      <ul>
        <li>Weekly garbage collection across all islands</li>
        <li>Fortnightly recycling services</li>
        <li>Green waste collection programs</li>
        <li>Bulky waste pickup available (booking required)</li>
      </ul>

      <h3>Utilities</h3>
      <ul>
        <li><strong>Electricity:</strong> Island power grids serviced by Energex</li>
        <li><strong>Water:</strong> Island water supply managed by council</li>
        <li><strong>Sewerage:</strong> Septic systems (most properties)</li>
        <li><strong>Internet:</strong> NBN available across islands; private providers also service the region</li>
      </ul>

      <h2>🤝 Community Support Services</h2>
      
      <h3>Bay Islands Community Services Inc (BICS)</h3>
      <ul>
        <li><strong>Location:</strong> Russell Island (55 Jackson Rd)</li>
        <li><strong>Services:</strong> Community support programs, op shop, café, social connections</li>
        <li><strong>Programs:</strong> Family support, seniors programs, emergency assistance</li>
      </ul>

      <h3>Community Organizations</h3>
      <ul>
        <li><strong>Russell Island Progress Association</strong> — Community advocacy</li>
        <li><strong>Macleay Island Progress Association</strong> — Local representation</li>
        <li><strong>Lamb Island Residents Association</strong> — Community support</li>
        <li><strong>Lions Club of Macleay Island</strong> — Charity & community service</li>
      </ul>

      <h2>📞 Emergency Services</h2>
      
      <div style={{background: '#fef2f2', padding: '20px', borderRadius: '8px', border: '2px solid #dc2626', marginBottom: '20px'}}>
        <h3 style={{marginTop: 0, color: '#dc2626'}}>In Case of Emergency</h3>
        <ul>
          <li><strong>Emergency (Police, Fire, Ambulance):</strong> 000</li>
          <li><strong>Queensland Ambulance:</strong> Emergency transport to mainland hospitals</li>
          <li><strong>Queensland Fire & Emergency Services:</strong> Island response teams</li>
          <li><strong>SES (State Emergency Service):</strong> Storm & disaster response — 132 500</li>
        </ul>
      </div>

      <h2>🔗 Related Resources</h2>
      <ul>
        <li><Link href="/islands/russell" style={{color: '#0066b3'}}>Russell Island Guide — Services & Amenities</Link></li>
        <li><Link href="/islands/macleay" style={{color: '#0066b3'}}>Macleay Island Guide — Facilities & Community</Link></li>
        <li><Link href="/articles/education-schools-islands" style={{color: '#0066b3'}}>Education & Schools on the Islands</Link></li>
        <li><Link href="/articles/transport-on-islands" style={{color: '#0066b3'}}>Transport & Ferry Guide</Link></li>
      </ul>

      <h2>📞 Key Contacts</h2>
      <div style={{background: '#f1f5f9', padding: '20px', borderRadius: '8px'}}>
        <ul style={{marginBottom: 0}}>
          <li><strong>Redland City Council:</strong> <a href="https://www.redland.qld.gov.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>redland.qld.gov.au</a></li>
          <li><strong>TransLink (Ferry Services):</strong> <a href="https://translink.com.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>translink.com.au</a></li>
          <li><strong>Centrelink:</strong> 13 24 68 or <a href="https://www.servicesaustralia.gov.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>servicesaustralia.gov.au</a></li>
          <li><strong>Redland Hospital:</strong> (07) 3488 6111</li>
          <li><strong>Queensland Health:</strong> 13 HEALTH (13 43 25 84)</li>
        </ul>
      </div>
    </ArticleLayout>
  );
}
