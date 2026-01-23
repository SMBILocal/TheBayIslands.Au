'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const sectionsData = [
  {
    id: 'intro',
    title: 'Welcome to Quandamooka Country',
    icon: '🌏',
    content: `Quandamooka Country encompasses the lands and waters of Minjerribah (North Stradbroke Island), South Stradbroke Island, Mulgumpin (Moreton Island), and the South Moreton Bay Islands. These are the ancestral lands of the Quandamooka People, with a rich cultural heritage and living traditions spanning over 20,000 years.`
  },
  {
    id: 'history',
    title: 'Ancient Continuity & History',
    icon: '🏛️',
    content: `The Quandamooka People, comprising the Nunukul, Goenpul and Nughi clans, are among Australia's oldest continuous cultures. Archaeological evidence shows human habitation on Minjerribah dating back at least 20,000–25,000 years, reflecting a deep connection to Country, seasonal cycles, and sustainable practices that continue today.`
  },
  {
    id: 'culture',
    title: 'Culture, Land & Sea',
    icon: '🪶',
    content: `Quandamooka culture is embedded in land, sea and ceremony. Sacred freshwater lakes, middens, and ceremonial grounds maintain spiritual significance. Traditional food sources like fish, shellfish, dugong, and bush tucker are part of sustainable stewardship practices. Art, storytelling, songlines, and corroborees preserve and transmit knowledge across generations.`
  },
  {
    id: 'native-title',
    title: 'Native Title & Modern Custodianship',
    icon: '⚖️',
    content: `In 2011, the Federal Court recognised the Quandamooka People's native title rights across Minjerribah and surrounding islands. Today, Quandamooka Yoolooburrabee Aboriginal Corporation (QYAC) manages cultural heritage, biodiversity, and sustainable community initiatives, ensuring the protection and celebration of Quandamooka Country for future generations.`
  },
  {
    id: 'events',
    title: 'Living Culture: Festivals & Events',
    icon: '📅',
    content: `The annual Quandamooka Festival celebrates culture through dance, music, storytelling, and traditional performances. Community workshops, whale welcome ceremonies, and cultural tours offer opportunities to learn and engage with living Quandamooka traditions. Check local event calendars for upcoming programs and performances.`
  },
  {
    id: 'sacred-sites',
    title: 'Sacred Sites & Story Grounds',
    icon: '🌳',
    content: `Sacred lakes, ceremonial grounds, and coastal areas hold deep spiritual significance for the Quandamooka People. Respecting these areas is both a legal and moral obligation. Visitors are encouraged to contact QYAC for cultural guidance and heritage inquiries before visiting sensitive sites.`
  },
  {
    id: 'resources',
    title: 'Community Resources & Learning',
    icon: '📚',
    content: `Connect with Quandamooka culture through official resources and community programs. Learn about traditional practices, participate in cultural tours, and support local initiatives that preserve and celebrate this ancient heritage.`
  }
]

const resources = [
  { name: 'Quandamooka Yoolooburrabee Aboriginal Corporation (QYAC)', url: 'https://www.qyac.net.au', icon: '🏢' },
  { name: 'Redland City Council – Quandamooka Country', url: 'https://www.redland.qld.gov.au', icon: '🏛️' },
  { name: 'Quandamooka Festival', url: 'https://quandamookafestival.com.au', icon: '🎭' },
  { name: 'Queensland Parks – Indigenous Heritage', url: 'https://parks.qld.gov.au', icon: '🌿' }
]

