'use client'

import React from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { newsSources, newspapersAndPublications, broadcastMedia } from '@/lib/news-sources'

export default function LocalNewsPage() {
  return (
    <div className="page-container">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Articles', href: '/articles' },
          { label: 'Local News' }
        ]} />
        
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontSize: '2.5em', fontWeight: 700, marginBottom: 12, color: '#0b1727' }}>
            📰 Local News Sources
          </h1>
          <p style={{ fontSize: '1.1em', color: '#666', lineHeight: 1.6, marginBottom: 20 }}>
            Stay informed with the latest news from Bay Islands and Redlands Coast. Find local newspapers, news websites, community publications, and radio/broadcast media serving our region.
          </p>
          <div style={{ background: '#e8f4f8', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #0066b3' }}>
            <p style={{ margin: 0, color: '#0b1727', fontWeight: 600 }}>
              💡 Share Local News: Have a story to tell? Contact your local news outlet or <Link href="/contact" style={{ color: '#0066b3', textDecoration: 'none', fontWeight: 700 }}>reach out to us →</Link>
            </p>
          </div>
        </div>

        {/* Quick Access */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12, marginBottom: 40 }}>
          {[
            { icon: '📰', label: 'Newspapers', id: 'newspapers' },
            { icon: '🌐', label: 'News Sites', id: 'feeds' },
            { icon: '📻', label: 'Radio', id: 'radio' },
            { icon: '📺', label: 'TV News', id: 'tv' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#section-${item.id}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '18px',
                background: '#f0f0f0',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#0b1727',
                transition: 'all 0.3s',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#e8f4f8'
                ;(e.currentTarget as HTMLElement).style.borderColor = '#0066b3'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = '#f0f0f0'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'transparent'
              }}
            >
              <div style={{ fontSize: '1.8em', marginBottom: 8 }}>{item.icon}</div>
              <div style={{ fontWeight: 600, textAlign: 'center', fontSize: '0.9em' }}>{item.label}</div>
            </a>
          ))}
        </div>

        {/* Newspapers & Publications */}
        <section id="section-newspapers" style={{ marginBottom: 50 }}>
          <h2 style={{ fontSize: '1.8em', fontWeight: 700, marginBottom: 24, color: '#0b1727', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: '1.5em' }}>📰</span>
            Newspapers & Publications
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
            {newspapersAndPublications.map((pub, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '24px',
                  background: 'white',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,102,179,0.1)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = '#0066b3'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  ;(e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0'
                }}
              >
                <div style={{ fontSize: '2.5em', marginBottom: 12 }}>{pub.icon}</div>
                <h3 style={{ fontSize: '1.3em', fontWeight: 700, color: '#0b1727', marginBottom: 4, margin: '0 0 4px 0' }}>
                  {pub.name}
                </h3>
                <p style={{ color: '#0066b3', fontWeight: 600, marginBottom: 12, margin: '0 0 12px 0', fontSize: '0.95em' }}>
                  {pub.type}
                </p>
                <p style={{ color: '#666', lineHeight: 1.6, marginBottom: 12 }}>
                  {pub.description}
                </p>
                <p style={{ color: '#666', fontSize: '0.9em', marginBottom: 16, margin: '0 0 16px 0' }}>
                  📡 {pub.circulation}
                </p>
                <a
                  href={pub.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: '#0066b3',
                    color: 'white',
                    padding: '12px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#004999'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#0066b3'
                  }}
                >
                  Visit Website →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* News Feeds & Websites */}
        <section id="section-feeds" style={{ marginBottom: 50 }}>
          <h2 style={{ fontSize: '1.8em', fontWeight: 700, marginBottom: 24, color: '#0b1727', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: '1.5em' }}>🌐</span>
            News Feeds & Websites
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16 }}>
            {newsSources.map((source, idx) => (
              <div
                key={idx}
                style={{
                  background: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '20px',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,102,179,0.1)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = '#0066b3'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  ;(e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div style={{ fontSize: '2em' }}>{source.icon}</div>
                  <div>
                    <h3 style={{ fontSize: '1.1em', fontWeight: 700, color: '#0b1727', margin: 0 }}>
                      {source.name}
                    </h3>
                    <p style={{ color: '#0066b3', fontWeight: 600, margin: '0', fontSize: '0.85em' }}>
                      {source.region}
                    </p>
                  </div>
                </div>

                <p style={{ color: '#666', lineHeight: 1.6, marginBottom: 16 }}>
                  {source.description}
                </p>

                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: '#f0f0f0',
                    color: '#0066b3',
                    padding: '10px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9em',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#e0e0e0'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#f0f0f0'
                  }}
                >
                  Subscribe to RSS Feed →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Radio & Broadcast */}
        <section id="section-radio" style={{ marginBottom: 50 }}>
          <h2 style={{ fontSize: '1.8em', fontWeight: 700, marginBottom: 24, color: '#0b1727', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: '1.5em' }}>📻</span>
            Radio & Broadcast Media
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
            {broadcastMedia.map((media, idx) => (
              <div
                key={idx}
                style={{
                  background: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '20px',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,102,179,0.1)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = '#0066b3'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  ;(e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <div style={{ fontSize: '2em' }}>{media.icon}</div>
                  <div>
                    <h3 style={{ fontSize: '1.1em', fontWeight: 700, color: '#0b1727', margin: 0 }}>
                      {media.name}
                    </h3>
                    <p style={{ color: '#0066b3', fontWeight: 600, margin: '0', fontSize: '0.85em' }}>
                      {media.type}
                    </p>
                  </div>
                </div>

                <p style={{ color: '#666', lineHeight: 1.6, marginBottom: 12 }}>
                  {media.description}
                </p>

                <div style={{ marginBottom: 12, fontSize: '0.9em', color: '#666' }}>
                  <p style={{ margin: '0 0 4px 0' }}>
                    📡 <strong>Frequency:</strong> {media.frequency}
                  </p>
                  <p style={{ margin: 0 }}>
                    ⏱️ <strong>Service:</strong> {media.service}
                  </p>
                </div>

                <a
                  href={media.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: '#0066b3',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9em',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#004999'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#0066b3'
                  }}
                >
                  Listen Live →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section style={{ background: '#f9f9f9', padding: '40px', borderRadius: '8px', marginTop: 50 }}>
          <h2 style={{ fontSize: '1.6em', fontWeight: 700, marginBottom: 24, color: '#0b1727' }}>
            ℹ️ News & Media Information
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <div>
              <h3 style={{ fontWeight: 700, marginBottom: 8, color: '#0066b3' }}>📰 Stay Updated</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Subscribe to local news feeds and enable notifications to get breaking news, community events, and local updates delivered to your device.
              </p>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, marginBottom: 8, color: '#0066b3' }}>🔗 Multiple Platforms</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Local news is available across newspapers, websites, RSS feeds, radio, and TV. Choose your preferred way to stay informed.
              </p>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, marginBottom: 8, color: '#0066b3' }}>📢 Community Stories</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Have a story worth sharing? Contact local news outlets with your Bay Islands or Redlands Coast community news.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Local News Sources",
        "description": "Local newspapers and news sources for Bay Islands and Redlands",
        "url": "https://thebayislands.au/news",
        "mainEntity": newsSources.map(source => ({
          "@type": "NewsMediaOrganization",
          "name": source.name,
          "url": source.url,
          "areaServed": source.region
        }))
      })}} />
    </div>
  )
}
