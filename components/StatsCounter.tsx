'use client';

import { useState, useEffect, useRef } from 'react';

interface StatsCounterProps {
  stats: {
    businesses: number;
    jobs: number;
    events: number;
    members: number;
  };
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  const businessCount = stats.businesses || 0;
  const jobCount = stats.jobs || 0;
  const eventCount = stats.events || 0;
  const memberCount = stats.members || 0;
  const [counts, setCounts] = useState({ business: 0, job: 0, event: 0, member: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        business: Math.floor(businessCount * progress),
        job: Math.floor(jobCount * progress),
        event: Math.floor(eventCount * progress),
        member: Math.floor(memberCount * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts({ business: businessCount, job: jobCount, event: eventCount, member: memberCount });
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, businessCount, jobCount, eventCount, memberCount]);

  return (
    <div 
      ref={ref}
      style={{
        background: 'linear-gradient(135deg, #0066b3 0%, #0ea5e9 100%)',
        padding: 'clamp(30px, 6vw, 50px) 20px',
        marginBottom: 40
      }}
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(20px, 4vw, 40px)',
          textAlign: 'center'
        }}>
          {/* Businesses */}
          <div>
            <div style={{
              fontSize: 'clamp(2.5em, 6vw, 4em)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1,
              marginBottom: 8
            }}>
              {counts.business.toLocaleString()}
            </div>
            <div style={{
              fontSize: 'clamp(0.95em, 2vw, 1.1em)',
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              🏢 Businesses Listed
            </div>
          </div>

          {/* Jobs */}
          <div>
            <div style={{
              fontSize: 'clamp(2.5em, 6vw, 4em)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1,
              marginBottom: 8
            }}>
              {counts.job.toLocaleString()}
            </div>
            <div style={{
              fontSize: 'clamp(0.95em, 2vw, 1.1em)',
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              💼 Jobs Available
            </div>
          </div>

          {/* Events */}
          <div>
            <div style={{
              fontSize: 'clamp(2.5em, 6vw, 4em)',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1,
              marginBottom: 8
            }}>
              {counts.event.toLocaleString()}
            </div>
            <div style={{
              fontSize: 'clamp(0.95em, 2vw, 1.1em)',
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              🎉 Upcoming Events
            </div>
          </div>

          {/* Members */}
          {memberCount > 0 && (
            <div>
              <div style={{
                fontSize: 'clamp(2.5em, 6vw, 4em)',
                fontWeight: 800,
                color: 'white',
                lineHeight: 1,
                marginBottom: 8
              }}>
                {counts.member.toLocaleString()}+
              </div>
              <div style={{
                fontSize: 'clamp(0.95em, 2vw, 1.1em)',
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                👥 Community Members
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
