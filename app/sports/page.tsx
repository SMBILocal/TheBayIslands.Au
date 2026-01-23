'use client'

import React from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { sportsFeedsData, upcomingSportsEvents, type SportsFeed } from '@/lib/sports-data'

export default function SportsGuidePage() {
  // Group feeds by island
  const feedsByIsland = sportsFeedsData.reduce((acc, feed) => {
    if (!acc[feed.island]) acc[feed.island] = []
    acc[feed.island].push(feed)
    return acc
  }, {} as Record<string, SportsFeed[]>)

  const islands = Object.keys(feedsByIsland).sort()

  return (
    <div className="page-container">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Articles', href: '/articles' },
          { label: 'Sports Guide' }
        ]} />
        
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontSize: '2.5em', fontWeight: 700, marginBottom: 12, color: '#0b1727' }}>
            ⚽ Local Sports Guide
          </h1>
          <p style={{ fontSize: '1.1em', color: '#666', lineHeight: 1.6, marginBottom: 20 }}>
            Your comprehensive guide to sports clubs, competitions, and events across Russell Island, Macleay Island, Lamb Island, Karragarra Island, and the Redlands Coast. From rugby and netball to bowls and basketball, find your next match or tournament.
          </p>
          <div style={{ background: '#e8f4f8', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #0066b3' }}>
            <p style={{ margin: 0, color: '#0b1727', fontWeight: 600 }}>
              ⏰ Upcoming Events: {upcomingSportsEvents.length} matches and competitions scheduled
            </p>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <section style={{ marginBottom: 50 }}>
          <h2 style={{ fontSize: '1.8em', fontWeight: 700, marginBottom: 20, color: '#0b1727' }}>
            📅 Upcoming Events
          </h2>
          <div style={{ display: 'grid', gap: 16 }}>
            {upcomingSportsEvents.map((event, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '20px',
                  background: 'white',
                  display: 'flex',
                  gap: 20,
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
                <div style={{ fontSize: '2em', minWidth: '50px', textAlign: 'center' }}>
                  {event.sportIcon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.2em', fontWeight: 700, color: '#0b1727', margin: '0 0 8px 0' }}>
                    {event.title}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, fontSize: '0.95em', color: '#666', marginBottom: 12 }}>
                    <div>📅 {new Date(event.startDate).toLocaleDateString()}</div>
                    <div>🕐 {new Date(event.startDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                    <div>📍 {event.locationName}</div>
                    <div>🏝️ {event.island}</div>
                  </div>
                  <p style={{ color: '#666', margin: '8px 0', fontSize: '0.9em' }}>
                    {event.locationAddress}
                  </p>
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      background: '#0066b3',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontWeight: 600,
                      marginTop: 8
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = '#004999'
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = '#0066b3'
                    }}
                  >
                    View Details →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sports Clubs by Island */}
        {islands.map((island) => (
          <section key={island} style={{ marginBottom: 50 }}>
            <h2 style={{ fontSize: '1.8em', fontWeight: 700, marginBottom: 24, color: '#0b1727', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: '1.5em' }}>🏝️</span>
              {island}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
              {feedsByIsland[island].map((feed: SportsFeed, idx) => (
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
                  <div style={{ fontSize: '2.5em', marginBottom: 12 }}>{feed.icon}</div>
                  <h3 style={{ fontSize: '1.1em', fontWeight: 700, color: '#0b1727', margin: '0 0 8px 0' }}>
                    {feed.club}
                  </h3>
                  <p style={{ color: '#0066b3', fontWeight: 600, marginBottom: 8, margin: '0 0 8px 0' }}>
                    {feed.sport}
                  </p>
                  <p style={{ color: '#666', fontSize: '0.9em', marginBottom: 12, margin: '0 0 12px 0' }}>
                    {feed.notes}
                  </p>
                  <div style={{ display: 'flex', gap: 12 }}>
                    {feed.website && (
                      <a
                        href={feed.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
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
                        Website
                      </a>
                    )}
                    <a
                      href={feed.feedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
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
                      Events →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Info Section */}
        <section style={{ marginTop: 60, background: '#f9f9f9', padding: '40px', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.6em', fontWeight: 700, marginBottom: 16, color: '#0b1727' }}>
            ℹ️ Sports Information
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
            <div>
              <h3 style={{ fontWeight: 700, marginBottom: 8, color: '#0b1727' }}>Getting Started</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                New to the islands? Contact your local club directly for newcomers' information and junior programs.
              </p>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, marginBottom: 8, color: '#0b1727' }}>Facilities</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Most clubs have accessible facilities. Contact ahead for details on parking, change rooms, and accessibility.
              </p>
            </div>
            <div>
              <h3 style={{ fontWeight: 700, marginBottom: 8, color: '#0b1727' }}>Support Local</h3>
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Sponsor a local team or volunteer. Your support keeps community sports thriving!
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Local Sports Guide",
        "description": "Sports clubs and events for Bay Islands and Redlands",
        "url": "https://thebayislands.au/sports",
        "mainEntity": upcomingSportsEvents.map(event => ({
          "@type": "SportsEvent",
          "name": event.title,
          "startDate": event.startDate,
          "location": {
            "@type": "Place",
            "name": event.locationName,
            "address": event.locationAddress
          }
        }))
      })}} />
    </div>
  )
}
