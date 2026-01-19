'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/Card';
import FilterPanel from '@/components/FilterPanel';
import FormModal from '@/components/FormModal';

interface Event {
  id: string;
  title: string;
  location: string;
  description?: string;
  date: string;
  time?: string;
  category?: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [showAddEventForm, setShowAddEventForm] = useState(false);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch('/api/events', { cache: 'no-store' });
        const json = await res.json();
        setEvents(Array.isArray(json) ? json : []);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  const filteredEvents = events.filter(event => {
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (event.description && event.description.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = !filters.category || event.category === filters.category;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <div style={{ background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)', color: 'white', padding: '60px 20px', marginBottom: 40 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ fontSize: 42, fontWeight: 700, margin: '0 0 12px 0' }}>Community Events</h1>
          <p style={{ fontSize: 18, opacity: 0.9, margin: 0 }}>Markets, workshops, festivals and community gatherings</p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px 60px' }}>
        <div style={{ marginBottom: 32 }}>
          <input
            type="text"
            placeholder="Search events by title, location, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '16px 20px',
              fontSize: 16,
              border: '1px solid #e2e8f0',
              borderRadius: 12,
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(16px, 4vw, 32px)' }}>
          <div style={{ gridColumn: '1 / -1' }}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: 60, color: '#64748b' }}>
                <p>Loading events...</p>
              </div>
            ) : filteredEvents.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'clamp(16px, 4vw, 20px)', width: '100%' }}>
                {filteredEvents.map(event => (
                  <Card
                    key={event.id}
                    title={event.title}
                    location={event.location}
                    description={event.description}
                    badge={event.category}
                    date={event.date}
                    href={`/events/${event.id}`}
                    ctaText="View Event"
                    imageSrc={`https://picsum.photos/seed/event-${event.id}/400/300`}
                  />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: 60, color: '#64748b', gridColumn: '1 / -1' }}>
                <p>No events found matching your search.</p>
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: 'clamp(40px, 10vw, 60px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(16px, 4vw, 32px)' }}>
          <div style={{ gridColumn: '1 / -1' }}>
            <FilterPanel
              title="Filter Events"
              accentColor="#ec4899"
              filters={[
                {
                  name: 'category',
                  label: 'Category',
                  type: 'select',
                  options: [
                    { label: 'Markets', value: 'Markets' },
                    { label: 'Community', value: 'Community' },
                    { label: 'Sports & Recreation', value: 'Sports & Recreation' },
                    { label: 'Entertainment', value: 'Entertainment' },
                    { label: 'Education', value: 'Education' },
                    { label: 'Family', value: 'Family' }
                  ]
                }
              ]}
              onFilterChange={setFilters}
            />
          </div>

          <div style={{ background: 'white', borderRadius: 12, padding: 'clamp(20px, 5vw, 24px)', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: 'clamp(1.1em, 2vw, 18px)', fontWeight: 600, margin: '0 0 12px 0' }}>Create Event</h3>
            <p style={{ fontSize: 'clamp(0.9em, 1.5vw, 14px)', color: '#64748b', margin: '0 0 16px 0' }}>Organizing a community event? Share it here.</p>
            <button onClick={() => setShowAddEventForm(true)} style={{
              width: '100%',
              padding: 12,
              background: '#ec4899',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              fontWeight: 600,
              cursor: 'pointer',
              minHeight: '44px'
            }}>
              Add Event
            </button>
          </div>

          <div style={{ background: 'white', borderRadius: 12, padding: 'clamp(20px, 5vw, 24px)', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h4 style={{ fontSize: 'clamp(1em, 1.5vw, 16px)', fontWeight: 600, margin: '0 0 12px 0' }}>Total Events</h4>
            <div style={{ fontSize: 'clamp(1.8em, 5vw, 32px)', fontWeight: 700, color: '#ec4899' }}>{filteredEvents.length}</div>
          </div>
        </div>
      </div>

      <FormModal
        isOpen={showAddEventForm}
        title="Create Event"
        description="Share your community event with the Bay Islands community."
        accentColor="#ec4899"
        fields={[
          { name: 'title', label: 'Event Name', type: 'text', placeholder: 'e.g. Annual Regatta', required: true },
          { name: 'date', label: 'Event Date', type: 'date', required: true },
          { name: 'location', label: 'Location', type: 'text', placeholder: 'e.g. Russell Island Marina', required: true },
          { name: 'description', label: 'Event Description', type: 'textarea', placeholder: 'Tell us about your event...', required: true },
        ]}
        onSubmit={(data) => {
          console.log('Event created:', data);
          setShowAddEventForm(false);
          alert('Event posted successfully! (In production, this would save to database)');
        }}
        onClose={() => setShowAddEventForm(false)}
      />
    </main>
  );
}
