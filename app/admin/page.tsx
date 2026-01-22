'use client';

import AdminDashboardStats from '@/components/admin/AdminDashboardStats';
import ApprovalQueueReview from '@/components/admin/ApprovalQueueReview';
import ReportsManagement from '@/components/admin/ReportsManagement';
import { useState } from 'react';

export default function ModerationDashboard() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'queue' | 'reports'>('dashboard');

  const tabs = [
    { id: 'dashboard', label: '📊 Dashboard' },
    { id: 'queue', label: '⏳ Approval Queue' },
    { id: 'reports', label: '🚩 Reports' },
  ] as const;

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '24px' }}>
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: '#111827' }}>Moderation Dashboard</h1>
          <p style={{ color: '#6b7280' }}>Content approval, queue management, and abuse reports</p>
        </div>

        <div style={{ display: 'flex', gap: 12, marginBottom: 24, borderBottom: '2px solid #e5e7eb', paddingBottom: 12, flexWrap: 'wrap' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '10px 16px',
                background: activeTab === tab.id ? '#0066b3' : 'transparent',
                color: activeTab === tab.id ? 'white' : '#6b7280',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: activeTab === tab.id ? 600 : 500,
                fontSize: 14,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = '#f0f4f8';
                }
              }}
              onMouseLeave={e => {
                if (activeTab !== tab.id) {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div style={{ background: 'white', borderRadius: 8, border: '1px solid #e5e7eb', overflow: 'hidden' }}>
          {activeTab === 'dashboard' && <AdminDashboardStats />}
          {activeTab === 'queue' && <ApprovalQueueReview />}
          {activeTab === 'reports' && <ReportsManagement />}
        </div>

        <div style={{ marginTop: 32, padding: 20, background: '#e0e7ff', borderRadius: 8, color: '#4338ca' }}>
          <p style={{ fontSize: 13, margin: 0 }}>
            <strong>Phase 2c: Content Approval System v1.0</strong>
          </p>
          <p style={{ fontSize: 12, marginTop: 8, opacity: 0.8, margin: 0 }}>
            Approve pending submissions, manage reported content, and monitor platform moderation metrics.
          </p>
        </div>
      </div>
    </div>
  );
}
