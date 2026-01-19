'use client';

import { useState, useEffect } from 'react';
import ClassifiedCard from '@/components/ClassifiedCard';
import FilterPanel from '@/components/FilterPanel';
import FormModal from '@/components/FormModal';

interface Classified {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  condition?: string;
  created_at: string;
}

export default function ClassifiedsPage() {
  const [items, setItems] = useState<Classified[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [showPostAdForm, setShowPostAdForm] = useState(false);

  useEffect(() => {
    async function fetchClassifieds() {
      try {
        const res = await fetch('/api/classifieds', { cache: 'no-store' });
        const json = await res.json();
        setItems(Array.isArray(json) ? json : []);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    }
    fetchClassifieds();
  }, []);

  const filteredItems = items.filter(item => {
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPrice = !filters.maxPrice || item.price <= filters.maxPrice;
    const matchesCondition = !filters.condition || !filters.condition.length || filters.condition.includes(item.condition);

    return matchesSearch && matchesPrice && matchesCondition;
  });

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <div style={{ background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', color: 'white', padding: '60px 20px', marginBottom: 40 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ fontSize: 42, fontWeight: 700, margin: '0 0 12px 0' }}>Buy & Sell Classifieds</h1>
          <p style={{ fontSize: 18, opacity: 0.9, margin: 0 }}>Find great deals on furniture, boats, cars, and more</p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px 60px' }}>
        <div style={{ display: 'flex', gap: 16, marginBottom: 32, alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search items by title, description, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              padding: '16px 20px',
              fontSize: 16,
              border: '1px solid #e2e8f0',
              borderRadius: 12,
              boxSizing: 'border-box'
            }}
          />
          <div style={{ display: 'flex', gap: 8, background: 'white', padding: 4, borderRadius: 8, border: '1px solid #e2e8f0' }}>
            <button onClick={() => setViewMode('grid')} style={{ padding: '8px 16px', background: viewMode === 'grid' ? '#f59e0b' : 'transparent', color: viewMode === 'grid' ? 'white' : '#64748b', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 600, fontSize: 14 }}>⊞ Grid</button>
            <button onClick={() => setViewMode('list')} style={{ padding: '8px 16px', background: viewMode === 'list' ? '#f59e0b' : 'transparent', color: viewMode === 'list' ? 'white' : '#64748b', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 600, fontSize: 14 }}>☰ List</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(16px, 4vw, 32px)' }}>
          <div style={{ gridColumn: '1 / -1' }}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: 60, color: '#64748b' }}>
                <p>Loading classifieds...</p>
              </div>
            ) : filteredItems.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(280px, 1fr))' : '1fr', gap: 'clamp(16px, 4vw, 20px)', width: '100%' }}>
                {filteredItems.map(item => (
                  <ClassifiedCard
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    location={item.location}
                    description={item.description}
                    condition={item.condition}
                    href={`/classifieds/${item.id}`}
                    imageSrc={`https://picsum.photos/seed/item-${item.id}/280/200`}
                  />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: 60, color: '#64748b', gridColumn: '1 / -1' }}>
                <p>No items found matching your search.</p>
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: 'clamp(40px, 10vw, 60px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(16px, 4vw, 32px)' }}>
          <div>
            <FilterPanel
              title="Filter Results"
              accentColor="#f59e0b"
              filters={[
                {
                  name: 'maxPrice',
                  label: 'Max Price',
                  type: 'range',
                  min: 0,
                  max: 50000,
                  step: 500
                },
                {
                  name: 'condition',
                  label: 'Condition',
                  type: 'checkbox',
                  options: [
                    { label: 'New', value: 'New' },
                    { label: 'Like New', value: 'Like New' },
                    { label: 'Good', value: 'Good' },
                    { label: 'Fair', value: 'Fair' }
                  ]
                }
              ]}
              onFilterChange={setFilters}
            />
          </div>

          <div style={{ background: 'white', borderRadius: 12, padding: 'clamp(20px, 5vw, 24px)', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: 'clamp(1.1em, 2vw, 18px)', fontWeight: 600, margin: '0 0 12px 0' }}>Sell an Item</h3>
            <p style={{ fontSize: 'clamp(0.9em, 1.5vw, 14px)', color: '#64748b', margin: '0 0 16px 0' }}>List your items for free and reach local buyers.</p>
            <button onClick={() => setShowPostAdForm(true)} style={{
              width: '100%',
              padding: 12,
              background: '#f59e0b',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              fontWeight: 600,
              cursor: 'pointer',
              minHeight: '44px'
            }}>
              Post Ad
            </button>
          </div>

          <div style={{ background: 'white', borderRadius: 12, padding: 'clamp(20px, 5vw, 24px)', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h4 style={{ fontSize: 'clamp(1em, 1.5vw, 16px)', fontWeight: 600, margin: '0 0 12px 0' }}>Safety Tips</h4>
            <ul style={{ fontSize: 'clamp(0.9em, 1.5vw, 14px)', color: '#64748b', lineHeight: 1.8, paddingLeft: 20, margin: 0 }}>
              <li>Meet in public places</li>
              <li>Check items before paying</li>
              <li>Never send money in advance</li>
              <li>Trust your instincts</li>
            </ul>
          </div>

          <div style={{ background: 'white', borderRadius: 12, padding: 'clamp(20px, 5vw, 24px)', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h4 style={{ fontSize: 'clamp(1em, 1.5vw, 16px)', fontWeight: 600, margin: '0 0 12px 0' }}>Total Listings</h4>
            <div style={{ fontSize: 'clamp(1.8em, 5vw, 32px)', fontWeight: 700, color: '#f59e0b' }}>{filteredItems.length}</div>
          </div>
        </div>
      </div>

      <FormModal
        isOpen={showPostAdForm}
        title="Post a Classified Ad"
        description="List your item for sale in the Bay Islands classifieds."
        accentColor="#f59e0b"
        fields={[
          { name: 'title', label: 'Title', type: 'text', placeholder: 'e.g. Dining Table & Chairs', required: true },
          { name: 'price', label: 'Price ($)', type: 'text', placeholder: '500', required: true },
          { name: 'location', label: 'Location', type: 'text', placeholder: 'e.g. Russell Island', required: true },
          { name: 'description', label: 'Description', type: 'textarea', placeholder: 'Describe your item, condition, etc...', required: true },
        ]}
        onSubmit={(data) => {
          console.log('Ad posted:', data);
          setShowPostAdForm(false);
          alert('Ad posted successfully! (In production, this would save to database)');
        }}
        onClose={() => setShowPostAdForm(false)}
      />
    </main>
  );
}
