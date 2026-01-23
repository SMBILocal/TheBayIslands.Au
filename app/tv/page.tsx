'use client'

import React from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { localTvStations, tvGuideCategories, sampleTvSchedule } from '@/lib/tv-stations-data'

export default function LocalTvPage() {
  return (
    <div className="page-container">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Articles', href: '/articles' },
          { label: 'TV Stations' }
        ]} />
        
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: '2.5em', fontWeight: 700, marginBottom: 12, color: '#0b1727' }}>
            📺 Local TV Stations & Guide
          </h1>
          <p style={{ fontSize: '1.1em', color: '#666', lineHeight: 1.6, marginBottom: 20 }}>
            Comprehensive guide to television stations serving the Southern Moreton Bay Islands and Redlands Coast. Find live streaming options, programming schedules, and local news coverage.
          </p>
        </div>

        {/* TV Guide CTA */}
        <Link href="/tv/guide" style={{ textDecoration: 'none', display: 'block', marginBottom: 40 }}>
          <div style={{ 
            background: 'linear-gradient(135deg, #0066b3 0%, #004d8c 100%)', 
            padding: '32px', 
            borderRadius: '12px', 
            color: 'white',
            boxShadow: '0 4px 20px rgba(0,102,179,0.2)',
            transition: 'all 0.3s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
            ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(0,102,179,0.3)'
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
            ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,102,179,0.2)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 280 }}>
                <h2 style={{ fontSize: '1.8em', fontWeight: 700, marginBottom: 12, margin: '0 0 12px 0', color: 'white' }}>
                  📅 Full TV Guide — What's On Now
                </h2>
                <p style={{ fontSize: '1.1em', opacity: 0.95, lineHeight: 1.6, marginBottom: 16, margin: '0 0 16px 0' }}>
                  View the complete television programming schedule for all channels. Filter by time, category, and channel. Save favorites and set reminders when you sign in!
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: '0.9em', opacity: 0.9 }}>
                  <span>⏰ By Time Slot</span>
                  <span>•</span>
                  <span>📂 By Category</span>
                  <span>•</span>
                  <span>⭐ Save Favorites</span>
                  <span>•</span>
                  <span>🔔 Set Reminders</span>
                </div>
              </div>
              <div style={{ 
                background: 'rgba(255,255,255,0.2)', 
                padding: '16px 32px', 
                borderRadius: '8px', 
                fontWeight: 700, 
                fontSize: '1.2em',
                border: '2px solid rgba(255,255,255,0.3)',
                whiteSpace: 'nowrap'
              }}>
                View TV Guide →
              </div>
            </div>
          </div>
        </Link>

        {/* Quick Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 40 }}>
          <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: '2em', fontWeight: 700, color: '#0066b3', marginBottom: 8 }}>
              {localTvStations.length}
            </div>
            <div style={{ color: '#666', fontWeight: 600 }}>Major TV Stations</div>
          </div>
          <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: '2em', fontWeight: 700, color: '#0066b3', marginBottom: 8 }}>
              {tvGuideCategories.length}
            </div>
            <div style={{ color: '#666', fontWeight: 600 }}>Program Categories</div>
          </div>
          <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: '2em', fontWeight: 700, color: '#0066b3', marginBottom: 8 }}>
              24/7
            </div>
            <div style={{ color: '#666', fontWeight: 600 }}>Coverage Available</div>
          </div>
        </div>

        {/* TV Stations */}
        <section style={{ marginBottom: 50 }}>
          <h2 style={{ fontSize: '1.8em', fontWeight: 700, marginBottom: 24, color: '#0b1727' }}>
            📡 Local TV Stations
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: 20 }}>
            {localTvStations.map((station, idx) => (
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
                <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div>
                    <h3 style={{ fontSize: '1.3em', fontWeight: 700, color: '#0b1727', margin: '0 0 8px 0' }}>
                      {station.name}
                    </h3>
                    {station.channelNumber && (
                      <p style={{ color: '#0066b3', fontWeight: 600, margin: 0 }}>
                        Channel {station.channelNumber}
                      </p>
                    )}
                  </div>
                  <div style={{ fontSize: '2.5em' }}>📺</div>
                </div>

                <p style={{ color: '#666', lineHeight: 1.6, marginBottom: 16 }}>
                  {station.description}
                </p>

                <div style={{ marginBottom: 16 }}>
                  <p style={{ fontWeight: 600, color: '#0b1727', marginBottom: 8 }}>Program Types:</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {station.broadcastTypes.map((type, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: '#e8f4f8',
                          color: '#0066b3',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '0.9em',
                          fontWeight: 600
                        }}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>

                {station.website && (
                  <a
                    href={station.website}
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
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Program Categories */}
        <section style={{ marginBottom: 50 }}>
          <h2 style={{ fontSize: '1.8em', fontWeight: 700, marginBottom: 24, color: '#0b1727' }}>
            📋 Program Categories
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }}>
            {tvGuideCategories.map((category) => (
              <div
                key={category.id}
                style={{
                  background: '#f9f9f9',
                  padding: '20px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#f0f0f0'
                  ;(e.currentTarget as HTMLElement).style.borderColor = '#0066b3'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#f9f9f9'
                  ;(e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0'
                }}
              >
                <div style={{ fontSize: '2.5em', marginBottom: 12 }}>{category.icon}</div>
                <h3 style={{ fontWeight: 700, color: '#0b1727', margin: 0 }}>
                  {category.label}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* Sample TV Guide */}
        <section style={{ marginBottom: 50 }}>
          <h2 style={{ fontSize: '1.8em', fontWeight: 700, marginBottom: 24, color: '#0b1727' }}>
            ⏰ Sample Weekly Schedule
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              background: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
              <thead>
                <tr style={{ background: '#0066b3', color: 'white' }}>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: 700 }}>Channel</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: 700 }}>Time</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: 700 }}>Program</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: 700 }}>Category</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: 700 }}>Description</th>
                </tr>
              </thead>
              <tbody>
                {sampleTvSchedule.map((item, idx) => (
                  <tr key={idx} style={{
                    borderBottom: '1px solid #e2e8f0',
                    background: idx % 2 === 0 ? '#ffffff' : '#f9f9f9',
                    transition: 'background 0.2s'
                  }} onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = '#e8f4f8'
                  }} onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = idx % 2 === 0 ? '#ffffff' : '#f9f9f9'
                  }}>
                    <td style={{ padding: '12px 16px', fontWeight: 700, color: '#0066b3' }}>Channel {item.channel}</td>
                    <td style={{ padding: '12px 16px', color: '#666' }}>{item.time}</td>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: '#0b1727' }}>{item.program}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <span style={{
                        background: '#e8f4f8',
                        color: '#0066b3',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.85em',
                        fontWeight: 600
                      }}>
                        {tvGuideCategories.find(c => c.id === item.category)?.label}
                      </span>
                    </td>
                    <td style={{ padding: '12px 16px', color: '#666', fontSize: '0.9em' }}>{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 16, fontSize: '0.9em', color: '#666', fontStyle: 'italic' }}>
            * Sample schedule - visit individual station websites for current, complete programming details
          </p>
        </section>

        {/* Getting Started */}
        <section style={{ background: '#f9f9f9', padding: '40px', borderRadius: '8px', marginTop: 50 }}>
          <h2 style={{ fontSize: '1.6em', fontWeight: 700, marginBottom: 24, color: '#0b1727' }}>
            🎯 Getting Started
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
            <div>
              <h3 style={{ fontWeight: 700, marginBottom: 12, color: '#0066b3' }}>📺 TV Reception</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                All channels listed broadcast to the Bay Islands. Check coverage and local TV info from your provider.
              </p>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, marginBottom: 12, color: '#0066b3' }}>📱 Streaming Options</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Many stations offer online streaming and catch-up services. Visit their websites for live and on-demand viewing.
              </p>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, marginBottom: 12, color: '#0066b3' }}>🔔 Local News Alerts</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Subscribe to local news alerts from your favorite station to stay informed about Bay Islands events.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Local TV Stations",
        "description": "TV stations and programming guide for Bay Islands and Redlands",
        "url": "https://thebayislands.au/tv",
        "mainEntity": localTvStations.map(station => ({
          "@type": "TVStation",
          "name": station.name,
          "url": station.website,
          "broadcastFrequency": station.channelNumber
        }))
      })}} />
    </div>
  )
}
