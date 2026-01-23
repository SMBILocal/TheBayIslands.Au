'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'

export default function BayIslandsBridgeProposalPage() {
  const [openSection, setOpenSection] = useState<string>('overview')

  const sections = [
    { id: 'overview', title: 'Overview', icon: '🌉' },
    { id: '1985-plan', title: '1985 Stradbroke & Russell Island Bridge Plan', icon: '📜' },
    { id: 'history', title: 'Longer History (1970s–1980s)', icon: '🧭' },
    { id: 'today', title: 'Today’s Reality: Ferries, Roads & Planning', icon: '🚢' },
    { id: 'debate', title: 'Community Debate & Petitions', icon: '🗣️' },
    { id: 'why-it-matters', title: 'Why It Matters Now', icon: '💡' },
    { id: 'references', title: 'Sources & Further Reading', icon: '🔗' }
  ]

  return (
    <div className="page-container">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Articles', href: '/articles' },
          { label: 'Bay Islands Bridge Proposal' }
        ]} />

        <header style={{ marginBottom: 32 }}>
          <p style={{ color: '#64748b', fontWeight: 600, marginBottom: 8 }}>Transport & Infrastructure · Redland Bay · SMBI · Minjerribah</p>
          <h1 style={{ fontSize: 'clamp(2.2em, 5vw, 2.8em)', fontWeight: 800, margin: '0 0 12px 0', color: '#0b1727' }}>
            Bay Islands Bridge Proposal — History, Debate, and What Happens Next
          </h1>
          <p style={{ fontSize: '1.1em', color: '#475569', lineHeight: 1.7, margin: 0 }}>
            A deep dive into the bridge concepts linking Redland Bay to Russell Island and North Stradbroke Island. We trace
            the shelved 1985 plans, earlier proposals, community sentiment, and why ferries and marine access still shape
            transport for the Southern Moreton Bay Islands.
          </p>
        </header>

        {/* Key Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 32 }}>
          <MetricCard value="1985" label="Cabinet reviewed bridge tenders" color="#0066b3" />
          <MetricCard value="25 m" label="Proposed navigation clearance" color="#0ea5e9" />
          <MetricCard value="12 m" label="Planned deck width (4 lanes)" color="#f97316" />
          <MetricCard value="$45m+" label="Early 80s cost estimates" color="#10b981" />
        </div>

        {/* Collapsible Sections */}
        <div style={{ marginBottom: 48 }}>
          {sections.map(section => (
            <div
              key={section.id}
              style={{
                marginBottom: 16,
                border: '1px solid #e2e8f0',
                borderRadius: 12,
                overflow: 'hidden',
                background: 'white',
                boxShadow: openSection === section.id ? '0 6px 18px rgba(0,0,0,0.06)' : 'none'
              }}
            >
              <button
                onClick={() => setOpenSection(openSection === section.id ? '' : section.id)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: openSection === section.id ? '#f8fafc' : 'white',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: '1.6em' }}>{section.icon}</span>
                  <h2 style={{ margin: 0, fontSize: '1.3em', fontWeight: 700, color: '#0b1727' }}>{section.title}</h2>
                </div>
                <span style={{ color: '#94a3b8', fontSize: '1.3em' }}>{openSection === section.id ? '▲' : '▼'}</span>
              </button>

              {openSection === section.id && (
                <div style={{ padding: '0 24px 24px 24px', borderTop: '1px solid #e2e8f0' }}>
                  {section.id === 'overview' && (
                    <div style={{ lineHeight: 1.7, color: '#475569' }}>
                      <p>
                        For decades, locals and planners have floated the idea of connecting Redland Bay to Russell Island and
                        North Stradbroke Island (Minjerribah) via a series of bridges. Each time, the concept has sparked equal
                        parts excitement and concern — from economic growth and emergency access to environmental impact and cost.
                      </p>
                      <ul style={{ paddingLeft: 18 }}>
                        <li>Origins in 1970s–1980s planning studies for Redland Shire and State Government.</li>
                        <li>1985: detailed multi-bridge route tendered; Cabinet halted the project in 1986.</li>
                        <li>Today: ferries remain the backbone; bridge ideas resurface in community petitions and forums.</li>
                      </ul>
                    </div>
                  )}

                  {section.id === '1985-plan' && (
                    <div style={{ lineHeight: 1.7, color: '#475569' }}>
                      <p>
                        In early 2026, Redland Bayside News surfaced 1985 planning documents showing a three-span bridge system
                        from Redland Bay, across Pannikin Island, through Russell Island, and over the Canaipa Channel to North
                        Stradbroke Island.
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, margin: '16px 0' }}>
                        <InfoBox title="3 Major Bridges" text="12m decks, future 4-lane highway profile" />
                        <InfoBox title="25m Clearance" text="Navigation spans for Canaipa Channel traffic" />
                        <InfoBox title="Tolling Studied" text="Cost recovery and road upgrades on mainland" />
                      </div>
                      <p>
                        Cabinet ultimately halted the project in 1986, citing cost, complexity, and shifting priorities following
                        the Fitzgerald Inquiry era. The plan has never been revived officially.
                      </p>
                      <p style={{ marginTop: 12 }}>
                        Source: <a href="https://redlandbaysidenews.com.au/redlands-stradbroke-bridge-plan/" target="_blank" rel="noopener noreferrer" style={{ color: '#0066b3', fontWeight: 600 }}>Redland Bayside News — 1985 Bridge Plan</a>
                      </p>
                    </div>
                  )}

                  {section.id === 'history' && (
                    <div style={{ lineHeight: 1.7, color: '#475569' }}>
                      <p>
                        Bridge ideas pre-date the 1985 tender:
                      </p>
                      <ul style={{ paddingLeft: 18 }}>
                        <li>1970s: Initial Redland Shire discussions on long-range transport connections to SMBI.</li>
                        <li>1982–83: Private sector concepts surfaced with ~$45m estimates (1980s dollars), but no government endorsement.</li>
                        <li>1985: Tendered route studies progressed, then paused permanently by early 1986.</li>
                      </ul>
                      <p>
                        Each cycle revived questions about growth, emergency access, and how to protect Moreton Bay's fragile marine and Ramsar-listed wetlands.
                      </p>
                    </div>
                  )}

                  {section.id === 'today' && (
                    <div style={{ lineHeight: 1.7, color: '#475569' }}>
                      <p>
                        No bridge is funded or endorsed today. Instead, government focus remains on ferry and road upgrades:
                      </p>
                      <ul style={{ paddingLeft: 18 }}>
                        <li><strong>Ferries:</strong> Ongoing upgrades to passenger and vehicle ferry terminals for Russell, Macleay, Lamb, and Karragarra.</li>
                        <li><strong>Roads:</strong> The Green Seal Program continues sealing and improving island roads.</li>
                        <li><strong>Planning:</strong> The SMBI Integrated Local Transport Plan (2011 review) found no active bridge backing and prioritised marine transport.</li>
                        <li><strong>Budget 2025–26:</strong> ~$6.95m allocated to island infrastructure (community buildings, roads, marine facilities).</li>
                      </ul>
                    </div>
                  )}

                  {section.id === 'debate' && (
                    <div style={{ lineHeight: 1.7, color: '#475569' }}>
                      <p>
                        Community conversations resurface periodically — petitions, forums, and social media highlight frustration with ferry parking, scheduling, and freight. Others raise cost, ecology, and island character as reasons to keep the bay bridge-free.
                      </p>
                      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', padding: 16, borderRadius: 8 }}>
                        <p style={{ margin: 0, color: '#0f172a', fontWeight: 600 }}>Key sentiment themes</p>
                        <ul style={{ margin: '8px 0 0 18px', color: '#475569' }}>
                          <li>Improved emergency and freight access vs. environmental risk</li>
                          <li>Economic uplift vs. potential overdevelopment</li>
                          <li>Reliability of ferries vs. capital and maintenance cost of bridges</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {section.id === 'why-it-matters' && (
                    <div style={{ lineHeight: 1.7, color: '#475569' }}>
                      <p>
                        Even if no bridge is on the books, the debate keeps three issues in focus:
                      </p>
                      <ol style={{ paddingLeft: 18 }}>
                        <li><strong>Access & Equity:</strong> Reliable transport for residents, health care, and freight remains vital.</li>
                        <li><strong>Planning & Growth:</strong> Population and tourism pressures require resilient marine and road infrastructure.</li>
                        <li><strong>Environment:</strong> Moreton Bay's seagrass, dugong, turtle habitats and Ramsar wetlands demand careful stewardship.</li>
                      </ol>
                      <p>
                        For now, strengthening ferry services, parking, and island roads is the practical path while broader discussions continue.
                      </p>
                    </div>
                  )}

                  {section.id === 'references' && (
                    <div style={{ lineHeight: 1.7, color: '#475569' }}>
                      <ul style={{ paddingLeft: 18 }}>
                        <li><a href="https://redlandbaysidenews.com.au/redlands-stradbroke-bridge-plan/" target="_blank" rel="noopener noreferrer" style={{ color: '#0066b3', fontWeight: 600 }}>Redland Bayside News — 1985 Bridge Plan</a></li>
                        <li><a href="https://redlandbaysidenews.com.au/the-bridge-that-almost-was-inside-the-forgotten-push-to-link-stradbroke-island-to-the-mainland/" target="_blank" rel="noopener noreferrer" style={{ color: '#0066b3', fontWeight: 600 }}>Bridge That Almost Was — Redland Bayside News</a></li>
                        <li>Southern Moreton Bay Islands Integrated Local Transport Plan (2011 review)</li>
                        <li>Redland City Council budgets and infrastructure announcements</li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Related Links */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 40 }}>
          <LinkCard href="/maritime" title="Ferry & Maritime Guide" subtitle="Terminals, timetables, parking, marine access" icon="⛴️" />
          <LinkCard href="/articles/transport-on-islands" title="Island Transport" subtitle="Getting around SMBI & Redlands" icon="🛣️" />
          <LinkCard href="/news" title="Local News" subtitle="Transport updates and council decisions" icon="📰" />
        </div>

        {/* Back links */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link href="/articles" style={{ padding: '12px 20px', background: '#f0f0f0', borderRadius: 8, textDecoration: 'none', color: '#0b1727', fontWeight: 600 }}>
            ← Back to Articles
          </Link>
          <a href="https://redlandbaysidenews.com.au/redlands-stradbroke-bridge-plan/" target="_blank" rel="noopener noreferrer" style={{ padding: '12px 20px', background: '#0066b3', color: 'white', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>
            Read Source Reporting →
          </a>
        </div>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: 'Bay Islands Bridge Proposal — History, Debate, and What Happens Next',
              description: 'History of the Redland Bay to Russell Island and North Stradbroke Island bridge proposals, the shelved 1985 plan, community debate, and today’s transport reality.',
              author: { '@type': 'Organization', name: 'TheBayIslands.au' },
              publisher: {
                '@type': 'Organization',
                name: 'TheBayIslands.au',
                logo: { '@type': 'ImageObject', url: 'https://thebayislands.au/logo.png' }
              },
              keywords: [
                'Stradbroke bridge proposal',
                'Russell Island bridge history',
                'Southern Moreton Bay Islands transport',
                'Redland Bay infrastructure',
                'Pannikin Island bridge',
                'SMBI ferry vs bridge debate'
              ],
              datePublished: '2026-01-23',
              dateModified: '2026-01-23',
              mainEntityOfPage: 'https://thebayislands.au/articles/bay-islands-bridge-proposal'
            })
          }}
        />
      </div>
    </div>
  )
}

function MetricCard({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div style={{ background: color, color: 'white', padding: '18px 16px', borderRadius: 12, boxShadow: '0 8px 18px rgba(0,0,0,0.08)' }}>
      <div style={{ fontSize: '2em', fontWeight: 800, marginBottom: 6 }}>{value}</div>
      <div style={{ fontSize: '0.95em', opacity: 0.95 }}>{label}</div>
    </div>
  )
}

function InfoBox({ title, text }: { title: string; text: string }) {
  return (
    <div style={{ padding: 16, background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
      <div style={{ fontWeight: 700, color: '#0b1727', marginBottom: 4 }}>{title}</div>
      <div style={{ color: '#475569', fontSize: '0.95em' }}>{text}</div>
    </div>
  )
}

function LinkCard({ href, title, subtitle, icon }: { href: string; title: string; subtitle: string; icon: string }) {
  return (
    <Link
      href={href}
      style={{
        padding: 16,
        background: 'white',
        borderRadius: 10,
        border: '1px solid #e2e8f0',
        textDecoration: 'none',
        color: '#0b1727',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
        transition: 'transform 0.2s, box-shadow 0.2s'
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 10px 20px rgba(0,0,0,0.08)'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.04)'
      }}
    >
      <div style={{ fontSize: '1.8em' }}>{icon}</div>
      <div>
        <div style={{ fontWeight: 700 }}>{title}</div>
        <div style={{ color: '#475569', fontSize: '0.9em' }}>{subtitle}</div>
      </div>
    </Link>
  )
}
