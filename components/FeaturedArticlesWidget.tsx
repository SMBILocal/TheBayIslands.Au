'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image?: string;
  author?: string;
  published_at?: string;
  category?: string;
}

interface ArticlesWidgetProps {
  articles: Article[];
}

export default function FeaturedArticlesWidget({ articles }: ArticlesWidgetProps) {
  if (articles.length === 0) return null;

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-AU', { month: 'short', day: 'numeric' });
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'clamp(16px, 3vw, 24px)'
    }}>
      {articles.map((article) => (
        <Link
          key={article.id}
          href={`/articles/${article.slug}`}
          style={{
            textDecoration: 'none',
            color: 'inherit',
            display: 'block'
          }}
        >
          <div style={{
            background: 'white',
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            transition: 'all 0.3s',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #e5e7eb'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
            e.currentTarget.style.borderColor = '#0066b3';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
            e.currentTarget.style.borderColor = '#e5e7eb';
          }}
          >
            {/* Featured Image */}
            <div style={{
              width: '100%',
              height: 200,
              background: article.featured_image 
                ? `url(${article.featured_image}) center/cover` 
                : 'linear-gradient(135deg, #0066b3 0%, #0ea5e9 100%)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: 12,
                left: 12,
                background: '#10b981',
                color: 'white',
                padding: '5px 12px',
                borderRadius: 6,
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                Featured
              </div>
              {article.category && (
                <div style={{
                  position: 'absolute',
                  bottom: 12,
                  left: 12,
                  background: 'rgba(0,0,0,0.7)',
                  color: 'white',
                  padding: '4px 10px',
                  borderRadius: 6,
                  fontSize: 12,
                  fontWeight: 600
                }}>
                  {article.category}
                </div>
              )}
            </div>

            {/* Content */}
            <div style={{ padding: 20, flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{
                fontSize: 18,
                fontWeight: 700,
                margin: '0 0 10px 0',
                lineHeight: 1.4,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                color: '#0f172a'
              }}>
                {article.title}
              </h3>

              <p style={{
                fontSize: 14,
                color: '#64748b',
                lineHeight: 1.6,
                margin: '0 0 16px 0',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                flex: 1
              }}>
                {article.excerpt}
              </p>

              {/* Meta */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: 12,
                color: '#9ca3af',
                marginTop: 'auto',
                paddingTop: 12,
                borderTop: '1px solid #f3f4f6'
              }}>
                {article.author && (
                  <span style={{ fontWeight: 600 }}>✍️ {article.author}</span>
                )}
                {article.published_at && (
                  <span>📅 {formatDate(article.published_at)}</span>
                )}
              </div>

              {/* Read More */}
              <div style={{
                marginTop: 12,
                color: '#0066b3',
                fontWeight: 600,
                fontSize: 14,
                display: 'flex',
                alignItems: 'center',
                gap: 6
              }}>
                Read article →
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
