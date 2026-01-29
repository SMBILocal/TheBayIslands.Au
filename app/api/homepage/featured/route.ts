import { NextRequest, NextResponse } from 'next/server';
import supabase from '@/lib/supabaseAdmin';

export async function GET(request: NextRequest) {
  try {
    // Fetch premium featured businesses (limit 10 for main + sub carousel)
    const { data: allFeaturedBusinesses, error: bizError } = await supabase
      .from('directory_listings')
      .select('*')
      .eq('status', 'active')
      .eq('featured', true)
      .order('premium_tier', { ascending: false })
      .order('created_at', { ascending: false })
      .limit(10);

    if (bizError) throw bizError;

    // Split into main featured (top 4) and sub-featured (remaining)
    const featuredBusinesses = allFeaturedBusinesses?.slice(0, 4) || [];
    const subFeaturedBusinesses = allFeaturedBusinesses?.slice(4) || [];

    // Fetch featured articles (limit 4)
    const { data: featuredArticles, error: articlesError } = await supabase
      .from('articles')
      .select('id, title, slug, excerpt, featured_image, author, published_at, category, status')
      .eq('status', 'published')
      .eq('featured', true)
      .order('published_at', { ascending: false })
      .limit(4);

    const articles = articlesError ? [] : featuredArticles;

    // Fetch featured upcoming events (limit 6)
    const now = new Date().toISOString();
    const { data: featuredEvents, error: eventsError } = await supabase
      .from('events')
      .select('*')
      .gte('event_date', now)
      .eq('status', 'active')
      .eq('featured', true)
      .order('event_date', { ascending: true })
      .limit(6);

    const events = eventsError ? [] : featuredEvents;

    // Fetch featured classifieds (limit 6)
    const { data: featuredClassifieds, error: classifiedsError } = await supabase
      .from('classifieds')
      .select('id, title, slug, price, category, location, images, featured, status')
      .eq('status', 'active')
      .eq('featured', true)
      .order('created_at', { ascending: false })
      .limit(6);

    const classifieds = classifiedsError ? [] : featuredClassifieds;

    // Fetch latest jobs (limit 4)
    const { data: latestJobs, error: jobsError } = await supabase
      .from('jobs')
      .select('*')
      .eq('status', 'active')
      .eq('featured', true)
      .order('created_at', { ascending: false })
      .limit(4);

    const jobs = jobsError ? [] : latestJobs;

    // Get site statistics
    const [businessCountResult, jobCountResult, eventCountResult, classifiedCountResult, userCountResult] = await Promise.all([
      supabase.from('directory_listings').select('id', { count: 'exact', head: true }).eq('status', 'active'),
      supabase.from('jobs').select('id', { count: 'exact', head: true }).eq('status', 'active'),
      supabase.from('events').select('id', { count: 'exact', head: true }).eq('status', 'active'),
      supabase.from('classifieds').select('id', { count: 'exact', head: true }).eq('status', 'active'),
      supabase.from('users').select('id', { count: 'exact', head: true })
    ]);

    const stats = {
      businesses: businessCountResult.count || 0,
      jobs: jobCountResult.count || 0,
      events: eventCountResult.count || 0,
      members: userCountResult.count || 0
    };

    return NextResponse.json({
      featuredBusinesses: featuredBusinesses || [],
      subFeaturedBusinesses: subFeaturedBusinesses || [],
      featuredArticles: articles || [],
      featuredEvents: events || [],
      featuredClassifieds: classifieds || [],
      stats
    });
  } catch (error: any) {
    console.error('Error fetching homepage data:', error);
    return NextResponse.json({
      success: false,
      error: {
        message: error.message || 'Failed to fetch homepage data',
        code: 'FETCH_ERROR'
      }
    }, { status: 500 });
  }
}
