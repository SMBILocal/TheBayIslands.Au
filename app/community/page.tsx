'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { communityNotices, demographicCategories, type Notice } from '@/lib/community-data'

export default function CommunityNoticeboardPage() {
  return (
    <div className="page-container">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Events', href: '/events' },
          { label: 'Community Noticeboard' }
        ]} />
        
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontSize: '2.5em', fontWeight: 700, marginBottom: 12, color: '#0b1727' }}>
            🗣️ Community Noticeboard
          </h1>
          <p style={{ fontSize: '1.1em', color: '#666', lineHeight: 1.6, marginBottom: 20 }}>
            Discover community events, classes, volunteer opportunities, and local initiatives for all ages and interests across Russell Island, Macleay Island, Lamb Island, Karragarra Island, and the Redlands Coast.
          </p>
          <div style={{ background: '#e8f4f8', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #0066b3' }}>
            <p style={{ margin: 0, color: '#0b1727', fontWeight: 600 }}>
              💡 Post a Free Notice: Have a community event or need volunteers? <Link href="/community/post-notice" style={{ color: '#0066b3', textDecoration: 'none', fontWeight: 700 }}>Post for free →</Link>
            </p>
          </div>
        </div>

        {/* Demographic Filter Tabs */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: '1.3em', fontWeight: 700, marginBottom: 16, color: '#0b1727' }}>
            Browse by Age Group & Interest
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12 }}>
            {demographicCategories.map((category) => {
              const categoryNotices = communityNotices.filter(n => n.category === category.id)
              return (
                <Link
                  key={category.id}
                  href={`#section-${category.id}`}
                  style={{
                    display: 'block',
                    padding: '16px',
                    background: category.color,
                    borderRadius: '8px',
                    textDecoration: 'none',
                    color: '#0b1727',
                    border: '2px solid transparent',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  }}
                >
                  <div style={{ fontSize: '1.8em', marginBottom: 8 }}>{category.icon}</div>
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>{category.label}</div>
                  <div style={{ fontSize: '0.9em', opacity: 0.8 }}>{categoryNotices.length} items</div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Notices by Category */}
        {demographicCategories.map((category) => {
          const categoryNotices = communityNotices.filter(n => n.category === category.id)
          return (
            <section key={category.id} id={`section-${category.id}`} style={{ marginBottom: 50 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <h2 style={{ fontSize: '1.8em', fontWeight: 700, color: '#0b1727', margin: 0 }}>
                  {category.icon} {category.label}
                </h2>
                <div style={{ background: '#f0f0f0', padding: '4px 12px', borderRadius: '20px', fontWeight: 600, color: '#666' }}>
                  {categoryNotices.length}
                </div>
              </div>

              <div style={{ display: 'grid', gap: 16 }}>
                {categoryNotices.length > 0 ? (
                  categoryNotices.map((notice: Notice) => (
                    <div
                      key={notice.id}
                      style={{
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        padding: '20px',
                        background: 'white',
                        transition: 'all 0.3s',
                        cursor: 'pointer',
                        display: 'flex',
                        gap: 20
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
                      <div style={{ fontSize: '2.5em', minWidth: '60px', textAlign: 'center' }}>
                        {notice.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '1.2em', fontWeight: 700, color: '#0b1727', marginBottom: 8, margin: '0 0 8px 0' }}>
                          {notice.title}
                        </h3>
                        <p style={{ color: '#666', marginBottom: 12, lineHeight: 1.5, margin: '0 0 12px 0' }}>
                          {notice.description}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontSize: '0.9em', color: '#666', marginBottom: 12 }}>
                          <div>📍 {notice.location}</div>
                          {notice.date && <div>📅 {notice.date}</div>}
                          {notice.time && <div>🕐 {notice.time}</div>}
                          {notice.price && <div>💰 {notice.price}</div>}
                        </div>
                        {notice.url && (
                          <Link
                            href={notice.url}
                            style={{
                              display: 'inline-block',
                              background: '#0066b3',
                              color: 'white',
                              padding: '8px 16px',
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
                            Learn More →
                          </Link>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <p style={{ color: '#999', fontStyle: 'italic' }}>
                    No notices currently available for this category. Check back soon!
                  </p>
                )}
              </div>
            </section>
          )
        })}

        {/* CTA Section */}
        <section style={{ marginTop: 60, background: '#f9f9f9', padding: '40px', borderRadius: '8px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8em', fontWeight: 700, marginBottom: 16, color: '#0b1727' }}>
            Have Something to Share?
          </h2>
          <p style={{ fontSize: '1.1em', color: '#666', marginBottom: 24, maxWidth: 600, margin: '0 auto 24px' }}>
            Post a community notice, event, or opportunity for free. Help connect islanders and mainland residents!
          </p>
          <Link
            href="/community/post-notice"
            style={{
              display: 'inline-block',
              background: '#0066b3',
              color: 'white',
              padding: '14px 32px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1.1em',
              transition: 'background 0.3s'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#004999'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = '#0066b3'
            }}
          >
            📝 Post a Free Notice
          </Link>
        </section>
      </div>

      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Community Noticeboard",
        "description": "Community notices, events, and opportunities for Bay Islands and Redlands",
        "url": "https://thebayislands.au/community",
        "mainEntity": {
          "@type": "LocalBusiness",
          "name": "Community Noticeboard",
          "description": "Local community noticeboard for Bay Islands and Redlands Coast",
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
