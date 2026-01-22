'use client';

import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SettingsPage() {
  const { user, updatePassword } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push('/login?redirectTo=/dashboard/settings');
    } else {
      setLoading(false);
    }
  }, [user, router]);

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setUpdating(true);
    try {
      await updatePassword(newPassword);
      setMessage('Password updated successfully');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err: any) {
      setError(err.message || 'Failed to update password');
    } finally {
      setUpdating(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  return (
    <div style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
        <Link href="/dashboard" style={{ color: '#0070f3', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
          ← Back to Dashboard
        </Link>
        
        <h1>Account Settings</h1>

        <div style={{
          backgroundColor: '#f5f5f5',
          padding: '30px',
          borderRadius: '8px',
          marginBottom: '30px'
        }}>
          <h2 style={{ marginTop: 0 }}>Account Information</h2>
          <p style={{ color: '#666', margin: '10px 0' }}>
            <strong>Email:</strong> {user.email}
          </p>
          <p style={{ color: '#666', margin: '10px 0' }}>
            <strong>User ID:</strong> {user.id}
          </p>
          <p style={{ color: '#666', margin: '10px 0' }}>
            <strong>Account Type:</strong> {user.subscription_tier || 'free'}
          </p>
        </div>

        <div style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          padding: '30px',
          borderRadius: '8px',
          marginBottom: '30px'
        }}>
          <h3 style={{ marginTop: 0 }}>Change Password</h3>
          
          {message && (
            <div style={{
              backgroundColor: '#efe',
              color: '#3c3',
              padding: '12px',
              borderRadius: '4px',
              marginBottom: '20px'
            }}>
              {message}
            </div>
          )}

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

          <form onSubmit={handlePasswordUpdate}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '16px'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Confirm New Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '16px'
                }}
              />
            </div>

            <button
              type="submit"
              disabled={updating}
              style={{
                backgroundColor: '#0070f3',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '4px',
                border: 'none',
                cursor: updating ? 'not-allowed' : 'pointer',
                fontSize: '16px',
                opacity: updating ? 0.6 : 1
              }}
            >
              {updating ? 'Updating...' : 'Update Password'}
            </button>
          </form>
        </div>

        <div style={{
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          padding: '30px',
          borderRadius: '8px'
        }}>
          <h3 style={{ marginTop: 0 }}>Notification Preferences</h3>
          <p style={{ color: '#666' }}>
            Email notifications and preferences can be managed here.
          </p>
          <p style={{ color: '#999', fontSize: '14px', marginTop: '10px' }}>
            (Coming soon)
          </p>
        </div>
      </div>
    </div>
  );
}
