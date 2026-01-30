"use client"
import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"
import { useAuth } from "@/lib/AuthContext"

interface NavbarProps {
  menuOpen?: boolean;
  setMenuOpen?: (open: boolean) => void;
}

export default function Navbar({ menuOpen: externalMenuOpen, setMenuOpen: externalSetMenuOpen }: NavbarProps = {}){
  const [internalMenuOpen, setInternalMenuOpen] = useState(false)
  const menuOpen = externalMenuOpen ?? internalMenuOpen;
  const setMenuOpen = externalSetMenuOpen ?? setInternalMenuOpen;
  const navRef = React.useRef<HTMLDivElement>(null);
  const hamburgerRef = React.useRef<HTMLButtonElement>(null);
  
  const [areasOpen, setAreasOpen] = useState(false)
  const [articlesOpen, setArticlesOpen] = useState(false)
  const [eventsOpen, setEventsOpen] = useState(false)
  const { user, signOut } = useAuth()
  
  // Close menu when clicking outside (but not when clicking hamburger)
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (navRef.current && !navRef.current.contains(target) && 
          hamburgerRef.current && !hamburgerRef.current.contains(target)) {
        if (menuOpen) setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen, setMenuOpen])

  const handleLogout = async () => {
    await signOut()
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container nav">
        <button ref={hamburgerRef} className="hamburger" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav ref={navRef} className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          <Link href="/" onClick={()=>setMenuOpen(false)}>🏠 Home</Link>
          
          {/* Areas Dropdown */}
          <div className="nav-dropdown" style={{ position: 'relative' }} onMouseLeave={() => setAreasOpen(false)}>
            <button 
              className="nav-dropdown-toggle"
              onClick={() => setAreasOpen(!areasOpen)}
              onMouseEnter={() => setAreasOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                  fontSize: 'clamp(13px, 2vw, 14px)',
                fontWeight: '500',
                fontFamily: 'inherit',
                padding: '8px 10px',
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                  gap: '6px',
                borderRadius: '8px',
                transition: 'background 0.2s',
              }}
            >
                📍 <span style={{ whiteSpace: 'nowrap' }}>Areas <span style={{ fontSize: '0.7em', marginLeft: '2px' }}>▼</span></span>
            </button>
            <div 
              className={`nav-dropdown-menu ${areasOpen ? 'show' : ''}`}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                background: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                padding: '12px 0',
                minWidth: '200px',
                display: areasOpen ? 'block' : 'none',
                zIndex: 1000
              }}
            >
              <div style={{ padding: '8px 16px', fontWeight: 'bold', fontSize: '0.85em', color: '#666', textTransform: 'uppercase' }}>
                Islands
              </div>
              <Link href="/islands/russell" onClick={()=>{setMenuOpen(false); setAreasOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Russell Island
              </Link>
              <Link href="/islands/macleay" onClick={()=>{setMenuOpen(false); setAreasOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Macleay Island
              </Link>
              <Link href="/islands/lamb" onClick={()=>{setMenuOpen(false); setAreasOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Lamb Island
              </Link>
              <Link href="/islands/karragarra" onClick={()=>{setMenuOpen(false); setAreasOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Karragarra Island
              </Link>
              <Link href="/islands" onClick={()=>{setMenuOpen(false); setAreasOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#0066b3', textDecoration: 'none', fontWeight: '600' }}>
                All Islands →
              </Link>
              
              <div style={{ borderTop: '1px solid #eee', margin: '8px 0' }}></div>
              
              <div style={{ padding: '8px 16px', fontWeight: 'bold', fontSize: '0.85em', color: '#666', textTransform: 'uppercase' }}>
                Mainland
              </div>
              <Link href="/areas/mainland/redland-bay" onClick={()=>{setMenuOpen(false); setAreasOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Redland Bay
              </Link>
              <Link href="/areas/mainland/victoria-point" onClick={()=>{setMenuOpen(false); setAreasOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Victoria Point
              </Link>
              <Link href="/areas/mainland/cleveland" onClick={()=>{setMenuOpen(false); setAreasOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Cleveland
              </Link>
              <Link href="/areas/mainland/capalaba" onClick={()=>{setMenuOpen(false); setAreasOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Capalaba
              </Link>
            </div>
          </div>
          
          {/* Articles Dropdown */}
          <div className="nav-dropdown" style={{ position: 'relative' }} onMouseLeave={() => setArticlesOpen(false)}>
            <button 
              className="nav-dropdown-toggle"
              onClick={() => setArticlesOpen(!articlesOpen)}
              onMouseEnter={() => setArticlesOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                  fontSize: 'clamp(13px, 2vw, 14px)',
                fontWeight: '500',
                fontFamily: 'inherit',
                padding: '8px 10px',
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                  gap: '6px',
                borderRadius: '8px',
                transition: 'background 0.2s',
              }}
            >
                📰 <span style={{ whiteSpace: 'nowrap' }}>Articles <span style={{ fontSize: '0.7em', marginLeft: '2px' }}>▼</span></span>
            </button>
            <div 
              className={`nav-dropdown-menu ${articlesOpen ? 'show' : ''}`}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                background: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                padding: '12px 0',
                minWidth: '200px',
                display: articlesOpen ? 'block' : 'none',
                zIndex: 1000
              }}
            >
              <Link href="/articles" onClick={()=>{setMenuOpen(false); setArticlesOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                All Articles
              </Link>
              <Link href="/news" onClick={()=>{setMenuOpen(false); setArticlesOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Local News
              </Link>
              <Link href="/maritime" onClick={()=>{setMenuOpen(false); setArticlesOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Boating & Maritime
              </Link>
              <Link href="/sports" onClick={()=>{setMenuOpen(false); setArticlesOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Sports Guide
              </Link>
              <Link href="/tv" onClick={()=>{setMenuOpen(false); setArticlesOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                TV Stations
              </Link>
            </div>
          </div>

          {/* Events Dropdown */}
          <div className="nav-dropdown" style={{ position: 'relative' }} onMouseLeave={() => setEventsOpen(false)}>
            <button 
              className="nav-dropdown-toggle"
              onClick={() => setEventsOpen(!eventsOpen)}
              onMouseEnter={() => setEventsOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                  fontSize: 'clamp(13px, 2vw, 14px)',
                fontWeight: '500',
                fontFamily: 'inherit',
                padding: '8px 10px',
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                  gap: '6px',
                borderRadius: '8px',
                transition: 'background 0.2s',
              }}
            >
                🎉 <span style={{ whiteSpace: 'nowrap' }}>Events <span style={{ fontSize: '0.7em', marginLeft: '2px' }}>▼</span></span>
            </button>
            <div 
              className={`nav-dropdown-menu ${eventsOpen ? 'show' : ''}`}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                background: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                padding: '12px 0',
                minWidth: '200px',
                display: eventsOpen ? 'block' : 'none',
                zIndex: 1000
              }}
            >
              <Link href="/events" onClick={()=>{setMenuOpen(false); setEventsOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                All Events
              </Link>
              <Link href="/community" onClick={()=>{setMenuOpen(false); setEventsOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Community Noticeboard
              </Link>
              <Link href="/sports" onClick={()=>{setMenuOpen(false); setEventsOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Sports Events
              </Link>
              <Link href="/radio" onClick={()=>{setMenuOpen(false); setEventsOpen(false)}} style={{ display: 'block', padding: '8px 16px', color: '#333', textDecoration: 'none' }}>
                Local Radio
              </Link>
            </div>
          </div>
          
          <Link href="/jobs" onClick={()=>setMenuOpen(false)}>💼 Jobs</Link>
          <Link href="/directory" onClick={()=>setMenuOpen(false)}>📍 Directory</Link>
          <Link href="/classifieds" onClick={()=>setMenuOpen(false)}>🛒 Buy & Sell</Link>
          <Link
            href="/upgrade"
            onClick={()=>setMenuOpen(false)}
            className="desktop-go-premium-link"
            style={{ color: '#c85a17', fontWeight: '600' }}
          >
            ⭐ Go Premium
          </Link>

          <div className="mobile-go-premium-cta">
            <div>
              <div style={{ fontWeight: 600, marginBottom: 6 }}>Need more visibility?</div>
              <p style={{ margin: 0, color: '#7a3411', fontSize: '0.9em' }}>
                Unlock featured placements, richer listings, and concierge support.
              </p>
            </div>
            <Link
              href="/upgrade"
              onClick={()=>setMenuOpen(false)}
            >
              ⭐ Go Premium
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
