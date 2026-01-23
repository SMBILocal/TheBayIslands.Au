import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { z } from 'zod';

const CreateCommentSchema = z.object({
  contentId: z.string().uuid('Invalid content ID'),
  contentType: z.enum(['article', 'event', 'business', 'job', 'classified', 'comment']),
  text: z.string().min(1, 'Comment cannot be empty').max(2000, 'Comment too long'),
  parentCommentId: z.string().uuid().optional(),
});

const GetCommentsSchema = z.object({
  contentId: z.string().uuid('Invalid content ID'),
  contentType: z.enum(['article', 'event', 'business', 'job', 'classified']),
  page: z.string().default('1').transform(Number),
  limit: z.string().default('20').transform(Number),
});

const AddReactionSchema = z.object({
  commentId: z.string().uuid('Invalid comment ID'),
  reactionType: z.enum(['like', 'love', 'helpful', 'unhelpful']),
});

/**
 * GET /api/comments?contentId=...&contentType=...&page=1&limit=20
 * Get all comments for a piece of content
 */
export async function GET(request: Request) {
  try {
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          },
        },
      }
    );
    const { searchParams } = new URL(request.url);

    // Validate query params
    const validated = GetCommentsSchema.parse({
      contentId: searchParams.get('contentId'),
      contentType: searchParams.get('contentType'),
      page: searchParams.get('page') || '1',
      limit: searchParams.get('limit') || '20',
    });

    // Validate limit
    if (validated.limit > 100) validated.limit = 100;

    const offset = (validated.page - 1) * validated.limit;

    // Get comments
    let query = supabase
      .from('comments')
      .select(
        `
        id,
        user_id,
        text,
        status,
        created_at,
        updated_at,
        users:user_id (
          id,
          display_name,
          avatar_url,
          user_role
        ),
        comment_reactions (
          id,
          user_id,
          reaction_type
        )
      `
      )
      .eq('content_id', validated.contentId)
      .eq('content_type', validated.contentType)
      .eq('status', 'active')
      .order('created_at', { ascending: false })
      .range(offset, offset + validated.limit - 1);

    const { data: comments, error, count } = await query;

    if (error) {
      throw error;
    }

    // Get total count
    const { count: totalCount } = await supabase
      .from('comments')
      .select('id', { count: 'exact', head: true })
      .eq('content_id', validated.contentId)
      .eq('content_type', validated.contentType)
      .eq('status', 'active');

    return NextResponse.json({
      data: comments || [],
      pagination: {
        page: validated.page,
        limit: validated.limit,
        total: totalCount || 0,
        pages: Math.ceil((totalCount || 0) / validated.limit),
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      );
    }

    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/comments
 * Create a new comment
 */
export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          },
        },
      }
    );

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

    // Parse request body
    const body = await request.json();
    const validated = CreateCommentSchema.parse(body);

    // Create comment
    const { data: newComment, error: insertError } = await supabase
      .from('comments')
      .insert({
        user_id: user.id,
        content_id: validated.contentId,
        content_type: validated.contentType,
        text: validated.text,
        status: 'active',
      })
      .select();

    if (insertError) {
      throw insertError;
    }

    // If parent comment specified, create thread record
    if (validated.parentCommentId && newComment) {
      await supabase.from('comment_threads').insert({
        parent_comment_id: validated.parentCommentId,
        reply_comment_id: newComment[0].id,
      });
    }

    return NextResponse.json(
      {
        success: true,
        comment: newComment?.[0],
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      );
    }

    console.error('Error creating comment:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/comments/[id]
 * Update a comment
 */
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          },
        },
      }
    );

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

    const body = await request.json();

    // Verify user owns comment or is admin
    const { data: comment } = await supabase
      .from('comments')
      .select('user_id')
      .eq('id', params.id)
      .single();

    if (!comment) {
      return NextResponse.json(
        { error: 'Comment not found' },
        { status: 404 }
      );
    }

    if (comment.user_id !== user.id) {
      return NextResponse.json(
        { error: 'Forbidden - not comment author' },
        { status: 403 }
      );
    }

    // Update comment
    const { data: updated, error } = await supabase
      .from('comments')
      .update({
        text: body.text,
        updated_at: new Date().toISOString(),
      })
      .eq('id', params.id)
      .select();

    if (error) {
      throw error;
    }

    return NextResponse.json({ data: updated?.[0] });
  } catch (error) {
    console.error('Error updating comment:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/comments/[id]
 * Delete a comment
 */
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          },
        },
      }
    );

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

    // Verify user owns comment or is admin
    const { data: comment } = await supabase
      .from('comments')
      .select('user_id')
      .eq('id', params.id)
      .single();

    if (!comment) {
      return NextResponse.json(
        { error: 'Comment not found' },
        { status: 404 }
      );
    }

    if (comment.user_id !== user.id) {
      // Check if user is admin
      const { data: userData } = await supabase
        .from('users')
        .select('user_role')
        .eq('id', user.id)
        .single();

      if (!['super_admin', 'admin', 'moderator'].includes(userData?.user_role)) {
        return NextResponse.json(
          { error: 'Forbidden - not comment author or moderator' },
          { status: 403 }
        );
      }
    }

    // Soft delete
    const { error } = await supabase
      .from('comments')
      .update({ status: 'deleted' })
      .eq('id', params.id);

    if (error) {
      throw error;
    }

    return NextResponse.json({ success: true }, { status: 204 });
  } catch (error) {
    console.error('Error deleting comment:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
