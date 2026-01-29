'use client';

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useAuth } from '@/lib/AuthContext';

interface Comment {
  id: string;
  user_id: string;
  content: string;
  rating?: number;
  created_at: string;
  updated_at: string;
  parent_id?: string | null;
  users: {
    username: string;
    avatar_url?: string;
  };
  replies?: Comment[];
}

interface CommentsProps {
  contentType: 'article' | 'directory' | 'job' | 'event' | 'classified';
  contentId: string;
  allowRating?: boolean;
}

export default function Comments({ contentType, contentId, allowRating = false }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  
  const { user } = useAuth();
  const supabase = createClientComponentClient();

  useEffect(() => {
    fetchComments();
  }, [contentId, contentType]);

  async function fetchComments() {
    setLoading(true);
    const { data, error } = await supabase
      .from('comments')
      .select(`
        *,
        users (
          username,
          avatar_url
        )
      `)
      .eq('content_type', contentType)
      .eq('content_id', contentId)
      .eq('status', 'active')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching comments:', error);
    } else {
      // Organize comments with replies
      const commentsMap = new Map();
      const rootComments: Comment[] = [];

      data?.forEach((comment: any) => {
        commentsMap.set(comment.id, { ...comment, replies: [] });
      });

      commentsMap.forEach((comment) => {
        if (comment.parent_id) {
          const parent = commentsMap.get(comment.parent_id);
          if (parent) {
            parent.replies.push(comment);
          }
        } else {
          rootComments.push(comment);
        }
      });

      setComments(rootComments);
    }
    setLoading(false);
  }

  async function handleSubmitComment(e: React.FormEvent) {
    e.preventDefault();
    if (!user || !newComment.trim()) return;

    setSubmitting(true);
    const { error } = await supabase
      .from('comments')
      .insert({
        user_id: user.id,
        content_type: contentType,
        content_id: contentId,
        content: newComment.trim(),
        rating: allowRating && newRating > 0 ? newRating : null,
        status: 'active'
      });

    if (error) {
      console.error('Error posting comment:', error);
      alert('Failed to post comment. Please try again.');
    } else {
      setNewComment('');
      setNewRating(0);
      fetchComments();
    }
    setSubmitting(false);
  }

  async function handleSubmitReply(parentId: string) {
    if (!user || !replyContent.trim()) return;

    setSubmitting(true);
    const { error } = await supabase
      .from('comments')
      .insert({
        user_id: user.id,
        content_type: contentType,
        content_id: contentId,
        content: replyContent.trim(),
        parent_id: parentId,
        status: 'active'
      });

    if (error) {
      console.error('Error posting reply:', error);
      alert('Failed to post reply. Please try again.');
    } else {
      setReplyContent('');
      setReplyTo(null);
      fetchComments();
    }
    setSubmitting(false);
  }

  function RatingStars({ rating, interactive = false, onChange }: { rating: number; interactive?: boolean; onChange?: (rating: number) => void }) {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            disabled={!interactive}
            onClick={() => interactive && onChange?.(star)}
            className={`text-2xl ${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'} ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            ★
          </button>
        ))}
      </div>
    );
  }

  function CommentItem({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) {
    const commentDate = new Date(comment.created_at);
    const timeAgo = getTimeAgo(commentDate);

    return (
      <div className={`${isReply ? 'ml-12 mt-4' : 'mt-6'}`}>
        <div className="flex gap-3">
          <div className="flex-shrink-0">
            {comment.users.avatar_url ? (
              <img src={comment.users.avatar_url} alt={comment.users.username} className="w-10 h-10 rounded-full" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                {comment.users.username?.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <span className="font-semibold text-gray-900">{comment.users.username}</span>
                  <span className="text-sm text-gray-500 ml-2">{timeAgo}</span>
                </div>
                {comment.rating && (
                  <RatingStars rating={comment.rating} />
                )}
              </div>
              <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>
            </div>
            
            {!isReply && user && (
              <button
                onClick={() => setReplyTo(comment.id)}
                className="text-sm text-blue-600 hover:text-blue-800 mt-2"
              >
                Reply
              </button>
            )}

            {/* Reply form */}
            {replyTo === comment.id && (
              <form onSubmit={(e) => { e.preventDefault(); handleSubmitReply(comment.id); }} className="mt-3">
                <textarea
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  placeholder="Write a reply..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                />
                <div className="flex gap-2 mt-2">
                  <button
                    type="submit"
                    disabled={submitting || !replyContent.trim()}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Posting...' : 'Post Reply'}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setReplyTo(null); setReplyContent(''); }}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {/* Render replies */}
            {comment.replies && comment.replies.length > 0 && (
              <div className="mt-4">
                {comment.replies.map((reply) => (
                  <CommentItem key={reply.id} comment={reply} isReply={true} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  function getTimeAgo(date: Date): string {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    
    if (seconds < 60) return 'just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;
    return date.toLocaleDateString();
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">
        Comments ({comments.reduce((acc, c) => acc + 1 + (c.replies?.length || 0), 0)})
      </h2>

      {/* Comment form */}
      {user ? (
        <form onSubmit={handleSubmitComment} className="mb-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your thoughts..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
          />
          
          {allowRating && (
            <div className="mt-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Rating (optional)</label>
              <RatingStars rating={newRating} interactive onChange={setNewRating} />
            </div>
          )}

          <button
            type="submit"
            disabled={submitting || !newComment.trim()}
            className="mt-3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? 'Posting...' : 'Post Comment'}
          </button>
        </form>
      ) : (
        <div className="mb-8 p-4 bg-gray-50 rounded-lg text-center">
          <p className="text-gray-600">
            <a href="/login" className="text-blue-600 hover:underline">Sign in</a> to leave a comment
          </p>
        </div>
      )}

      {/* Comments list */}
      {loading ? (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : comments.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No comments yet. Be the first to share your thoughts!</p>
      ) : (
        <div className="space-y-6">
          {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
}
