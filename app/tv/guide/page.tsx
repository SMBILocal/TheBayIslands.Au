'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import { useAuth } from '@/lib/AuthContext'
import { tvChannels, tvGuidePrograms, programCategories, timeSlots, type TvProgram } from '@/lib/tv-guide-data'

export default function TvGuidePage() {
  const { user } = useAuth()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('evening')
  const [selectedChannels, setSelectedChannels] = useState<number[]>([7, 9, 10, 2, 3])
  const [favorites, setFavorites] = useState<string[]>([])
  const [reminders, setReminders] = useState<string[]>([])
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)

  // Load user preferences from localStorage
  useEffect(() => {
    if (user) {
      const savedFavorites = localStorage.getItem(`tv-favorites-${user.id}`)
      const savedReminders = localStorage.getItem(`tv-reminders-${user.id}`)
      if (savedFavorites) setFavorites(JSON.parse(savedFavorites))
      if (savedReminders) setReminders(JSON.parse(savedReminders))
    }
  }, [user])

  const toggleFavorite = (programId: string) => {
    if (!user) {
      alert('Please sign in to save favorite programs')
      return
    }
    const newFavorites = favorites.includes(programId)
      ? favorites.filter(id => id !== programId)
      : [...favorites, programId]
    setFavorites(newFavorites)
    localStorage.setItem(`tv-favorites-${user.id}`, JSON.stringify(newFavorites))
  }

  const toggleReminder = (programId: string) => {
    if (!user) {
      alert('Please sign in to set program reminders')
      return
    }
    const newReminders = reminders.includes(programId)
      ? reminders.filter(id => id !== programId)
      : [...reminders, programId]
    setReminders(newReminders)
    localStorage.setItem(`tv-reminders-${user.id}`, JSON.stringify(newReminders))
    
    if (!reminders.includes(programId)) {
      alert('Reminder set! You\'ll be notified 15 minutes before this program starts.')
    }
  }

  const toggleChannel = (channelNumber: number) => {
    setSelectedChannels(prev =>
      prev.includes(channelNumber)
        ? prev.filter(n => n !== channelNumber)
        : [...prev, channelNumber]
    )
  }

  // Filter programs based on selections
  const filteredPrograms = tvGuidePrograms.filter(program => {
    // Filter by channel
    if (!selectedChannels.includes(program.channelNumber)) return false
    
    // Filter by category
    if (selectedCategory !== 'all' && program.category.toLowerCase() !== selectedCategory) return false
    
    // Filter by time slot
    const timeSlot = timeSlots.find(slot => slot.id === selectedTimeSlot)
    if (timeSlot) {
      const programHour = parseInt(program.startTime.split(':')[0])
      if (programHour < timeSlot.start || programHour >= timeSlot.end) return false
    }
    
    // Filter by favorites
    if (showOnlyFavorites && !favorites.includes(program.id)) return false
    
    return true
  })

  // Group programs by channel
  const programsByChannel = filteredPrograms.reduce((acc, program) => {
    if (!acc[program.channelNumber]) acc[program.channelNumber] = []
    acc[program.channelNumber].push(program)
    return acc
  }, {} as Record<number, TvProgram[]>)

  return (
    <div className="page-container">
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '40px 20px' }}>
        {/* Breadcrumb */}
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: 'TV Stations', href: '/tv' },
          { label: 'TV Guide' }
        ]} />

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
            <div>
              <h1 style={{ fontSize: 'clamp(2em, 5vw, 2.5em)', fontWeight: 700, marginBottom: 8, color: '#0b1727' }}>
                📺 TV Guide — Bay Islands & Redlands
              </h1>
              <p style={{ fontSize: '1.1em', color: '#666', lineHeight: 1.6 }}>
                Complete television programming guide for Brisbane, Redlands Coast and Southern Moreton Bay Islands. 
                {user && <span style={{ color: '#0066b3', fontWeight: 600 }}> Save favorites & set reminders!</span>}
              </p>
            </div>
            <Link href="/tv" style={{ 
              background: '#f0f0f0', 
              padding: '10px 16px', 
              borderRadius: '8px', 
              textDecoration: 'none', 
              color: '#0b1727',
              fontWeight: 600,
              fontSize: '0.9em',
              whiteSpace: 'nowrap'
            }}>
              ← Back to TV Stations
            </Link>
          </div>

          {/* User features info */}
          {!user && (
            <div style={{ background: '#fff3cd', padding: '16px', borderRadius: '8px', borderLeft: '4px solid #ffc107', marginTop: 16 }}>
              <p style={{ margin: 0, color: '#856404' }}>
                <strong>💡 Pro Tip:</strong> <Link href="/login" style={{ color: '#0066b3', fontWeight: 700 }}>Sign in</Link> to save favorite programs, set reminders, and personalize your TV guide experience!
              </p>
            </div>
          )}
        </div>

        {/* Filters & Controls */}
        <div style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', marginBottom: 32 }}>
          {/* Time Slots */}
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: '1.1em', fontWeight: 700, marginBottom: 12, color: '#0b1727' }}>🕐 Time of Day</h3>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {timeSlots.map(slot => (
                <button
                  key={slot.id}
                  onClick={() => setSelectedTimeSlot(slot.id)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    border: selectedTimeSlot === slot.id ? '2px solid #0066b3' : '2px solid #e2e8f0',
                    background: selectedTimeSlot === slot.id ? '#e8f4f8' : 'white',
                    color: selectedTimeSlot === slot.id ? '#0066b3' : '#475569',
                    fontWeight: selectedTimeSlot === slot.id ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {slot.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: '1.1em', fontWeight: 700, marginBottom: 12, color: '#0b1727' }}>📂 Program Category</h3>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {programCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: selectedCategory === category.id ? '2px solid #0066b3' : '2px solid #e2e8f0',
                    background: selectedCategory === category.id ? '#e8f4f8' : 'white',
                    color: selectedCategory === category.id ? '#0066b3' : '#475569',
                    fontWeight: selectedCategory === category.id ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontSize: '0.9em'
                  }}
                >
                  {category.icon} {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Channel Selection */}
          <div style={{ marginBottom: 24 }}>
            <h3 style={{ fontSize: '1.1em', fontWeight: 700, marginBottom: 12, color: '#0b1727' }}>📡 Channels</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 8 }}>
              {tvChannels.filter(ch => [7, 9, 10, 2, 3, 70, 90, 11, 20, 31].includes(ch.number)).map(channel => (
                <button
                  key={channel.id}
                  onClick={() => toggleChannel(channel.number)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: selectedChannels.includes(channel.number) ? '2px solid #0066b3' : '2px solid #e2e8f0',
                    background: selectedChannels.includes(channel.number) ? '#e8f4f8' : 'white',
                    color: selectedChannels.includes(channel.number) ? '#0066b3' : '#64748b',
                    fontWeight: selectedChannels.includes(channel.number) ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontSize: '0.85em',
                    textAlign: 'left'
                  }}
                >
                  {channel.number} · {channel.name}
                </button>
              ))}
            </div>
          </div>

          {/* Show Favorites Toggle */}
          {user && favorites.length > 0 && (
            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={showOnlyFavorites}
                  onChange={(e) => setShowOnlyFavorites(e.target.checked)}
                  style={{ width: 18, height: 18, cursor: 'pointer' }}
                />
                <span style={{ fontWeight: 600, color: '#0b1727' }}>⭐ Show only my favorite programs ({favorites.length})</span>
              </label>
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.1em', color: '#475569' }}>
            Showing <strong style={{ color: '#0066b3' }}>{filteredPrograms.length} programs</strong> across <strong style={{ color: '#0066b3' }}>{selectedChannels.length} channels</strong>
          </div>
          {user && (
            <div style={{ fontSize: '0.9em', color: '#64748b' }}>
              ⭐ {favorites.length} favorites · 🔔 {reminders.length} reminders
            </div>
          )}
        </div>

        {/* TV Guide Grid */}
        {Object.keys(programsByChannel).length === 0 ? (
          <div style={{ background: '#f8fafc', padding: '60px 20px', textAlign: 'center', borderRadius: '12px' }}>
            <div style={{ fontSize: '3em', marginBottom: 16 }}>📺</div>
            <h3 style={{ fontSize: '1.5em', marginBottom: 8, color: '#0b1727' }}>No programs found</h3>
            <p style={{ color: '#64748b', marginBottom: 20 }}>Try adjusting your filters or selecting different channels.</p>
            <button
              onClick={() => {
                setSelectedCategory('all')
                setSelectedChannels([7, 9, 10, 2, 3])
                setShowOnlyFavorites(false)
              }}
              style={{
                background: '#0066b3',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gap: 32 }}>
            {selectedChannels.filter(num => programsByChannel[num]).map(channelNumber => {
              const channel = tvChannels.find(ch => ch.number === channelNumber)
              const programs = programsByChannel[channelNumber].sort((a, b) => a.startTime.localeCompare(b.startTime))
              
              return (
                <div key={channelNumber} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                  {/* Channel Header */}
                  <div style={{ background: 'linear-gradient(135deg, #0066b3 0%, #004d8c 100%)', padding: '20px', color: 'white' }}>
                    <div style={{ fontSize: '1.5em', fontWeight: 700 }}>
                      {channel?.number} · {channel?.name}
                    </div>
                    <div style={{ fontSize: '0.9em', opacity: 0.9, marginTop: 4 }}>
                      {programs.length} programs in this time slot
                    </div>
                  </div>

                  {/* Programs List */}
                  <div style={{ padding: '0' }}>
                    {programs.map((program, idx) => {
                      const isFavorite = favorites.includes(program.id)
                      const hasReminder = reminders.includes(program.id)
                      
                      return (
                        <div
                          key={program.id}
                          style={{
                            padding: '20px',
                            borderBottom: idx < programs.length - 1 ? '1px solid #e2e8f0' : 'none',
                            display: 'flex',
                            gap: 20,
                            alignItems: 'flex-start',
                            background: isFavorite ? '#fffbf0' : 'white',
                            transition: 'all 0.2s'
                          }}
                        >
                          {/* Time */}
                          <div style={{ minWidth: 80, textAlign: 'center' }}>
                            <div style={{ fontSize: '1.3em', fontWeight: 700, color: '#0066b3' }}>
                              {program.startTime}
                            </div>
                            <div style={{ fontSize: '0.8em', color: '#64748b' }}>
                              {program.duration} min
                            </div>
                          </div>

                          {/* Program Details */}
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                              <h4 style={{ fontSize: '1.2em', fontWeight: 700, margin: 0, color: '#0b1727' }}>
                                {program.title}
                              </h4>
                              {program.isLive && (
                                <span style={{ background: '#dc2626', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7em', fontWeight: 700 }}>
                                  LIVE
                                </span>
                              )}
                              {program.isNew && (
                                <span style={{ background: '#0066b3', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7em', fontWeight: 700 }}>
                                  NEW
                                </span>
                              )}
                              {program.isRepeat && (
                                <span style={{ background: '#94a3b8', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7em', fontWeight: 700 }}>
                                  REPEAT
                                </span>
                              )}
                            </div>
                            
                            <p style={{ color: '#475569', lineHeight: 1.5, marginBottom: 8, fontSize: '0.95em' }}>
                              {program.description}
                            </p>
                            
                            <div style={{ display: 'flex', gap: 16, fontSize: '0.85em', color: '#64748b', flexWrap: 'wrap' }}>
                              <span>📂 {program.category}</span>
                              <span>🎬 {program.rating}</span>
                              {program.season && <span>Season {program.season}</span>}
                              {program.episode && <span>{program.episode}</span>}
                            </div>
                          </div>

                          {/* Actions */}
                          <div style={{ display: 'flex', gap: 8 }}>
                            <button
                              onClick={() => toggleFavorite(program.id)}
                              style={{
                                background: isFavorite ? '#fbbf24' : '#f1f5f9',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '10px 12px',
                                cursor: 'pointer',
                                fontSize: '1.2em',
                                transition: 'all 0.2s'
                              }}
                              title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                            >
                              {isFavorite ? '⭐' : '☆'}
                            </button>
                            <button
                              onClick={() => toggleReminder(program.id)}
                              style={{
                                background: hasReminder ? '#0066b3' : '#f1f5f9',
                                color: hasReminder ? 'white' : '#64748b',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '10px 12px',
                                cursor: 'pointer',
                                fontSize: '1.2em',
                                transition: 'all 0.2s'
                              }}
                              title={hasReminder ? 'Remove reminder' : 'Set reminder'}
                            >
                              🔔
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Footer Info */}
        <div style={{ marginTop: 48, padding: '24px', background: '#f8fafc', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '1.3em', fontWeight: 700, marginBottom: 12, color: '#0b1727' }}>
            📡 About This TV Guide
          </h3>
          <p style={{ color: '#475569', lineHeight: 1.6, marginBottom: 16 }}>
            This TV guide shows programming for free-to-air television stations serving the Brisbane, Redlands Coast, 
            and Southern Moreton Bay Islands region. All programs are broadcast over digital terrestrial TV and most 
            are also available via official streaming apps (7plus, 9Now, 10 Play, ABC iview, SBS On Demand).
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            <Link href="/tv" style={{ 
              padding: '16px', 
              background: 'white', 
              borderRadius: '8px', 
              textDecoration: 'none', 
              color: '#0b1727',
              border: '1px solid #e2e8f0',
              transition: 'all 0.2s'
            }}>
              <div style={{ fontSize: '2em', marginBottom: 8 }}>📺</div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>TV Stations</div>
              <div style={{ fontSize: '0.85em', color: '#64748b' }}>View all local TV channels</div>
            </Link>
            <Link href="/radio" style={{ 
              padding: '16px', 
              background: 'white', 
              borderRadius: '8px', 
              textDecoration: 'none', 
              color: '#0b1727',
              border: '1px solid #e2e8f0',
              transition: 'all 0.2s'
            }}>
              <div style={{ fontSize: '2em', marginBottom: 8 }}>📻</div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Radio Stations</div>
              <div style={{ fontSize: '0.85em', color: '#64748b' }}>Listen to local radio</div>
            </Link>
            <Link href="/news" style={{ 
              padding: '16px', 
              background: 'white', 
              borderRadius: '8px', 
              textDecoration: 'none', 
              color: '#0b1727',
              border: '1px solid #e2e8f0',
              transition: 'all 0.2s'
            }}>
              <div style={{ fontSize: '2em', marginBottom: 8 }}>📰</div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Local News</div>
              <div style={{ fontSize: '0.85em', color: '#64748b' }}>Read local news sources</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
