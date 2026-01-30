'use client';

import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import supabase from '@/lib/supabaseClient';

interface UserProfile {
  id: string;
  email: string;
  username?: string;
  full_name?: string;
  avatar_url?: string;
  bio?: string;
  is_premium: boolean;
  created_at?: string;
}

export default function ProfilePage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [profileSource, setProfileSource] = useState<'users' | 'user_profiles'>('users');
  const [formData, setFormData] = useState({
    username: '',
    full_name: '',
    bio: '',
    avatar_url: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (authLoading) return;
    
    if (!user) {
      router.push('/login?redirectTo=/dashboard/profile');
      return;
    }

    fetchProfile();
  }, [user, authLoading, router]);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const { data: usersData, error: usersError } = await supabase
        .from('users')
        .select('*')
        .eq('id', user?.id)
        .single();

      if (!usersError && usersData) {
        setProfileSource('users');
        setProfile(usersData as UserProfile);
        setFormData({
          username: usersData.username || '',
          full_name: usersData.username || '',
          bio: usersData.bio || '',
          avatar_url: usersData.avatar_url || ''
        });
        return;
      }

      const usersTableMissing = usersError?.message?.includes("Could not find the table 'public.users'");

      if (!usersTableMissing && usersError) {
        throw usersError;
      }

      const { data: profilesData, error: profilesError } = await supabase
        .from('user_profiles')
        .select('*')
        .or(`auth_user_id.eq.${user?.id},user_id.eq.${user?.id}`)
        .limit(1)
        .maybeSingle();

      if (profilesError) throw profilesError;

      if (!profilesData) {
        const { data: createdProfile, error: createError } = await supabase
          .from('user_profiles')
          .insert([
            {
              auth_user_id: user?.id,
              user_id: user?.id,
              email: user?.email,
              full_name: user?.email || 'SMBI Local - The Bay Islands .Au'
            }
          ])
          .select()
          .single();

        if (createError) throw createError;

        setProfileSource('user_profiles');
        setProfile(createdProfile as UserProfile);
        setFormData({
          username: createdProfile.full_name || '',
          full_name: createdProfile.full_name || '',
          bio: createdProfile.bio || '',
          avatar_url: createdProfile.avatar_url || ''
        });
        return;
      }

      setProfileSource('user_profiles');
      setProfile({
        id: profilesData.id || user?.id || '',
        email: profilesData.email || user?.email || '',
        username: profilesData.full_name || profilesData.username || '',
        full_name: profilesData.full_name || profilesData.username || '',
        avatar_url: profilesData.avatar_url || '',
        bio: profilesData.bio || '',
        is_premium: Boolean(profilesData.is_premium),
        created_at: profilesData.created_at || undefined
      });
      setFormData({
        username: profilesData.full_name || profilesData.username || '',
        full_name: profilesData.full_name || profilesData.username || '',
        bio: profilesData.bio || '',
        avatar_url: profilesData.avatar_url || ''
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
      const updateQuery = profileSource === 'users'
        ? supabase.from('users').update({
            username: formData.username,
            bio: formData.bio,
            avatar_url: formData.avatar_url,
            updated_at: new Date()
          }).eq('id', user?.id)
        : supabase.from('user_profiles').update({
            full_name: formData.full_name,
            avatar_url: formData.avatar_url,
            updated_at: new Date()
          }).or(`auth_user_id.eq.${user?.id},user_id.eq.${user?.id}`);

      const { error: updateError } = await updateQuery;

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
                  Display Name
                </label>
                <input
                  type="text"
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value, username: e.target.value })}
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
                  Display Name
                </label>
                <p style={{ margin: 0, color: '#666' }}>
                  {profile.full_name || profile.username || '(Not set)'}
                </p>
              </div>

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

        <div style={{
          backgroundColor: '#fff',
          padding: '24px',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }}>
          <h2 style={{ marginTop: 0 }}>Manage My Content</h2>
          <p style={{ color: '#666', marginBottom: '16px' }}>
            Create, edit, and manage your articles and business listings.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a href="/dashboard/articles" style={{
              background: '#0070f3',
              color: 'white',
              padding: '10px 18px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 600
            }}>
              Manage Articles
            </a>
            <a href="/dashboard/directory" style={{
              background: '#0ea5e9',
              color: 'white',
              padding: '10px 18px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 600
            }}>
              Manage Business Listings
            </a>
            <a href="/dashboard/listings" style={{
              background: '#f59e0b',
              color: 'white',
              padding: '10px 18px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 600
            }}>
              Manage All Listings
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
