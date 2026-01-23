'use client';

import React, { useEffect, useState } from 'react';
import RatingStars from './RatingStars';

interface Review {
  id: string;
  rating: number;
  review_text: string | null;
  created_at: string;
  helpful_count: number;
  user_id: string;
  users: {
    user_metadata: {
      full_name?: string;
    };
  };
}

interface ReviewListProps {
  listingId: string;
  refreshTrigger?: number;
}

export default function ReviewList({ listingId, refreshTrigger }: ReviewListProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    fetchReviews();
  }, [listingId, refreshTrigger]);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/ratings?listing_id=${listingId}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch reviews');
      }

      setReviews(data.data || []);
      
      if (data.data && data.data.length > 0) {
        const avg = data.data.reduce((sum: number, r: Review) => sum + r.rating, 0) / data.data.length;
        setAverageRating(avg);
      } else {
        setAverageRating(0);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch reviews');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return (
      <div style={{ padding: 24, textAlign: 'center', color: '#64748b' }}>
        Loading reviews...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: 24, textAlign: 'center', color: '#dc2626' }}>
        {error}
      </div>
    );
  }

  return (
    <div>
      {reviews.length > 0 && (
        <div style={{ marginBottom: 32, padding: 24, background: '#f8fafc', borderRadius: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div>
              <div style={{ fontSize: 48, fontWeight: 700, color: '#0f172a' }}>
                {averageRating.toFixed(1)}
              </div>
              <RatingStars rating={averageRating} size="lg" />
            </div>
            <div>
              <div style={{ fontSize: 14, color: '#64748b' }}>
                Based on {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}
              </div>
            </div>
          </div>
        </div>
      )}

      {reviews.length === 0 ? (
        <div style={{ padding: 40, textAlign: 'center', background: '#f8fafc', borderRadius: 12 }}>
          <p style={{ fontSize: 16, color: '#64748b', margin: 0 }}>
            No reviews yet. Be the first to review this business!
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {reviews.map((review) => (
            <div
              key={review.id}
              style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: 12,
                padding: 20,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#0f172a', marginBottom: 4 }}>
                    {review.users?.user_metadata?.full_name || 'Anonymous User'}
                  </div>
                  <RatingStars rating={review.rating} size="sm" />
                </div>
                <div style={{ fontSize: 12, color: '#64748b' }}>
                  {formatDate(review.created_at)}
                </div>
              </div>
              {review.review_text && (
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  {review.review_text}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
