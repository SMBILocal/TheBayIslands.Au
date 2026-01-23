'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  icon: string;
  url: string;
}

const articles: Article[] = [
  {
    id: 'quandamooka-country',
    title: 'Quandamooka Country',
    excerpt: 'History, culture, and living traditions of the Quandamooka People across South Moreton Bay Islands. Learn about native title, sacred sites, and cultural festivals.',
    category: 'Culture & Heritage',
    icon: '🌏',
    url: '/articles/quandamooka-country'
  },
  {
    id: 'quampi-arts-culture',
    title: 'QUAMPI Arts & Culture Centre',
    excerpt: 'North Stradbroke Island\'s premier cultural centre showcasing Quandamooka art, exhibitions, workshops, and Indigenous heritage programs for the community.',
    category: 'Culture & Heritage',
    icon: '🎨',
    url: '/articles/quampi-arts-culture'
  },
  {
    id: 'bay-islands-bridge-proposal',
    title: 'Bay Islands Bridge Proposal — History & Debate',
    excerpt: 'The story of the shelved Redland Bay to Stradbroke and Russell Island bridge plans, community sentiment, and why transport access still shapes local planning.',
    category: 'Transport',
    icon: '🌉',
    url: '/articles/bay-islands-bridge-proposal'
  },
  {
    id: 'business-directory',
    title: 'SMBI Business Directory & Classifieds',
    excerpt: 'Complete directory of local businesses, shops, trades, services, clubs, and community organizations across Russell, Macleay, Lamb, and Karragarra Islands.',
    category: 'Business & Services',
    icon: '🏢',
    url: '/articles/business-directory-guide'
  },
  {
    id: 'tourism-attractions',
    title: 'Tourism & Attractions',
    excerpt: 'Discover beaches, walking trails, museums, heritage sites, and must-see attractions across the Southern Moreton Bay Islands.',
    category: 'Tourism & Recreation',
    icon: '🏖️',
    url: '/articles/tourism-attractions'
  },
  {
    id: 'food-dining',
    title: 'Food & Dining Guide',
    excerpt: 'Cafes, restaurants, clubs, markets, and local dining across the Bay Islands. Find the best meals, coffee, and island cuisine.',
    category: 'Food & Dining',
    icon: '🍽️',
    url: '/articles/food-dining'
  },
  {
    id: 'recreation-sports',
    title: 'Recreation & Sports',
    excerpt: 'All sports clubs, parks, walking trails, water activities, and recreation facilities across Russell, Macleay, Lamb, and Karragarra Islands.',
    category: 'Sports & Recreation',
    icon: '⚽',
    url: '/articles/recreation-sports-islands'
  },
  {
    id: 'transport',
    title: 'Transport on the Islands',
    excerpt: 'Ferry timetables, shuttle services, parking, car hire, and getting around the Bay Islands and Redlands.',
    category: 'Transport',
    icon: '🚢',
    url: '/articles/transport-on-islands'
  },
  {
    id: 'education-schools',
    title: 'Education & Schools',
    excerpt: 'Schools, childcare, libraries, and educational facilities across the Bay Islands and Redlands Coast.',
    category: 'Education',
    icon: '🏫',
    url: '/articles/education-schools-islands'
  },
  {
    id: 'community-infrastructure',
    title: 'Community Infrastructure',
    excerpt: 'Public services, utilities, medical centers, emergency services, and essential infrastructure across the islands.',
    category: 'Services',
    icon: '🏗️',
    url: '/articles/community-infrastructure'
  },
  {
    id: 'events-calendar',
    title: 'Island Events Calendar',
    excerpt: 'Community events, festivals, markets, RSL events, and what\'s happening across the Bay Islands.',
    category: 'Events',
    icon: '📅',
    url: '/articles/island-events-calendar'
  }
]

const categories = ['All', 'Culture & Heritage', 'Business & Services', 'Tourism & Recreation', 'Food & Dining', 'Sports & Recreation', 'Transport', 'Education', 'Services', 'Events']

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const filteredArticles = selectedCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
      {/* Header */}
      <div style={{ marginBottom: 48, textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: 16, color: '#0b1727' }}>
          📰 Articles & Guides
        </h1>
        <p style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)', color: '#475569', maxWidth: 700, margin: '0 auto' }}>
          Local insights, guides, and essential information about the Bay Islands and Redlands Coast
        </p>
      </div>

      {/* Category Filters */}
      <div style={{ 
        marginBottom: 40, 
        display: 'flex', 
        gap: 12, 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        padding: '20px 0',
        borderBottom: '1px solid #e2e8f0'
      }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: '10px 20px',
              background: selectedCategory === category ? '#0066b3' : 'white',
              color: selectedCategory === category ? 'white' : '#475569',
              border: selectedCategory === category ? 'none' : '1px solid #e2e8f0',
              borderRadius: 8,
              cursor: 'pointer',
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              fontWeight: selectedCategory === category ? 600 : 400,
              transition: 'all 0.2s'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: 24 
      }}>
        {filteredArticles.map((article) => (
          <Link 
            key={article.id} 
            href={article.url}
            style={{
              display: 'block',
              background: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: 12,
              padding: 24,
              textDecoration: 'none',
              color: 'inherit',
              transition: 'all 0.2s',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>{article.icon}</div>
            <div style={{ 
              fontSize: '0.875rem', 
              color: '#0066b3', 
              fontWeight: 600, 
              marginBottom: 8,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              {article.category}
            </div>
            <h2 style={{ 
              fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', 
              fontWeight: 600, 
              marginBottom: 12, 
              color: '#0b1727',
              lineHeight: 1.3
            }}>
              {article.title}
            </h2>
            <p style={{ 
              fontSize: 'clamp(0.875rem, 2vw, 1rem)', 
              color: '#64748b', 
              lineHeight: 1.6,
              marginBottom: 16
            }}>
              {article.excerpt}
            </p>
            <div style={{ 
              color: '#0066b3', 
              fontWeight: 600, 
              fontSize: '0.875rem',
              display: 'flex',
              alignItems: 'center',
              gap: 6
            }}>
              Read More <span style={{ fontSize: '1rem' }}>→</span>
            </div>
          </Link>
        ))}
      </div>

      {/* New Resources Section */}
      <div style={{ 
        marginTop: 64, 
        padding: 32, 
        background: '#f8fafc', 
        borderRadius: 12,
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, marginBottom: 16, color: '#0b1727' }}>
          More Resources
        </h2>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)', color: '#475569', marginBottom: 24, maxWidth: 600, margin: '0 auto 24px' }}>
          Discover more about the Bay Islands community
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/news" style={{ padding: '12px 24px', background: '#0066b3', color: 'white', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>
            📰 Local News
          </Link>
          <Link href="/sports" style={{ padding: '12px 24px', background: 'white', color: '#0066b3', border: '1px solid #0066b3', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>
            ⚽ Sports Guide
          </Link>
          <Link href="/maritime" style={{ padding: '12px 24px', background: 'white', color: '#0066b3', border: '1px solid #0066b3', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>
            ⛵ Boating & Maritime
          </Link>
          <Link href="/tv" style={{ padding: '12px 24px', background: 'white', color: '#0066b3', border: '1px solid #0066b3', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>
            📺 TV Guide
          </Link>
        </div>
      </div>
    </div>
  )
}
