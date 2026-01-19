'use client';

import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import supabase from '@/lib/supabaseClient';

interface DirectoryListing {
  id: string;
  business_name: string;
  category: string;
  location: string;
  status: string;
  views: number;
  created_at: string;
  featured: boolean;
}

export default function DirectoryListingsPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [listings, setListings] = useState<DirectoryListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user) {
      router.push('/login?redirectTo=/dashboard/directory');
      return;
    }
    fetchListings();
  }, [user, router]);

  const fetchListings = async () => {
    try {
      setLoading(true);
      const { data, error: fetchError } = await supabase
        .from('directory_listings')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (fetchError) throw fetchError;
      setListings(data || []);
    } catch (err: any) {
      setError(err.message || 'Failed to load listings');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this listing?')) return;

    try {
      const { error: deleteError } = await supabase
        .from('directory_listings')
        .delete()
        .eq('id', id);

      if (deleteError) throw deleteError;
      setListings(listings.filter(l => l.id !== id));
    } catch (err: any) {
      alert(err.message || 'Failed to delete listing');
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h1>My Directory Listings</h1>
          <Link href="/directory">
            <button style={{
              backgroundColor: '#0070f3',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer'
            }}>
              New Listing
            </button>
          </Link>
        </div>

        {error && (
          <div style={{
            backgroundColor: '#fee',
            color: '#c33',
            padding: '12px',
            borderRadius: '4px',
            marginBottom: '20px'
          }}>
            {error}
          </div>
        )}

        {listings.length === 0 ? (
          <div style={{
            backgroundColor: '#f5f5f5',
            padding: '40px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <p style={{ color: '#666', marginBottom: '20px' }}>
              You haven't created any directory listings yet.
            </p>
            <Link href="/directory">
              <button style={{
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer'
              }}>
                Create Your First Listing
              </button>
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: '15px' }}>
            {listings.map(listing => (
              <div key={listing.id} style={{
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '20px',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                alignItems: 'center',
                gap: '20px'
              }}>
                <div>
                  <h3 style={{ margin: '0 0 10px 0' }}>{listing.business_name}</h3>
                  <div style={{ color: '#666', fontSize: '14px' }}>
                    <p style={{ margin: '5px 0' }}>
                      <strong>Category:</strong> {listing.category}
                    </p>
                    <p style={{ margin: '5px 0' }}>
                      <strong>Location:</strong> {listing.location}
                    </p>
                    <p style={{ margin: '5px 0' }}>
                      <strong>Status:</strong> <span style={{
                        backgroundColor: listing.status === 'active' ? '#efe' : '#fee',
                        color: listing.status === 'active' ? '#3c3' : '#c33',
                        padding: '2px 8px',
                        borderRadius: '3px'
                      }}>
                        {listing.status}
                      </span>
                    </p>
                    <p style={{ margin: '5px 0' }}>
                      <strong>Views:</strong> {listing.views}
                    </p>
                    {listing.featured && (
                      <p style={{ margin: '5px 0', color: '#ffc107' }}>
                        ⭐ Featured
                      </p>
                    )}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
                  <Link href={`/directory/${listing.id}`}>
                    <button style={{
                      backgroundColor: '#0070f3',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '14px',
                      width: '120px'
                    }}>
                      View
                    </button>
                  </Link>
                  <Link href={`/dashboard/directory/${listing.id}/edit`}>
                    <button style={{
                      backgroundColor: '#666',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '14px',
                      width: '120px'
                    }}>
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(listing.id)}
                    style={{
                      backgroundColor: '#dc3545',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '14px',
                      width: '120px'
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
