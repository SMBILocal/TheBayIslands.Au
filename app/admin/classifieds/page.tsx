'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Classified {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  location: string;
  condition?: string;
  created_at: string;
  user_id: string;
}

export default function AdminClassifieds() {
  const router = useRouter();
  const [classifieds, setClassifieds] = useState<Classified[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPendingClassifieds();
  }, []);

  const fetchPendingClassifieds = async () => {
    try {
      const response = await fetch('/api/admin/moderation/pending');
      if (response.ok) {
        const data = await response.json();
        setClassifieds(data.classifieds);
      }
    } catch (error) {
      console.error('Error fetching pending classifieds:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: string) => {
    try {
      const response = await fetch('/api/admin/moderation/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content_type: 'classifieds', content_id: id })
      });

      if (response.ok) {
        setClassifieds(classifieds.filter(c => c.id !== id));
      }
    } catch (error) {
      console.error('Error approving classified:', error);
    }
  };

  const handleReject = async (id: string) => {
    const notes = prompt('Rejection notes (optional):');
    try {
      const response = await fetch('/api/admin/moderation/reject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content_type: 'classifieds', content_id: id, notes })
      });

      if (response.ok) {
        setClassifieds(classifieds.filter(c => c.id !== id));
      }
    } catch (error) {
      console.error('Error rejecting classified:', error);
    }
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Pending Classifieds</h1>
        <button
          onClick={() => router.push('/admin/moderation')}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ← Back to Dashboard
        </button>
      </div>

      {classifieds.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-500">No pending classifieds</p>
        </div>
      ) : (
        <div className="space-y-4">
          {classifieds.map((classified) => (
            <div key={classified.id} className="bg-white p-6 rounded-lg shadow">
              <div className="mb-4">
                <h2 className="text-xl font-bold">{classified.title}</h2>
                <p className="text-sm text-gray-500">
                  {classified.category} • {classified.location}
                </p>
                <p className="text-lg font-semibold text-green-600">
                  ${classified.price}
                </p>
                {classified.condition && (
                  <p className="text-sm text-gray-500">Condition: {classified.condition}</p>
                )}
                <p className="text-sm text-gray-400">
                  Created: {new Date(classified.created_at).toLocaleString()}
                </p>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700">{classified.description}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleApprove(classified.id)}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(classified.id)}
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
