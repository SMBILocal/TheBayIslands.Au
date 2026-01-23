'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface DirectoryListing {
  id: string;
  business_name: string;
  description: string;
  category: string;
  location: string;
  created_at: string;
  user_id: string;
}

export default function AdminDirectory() {
  const router = useRouter();
  const [listings, setListings] = useState<DirectoryListing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPendingListings();
  }, []);

  const fetchPendingListings = async () => {
    try {
      const response = await fetch('/api/admin/moderation/pending');
      if (response.ok) {
        const data = await response.json();
        setListings(data.directory_listings);
      }
    } catch (error) {
      console.error('Error fetching pending listings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: string) => {
    try {
      const response = await fetch('/api/admin/moderation/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content_type: 'directory_listings', content_id: id })
      });

      if (response.ok) {
        setListings(listings.filter(l => l.id !== id));
      }
    } catch (error) {
      console.error('Error approving listing:', error);
    }
  };

  const handleReject = async (id: string) => {
    const notes = prompt('Rejection notes (optional):');
    try {
      const response = await fetch('/api/admin/moderation/reject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content_type: 'directory_listings', content_id: id, notes })
      });

      if (response.ok) {
        setListings(listings.filter(l => l.id !== id));
      }
    } catch (error) {
      console.error('Error rejecting listing:', error);
    }
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Pending Directory Listings</h1>
        <button
          onClick={() => router.push('/admin/moderation')}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          ← Back to Dashboard
        </button>
      </div>

      {listings.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-gray-500">No pending directory listings</p>
        </div>
      ) : (
        <div className="space-y-4">
          {listings.map((listing) => (
            <div key={listing.id} className="bg-white p-6 rounded-lg shadow">
              <div className="mb-4">
                <h2 className="text-xl font-bold">{listing.business_name}</h2>
                <p className="text-sm text-gray-500">
                  {listing.category} • {listing.location}
                </p>
                <p className="text-sm text-gray-400">
                  Created: {new Date(listing.created_at).toLocaleString()}
                </p>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700">{listing.description}</p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleApprove(listing.id)}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(listing.id)}
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
