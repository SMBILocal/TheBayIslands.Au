import React from 'react'
import { notFound } from 'next/navigation'

async function getBusiness(id: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/directory`, { cache: 'no-store' })
    if (!res.ok) return null
    const json = await res.json()
    const businesses = json.data || []
    return businesses.find((b: any) => b.id === id)
  } catch (e) {
    console.error('Failed to fetch business:', e)
    return null
  }
}

export default async function BusinessDetailPage({ params }: { params: { id: string } }) {
  const business = await getBusiness(params.id)

  if (!business) {
    notFound()
  }

  return (
    <section style={{ padding: '24px 0' }}>
      <div className="detail-hero" style={{ background: 'linear-gradient(135deg, #c85a17 0%, #e8a87c 100%)' }}>
        <h1>{business.name}</h1>
        <p style={{ fontSize: '18px', marginTop: 8 }}>{business.category}</p>
      </div>

      <div style={{ display: 'flex', gap: 32, maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ flex: 1 }}>
          <div className="card">
            <h2>About</h2>
            <p>{business.description}</p>

            <h3 style={{ marginTop: 28 }}>Location</h3>
            <p>{business.location}</p>

            <h3 style={{ marginTop: 28 }}>Contact</h3>
            <button className="cta" style={{ marginTop: 12 }}>Send Message</button>
            <button className="cta" style={{ marginTop: 8, background: '#f1f5f9', color: '#0f1724' }}>Call Now</button>
          </div>
        </div>

        <div style={{ width: 300 }}>
          <div className="card">
            <h3>Business Info</h3>
            <div style={{ marginTop: 16 }}>
              <div style={{ marginBottom: 16 }}>
                <div className="muted">Category</div>
                <strong>{business.category}</strong>
              </div>
              <div style={{ marginBottom: 16 }}>
                <div className="muted">Location</div>
                <strong>{business.location}</strong>
              </div>
              <div style={{ marginBottom: 16 }}>
                <div className="muted">Verified</div>
                <strong style={{ color: '#00a86b' }}>✓ Yes</strong>
              </div>
            </div>
          </div>

          <div className="card" style={{ marginTop: 16 }}>
            <h3>Hours</h3>
            <div style={{ marginTop: 12, fontSize: 14 }}>
              <div>Mon-Fri: 9am-5pm</div>
              <div>Sat: 10am-3pm</div>
              <div>Sun: Closed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
