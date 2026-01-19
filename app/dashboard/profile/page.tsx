'use client';

import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import supabase from '@/lib/supabaseClient';

interface UserProfile {
  id: string;
  email: string;
  username?: string;
  avatar_url?: string;
  bio?: string;
  is_premium: boolean;
  created_at?: string;
}

export default function ProfilePage() {
  const { user } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    bio: '',
    avatar_url: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (!user) {
      router.push('/login?redirectTo=/dashboard/profile');
      return;
    }

    fetchProfile();
  }, [user, router]);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const { data, error: fetchError } = await supabase
        .from('users')
        .select('*')
        .eq('id', user?.id)
        .single();

      if (fetchError) throw fetchError;

      setProfile(data);
      setFormData({
        username: data.username || '',
        bio: data.bio || '',
        avatar_url: data.avatar_url || ''
      });
    } catch (err: any) {
      setError(err.message || 'Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const { error: updateError } = await supabase
        .from('users')
        .update({
          username: formData.username,
          bio: formData.bio,
          avatar_url: formData.avatar_url,
          updated_at: new Date()
        })
        .eq('id', user?.id);

      if (updateError) throw updateError;

      setSuccess('Profile updated successfully');
      setEditing(false);
      await fetchProfile();
    } catch (err: any) {
      setError(err.message || 'Failed to update profile');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user || !profile) return null;

  return (
    <div style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
        <h1>My Profile</h1>

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

        {success && (
          <div style={{
            backgroundColor: '#efe',
            color: '#3c3',
            padding: '12px',
            borderRadius: '4px',
            marginBottom: '20px'
          }}>
            {success}
          </div>
        )}

        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '30px',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Email
            </label>
            <input
              type="email"
              value={user.email || ''}
              disabled
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                backgroundColor: '#fff',
                cursor: 'not-allowed'
              }}
            />
            <small style={{ color: '#666' }}>Email cannot be changed</small>
          </div>

          {editing ? (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Username
                </label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    boxSizing: 'border-box'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Bio
                </label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ddd',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#0070f3',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  style={{
                    backgroundColor: '#ddd',
                    color: '#333',
                    padding: '10px 20px',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Username
                </label>
                <p style={{ margin: 0, color: '#666' }}>
                  {profile.username || '(Not set)'}
                </p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Bio
                </label>
                <p style={{ margin: 0, color: '#666' }}>
                  {profile.bio || '(Not set)'}
                </p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                  Account Type
                </label>
                <p style={{ margin: 0, color: '#666' }}>
                  {profile.is_premium ? 'Premium' : 'Free'}
                </p>
              </div>

              <button
                onClick={() => setEditing(true)}
                style={{
                  backgroundColor: '#0070f3',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Edit Profile
              </button>
            </>
          )}
        </div>

        <div style={{
          backgroundColor: '#f9f9f9',
          padding: '20px',
          borderRadius: '8px',
          borderLeft: '4px solid #0070f3'
        }}>
          <h3 style={{ marginTop: 0 }}>Account Information</h3>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#666' }}>
            <li>Member since: {profile.created_at ? new Date(profile.created_at).toLocaleDateString() : 'Unknown'}</li>
            <li>Account status: Active</li>
            <li>Email verified: Yes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
