'use client';

import { useState, useEffect } from 'react';
import Card from '@/components/Card';
import FilterPanel from '@/components/FilterPanel';
import FormModal from '@/components/FormModal';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  employment_type?: string;
  salary_range?: string;
  description: string;
  posted_at?: string;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [showPostJobForm, setShowPostJobForm] = useState(false);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch('/api/jobs', { cache: 'no-store' });
        const json = await res.json();
        setJobs(Array.isArray(json) ? json : []);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job => {
    // If no search query, show all
    if (searchQuery.trim()) {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchesSearch) return false;
    }

    // If salary filter set and has value, apply it
    if (filters.maxSalary) {
      const jobSalary = parseInt(job.salary_range?.match(/\d+/)?.[0] || '0');
      if (jobSalary > filters.maxSalary) return false;
    }

    // If employment type filter set, apply it
    if (filters.employment_type && filters.employment_type.length > 0) {
      if (!filters.employment_type.includes(job.employment_type)) return false;
    }

    return true;
  });

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: 'clamp(40px, 8vw, 60px) clamp(16px, 5vw, 20px)', marginBottom: 40 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2em, 5vw, 42px)', fontWeight: 700, margin: '0 0 12px 0' }}>Jobs & Careers</h1>
          <p style={{ fontSize: 'clamp(1em, 2vw, 18px)', opacity: 0.9, margin: 0 }}>Find local work across the Bay Islands</p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 clamp(16px, 5vw, 20px) clamp(40px, 8vw, 60px)' }}>
        <div style={{ display: 'flex', gap: 16, marginBottom: 32, alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search jobs by title, company, or location..."
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
            <button
              onClick={() => setViewMode('grid')}
              style={{
                padding: '8px 16px',
                background: viewMode === 'grid' ? '#667eea' : 'transparent',
                color: viewMode === 'grid' ? 'white' : '#64748b',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: 14
              }}
            >
              ⊞ Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              style={{
                padding: '8px 16px',
                background: viewMode === 'list' ? '#667eea' : 'transparent',
                color: viewMode === 'list' ? 'white' : '#64748b',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: 14
              }}
            >
              ☰ List
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(16px, 4vw, 32px)' }}>
          <div style={{ gridColumn: '1 / -1' }}>
            {loading ? (
              <div style={{ textAlign: 'center', padding: 60, color: '#64748b' }}>
                <p>Loading jobs...</p>
              </div>
            ) : filteredJobs.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: viewMode === 'list' ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'clamp(16px, 4vw, 20px)', width: '100%' }}>
                {filteredJobs.map(job => (
                  <Card
                    key={job.id}
                    title={job.title}
                    subtitle={job.company}
                    description={job.description}
                    location={job.location}
                    badge={job.employment_type}
                    date={job.posted_at}
                    href={`/jobs/${job.id}`}
                    ctaText="View Job"
                    imageSrc={`https://picsum.photos/seed/job-${job.id}/400/300`}
                  />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: 60, color: '#64748b', gridColumn: '1 / -1' }}>
                <p>No jobs found matching your search.</p>
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: 'clamp(40px, 10vw, 60px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(16px, 4vw, 32px)' }}>
          <div style={{ gridColumn: '1 / -1' }}>
            <FilterPanel
              title="Filter Results"
              accentColor="#667eea"
              filters={[
                {
                  name: 'maxSalary',
                  label: 'Max Salary',
                  type: 'range',
                  min: 0,
                  max: 200000,
                  step: 5000
                },
                {
                  name: 'employment_type',
                  label: 'Employment Type',
                  type: 'checkbox',
                  options: [
                    { label: 'Full-time', value: 'Full-time' },
                    { label: 'Part-time', value: 'Part-time' },
                    { label: 'Casual', value: 'Casual' },
                    { label: 'Contract', value: 'Contract' }
                  ]
                }
              ]}
              onFilterChange={setFilters}
            />
          </div>

          <div style={{ background: 'white', borderRadius: 12, padding: 'clamp(20px, 5vw, 24px)', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ fontSize: 'clamp(1.1em, 2vw, 18px)', fontWeight: 600, margin: '0 0 12px 0' }}>Post a Job</h3>
            <p style={{ fontSize: 'clamp(0.9em, 1.5vw, 14px)', color: '#64748b', margin: '0 0 16px 0' }}>Employers: create a listing to reach local candidates.</p>
            <button onClick={() => setShowPostJobForm(true)} style={{
              width: '100%',
              padding: 12,
              background: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              fontWeight: 600,
              cursor: 'pointer',
              minHeight: '44px'
            }}>
              Post Job
            </button>
          </div>

          <div style={{ background: 'white', borderRadius: 12, padding: 'clamp(20px, 5vw, 24px)', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h4 style={{ fontSize: 'clamp(1em, 1.5vw, 16px)', fontWeight: 600, margin: '0 0 12px 0' }}>Total Jobs</h4>
            <div style={{ fontSize: 'clamp(1.8em, 5vw, 32px)', fontWeight: 700, color: '#667eea' }}>{filteredJobs.length}</div>
          </div>
        </div>
      </div>

      <FormModal
        isOpen={showPostJobForm}
        title="Post a Job"
        description="Fill out the details below to list your job opportunity on the Bay Islands Hub."
        accentColor="#667eea"
        fields={[
          { name: 'title', label: 'Job Title', type: 'text', placeholder: 'e.g. Head Chef', required: true },
          { name: 'company', label: 'Company Name', type: 'text', placeholder: 'e.g. Island Cafe', required: true },
          { name: 'location', label: 'Location', type: 'text', placeholder: 'e.g. Russell Island', required: true },
          { name: 'salary', label: 'Salary Range', type: 'text', placeholder: 'e.g. $60k-$75k', required: false },
          { name: 'description', label: 'Job Description', type: 'textarea', placeholder: 'Describe the role, requirements, and benefits...', required: true },
        ]}
        onSubmit={(data) => {
          console.log('Job posted:', data);
          setShowPostJobForm(false);
          alert('Job posted successfully! (In production, this would save to database)');
        }}
        onClose={() => setShowPostJobForm(false)}
      />
    </main>
  );
}
