'use client';

import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import supabase from '@/lib/supabaseClient';

interface UserProfile {
  id: string;
  email: string;
  phone_number?: string;
  full_name?: string;
  business_name?: string;
  address?: string;
  suburb?: string;
  postcode?: string;
  state?: string;
  website?: string;
  bio?: string;
  avatar_url?: string;
  is_premium: boolean;
  created_at?: string;
}

export default function ProfilePage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    business_name: '',
    address: '',
    suburb: '',
    postcode: '',
    state: 'QLD',
    website: '',
    bio: ''
  });

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
      const { data, error: err } = await supabase
        .from('users')
        .select('*')
        .eq('id', user?.id)
        .single();

      if (err && err.code !== 'PGRST116') throw err;

      const profileData: UserProfile = data || {
        id: user?.id || '',
        email: user?.email || '',
        is_premium: false
      };

      setProfile(profileData);
      setFormData({
        full_name: profileData.full_name || '',
        email: profileData.email || '',
        phone_number: profileData.phone_number || '',
        business_name: profileData.business_name || '',
        address: profileData.address || '',
        suburb: profileData.suburb || '',
        postcode: profileData.postcode || '',
        state: profileData.state || 'QLD',
        website: profileData.website || '',
        bio: profileData.bio || ''
      });
    } catch (err) {
      console.error('Error fetching profile:', err);
      setError('Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setMessage('');

    try {
      const { error: err } = await supabase
        .from('users')
        .upsert({
          id: user?.id,
          email: formData.email,
          full_name: formData.full_name,
          phone_number: formData.phone_number,
          business_name: formData.business_name,
          address: formData.address,
          suburb: formData.suburb,
          postcode: formData.postcode,
          state: formData.state,
          website: formData.website,
          bio: formData.bio,
          updated_at: new Date().toISOString()
        });

      if (err) throw err;

      setMessage('Profile updated successfully!');
      setEditing(false);
      await fetchProfile();
    } catch (err) {
      console.error('Error saving profile:', err);
      setError('Failed to save profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  if (authLoading || loading) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>;
  }

  if (!user) return null;

  return (
    <div style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px', background: '#f9fafb' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px', color: '#111827' }}>
            My Profile
          </h1>
          <p style={{ color: '#6b7280', fontSize: '16px' }}>
            Manage your personal and business information
          </p>
        </div>

        {/* Messages */}
        {message && (
          <div style={{
            padding: '12px 16px',
            background: '#dcfce7',
            border: '1px solid #86efac',
            borderRadius: '6px',
            color: '#166534',
            marginBottom: '20px'
          }}>
            ✓ {message}
          </div>
        )}

        {error && (
          <div style={{
            padding: '12px 16px',
            background: '#fee2e2',
            border: '1px solid #fca5a5',
            borderRadius: '6px',
            color: '#991b1b',
            marginBottom: '20px'
          }}>
            ✕ {error}
          </div>
        )}

        {/* Profile Card */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          padding: '32px',
          marginBottom: '24px'
        }}>
          
          {/* Edit Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
            <button
              onClick={() => setEditing(!editing)}
              style={{
                padding: '8px 16px',
                background: editing ? '#ef4444' : '#0066b3',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = editing ? '#dc2626' : '#005299'}
              onMouseLeave={(e) => e.currentTarget.style.background = editing ? '#ef4444' : '#0066b3'}
            >
              {editing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          <form onSubmit={handleSave}>
            {/* Personal Information */}
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
                Personal Information
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {/* Full Name */}
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    disabled={!editing}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: `1px solid ${editing ? '#d1d5db' : '#e5e7eb'}`,
                      borderRadius: '6px',
                      fontSize: '14px',
                      background: editing ? 'white' : '#f9fafb',
                      color: '#111827',
                      cursor: editing ? 'text' : 'not-allowed'
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={!editing}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: `1px solid ${editing ? '#d1d5db' : '#e5e7eb'}`,
                      borderRadius: '6px',
                      fontSize: '14px',
                      background: editing ? 'white' : '#f9fafb',
                      color: '#111827',
                      cursor: editing ? 'text' : 'not-allowed'
                    }}
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    disabled={!editing}
                    placeholder="+61 (0)7 XXXX XXXX"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: `1px solid ${editing ? '#d1d5db' : '#e5e7eb'}`,
                      borderRadius: '6px',
                      fontSize: '14px',
                      background: editing ? 'white' : '#f9fafb',
                      color: '#111827',
                      cursor: editing ? 'text' : 'not-allowed'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Business Information */}
            <div style={{ marginBottom: '32px', paddingTop: '24px', borderTop: '1px solid #e5e7eb' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#111827' }}>
                Business Information
              </h2>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                {/* Business Name */}
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="business_name"
                    value={formData.business_name}
                    onChange={handleInputChange}
                    disabled={!editing}
                    placeholder="Your business name"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: `1px solid ${editing ? '#d1d5db' : '#e5e7eb'}`,
                      borderRadius: '6px',
                      fontSize: '14px',
                      background: editing ? 'white' : '#f9fafb',
                      color: '#111827',
                      cursor: editing ? 'text' : 'not-allowed'
                    }}
                  />
                </div>

                {/* Website */}
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                    Website URL
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    disabled={!editing}
                    placeholder="https://example.com"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: `1px solid ${editing ? '#d1d5db' : '#e5e7eb'}`,
                      borderRadius: '6px',
                      fontSize: '14px',
                      background: editing ? 'white' : '#f9fafb',
                      color: '#111827',
                      cursor: editing ? 'text' : 'not-allowed'
                    }}
                  />
                </div>
              </div>

              {/* Address Information */}
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                  Street Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  disabled={!editing}
                  placeholder="Street address"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: `1px solid ${editing ? '#d1d5db' : '#e5e7eb'}`,
                    borderRadius: '6px',
                    fontSize: '14px',
                    background: editing ? 'white' : '#f9fafb',
                    color: '#111827',
                    cursor: editing ? 'text' : 'not-allowed',
                    marginBottom: '16px'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '16px' }}>
                {/* Suburb */}
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                    Suburb / Island
                  </label>
                  <input
                    type="text"
                    name="suburb"
                    value={formData.suburb}
                    onChange={handleInputChange}
                    disabled={!editing}
                    placeholder="Suburb or island name"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: `1px solid ${editing ? '#d1d5db' : '#e5e7eb'}`,
                      borderRadius: '6px',
                      fontSize: '14px',
                      background: editing ? 'white' : '#f9fafb',
                      color: '#111827',
                      cursor: editing ? 'text' : 'not-allowed'
                    }}
                  />
                </div>

                {/* Postcode */}
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                    Postcode
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleInputChange}
                    disabled={!editing}
                    placeholder="4184"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: `1px solid ${editing ? '#d1d5db' : '#e5e7eb'}`,
                      borderRadius: '6px',
                      fontSize: '14px',
                      background: editing ? 'white' : '#f9fafb',
                      color: '#111827',
                      cursor: editing ? 'text' : 'not-allowed'
                    }}
                  />
                </div>

                {/* State */}
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                    State
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    disabled={!editing}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: `1px solid ${editing ? '#d1d5db' : '#e5e7eb'}`,
                      borderRadius: '6px',
                      fontSize: '14px',
                      background: editing ? 'white' : '#f9fafb',
                      color: '#111827',
                      cursor: editing ? 'pointer' : 'not-allowed'
                    }}
                  >
                    <option value="QLD">Queensland</option>
                    <option value="NSW">New South Wales</option>
                    <option value="VIC">Victoria</option>
                    <option value="TAS">Tasmania</option>
                    <option value="SA">South Australia</option>
                    <option value="WA">Western Australia</option>
                    <option value="ACT">Australian Capital Territory</option>
                    <option value="NT">Northern Territory</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div style={{ marginBottom: '32px', paddingTop: '24px', borderTop: '1px solid #e5e7eb' }}>
              <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '500', color: '#374151' }}>
                Bio / Description
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                disabled={!editing}
                placeholder="Tell us about yourself or your business (up to 500 characters)"
                maxLength={500}
                rows={4}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: `1px solid ${editing ? '#d1d5db' : '#e5e7eb'}`,
                  borderRadius: '6px',
                  fontSize: '14px',
                  background: editing ? 'white' : '#f9fafb',
                  color: '#111827',
                  cursor: editing ? 'text' : 'not-allowed',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
              />
              <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>
                {formData.bio.length}/500 characters
              </div>
            </div>

            {/* Save Button */}
            {editing && (
              <div style={{ display: 'flex', gap: '12px', paddingTop: '24px', borderTop: '1px solid #e5e7eb' }}>
                <button
                  type="submit"
                  disabled={saving}
                  style={{
                    padding: '12px 24px',
                    background: '#0066b3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: saving ? 'not-allowed' : 'pointer',
                    fontSize: '14px',
                    fontWeight: '600',
                    opacity: saving ? 0.6 : 1,
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => !saving && (e.currentTarget.style.background = '#005299')}
                  onMouseLeave={(e) => !saving && (e.currentTarget.style.background = '#0066b3')}
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            )}
          </form>

          {/* Account Info Footer */}
          <div style={{
            marginTop: '40px',
            paddingTop: '24px',
            borderTop: '1px solid #e5e7eb',
            fontSize: '13px',
            color: '#6b7280'
          }}>
            <p style={{ margin: '0 0 8px 0' }}>
              <strong>Member Since:</strong> {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : 'Recently'}
            </p>
            <p style={{ margin: 0 }}>
              <strong>Subscription:</strong> {profile?.is_premium ? '✓ Premium' : 'Free'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
