'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import Link from 'next/link';

export default function SignupPage() {
  const { signUp } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signUp(email, password, fullName);
      setSuccess(true);
      setTimeout(() => {
        window.location.href = '/directory';
      }, 2000);
    } catch (err: any) {
      setError(err.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '0 20px' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Create Account</h1>

        <form onSubmit={handleSubmit} style={{
          backgroundColor: '#f5f5f5',
          padding: '30px',
          borderRadius: '8px'
        }}>
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
              Account created! Redirecting...
            </div>
          )}

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1em',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1em',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1em',
                boxSizing: 'border-box'
              }}
            />
            <small style={{ color: '#666' }}>Minimum 6 characters</small>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              backgroundColor: '#0066b3',
              color: 'white',
              padding: '12px',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1em',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1
            }}
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          Already have an account?{' '}
          <Link href="/login" style={{ color: '#0066b3', textDecoration: 'underline' }}>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
