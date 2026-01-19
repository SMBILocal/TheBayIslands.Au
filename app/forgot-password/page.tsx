"use client";

import { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';

export default function ForgotPasswordPage() {
  const { requestPasswordReset } = useAuth();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await requestPasswordReset(email);
      setStatus('sent');
    } catch (err: any) {
      setError(err.message || 'Failed to send reset email.');
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '0 20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Reset your password</h1>
        <form onSubmit={handleSubmit} style={{ backgroundColor: '#f5f5f5', padding: '30px', borderRadius: '8px' }}>
          {status === 'sent' && (
            <div style={{ backgroundColor: '#efe', color: '#256028', padding: '12px', borderRadius: '4px', marginBottom: '20px' }}>
              Check your email for a reset link. Follow it to set a new password.
            </div>
          )}
          {error && (
            <div style={{ backgroundColor: '#fee', color: '#c33', padding: '12px', borderRadius: '4px', marginBottom: '20px' }}>
              {error}
            </div>
          )}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1em', boxSizing: 'border-box' }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{ width: '100%', backgroundColor: '#0066b3', color: 'white', padding: '12px', border: 'none', borderRadius: '4px', fontSize: '1em', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.6 : 1 }}
          >
            {loading ? 'Sending...' : 'Send reset link'}
          </button>
        </form>
      </div>
    </div>
  );
}
