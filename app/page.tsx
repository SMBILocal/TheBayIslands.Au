export default function Home(){
  return (
    <section>
      {/* Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0,102,179,0.75) 0%, rgba(200,90,23,0.75) 100%), url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&h=500&fit=crop&q=80) center/cover',
        backgroundBlendMode: 'overlay',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '40px 20px',
        marginBottom: '40px'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: 'clamp(2em, 5vw, 3.5em)', margin: '0 0 20px 0', fontWeight: 800 }}>Welcome to the Bay Islands Hub</h1>
          <p style={{ fontSize: 'clamp(1em, 2vw, 1.3em)', margin: 0, opacity: 0.95 }}>Discover local businesses, jobs, events and community across South Morton Bay</p>
        </div>
      </div>

      <div className="hero container">
        <div style={{flex:1}}>
          <h2>Your Local Community Hub</h2>
          <p className="muted">Articles • Jobs • Community Events • Business Directory • Buy & Sell classifieds</p>
        </div>
        <div style={{minWidth:'280px'}}>
          <div className="card">
            <h3>Get started</h3>
            <p className="muted">Create listings, post jobs and connect with the local community.</p>
          </div>
        </div>
      </div>

      {/* Discover the Islands Section */}
      <section style={{padding:'clamp(40px, 8vw, 60px) 0', background:'#f8fafc'}}>
        <div className="container">
          <h2>Explore the Islands 🏝️</h2>
          <p className="muted" style={{maxWidth:600, marginBottom:32}}>The South Moreton Bay Islands (Russell, Macleay, Lamb & Karragarra) offer island living with mainland convenience. Discover each island's unique character, amenities, and lifestyle.</p>
          
          <div className="grid" style={{marginTop:12, marginBottom:40}}>
            <a href="/islands/russell" className="card" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>
              <h3>🏝️ Russell Island</h3>
              <p className="muted">The hub with shops, schools, and community. Population 2,000+</p>
            </a>
            <a href="/islands/macleay" className="card" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>
              <h3>⛳ Macleay Island</h3>
              <p className="muted">Upscale & serene with golf, fine dining & art. Population 1,200+</p>
            </a>
            <a href="/islands" className="card" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>
              <h3>🌴 All Islands Guide</h3>
              <p className="muted">Complete guides to Lamb & Karragarra plus island comparisons.</p>
            </a>
          </div>
          <div style={{textAlign:'center'}}>
            <a href="/islands" style={{color:'#0066b3', fontWeight:600, fontSize:'1.05em', textDecoration:'none'}}>View complete islands guide →</a>
          </div>
        </div>
      </section>

      <section style={{padding:'24px 0'}}>
        <div className="container">
          <h2>Popular sections</h2>
          <div className="grid" style={{marginTop:12}}>
            <a href="/articles" className="card" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>
              <h3>📰 Articles</h3>
              <p className="muted">Local news and guides for SMBI residents and visitors.</p>
            </a>
            <a href="/jobs" className="card" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>
              <h3>💼 Jobs</h3>
              <p className="muted">Jobs in hospitality, retail and services across the islands.</p>
            </a>
            <a href="/events" className="card" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>
              <h3>🎉 Events</h3>
              <p className="muted">Community events, markets, and island gatherings.</p>
            </a>
            <a href="/classifieds" className="card" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer'}}>
              <h3>🛒 Buy & Sell</h3>
              <p className="muted">Classifieds marketplace for furniture, boats, cars and more.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section style={{padding:'clamp(40px, 8vw, 60px) 0', background:'#fff'}}>
        <div className="container">
          <h2>Why Living on the Bay Islands?</h2>
          <p className="muted" style={{maxWidth:700, marginBottom:32}}>Island life blends relaxed charm with modern amenities. Here's why people choose the South Moreton Bay Islands:</p>
          
          <div className="grid" style={{marginTop:12}}>
            <div className="card">
              <h3>🏘️ Tight-Knit Community</h3>
              <p className="muted">Active clubs, weekly markets, festivals, and genuine local connections.</p>
            </div>
            <div className="card">
              <h3>⛳ Recreation & Lifestyle</h3>
              <p className="muted">Golf, bowls, boating, water sports, walking trails, and outdoor clubs.</p>
            </div>
            <div className="card">
              <h3>🏫 Quality Education</h3>
              <p className="muted">Island schools with community focus + easy mainland access for secondary.</p>
            </div>
            <div className="card">
              <h3>🌿 Natural Beauty</h3>
              <p className="muted">Beaches, wildlife, heritage trails, nature reserves & sustainable living.</p>
            </div>
            <div className="card">
              <h3>💼 Work & Employment</h3>
              <p className="muted">Local jobs + growing remote work opportunities with excellent internet.</p>
            </div>
            <div className="card">
              <h3>🏡 Property Investment</h3>
              <p className="muted">Growing demand for island properties from $700k to luxury beachfront homes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{padding:'clamp(40px, 8vw, 60px) 0', background:'linear-gradient(135deg, #0066b3 0%, #c85a17 100%)', color:'white'}}>
        <div className="container" style={{textAlign:'center'}}>
          <h2 style={{color:'white', marginBottom:16}}>Ready to Explore Island Living?</h2>
          <p style={{opacity:0.95, marginBottom:32, maxWidth:600, marginLeft:'auto', marginRight:'auto'}}>Browse properties, jobs, community events, and local directory listings</p>
          
          <div style={{display:'flex', gap:'12px', justifyContent:'center', flexWrap:'wrap'}}>
            <a href="/classifieds" style={{background:'white', color:'#0066b3', padding:'12px 28px', borderRadius:8, textDecoration:'none', fontWeight:600, cursor:'pointer', minHeight:'44px', display:'flex', alignItems:'center'}}>
              View Properties
            </a>
            <a href="/jobs" style={{background:'rgba(255,255,255,0.2)', color:'white', padding:'12px 28px', borderRadius:8, textDecoration:'none', fontWeight:600, border:'2px solid white', cursor:'pointer', minHeight:'44px', display:'flex', alignItems:'center'}}>
              Browse Jobs
            </a>
            <a href="/directory" style={{background:'rgba(255,255,255,0.2)', color:'white', padding:'12px 28px', borderRadius:8, textDecoration:'none', fontWeight:600, border:'2px solid white', cursor:'pointer', minHeight:'44px', display:'flex', alignItems:'center'}}>
              Business Directory
            </a>
          </div>
        </div>
      </section>
    </section>
  )
}
