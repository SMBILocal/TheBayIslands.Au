import React from "react"
import Link from "next/link"

const linkStyle: React.CSSProperties = { color: '#0ea5e9', textDecoration: 'none', fontWeight: 600, fontSize: 14 }

export default function Footer(){
  return (
    <footer style={{borderTop: '1px solid #e2e8f0', background: '#0b1727', color: 'white', marginTop: 64}}>
      <div style={{maxWidth: 1200, margin: '0 auto', padding: '32px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24}}>
        <div>
          <div style={{fontWeight: 700, fontSize: 18}}>thebayislands.au</div>
          <div style={{opacity: 0.8, marginTop: 8}}>Local hub for SMBI — directory, jobs, classifieds, events, and business upgrades.</div>
        </div>
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
        <div>
          <div style={{fontWeight: 700, marginBottom: 12}}>Account</div>
          <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8}}>
            <li><Link href="/login" style={linkStyle}>Login</Link></li>
            <li><Link href="/signup" style={linkStyle}>Sign up</Link></li>
            <li><Link href="/upgrade" style={linkStyle}>Upgrade & Pricing</Link></li>
            <li><Link href="/site-map" style={linkStyle}>Sitemap</Link></li>
          </ul>
        </div>
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
      <div style={{borderTop: '1px solid rgba(255,255,255,0.08)', padding: '12px 20px', textAlign: 'center', color: 'rgba(255,255,255,0.7)'}}>
        © {new Date().getFullYear()} thebayislands.au — All rights reserved.
      </div>
    </footer>
  )
}
