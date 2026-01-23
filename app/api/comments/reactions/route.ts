import { NextResponse } from 'next/server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { z } from 'zod';

const ReactionSchema = z.object({
  commentId: z.string().uuid('Invalid comment ID'),
  reactionType: z.enum(['like', 'love', 'helpful', 'unhelpful']),
});

/**
 * POST /api/comments/reactions
 * Add or remove a reaction to a comment
 */
export async function POST(request: Request) {
  try {
    const supabase = createServerComponentClient({ cookies });

    // Verify auth
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Parse and validate
    const body = await request.json();
    const validated = ReactionSchema.parse(body);

    // Check if reaction already exists
    const { data: existingReaction } = await supabase
      .from('comment_reactions')
      .select('id')
      .eq('comment_id', validated.commentId)
      .eq('user_id', user.id)
      .eq('reaction_type', validated.reactionType)
      .single();

    if (existingReaction) {
      // Remove reaction (toggle off)
      const { error } = await supabase
        .from('comment_reactions')
        .delete()
        .eq('id', existingReaction.id);

      if (error) throw error;

      return NextResponse.json({
        success: true,
        action: 'removed',
      });
    } else {
      // Add reaction
      const { error } = await supabase.from('comment_reactions').insert({
        comment_id: validated.commentId,
        user_id: user.id,
        reaction_type: validated.reactionType,
      });

      if (error) throw error;

      return NextResponse.json(
        {
          success: true,
          action: 'added',
        },
        { status: 201 }
      );
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Error managing reaction:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/comments/reactions?commentId=...
 * Get all reactions for a comment
 */
export async function GET(request: Request) {
  try {
    const supabase = createServerComponentClient({ cookies });
    const { searchParams } = new URL(request.url);

    const commentId = searchParams.get('commentId');

    if (!commentId) {
      return NextResponse.json(
        { error: 'commentId required' },
        { status: 400 }
      );
    }

    // Get reaction counts by type
    const { data: reactions, error } = await supabase
      .from('comment_reactions')
      .select('reaction_type, user_id')
      .eq('comment_id', commentId);

    if (error) throw error;

    // Group by reaction type
    const grouped = {
      like: 0,
      love: 0,
      helpful: 0,
      unhelpful: 0,
    };

    reactions?.forEach((r: any) => {
      grouped[r.reaction_type]++;
    });

    return NextResponse.json({
      commentId,
      reactions: grouped,
      total: reactions?.length || 0,
    });
  } catch (error) {
    console.error('Error fetching reactions:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
