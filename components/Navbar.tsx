"use client"
import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"
import { useAuth } from "@/lib/AuthContext"

export default function Navbar(){
  const [menuOpen, setMenuOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const { user, signOut } = useAuth()

  const handleLogout = async () => {
    await signOut()
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container nav">
        <button className="hamburger" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          <Link href="/" onClick={()=>setMenuOpen(false)}>🏠 Home</Link>
          
          {/* Areas Dropdown */}
          <div className="nav-dropdown" style={{ position: 'relative' }}>
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
              onMouseLeave={() => setAreasOpen(false)}
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
          
          <Link href="/articles" onClick={()=>setMenuOpen(false)}>📰 Articles</Link>
          <Link href="/jobs" onClick={()=>setMenuOpen(false)}>💼 Jobs</Link>
          <Link href="/events" onClick={()=>setMenuOpen(false)}>🎉 Events</Link>
          <Link href="/directory" onClick={()=>setMenuOpen(false)}>📍 Directory</Link>
          <Link href="/classifieds" onClick={()=>setMenuOpen(false)}>🛒 Buy & Sell</Link>
          <Link href="/upgrade" onClick={()=>setMenuOpen(false)} style={{ color: '#c85a17', fontWeight: '600' }}>
            ⭐ Go Premium
          </Link>
        </nav>
      </div>
    </header>
  )
}
