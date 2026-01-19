import ArticleLayout from '@/components/ArticleLayout';
import { generateArticleMetadata } from '@/lib/metadata';

export const metadata = generateArticleMetadata({
  title: 'SMBI Business Directory & Classifieds Guide',
  description: 'Complete guide to using The Bay Islands Business Directory and Classifieds. Find local services, trades, shops, professionals, and post free ads on the Southern Moreton Bay Islands.',
  keywords: [
    'SMBI business directory',
    'Russell Island businesses',
    'Macleay Island services',
    'island classifieds',
    'local trades SMBI',
    'island shopping',
    'community marketplace',
    'premium business listings'
  ],
  section: 'Business & Services',
  publishedTime: '2026-01-19T00:00:00Z'
});

export default function BusinessDirectoryGuidePage() {
  return (
    <ArticleLayout
      title="SMBI Business Directory & Classifieds Guide"
      description="Your complete guide to The Bay Islands Business Directory and Classifieds platform - connecting island residents with local services, trades, businesses, and community marketplace"
      category="Business & Services"
      datePublished="19 January 2026"
    >
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '2rem' }}>
        <strong>The Bay Islands Directory & Classifieds</strong> is your comprehensive platform for connecting with local businesses, services, trades, and community members across Russell, Macleay, Lamb, and Karragarra Islands. Whether you're searching for a plumber, selling a boat, finding childcare, or promoting your business, this guide will help you maximize the platform's features and support the local island economy.
      </p>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Understanding The Bay Islands Platform
      </h2>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        What Makes It Different?
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Unlike mainland directories and generic classifieds platforms, The Bay Islands is purpose-built for our island community:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Island-specific:</strong> 100% focused on SMBI - no mainland clutter</li>
        <li><strong>Local verification:</strong> All businesses verified as operating on or servicing the islands</li>
        <li><strong>Community-owned:</strong> Built by islanders, for islanders</li>
        <li><strong>Integrated platform:</strong> Business directory, job board, events calendar, and classifieds in one place</li>
        <li><strong>Mobile-optimized:</strong> Easy browsing and posting from your phone</li>
        <li><strong>Ferry-friendly:</strong> Businesses indicate ferry access, parking, and island delivery options</li>
        <li><strong>Free basic listings:</strong> All residents can post for free (premium options available for businesses)</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Platform Sections Overview
      </h3>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong><a href="/directory" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Business Directory</a>:</strong> Searchable database of island businesses, services, and trades</li>
        <li><strong><a href="/jobs" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Jobs Board</a>:</strong> Local employment opportunities and job seekers</li>
        <li><strong><a href="/events" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Events Calendar</a>:</strong> Community events, markets, club activities</li>
        <li><strong><a href="/classifieds" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Classifieds</a>:</strong> Buy, sell, trade - boats, cars, furniture, services</li>
      </ul>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Using The Business Directory
      </h2>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        How to Search for Services
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Finding the right local service provider is simple:
      </p>
      <ol style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Browse by category:</strong>
          <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
            <li>Building & Construction (builders, electricians, plumbers, carpenters)</li>
            <li>Home & Garden (landscaping, pest control, cleaning, maintenance)</li>
            <li>Professional Services (accountants, lawyers, real estate, finance)</li>
            <li>Health & Wellness (doctors, allied health, fitness, beauty)</li>
            <li>Retail & Shopping (groceries, gifts, homewares, clothing)</li>
            <li>Food & Hospitality (restaurants, cafes, catering)</li>
            <li>Marine & Transport (boat services, vehicle repairs, towing)</li>
            <li>Creative Services (photography, design, arts, music)</li>
            <li>Education & Childcare (tutors, music lessons, daycare)</li>
            <li>Pets & Animals (vets, grooming, pet-sitting)</li>
          </ul>
        </li>
        <li><strong>Filter by island:</strong> Select Russell, Macleay, Lamb, Karragarra, or "All Islands"</li>
        <li><strong>Search by keyword:</strong> Type service name, business name, or specific need</li>
        <li><strong>Check premium listings:</strong> ⭐ Featured businesses with enhanced details appear at top</li>
        <li><strong>Read reviews:</strong> Community ratings and feedback from other islanders</li>
      </ol>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Understanding Business Listings
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Each directory listing includes:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Business name & logo:</strong> Visual identification</li>
        <li><strong>Contact details:</strong> Phone, email, website, social media</li>
        <li><strong>Island location:</strong> Primary base and service areas</li>
        <li><strong>Operating hours:</strong> Days/times available</li>
        <li><strong>Services offered:</strong> Detailed description of what they provide</li>
        <li><strong>Pricing indication:</strong> Free quotes, hourly rates, package deals (where applicable)</li>
        <li><strong>Credentials:</strong> Licenses, insurance, qualifications</li>
        <li><strong>Island access info:</strong> Ferry-accessible, island delivery, mobile service</li>
        <li><strong>Payment methods:</strong> Cash, card, bank transfer, afterpay</li>
        <li><strong>Response time:</strong> Typical timeframe for quotes/bookings</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Premium vs. Free Listings
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        The platform offers both free and <a href="/upgrade" style={{ color: '#3b82f6', textDecoration: 'underline' }}>premium listing options</a>:
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ padding: '1.5rem', background: '#f7fafc', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
          <h4 style={{ fontSize: 'clamp(1.1rem, 2.7vw, 1.25rem)', fontWeight: 600, color: '#2d3748', marginBottom: '1rem' }}>
            Free Listings
          </h4>
          <ul style={{ fontSize: 'clamp(0.95rem, 2.3vw, 1.05rem)', lineHeight: 1.7, color: '#4a5568', marginLeft: '1.2rem' }}>
            <li>Basic business name & category</li>
            <li>Contact phone & email</li>
            <li>Brief description (100 words)</li>
            <li>Island location tag</li>
            <li>Standard search results</li>
            <li>Link to website/social</li>
          </ul>
        </div>

        <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '0.5rem', color: 'white', border: '2px solid #667eea' }}>
          <h4 style={{ fontSize: 'clamp(1.1rem, 2.7vw, 1.25rem)', fontWeight: 600, color: 'white', marginBottom: '1rem' }}>
            ⭐ Premium Listings ($14.90/month)
          </h4>
          <ul style={{ fontSize: 'clamp(0.95rem, 2.3vw, 1.05rem)', lineHeight: 1.7, color: 'white', marginLeft: '1.2rem', opacity: 0.95 }}>
            <li>Priority placement at top of results</li>
            <li>Featured homepage carousel spot</li>
            <li>Full business profile with logo</li>
            <li>Unlimited photos (up to 10)</li>
            <li>Extended description (500 words)</li>
            <li>Price lists & service details</li>
            <li>Customer reviews & ratings</li>
            <li>Booking/inquiry forms</li>
            <li>Social proof (testimonials)</li>
            <li>Analytics dashboard</li>
            <li>Weekly performance reports</li>
          </ul>
          <a 
            href="/upgrade" 
            style={{ 
              display: 'inline-block',
              marginTop: '1rem',
              background: 'white', 
              color: '#667eea', 
              padding: '0.5rem 1rem', 
              borderRadius: '0.375rem', 
              fontWeight: 600, 
              textDecoration: 'none',
              fontSize: 'clamp(0.9rem, 2.2vw, 1rem)'
            }}
          >
            Upgrade Now →
          </a>
        </div>
      </div>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Top Business Categories on the Islands
      </h2>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Building & Trades
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Essential services for home construction, renovation, and maintenance:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Electricians:</strong> Licensed residential & commercial, solar installations, safety inspections</li>
        <li><strong>Plumbers:</strong> Emergency repairs, new installations, septic systems, tank cleaning</li>
        <li><strong>Builders:</strong> New homes, extensions, renovations, decks, patios</li>
        <li><strong>Carpenters:</strong> Custom joinery, kitchens, wardrobes, timber work</li>
        <li><strong>Painters:</strong> Interior/exterior, roof painting, deck staining</li>
        <li><strong>Tilers:</strong> Bathroom, kitchen, outdoor tiling</li>
        <li><strong>Landscapers:</strong> Garden design, lawn care, irrigation, retaining walls</li>
      </ul>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        💡 <em>Tip: Always verify QBCC licenses and insurance before engaging trades. Most island builders include ferry costs in quotes.</em>
      </p>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Home Services
      </h3>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Cleaning services:</strong> Regular house cleaning, deep cleans, end-of-lease, window cleaning</li>
        <li><strong>Pest control:</strong> Termite inspections, rodent control, mosquito treatment</li>
        <li><strong>Lawn & garden:</strong> Mowing, hedging, tree lopping, green waste removal</li>
        <li><strong>Handyman services:</strong> General maintenance, repairs, odd jobs</li>
        <li><strong>Pool maintenance:</strong> Cleaning, chemical balancing, equipment repairs</li>
        <li><strong>Air conditioning:</strong> Sales, installation, servicing, repairs</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Professional Services
      </h3>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Real estate agents:</strong> Property sales, rentals, appraisals (Russell, Macleay, Lamb, Karragarra specialists)</li>
        <li><strong>Accountants:</strong> Tax returns, bookkeeping, business accounting, BAS</li>
        <li><strong>Legal services:</strong> Conveyancing, wills & estates, family law</li>
        <li><strong>Financial advisors:</strong> Investment advice, insurance, retirement planning</li>
        <li><strong>IT services:</strong> Computer repairs, NBN setup, website design</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Marine & Vehicle Services
      </h3>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Boat repairs & servicing:</strong> Engine mechanics, fiberglass repairs, detailing</li>
        <li><strong>Marine electronics:</strong> GPS, sounder, radio installation & repair</li>
        <li><strong>Vehicle mechanics:</strong> Cars, 4WDs, golf carts, trailers</li>
        <li><strong>Mobile mechanics:</strong> On-island service and repairs</li>
        <li><strong>Towing services:</strong> Vehicle recovery, roadside assistance</li>
        <li><strong>Detailing:</strong> Car & boat washing, polishing, interior cleaning</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Health & Wellness
      </h3>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Medical centres:</strong> Russell Island Medical Centre, Macleay Island Clinic (bulk billing available)</li>
        <li><strong>Allied health:</strong> Physiotherapy, occupational therapy, speech therapy</li>
        <li><strong>Mental health:</strong> Psychologists, counselors (telehealth options)</li>
        <li><strong>Fitness:</strong> Personal trainers, yoga instructors, group classes</li>
        <li><strong>Beauty & hair:</strong> Mobile hairdressers, beauty therapists, massage</li>
        <li><strong>Alternative therapies:</strong> Naturopathy, acupuncture, remedial massage</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Retail & Shopping
      </h3>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Groceries:</strong> Russell Island Supa IGA, Macleay shopping centres (see <a href="/articles/food-dining" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Food & Dining Guide</a>)</li>
        <li><strong>Hardware:</strong> Building supplies, tools, garden equipment</li>
        <li><strong>Pharmacy:</strong> Prescriptions, over-the-counter medicines, health products</li>
        <li><strong>Post Office:</strong> Australia Post services, parcels, banking</li>
        <li><strong>Gifts & homewares:</strong> Local crafts, art, homewares</li>
        <li><strong>Second-hand stores:</strong> Op shops, vintage, pre-loved goods</li>
      </ul>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Using The Classifieds
      </h2>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        What You Can Buy & Sell
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        The <a href="/classifieds" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Classifieds section</a> is a thriving community marketplace:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Vehicles:</strong> Cars, boats, trailers, golf carts, motorcycles, parts</li>
        <li><strong>Property:</strong> Houses for sale/rent, land, holiday rentals</li>
        <li><strong>Furniture:</strong> Lounges, beds, tables, outdoor furniture</li>
        <li><strong>Electronics:</strong> Computers, TVs, phones, appliances</li>
        <li><strong>Marine equipment:</strong> Fishing gear, kayaks, boat accessories, dive gear</li>
        <li><strong>Tools & machinery:</strong> Power tools, garden equipment, generators</li>
        <li><strong>Sporting goods:</strong> Bikes, golf clubs, gym equipment, sports gear</li>
        <li><strong>Household items:</strong> Kitchenware, linen, decor, kids toys</li>
        <li><strong>Building materials:</strong> Timber, bricks, roofing, leftover supplies</li>
        <li><strong>Plants & garden:</strong> Seedlings, pots, compost, garden art</li>
        <li><strong>Pets & animals:</strong> (Responsible rehoming only - no breeding sales)</li>
        <li><strong>Services:</strong> Babysitting, tutoring, pet-sitting, odd jobs</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        How to Post a Classified Ad
      </h3>
      <ol style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Create free account:</strong> Register with email and island location</li>
        <li><strong>Choose category:</strong> Select most relevant category for your item</li>
        <li><strong>Write compelling title:</strong> Be specific (e.g., "2018 Quintrex 4.5m Boat - Russell Island" vs. "Boat for sale")</li>
        <li><strong>Add detailed description:</strong>
          <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
            <li>Condition (new, excellent, good, fair)</li>
            <li>Specifications & features</li>
            <li>Reason for sale</li>
            <li>Island location & pickup details</li>
            <li>Ferry accessibility (if buyer needs to collect)</li>
          </ul>
        </li>
        <li><strong>Upload photos:</strong> Up to 6 photos (well-lit, clear, multiple angles)</li>
        <li><strong>Set price:</strong> Fixed price, negotiable, or free</li>
        <li><strong>Contact preferences:</strong> Phone, email, or messaging system</li>
        <li><strong>Publish:</strong> Goes live immediately (free for residents)</li>
      </ol>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Tips for Successful Buying & Selling
      </h3>
      <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '4px solid #3b82f6', marginBottom: '1.5rem' }}>
        <h4 style={{ fontSize: 'clamp(1.1rem, 2.7vw, 1.2rem)', fontWeight: 600, color: '#2d3748', marginBottom: '0.75rem' }}>
          For Sellers:
        </h4>
        <ul style={{ fontSize: 'clamp(0.95rem, 2.3vw, 1.05rem)', lineHeight: 1.7, color: '#4a5568', marginLeft: '1.2rem' }}>
          <li>Price competitively (research similar items)</li>
          <li>Take quality photos in good lighting</li>
          <li>Be honest about condition and any defects</li>
          <li>Specify if item is on island or mainland</li>
          <li>Respond promptly to inquiries</li>
          <li>Consider ferry costs for mainland buyers</li>
          <li>Accept flexible payment (cash, bank transfer)</li>
          <li>Mark as SOLD once item is gone</li>
        </ul>
      </div>

      <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '0.5rem', borderLeft: '4px solid #10b981', marginBottom: '1.5rem' }}>
        <h4 style={{ fontSize: 'clamp(1.1rem, 2.7vw, 1.2rem)', fontWeight: 600, color: '#2d3748', marginBottom: '0.75rem' }}>
          For Buyers:
        </h4>
        <ul style={{ fontSize: 'clamp(0.95rem, 2.3vw, 1.05rem)', lineHeight: 1.7, color: '#4a5568', marginLeft: '1.2rem' }}>
          <li>Ask detailed questions before viewing</li>
          <li>Inspect in person when possible</li>
          <li>Check seller's island location (pickup logistics)</li>
          <li>Negotiate respectfully</li>
          <li>Arrange transport (especially for large items)</li>
          <li>Meet in public places for safety</li>
          <li>Verify vehicle VINs and registration</li>
          <li>Get receipts for expensive purchases</li>
        </ul>
      </div>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Safety & Community Guidelines
      </h3>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Prohibited items:</strong> Weapons, illegal items, alcohol/tobacco to minors, endangered species</li>
        <li><strong>Pet sales:</strong> Responsible rehoming only (no puppy farms or breeding for profit)</li>
        <li><strong>Scams:</strong> Never send money before viewing item, avoid wire transfers to strangers</li>
        <li><strong>Privacy:</strong> Don't share personal details publicly (use messaging system)</li>
        <li><strong>Disputes:</strong> Contact platform support if issues arise</li>
        <li><strong>Report listings:</strong> Flag suspicious or inappropriate ads</li>
      </ul>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        For Business Owners: Maximizing Your Listing
      </h2>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Creating a Standout Business Profile
      </h3>
      <ol style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Professional branding:</strong> High-quality logo and business photos</li>
        <li><strong>Compelling description:</strong> Highlight your unique value proposition
          <ul style={{ marginTop: '0.5rem', marginLeft: '1.5rem' }}>
            <li>Years of experience</li>
            <li>Qualifications & certifications</li>
            <li>Island-specific expertise</li>
            <li>What sets you apart from competitors</li>
          </ul>
        </li>
        <li><strong>Complete all fields:</strong> Don't leave sections blank (reduces trust)</li>
        <li><strong>Showcase your work:</strong> Upload before/after photos, project galleries</li>
        <li><strong>List all services:</strong> Don't assume customers know everything you do</li>
        <li><strong>Pricing transparency:</strong> Give examples, starting prices, or package deals</li>
        <li><strong>Response time commitment:</strong> Set expectations (e.g., "quotes within 24 hours")</li>
        <li><strong>Social proof:</strong> Encourage happy customers to leave reviews</li>
      </ol>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Why Upgrade to Premium?
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        For just <strong>$14.90/month</strong>, premium listings deliver measurable ROI:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>4x more views:</strong> Featured placement at top of search results</li>
        <li><strong>Homepage exposure:</strong> Rotating carousel spot seen by all visitors</li>
        <li><strong>Higher conversion:</strong> Full profiles with photos convert 3x better than basic listings</li>
        <li><strong>Customer trust:</strong> Reviews & ratings build credibility</li>
        <li><strong>Inquiry forms:</strong> Capture leads even when you're busy</li>
        <li><strong>Analytics:</strong> Track views, clicks, and inquiries to optimize your listing</li>
        <li><strong>Affordable:</strong> Less than $0.50/day for prime advertising space</li>
      </ul>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        <strong>ROI Example:</strong> If your premium listing generates just 1-2 extra jobs per month, it pays for itself many times over. Most businesses report 5-10 additional inquiries monthly after upgrading.
      </p>
      <a 
        href="/upgrade" 
        style={{ 
          display: 'inline-block',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
          color: 'white', 
          padding: '1rem 2rem', 
          borderRadius: '0.5rem', 
          fontWeight: 600, 
          textDecoration: 'none',
          fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
          marginBottom: '2rem'
        }}
      >
        ⭐ Upgrade to Premium - $14.90/month →
      </a>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Managing Customer Reviews
      </h3>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Request reviews:</strong> Ask satisfied customers to leave feedback</li>
        <li><strong>Respond to all reviews:</strong> Thank positive reviews, address concerns professionally</li>
        <li><strong>Use feedback:</strong> Improve services based on customer suggestions</li>
        <li><strong>Don't fake reviews:</strong> Authenticity is crucial in a small community</li>
        <li><strong>Showcase testimonials:</strong> Add your best reviews to your profile description</li>
      </ul>

      <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, color: '#1a202c', marginTop: '3rem', marginBottom: '1.5rem', borderBottom: '3px solid #3b82f6', paddingBottom: '0.5rem' }}>
        Supporting the Local Island Economy
      </h2>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        Why Buy Local?
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        Choosing island businesses strengthens our community:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li><strong>Circular economy:</strong> Money spent locally circulates 3-4 times (creates more jobs and prosperity)</li>
        <li><strong>Faster service:</strong> Island tradies are already here - no ferry delays for mainland contractors</li>
        <li><strong>Local knowledge:</strong> Islanders understand unique challenges (septic systems, water tanks, ferry logistics)</li>
        <li><strong>Community connection:</strong> Build relationships with neighbors</li>
        <li><strong>Reliable:</strong> Local businesses depend on reputation - exceptional service is essential</li>
        <li><strong>Emergency availability:</strong> Island tradies can respond quickly to urgent issues</li>
        <li><strong>Support jobs:</strong> Keep employment opportunities on the islands</li>
      </ul>

      <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginTop: '2rem', marginBottom: '1rem' }}>
        When to Use Mainland Services
      </h3>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        It's perfectly acceptable to source from mainland when:
      </p>
      <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginBottom: '1.5rem', marginLeft: '1.5rem' }}>
        <li>Service not available on islands (e.g., specialized medical procedures)</li>
        <li>Significant cost savings justify ferry time/expense</li>
        <li>Bulk shopping for better variety (groceries, hardware)</li>
        <li>Specialized professional services (e.g., specialist doctors, legal)</li>
      </ul>
      <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, color: '#4a5568', marginBottom: '1.5rem' }}>
        <em>Tip: Many island businesses can source materials from mainland suppliers on your behalf, combining local service with competitive pricing.</em>
      </p>

      <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: 'clamp(2rem, 5vw, 3rem)', borderRadius: '1rem', marginTop: '3rem', color: 'white' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>
          Start Connecting with Island Businesses Today
        </h2>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.7, marginBottom: '1.5rem', opacity: 0.95 }}>
          Whether you're searching for a trusted tradie, selling your boat, or promoting your business, The Bay Islands platform is your one-stop community hub. Join thousands of islanders supporting local!
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
            Browse Directory
          </a>
          <a 
            href="/classifieds" 
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
            View Classifieds
          </a>
          <a 
            href="/upgrade" 
            style={{ 
              background: '#fbbf24', 
              color: '#1a202c', 
              padding: '0.75rem 1.5rem', 
              borderRadius: '0.5rem', 
              fontWeight: 600, 
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            ⭐ Go Premium
          </a>
        </div>
      </div>

      <div style={{ marginTop: '3rem', padding: '2rem', background: '#f7fafc', borderRadius: '0.5rem', borderLeft: '4px solid #3b82f6' }}>
        <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#2d3748', marginBottom: '1rem' }}>
          🔗 Related Resources
        </h3>
        <ul style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 1.8, color: '#4a5568', marginLeft: '1.5rem' }}>
          <li><a href="/directory" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Full Business Directory</a></li>
          <li><a href="/classifieds" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Browse Classifieds Marketplace</a></li>
          <li><a href="/jobs" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Job Board & Employment</a></li>
          <li><a href="/events" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Community Events Calendar</a></li>
          <li><a href="/upgrade" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Premium Business Listings - $14.90/month</a></li>
          <li><a href="/islands/russell" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Russell Island Business Directory</a></li>
          <li><a href="/islands/macleay" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Macleay Island Business Directory</a></li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#edf2f7', borderRadius: '0.5rem' }}>
        <h3 style={{ fontSize: 'clamp(1.125rem, 2.8vw, 1.25rem)', fontWeight: 600, color: '#2d3748', marginBottom: '0.75rem' }}>
          📞 Platform Support
        </h3>
        <ul style={{ fontSize: 'clamp(0.95rem, 2.3vw, 1.05rem)', lineHeight: 1.7, color: '#4a5568', marginLeft: '1.5rem', marginBottom: 0 }}>
          <li><strong>General inquiries:</strong> info@thebayislands.au</li>
          <li><strong>Business listings support:</strong> directory@thebayislands.au</li>
          <li><strong>Classifieds support:</strong> classifieds@thebayislands.au</li>
          <li><strong>Report issues:</strong> Use "Report" button on individual listings</li>
          <li><strong>Premium upgrades:</strong> <a href="/upgrade" style={{ color: '#3b82f6', textDecoration: 'underline' }}>Visit upgrade page</a> or call (07) 3409 9000</li>
        </ul>
      </div>
    </ArticleLayout>
  );
}
