'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface ReviewFormProps {
  listingId: string;
  listingName: string;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function ReviewForm({ listingId, listingName, onSuccess, onCancel }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      setError('Please select a rating');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        setError('You must be logged in to submit a review');
        setLoading(false);
        return;
      }

      const response = await fetch('/api/ratings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          listing_id: listingId,
          rating,
          review_text: reviewText.trim() || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit review');
      }

      if (onSuccess) onSuccess();
    } catch (err: any) {
      setError(err.message || 'Failed to submit review');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: 'white', borderRadius: 12, padding: 32, maxWidth: 600 }}>
      <h3 style={{ fontSize: 24, fontWeight: 700, color: '#0f172a', marginTop: 0, marginBottom: 8 }}>
        Write a Review
      </h3>
      <p style={{ fontSize: 14, color: '#64748b', marginBottom: 24 }}>
        Share your experience with {listingName}
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 24 }}>
          <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#0f172a', marginBottom: 8 }}>
            Your Rating *
          </label>
          <div style={{ display: 'flex', gap: 8 }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 32,
                  color: star <= (hoverRating || rating) ? '#fbbf24' : '#e5e7eb',
                  padding: 0,
                  transition: 'color 0.2s',
                }}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={{ display: 'block', fontSize: 14, fontWeight: 600, color: '#0f172a', marginBottom: 8 }}>
            Your Review (Optional)
          </label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Share details about your experience..."
            style={{
              width: '100%',
              minHeight: 120,
              padding: 12,
              border: '1px solid #e2e8f0',
              borderRadius: 8,
              fontSize: 14,
              fontFamily: 'inherit',
              resize: 'vertical',
              boxSizing: 'border-box',
            }}
          />
          <p style={{ fontSize: 12, color: '#64748b', marginTop: 8 }}>
            Your review will be visible after moderation approval.
          </p>
        </div>

        {error && (
          <div style={{ padding: 12, background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, marginBottom: 16 }}>
            <p style={{ color: '#dc2626', fontSize: 14, margin: 0 }}>{error}</p>
          </div>
        )}

        <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              disabled={loading}
              style={{
                padding: '12px 24px',
                background: 'white',
                color: '#64748b',
                border: '1px solid #e2e8f0',
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.6 : 1,
              }}
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            disabled={loading || rating === 0}
            style={{
              padding: '12px 24px',
              background: rating === 0 || loading ? '#cbd5e1' : '#0ea5e9',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: rating === 0 || loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Submitting...' : 'Submit Review'}
          </button>
        </div>
      </form>
    </div>
  );
}
