'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FormModal from '@/components/FormModal';
import Comments from '@/components/Comments';

interface Event {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  location: string;
  organizer: string;
  capacity?: number;
  category?: string;
}

export default function EventDetail({ params }: { params: { id: string } }) {
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchEvent() {
      try {
        const res = await fetch('/api/events', { cache: 'no-store' });
        const json = await res.json();
        const events = Array.isArray(json) ? json : (json.data || []);
        const found = events.find((e: any) => String(e.id) === String(params.id));
        setEvent(found || null);
        setLoading(false);
      } catch {
        setEvent(null);
        setLoading(false);
      }
    }
    fetchEvent();
  }, [params.id]);

  if (loading) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <div style={{ textAlign: 'center', color: '#64748b' }}>
          <div style={{ width: 40, height: 40, border: '4px solid #e2e8f0', borderTopColor: '#ec4899', borderRadius: '50%', margin: '0 auto 16px', animation: 'spin 0.8s linear infinite' }}></div>
          <p>Loading event...</p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      </main>
    );
  }

  if (!event) {
    return (
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <div style={{ textAlign: 'center', maxWidth: 500, padding: 20 }}>
          <h1 style={{ fontSize: 32, color: '#0f172a', marginBottom: 12 }}>Event Not Found</h1>
          <p style={{ color: '#475569', marginBottom: 24 }}>The event you're looking for doesn't exist or has been removed.</p>
          <button onClick={() => router.back()} style={{ padding: '12px 24px', background: '#ec4899', color: 'white', border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}>Go Back</button>
        </div>
      </main>
    );
  }

  const startDate = new Date(event.start_date);
  const endDate = new Date(event.end_date);
  const formattedDate = startDate.toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' });
  const formattedTime = startDate.toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit', hour12: true });
  const isPast = new Date() > endDate;

  const handleRegisterSubmit = (formData: Record<string, string>) => {
    console.log('Event registration submitted:', { eventId: event.id, eventTitle: event.title, ...formData });
    // In production, send to API
  };

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <FormModal
        isOpen={showRegisterForm}
        title="Register for Event"
        description={event.title}
        fields={[
          { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'John Smith', required: true },
          { name: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com', required: true },
          { name: 'phone', label: 'Phone', type: 'tel', placeholder: '0412 345 678', required: true },
          { name: 'attendees', label: 'Number of Attendees', type: 'text', placeholder: '1', required: true }
        ]}
        submitText="Register Now"
        accentColor="#ec4899"
        onSubmit={handleRegisterSubmit}
        onClose={() => setShowRegisterForm(false)}
      />
      <div style={{ background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)', color: 'white', padding: '60px 20px', marginBottom: 40 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 14, opacity: 0.9, marginBottom: 16 }}><a href="/events" style={{ color: 'white', textDecoration: 'none' }}>Events</a> / <span>{event.category || 'Community'}</span></div>
          <h1 style={{ fontSize: 42, fontWeight: 700, margin: '12px 0', lineHeight: 1.2 }}>{event.title}</h1>
          <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: 'auto auto auto', gap: 24 }}>
            <div>
              <div style={{ fontSize: 12, opacity: 0.8, textTransform: 'uppercase', marginBottom: 4, fontWeight: 600 }}>📅 When</div>
              <div style={{ fontSize: 16, fontWeight: 500 }}>{formattedDate}</div>
              <div style={{ fontSize: 14, opacity: 0.9 }}>{formattedTime}</div>
            </div>
            <div>
              <div style={{ fontSize: 12, opacity: 0.8, textTransform: 'uppercase', marginBottom: 4, fontWeight: 600 }}>📍 Where</div>
              <div style={{ fontSize: 16, fontWeight: 500 }}>{event.location}</div>
            </div>
            <div>
              <div style={{ fontSize: 12, opacity: 0.8, textTransform: 'uppercase', marginBottom: 4, fontWeight: 600 }}>👤 Organizer</div>
              <div style={{ fontSize: 16, fontWeight: 500 }}>{event.organizer}</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '100%', margin: 0, padding: '0 clamp(16px, 5vw, 40px) clamp(40px, 10vw, 60px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(16px, 4vw, 32px)' }}>
        <article style={{ background: 'white', borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 600, color: '#0f172a', marginTop: 0, marginBottom: 16 }}>About This Event</h2>
          <div style={{ fontSize: 16, color: '#475569', lineHeight: 1.8, whiteSpace: 'pre-wrap', marginBottom: 32 }}>{event.description}</div>
        </article>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: 24 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: '#0f172a', marginTop: 0, marginBottom: 16 }}>Event Details</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div>
                <div style={{ fontSize: 12, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Date</div>
                <div style={{ color: '#0f172a', fontWeight: 500 }}>{formattedDate}</div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Time</div>
                <div style={{ color: '#0f172a', fontWeight: 500 }}>{formattedTime}</div>
              </div>
              <div>
                <div style={{ fontSize: 12, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Location</div>
                <div style={{ color: '#0f172a', fontWeight: 500 }}>{event.location}</div>
              </div>
              {event.capacity && (
                <div>
                  <div style={{ fontSize: 12, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>Capacity</div>
                  <div style={{ color: '#0f172a', fontWeight: 500 }}>{event.capacity} attendees</div>
                </div>
              )}
            </div>
          </div>

          <button onClick={() => !isPast && setShowRegisterForm(true)} style={{ width: '100%', padding: 16, background: isPast ? '#cbd5e1' : '#ec4899', color: isPast ? '#475569' : 'white', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: 16, cursor: isPast ? 'default' : 'pointer' }} disabled={isPast}>
            {isPast ? 'Event Ended' : 'Register Now'}
          </button>

          <button style={{ width: '100%', padding: 12, background: 'white', color: '#ec4899', border: '2px solid #ec4899', borderRadius: 8, fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Share Event</button>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 20px 60px' }}>
        <Comments contentType="event" contentId={event.id} />
      </div>
    </main>
  );
}
