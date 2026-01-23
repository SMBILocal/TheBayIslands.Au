'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface PendingCounts {
  directory_listings: number;
  jobs: number;
  classifieds: number;
  total: number;
}

export default function ModerationDashboard() {
  const router = useRouter();
  const [counts, setCounts] = useState<PendingCounts | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPendingCounts();
  }, []);

  const fetchPendingCounts = async () => {
    try {
      const response = await fetch('/api/admin/moderation/pending');
      if (response.ok) {
        const data = await response.json();
        setCounts(data.counts);
      }
    } catch (error) {
      console.error('Error fetching pending counts:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Moderation Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Directory Listings</h3>
          <p className="text-3xl font-bold">{counts?.directory_listings || 0}</p>
          <button
            onClick={() => router.push('/admin/directory')}
            className="mt-4 text-blue-600 hover:underline"
          >
            Review →
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Jobs</h3>
          <p className="text-3xl font-bold">{counts?.jobs || 0}</p>
          <button
            onClick={() => router.push('/admin/jobs')}
            className="mt-4 text-blue-600 hover:underline"
          >
            Review →
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Classifieds</h3>
          <p className="text-3xl font-bold">{counts?.classifieds || 0}</p>
          <button
            onClick={() => router.push('/admin/classifieds')}
            className="mt-4 text-blue-600 hover:underline"
          >
            Review →
          </button>
        </div>

        <div className="bg-blue-600 text-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Total Pending</h3>
          <p className="text-3xl font-bold">{counts?.total || 0}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => router.push('/admin/directory')}
              className="text-blue-600 hover:underline"
            >
              Review Directory Listings
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push('/admin/jobs')}
              className="text-blue-600 hover:underline"
            >
              Review Job Postings
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push('/admin/classifieds')}
              className="text-blue-600 hover:underline"
            >
              Review Classifieds
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
