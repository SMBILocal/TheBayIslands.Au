'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { supabase } from '@/lib/supabaseClient';

interface ContentReport {
  id: string;
  content_id: string;
  content_type: 'directory' | 'job' | 'event' | 'classified' | 'user';
  reported_by: string;
  report_reason: 'spam' | 'scam' | 'illegal' | 'inappropriate' | 'misinformation' | 'harassment' | 'other';
  description: string | null;
  status: 'open' | 'investigating' | 'resolved' | 'dismissed';
  moderator_notes: string | null;
  resolved_by: string | null;
  resolved_at: string | null;
  created_at: string;
  updated_at: string;
}

export default function ReportsManagement() {
  const { user } = useAuth();
  const [reports, setReports] = useState<ContentReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedReport, setSelectedReport] = useState<ContentReport | null>(null);
  const [action, setAction] = useState<'resolved' | 'dismissed' | 'investigating'>('resolved');
  const [notes, setNotes] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  const fetchReports = async () => {
    if (!user) return;

    try {
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;
      if (!token) return;
      
      const res = await fetch('/api/admin/reports?status=open&limit=50', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error(`Failed: ${res.status}`);

      const data = await res.json();
      setReports(data.items || []);
    } catch (err) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, [user]);

  const handleResolve = async () => {
    if (!selectedReport) return;

    setActionLoading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;
      if (!token) return;

      const res = await fetch('/api/admin/reports', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reportId: selectedReport.id,
          action,
          moderatorNotes: notes,
        }),
      });

      if (!res.ok) throw new Error(`Failed: ${res.status}`);

      await fetchReports();
      setSelectedReport(null);
      setNotes('');
    } catch (err: any) {
      alert(`Error: ${err.message}`);
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) return <div style={{ padding: 20 }}>Loading reports...</div>;

  const reasonColors: Record<string, string> = {
    spam: '#f59e0b',
    scam: '#ef4444',
    illegal: '#7c3aed',
    inappropriate: '#ec4899',
    misinformation: '#f97316',
    harassment: '#d946ef',
    other: '#6b7280',
  };

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24 }}>Reported Content</h2>

      {reports.length === 0 ? (
        <div style={{ padding: 40, textAlign: 'center', color: '#6b7280', background: '#f9fafb', borderRadius: 8 }}>
          <p style={{ fontSize: 18, fontWeight: 500 }}>All clear!</p>
          <p>No open reports</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: 12 }}>
          {reports.map(report => (
            <div
              key={report.id}
              onClick={() => setSelectedReport(report)}
              style={{
                padding: 16,
                border: '1px solid #e5e7eb',
                borderRadius: 8,
                cursor: 'pointer',
                background: selectedReport?.id === report.id ? '#f0f4f8' : '#fff',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#f9fafb')}
              onMouseLeave={e => (e.currentTarget.style.background = selectedReport?.id === report.id ? '#f0f4f8' : '#fff')}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '2px 8px',
                        background: reasonColors[report.report_reason] + '22',
                        color: reasonColors[report.report_reason],
                        borderRadius: 4,
                        fontSize: 12,
                        fontWeight: 600,
                        textTransform: 'uppercase',
                      }}
                    >
                      {report.report_reason}
                    </span>
                    <span style={{ color: '#6b7280', fontSize: 12 }}>in {report.content_type}</span>
                  </div>
                  <p style={{ fontSize: 14, color: '#1f2937', marginBottom: 4 }}>ID: {report.content_id.substring(0, 8)}...</p>
                  <p style={{ color: '#6b7280', fontSize: 13, lineHeight: 1.5 }}>{report.description || 'No description'}</p>
                  <p style={{ color: '#9ca3af', fontSize: 12, marginTop: 8 }}>
                    Reported {new Date(report.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div style={{ fontSize: 12, color: '#0066b3', fontWeight: 600 }}>View</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Resolution Modal */}
      {selectedReport && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: 20 }}>
          <div style={{ background: 'white', borderRadius: 8, maxWidth: 500, width: '100%' }}>
            <div style={{ padding: 24, borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600 }}>Resolve Report</h3>
              <button onClick={() => setSelectedReport(null)} style={{ background: 'none', border: 'none', fontSize: 24, cursor: 'pointer' }}>
                ✕
              </button>
            </div>

            <div style={{ padding: 24, display: 'grid', gap: 16 }}>
              <div style={{ background: '#f9fafb', padding: 12, borderRadius: 6 }}>
                <p style={{ fontSize: 12, color: '#6b7280', fontWeight: 600, marginBottom: 4 }}>REPORT TYPE</p>
                <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>{selectedReport.report_reason}</p>

                <p style={{ fontSize: 12, color: '#6b7280', fontWeight: 600, marginBottom: 4 }}>DESCRIPTION</p>
                <p style={{ fontSize: 13, color: '#4b5563' }}>{selectedReport.description || 'No details provided'}</p>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 8, color: '#374151' }}>Action</label>
                <select
                  value={action}
                  onChange={e => setAction(e.target.value as any)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #e5e7eb',
                    borderRadius: 6,
                    fontSize: 14,
                    fontFamily: 'inherit',
                  }}
                >
                  <option value="resolved">Resolved (Action Taken)</option>
                  <option value="dismissed">Dismissed (No Action)</option>
                  <option value="investigating">Mark as Investigating</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 8, color: '#374151' }}>Moderator Notes</label>
                <textarea
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="Internal notes about this report..."
                  style={{
                    width: '100%',
                    padding: 10,
                    border: '1px solid #e5e7eb',
                    borderRadius: 6,
                    fontSize: 13,
                    fontFamily: 'inherit',
                    minHeight: 80,
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <button
                  onClick={handleResolve}
                  disabled={actionLoading}
                  style={{
                    padding: '10px 16px',
                    background: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: 6,
                    fontWeight: 600,
                    cursor: 'pointer',
                    opacity: actionLoading ? 0.5 : 1,
                  }}
                >
                  {actionLoading ? 'Saving...' : 'Save Resolution'}
                </button>
                <button
                  onClick={() => setSelectedReport(null)}
                  style={{
                    padding: '10px 16px',
                    background: '#e5e7eb',
                    border: 'none',
                    borderRadius: 6,
                    cursor: 'pointer',
                    fontWeight: 500,
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
