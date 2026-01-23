'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export default function QuampiArtsCulturePage() {
  const [openSection, setOpenSection] = useState<string>('intro')

  const sections = [
    { id: 'intro', title: 'Welcome to QUAMPI', icon: '🎨' },
    { id: 'about', title: 'About the Centre', icon: '🏛️' },
    { id: 'exhibitions', title: 'Current Exhibitions', icon: '🖼️' },
    { id: 'workshops', title: 'Workshops & Programs', icon: '🎓' },
    { id: 'artists', title: 'Featured Artists', icon: '👨‍🎨' },
    { id: 'visit', title: 'Plan Your Visit', icon: '🗺️' },
    { id: 'events', title: 'Events & Festivals', icon: '🎉' }
  ]

  return (
    <div className="page-container">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Articles', href: '/articles' },
          { label: 'QUAMPI Arts & Culture Centre' }
        ]} />

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ 
            fontSize: 'clamp(2em, 5vw, 2.8em)', 
            fontWeight: 700, 
            marginBottom: 16, 
            color: '#0b1727',
            lineHeight: 1.2
          }}>
            🎨 QUAMPI Arts & Culture Centre
          </h1>
          <p style={{ fontSize: '1.2em', color: '#666', lineHeight: 1.6, marginBottom: 8 }}>
            North Stradbroke Island's Premier Indigenous Cultural Hub
          </p>
          <p style={{ fontSize: '1em', color: '#64748b', lineHeight: 1.6 }}>
            Dunwich, Minjerribah (North Stradbroke Island) — Quandamooka Country
          </p>
        </div>

        {/* Hero Stats */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: 16, 
          marginBottom: 40 
        }}>
          <div style={{ background: 'linear-gradient(135deg, #0066b3 0%, #004d8c 100%)', padding: '24px', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5em', fontWeight: 700, marginBottom: 8 }}>18,000+</div>
            <div style={{ fontSize: '0.9em', opacity: 0.95 }}>Annual Visitors</div>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)', padding: '24px', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5em', fontWeight: 700, marginBottom: 8 }}>50+</div>
            <div style={{ fontSize: '0.9em', opacity: 0.95 }}>Annual Exhibitions</div>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #059669 0%, #047857 100%)', padding: '24px', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5em', fontWeight: 700, marginBottom: 8 }}>100+</div>
            <div style={{ fontSize: '0.9em', opacity: 0.95 }}>Workshops & Programs</div>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)', padding: '24px', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5em', fontWeight: 700, marginBottom: 8 }}>60,000</div>
            <div style={{ fontSize: '0.9em', opacity: 0.95 }}>Years of Culture</div>
          </div>
        </div>

        {/* Acknowledgement */}
        <div style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
          padding: '32px', 
          borderRadius: '12px', 
          marginBottom: 40,
          borderLeft: '4px solid #0066b3'
        }}>
          <h3 style={{ fontSize: '1.3em', fontWeight: 700, marginBottom: 12, color: '#0b1727' }}>
            Acknowledgement of Country
          </h3>
          <p style={{ fontSize: '1.05em', lineHeight: 1.8, color: '#475569', margin: 0 }}>
            QUAMPI (Quandamooka Arts, Museum & Performance Institute) stands on the traditional lands of the 
            Quandamooka People. We acknowledge the Noonukul, Nughie, and Goenpul clans as the Traditional 
            Custodians of Minjerribah (North Stradbroke Island) and pay our deepest respects to Elders past, 
            present, and emerging. This centre celebrates and preserves over 60,000 years of continuous culture, 
            art, and storytelling.
          </p>
        </div>

        {/* Collapsible Sections */}
        <div style={{ marginBottom: 48 }}>
          {sections.map((section) => (
            <div
              key={section.id}
              style={{
                marginBottom: 16,
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                overflow: 'hidden',
                background: 'white',
                boxShadow: openSection === section.id ? '0 4px 12px rgba(0,102,179,0.1)' : 'none'
              }}
            >
              <button
                onClick={() => setOpenSection(openSection === section.id ? '' : section.id)}
                style={{
                  width: '100%',
                  padding: '24px',
                  background: openSection === section.id ? '#f8fafc' : 'white',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.3s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: '2em' }}>{section.icon}</span>
                  <h2 style={{ fontSize: '1.5em', fontWeight: 700, color: '#0b1727', margin: 0 }}>
                    {section.title}
                  </h2>
                </div>
                <span style={{ fontSize: '1.5em', color: '#64748b' }}>
                  {openSection === section.id ? '▲' : '▼'}
                </span>
              </button>

              {openSection === section.id && (
                <div style={{ padding: '32px 24px', borderTop: '1px solid #e2e8f0' }}>
                  {section.id === 'intro' && (
                    <div>
                      <p style={{ fontSize: '1.1em', lineHeight: 1.8, color: '#475569', marginBottom: 20 }}>
                        QUAMPI Arts & Culture Centre is the premier Indigenous cultural institution on North Stradbroke Island 
                        (Minjerribah), serving as a living testament to Quandamooka culture, art, and heritage. Located in 
                        Dunwich, the centre showcases traditional and contemporary Aboriginal art, hosts cultural workshops, 
                        and provides educational programs for all ages.
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
                        <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px' }}>
                          <div style={{ fontSize: '1.8em', marginBottom: 8 }}>🏛️</div>
                          <h4 style={{ fontSize: '1.1em', fontWeight: 700, marginBottom: 8, color: '#0b1727' }}>Cultural Hub</h4>
                          <p style={{ fontSize: '0.95em', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                            Central gathering place for Quandamooka people and visitors to celebrate Indigenous culture
                          </p>
                        </div>
                        <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px' }}>
                          <div style={{ fontSize: '1.8em', marginBottom: 8 }}>🎨</div>
                          <h4 style={{ fontSize: '1.1em', fontWeight: 700, marginBottom: 8, color: '#0b1727' }}>Art Gallery</h4>
                          <p style={{ fontSize: '0.95em', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                            Rotating exhibitions featuring traditional and contemporary Aboriginal artists
                          </p>
                        </div>
                        <div style={{ padding: '20px', background: '#f8fafc', borderRadius: '8px' }}>
                          <div style={{ fontSize: '1.8em', marginBottom: 8 }}>📚</div>
                          <h4 style={{ fontSize: '1.1em', fontWeight: 700, marginBottom: 8, color: '#0b1727' }}>Education</h4>
                          <p style={{ fontSize: '0.95em', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                            Workshops, school programs, and cultural learning experiences for all ages
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === 'about' && (
                    <div>
                      <p style={{ fontSize: '1.05em', lineHeight: 1.8, color: '#475569', marginBottom: 24 }}>
                        QUAMPI (Quandamooka Arts, Museum & Performance Institute) was established to preserve, protect, 
                        and promote Quandamooka culture for future generations. The centre operates as a cultural hub, 
                        art gallery, museum, and performance space all in one.
                      </p>
                      <h4 style={{ fontSize: '1.2em', fontWeight: 700, marginBottom: 16, color: '#0b1727' }}>Our Mission</h4>
                      <ul style={{ fontSize: '1.05em', lineHeight: 2, color: '#475569', marginBottom: 24 }}>
                        <li>Preserve and celebrate Quandamooka cultural heritage and traditions</li>
                        <li>Showcase traditional and contemporary Indigenous art from local and national artists</li>
                        <li>Provide educational programs and cultural workshops for community and visitors</li>
                        <li>Create employment and economic opportunities for Quandamooka people</li>
                        <li>Foster reconciliation and cultural understanding through art and storytelling</li>
                      </ul>
                      <h4 style={{ fontSize: '1.2em', fontWeight: 700, marginBottom: 16, color: '#0b1727' }}>Community Impact</h4>
                      <p style={{ fontSize: '1.05em', lineHeight: 1.8, color: '#475569', margin: 0 }}>
                        Since opening, QUAMPI has welcomed over 100,000 visitors, delivered 2,000+ cultural workshops, 
                        and supported 150+ Indigenous artists through exhibitions, residencies, and sales. The centre 
                        has become a vital economic and cultural anchor for North Stradbroke Island.
                      </p>
                    </div>
                  )}

                  {section.id === 'exhibitions' && (
                    <div>
                      <h4 style={{ fontSize: '1.2em', fontWeight: 700, marginBottom: 20, color: '#0b1727' }}>Featured Exhibitions</h4>
                      <div style={{ display: 'grid', gap: 20 }}>
                        {[
                          {
                            title: 'Ngaliya Ngajagu Wagari (Our Country)',
                            artist: 'Quandamooka Artists Collective',
                            description: 'Traditional paintings, weavings, and sculptures depicting Quandamooka connection to land and sea',
                            dates: 'Jan 2026 - Mar 2026'
                          },
                          {
                            title: 'Yanaguraba (Pathways)',
                            artist: 'Cameron Costello & Evelyn Robinson',
                            description: 'Contemporary photography and mixed media exploring Indigenous identity and place',
                            dates: 'Apr 2026 - Jun 2026'
                          },
                          {
                            title: 'Goenpul Stories',
                            artist: 'Elder-led community exhibition',
                            description: 'Oral histories, artifacts, and cultural objects telling stories of the Goenpul people',
                            dates: 'Jul 2026 - Sep 2026'
                          }
                        ].map((exhibition, idx) => (
                          <div key={idx} style={{ padding: '24px', background: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0066b3' }}>
                            <h5 style={{ fontSize: '1.15em', fontWeight: 700, marginBottom: 8, color: '#0b1727' }}>
                              {exhibition.title}
                            </h5>
                            <p style={{ fontSize: '0.95em', color: '#0066b3', fontWeight: 600, marginBottom: 12 }}>
                              {exhibition.artist}
                            </p>
                            <p style={{ fontSize: '1em', lineHeight: 1.7, color: '#64748b', marginBottom: 12 }}>
                              {exhibition.description}
                            </p>
                            <p style={{ fontSize: '0.9em', color: '#94a3b8', fontWeight: 600 }}>
                              📅 {exhibition.dates}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.id === 'workshops' && (
                    <div>
                      <p style={{ fontSize: '1.05em', lineHeight: 1.8, color: '#475569', marginBottom: 24 }}>
                        QUAMPI offers a range of cultural workshops and programs for all ages and skill levels. 
                        Learn traditional skills, create art, and connect with Quandamooka culture.
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                        {[
                          { title: 'Traditional Weaving', icon: '🧺', level: 'All Levels', duration: '2 hours' },
                          { title: 'Dot Painting Workshop', icon: '🎨', level: 'Beginners', duration: '3 hours' },
                          { title: 'Didgeridoo Making', icon: '🎵', level: 'Intermediate', duration: '4 hours' },
                          { title: 'Bush Tucker Tour', icon: '🌿', level: 'All Ages', duration: '2 hours' },
                          { title: 'Storytelling Sessions', icon: '📖', level: 'All Ages', duration: '1 hour' },
                          { title: 'Cultural Dance', icon: '💃', level: 'Youth Program', duration: '90 min' }
                        ].map((workshop, idx) => (
                          <div key={idx} style={{ padding: '20px', background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px' }}>
                            <div style={{ fontSize: '2.5em', marginBottom: 12 }}>{workshop.icon}</div>
                            <h5 style={{ fontSize: '1.1em', fontWeight: 700, marginBottom: 8, color: '#0b1727' }}>
                              {workshop.title}
                            </h5>
                            <div style={{ fontSize: '0.9em', color: '#64748b' }}>
                              <div style={{ marginBottom: 4 }}>📊 {workshop.level}</div>
                              <div>⏱️ {workshop.duration}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div style={{ marginTop: 24, padding: '20px', background: '#e8f4f8', borderRadius: '8px' }}>
                        <p style={{ margin: 0, color: '#0b1727', fontWeight: 600 }}>
                          💡 <strong>Book Workshops:</strong> Visit QUAMPI in person or call (07) 3409 9008 to book workshops and programs.
                        </p>
                      </div>
                    </div>
                  )}

                  {section.id === 'artists' && (
                    <div>
                      <h4 style={{ fontSize: '1.2em', fontWeight: 700, marginBottom: 20, color: '#0b1727' }}>Featured Quandamooka Artists</h4>
                      <div style={{ display: 'grid', gap: 24 }}>
                        {[
                          {
                            name: 'Emily Wurramara',
                            role: 'Musician & Songwriter',
                            description: 'Award-winning artist blending traditional language with contemporary music',
                            specialty: 'Music & Performance'
                          },
                          {
                            name: 'Fred Leone',
                            role: 'Storyteller & Elder',
                            description: 'Cultural knowledge keeper sharing Quandamooka stories and history',
                            specialty: 'Oral Traditions'
                          },
                          {
                            name: 'Joe Geia',
                            role: 'Musician & Cultural Ambassador',
                            description: 'Legendary performer and cultural advocate for Indigenous rights',
                            specialty: 'Cultural Music'
                          },
                          {
                            name: 'Evelyn Robinson',
                            role: 'Visual Artist',
                            description: 'Contemporary painter exploring themes of identity and connection to Country',
                            specialty: 'Painting & Mixed Media'
                          }
                        ].map((artist, idx) => (
                          <div key={idx} style={{ display: 'flex', gap: 20, padding: '24px', background: '#f8fafc', borderRadius: '8px' }}>
                            <div style={{ fontSize: '3em', minWidth: 60 }}>👨‍🎨</div>
                            <div>
                              <h5 style={{ fontSize: '1.2em', fontWeight: 700, marginBottom: 4, color: '#0b1727' }}>
                                {artist.name}
                              </h5>
                              <p style={{ fontSize: '0.95em', color: '#0066b3', fontWeight: 600, marginBottom: 12 }}>
                                {artist.role}
                              </p>
                              <p style={{ fontSize: '1em', lineHeight: 1.7, color: '#64748b', marginBottom: 8 }}>
                                {artist.description}
                              </p>
                              <p style={{ fontSize: '0.9em', color: '#94a3b8' }}>
                                🎨 {artist.specialty}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.id === 'visit' && (
                    <div>
                      <h4 style={{ fontSize: '1.2em', fontWeight: 700, marginBottom: 20, color: '#0b1727' }}>Visitor Information</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 32 }}>
                        <div>
                          <h5 style={{ fontSize: '1.1em', fontWeight: 700, marginBottom: 12, color: '#0b1727' }}>📍 Location</h5>
                          <p style={{ fontSize: '1em', lineHeight: 1.7, color: '#475569' }}>
                            Welsby Street<br />
                            Dunwich, QLD 4183<br />
                            North Stradbroke Island (Minjerribah)
                          </p>
                        </div>
                        <div>
                          <h5 style={{ fontSize: '1.1em', fontWeight: 700, marginBottom: 12, color: '#0b1727' }}>🕐 Opening Hours</h5>
                          <p style={{ fontSize: '1em', lineHeight: 1.7, color: '#475569' }}>
                            Monday - Friday: 9:00 AM - 4:00 PM<br />
                            Saturday - Sunday: 10:00 AM - 3:00 PM<br />
                            Closed Public Holidays
                          </p>
                        </div>
                        <div>
                          <h5 style={{ fontSize: '1.1em', fontWeight: 700, marginBottom: 12, color: '#0b1727' }}>💰 Admission</h5>
                          <p style={{ fontSize: '1em', lineHeight: 1.7, color: '#475569' }}>
                            General Entry: Gold coin donation<br />
                            Guided Tours: $15 per person<br />
                            Workshops: Prices vary by program
                          </p>
                        </div>
                      </div>
                      <h5 style={{ fontSize: '1.1em', fontWeight: 700, marginBottom: 12, color: '#0b1727' }}>🚢 Getting There</h5>
                      <p style={{ fontSize: '1.05em', lineHeight: 1.8, color: '#475569', marginBottom: 16 }}>
                        QUAMPI is a 5-minute walk from Dunwich Ferry Terminal. Take the vehicle or passenger ferry from 
                        Redland Bay to Dunwich (North Stradbroke Island). The centre is located on Welsby Street, the 
                        main street in Dunwich.
                      </p>
                      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <Link href="/maritime" style={{ 
                          padding: '12px 24px', 
                          background: '#0066b3', 
                          color: 'white', 
                          borderRadius: '8px', 
                          textDecoration: 'none', 
                          fontWeight: 600 
                        }}>
                          Ferry Times →
                        </Link>
                        <a href="tel:0734099008" style={{ 
                          padding: '12px 24px', 
                          background: '#f0f0f0', 
                          color: '#0b1727', 
                          borderRadius: '8px', 
                          textDecoration: 'none', 
                          fontWeight: 600 
                        }}>
                          📞 Call (07) 3409 9008
                        </a>
                      </div>
                    </div>
                  )}

                  {section.id === 'events' && (
                    <div>
                      <h4 style={{ fontSize: '1.2em', fontWeight: 700, marginBottom: 20, color: '#0b1727' }}>Annual Events & Festivals</h4>
                      <div style={{ display: 'grid', gap: 20 }}>
                        {[
                          {
                            title: 'Quandamooka Festival',
                            month: 'September',
                            description: 'Major annual cultural festival celebrating Quandamooka heritage with music, art, dance, workshops, and traditional ceremonies',
                            attendance: '7,500+ attendees'
                          },
                          {
                            title: 'NAIDOC Week Celebrations',
                            month: 'July',
                            description: 'Week-long celebration of Aboriginal and Torres Strait Islander history, culture and achievements',
                            attendance: '2,000+ attendees'
                          },
                          {
                            title: 'Reconciliation Week Events',
                            month: 'May - June',
                            description: 'Community events, talks, and exhibitions promoting reconciliation and cultural understanding',
                            attendance: '1,500+ attendees'
                          },
                          {
                            title: 'School Holiday Programs',
                            month: 'Year-round',
                            description: 'Cultural workshops, art activities, and storytelling sessions for children during school holidays',
                            attendance: 'Ongoing'
                          }
                        ].map((event, idx) => (
                          <div key={idx} style={{ padding: '24px', background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 12 }}>
                              <h5 style={{ fontSize: '1.15em', fontWeight: 700, color: '#0b1727', margin: 0 }}>
                                {event.title}
                              </h5>
                              <span style={{ 
                                background: '#e8f4f8', 
                                color: '#0066b3', 
                                padding: '4px 12px', 
                                borderRadius: '6px', 
                                fontSize: '0.85em', 
                                fontWeight: 600,
                                whiteSpace: 'nowrap'
                              }}>
                                {event.month}
                              </span>
                            </div>
                            <p style={{ fontSize: '1em', lineHeight: 1.7, color: '#64748b', marginBottom: 8 }}>
                              {event.description}
                            </p>
                            <p style={{ fontSize: '0.9em', color: '#94a3b8', fontWeight: 600 }}>
                              👥 {event.attendance}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div style={{ marginTop: 24, padding: '20px', background: '#f0fdf4', borderRadius: '8px', borderLeft: '4px solid #059669' }}>
                        <p style={{ margin: 0, color: '#047857', fontWeight: 600, lineHeight: 1.7 }}>
                          📅 <strong>Stay Updated:</strong> Follow QUAMPI on social media or check with the centre 
                          for the latest events, exhibitions, and cultural programs.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Community Resources */}
        <div style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
          padding: '40px', 
          borderRadius: '12px',
          marginBottom: 40
        }}>
          <h3 style={{ fontSize: '1.5em', fontWeight: 700, marginBottom: 24, color: '#0b1727', textAlign: 'center' }}>
            🔗 Related Resources
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
            <a
              href="https://www.qyac.net.au"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '24px',
                background: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#0b1727',
                border: '2px solid #e2e8f0',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ fontSize: '2em', marginBottom: 12 }}>🏛️</div>
              <h4 style={{ fontSize: '1.1em', fontWeight: 700, marginBottom: 8, color: '#0b1727' }}>
                Quandamooka Yoolooburrabee Aboriginal Corporation
              </h4>
              <p style={{ fontSize: '0.9em', color: '#64748b', margin: 0 }}>
                Official Quandamooka representative body
              </p>
            </a>
            <Link
              href="/articles/quandamooka-country"
              style={{
                padding: '24px',
                background: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#0b1727',
                border: '2px solid #e2e8f0',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ fontSize: '2em', marginBottom: 12 }}>🌏</div>
              <h4 style={{ fontSize: '1.1em', fontWeight: 700, marginBottom: 8, color: '#0b1727' }}>
                Quandamooka Country
              </h4>
              <p style={{ fontSize: '0.9em', color: '#64748b', margin: 0 }}>
                Learn about Quandamooka culture and history
              </p>
            </Link>
            <Link
              href="/events"
              style={{
                padding: '24px',
                background: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#0b1727',
                border: '2px solid #e2e8f0',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ fontSize: '2em', marginBottom: 12 }}>🎉</div>
              <h4 style={{ fontSize: '1.1em', fontWeight: 700, marginBottom: 8, color: '#0b1727' }}>
                Cultural Events Calendar
              </h4>
              <p style={{ fontSize: '0.9em', color: '#64748b', margin: 0 }}>
                Upcoming festivals and community events
              </p>
            </Link>
            <a
              href="https://www.northstradbrokeislandtourism.com.au"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '24px',
                background: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#0b1727',
                border: '2px solid #e2e8f0',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ fontSize: '2em', marginBottom: 12 }}>🏖️</div>
              <h4 style={{ fontSize: '1.1em', fontWeight: 700, marginBottom: 8, color: '#0b1727' }}>
                Visit North Stradbroke Island
              </h4>
              <p style={{ fontSize: '0.9em', color: '#64748b', margin: 0 }}>
                Tourism and visitor information
              </p>
            </a>
          </div>
        </div>

        {/* Navigation Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <Link href="/articles" style={{ 
            padding: '14px 28px', 
            background: '#f0f0f0', 
            borderRadius: '8px', 
            textDecoration: 'none', 
            color: '#0b1727', 
            fontWeight: 600 
          }}>
            ← Back to Articles
          </Link>
          <Link href="/articles/quandamooka-country" style={{ 
            padding: '14px 28px', 
            background: '#0066b3', 
            color: 'white', 
            borderRadius: '8px', 
            textDecoration: 'none', 
            fontWeight: 600 
          }}>
            Learn About Quandamooka Country →
          </Link>
        </div>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'QUAMPI Arts & Culture Centre — North Stradbroke Island',
              description: 'North Stradbroke Island\'s premier Indigenous cultural hub showcasing Quandamooka art, exhibitions, workshops, and cultural programs.',
              author: {
                '@type': 'Organization',
                name: 'TheBayIslands.au'
              },
              publisher: {
                '@type': 'Organization',
                name: 'TheBayIslands.au',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://thebayislands.au/logo.png'
                }
              },
              datePublished: '2026-01-23',
              dateModified: '2026-01-23',
              about: {
                '@type': 'Place',
                name: 'QUAMPI Arts & Culture Centre',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Welsby Street',
                  addressLocality: 'Dunwich',
                  addressRegion: 'QLD',
                  postalCode: '4183',
                  addressCountry: 'AU'
                }
              }
            })
          }}
        />
      </div>
    </div>
  )
}
