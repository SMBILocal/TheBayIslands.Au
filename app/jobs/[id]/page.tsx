'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FormModal from '@/components/FormModal';

interface Job {
  id: string;
  title: string;
  company: string;
  description: string;
  location: string;
  salary_range?: string;
  employment_type?: string;
  posted_at?: string;
}

export default function JobDetail({ params }: { params: { id: string } }) {
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchJob() {
      try {
        const res = await fetch('/api/jobs');
        const json = await res.json();
        const jobs = json.data || json || [];
        const found = jobs.find((j: any) => String(j.id) === String(params.id));
        setJob(found || null);
        setLoading(false);
      } catch (e) {
        console.error('Error:', e);
        setJob(null);
        setLoading(false);
      }
    }
    fetchJob();
  }, [params.id]);

  if (loading) {
    return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}><p>Loading...</p></div>;
  }

  if (!job) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>
        <div style={{ textAlign: 'center', maxWidth: 500 }}>
          <h1 style={{ fontSize: 32, color: '#0f172a', marginBottom: 12 }}>Job Not Found</h1>
          <button onClick={() => router.back()} style={{ padding: '12px 24px', background: '#667eea', color: 'white', border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}>Go Back</button>
        </div>
      </div>
    );
  }

  const postedDate = job.posted_at ? new Date(job.posted_at).toLocaleDateString('en-AU') : 'Recently posted';

  const handleApplySubmit = (formData: Record<string, string>) => {
    console.log('Job application submitted:', { jobId: job.id, jobTitle: job.title, ...formData });
    // In production, send to API
  };

  return (
    <main style={{ minHeight: '100vh', background: '#f8fafc' }}>
      <FormModal
        isOpen={showApplyForm}
        title="Apply for Job"
        description={`Apply to ${job.title} at ${job.company}`}
        fields={[
          { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'John Smith', required: true },
          { name: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com', required: true },
          { name: 'phone', label: 'Phone', type: 'tel', placeholder: '0412 345 678', required: true },
          { name: 'message', label: 'Cover Letter', type: 'textarea', placeholder: 'Tell us why you\'re a great fit...', required: true }
        ]}
        submitText="Submit Application"
        accentColor="#667eea"
        onSubmit={handleApplySubmit}
        onClose={() => setShowApplyForm(false)}
      />
      {/* Hero with Image */}
      <div style={{ position: 'relative', height: 'clamp(200px, 30vh, 300px)', background: `url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1400&h=300&fit=crop) center/cover`, backgroundAttachment: 'fixed' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(102,126,234,0.85) 0%, rgba(118,75,162,0.85) 100%)' }} />
      </div>

      {/* Main Content - Fully Responsive */}
      <div style={{ width: '100%', maxWidth: '100%', margin: 0, padding: 'clamp(20px, 5vw, 60px) clamp(16px, 5vw, 40px)', position: 'relative', boxSizing: 'border-box' }}>
        {/* Header Card */}
        <div style={{ background: 'white', borderRadius: '12px', padding: 'clamp(20px, 5vw, 40px)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: '32px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '20px' }}>
            <div>
              <div style={{ fontSize: '14px', color: '#667eea', fontWeight: '600', marginBottom: '8px' }}>{job.employment_type || 'Full-time'}</div>
              <h1 style={{ fontSize: 'clamp(1.5em, 4vw, 36px)', fontWeight: '700', color: '#0f172a', margin: '0 0 8px 0', wordBreak: 'break-word' }}>{job.title}</h1>
              <p style={{ fontSize: 'clamp(1em, 2vw, 18px)', color: '#64748b', margin: 0, wordBreak: 'break-word' }}>{job.company}</p>
            </div>
            <button onClick={() => setShowApplyForm(true)} style={{ padding: '12px 24px', background: '#667eea', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', alignSelf: 'flex-start', minHeight: '44px' }}>Apply Now</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '20px', paddingTop: '20px', borderTop: '1px solid #e2e8f0', width: '100%' }}>
            <div>
              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', marginBottom: '4px' }}>💰 Salary</div>
              <div style={{ fontSize: 'clamp(0.95em, 2vw, 18px)', fontWeight: '600', color: '#0f172a', wordBreak: 'break-word' }}>{job.salary_range || 'Competitive'}</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', marginBottom: '4px' }}>📍 Location</div>
              <div style={{ fontSize: 'clamp(0.95em, 2vw, 18px)', fontWeight: '600', color: '#0f172a', wordBreak: 'break-word' }}>{job.location}</div>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', marginBottom: '4px' }}>📅 Posted</div>
              <div style={{ fontSize: 'clamp(0.95em, 2vw, 18px)', fontWeight: '600', color: '#0f172a' }}>{postedDate}</div>
            </div>
          </div>
        </div>

        {/* Content Grid - Responsive */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(20px, 5vw, 32px)', width: '100%', boxSizing: 'border-box' }}>
          {/* Main Content */}
          <div style={{ minWidth: 0, width: '100%', boxSizing: 'border-box' }}>
            <div style={{ background: 'white', borderRadius: '12px', padding: 'clamp(20px, 5vw, 32px)', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '24px', width: '100%', boxSizing: 'border-box' }}>
              <h2 style={{ fontSize: 'clamp(1.3em, 3vw, 24px)', fontWeight: '600', color: '#0f172a', marginTop: 0, marginBottom: '16px' }}>About This Role</h2>
              <p style={{ fontSize: 'clamp(0.95em, 1.5vw, 16px)', color: '#475569', lineHeight: '1.8', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word', overflowWrap: 'break-word' }}>{job.description}</p>
            </div>

            <div style={{ background: 'white', borderRadius: '12px', padding: 'clamp(20px, 5vw, 32px)', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', width: '100%', boxSizing: 'border-box' }}>
              <h2 style={{ fontSize: 'clamp(1.3em, 3vw, 24px)', fontWeight: '600', color: '#0f172a', marginTop: 0, marginBottom: '16px' }}>Why Join {job.company}?</h2>
              <ul style={{ fontSize: 'clamp(0.95em, 1.5vw, 16px)', color: '#475569', lineHeight: '1.8', margin: 0, paddingLeft: '24px' }}>
                <li>Competitive salary and benefits package</li>
                <li>Work in beautiful island environment</li>
                <li>Professional development opportunities</li>
                <li>Friendly and supportive team</li>
                <li>Flexible work arrangements available</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', boxSizing: 'border-box' }}>
            <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', width: '100%', boxSizing: 'border-box' }}>
              <h3 style={{ fontSize: 'clamp(1.1em, 2vw, 18px)', fontWeight: '600', color: '#0f172a', marginTop: 0, marginBottom: '16px' }}>Job Details</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', marginBottom: '4px' }}>Type</div>
                  <div style={{ color: '#0f172a', fontWeight: '500', wordBreak: 'break-word' }}>{job.employment_type || 'Full-time'}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', marginBottom: '4px' }}>Salary</div>
                  <div style={{ color: '#0f172a', fontWeight: '500', wordBreak: 'break-word' }}>{job.salary_range || 'Competitive'}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', marginBottom: '4px' }}>Location</div>
                  <div style={{ color: '#0f172a', fontWeight: '500', wordBreak: 'break-word' }}>{job.location}</div>
                </div>
              </div>
            </div>

            <button onClick={() => setShowApplyForm(true)} style={{ width: '100%', padding: '16px', background: '#667eea', color: 'white', border: 'none', borderRadius: '8px', fontWeight: '600', fontSize: 'clamp(0.95em, 1.5vw, 16px)', cursor: 'pointer', minHeight: '44px', boxSizing: 'border-box' }}>Apply Now</button>
            <button style={{ width: '100%', padding: '12px', background: 'white', color: '#667eea', border: '2px solid #667eea', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: 'clamp(0.95em, 1.5vw, 16px)', minHeight: '44px', boxSizing: 'border-box' }}>Share Job</button>
            <button style={{ width: '100%', padding: '12px', background: 'white', color: '#667eea', border: '2px solid #667eea', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: 'clamp(0.95em, 1.5vw, 16px)', minHeight: '44px', boxSizing: 'border-box' }}>Save Job</button>
          </div>
        </div>
      </div>
    </main>
  );
}
