'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SearchFilter from '@/components/SearchFilter';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category?: string;
  author?: string;
  created_at: string;
}

interface StaticArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  icon: string;
}

const STATIC_ARTICLES: StaticArticle[] = [
  {
    slug: 'sports-clubs',
    title: 'Sports & Recreation Clubs',
    excerpt: 'Your complete guide to sports clubs, events, and recreation across the Bay Islands and Redlands Coast. Football, netball, bowls, cricket, basketball, and more.',
    category: 'Sports & Recreation',
    icon: '🏆'
  },
  {
    slug: 'fishing-guide',
    title: 'Bay Islands Fishing Guide',
    excerpt: 'Complete fishing guide for Bay Islands: best spots, target species, regulations, tackle shops, and local fishing tips for Moreton Bay.',
    category: 'Recreation',
    icon: '🎣'
  },
  {
    slug: 'boating-marinas',
    title: 'Boating & Marinas Guide',
    excerpt: 'Complete guide to marinas, boat ramps, ferry terminals, parking and boating infrastructure across Bay Islands and Redlands Coast.',
    category: 'Recreation',
    icon: '⚓'
  },
  {
    slug: 'quandamooka-culture',
    title: 'Quandamooka Country & Culture',
    excerpt: 'Discover the Quandamooka People - Nunukul, Goenpul, and Nughi clans - their 20,000+ year history, culture, and connection to Moreton Bay.',
    category: 'Culture & Heritage',
    icon: '🌏'
  },
  {
    slug: 'quampi-arts',
    title: 'QUAMPI Arts & Culture Centre',
    excerpt: 'Visit QUAMPI Arts & Culture Centre on Minjerribah (North Stradbroke Island) - Queensland\'s first First Nations-owned cultural gallery.',
    category: 'Culture & Heritage',
    icon: '🎨'
  },
  {
    slug: 'local-games',
    title: 'Games & Entertainment',
    excerpt: 'Local gaming, entertainment venues, clubs, and recreational activities across the Bay Islands. Bingo, bowls, trivia, and community fun.',
    category: 'Entertainment',
    icon: '🎮'
  },
  {
    slug: 'tv-guide',
    title: 'TV Stations & Guide',
    excerpt: 'Free-to-air TV stations, streaming options, and viewing guide for Brisbane and Bay Islands region. Channel 7, 9, 10, ABC, SBS and more.',
    category: 'Media',
    icon: '📺'
  },
  {
    slug: 'newspapers',
    title: 'Local Newspapers',
    excerpt: 'Print and online newspapers serving the Bay Islands and Redlands Coast. Redland City Bulletin, Courier-Mail, Quest, and more.',
    category: 'Media',
    icon: '📰'
  },
  {
    slug: 'community-noticeboard',
    title: 'Community Notice Board',
    excerpt: 'Bay Islands community notice board for events, classifieds, volunteer opportunities, and local announcements across all demographics.',
    category: 'Community',
    icon: '📌'
  }
];

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const dummyArticles: Article[] = [
    {
      id: '1',
      title: 'Guide to the Main Islands',
      excerpt: 'Profiles and how-to guides for visitors and locals exploring Russell, Macleay, North Stradbroke and Lamb Islands.',
      category: 'Travel Guide',
      author: 'Admin',
      created_at: new Date().toISOString()
    },
    {
      id: '2',
      title: 'Business Feature: Island Cafe & Bakery',
      excerpt: 'Spotlight on local businesses and the entrepreneurs behind them. This week: the award-winning island cafe.',
      category: 'Business',
      author: 'Admin',
      created_at: new Date().toISOString()
    },
    {
      id: '3',
      title: 'Community Stories: Annual Regatta',
      excerpt: 'Events and initiatives from across the islands. The Bay Islands Regatta brings the community together each year.',
      category: 'Community',
      author: 'Admin',
      created_at: new Date().toISOString()
    },
    {
      id: '4',
      title: 'Sustainable Living on the Islands',
      excerpt: 'Tips and resources for eco-friendly living in the Bay Islands. Water conservation, renewable energy and more.',
      category: 'Lifestyle',
      author: 'Admin',
      created_at: new Date().toISOString()
    }
  ];

  useEffect(() => {
    async function fetchArticles() {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
        const res = await fetch(`${baseUrl}/api/articles`, { cache: 'no-store' });
        if (res.ok) {
          const json = await res.json();
          const items = Array.isArray(json) ? json : (json.data || []);
          setArticles(items);
          setFilteredArticles(items);
        } else {
          setArticles(dummyArticles);
          setFilteredArticles(dummyArticles);
        }
      } catch {
        setArticles(dummyArticles);
        setFilteredArticles(dummyArticles);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);

  const handleSearch = (query: string) => {
    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      (article.author && article.author.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredArticles(filtered);
  };

  const handleFilter = (filters: { category?: string; location?: string }) => {
    let filtered = articles;

    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(article => article.category?.toLowerCase().includes(filters.category?.toLowerCase() || ''));
    }

    setFilteredArticles(filtered);
  };

  return (
    <main>
      <section className="hero">
        <h1>Articles & Guides</h1>
        <p>Local news, how-tos and feature stories about the Bay Islands.</p>
      </section>

      <div className="content-container">
        {/* Featured Articles Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', fontWeight: 600 }}>Featured Guides</h2>
          <div className="grid" style={{ marginBottom: '40px' }}>
            {STATIC_ARTICLES.map(article => (
              <article key={article.slug} className="card article-card">
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>{article.icon}</div>
                <span className="pill small">{article.category}</span>
                <h3>
                  <Link href={`/articles/${article.slug}`} className="link-reset">
                    {article.title}
                  </Link>
                </h3>
                <p className="muted">{article.excerpt}</p>
                <Link href={`/articles/${article.slug}`} className="read-more">
                  Read Guide →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Dynamic Articles Section */}
        <section>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', fontWeight: 600 }}>Latest Articles</h2>
          <SearchFilter
            onSearch={handleSearch}
            onFilter={handleFilter}
            categories={['Travel Guide', 'Business', 'Community', 'Lifestyle', 'How-To']}
            locations={['All Locations']}
          />

          {loading ? (
            <p>Loading articles...</p>
          ) : (
            <div className="grid" style={{ marginTop: 16 }}>
              {filteredArticles.length > 0 ? (
                filteredArticles.map(article => (
                  <article key={article.id} className="card article-card">
                    {article.category && <span className="pill small">{article.category}</span>}
                    <h3>
                      <Link href={`/articles/${article.id}`} className="link-reset">
                        {article.title}
                      </Link>
                    </h3>
                    <p className="muted">{article.excerpt}</p>
                    {article.author && (
                      <p className="muted" style={{ fontSize: '13px', marginTop: '12px' }}>
                        By {article.author}
                      </p>
                    )}
                    <Link href={`/articles/${article.id}`} className="read-more">
                      Read Article →
                    </Link>
                  </article>
                ))
              ) : (
                <p className="muted" style={{ textAlign: 'center', padding: '40px 20px', gridColumn: '1/-1' }}>
                  No articles found. Try adjusting your filters.
                </p>
              )}
            </div>
          )}
        </section>
      </div>

      <style jsx>{`
        .article-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .article-card h3 {
          margin: 0;
          font-size: 18px;
        }

        .article-card p {
          margin: 0;
        }

        .read-more {
          color: var(--color-accent);
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          margin-top: 12px;
          transition: color 0.3s;
        }

        .read-more:hover {
          color: var(--color-accent-600);
        }

        .link-reset {
          color: inherit;
          text-decoration: none;
        }

        .link-reset:hover {
          color: var(--color-accent);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
