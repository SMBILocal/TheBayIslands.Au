'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { supabase } from '@/lib/supabaseClient';

interface QueueItem {
  id: string;
  content_id: string;
  content_type: 'directory' | 'job' | 'event' | 'classified';
  submitted_by: string;
  submission_content: Record<string, any>;
  status: 'pending' | 'approved' | 'rejected' | 'needs_revision';
  reviewed_by: string | null;
  reviewed_at: string | null;
  rejection_reason: string | null;
  revision_notes: string | null;
  priority: number;
  created_at: string;
  updated_at: string;
  users?: { username: string; email: string };
}

export default function ApprovalQueueReview() {
  const { user } = useAuth();
  const [items, setItems] = useState<QueueItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<QueueItem | null>(null);
  const [actionLoading, setActionLoading] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');
  const [revisionNotes, setRevisionNotes] = useState('');

  const fetchQueue = async () => {
    if (!user) return;

    try {
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;
      if (!token) return;
      
      const res = await fetch('/api/admin/approval-queue?status=pending&limit=50', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

      const data = await res.json();
      setItems(data.items || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueue();
  }, [user]);

  const handleApproveReject = async (action: 'approved' | 'rejected' | 'needs_revision') => {
    if (!selectedItem) return;

    setActionLoading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;
      if (!token) throw new Error('No auth token');
      
      const res = await fetch('/api/admin/approval-queue', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          queueId: selectedItem.id,
          action,
          rejectionReason: action === 'rejected' ? rejectionReason : undefined,
          revisionNotes: action === 'needs_revision' ? revisionNotes : undefined,
        }),
      });

      if (!res.ok) throw new Error(`Failed: ${res.status}`);

      // Refresh queue and close modal
      await fetchQueue();
      setSelectedItem(null);
      setRejectionReason('');
      setRevisionNotes('');
    } catch (err: any) {
      alert(`Error: ${err.message}`);
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) return <div style={{ padding: 20 }}>Loading approval queue...</div>;

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 24 }}>Content Approval Queue</h2>

      {error && <div style={{ padding: 12, background: '#fef2f2', color: '#991b1b', borderRadius: 6, marginBottom: 20 }}>Error: {error}</div>}

      {items.length === 0 ? (
        <div style={{ padding: 40, textAlign: 'center', color: '#6b7280', background: '#f9fafb', borderRadius: 8 }}>
          <p style={{ fontSize: 18, fontWeight: 500 }}>All caught up!</p>
          <p>No pending submissions to review</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: 12 }}>
          {items.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              style={{
                padding: 16,
                border: '1px solid #e5e7eb',
                borderRadius: 8,
                cursor: 'pointer',
                background: selectedItem?.id === item.id ? '#f0f4f8' : '#fff',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#f9fafb')}
              onMouseLeave={e => (e.currentTarget.style.background = selectedItem?.id === item.id ? '#f0f4f8' : '#fff')}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ display: 'inline-block', padding: '2px 8px', background: '#e0e7ff', color: '#4338ca', borderRadius: 4, fontSize: 12, fontWeight: 600, textTransform: 'uppercase' }}>
                      {item.content_type}
                    </span>
                    <span style={{ color: '#6b7280', fontSize: 12 }}>by {item.users?.username || 'Unknown'}</span>
                  </div>
                  <p style={{ fontSize: 14, color: '#1f2937', marginBottom: 4 }}>
                    <strong>{item.submission_content.business_name || item.submission_content.title || 'Untitled'}</strong>
                  </p>
                  <p style={{ color: '#6b7280', fontSize: 13, lineHeight: 1.5, maxHeight: 60, overflow: 'hidden' }}>
                    {item.submission_content.description?.substring(0, 100)}...
                  </p>
                  <p style={{ color: '#9ca3af', fontSize: 12, marginTop: 8 }}>
                    Submitted {new Date(item.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div style={{ fontSize: 12, color: '#0066b3', fontWeight: 600 }}>View</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Review Modal */}
      {selectedItem && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: 20 }}>
          <div style={{ background: 'white', borderRadius: 8, maxWidth: 600, maxHeight: '80vh', overflowY: 'auto', width: '100%' }}>
            <div style={{ padding: 24, borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: 18, fontWeight: 600 }}>Review Submission</h3>
              <button onClick={() => setSelectedItem(null)} style={{ background: 'none', border: 'none', fontSize: 24, cursor: 'pointer' }}>
                ✕
              </button>
            </div>

            <div style={{ padding: 24, display: 'grid', gap: 16 }}>
              {/* Content Preview */}
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, color: '#6b7280' }}>Submission Details</h4>
                <div style={{ background: '#f9fafb', padding: 12, borderRadius: 6, fontSize: 13 }}>
                  <p>
                    <strong>Type:</strong> {selectedItem.content_type}
                  </p>
                  <p>
                    <strong>Submitted by:</strong> {selectedItem.users?.username} ({selectedItem.users?.email})
                  </p>
                  <p>
                    <strong>Title:</strong> {selectedItem.submission_content.business_name || selectedItem.submission_content.title}
                  </p>
                  <p style={{ marginTop: 8 }}>
                    <strong>Description:</strong>
                  </p>
                  <p style={{ whiteSpace: 'pre-wrap', color: '#4b5563' }}>{selectedItem.submission_content.description}</p>
                </div>
              </div>

              {/* Action Inputs */}
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, color: '#6b7280' }}>Moderation Action</h4>

                <div style={{ display: 'grid', gap: 12 }}>
                  {/* Rejection Reason */}
                  <textarea
                    placeholder="Reason for rejection (if rejecting)"
                    value={rejectionReason}
                    onChange={e => setRejectionReason(e.target.value)}
                    style={{
                      width: '100%',
                      padding: 10,
                      border: '1px solid #e5e7eb',
                      borderRadius: 6,
                      fontSize: 13,
                      fontFamily: 'inherit',
                      minHeight: 60,
                    }}
                  />

                  {/* Revision Notes */}
                  <textarea
                    placeholder="Revision notes (if requesting revision)"
                    value={revisionNotes}
                    onChange={e => setRevisionNotes(e.target.value)}
                    style={{
                      width: '100%',
                      padding: 10,
                      border: '1px solid #e5e7eb',
                      borderRadius: 6,
                      fontSize: 13,
                      fontFamily: 'inherit',
                      minHeight: 60,
                    }}
                  />

                  {/* Action Buttons */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                    <button
                      onClick={() => handleApproveReject('approved')}
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
                      ✓ Approve
                    </button>
                    <button
                      onClick={() => handleApproveReject('needs_revision')}
                      disabled={actionLoading}
                      style={{
                        padding: '10px 16px',
                        background: '#f59e0b',
                        color: 'white',
                        border: 'none',
                        borderRadius: 6,
                        fontWeight: 600,
                        cursor: 'pointer',
                        opacity: actionLoading ? 0.5 : 1,
                      }}
                    >
                      ⟲ Revise
                    </button>
                    <button
                      onClick={() => handleApproveReject('rejected')}
                      disabled={actionLoading}
                      style={{
                        padding: '10px 16px',
                        background: '#ef4444',
                        color: 'white',
                        border: 'none',
                        borderRadius: 6,
                        fontWeight: 600,
                        cursor: 'pointer',
                        opacity: actionLoading ? 0.5 : 1,
                      }}
                    >
                      ✕ Reject
                    </button>
                  </div>

                  <button
                    onClick={() => setSelectedItem(null)}
                    style={{
                      padding: '10px 16px',
                      background: '#e5e7eb',
                      border: 'none',
                      borderRadius: 6,
                      cursor: 'pointer',
                      fontWeight: 500,
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
