'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface BacklinkEntry {
  id: string;
  domain: string;
  url: string;
  dateFound: string;
  status: 'active' | 'broken' | 'checking';
  type: 'backlink' | 'reciprocal' | 'social' | 'directory';
  notes?: string;
}

interface SearchMention {
  id: string;
  query: string;
  url: string;
  position?: number;
  dateFound: string;
  searchEngine: 'google' | 'bing' | 'duckduckgo';
  verified: boolean;
}

export default function SEOControlPanel() {
  const [activeTab, setActiveTab] = useState<'indexing' | 'backlinks' | 'mentions'>('indexing');
  const [indexingEnabled, setIndexingEnabled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [backlinks, setBacklinks] = useState<BacklinkEntry[]>([]);
  const [mentions, setMentions] = useState<SearchMention[]>([]);
  const [newBacklink, setNewBacklink] = useState({ domain: '', url: '', type: 'backlink' as const });
  const [newMention, setNewMention] = useState({ query: '', url: '' });
  const [submittingSearch, setSubmittingSearch] = useState(false);
  const [searchResults, setSearchResults] = useState<any>(null);

  // Load indexing status
  useEffect(() => {
    const status = localStorage.getItem('seoIndexingEnabled') === 'true';
    setIndexingEnabled(status);
    
    // Load backlinks and mentions from localStorage
    const savedBacklinks = localStorage.getItem('seoBacklinks');
    const savedMentions = localStorage.getItem('seoMentions');
    
    if (savedBacklinks) setBacklinks(JSON.parse(savedBacklinks));
    if (savedMentions) setMentions(JSON.parse(savedMentions));
    
    setLoading(false);
  }, []);

  const handleToggleIndexing = async () => {
    const newStatus = !indexingEnabled;
    setIndexingEnabled(newStatus);
    localStorage.setItem('seoIndexingEnabled', newStatus.toString());

    // Update environment variable reflection
    try {
      const response = await fetch('/api/admin/seo/toggle-indexing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ enabled: newStatus }),
      });
      if (response.ok) {
        alert(`✅ Indexing ${newStatus ? 'ENABLED' : 'DISABLED'}. Changes will take effect on next deployment.`);
      }
    } catch (err) {
      console.error('Error toggling indexing:', err);
    }
  };

  const handleAddBacklink = () => {
    if (!newBacklink.domain || !newBacklink.url) {
      alert('Please fill in domain and URL');
      return;
    }
    const entry: BacklinkEntry = {
      id: Date.now().toString(),
      ...newBacklink,
      dateFound: new Date().toLocaleDateString(),
      status: 'checking',
    };
    const updated = [...backlinks, entry];
    setBacklinks(updated);
    localStorage.setItem('seoBacklinks', JSON.stringify(updated));
    setNewBacklink({ domain: '', url: '', type: 'backlink' });
  };

  const handleDeleteBacklink = (id: string) => {
    const updated = backlinks.filter(b => b.id !== id);
    setBacklinks(updated);
    localStorage.setItem('seoBacklinks', JSON.stringify(updated));
  };

  const handleAddMention = () => {
    if (!newMention.query || !newMention.url) {
      alert('Please fill in search query and URL');
      return;
    }
    const entry: SearchMention = {
      id: Date.now().toString(),
      ...newMention,
      dateFound: new Date().toLocaleDateString(),
      searchEngine: 'google',
      verified: false,
    };
    const updated = [...mentions, entry];
    setMentions(updated);
    localStorage.setItem('seoMentions', JSON.stringify(updated));
    setNewMention({ query: '', url: '' });
  };

  const handleRunInternetSearch = async () => {
    setSubmittingSearch(true);
    try {
      const response = await fetch('/api/admin/seo/search-mentions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          domain: 'thebayislands.au',
          keywords: ['bay islands', 'smbi', 'redland'],
        }),
      });
      const data = await response.json();
      setSearchResults(data);
    } catch (err) {
      console.error('Search error:', err);
      alert('Error running search. Check console.');
    }
    setSubmittingSearch(false);
  };

  const handleSubmitToSearchEngines = async () => {
    if (!indexingEnabled) {
      alert('⚠️ Indexing is currently DISABLED. Enable it first before submitting to search engines.');
      return;
    }
    
    const confirm = window.confirm(
      '📢 Submit to search engines?\n\nThis will submit:\n- Google Search Console\n- Bing Webmaster Tools\n- DuckDuckGo\n\nContinue?'
    );
    
    if (!confirm) return;

    try {
      const response = await fetch('/api/admin/seo/submit-search-engines', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sitemapUrl: 'https://thebayislands.au/sitemap.xml',
          urls: [
            'https://thebayislands.au',
            'https://thebayislands.au/articles',
            'https://thebayislands.au/directory',
            'https://thebayislands.au/events',
          ],
        }),
      });
      const data = await response.json();
      if (data.success) {
        alert('✅ Submission requests sent to major search engines!\n\nMonitor Google Search Console and Bing Webmaster Tools for confirmation.');
      } else {
        alert('⚠️ Submissions completed with some issues. Check console for details.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      alert('Error submitting to search engines. Check console.');
    }
  };

  if (loading) return <div style={{ padding: 40, textAlign: 'center' }}>Loading SEO Panel...</div>;

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb', padding: 32 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8, color: '#0b1727' }}>🔍 SEO Control Panel</h1>
          <p style={{ color: '#64748b', fontSize: 14 }}>
            Manage indexing, backlinks, search engine submissions, and monitor online mentions
          </p>
        </div>

        {/* Tab Navigation */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 24, borderBottom: '2px solid #e2e8f0' }}>
          {['indexing', 'backlinks', 'mentions'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              style={{
                padding: '12px 24px',
                background: activeTab === tab ? '#0066b3' : 'transparent',
                color: activeTab === tab ? 'white' : '#64748b',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer',
                fontWeight: activeTab === tab ? 600 : 500,
                fontSize: 14,
              }}
            >
              {tab === 'indexing' && '🤖 Indexing'}
              {tab === 'backlinks' && '🔗 Backlinks'}
              {tab === 'mentions' && '📢 Mentions & Tracking'}
            </button>
          ))}
        </div>

        {/* Indexing Tab */}
        {activeTab === 'indexing' && (
          <div style={{ background: 'white', borderRadius: 12, padding: 32, marginBottom: 24 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24, color: '#0b1727' }}>Search Engine Indexing</h2>

            <div style={{ background: indexingEnabled ? '#dcfce7' : '#fee2e2', padding: 20, borderRadius: 8, marginBottom: 24 }}>
              <p style={{ fontSize: 14, color: '#15803d', fontWeight: 600, margin: '0 0 8px 0' }}>
                {indexingEnabled ? '✅ INDEXING ENABLED' : '🚫 INDEXING DISABLED'}
              </p>
              <p style={{ fontSize: 14, color: indexingEnabled ? '#15803d' : '#991b1b', margin: 0 }}>
                {indexingEnabled
                  ? 'Search engines can crawl and index this site. Make sure to submit to search engines when ready.'
                  : 'Search engines are blocked from crawling and indexing this site. Good for development/staging.'}
              </p>
            </div>

            <button
              onClick={handleToggleIndexing}
              style={{
                padding: '12px 32px',
                fontSize: 16,
                fontWeight: 600,
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                background: indexingEnabled ? '#dc2626' : '#16a34a',
                color: 'white',
                marginBottom: 32,
              }}
            >
              {indexingEnabled ? '🚫 Disable Indexing' : '✅ Enable Indexing'}
            </button>

            <hr style={{ margin: '32px 0', border: 'none', borderTop: '1px solid #e2e8f0' }} />

            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#0b1727' }}>Submit to Search Engines</h3>
            <p style={{ fontSize: 14, color: '#64748b', marginBottom: 16 }}>
              Once indexing is enabled, submit your sitemap to major search engines for faster discovery.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
              {[
                { name: 'Google Search Console', icon: '🔎', url: 'https://search.google.com/search-console' },
                { name: 'Bing Webmaster Tools', icon: '🔍', url: 'https://www.bing.com/webmaster' },
                { name: 'DuckDuckGo Submit', icon: '🦆', url: 'https://duckduckgo.com/search/submit' },
              ].map((engine, idx) => (
                <a
                  key={idx}
                  href={engine.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: 16,
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: 8,
                    textDecoration: 'none',
                    color: '#0066b3',
                    fontWeight: 600,
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{engine.icon}</div>
                  {engine.name}
                </a>
              ))}
            </div>

            <button
              onClick={handleSubmitToSearchEngines}
              disabled={!indexingEnabled}
              style={{
                padding: '14px 32px',
                fontSize: 16,
                fontWeight: 700,
                border: 'none',
                borderRadius: 8,
                cursor: indexingEnabled ? 'pointer' : 'not-allowed',
                background: indexingEnabled ? '#0066b3' : '#cbd5e1',
                color: 'white',
                width: '100%',
                marginBottom: 16,
              }}
            >
              📢 Submit Sitemap to All Search Engines
            </button>

            <p style={{ fontSize: 12, color: '#64748b', margin: 0 }}>
              💡 This sends your sitemap URL to Google, Bing, and DuckDuckGo for discovery and indexing.
            </p>
          </div>
        )}

        {/* Backlinks Tab */}
        {activeTab === 'backlinks' && (
          <div style={{ background: 'white', borderRadius: 12, padding: 32, marginBottom: 24 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24, color: '#0b1727' }}>Backlink & Reciprocal Link Management</h2>

            {/* Add New Backlink Form */}
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, marginBottom: 24 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#0b1727' }}>Add Backlink Entry</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 12 }}>
                <input
                  type="text"
                  placeholder="Domain (e.g., redlandbaysidenews.com.au)"
                  value={newBacklink.domain}
                  onChange={e => setNewBacklink({ ...newBacklink, domain: e.target.value })}
                  style={{ padding: 10, border: '1px solid #e2e8f0', borderRadius: 6, fontSize: 14 }}
                />
                <input
                  type="text"
                  placeholder="Full URL (e.g., https://...)"
                  value={newBacklink.url}
                  onChange={e => setNewBacklink({ ...newBacklink, url: e.target.value })}
                  style={{ padding: 10, border: '1px solid #e2e8f0', borderRadius: 6, fontSize: 14 }}
                />
                <select
                  value={newBacklink.type}
                  onChange={e => setNewBacklink({ ...newBacklink, type: e.target.value as any })}
                  style={{ padding: 10, border: '1px solid #e2e8f0', borderRadius: 6, fontSize: 14 }}
                >
                  <option value="backlink">Backlink</option>
                  <option value="reciprocal">Reciprocal Link</option>
                  <option value="social">Social Media</option>
                  <option value="directory">Business Directory</option>
                </select>
              </div>
              <button
                onClick={handleAddBacklink}
                style={{
                  padding: '10px 20px',
                  background: '#0066b3',
                  color: 'white',
                  border: 'none',
                  borderRadius: 6,
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                + Add Backlink
              </button>
            </div>

            {/* Backlinks List */}
            <div style={{ marginBottom: 24 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#0b1727' }}>
                Tracked Backlinks ({backlinks.length})
              </h3>
              {backlinks.length === 0 ? (
                <p style={{ color: '#64748b', fontSize: 14 }}>No backlinks tracked yet. Add one above.</p>
              ) : (
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                    <thead>
                      <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                        <th style={{ padding: 12, textAlign: 'left', fontWeight: 600 }}>Domain</th>
                        <th style={{ padding: 12, textAlign: 'left', fontWeight: 600 }}>Type</th>
                        <th style={{ padding: 12, textAlign: 'left', fontWeight: 600 }}>Status</th>
                        <th style={{ padding: 12, textAlign: 'left', fontWeight: 600 }}>Date Found</th>
                        <th style={{ padding: 12, textAlign: 'center', fontWeight: 600 }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {backlinks.map(link => (
                        <tr key={link.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                          <td style={{ padding: 12 }}>
                            <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: '#0066b3' }}>
                              {link.domain}
                            </a>
                          </td>
                          <td style={{ padding: 12 }}>
                            {link.type === 'backlink' && '🔗'} {link.type === 'reciprocal' && '↔️'} {link.type === 'social' && '📱'}{' '}
                            {link.type === 'directory' && '📂'}
                          </td>
                          <td style={{ padding: 12 }}>
                            <span
                              style={{
                                padding: '4px 8px',
                                borderRadius: 4,
                                fontSize: 12,
                                background:
                                  link.status === 'active'
                                    ? '#dcfce7'
                                    : link.status === 'broken'
                                      ? '#fee2e2'
                                      : '#fef3c7',
                                color:
                                  link.status === 'active'
                                    ? '#15803d'
                                    : link.status === 'broken'
                                      ? '#991b1b'
                                      : '#92400e',
                              }}
                            >
                              {link.status}
                            </span>
                          </td>
                          <td style={{ padding: 12 }}>{link.dateFound}</td>
                          <td style={{ padding: 12, textAlign: 'center' }}>
                            <button
                              onClick={() => handleDeleteBacklink(link.id)}
                              style={{
                                padding: '4px 8px',
                                background: '#fee2e2',
                                color: '#991b1b',
                                border: 'none',
                                borderRadius: 4,
                                cursor: 'pointer',
                                fontSize: 12,
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mentions Tab */}
        {activeTab === 'mentions' && (
          <div style={{ background: 'white', borderRadius: 12, padding: 32, marginBottom: 24 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24, color: '#0b1727' }}>Search Mentions & Local Link Tracking</h2>

            {/* Search Tools */}
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, marginBottom: 24 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#0b1727' }}>🔎 Internet Search Tool</h3>
              <p style={{ fontSize: 14, color: '#64748b', marginBottom: 16 }}>
                Run searches to find where Bay Islands is linked or mentioned across the web.
              </p>
              <button
                onClick={handleRunInternetSearch}
                disabled={submittingSearch}
                style={{
                  padding: '12px 24px',
                  background: submittingSearch ? '#cbd5e1' : '#0066b3',
                  color: 'white',
                  border: 'none',
                  borderRadius: 6,
                  cursor: submittingSearch ? 'not-allowed' : 'pointer',
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                {submittingSearch ? '⏳ Searching...' : '🔍 Search for Links & Mentions'}
              </button>

              {searchResults && (
                <div style={{ marginTop: 16, padding: 12, background: 'white', borderRadius: 6, border: '1px solid #e2e8f0' }}>
                  <pre style={{ fontSize: 12, overflow: 'auto', maxHeight: 200 }}>
                    {JSON.stringify(searchResults, null, 2)}
                  </pre>
                </div>
              )}
            </div>

            {/* Manual Mention Entry */}
            <div style={{ background: '#f8fafc', padding: 20, borderRadius: 8, marginBottom: 24 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#0b1727' }}>Add Manual Search Mention</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, marginBottom: 12 }}>
                <input
                  type="text"
                  placeholder="Search query (e.g., 'bay islands rubbish')"
                  value={newMention.query}
                  onChange={e => setNewMention({ ...newMention, query: e.target.value })}
                  style={{ padding: 10, border: '1px solid #e2e8f0', borderRadius: 6, fontSize: 14 }}
                />
                <input
                  type="text"
                  placeholder="URL where found"
                  value={newMention.url}
                  onChange={e => setNewMention({ ...newMention, url: e.target.value })}
                  style={{ padding: 10, border: '1px solid #e2e8f0', borderRadius: 6, fontSize: 14 }}
                />
              </div>
              <button
                onClick={handleAddMention}
                style={{
                  padding: '10px 20px',
                  background: '#0066b3',
                  color: 'white',
                  border: 'none',
                  borderRadius: 6,
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                + Add Mention
              </button>
            </div>

            {/* Mentions List */}
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#0b1727' }}>
                Tracked Mentions ({mentions.length})
              </h3>
              {mentions.length === 0 ? (
                <p style={{ color: '#64748b', fontSize: 14 }}>No mentions tracked yet.</p>
              ) : (
                <div style={{ display: 'grid', gap: 12 }}>
                  {mentions.map(mention => (
                    <div key={mention.id} style={{ padding: 12, background: '#f8fafc', borderRadius: 6, border: '1px solid #e2e8f0' }}>
                      <p style={{ fontSize: 14, fontWeight: 600, margin: '0 0 4px 0', color: '#0b1727' }}>{mention.query}</p>
                      <a href={mention.url} target="_blank" rel="noopener noreferrer" style={{ color: '#0066b3', fontSize: 13 }}>
                        {mention.url}
                      </a>
                      <p style={{ fontSize: 12, color: '#64748b', margin: '8px 0 0 0' }}>Found: {mention.dateFound}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
