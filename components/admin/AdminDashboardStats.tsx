'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { supabase } from '@/lib/supabaseClient';

interface DashboardStats {
  queue: {
    pending: number;
    approved: number;
    rejected: number;
    byType: Record<string, number>;
  };
  reports: {
    open: number;
    byReason: Record<string, number>;
  };
  recentActions: any[];
}

export default function AdminDashboardStats() {
  const { user } = useAuth();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) return;

    const fetchStats = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        const token = session?.access_token;
        if (!token) return;
        
        const res = await fetch('/api/admin/dashboard', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error(`Failed to fetch stats: ${res.status}`);

        const data = await res.json();
        setStats(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 30000); // Refresh every 30s

    return () => clearInterval(interval);
  }, [user]);

  if (loading) return <div style={{ padding: 20 }}>Loading statistics...</div>;
  if (error) return <div style={{ padding: 20, color: 'red' }}>Error: {error}</div>;
  if (!stats) return null;

  const totalQueueItems = stats.queue.pending + stats.queue.approved + stats.queue.rejected;

  return (
    <div style={{ display: 'grid', gap: 24, padding: 24 }}>
      <h2 style={{ fontSize: 24, fontWeight: 600 }}>Moderation Dashboard</h2>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
        <StatCard
          label="Pending Approval"
          value={stats.queue.pending}
          color="#f59e0b"
          bgColor="#fffbeb"
        />
        <StatCard
          label="Approved"
          value={stats.queue.approved}
          color="#10b981"
          bgColor="#ecfdf5"
        />
        <StatCard
          label="Rejected"
          value={stats.queue.rejected}
          color="#ef4444"
          bgColor="#fef2f2"
        />
        <StatCard
          label="Open Reports"
          value={stats.reports.open}
          color="#8b5cf6"
          bgColor="#faf5ff"
        />
      </div>

      {/* Queue Breakdown by Type */}
      <section style={{ background: '#f9fafb', padding: 20, borderRadius: 8, border: '1px solid #e5e7eb' }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Pending by Type</h3>
        <div style={{ display: 'grid', gap: 8 }}>
          {Object.entries(stats.queue.byType).length === 0 ? (
            <p style={{ color: '#6b7280' }}>No pending submissions</p>
          ) : (
            Object.entries(stats.queue.byType).map(([type, count]) => (
              <div key={type} style={{ display: 'flex', justifyContent: 'space-between', padding: 8 }}>
                <span style={{ textTransform: 'capitalize' }}>{type}</span>
                <span style={{ fontWeight: 600, color: '#0066b3' }}>{count}</span>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Reports Breakdown */}
      <section style={{ background: '#f9fafb', padding: 20, borderRadius: 8, border: '1px solid #e5e7eb' }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Reports by Reason</h3>
        <div style={{ display: 'grid', gap: 8 }}>
          {Object.entries(stats.reports.byReason).length === 0 ? (
            <p style={{ color: '#6b7280' }}>No open reports</p>
          ) : (
            Object.entries(stats.reports.byReason).map(([reason, count]) => (
              <div key={reason} style={{ display: 'flex', justifyContent: 'space-between', padding: 8 }}>
                <span style={{ textTransform: 'capitalize' }}>{reason}</span>
                <span style={{ fontWeight: 600, color: '#ef4444' }}>{count}</span>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Recent Actions */}
      <section style={{ background: '#f9fafb', padding: 20, borderRadius: 8, border: '1px solid #e5e7eb' }}>
        <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Recent Moderation Actions</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', fontSize: 14, borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                <th style={{ textAlign: 'left', padding: 8, fontWeight: 600 }}>Action</th>
                <th style={{ textAlign: 'left', padding: 8, fontWeight: 600 }}>Type</th>
                <th style={{ textAlign: 'left', padding: 8, fontWeight: 600 }}>Reason</th>
                <th style={{ textAlign: 'left', padding: 8, fontWeight: 600 }}>Time</th>
              </tr>
            </thead>
            <tbody>
              {stats.recentActions.slice(0, 5).map(action => (
                <tr key={action.id} style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <td style={{ padding: 8 }}>
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '2px 8px',
                        borderRadius: 4,
                        backgroundColor:
                          action.action_type === 'approved'
                            ? '#ecfdf5'
                            : action.action_type === 'rejected'
                            ? '#fef2f2'
                            : '#fffbeb',
                        color:
                          action.action_type === 'approved'
                            ? '#10b981'
                            : action.action_type === 'rejected'
                            ? '#ef4444'
                            : '#f59e0b',
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      {action.action_type}
                    </span>
                  </td>
                  <td style={{ padding: 8, textTransform: 'capitalize' }}>{action.content_type}</td>
                  <td style={{ padding: 8, maxWidth: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {action.reason}
                  </td>
                  <td style={{ padding: 8, color: '#6b7280', fontSize: 12 }}>
                    {new Date(action.created_at).toLocaleDateString()} {new Date(action.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function StatCard({ label, value, color, bgColor }: { label: string; value: number; color: string; bgColor: string }) {
  return (
    <div style={{ background: bgColor, padding: 16, borderRadius: 8, border: `1px solid ${color}22` }}>
      <p style={{ color: '#6b7280', fontSize: 12, fontWeight: 500, marginBottom: 8 }}>{label}</p>
      <p style={{ fontSize: 32, fontWeight: 700, color }}>{value}</p>
    </div>
  );
}
