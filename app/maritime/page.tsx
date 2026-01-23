'use client'

import React from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { marinasAndRamps, ferryTerminals, transportConnections, infrastructureUpdates, fishingSpots } from '@/lib/maritime-data'

export default function MaritimePage() {
  return (
    <div className="page-container">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Articles', href: '/articles' },
          { label: 'Boating & Maritime' }
        ]} />
        
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontSize: '2.5em', fontWeight: 700, marginBottom: 12, color: '#0b1727' }}>
            ⛵ Boating & Maritime Infrastructure
          </h1>
          <p style={{ fontSize: '1.1em', color: '#666', lineHeight: 1.6, marginBottom: 20 }}>
            Your comprehensive guide to marinas, boat ramps, ferry terminals, parking facilities, transport connections, and fishing spots across Russell Island, Macleay Island, Lamb Island, Karragarra Island, and the Redlands Coast.
          </p>
        </div>

        {/* Quick Access */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginBottom: 40 }}>
          {[
            { icon: '⚓', label: 'Marinas', id: 'marinas' },
            { icon: '🚤', label: 'Boat Ramps', id: 'marinas' },
            { icon: '⛴️', label: 'Ferry Terminals', id: 'ferries' },
            { icon: '🎣', label: 'Fishing Spots', id: 'fishing' },
            { icon: '🅿️', label: 'Parking', id: 'transport' },
            { icon: '🚍', label: 'Transport', id: 'transport' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#section-${item.id}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
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

        {/* Marinas & Boat Ramps */}
        <section id="section-marinas" style={{ marginBottom: 50 }}>
          <h2 style={{ fontSize: '1.8em', fontWeight: 700, marginBottom: 24, color: '#0b1727', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: '1.5em' }}>⚓</span>
            Marinas & Boat Ramps
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: 20 }}>
            {marinasAndRamps.map((marina, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '20px',
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
                <div style={{ display: 'flex', alignItems: 'start', gap: 12, marginBottom: 12 }}>
                  <div style={{ fontSize: '2em' }}>{marina.icon}</div>
                  <div>
                    <h3 style={{ fontSize: '1.2em', fontWeight: 700, color: '#0b1727', margin: '0 0 4px 0' }}>
                      {marina.name}
                    </h3>
                    <p style={{ color: '#0066b3', fontWeight: 600, margin: 0, fontSize: '0.9em' }}>
                      {marina.island}
                    </p>
                  </div>
                </div>

                <p style={{ color: '#666', fontSize: '0.9em', marginBottom: 12, margin: '0 0 12px 0' }}>
                  {marina.location}
                </p>

                <div style={{ marginBottom: 12 }}>
                  <p style={{ fontWeight: 600, color: '#0b1727', marginBottom: 8, margin: '0 0 8px 0', fontSize: '0.9em' }}>
                    Services:
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {marina.services.map((service, idx) => (
                      <span key={idx} style={{
                        background: '#e8f4f8',
                        color: '#0066b3',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontSize: '0.85em',
                        fontWeight: 600
                      }}>
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <p style={{ color: '#666', fontSize: '0.9em', marginBottom: 12, margin: '0 0 12px 0' }}>
                  🅿️ {marina.parking}
                </p>

                {marina.website && (
                  <a
                    href={marina.website}
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
                    Visit Website →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Ferry Terminals */}
        <section id="section-ferries" style={{ marginBottom: 50 }}>
          <h2 style={{ fontSize: '1.8em', fontWeight: 700, marginBottom: 24, color: '#0b1727', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: '1.5em' }}>⛴️</span>
            Ferry Terminals & Services
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: 20 }}>
            {ferryTerminals.map((terminal, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '20px',
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
                <h3 style={{ fontSize: '1.2em', fontWeight: 700, color: '#0b1727', marginBottom: 8, margin: '0 0 8px 0' }}>
                  {terminal.name}
                </h3>
                <p style={{ color: '#0066b3', fontWeight: 600, marginBottom: 8, margin: '0 0 8px 0', fontSize: '0.9em' }}>
                  {terminal.island}
                </p>

                <p style={{ color: '#666', fontSize: '0.9em', marginBottom: 8, margin: '0 0 8px 0' }}>
                  📍 {terminal.location}
                </p>

                <p style={{ color: '#666', fontSize: '0.9em', marginBottom: 8, margin: '0 0 8px 0', fontWeight: 600 }}>
                  🚢 {terminal.ferryOperator}
                </p>

                <p style={{ color: '#666', fontSize: '0.9em', marginBottom: 12, margin: '0 0 12px 0' }}>
                  ⏰ {terminal.schedule}
                </p>

                <div style={{ marginBottom: 12 }}>
                  <p style={{ fontWeight: 600, color: '#0b1727', marginBottom: 8, margin: '0 0 8px 0', fontSize: '0.85em' }}>
                    Routes:
                  </p>
                  <ul style={{ margin: 0, paddingLeft: 20, color: '#666', fontSize: '0.85em' }}>
                    {terminal.routes.map((route, idx) => (
                      <li key={idx}>{route}</li>
                    ))}
                  </ul>
                </div>

                {terminal.website && (
                  <a
                    href={terminal.website}
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
                    Schedules & Info →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Transport & Parking */}
        <section id="section-transport" style={{ marginBottom: 50 }}>
          <h2 style={{ fontSize: '1.8em', fontWeight: 700, marginBottom: 24, color: '#0b1727', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: '1.5em' }}>🚍</span>
            Transport & Parking
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {transportConnections.map((transport, idx) => (
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
                <div style={{ fontSize: '2em', marginBottom: 12 }}>{transport.icon}</div>
                <h3 style={{ fontSize: '1.1em', fontWeight: 700, color: '#0b1727', marginBottom: 8, margin: '0 0 8px 0' }}>
                  {transport.name}
                </h3>
                <p style={{ color: '#666', fontSize: '0.9em', marginBottom: 12, margin: '0 0 12px 0' }}>
                  {transport.description}
                </p>
                <a
                  href={transport.url}
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
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Fishing Spots */}
        <section id="section-fishing" style={{ marginBottom: 50 }}>
          <h2 style={{ fontSize: '1.8em', fontWeight: 700, marginBottom: 24, color: '#0b1727', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: '1.5em' }}>🎣</span>
            Fishing Spots & Information
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16 }}>
            {fishingSpots.map((spot, idx) => (
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
                <h3 style={{ fontSize: '1.2em', fontWeight: 700, color: '#0b1727', marginBottom: 8, margin: '0 0 8px 0' }}>
                  {spot.name}
                </h3>
                <p style={{ color: '#0066b3', fontWeight: 600, marginBottom: 8, margin: '0 0 8px 0', fontSize: '0.9em' }}>
                  {spot.island}
                </p>

                <p style={{ color: '#666', fontSize: '0.9em', marginBottom: 8, margin: '0 0 8px 0' }}>
                  📍 {spot.location}
                </p>

                <p style={{ color: '#666', fontSize: '0.9em', marginBottom: 8, margin: '0 0 8px 0' }}>
                  🎣 Type: {spot.type}
                </p>

                <div style={{ marginBottom: 12 }}>
                  <p style={{ fontWeight: 600, color: '#0b1727', marginBottom: 4, margin: '0 0 4px 0', fontSize: '0.9em' }}>
                    Best Species:
                  </p>
                  <p style={{ color: '#666', fontSize: '0.85em', margin: 0 }}>
                    {spot.bestSpecies.join(', ')}
                  </p>
                </div>

                <p style={{ color: '#666', fontSize: '0.9em', margin: '12px 0 0 0' }}>
                  📅 {spot.seasonalInfo}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Infrastructure Updates */}
        <section style={{ marginBottom: 50 }}>
          <h2 style={{ fontSize: '1.8em', fontWeight: 700, marginBottom: 24, color: '#0b1727', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: '1.5em' }}>🏗️</span>
            Infrastructure Updates
          </h2>
          <div style={{ display: 'grid', gap: 16 }}>
            {infrastructureUpdates.map((update, idx) => (
              <div
                key={idx}
                style={{
                  background: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '20px',
                  display: 'flex',
                  gap: 16,
                  alignItems: 'start'
                }}
              >
                <div style={{ fontSize: '2em' }}>{update.icon}</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.2em', fontWeight: 700, color: '#0b1727', marginBottom: 4, margin: '0 0 4px 0' }}>
                    {update.title}
                  </h3>
                  <p style={{ color: '#666', marginBottom: 8, margin: '0 0 8px 0' }}>
                    {update.description}
                  </p>
                  <div style={{ display: 'flex', gap: 16, fontSize: '0.9em', color: '#666' }}>
                    <div>
                      Status: <span style={{ fontWeight: 700, color: update.status === 'In Progress' ? '#ff9800' : update.status === 'Planning' ? '#2196f3' : '#4caf50' }}>
                        {update.status}
                      </span>
                    </div>
                    <div>Expected: {update.completion}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Boating & Maritime Infrastructure",
        "description": "Marinas, boat ramps, ferry terminals, and boating information for Bay Islands",
        "url": "https://thebayislands.au/maritime",
        "mainEntity": {
          "@type": "LocalBusiness",
          "name": "Bay Islands Maritime Services",
          "areaServed": [
            {"@type": "Place", "name": "Russell Island"},
            {"@type": "Place", "name": "Macleay Island"},
            {"@type": "Place", "name": "Lamb Island"},
            {"@type": "Place", "name": "Karragarra Island"},
            {"@type": "Place", "name": "Redlands Coast"}
          ]
        }
      })}} />
    </div>
  )
}