export default function QuandamookaCountryPage() {
  const [openSection, setOpenSection] = useState<string>('intro')

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Quandamooka Country – History, Culture & Living Traditions",
            "description": "Discover Quandamooka Country: the history, culture, sacred sites, festivals, and living traditions of the Quandamooka People across South Moreton Bay Islands.",
            "author": { "@type": "Organization", "name": "thebayislands.au" },
            "publisher": { 
              "@type": "Organization", 
              "name": "thebayislands.au",
              "logo": { "@type": "ImageObject", "url": "https://thebayislands.au/logo.png" }
            },
            "datePublished": "2026-01-23",
            "mainEntityOfPage": { 
              "@type": "WebPage", 
              "@id": "https://thebayislands.au/articles/quandamooka-country" 
            }
          })
        }}
      />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: 16, color: '#0b1727' }}>
          Quandamooka Country
        </h1>
        <p style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)', color: '#475569', maxWidth: 800, margin: '0 auto', lineHeight: 1.7 }}>
          History, Culture & Living Traditions of the Quandamooka People
        </p>
      </div>

      {/* Acknowledgement of Country */}
      <div style={{ 
        background: 'linear-gradient(135deg, #0b1727 0%, #1e3a5f 100%)', 
        color: 'white', 
        padding: 32, 
        borderRadius: 12, 
        marginBottom: 40,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: 1.8, margin: 0 }}>
          🙏 <strong>Acknowledgement of Country:</strong> We acknowledge the Quandamooka People as the Traditional Custodians of the lands and waters we call Minjerribah (North Stradbroke Island), Mulgumpin (Moreton Island), and the South Moreton Bay Islands. We pay our respects to Elders past, present, and emerging, and recognise their continuing connection to Country.
        </p>
      </div>

      {/* Collapsible Sections */}
      <div style={{ display: 'grid', gap: 20, marginBottom: 48 }}>
        {sectionsData.map((section) => (
          <div 
            key={section.id} 
            style={{ 
              border: '1px solid #e2e8f0', 
              borderRadius: 12, 
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              transition: 'box-shadow 0.2s',
            }}
          >
            <button
              onClick={() => setOpenSection(openSection === section.id ? '' : section.id)}
              style={{
                width: '100%',
                padding: '20px 24px',
                background: openSection === section.id ? '#f8fafc' : 'white',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'left',
                transition: 'background 0.2s'
              }}
            >
              <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: 600, color: '#0b1727', margin: 0 }}>
                <span style={{ marginRight: 12 }}>{section.icon}</span>
                {section.title}
              </h2>
              <span style={{ fontSize: '1.25rem', color: '#64748b' }}>
                {openSection === section.id ? '▲' : '▼'}
              </span>
            </button>
            {openSection === section.id && (
              <div style={{ 
                padding: '24px', 
                background: 'white',
                borderTop: '1px solid #e2e8f0'
              }}>
                <p style={{ 
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)', 
                  lineHeight: 1.8, 
                  color: '#475569',
                  margin: 0,
                  whiteSpace: 'pre-line'
                }}>
                  {section.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Community Resources */}
      <div style={{ 
        background: '#f8fafc', 
        padding: 32, 
        borderRadius: 12, 
        marginBottom: 48 
      }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, marginBottom: 24, color: '#0b1727' }}>
          📚 Community Resources & Learning
        </h2>
        <div style={{ display: 'grid', gap: 16 }}>
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: 16,
                background: 'white',
                borderRadius: 8,
                textDecoration: 'none',
                color: '#0066b3',
                border: '1px solid #e2e8f0',
                transition: 'all 0.2s',
                fontSize: 'clamp(1rem, 2vw, 1.125rem)'
              }}
            >
              <span style={{ fontSize: '1.5rem', marginRight: 16 }}>{resource.icon}</span>
              <span style={{ fontWeight: 500 }}>{resource.name}</span>
              <span style={{ marginLeft: 'auto', fontSize: '0.875rem', color: '#64748b' }}>→</span>
            </a>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div style={{ 
        textAlign: 'center', 
        background: 'linear-gradient(135deg, #0066b3 0%, #004d8a 100%)', 
        color: 'white', 
        padding: 48, 
        borderRadius: 12,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: 16 }}>
          🤝 Respect & Participate
        </h2>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: 1.7, marginBottom: 32, maxWidth: 700, margin: '0 auto 32px' }}>
          We acknowledge the Quandamooka People and commit to caring for Country. Explore cultural events, support local initiatives, and help preserve these lands and waters for future generations.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            href="/events" 
            style={{
              display: 'inline-block',
              padding: '14px 28px',
              background: 'white',
              color: '#0066b3',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              transition: 'transform 0.2s',
            }}
          >
            📅 View Cultural Events
          </Link>
          <Link 
            href="/community" 
            style={{
              display: 'inline-block',
              padding: '14px 28px',
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: '2px solid white',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              transition: 'all 0.2s',
            }}
          >
            👥 Join Community Programs
          </Link>
        </div>
      </div>

      {/* Navigation Links */}
      <div style={{ marginTop: 48, textAlign: 'center', paddingTop: 32, borderTop: '1px solid #e2e8f0' }}>
        <p style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)', color: '#64748b', marginBottom: 16 }}>
          Explore more about the Bay Islands:
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/articles" style={{ color: '#0066b3', textDecoration: 'none', fontWeight: 500 }}>← All Articles</Link>
          <Link href="/islands" style={{ color: '#0066b3', textDecoration: 'none', fontWeight: 500 }}>Explore Islands</Link>
          <Link href="/about-smbi-local" style={{ color: '#0066b3', textDecoration: 'none', fontWeight: 500 }}>About SMBI →</Link>
        </div>
      </div>
    </div>
  )
}
