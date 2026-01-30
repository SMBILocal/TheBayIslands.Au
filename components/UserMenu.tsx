'use client';

import { useAuth } from '@/lib/AuthContext';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface UserMenuProps {
  showIconOnly?: boolean;
  isRadioPlaying?: boolean;
  onRadioToggle?: () => void;
}

export default function UserMenu({ showIconOnly = false, isRadioPlaying = false, onRadioToggle = () => {} }: UserMenuProps = {}) {
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLogout = async () => {
    await signOut();
    setIsOpen(false);
    router.push('/');
  };

  if (!user) {
    return (
      <>
        {/* Icon version - hidden by default, shown on mobile portrait via CSS */}
        <div ref={menuRef} style={{ position: 'relative' }} className="user-menu-icon">
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              background: 'transparent',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'all 0.2s',
              fontSize: '18px',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#f3f4f6'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            aria-label="Account menu"
          >
            👤
          </button>

          {isOpen && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              right: 0,
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
              minWidth: '160px',
              zIndex: 1000,
              overflow: 'hidden',
              padding: '8px',
            }}>
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  padding: '8px 12px',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#0066b3',
                  textDecoration: 'none',
                  border: '1px solid #0066b3',
                  borderRadius: '6px',
                  textAlign: 'center',
                  transition: 'all 0.2s',
                  marginBottom: '6px',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#f0f7ff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
              >
                🔐 Login
              </Link>
              <Link
                href="/signup"
                onClick={() => setIsOpen(false)}
                style={{
                  display: 'block',
                  padding: '8px 12px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'white',
                  background: '#0066b3',
                  textDecoration: 'none',
                  border: '1px solid #0066b3',
                  borderRadius: '6px',
                  textAlign: 'center',
                  transition: 'all 0.2s',
                  marginBottom: '6px',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#005299'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#0066b3'; }}
              >
                ✨ Sign Up
              </Link>

              <button
                onClick={() => {
                  onRadioToggle();
                  setIsOpen(false);
                }}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '8px 12px',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#333',
                  background: '#f8f9fa',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  textAlign: 'center',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#eff6ff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#f8f9fa'; }}
              >
                {isRadioPlaying ? '⏸ Stop Radio' : '📻 Listen 88.0 FM'}
              </button>
            </div>
          )}
        </div>

        {/* Button version - shown by default, hidden on mobile portrait via CSS */}
        <div className="user-menu-buttons" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Link 
            href="/login"
            style={{
              padding: '8px 16px',
              background: 'transparent',
              color: '#0066b3',
              border: '1px solid #0066b3',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.2s',
            }}
          >
            Login
          </Link>
          <Link 
            href="/signup"
            style={{
              padding: '8px 16px',
              background: '#0066b3',
              color: 'white',
              border: '1px solid #0066b3',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              transition: 'all 0.2s',
            }}
          >
            Sign Up
          </Link>
        </div>
      </>
    );
  }

  // Get user role and plan
  const userData = user as any;
  const role = userData.user_metadata?.role || userData.role || 'user';
  const plan = user.subscription_tier || 'free';
  const isAdmin = ['super_admin', 'administrator', 'moderator'].includes(role);
  const email = user.email || '';
  const initials = email.slice(0, 2).toUpperCase();

  return (
    <>
      {/* Icon version - hidden by default, shown on mobile portrait via CSS */}
      <div ref={menuRef} style={{ position: 'relative' }} className="user-menu-icon">
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            background: 'transparent',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontSize: '18px',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#f3f4f6'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          aria-label="Account menu"
        >
          👤
        </button>

        {isOpen && (
          <div style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            background: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            minWidth: '200px',
            zIndex: 1000,
            overflow: 'hidden',
          }}>
            <div style={{
              padding: '12px 16px',
              borderBottom: '1px solid #e5e7eb',
              background: '#f9fafb',
            }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#111827', marginBottom: '2px' }}>
                {email.split('@')[0]}
              </div>
              <div style={{ fontSize: '11px', color: '#6b7280', textTransform: 'capitalize' }}>
                {plan} plan
              </div>
            </div>

            <div style={{ padding: '8px 0' }}>
              <Link href="/dashboard" onClick={() => setIsOpen(false)} style={{
                display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 12px',
                color: '#374151', textDecoration: 'none', fontSize: '13px', transition: 'background 0.15s',
              }} onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                <span>📊</span> Dashboard
              </Link>

              {isAdmin && (
                <Link href="/admin" onClick={() => setIsOpen(false)} style={{
                  display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 12px',
                  color: '#374151', textDecoration: 'none', fontSize: '13px', transition: 'background 0.15s',
                }} onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                  <span>⚙️</span> Admin
                </Link>
              )}

              <Link href="/dashboard/profile" onClick={() => setIsOpen(false)} style={{
                display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 12px',
                color: '#374151', textDecoration: 'none', fontSize: '13px', transition: 'background 0.15s',
              }} onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                <span>👤</span> Profile
              </Link>

              <div style={{ height: '1px', background: '#e5e7eb', margin: '6px 0' }} />

              <button onClick={handleLogout} style={{
                display: 'flex', alignItems: 'center', gap: '10px', width: '100%', padding: '8px 12px',
                color: '#dc2626', background: 'transparent', border: 'none', textAlign: 'left',
                fontSize: '13px', cursor: 'pointer', transition: 'background 0.15s',
              }} onMouseEnter={(e) => e.currentTarget.style.background = '#fef2f2'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                <span>🚪</span> Logout
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Button version - shown by default, hidden on mobile portrait via CSS */}
      <div ref={menuRef} style={{ position: 'relative' }} className="user-menu-buttons">
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#f3f4f6',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '6px 12px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontSize: '14px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#e5e7eb';
            e.currentTarget.style.borderColor = '#d1d5db';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#f3f4f6';
            e.currentTarget.style.borderColor = '#e5e7eb';
          }}
        >
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0066b3 0%, #00a0e9 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '13px',
            fontWeight: '600',
          }}>
            {initials}
          </div>

          <div>
            <div style={{
              fontSize: '13px',
              fontWeight: '600',
              color: '#111827',
              textAlign: 'left',
              lineHeight: '1.2',
            }}>
              {email.split('@')[0]}
            </div>
            <div style={{
              fontSize: '11px',
              color: '#6b7280',
              textAlign: 'left',
              textTransform: 'capitalize',
            }}>
              {plan}
            </div>
          </div>

          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{
            transition: 'transform 0.2s',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}>
            <path d="M4 6L8 10L12 6" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {isOpen && (
          <div style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            background: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            minWidth: '240px',
            zIndex: 1000,
            overflow: 'hidden',
          }}>
            <div style={{
              padding: '12px 16px',
              borderBottom: '1px solid #e5e7eb',
              background: '#f9fafb',
            }}>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#111827', marginBottom: '2px' }}>
                {email}
              </div>
              <div style={{ fontSize: '12px', color: '#6b7280', textTransform: 'capitalize' }}>
                {role.replace('_', ' ')} • {plan} plan
              </div>
            </div>

            <div style={{ padding: '8px 0' }}>
              <Link href="/dashboard" onClick={() => setIsOpen(false)} style={{
                display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px',
                color: '#374151', textDecoration: 'none', fontSize: '14px', transition: 'background 0.15s',
              }} onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                <span>📊</span> Dashboard
              </Link>

              {isAdmin && (
                <Link href="/admin" onClick={() => setIsOpen(false)} style={{
                  display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px',
                  color: '#374151', textDecoration: 'none', fontSize: '14px', transition: 'background 0.15s',
                }} onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                  <span>⚙️</span> Admin Panel
                </Link>
              )}

              <Link href="/dashboard/profile" onClick={() => setIsOpen(false)} style={{
                display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px',
                color: '#374151', textDecoration: 'none', fontSize: '14px', transition: 'background 0.15s',
              }} onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                <span>👤</span> My Profile
              </Link>

              <Link href="/dashboard/billing" onClick={() => setIsOpen(false)} style={{
                display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px',
                color: '#374151', textDecoration: 'none', fontSize: '14px', transition: 'background 0.15s',
              }} onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                <span>💳</span> Billing & Plans
              </Link>

              <Link href="/dashboard/listings" onClick={() => setIsOpen(false)} style={{
                display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px',
                color: '#374151', textDecoration: 'none', fontSize: '14px', transition: 'background 0.15s',
              }} onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                <span>📋</span> My Listings
              </Link>

              <Link href="/dashboard/settings" onClick={() => setIsOpen(false)} style={{
                display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px',
                color: '#374151', textDecoration: 'none', fontSize: '14px', transition: 'background 0.15s',
              }} onMouseEnter={(e) => e.currentTarget.style.background = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                <span>⚙️</span> Settings
              </Link>

              <div style={{ height: '1px', background: '#e5e7eb', margin: '8px 0' }} />

              <button onClick={handleLogout} style={{
                display: 'flex', alignItems: 'center', gap: '12px', width: '100%', padding: '10px 16px',
                color: '#dc2626', background: 'transparent', border: 'none', textAlign: 'left',
                fontSize: '14px', cursor: 'pointer', transition: 'background 0.15s',
              }} onMouseEnter={(e) => e.currentTarget.style.background = '#fef2f2'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                <span>🚪</span> Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
