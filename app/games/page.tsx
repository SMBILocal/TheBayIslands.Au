'use client';

import React from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export default function GamesPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/' },
          { label: 'Games & Puzzles', href: '/games' }
        ]} 
      />

      {/* Newspaper Style Header */}
      <section style={{
        background: 'white',
        borderBottom: '4px double #333',
        padding: 'clamp(24px, 5vw, 48px) 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            fontSize: 'clamp(10px, 2vw, 12px)',
            letterSpacing: '2px',
            color: '#666',
            marginBottom: 8,
            textTransform: 'uppercase',
            fontWeight: 600
          }}>
            The Bay Islands
          </div>
          <h1 style={{
            fontSize: 'clamp(2.5em, 6vw, 4em)',
            fontWeight: 900,
            color: '#0f172a',
            margin: 0,
            letterSpacing: '-1px',
            borderTop: '2px solid #333',
            borderBottom: '2px solid #333',
            padding: '12px 0'
          }}>
            Games & Puzzles
          </h1>
          <div style={{
            fontSize: 'clamp(14px, 2.5vw, 18px)',
            color: '#666',
            marginTop: 12
          }}>
            Daily Challenges • Community Competitions • Win Prizes
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 'clamp(32px, 6vw, 64px) 20px'
      }}>
        <div style={{
          background: 'white',
          borderRadius: 12,
          padding: 'clamp(24px, 5vw, 48px)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e2e8f0'
        }}>
          {/* Newspaper Comic Strip Placeholder */}
          <div style={{
            borderBottom: '2px solid #333',
            paddingBottom: 24,
            marginBottom: 32
          }}>
            <h2 style={{
              fontSize: 'clamp(1.5em, 3vw, 2em)',
              fontWeight: 700,
              marginBottom: 16,
              color: '#0f172a'
            }}>
              📰 Today's Comic Strip
            </h2>
            <div style={{
              background: '#f8f9fa',
              border: '2px solid #333',
              borderRadius: 8,
              padding: 40,
              textAlign: 'center',
              minHeight: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ color: '#64748b', fontSize: 16 }}>
                🎨 Daily comic strip coming soon!
              </div>
            </div>
          </div>

          {/* Daily Puzzles Grid */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{
              fontSize: 'clamp(1.5em, 3vw, 2em)',
              fontWeight: 700,
              marginBottom: 24,
              color: '#0f172a',
              borderBottom: '2px solid #333',
              paddingBottom: 12
            }}>
              🎯 Daily Puzzles
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24
            }}>
              {/* Crossword */}
              <div style={{
                background: 'white',
                border: '2px solid #333',
                borderRadius: 8,
                padding: 24,
                textAlign: 'center',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: 48, marginBottom: 12 }}>📝</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>
                  Crossword
                </h3>
                <p style={{ color: '#64748b', fontSize: 14, marginBottom: 16 }}>
                  Test your vocabulary with daily themed crosswords
                </p>
                <div style={{
                  background: '#f1f5f9',
                  padding: '8px 16px',
                  borderRadius: 6,
                  fontSize: 12,
                  color: '#475569',
                  fontWeight: 600
                }}>
                  Coming Soon
                </div>
              </div>

              {/* Sudoku */}
              <div style={{
                background: 'white',
                border: '2px solid #333',
                borderRadius: 8,
                padding: 24,
                textAlign: 'center',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: 48, marginBottom: 12 }}>🔢</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>
                  Sudoku
                </h3>
                <p style={{ color: '#64748b', fontSize: 14, marginBottom: 16 }}>
                  Daily number puzzles in Easy, Medium, and Hard
                </p>
                <div style={{
                  background: '#f1f5f9',
                  padding: '8px 16px',
                  borderRadius: 6,
                  fontSize: 12,
                  color: '#475569',
                  fontWeight: 600
                }}>
                  Coming Soon
                </div>
              </div>

              {/* Word Search */}
              <div style={{
                background: 'white',
                border: '2px solid #333',
                borderRadius: 8,
                padding: 24,
                textAlign: 'center',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>
                  Word Search
                </h3>
                <p style={{ color: '#64748b', fontSize: 14, marginBottom: 16 }}>
                  Find hidden words in themed grids
                </p>
                <div style={{
                  background: '#f1f5f9',
                  padding: '8px 16px',
                  borderRadius: 6,
                  fontSize: 12,
                  color: '#475569',
                  fontWeight: 600
                }}>
                  Coming Soon
                </div>
              </div>

              {/* Spot the Difference */}
              <div style={{
                background: 'white',
                border: '2px solid #333',
                borderRadius: 8,
                padding: 24,
                textAlign: 'center',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: 48, marginBottom: 12 }}>🖼️</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>
                  Spot the Difference
                </h3>
                <p style={{ color: '#64748b', fontSize: 14, marginBottom: 16 }}>
                  Compare images and find all differences
                </p>
                <div style={{
                  background: '#f1f5f9',
                  padding: '8px 16px',
                  borderRadius: 6,
                  fontSize: 12,
                  color: '#475569',
                  fontWeight: 600
                }}>
                  Coming Soon
                </div>
              </div>
            </div>
          </div>

          {/* Multiplayer Games Section */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{
              fontSize: 'clamp(1.5em, 3vw, 2em)',
              fontWeight: 700,
              marginBottom: 24,
              color: '#0f172a',
              borderBottom: '2px solid #333',
              paddingBottom: 12
            }}>
              🎮 Multiplayer Games
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24
            }}>
              {/* Chess */}
              <div style={{
                background: 'white',
                border: '2px solid #333',
                borderRadius: 8,
                padding: 24,
                textAlign: 'center'
              }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>♟️</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>Chess</h3>
                <p style={{ color: '#64748b', fontSize: 14 }}>Challenge friends or play against AI</p>
              </div>

              {/* Mahjong */}
              <div style={{
                background: 'white',
                border: '2px solid #333',
                borderRadius: 8,
                padding: 24,
                textAlign: 'center'
              }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🀄</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>Mahjong</h3>
                <p style={{ color: '#64748b', fontSize: 14 }}>Classic tile matching game</p>
              </div>

              {/* More Games */}
              <div style={{
                background: 'white',
                border: '2px solid #333',
                borderRadius: 8,
                padding: 24,
                textAlign: 'center'
              }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🎲</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: '#0f172a' }}>More Games</h3>
                <p style={{ color: '#64748b', fontSize: 14 }}>Checkers, Connect 4, and more!</p>
              </div>
            </div>
          </div>

          {/* Leaderboard & Prizes Teaser */}
          <div style={{
            background: 'linear-gradient(135deg, #0ea5e9 0%, #0066b3 100%)',
            borderRadius: 12,
            padding: 32,
            textAlign: 'center',
            color: 'white'
          }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🏆</div>
            <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
              Compete & Win Prizes!
            </h2>
            <p style={{ fontSize: 16, marginBottom: 20, opacity: 0.95 }}>
              Earn points, climb leaderboards, and win monthly prizes from local businesses
            </p>
            <div style={{
              display: 'inline-block',
              background: 'white',
              color: '#0066b3',
              padding: '10px 24px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600
            }}>
              Launching Soon - Stay Tuned!
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
