'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Job {
  id: string;
  title: string;
  description: string;
  company_name: string;
  location: string;
  job_type?: string;
  salary_range?: string;
  created_at: string;
  user_id: string;
}

export default function AdminJobs() {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPendingJobs();
  }, []);

  const fetchPendingJobs = async () => {
    try {
      const response = await fetch('/api/admin/moderation/pending');
      if (response.ok) {
        const data = await response.json();
        setJobs(data.jobs);
      }
    } catch (error) {
      console.error('Error fetching pending jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: string) => {
    try {
      const response = await fetch('/api/admin/moderation/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content_type: 'jobs', content_id: id })
      });

      if (response.ok) {
        setJobs(jobs.filter(j => j.id !== id));
      }
    } catch (error) {
      console.error('Error approving job:', error);
    }
  };

  const handleReject = async (id: string) => {
    const notes = prompt('Rejection notes (optional):');
    try {
      const response = await fetch('/api/admin/moderation/reject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content_type: 'jobs', content_id: id, notes })
      });

      if (response.ok) {
        setJobs(jobs.filter(j => j.id !== id));
      }
    } catch (error) {
      console.error('Error rejecting job:', error);
    }
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Pending Job Postings</h1>
        <button
          onClick={() => router.push('/admin/moderation')}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ← Back to Dashboard
        </button>
      </div>

      {jobs.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-500">No pending job postings</p>
        </div>
      ) : (
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow">
              <div className="mb-4">
                <h2 className="text-xl font-bold">{job.title}</h2>
                <p className="text-sm text-gray-500">
                  {job.company_name} • {job.location}
                </p>
                {job.job_type && (
                  <p className="text-sm text-gray-500">{job.job_type}</p>
                )}
                {job.salary_range && (
                  <p className="text-sm text-gray-500">{job.salary_range}</p>
                )}
                <p className="text-sm text-gray-400">
                  Created: {new Date(job.created_at).toLocaleString()}
                </p>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700">{job.description}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleApprove(job.id)}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(job.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
