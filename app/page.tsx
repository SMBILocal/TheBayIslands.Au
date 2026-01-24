'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import FeaturedBusinessCarousel from '@/components/FeaturedBusinessCarousel';
import ClassifiedsCarousel from '@/components/ClassifiedsCarousel';
import FeaturedArticlesWidget from '@/components/FeaturedArticlesWidget';
import EventsCarousel from '@/components/EventsCarousel';
import StatsCounter from '@/components/StatsCounter';
import { ALL_LOCATIONS } from '@/lib/locations';

interface HomepageData {
  featuredBusinesses: any[];
  subFeaturedBusinesses: any[];
  featuredClassifieds: any[];
  featuredArticles: any[];
  featuredEvents: any[];
  latestArticles: any[];
  upcomingEvents: any[];
  latestJobs: any[];
  stats: {
    businesses: number;
    jobs: number;
    events: number;
    members: number;
  };
}

export default function Home(){
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isMobile, setIsMobile] = useState(true);
  const [homepageData, setHomepageData] = useState<HomepageData | null>(null);
  const [activeTab, setActiveTab] = useState<'articles' | 'businesses' | 'events' | 'jobs'>('businesses');

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    async function fetchHomepageData() {
      try {
        const response = await fetch('/api/homepage/featured');
        const result = await response.json();
        if (result.success) {
          setHomepageData(result.data);
        }
      } catch (error) {
        console.error('Failed to fetch homepage data:', error);
      }
    }
    fetchHomepageData();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    const params = new URLSearchParams();
    params.set('q', searchQuery);
    if (selectedCategory !== 'all') {
      params.set('category', selectedCategory);
    }
    
    // Route to directory/search
    router.push(`/directory?${params.toString()}`);
  };

  return (
    <section>
      {/* Hero Banner with Search */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0,102,179,0.75) 0%, rgba(200,90,23,0.75) 100%), url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&h=400&fit=crop?q=80) center/cover',
        backgroundBlendMode: 'overlay',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '40px 20px',
        marginBottom: '40px'
      }}>
        <div style={{ maxWidth: '900px', width: '100%' }}>
          <h1 style={{ fontSize: 'clamp(2em, 5vw, 3.5em)', margin: '0 0 20px 0', fontWeight: 800 }}>Welcome to the Bay Islands Hub</h1>
          <p style={{ fontSize: 'clamp(1em, 2vw, 1.3em)', margin: '0 0 32px 0', opacity: 0.95 }}>Discover local businesses, jobs, events and community across South Moreton Bay</p>
          
          {/* Responsive Search Bar */}
          <form onSubmit={handleSearch} style={{ width: '100%', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr auto',
              gap: '12px',
              alignItems: 'stretch'
            }}>
              {/* What Search Input */}
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
              }}>
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: 'clamp(13px, 2.5vw, 15px)',
                    border: 'none',
                    borderRadius: '8px',
                    outline: 'none',
                    color: '#0b1727',
                    fontWeight: 500,
                    backgroundColor: 'white',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    minHeight: '48px'
                  }}
                />
              </div>
              
              {/* Where Dropdown */}
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center'
              }}>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    fontSize: 'clamp(13px, 2.5vw, 15px)',
                    border: 'none',
                    borderRadius: '8px',
                    outline: 'none',
                    color: selectedLocation ? '#0b1727' : '#64748b',
                    fontWeight: 500,
                    backgroundColor: 'white',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    minHeight: '48px',
                    cursor: 'pointer'
                  }}
                >
                  <option value="">All Areas</option>
                  {ALL_LOCATIONS.map((location) => (
                    <option key={location.id} value={location.slug}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Search Button */}
              <button
                type="submit"
                style={{
                  padding: '14px 24px',
                  background: '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: 'clamp(13px, 2.5vw, 15px)',
                  minHeight: '48px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#059669';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = '#10b981';
                }}
              >
                🔍 Search
              </button>
            </div>
            
            {/* Category Filters - Hidden on Mobile, Visible on Tablet+ */}
            {!isMobile && (
              <div style={{
                display: 'flex',
                gap: '12px',
                marginTop: '12px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                fontSize: '13px'
              }}>
                {[
                  { value: 'all', label: 'All Categories' },
                  { value: 'businesses', label: '🏢 Businesses' },
                  { value: 'jobs', label: '💼 Jobs' },
                  { value: 'events', label: '🎉 Events' },
                  { value: 'classifieds', label: '🛒 Classifieds' }
                ].map(category => (
                  <label key={category.value} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    background: selectedCategory === category.value ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    transition: 'all 0.2s'
                  }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = selectedCategory === category.value ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)';
                    }}
                  >
                    <input
                      type="radio"
                      name="category"
                      value={category.value}
                      checked={selectedCategory === category.value}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      style={{ cursor: 'pointer', accentColor: '#10b981' }}
                    />
                    <span style={{ color: 'white', fontWeight: 500 }}>{category.label}</span>
                  </label>
                ))}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Quick Category Navigation Grid */}
      <section style={{padding:'clamp(40px, 8vw, 60px) 0', background:'#f8f9fa'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'clamp(32px, 6vw, 48px)'}}>
            <h2 style={{fontSize:'clamp(1.75em, 4vw, 2.5em)', fontWeight:800, marginBottom:12}}>
              Browse by Category
            </h2>
            <p style={{color:'#666', fontSize:'clamp(1em, 2vw, 1.2em)'}}>
              Find exactly what you're looking for across our islands
            </p>
          </div>

          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit, minmax(140px, 1fr))',
            gap:'clamp(16px, 3vw, 24px)',
            marginBottom:32
          }}>
            <a href="/directory?category=restaurants" style={{
              textDecoration:'none',
              background:'white',
              padding:'clamp(20px, 4vw, 28px)',
              borderRadius:12,
              textAlign:'center',
              transition:'all 0.3s',
              border:'2px solid transparent',
              cursor:'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,102,179,0.15)';
              e.currentTarget.style.borderColor = '#0066b3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{fontSize:'clamp(2em, 4vw, 2.5em)', marginBottom:8}}>🍽️</div>
              <div style={{fontWeight:700, color:'#333', fontSize:'clamp(0.9em, 2vw, 1em)'}}>Restaurants</div>
              <div style={{fontSize:'0.85em', color:'#666', marginTop:4}}>Cafes & Dining</div>
            </a>

            <a href="/directory?category=accommodation" style={{
              textDecoration:'none',
              background:'white',
              padding:'clamp(20px, 4vw, 28px)',
              borderRadius:12,
              textAlign:'center',
              transition:'all 0.3s',
              border:'2px solid transparent',
              cursor:'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,102,179,0.15)';
              e.currentTarget.style.borderColor = '#0066b3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{fontSize:'clamp(2em, 4vw, 2.5em)', marginBottom:8}}>🏨</div>
              <div style={{fontWeight:700, color:'#333', fontSize:'clamp(0.9em, 2vw, 1em)'}}>Accommodation</div>
              <div style={{fontSize:'0.85em', color:'#666', marginTop:4}}>Hotels & Stays</div>
            </a>

            <a href="/directory?category=retail" style={{
              textDecoration:'none',
              background:'white',
              padding:'clamp(20px, 4vw, 28px)',
              borderRadius:12,
              textAlign:'center',
              transition:'all 0.3s',
              border:'2px solid transparent',
              cursor:'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,102,179,0.15)';
              e.currentTarget.style.borderColor = '#0066b3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{fontSize:'clamp(2em, 4vw, 2.5em)', marginBottom:8}}>🛍️</div>
              <div style={{fontWeight:700, color:'#333', fontSize:'clamp(0.9em, 2vw, 1em)'}}>Retail</div>
              <div style={{fontSize:'0.85em', color:'#666', marginTop:4}}>Shops & Stores</div>
            </a>

            <a href="/directory?category=health" style={{
              textDecoration:'none',
              background:'white',
              padding:'clamp(20px, 4vw, 28px)',
              borderRadius:12,
              textAlign:'center',
              transition:'all 0.3s',
              border:'2px solid transparent',
              cursor:'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,102,179,0.15)';
              e.currentTarget.style.borderColor = '#0066b3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{fontSize:'clamp(2em, 4vw, 2.5em)', marginBottom:8}}>⚕️</div>
              <div style={{fontWeight:700, color:'#333', fontSize:'clamp(0.9em, 2vw, 1em)'}}>Health</div>
              <div style={{fontSize:'0.85em', color:'#666', marginTop:4}}>Medical & Wellness</div>
            </a>

            <a href="/directory?category=automotive" style={{
              textDecoration:'none',
              background:'white',
              padding:'clamp(20px, 4vw, 28px)',
              borderRadius:12,
              textAlign:'center',
              transition:'all 0.3s',
              border:'2px solid transparent',
              cursor:'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,102,179,0.15)';
              e.currentTarget.style.borderColor = '#0066b3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{fontSize:'clamp(2em, 4vw, 2.5em)', marginBottom:8}}>🚗</div>
              <div style={{fontWeight:700, color:'#333', fontSize:'clamp(0.9em, 2vw, 1em)'}}>Automotive</div>
              <div style={{fontSize:'0.85em', color:'#666', marginTop:4}}>Cars & Services</div>
            </a>

            <a href="/directory?category=home-services" style={{
              textDecoration:'none',
              background:'white',
              padding:'clamp(20px, 4vw, 28px)',
              borderRadius:12,
              textAlign:'center',
              transition:'all 0.3s',
              border:'2px solid transparent',
              cursor:'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,102,179,0.15)';
              e.currentTarget.style.borderColor = '#0066b3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{fontSize:'clamp(2em, 4vw, 2.5em)', marginBottom:8}}>🔧</div>
              <div style={{fontWeight:700, color:'#333', fontSize:'clamp(0.9em, 2vw, 1em)'}}>Home Services</div>
              <div style={{fontSize:'0.85em', color:'#666', marginTop:4}}>Trades & Repairs</div>
            </a>

            <a href="/directory?category=professional" style={{
              textDecoration:'none',
              background:'white',
              padding:'clamp(20px, 4vw, 28px)',
              borderRadius:12,
              textAlign:'center',
              transition:'all 0.3s',
              border:'2px solid transparent',
              cursor:'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,102,179,0.15)';
              e.currentTarget.style.borderColor = '#0066b3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{fontSize:'clamp(2em, 4vw, 2.5em)', marginBottom:8}}>💼</div>
              <div style={{fontWeight:700, color:'#333', fontSize:'clamp(0.9em, 2vw, 1em)'}}>Professional</div>
              <div style={{fontSize:'0.85em', color:'#666', marginTop:4}}>Legal & Finance</div>
            </a>

            <a href="/directory?category=entertainment" style={{
              textDecoration:'none',
              background:'white',
              padding:'clamp(20px, 4vw, 28px)',
              borderRadius:12,
              textAlign:'center',
              transition:'all 0.3s',
              border:'2px solid transparent',
              cursor:'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,102,179,0.15)';
              e.currentTarget.style.borderColor = '#0066b3';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{fontSize:'clamp(2em, 4vw, 2.5em)', marginBottom:8}}>🎭</div>
              <div style={{fontWeight:700, color:'#333', fontSize:'clamp(0.9em, 2vw, 1em)'}}>Entertainment</div>
              <div style={{fontSize:'0.85em', color:'#666', marginTop:4}}>Arts & Events</div>
            </a>
          </div>

          <div style={{textAlign:'center', marginTop:24}}>
            <a href="/directory" style={{
              color:'#0066b3',
              fontWeight:700,
              fontSize:'clamp(1em, 2vw, 1.1em)',
              textDecoration:'none',
              display:'inline-flex',
              alignItems:'center',
              gap:8
            }}>
              View All Categories →
            </a>
          </div>
        </div>
      </section>

      {/* Trending Searches */}
      <section style={{padding:'clamp(32px, 6vw, 48px) 0', background:'white'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:24}}>
            <h3 style={{fontSize:'clamp(1.3em, 3vw, 1.6em)', fontWeight:700, marginBottom:8}}>
              🔥 Trending Searches
            </h3>
            <p style={{color:'#666', fontSize:'clamp(0.95em, 2vw, 1.05em)'}}>
              What other islanders are searching for
            </p>
          </div>

          <div style={{
            display:'flex',
            flexWrap:'wrap',
            gap:12,
            justifyContent:'center',
            maxWidth:900,
            margin:'0 auto'
          }}>
            {['Plumber', 'Electrician', 'Restaurant', 'Real Estate', 'Mechanic', 'Cafe', 'Hardware Store', 'Doctor', 'Dentist', 'Hairdresser', 'Accommodation', 'Boat Repairs'].map(term => (
              <a 
                key={term}
                href={`/directory?q=${encodeURIComponent(term)}`}
                style={{
                  padding:'10px 20px',
                  background:'#f8f9fa',
                  borderRadius:24,
                  textDecoration:'none',
                  color:'#333',
                  fontSize:'clamp(0.9em, 2vw, 0.95em)',
                  fontWeight:600,
                  transition:'all 0.3s',
                  border:'2px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0066b3';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f8f9fa';
                  e.currentTarget.style.color = '#333';
                }}
              >
                {term}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Location */}
      <section style={{padding:'clamp(40px, 8vw, 60px) 0', background:'linear-gradient(135deg, #0066b3 0%, #00a8e8 100%)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'clamp(32px, 6vw, 48px)', color:'white'}}>
            <h2 style={{fontSize:'clamp(1.75em, 4vw, 2.5em)', fontWeight:800, marginBottom:12, color:'white'}}>
              Browse by Location
            </h2>
            <p style={{fontSize:'clamp(1em, 2vw, 1.2em)', opacity:0.95}}>
              Explore businesses across all islands and mainland suburbs
            </p>
          </div>

          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))',
            gap:'clamp(16px, 3vw, 24px)'
          }}>
            {ALL_LOCATIONS.map(location => (
              <a 
                key={location.id}
                href={`/directory?location=${location.slug}`}
                style={{
                  background:'rgba(255,255,255,0.15)',
                  backdropFilter:'blur(10px)',
                  padding:'clamp(24px, 4vw, 32px)',
                  borderRadius:12,
                  textDecoration:'none',
                  color:'white',
                  border:'2px solid rgba(255,255,255,0.2)',
                  transition:'all 0.3s',
                  textAlign:'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = '#0066b3';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{fontSize:'clamp(1.8em, 4vw, 2.2em)', marginBottom:8}}>
                  {location.type === 'island' ? '🏝️' : '🏙️'}
                </div>
                <div style={{fontWeight:700, fontSize:'clamp(1em, 2vw, 1.1em)', marginBottom:4}}>
                  {location.name}
                </div>
                <div style={{fontSize:'0.9em', opacity:0.9}}>
                  View businesses →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Businesses Carousel */}
      {homepageData && homepageData.featuredBusinesses.length > 0 && (
        <section style={{padding:'clamp(40px, 8vw, 60px) 0', background:'white'}}>
          <div className="container">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:32, flexWrap:'wrap', gap:16}}>
              <div>
                <h2 style={{marginBottom:8}}>Featured Island Businesses ⭐</h2>
                <p className="muted">Trusted local businesses serving our community</p>
              </div>
              <a href="/directory" style={{color:'#0066b3', fontWeight:600, textDecoration:'none', whiteSpace:'nowrap'}}>
                View all directory →
              </a>
            </div>
            <FeaturedBusinessCarousel businesses={homepageData.featuredBusinesses} />
          </div>
        </section>
      )}

      {/* Stats Counter Bar */}
      {homepageData && (
        <StatsCounter stats={homepageData.stats} />
      )}

      {/* Featured Classifieds Carousel */}
      {homepageData && homepageData.featuredClassifieds && homepageData.featuredClassifieds.length > 0 && (
        <section style={{padding:'clamp(40px, 8vw, 60px) 0', background:'#f8f9fa'}}>
          <div className="container">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:32, flexWrap:'wrap', gap:16}}>
              <div>
                <h2 style={{marginBottom:8}}>🛒 Latest Classifieds</h2>
                <p className="muted">Find great deals on the islands</p>
              </div>
              <a href="/classifieds" style={{color:'#0066b3', fontWeight:600, textDecoration:'none', whiteSpace:'nowrap'}}>
                Browse all classifieds →
              </a>
            </div>
            <ClassifiedsCarousel classifieds={homepageData.featuredClassifieds} />
          </div>
        </section>
      )}

      {/* Sign Up Free CTA - Moved Higher */}
      <section style={{padding:'clamp(40px, 8vw, 60px) 0', background:'white'}}>
        <div className="container">
          <div style={{
            background:'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            borderRadius:'16px',
            padding:'clamp(2.5rem, 6vw, 4rem)',
            color:'white',
            textAlign:'center'
          }}>
            <h2 style={{fontSize:'clamp(1.75rem, 4vw, 2.25rem)', fontWeight:700, marginBottom:'1rem'}}>
              Ready to Join Our Community?
            </h2>
            <p style={{fontSize:'clamp(1rem, 2vw, 1.125rem)', marginBottom:'2rem', maxWidth:'600px', margin:'0 auto 2rem'}}>
              List your business, post classifieds, share events, or find your next opportunity on the Bay Islands
            </p>
            <div style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap'}}>
              <a
                href="/signup"
                style={{
                  padding:'1rem 2rem',
                  backgroundColor:'white',
                  color:'#6366f1',
                  textDecoration:'none',
                  borderRadius:'8px',
                  fontWeight:600,
                  fontSize:'1.125rem',
                  display:'inline-block'
                }}
              >
                Sign Up Free
              </a>
              <a
                href="/directory/new"
                style={{
                  padding:'1rem 2rem',
                  backgroundColor:'transparent',
                  color:'white',
                  textDecoration:'none',
                  border:'2px solid white',
                  borderRadius:'8px',
                  fontWeight:600,
                  fontSize:'1.125rem',
                  display:'inline-block'
                }}
              >
                List Your Business
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {homepageData && homepageData.featuredArticles && homepageData.featuredArticles.length > 0 && (
        <section style={{padding:'clamp(40px, 8vw, 60px) 0', background:'#f8f9fa'}}>
          <div className="container">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:32, flexWrap:'wrap', gap:16}}>
              <div>
                <h2 style={{marginBottom:8}}>📰 Featured Articles</h2>
                <p className="muted">Latest news and stories from the Bay Islands</p>
              </div>
              <a href="/news" style={{color:'#0066b3', fontWeight:600, textDecoration:'none', whiteSpace:'nowrap'}}>
                Read more articles →
              </a>
            </div>
            <FeaturedArticlesWidget articles={homepageData.featuredArticles} />
          </div>
        </section>
      )}

      {/* Featured Events Carousel */}
      {homepageData && homepageData.featuredEvents && homepageData.featuredEvents.length > 0 && (
        <section style={{padding:'clamp(40px, 8vw, 60px) 0', background:'white'}}>
          <div className="container">
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:32, flexWrap:'wrap', gap:16}}>
              <div>
                <h2 style={{marginBottom:8}}>🎉 Upcoming Events</h2>
                <p className="muted">Don't miss out on what's happening across the islands</p>
              </div>
              <a href="/events" style={{color:'#0066b3', fontWeight:600, textDecoration:'none', whiteSpace:'nowrap'}}>
                View all events →
              </a>
            </div>
            <EventsCarousel events={homepageData.featuredEvents} />
          </div>
        </section>
      )}

      {/* Enhanced CTA Section */}
      <section style={{padding:'clamp(30px, 6vw, 40px) 0', background:'linear-gradient(135deg, rgba(14,165,233,0.05) 0%, rgba(6,182,212,0.05) 100%)'}}>
        <div className="container">
          <div className="hero" style={{alignItems:'center', gap:'clamp(24px, 5vw, 48px)'}}>
            <div style={{flex:1}}>
              <h2 style={{fontSize:'clamp(1.75em, 4vw, 2.25em)', marginBottom:16}}>Your Local Community Hub</h2>
              <p className="muted" style={{maxWidth: '720px', marginBottom:12, fontSize:'clamp(1em, 2vw, 1.125em)', lineHeight:1.6}}>
                Trusted guide for the South Moreton Bay Islands — Russell, Macleay, Lamb, Karragarra and Redland Bay. 
                Discover verified local businesses, events, jobs, services, and classifieds with fresh listings posted weekly.
              </p>
              <div style={{display:'flex', flexWrap:'wrap', gap:8, marginTop:20, fontSize:'0.95em'}}>
                <span style={{background:'rgba(0,102,179,0.1)', color:'#0066b3', padding:'6px 14px', borderRadius:20, fontWeight:600}}>📰 Articles</span>
                <span style={{background:'rgba(0,102,179,0.1)', color:'#0066b3', padding:'6px 14px', borderRadius:20, fontWeight:600}}>💼 Jobs</span>
                <span style={{background:'rgba(0,102,179,0.1)', color:'#0066b3', padding:'6px 14px', borderRadius:20, fontWeight:600}}>🎉 Events</span>
                <span style={{background:'rgba(0,102,179,0.1)', color:'#0066b3', padding:'6px 14px', borderRadius:20, fontWeight:600}}>🏢 Directory</span>
                <span style={{background:'rgba(0,102,179,0.1)', color:'#0066b3', padding:'6px 14px', borderRadius:20, fontWeight:600}}>🛒 Classifieds</span>
                <span style={{background:'rgba(0,102,179,0.1)', color:'#0066b3', padding:'6px 14px', borderRadius:20, fontWeight:600}}>🏝️ Island Guides</span>
              </div>
            </div>
            <div style={{minWidth:'min(100%, 340px)'}}>
              <div className="card" style={{background:'white', borderRadius:16, boxShadow:'0 8px 24px rgba(0,0,0,0.12)', border:'2px solid #e0f2fe'}}>
                <h3 style={{fontSize:'clamp(1.25em, 3vw, 1.5em)', marginBottom:12}}>Get Started Free</h3>
                <p className="muted" style={{marginBottom: '14px', lineHeight:1.6}}>
                  Create free listings, post jobs, add events, and connect with locals across SMBI in minutes.
                </p>
                <p className="muted" style={{marginBottom: '20px', fontSize:'0.95em', lineHeight:1.5}}>
                  Built for residents, tradies, small businesses, clubs, and visitors looking for trusted local information.
                </p>
                <div style={{display:'flex', gap:'12px', flexDirection:'column'}}>
                  <a 
                    href="/signup" 
                    style={{
                      background:'linear-gradient(135deg, #0066b3 0%, #0052a3 100%)', 
                      color:'white', 
                      padding:'14px 24px', 
                      borderRadius:'10px', 
                      textDecoration:'none', 
                      fontWeight:700,
                      textAlign:'center',
                      boxShadow:'0 4px 14px rgba(0,102,179,0.3)',
                      transition:'all 0.2s',
                      display:'block'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,102,179,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,102,179,0.3)';
                    }}
                  >
                    🚀 Sign up free
                  </a>
                  <a 
                    href="/login" 
                    style={{
                      background:'transparent', 
                      color:'#0066b3', 
                      padding:'14px 24px', 
                      borderRadius:'10px', 
                      textDecoration:'none', 
                      fontWeight:700, 
                      border:'2px solid #0066b3',
                      textAlign:'center',
                      transition:'all 0.2s',
                      display:'block'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#0066b3';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#0066b3';
                    }}
                  >
                    Sign in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Content Tabs */}
      {homepageData && (
        <section style={{padding:'clamp(40px, 8vw, 60px) 0', background:'#f8fafc'}}>
          <div className="container">
            <h2 style={{marginBottom:24}}>What's New on the Islands</h2>
            
            {/* Tab Headers */}
            <div style={{display:'flex', gap:16, marginBottom:32, flexWrap:'wrap', borderBottom:'2px solid #e2e8f0', overflowX:'auto'}}>
              {(['businesses', 'events', 'jobs'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding:'12px 20px',
                    background:'none',
                    border:'none',
                    borderBottom: activeTab === tab ? '3px solid #0066b3' : 'none',
                    color: activeTab === tab ? '#0066b3' : '#64748b',
                    fontWeight: activeTab === tab ? 700 : 500,
                    cursor:'pointer',
                    fontSize:'clamp(0.9em, 2vw, 1em)',
                    transition:'all 0.2s',
                    whiteSpace:'nowrap'
                  }}
                >
                  {tab === 'businesses' && '🏢 New Businesses'}
                  {tab === 'events' && '🎉 Upcoming Events'}
                  {tab === 'jobs' && '💼 Latest Jobs'}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:20}}>
              {activeTab === 'businesses' && homepageData.featuredBusinesses.slice(0, 3).map((biz: any) => (
                <a key={biz.id} href={`/directory/${biz.slug || biz.id}`} className="card" style={{textDecoration:'none', color:'inherit', transition:'all 0.2s'}}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.transform = 'translateY(-4px)';
                     e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.12)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = '';
                   }}
                >
                  <h3>{biz.business_name}</h3>
                  <p className="muted" style={{fontSize:'0.9em', marginBottom:8}}>{biz.category}</p>
                  <p className="muted" style={{fontSize:'0.85em'}}>{biz.description?.slice(0, 100)}...</p>
                  <div style={{marginTop:12, color:'#0066b3', fontWeight:600, fontSize:'0.9em'}}>View details →</div>
                </a>
              ))}

              {activeTab === 'events' && homepageData.upcomingEvents.slice(0, 3).map((event: any) => (
                <a key={event.id} href={`/events/${event.id}`} className="card" style={{textDecoration:'none', color:'inherit', transition:'all 0.2s'}}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.transform = 'translateY(-4px)';
                     e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.12)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = '';
                   }}
                >
                  <h3>{event.title}</h3>
                  <p className="muted" style={{fontSize:'0.9em', marginBottom:8}}>{new Date(event.event_date).toLocaleDateString()}</p>
                  <p className="muted" style={{fontSize:'0.85em'}}>{event.description?.slice(0, 100)}...</p>
                  <div style={{marginTop:12, color:'#0066b3', fontWeight:600, fontSize:'0.9em'}}>Learn more →</div>
                </a>
              ))}

              {activeTab === 'jobs' && homepageData.latestJobs.slice(0, 3).map((job: any) => (
                <a key={job.id} href={`/jobs/${job.id}`} className="card" style={{textDecoration:'none', color:'inherit', transition:'all 0.2s'}}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.transform = 'translateY(-4px)';
                     e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.12)';
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.transform = 'translateY(0)';
                     e.currentTarget.style.boxShadow = '';
                   }}
                >
                  <h3>{job.title}</h3>
                  <p className="muted" style={{fontSize:'0.9em', marginBottom:8}}>{job.company}</p>
                  <p className="muted" style={{fontSize:'0.85em'}}>{job.location} • {job.type}</p>
                  <div style={{marginTop:12, color:'#0066b3', fontWeight:600, fontSize:'0.9em'}}>Apply now →</div>
                </a>
              ))}
            </div>

            {/* View All Link */}
            <div style={{textAlign:'center', marginTop:32}}>
              <a 
                href={activeTab === 'businesses' ? '/directory' : activeTab === 'events' ? '/events' : '/jobs'}
                style={{color:'#0066b3', fontWeight:600, fontSize:'1.05em', textDecoration:'none'}}
              >
                View all {activeTab} →
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Discover the Islands Section */}
      <section style={{padding:'clamp(40px, 8vw, 60px) 0', background:'white'}}>
        <div className="container">
          <h2>Explore the Islands 🏝️</h2>
          <p className="muted" style={{maxWidth:600, marginBottom:32}}>The South Moreton Bay Islands (Russell, Macleay, Lamb & Karragarra) offer island living with mainland convenience. Discover each island's unique character, amenities, and lifestyle.</p>
          
          <div className="grid" style={{marginTop:12, marginBottom:40}}>
            <a href="/islands/russell" className="card" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer', transition:'all 0.3s'}}
               onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-4px)';
                 e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
                 e.currentTarget.style.borderColor = '#0066b3';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = '';
                 e.currentTarget.style.borderColor = 'transparent';
               }}
            >
              <h3>🏝️ Russell Island</h3>
              <p className="muted">The hub with shops, schools, and community. Population 2,000+</p>
            </a>
            <a href="/islands/macleay" className="card" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer', transition:'all 0.3s'}}
               onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-4px)';
                 e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
                 e.currentTarget.style.borderColor = '#0066b3';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = '';
                 e.currentTarget.style.borderColor = 'transparent';
               }}
            >
              <h3>⛳ Macleay Island</h3>
              <p className="muted">Upscale & serene with golf, fine dining & art. Population 1,200+</p>
            </a>
            <a href="/islands" className="card" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer', transition:'all 0.3s'}}
               onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-4px)';
                 e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
                 e.currentTarget.style.borderColor = '#0066b3';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = '';
                 e.currentTarget.style.borderColor = 'transparent';
               }}
            >
              <h3>🌴 All Islands Guide</h3>
              <p className="muted">Complete guides to Lamb & Karragarra plus island comparisons.</p>
            </a>
          </div>
          <div style={{textAlign:'center'}}>
            <a href="/islands" style={{color:'#0066b3', fontWeight:600, fontSize:'1.05em', textDecoration:'none'}}>View complete islands guide →</a>
          </div>
        </div>
      </section>

      <section style={{padding:'24px 0'}}>
        <div className="container">
          <h2>Popular sections</h2>
          <div className="grid" style={{marginTop:12}}>
            <a href="/articles" className="card" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer', transition:'all 0.3s'}}
               onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-4px)';
                 e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = '';
               }}
            >
              <h3>📰 Articles</h3>
              <p className="muted">Local news and guides for SMBI residents and visitors.</p>
            </a>
            <a href="/jobs" className="card" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer', transition:'all 0.3s'}}
               onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-4px)';
                 e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = '';
               }}
            >
              <h3>💼 Jobs</h3>
              <p className="muted">Jobs in hospitality, retail and services across the islands.</p>
            </a>
            <a href="/events" className="card" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer', transition:'all 0.3s'}}
               onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-4px)';
                 e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = '';
               }}
            >
              <h3>🎉 Events</h3>
              <p className="muted">Community events, markets, and island gatherings.</p>
            </a>
            <a href="/classifieds" className="card" style={{textDecoration: 'none', color: 'inherit', cursor: 'pointer', transition:'all 0.3s'}}
               onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'translateY(-4px)';
                 e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = '';
               }}
            >
              <h3>🛒 Buy & Sell</h3>
              <p className="muted">Classifieds marketplace for furniture, boats, cars and more.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section style={{padding:'clamp(40px, 8vw, 60px) 0', background:'#fff'}}>
        <div className="container">
          <h2>Why Living on the Bay Islands?</h2>
          <p className="muted" style={{maxWidth:700, marginBottom:32}}>Island life blends relaxed charm with modern amenities. Here's why people choose the South Moreton Bay Islands:</p>
          
          <div className="grid" style={{marginTop:12}}>
            <div className="card">
              <h3>🏘️ Tight-Knit Community</h3>
              <p className="muted">Active clubs, weekly markets, festivals, and genuine local connections.</p>
            </div>
            <div className="card">
              <h3>⛳ Recreation & Lifestyle</h3>
              <p className="muted">Golf, bowls, boating, water sports, walking trails, and outdoor clubs.</p>
            </div>
            <div className="card">
              <h3>🏫 Quality Education</h3>
              <p className="muted">Island schools with community focus + easy mainland access for secondary.</p>
            </div>
            <div className="card">
              <h3>🌿 Natural Beauty</h3>
              <p className="muted">Beaches, wildlife, heritage trails, nature reserves & sustainable living.</p>
            </div>
            <div className="card">
              <h3>💼 Work & Employment</h3>
              <p className="muted">Local jobs + growing remote work opportunities with excellent internet.</p>
            </div>
            <div className="card">
              <h3>🏡 Property Investment</h3>
              <p className="muted">Growing demand for island properties from $700k to luxury beachfront homes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section style={{padding:'clamp(50px, 10vw, 80px) 0', background:'white'}}>
        <div className="container">
          <div style={{
            background:'linear-gradient(135deg, #0066b3 0%, #c85a17 100%)',
            borderRadius:'16px',
            padding:'clamp(2.5rem, 6vw, 4rem)',
            color:'white',
            textAlign:'center'
          }}>
          <h2 style={{color:'white', marginBottom:16, fontSize:'clamp(1.75em, 4vw, 2.5em)', fontWeight:800}}>Ready to Explore Island Living?</h2>
          <p style={{opacity:0.95, marginBottom:40, maxWidth:700, marginLeft:'auto', marginRight:'auto', fontSize:'clamp(1em, 2vw, 1.2em)'}}>
            Browse properties, find your dream job, connect with local businesses, and discover what makes our island community special
          </p>
          
          <div style={{display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap', maxWidth:800, margin:'0 auto'}}>
            <a 
              href="/directory" 
              style={{
                background:'white', 
                color:'#0066b3', 
                padding:'16px 32px', 
                borderRadius:12, 
                textDecoration:'none', 
                fontWeight:700, 
                cursor:'pointer', 
                minHeight:'52px', 
                display:'flex', 
                alignItems:'center',
                fontSize:'clamp(0.95em, 2vw, 1.1em)',
                boxShadow:'0 4px 16px rgba(0,0,0,0.2)',
                transition:'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)';
              }}
            >
              🏢 Explore Businesses
            </a>
            <a 
              href="/classifieds" 
              style={{
                background:'rgba(255,255,255,0.15)', 
                color:'white', 
                padding:'16px 32px', 
                borderRadius:12, 
                textDecoration:'none', 
                fontWeight:700, 
                border:'2px solid white', 
                cursor:'pointer', 
                minHeight:'52px', 
                display:'flex', 
                alignItems:'center',
                fontSize:'clamp(0.95em, 2vw, 1.1em)',
                transition:'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#0066b3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.color = 'white';
              }}
            >
              🏘️ View Properties
            </a>
            <a 
              href="/jobs" 
              style={{
                background:'rgba(255,255,255,0.15)', 
                color:'white', 
                padding:'16px 32px', 
                borderRadius:12, 
                textDecoration:'none', 
                fontWeight:700, 
                border:'2px solid white', 
                cursor:'pointer', 
                minHeight:'52px', 
                display:'flex', 
                alignItems:'center',
                fontSize:'clamp(0.95em, 2vw, 1.1em)',
                transition:'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#0066b3';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                e.currentTarget.style.color = 'white';
              }}
            >
              💼 Browse Jobs
            </a>
          </div>
          </div>
        </div>
      </section>

      {/* ========== ADDITIONAL SECTIONS FROM COMPREHENSIVE REBUILD BELOW ========== */}
      {/* You can rearrange, modify, or remove any of these sections as needed */}

      {/* Community Features Grid */}
      <section style={{padding:'clamp(50px, 10vw, 80px) 0', background:'#f8f9fa'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'clamp(40px, 8vw, 60px)'}}>
            <h2 style={{fontSize:'clamp(1.75em, 4vw, 2.5em)', fontWeight:800, marginBottom:16}}>
              Why Choose SMBI Local?
            </h2>
            <p style={{color:'#666', fontSize:'clamp(1em, 2vw, 1.2em)', maxWidth:700, margin:'0 auto'}}>
              Your trusted community platform for everything Southern Moreton Bay Islands
            </p>
          </div>

          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',
            gap:'clamp(24px, 4vw, 32px)'
          }}>
            <div style={{
              background:'white',
              padding:'clamp(32px, 5vw, 40px)',
              borderRadius:16,
              boxShadow:'0 4px 16px rgba(0,0,0,0.08)',
              textAlign:'center',
              transition:'all 0.3s'
            }}>
              <div style={{
                fontSize:'clamp(2.5em, 5vw, 3em)',
                marginBottom:16
              }}>✓</div>
              <h3 style={{fontSize:'clamp(1.2em, 2.5vw, 1.4em)', fontWeight:700, marginBottom:12}}>
                Verified Businesses
              </h3>
              <p style={{color:'#666', lineHeight:1.6}}>
                All listings are verified to ensure you're connecting with legitimate local businesses
              </p>
            </div>

            <div style={{
              background:'white',
              padding:'clamp(32px, 5vw, 40px)',
              borderRadius:16,
              boxShadow:'0 4px 16px rgba(0,0,0,0.08)',
              textAlign:'center',
              transition:'all 0.3s'
            }}>
              <div style={{
                fontSize:'clamp(2.5em, 5vw, 3em)',
                marginBottom:16
              }}>🏝️</div>
              <h3 style={{fontSize:'clamp(1.2em, 2.5vw, 1.4em)', fontWeight:700, marginBottom:12}}>
                Local Focus
              </h3>
              <p style={{color:'#666', lineHeight:1.6}}>
                100% dedicated to Southern Moreton Bay Islands - no mainland clutter
              </p>
            </div>

            <div style={{
              background:'white',
              padding:'clamp(32px, 5vw, 40px)',
              borderRadius:16,
              boxShadow:'0 4px 16px rgba(0,0,0,0.08)',
              textAlign:'center',
              transition:'all 0.3s'
            }}>
              <div style={{
                fontSize:'clamp(2.5em, 5vw, 3em)',
                marginBottom:16
              }}>💬</div>
              <h3 style={{fontSize:'clamp(1.2em, 2.5vw, 1.4em)', fontWeight:700, marginBottom:12}}>
                Community Reviews
              </h3>
              <p style={{color:'#666', lineHeight:1.6}}>
                Read genuine reviews from island residents and visitors
              </p>
            </div>

            <div style={{
              background:'white',
              padding:'clamp(32px, 5vw, 40px)',
              borderRadius:16,
              boxShadow:'0 4px 16px rgba(0,0,0,0.08)',
              textAlign:'center',
              transition:'all 0.3s'
            }}>
              <div style={{
                fontSize:'clamp(2.5em, 5vw, 3em)',
                marginBottom:16
              }}>🆓</div>
              <h3 style={{fontSize:'clamp(1.2em, 2.5vw, 1.4em)', fontWeight:700, marginBottom:12}}>
                Free Listings
              </h3>
              <p style={{color:'#666', lineHeight:1.6}}>
                Get started free - premium upgrades available for enhanced visibility
              </p>
            </div>

            <div style={{
              background:'white',
              padding:'clamp(32px, 5vw, 40px)',
              borderRadius:16,
              boxShadow:'0 4px 16px rgba(0,0,0,0.08)',
              textAlign:'center',
              transition:'all 0.3s'
            }}>
              <div style={{
                fontSize:'clamp(2.5em, 5vw, 3em)',
                marginBottom:16
              }}>📱</div>
              <h3 style={{fontSize:'clamp(1.2em, 2.5vw, 1.4em)', fontWeight:700, marginBottom:12}}>
                Mobile Friendly
              </h3>
              <p style={{color:'#666', lineHeight:1.6}}>
                Fully responsive design - browse businesses anywhere, anytime
              </p>
            </div>

            <div style={{
              background:'white',
              padding:'clamp(32px, 5vw, 40px)',
              borderRadius:16,
              boxShadow:'0 4px 16px rgba(0,0,0,0.08)',
              textAlign:'center',
              transition:'all 0.3s'
            }}>
              <div style={{
                fontSize:'clamp(2.5em, 5vw, 3em)',
                marginBottom:16
              }}>🤝</div>
              <h3 style={{fontSize:'clamp(1.2em, 2.5vw, 1.4em)', fontWeight:700, marginBottom:12}}>
                Support Local
              </h3>
              <p style={{color:'#666', lineHeight:1.6}}>
                Every search and click helps strengthen our island economy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories / Testimonials */}
      <section style={{padding:'clamp(50px, 10vw, 80px) 0', background:'white'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'clamp(40px, 8vw, 60px)'}}>
            <h2 style={{fontSize:'clamp(1.75em, 4vw, 2.5em)', fontWeight:800, marginBottom:16}}>
              Success Stories
            </h2>
            <p style={{color:'#666', fontSize:'clamp(1em, 2vw, 1.2em)', maxWidth:700, margin:'0 auto'}}>
              See how SMBI Local is helping our community thrive
            </p>
          </div>

          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',
            gap:'clamp(24px, 4vw, 32px)'
          }}>
            <div style={{
              background:'#f8f9fa',
              padding:'clamp(32px, 5vw, 40px)',
              borderRadius:16,
              borderLeft:'4px solid #0066b3'
            }}>
              <div style={{marginBottom:20}}>
                <div style={{fontSize:'2em', marginBottom:12}}>⭐⭐⭐⭐⭐</div>
                <p style={{fontStyle:'italic', color:'#333', lineHeight:1.7, marginBottom:16}}>
                  "Listed my plumbing business and got 5 new customers in the first month. The local focus really works!"
                </p>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:12}}>
                <div style={{
                  width:48,
                  height:48,
                  borderRadius:'50%',
                  background:'linear-gradient(135deg, #0066b3, #00a8e8)',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  color:'white',
                  fontWeight:700,
                  fontSize:'1.2em'
                }}>
                  JM
                </div>
                <div>
                  <div style={{fontWeight:700}}>John M.</div>
                  <div style={{fontSize:'0.9em', color:'#666'}}>Russell Island Plumbing</div>
                </div>
              </div>
            </div>

            <div style={{
              background:'#f8f9fa',
              padding:'clamp(32px, 5vw, 40px)',
              borderRadius:16,
              borderLeft:'4px solid #c85a17'
            }}>
              <div style={{marginBottom:20}}>
                <div style={{fontSize:'2em', marginBottom:12}}>⭐⭐⭐⭐⭐</div>
                <p style={{fontStyle:'italic', color:'#333', lineHeight:1.7, marginBottom:16}}>
                  "Found our dream property on Macleay Island through a classified ad. Best decision we ever made!"
                </p>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:12}}>
                <div style={{
                  width:48,
                  height:48,
                  borderRadius:'50%',
                  background:'linear-gradient(135deg, #c85a17, #ff8c42)',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  color:'white',
                  fontWeight:700,
                  fontSize:'1.2em'
                }}>
                  ST
                </div>
                <div>
                  <div style={{fontWeight:700}}>Sarah T.</div>
                  <div style={{fontSize:'0.9em', color:'#666'}}>New Island Resident</div>
                </div>
              </div>
            </div>

            <div style={{
              background:'#f8f9fa',
              padding:'clamp(32px, 5vw, 40px)',
              borderRadius:16,
              borderLeft:'4px solid #28a745'
            }}>
              <div style={{marginBottom:20}}>
                <div style={{fontSize:'2em', marginBottom:12}}>⭐⭐⭐⭐⭐</div>
                <p style={{fontStyle:'italic', color:'#333', lineHeight:1.7, marginBottom:16}}>
                  "The event calendar keeps me connected to everything happening on the islands. Love this platform!"
                </p>
              </div>
              <div style={{display:'flex', alignItems:'center', gap:12}}>
                <div style={{
                  width:48,
                  height:48,
                  borderRadius:'50%',
                  background:'linear-gradient(135deg, #28a745, #5cb85c)',
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center',
                  color:'white',
                  fontWeight:700,
                  fontSize:'1.2em'
                }}>
                  MK
                </div>
                <div>
                  <div style={{fontWeight:700}}>Maria K.</div>
                  <div style={{fontSize:'0.9em', color:'#666'}}>Karragarra Island</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section style={{padding:'clamp(50px, 10vw, 80px) 0', background:'linear-gradient(135deg, #0066b3 0%, #00a8e8 100%)'}}>
        <div className="container">
          <div style={{maxWidth:800, margin:'0 auto', textAlign:'center', color:'white'}}>
            <h2 style={{fontSize:'clamp(1.75em, 4vw, 2.5em)', fontWeight:800, marginBottom:16, color:'white'}}>
              Stay Connected
            </h2>
            <p style={{fontSize:'clamp(1em, 2vw, 1.2em)', opacity:0.95, marginBottom:40}}>
              Get weekly updates on new businesses, events, and island news delivered to your inbox
            </p>
            
            <form style={{
              display:'flex',
              gap:12,
              maxWidth:600,
              margin:'0 auto',
              flexWrap:'wrap',
              justifyContent:'center'
            }}>
              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  flex:'1 1 300px',
                  padding:'16px 24px',
                  borderRadius:12,
                  border:'none',
                  fontSize:'1em',
                  minHeight:52
                }}
              />
              <button
                type="submit"
                style={{
                  background:'#c85a17',
                  color:'white',
                  padding:'16px 40px',
                  borderRadius:12,
                  border:'none',
                  fontSize:'1em',
                  fontWeight:700,
                  cursor:'pointer',
                  minHeight:52,
                  whiteSpace:'nowrap',
                  transition:'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ff8c42';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#c85a17';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Subscribe Free
              </button>
            </form>

            <p style={{fontSize:'0.9em', opacity:0.8, marginTop:16}}>
              Join 2,500+ island residents. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Island Highlights Grid */}
      <section style={{padding:'clamp(50px, 10vw, 80px) 0', background:'white'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:'clamp(40px, 8vw, 60px)'}}>
            <h2 style={{fontSize:'clamp(1.75em, 4vw, 2.5em)', fontWeight:800, marginBottom:16}}>
              Explore Our Islands
            </h2>
            <p style={{color:'#666', fontSize:'clamp(1em, 2vw, 1.2em)', maxWidth:700, margin:'0 auto'}}>
              Each island has its own unique character and community
            </p>
          </div>

          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',
            gap:'clamp(24px, 4vw, 32px)'
          }}>
            <a href="/islands/russell-island" style={{
              textDecoration:'none',
              color:'inherit',
              display:'block',
              position:'relative',
              borderRadius:16,
              overflow:'hidden',
              boxShadow:'0 4px 16px rgba(0,0,0,0.1)',
              transition:'all 0.3s'
            }}>
              <div style={{
                background:'linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))',
                position:'absolute',
                top:0,
                left:0,
                right:0,
                bottom:0,
                zIndex:1
              }} />
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800" 
                alt="Russell Island"
                style={{width:'100%', height:280, objectFit:'cover'}}
              />
              <div style={{
                position:'absolute',
                bottom:0,
                left:0,
                right:0,
                padding:24,
                zIndex:2,
                color:'white'
              }}>
                <h3 style={{fontSize:'1.5em', fontWeight:700, marginBottom:8, color:'white'}}>Russell Island</h3>
                <p style={{opacity:0.95, fontSize:'0.95em'}}>Largest island • 3,000+ residents • Shopping hub</p>
              </div>
            </a>

            <a href="/islands/macleay-island" style={{
              textDecoration:'none',
              color:'inherit',
              display:'block',
              position:'relative',
              borderRadius:16,
              overflow:'hidden',
              boxShadow:'0 4px 16px rgba(0,0,0,0.1)',
              transition:'all 0.3s'
            }}>
              <div style={{
                background:'linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))',
                position:'absolute',
                top:0,
                left:0,
                right:0,
                bottom:0,
                zIndex:1
              }} />
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800" 
                alt="Macleay Island"
                style={{width:'100%', height:280, objectFit:'cover'}}
              />
              <div style={{
                position:'absolute',
                bottom:0,
                left:0,
                right:0,
                padding:24,
                zIndex:2,
                color:'white'
              }}>
                <h3 style={{fontSize:'1.5em', fontWeight:700, marginBottom:8, color:'white'}}>Macleay Island</h3>
                <p style={{opacity:0.95, fontSize:'0.95em'}}>Family friendly • Golf course • Beautiful beaches</p>
              </div>
            </a>

            <a href="/islands/karragarra-island" style={{
              textDecoration:'none',
              color:'inherit',
              display:'block',
              position:'relative',
              borderRadius:16,
              overflow:'hidden',
              boxShadow:'0 4px 16px rgba(0,0,0,0.1)',
              transition:'all 0.3s'
            }}>
              <div style={{
                background:'linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))',
                position:'absolute',
                top:0,
                left:0,
                right:0,
                bottom:0,
                zIndex:1
              }} />
              <img 
                src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800" 
                alt="Karragarra Island"
                style={{width:'100%', height:280, objectFit:'cover'}}
              />
              <div style={{
                position:'absolute',
                bottom:0,
                left:0,
                right:0,
                padding:24,
                zIndex:2,
                color:'white'
              }}>
                <h3 style={{fontSize:'1.5em', fontWeight:700, marginBottom:8, color:'white'}}>Karragarra Island</h3>
                <p style={{opacity:0.95, fontSize:'0.95em'}}>Peaceful retreat • Nature lovers • Small community</p>
              </div>
            </a>

            <a href="/islands/lamb-island" style={{
              textDecoration:'none',
              color:'inherit',
              display:'block',
              position:'relative',
              borderRadius:16,
              overflow:'hidden',
              boxShadow:'0 4px 16px rgba(0,0,0,0.1)',
              transition:'all 0.3s'
            }}>
              <div style={{
                background:'linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))',
                position:'absolute',
                top:0,
                left:0,
                right:0,
                bottom:0,
                zIndex:1
              }} />
              <img 
                src="https://images.unsplash.com/photo-1540202404-a2f2a2100811?w=800" 
                alt="Lamb Island"
                style={{width:'100%', height:280, objectFit:'cover'}}
              />
              <div style={{
                position:'absolute',
                bottom:0,
                left:0,
                right:0,
                padding:24,
                zIndex:2,
                color:'white'
              }}>
                <h3 style={{fontSize:'1.5em', fontWeight:700, marginBottom:8, color:'white'}}>Lamb Island</h3>
                <p style={{opacity:0.95, fontSize:'0.95em'}}>Quiet lifestyle • Historic charm • Coastal views</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section style={{padding:'clamp(40px, 8vw, 60px) 0', background:'#f8f9fa'}}>
        <div className="container">
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',
            gap:'clamp(24px, 4vw, 32px)',
            textAlign:'center'
          }}>
            <div>
              <div style={{fontSize:'clamp(2.5em, 5vw, 3.5em)', fontWeight:800, color:'#0066b3', marginBottom:8}}>
                {homepageData?.stats?.businesses || '250+'}
              </div>
              <div style={{color:'#666', fontSize:'clamp(0.95em, 2vw, 1.1em)', fontWeight:600}}>
                Local Businesses
              </div>
            </div>

            <div>
              <div style={{fontSize:'clamp(2.5em, 5vw, 3.5em)', fontWeight:800, color:'#c85a17', marginBottom:8}}>
                5,000+
              </div>
              <div style={{color:'#666', fontSize:'clamp(0.95em, 2vw, 1.1em)', fontWeight:600}}>
                Island Residents
              </div>
            </div>

            <div>
              <div style={{fontSize:'clamp(2.5em, 5vw, 3.5em)', fontWeight:800, color:'#28a745', marginBottom:8}}>
                100+
              </div>
              <div style={{color:'#666', fontSize:'clamp(0.95em, 2vw, 1.1em)', fontWeight:600}}>
                Monthly Events
              </div>
            </div>

            <div>
              <div style={{fontSize:'clamp(2.5em, 5vw, 3.5em)', fontWeight:800, color:'#6f42c1', marginBottom:8}}>
                4
              </div>
              <div style={{color:'#666', fontSize:'clamp(0.95em, 2vw, 1.1em)', fontWeight:600}}>
                Beautiful Islands
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Owner CTA */}
      <section style={{padding:'clamp(50px, 10vw, 80px) 0', background:'white'}}>
        <div className="container">
          <div style={{
            background:'linear-gradient(135deg, #6f42c1 0%, #a855f7 100%)',
            borderRadius:16,
            padding:'clamp(2.5rem, 6vw, 4rem)',
            color:'white',
            textAlign:'center'
          }}>
            <h2 style={{fontSize:'clamp(1.75em, 4vw, 2.5em)', fontWeight:800, marginBottom:16, color:'white'}}>
              Are You a Local Business Owner?
            </h2>
            <p style={{fontSize:'clamp(1em, 2vw, 1.2em)', opacity:0.95, marginBottom:32, maxWidth:700, margin:'0 auto 32px'}}>
              Join hundreds of island businesses already reaching local customers through SMBI Local
            </p>
            
            <div style={{display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap'}}>
              <a 
                href="/signup"
                style={{
                  background:'white',
                  color:'#6f42c1',
                  padding:'16px 40px',
                  borderRadius:12,
                  textDecoration:'none',
                  fontWeight:700,
                  fontSize:'clamp(1em, 2vw, 1.1em)',
                  cursor:'pointer',
                  display:'inline-block',
                  transition:'all 0.3s',
                  boxShadow:'0 4px 16px rgba(0,0,0,0.2)'
                }}
              >
                List Your Business Free
              </a>
              <a 
                href="/upgrade"
                style={{
                  background:'rgba(255,255,255,0.15)',
                  color:'white',
                  padding:'16px 40px',
                  borderRadius:12,
                  textDecoration:'none',
                  fontWeight:700,
                  fontSize:'clamp(1em, 2vw, 1.1em)',
                  border:'2px solid white',
                  cursor:'pointer',
                  display:'inline-block',
                  transition:'all 0.3s'
                }}
              >
                See Premium Features
              </a>
            </div>
          </div>
        </div>
      </section>

    </section>
  )
}
