'use client';

import { ReactNode } from 'react';
import Breadcrumb from './Breadcrumb';

interface ArticleLayoutProps {
  title: string;
  description?: string;
  category?: string;
  datePublished?: string;
  children: ReactNode;
}

export default function ArticleLayout({ 
  title, 
  description, 
  category = 'Guide',
  datePublished = '2026-01-19',
  children 
}: ArticleLayoutProps) {
  return (
    <main>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #0066b3 0%, #c85a17 100%)',
        color: 'white',
        padding: 'clamp(40px, 8vw, 80px) clamp(16px, 5vw, 20px)',
        marginBottom: 40
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {category && (
            <div style={{ 
              fontSize: '0.9em', 
              fontWeight: 600, 
              opacity: 0.9, 
              marginBottom: 12,
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {category}
            </div>
          )}
          <h1 style={{ fontSize: 'clamp(2em, 5vw, 42px)', fontWeight: 800, margin: '0 0 16px 0' }}>
            {title}
          </h1>
          {description && (
            <p style={{ fontSize: 'clamp(1em, 2vw, 18px)', opacity: 0.95, margin: 0 }}>
              {description}
            </p>
          )}
          {datePublished && (
            <div style={{ fontSize: '0.85em', opacity: 0.8, marginTop: 16 }}>
              Published {new Date(datePublished).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
          )}
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 clamp(16px, 5vw, 20px) clamp(40px, 8vw, 60px)' }}>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Articles', href: '/articles' },
          { label: title }
        ]} />

        {/* Article Content */}
        <article style={{
          fontSize: 'clamp(1em, 1.5vw, 16px)',
          lineHeight: 1.7,
          color: '#334155'
        }}>
          {children}
        </article>

        {/* Related Links */}
        <div style={{
          background: '#f1f5f9',
          padding: 'clamp(24px, 4vw, 32px)',
          borderRadius: 12,
          marginTop: 60,
          borderLeft: '4px solid #0066b3'
        }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: 'clamp(1.1em, 1.8vw, 18px)' }}>
            Explore More
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="/islands" style={{ color: '#0066b3', fontWeight: 600, textDecoration: 'none' }}>
              🏝️ Island Guides (Russell, Macleay, Lamb, Karragarra)
            </a>
            <a href="/articles" style={{ color: '#0066b3', fontWeight: 600, textDecoration: 'none' }}>
              📰 All Articles & Guides
            </a>
            <a href="/directory" style={{ color: '#0066b3', fontWeight: 600, textDecoration: 'none' }}>
              💼 Local Business Directory
            </a>
            <a href="/jobs" style={{ color: '#0066b3', fontWeight: 600, textDecoration: 'none' }}>
              👔 Job Opportunities
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
