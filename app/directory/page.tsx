'use client';

import { useState, useEffect } from 'react';
import { businessCategories } from '@/lib/businessCategories';
import BusinessCard from '@/components/BusinessCard';
import FormModal from '@/components/FormModal';

interface Business {
  id: string;
  slug: string;
  name: string;
  category: string;
  description?: string;
  location?: string;
  phone?: string;
  email?: string;
  status?: 'claimed' | 'unclaimed' | 'featured';
  image?: string;
}

export default function DirectoryPage() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showAddBusinessForm, setShowAddBusinessForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    async function fetchBusinesses() {
      try {
        const res = await fetch('/api/directory', { cache: 'no-store' });
        const json = await res.json();
        setBusinesses(Array.isArray(json) ? json : []);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    }
    fetchBusinesses();
  }, []);

  const locations = Array.from(new Set(businesses.map((b) => b.location).filter(Boolean))).sort();

  const filteredBusinesses = businesses
    .filter(biz =>
      biz.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      biz.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (biz.description && biz.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .filter(biz => !selectedCategory || biz.category === selectedCategory)
    .filter(biz => !selectedLocation || (biz.location || '') === selectedLocation);

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <div style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)', color: 'white', padding: '60px 20px', marginBottom: 40 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ fontSize: 42, fontWeight: 700, margin: '0 0 12px 0' }}>Business Directory</h1>
          <p style={{ fontSize: 18, opacity: 0.9, margin: 0 }}>Connect with local businesses across the Bay Islands</p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px 60px' }}>
        {/* Search and Controls */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 24, alignItems: 'flex-start' }}>
          <input
            type="text"
            placeholder="Search businesses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              gridColumn: '1 / -1',
              padding: '14px 16px',
              fontSize: 14,
              border: '1px solid #e2e8f0',
              borderRadius: 10,
              boxSizing: 'border-box'
            }}
          />
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            style={{
              padding: '12px 10px',
              border: '1px solid #e2e8f0',
              borderRadius: 10,
              background: 'white',
              color: '#0f172a',
              fontWeight: 600,
              fontSize: 13
            }}
          >
            <option value="">All Locations</option>
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              padding: '12px 10px',
              border: '1px solid #e2e8f0',
              borderRadius: 10,
              background: 'white',
              color: '#0f172a',
              fontWeight: 600,
              fontSize: 13
            }}
          >
            <option value="">All Categories</option>
            {businessCategories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <div style={{ display: 'flex', gap: 6, background: 'white', padding: 3, borderRadius: 8, border: '1px solid #e2e8f0' }}>
            <button onClick={() => setViewMode('grid')} style={{ padding: '10px 14px', background: viewMode === 'grid' ? '#0ea5e9' : 'transparent', color: viewMode === 'grid' ? 'white' : '#64748b', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 600, fontSize: 12 }} title="Grid view">⊞</button>
            <button onClick={() => setViewMode('list')} style={{ padding: '10px 14px', background: viewMode === 'list' ? '#0ea5e9' : 'transparent', color: viewMode === 'list' ? 'white' : '#64748b', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 600, fontSize: 12 }} title="List view">☰</button>
          </div>
          {(selectedCategory || selectedLocation || searchQuery) && (
            <button
              onClick={() => { setSelectedCategory(''); setSelectedLocation(''); setSearchQuery(''); }}
              style={{
                padding: '10px 12px',
                background: 'transparent',
                color: '#0ea5e9',
                border: '1px solid #0ea5e9',
                borderRadius: 8,
                fontWeight: 700,
                cursor: 'pointer',
                fontSize: 13
              }}
            >
              Clear All
            </button>
          )}
        </div>

        {/* Category Quick Filter */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          {businessCategories.map(cat => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(active ? '' : cat)}
                style={{
                  padding: '8px 12px',
                  borderRadius: 20,
                  border: active ? '2px solid #0ea5e9' : '1px solid #e2e8f0',
                  background: active ? 'rgba(14,165,233,0.12)' : 'white',
                  color: active ? '#0f172a' : '#475569',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontSize: 12,
                  whiteSpace: 'nowrap'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(16px, 4vw, 32px)' }}>
          <div style={{ gridColumn: '1 / -1' }}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: 60, color: '#64748b' }}>
                <p>Loading businesses...</p>
              </div>
            ) : filteredBusinesses.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(300px, 1fr))' : '1fr', gap: 'clamp(16px, 4vw, 20px)', width: '100%' }}>
                {filteredBusinesses.map(biz => (
                  <BusinessCard
                    key={biz.id}
                    name={biz.name}
                    category={biz.category}
                    description={biz.description}
                    location={biz.location}
                    phone={biz.phone}
                    status={biz.status || 'claimed'}
                    href={`/directory/${biz.slug || biz.id}`}
                    claimHref={`/upgrade?business=${biz.slug || biz.id}`}
                    imageSrc={biz.status === 'unclaimed' ? undefined : biz.image}
                  />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: 60, color: '#64748b', gridColumn: '1 / -1' }}>
                <p>No businesses found matching your search.</p>
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: 'clamp(40px, 10vw, 60px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(16px, 4vw, 32px)' }}>
          <div style={{ background: 'white', borderRadius: 12, padding: 'clamp(20px, 5vw, 24px)', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: 'clamp(1.1em, 2vw, 18px)', fontWeight: 600, margin: '0 0 12px 0' }}>List Your Business</h3>
            <p style={{ fontSize: 'clamp(0.9em, 1.5vw, 14px)', color: '#64748b', margin: '0 0 16px 0' }}>Reach thousands of local customers for free.</p>
            <button onClick={() => setShowAddBusinessForm(true)} style={{
                width: '100%',
                padding: 12,
                background: '#0ea5e9',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                fontWeight: 600,
                cursor: 'pointer',
                minHeight: '44px'
              }}>
                Add Business
              </button>
            </div>

            <div style={{ background: 'white', borderRadius: 12, padding: 'clamp(20px, 5vw, 24px)', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h4 style={{ fontSize: 'clamp(1em, 1.5vw, 16px)', fontWeight: 600, margin: '0 0 12px 0' }}>Popular Categories</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 8 }}>
                {businessCategories.slice(0, 12).map(cat => (
                  <div key={cat} style={{ fontSize: 'clamp(0.9em, 1.5vw, 14px)', color: '#475569', padding: '10px 12px', background: '#f8fafc', borderRadius: 6 }}>
                    {cat}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: 'white', borderRadius: 12, padding: 'clamp(20px, 5vw, 24px)', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <h4 style={{ fontSize: 'clamp(1em, 1.5vw, 16px)', fontWeight: 600, margin: '0 0 12px 0' }}>Total Businesses</h4>
              <div style={{ fontSize: 'clamp(1.8em, 5vw, 32px)', fontWeight: 700, color: '#0ea5e9' }}>{businesses.length}</div>
            </div>
        </div>
      </div>

      <FormModal
        isOpen={showAddBusinessForm}
        title="Add Your Business"
        description="List your business in the Bay Islands directory and reach local customers."
        accentColor="#0ea5e9"
        fields={[
          { name: 'name', label: 'Business Name', type: 'text', placeholder: 'e.g. Island Cafe & Bakery', required: true },
          { name: 'category', label: 'Category', type: 'text', placeholder: 'e.g. Cafe & Food', required: true },
          { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(07) 1234 5678', required: false },
          { name: 'email', label: 'Email', type: 'email', placeholder: 'contact@yourbusiness.com', required: false },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Tell customers about your business...', required: true },
        ]}
        onSubmit={(data) => {
          console.log('Business added:', data);
          setShowAddBusinessForm(false);
          alert('Business added successfully! (In production, this would save to database)');
        }}
        onClose={() => setShowAddBusinessForm(false)}
      />
    </main>
  );
}
