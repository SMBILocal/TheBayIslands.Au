import React from "react"
import Link from "next/link"

const linkStyle: React.CSSProperties = { color: '#0066b3', textDecoration: 'none', fontWeight: 600, fontSize: 14 }

export default function Footer(){
  return (
    <footer style={{borderTop: '1px solid #e2e8f0', background: '#0b1727', color: 'white', marginTop: 64}}>
      <div style={{maxWidth: 1200, margin: '0 auto', padding: '32px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24}}>
        {/* Column 1: Brand */}
        <div>
          <div style={{fontWeight: 700, fontSize: 18}}>thebayislands.au</div>
          <div style={{opacity: 0.8, marginTop: 8}}>Local hub for SMBI — directory, jobs, classifieds, events, and business upgrades. Created and operated by SMBI Local (smbilocal.au).</div>
        </div>
        
        {/* Column 2: Explore */}
        <div>
          <div style={{fontWeight: 700, marginBottom: 12}}>Explore</div>
          <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8}}>
            <li><Link href="/directory" style={linkStyle}>Directory</Link></li>
            <li><Link href="/articles" style={linkStyle}>Articles</Link></li>
            <li><Link href="/events" style={linkStyle}>Events</Link></li>
            <li><Link href="/classifieds" style={linkStyle}>Classifieds</Link></li>
            <li><Link href="/jobs" style={linkStyle}>Jobs</Link></li>
          </ul>
        </div>
        
        {/* Column 3: Account */}
        <div>
          <div style={{fontWeight: 700, marginBottom: 12}}>Account</div>
          <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8}}>
            <li><Link href="/login" style={linkStyle}>Login</Link></li>
            <li><Link href="/signup" style={linkStyle}>Sign up</Link></li>
            <li><Link href="/upgrade" style={linkStyle}>Upgrade & Pricing</Link></li>
            <li><Link href="/donate" style={linkStyle}>Donate</Link></li>
          </ul>
        </div>
        
        {/* Column 4: Policies */}
        <div>
          <div style={{fontWeight: 700, marginBottom: 12}}>Policies</div>
          <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8}}>
            <li><Link href="/terms" style={linkStyle}>Terms of Service</Link></li>
            <li><Link href="/privacy" style={linkStyle}>Privacy Policy</Link></li>
            <li><Link href="/refunds" style={linkStyle}>Refund & Cancellation</Link></li>
            <li><Link href="/cookies" style={linkStyle}>Cookies Policy</Link></li>
            <li><Link href="/environment" style={linkStyle}>Environmental</Link></li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Section: Acknowledgment & Copyright */}
      <div style={{maxWidth: 1200, margin: '0 auto', padding: '0 20px 16px 20px', color: 'rgba(255,255,255,0.85)'}}>
        <div style={{borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 12, fontSize: 14, lineHeight: 1.6}}>
          We acknowledge the Quandamooka people as the Traditional Custodians of the lands and waters of the Southern Moreton Bay Islands — including Canaipa/Kanopa (Russell Island) — and pay respect to Elders past and present.
        </div>
        <div style={{paddingTop: 8, fontSize: 14, lineHeight: 1.6}}>
          thebayislands.au is created and operated by SMBI Local (smbilocal.au). Commercial transactions, donations, and fundraising are managed by SMBI Local Ltd (charitable). Consider supporting the community via the Donate link.
        </div>
        
        {/* Copyright and bottom links row */}
        <div style={{paddingTop: 12, display: 'grid', gridTemplateColumns: '1fr auto', gap: 20, alignItems: 'center', fontSize: 13, borderTop: '1px solid rgba(255,255,255,0.08)'}}>
          <div style={{color: 'rgba(255,255,255,0.7)'}}>
            © {new Date().getFullYear()} thebayislands.au — All rights reserved.
          </div>
          <div style={{display: 'flex', gap: 16, justifyContent: 'flex-end'}}>
            <Link href="/site-map" style={{...linkStyle, fontSize: 12}}>Sitemap</Link>
            <span style={{color: 'rgba(255,255,255,0.3)'}}>•</span>
            <Link href="/terms" style={{...linkStyle, fontSize: 12}}>Terms</Link>
            <span style={{color: 'rgba(255,255,255,0.3)'}}>•</span>
            <Link href="/privacy" style={{...linkStyle, fontSize: 12}}>Policies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
