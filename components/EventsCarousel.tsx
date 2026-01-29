'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Event {
  id: string;
  title: string;
  slug?: string;
  description: string;
  event_date: string;
  location: string;
  category?: string;
  ticket_price?: number;
  event_image?: string;
  featured?: boolean;
}

interface EventsCarouselProps {
  events: Event[];
  autoScroll?: boolean;
}

export default function EventsCarousel({ events, autoScroll = true }: EventsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!autoScroll || events.length <= itemsPerView) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, events.length - itemsPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 6000);
    return () => clearInterval(timer);
  }, [autoScroll, events.length, itemsPerView]);

  if (events.length === 0) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      month: date.toLocaleDateString('en-AU', { month: 'short' }).toUpperCase(),
      day: date.getDate(),
      time: date.toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit', hour12: true })
    };
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ overflow: 'hidden' }}>
        <div style={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          gap: 'clamp(16px, 3vw, 24px)'
        }}>
          {events.map((event) => {
            const dateInfo = formatDate(event.event_date);
            return (
              <Link
                key={event.id}
                href={`/events/${event.slug || event.id}`}
                style={{
                  flex: `0 0 calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 20 / itemsPerView}px)`,
                  minWidth: 0,
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <div style={{
                  background: 'white',
                  borderRadius: 12,
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s',
                  height: '100%',
                  border: event.featured ? '2px solid #10b981' : '1px solid #e5e7eb'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                }}
                >
                  {/* Image/Header */}
                  <div style={{
                    width: '100%',
                    height: 160,
                    background: event.event_image 
                      ? `url(${event.event_image}) center/cover` 
                      : 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: 16
                  }}>
                    {/* Date Badge */}
                    <div style={{
                      position: 'absolute',
                      top: 12,
                      left: 12,
                      background: 'white',
                      borderRadius: 8,
                      padding: '8px 12px',
                      textAlign: 'center',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}>
                      <div style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: '#0066b3',
                        lineHeight: 1
                      }}>
                        {dateInfo.month}
                      </div>
                      <div style={{
                        fontSize: 24,
                        fontWeight: 800,
                        color: '#0f172a',
                        lineHeight: 1,
                        marginTop: 2
                      }}>
                        {dateInfo.day}
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {event.featured && (
                      <div style={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        background: '#10b981',
                        color: 'white',
                        padding: '4px 10px',
                        borderRadius: 6,
                        fontSize: 11,
                        fontWeight: 700,
                        textTransform: 'uppercase'
                      }}>
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ padding: 16 }}>
                    <h3 style={{
                      fontSize: 16,
                      fontWeight: 700,
                      margin: '0 0 8px 0',
                      lineHeight: 1.3,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      color: '#0f172a'
                    }}>
                      {event.title}
                    </h3>

                    <p style={{
                      fontSize: 13,
                      color: '#64748b',
                      margin: '0 0 12px 0',
                      lineHeight: 1.5,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {event.description}
                    </p>

                    {/* Meta Info */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 6,
                      fontSize: 12,
                      color: '#6b7280'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span>🕐</span>
                        <span style={{ fontWeight: 600 }}>{dateInfo.time}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span>📍</span>
                        <span style={{ fontWeight: 600 }}>{event.location.replace('-', ' ')}</span>
                      </div>
                      {event.ticket_price !== undefined && (
                        <div style={{
                          marginTop: 8,
                          padding: '6px 12px',
                          background: event.ticket_price === 0 ? '#dcfce7' : '#dbeafe',
                          color: event.ticket_price === 0 ? '#166534' : '#1e40af',
                          borderRadius: 6,
                          fontWeight: 700,
                          textAlign: 'center'
                        }}>
                          {event.ticket_price === 0 ? 'FREE EVENT' : `$${event.ticket_price}`}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      {events.length > itemsPerView && (
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 16 }}>
          {Array.from({ length: Math.max(1, events.length - itemsPerView + 1) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              style={{
                width: currentIndex === i ? 20 : 8,
                height: 8,
                borderRadius: 4,
                background: currentIndex === i ? '#8b5cf6' : '#cbd5e1',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
