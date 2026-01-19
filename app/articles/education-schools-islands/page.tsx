import ArticleLayout from '@/components/ArticleLayout';
import Link from 'next/link';

export default function EducationSchoolsPage() {
  return (
    <ArticleLayout
      title="Education & Schools on the South Moreton Bay Islands"
      description="Complete guide to primary schools, kindergartens, secondary school access, and educational opportunities across Russell, Macleay, Lamb, and Karragarra Islands"
      category="Education & Family"
    >
      <h2>Introduction</h2>
      <p>
        Education on the South Moreton Bay Islands caters to young learners while maintaining convenient access to mainland schooling for secondary students. With quality island primary schools, integrated transport for high school students, and a strong community focus on education, SMBI families enjoy excellent learning opportunities in a supportive environment.
      </p>

      <h2>🏫 Primary Schools</h2>
      
      <h3>Russell Island State School</h3>
      <div style={{background: '#e0f2fe', padding: '20px', borderRadius: '8px', marginBottom: '20px', borderLeft: '4px solid #0066b3'}}>
        <p><strong>Overview</strong></p>
        <ul>
          <li><strong>Grades:</strong> Prep to Year 6</li>
          <li><strong>Enrollment:</strong> Approximately 200 students</li>
          <li><strong>Location:</strong> Central Russell Island, near town centre</li>
          <li><strong>Website:</strong> <a href="https://russellislandss.eq.edu.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>russellislandss.eq.edu.au</a></li>
        </ul>

        <p><strong>Programs & Facilities</strong></p>
        <ul>
          <li>Australian Curriculum — literacy, numeracy, science, humanities</li>
          <li>Sports programs: Swimming, athletics, ball sports</li>
          <li>Arts & music programs</li>
          <li>STEM (Science, Technology, Engineering, Math) initiatives</li>
          <li>Island heritage & environmental studies</li>
          <li>Modern classrooms with technology integration</li>
          <li>School library & reading programs</li>
        </ul>

        <p><strong>Community Focus</strong></p>
        <ul>
          <li>Strong parent involvement & school community</li>
          <li>Annual school fetes and fundraising events</li>
          <li>Partnerships with local organizations</li>
          <li>After-school care available</li>
        </ul>
      </div>

      <h3>Macleay Island State School</h3>
      <div style={{background: '#fed7aa', padding: '20px', borderRadius: '8px', marginBottom: '20px', borderLeft: '4px solid #c85a17'}}>
        <p><strong>Overview</strong></p>
        <ul>
          <li><strong>Grades:</strong> Prep to Year 6</li>
          <li><strong>Enrollment:</strong> Approximately 150 students</li>
          <li><strong>Location:</strong> Central Macleay Island</li>
          <li><strong>Website:</strong> <a href="https://macleayislandss.eq.edu.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>macleayislandss.eq.edu.au</a></li>
        </ul>

        <p><strong>Programs & Facilities</strong></p>
        <ul>
          <li>Full Australian Curriculum with academic excellence focus</li>
          <li>Outdoor education programs utilizing island environment</li>
          <li>Sports: Golf (proximity to Macleay Island Golf Club), swimming, athletics</li>
          <li>Creative arts & music</li>
          <li>Technology & digital literacy programs</li>
          <li>Environmental & sustainability education</li>
          <li>Student leadership programs</li>
        </ul>

        <p><strong>Community Involvement</strong></p>
        <ul>
          <li>Active P&C (Parents & Citizens) Association</li>
          <li>Community events & school celebrations</li>
          <li>Local business partnerships</li>
          <li>Volunteer reading programs</li>
        </ul>
      </div>

      <h2>👶 Early Childhood Education</h2>
      
      <h3>Kindergartens & Preschools</h3>
      <p>Early learning options across the islands include:</p>
      <ul>
        <li><strong>Community Kindergartens:</strong> Russell & Macleay Islands offer community-run kindergarten programs for 3–5 year olds</li>
        <li><strong>Private Childcare:</strong> Family daycare and small group care options</li>
        <li><strong>Playgroups:</strong> Community-based playgroups meet at halls and libraries</li>
        <li><strong>Programs:</strong> Early literacy, socialization, school readiness</li>
      </ul>

      <h3>Prep Year</h3>
      <p>
        Both Russell and Macleay Island State Schools offer comprehensive Prep (first year of school) programs:
      </p>
      <ul>
        <li>Full-day, 5-day-per-week programs</li>
        <li>Play-based learning with structured activities</li>
        <li>Transition to school support</li>
        <li>Parent orientation sessions</li>
      </ul>

      <h2>🎓 Secondary Education</h2>
      
      <h3>Mainland High School Access</h3>
      <p>
        SMBI students access quality secondary education on the mainland via integrated ferry + bus transport:
      </p>

      <h4>Cleveland State High School</h4>
      <ul>
        <li><strong>Grades:</strong> Year 7 to Year 12</li>
        <li><strong>Programs:</strong> Academic pathways, vocational education, STEM, arts, sports</li>
        <li><strong>Specializations:</strong> Marine studies, technology, creative industries</li>
        <li><strong>Travel Time:</strong> ~45 minutes total (ferry + bus)</li>
        <li><strong>Website:</strong> <a href="https://clevelandstatehigh.eq.edu.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>clevelandstatehigh.eq.edu.au</a></li>
      </ul>

      <h4>Victoria Point State High School</h4>
      <ul>
        <li><strong>Grades:</strong> Year 7 to Year 12</li>
        <li><strong>Programs:</strong> Comprehensive academic & vocational pathways</li>
        <li><strong>Specializations:</strong> Sports excellence, performing arts, technology</li>
        <li><strong>Travel Time:</strong> ~40 minutes total (ferry + bus)</li>
        <li><strong>Website:</strong> <a href="https://victoriaptstatehigh.eq.edu.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>victoriaptstatehigh.eq.edu.au</a></li>
      </ul>

      <h3>School Transport for Secondary Students</h3>
      <div style={{background: '#f1f5f9', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
        <p><strong>Integrated Transport System</strong></p>
        <ul>
          <li><strong>Ferry Services:</strong> Morning departures timed for school arrivals</li>
          <li><strong>Bus Connections:</strong> Coordinated bus services from Redland Bay Marina to schools</li>
          <li><strong>Go Card:</strong> Student concession fares available</li>
          <li><strong>Total Journey:</strong> Door-to-door time typically 45–60 minutes</li>
        </ul>

        <p><strong>Cost-Effective Options</strong></p>
        <ul>
          <li>School transport subsidies available through <a href="https://education.qld.gov.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>Queensland Education</a></li>
          <li>Monthly Go Card passes for students</li>
          <li>Family concession options</li>
        </ul>
      </div>

      <h2>🎨 Extra-Curricular Programs</h2>
      
      <h3>After-School Activities</h3>
      <ul>
        <li><strong>Sports Clubs:</strong> Junior soccer, cricket, swimming, sailing</li>
        <li><strong>Arts & Crafts:</strong> Community art workshops for children</li>
        <li><strong>Music:</strong> Instrumental lessons available on islands and mainland</li>
        <li><strong>Environmental Programs:</strong> Junior rangers, nature clubs</li>
        <li><strong>Scouts & Guides:</strong> Youth development programs</li>
      </ul>

      <h3>School Holiday Programs</h3>
      <ul>
        <li>Community centre holiday activities</li>
        <li>Sports clinics (golf, bowls, tennis)</li>
        <li>Arts & drama workshops</li>
        <li>Library programs & reading challenges</li>
      </ul>

      <h2>📚 Libraries & Learning Resources</h2>
      
      <h3>Island Libraries</h3>
      <p>
        Russell and Macleay Islands have community libraries offering:
      </p>
      <ul>
        <li>Children's & young adult book collections</li>
        <li>Homework support & study spaces</li>
        <li>Computer & internet access</li>
        <li>School holiday programs</li>
        <li>Storytime sessions for young children</li>
        <li>Free Wi-Fi for students</li>
      </ul>

      <h3>Digital Learning Resources</h3>
      <ul>
        <li><strong>Online Learning Platforms:</strong> Schools utilize digital curriculum tools</li>
        <li><strong>NBN Internet:</strong> Reliable home internet supports remote learning</li>
        <li><strong>Device Programs:</strong> Schools provide laptops/tablets to students</li>
        <li><strong>Queensland Education Resources:</strong> Access to state-wide learning materials</li>
      </ul>

      <h2>🎯 Special Needs & Support Services</h2>
      
      <h3>Learning Support</h3>
      <ul>
        <li>Special education programs at both island primary schools</li>
        <li>Teacher aides for individualized support</li>
        <li>Speech therapy & occupational therapy (visiting services)</li>
        <li>Guidance officers for wellbeing & learning support</li>
      </ul>

      <h3>Inclusive Education</h3>
      <ul>
        <li>Differentiated learning for diverse abilities</li>
        <li>English as Additional Language (EAL) support</li>
        <li>Gifted & talented programs</li>
        <li>Social-emotional learning initiatives</li>
      </ul>

      <h2>💰 Costs & Financial Assistance</h2>
      
      <h3>Public School Costs</h3>
      <div style={{background: '#f1f5f9', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
        <p><strong>Typical Annual Costs (Primary School)</strong></p>
        <ul>
          <li><strong>Voluntary Contributions:</strong> $100–300 per year</li>
          <li><strong>School Materials:</strong> $50–150 per year</li>
          <li><strong>Uniforms:</strong> $150–300 (initial setup)</li>
          <li><strong>Excursions:</strong> $50–200 per year</li>
        </ul>

        <p><strong>Secondary School Costs</strong></p>
        <ul>
          <li><strong>Voluntary Contributions:</strong> $200–400 per year</li>
          <li><strong>Materials & Resources:</strong> $200–400 per year</li>
          <li><strong>Uniforms:</strong> $300–500 (initial setup)</li>
          <li><strong>Transport (Ferry + Bus):</strong> $800–1200 per year with student concessions</li>
        </ul>
      </div>

      <h3>Financial Assistance Available</h3>
      <ul>
        <li><strong>Schoolkids Bonus:</strong> Federal government payment for school costs</li>
        <li><strong>Education Queensland Support:</strong> Assistance for low-income families</li>
        <li><strong>Transport Subsidies:</strong> School transport concessions</li>
        <li><strong>Indigenous Education:</strong> Targeted support for Aboriginal & Torres Strait Islander students</li>
      </ul>

      <h2>🎓 Tertiary Education Access</h2>
      
      <h3>TAFE & Vocational Training</h3>
      <ul>
        <li><strong>TAFE Queensland:</strong> Campuses in Cleveland & Redlands (50–70 mins from islands)</li>
        <li><strong>Programs:</strong> Trades, business, hospitality, healthcare, IT</li>
        <li><strong>Apprenticeships:</strong> Local businesses offer apprenticeship opportunities</li>
      </ul>

      <h3>Universities</h3>
      <ul>
        <li><strong>Griffith University (Nathan Campus):</strong> ~1.5 hours from islands</li>
        <li><strong>University of Queensland (St Lucia):</strong> ~1.5 hours from islands</li>
        <li><strong>Queensland University of Technology:</strong> ~1.5 hours from islands</li>
        <li><strong>Online Study:</strong> Excellent NBN enables remote university study</li>
      </ul>

      <h2>📞 Education Contacts & Resources</h2>
      
      <div style={{background: '#e0f2fe', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
        <h3 style={{marginTop: 0}}>Key Contacts</h3>
        <ul>
          <li><strong>Russell Island State School:</strong> <a href="https://russellislandss.eq.edu.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>russellislandss.eq.edu.au</a></li>
          <li><strong>Macleay Island State School:</strong> <a href="https://macleayislandss.eq.edu.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>macleayislandss.eq.edu.au</a></li>
          <li><strong>Queensland Education:</strong> <a href="https://education.qld.gov.au" target="_blank" rel="noopener" style={{color: '#0066b3'}}>education.qld.gov.au</a></li>
          <li><strong>School Transport Assistance:</strong> 13 74 68</li>
        </ul>
      </div>

      <h2>🔗 Related Resources</h2>
      <ul>
        <li><Link href="/islands/russell" style={{color: '#0066b3'}}>Russell Island — Schools & Education</Link></li>
        <li><Link href="/islands/macleay" style={{color: '#0066b3'}}>Macleay Island — Learning & Community</Link></li>
        <li><Link href="/articles/community-infrastructure" style={{color: '#0066b3'}}>Community Infrastructure & Services</Link></li>
        <li><Link href="/articles/transport-on-islands" style={{color: '#0066b3'}}>Transport & Ferry Guide</Link></li>
      </ul>
    </ArticleLayout>
  );
}
