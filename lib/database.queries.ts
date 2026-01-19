import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export interface SearchFilters {
  location?: string;
  category?: string;
  search?: string;
  page?: number;
  limit?: number;
  featured?: boolean;
  sortBy?: 'recent' | 'featured' | 'popular';
}

export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

// Directory listings search
export async function searchDirectory(filters: SearchFilters & { subcategory?: string }) {
  const { page = 1, limit = 20, sortBy = 'recent' } = filters;

  let query = supabase
    .from('directory_listings')
    .select('*', { count: 'exact' })
    .eq('status', 'active');

  if (filters.location) query = query.eq('location', filters.location);
  if (filters.category) query = query.eq('category', filters.category);
  if (filters.subcategory) query = query.eq('subcategory', filters.subcategory);
  if (filters.featured) query = query.eq('featured', true);

  if (filters.search) {
    query = query.textSearch('search_text', filters.search);
  }

  // Sorting
  switch (sortBy) {
    case 'featured':
      query = query.order('featured', { ascending: false }).order('created_at', { ascending: false });
      break;
    case 'popular':
      query = query.order('views', { ascending: false });
      break;
    default:
      query = query.order('created_at', { ascending: false });
  }

  query = query.range((page - 1) * limit, page * limit - 1);

  const { data, count, error } = await query;

  if (error) throw error;

  return {
    data,
    pagination: {
      page,
      limit,
      total: count,
      pages: Math.ceil((count || 0) / limit),
    },
  };
}

// Jobs search
export async function searchJobs(filters: SearchFilters & { employmentType?: string; salaryMin?: number; salaryMax?: number }) {
  const { page = 1, limit = 20, sortBy = 'recent' } = filters;

  let query = supabase
    .from('jobs')
    .select('*', { count: 'exact' })
    .eq('status', 'active')
    .gt('expires_at', new Date().toISOString());

  if (filters.location) query = query.eq('location', filters.location);
  if (filters.category) query = query.eq('category', filters.category);
  if (filters.employmentType) query = query.eq('employment_type', filters.employmentType);
  if (filters.featured) query = query.eq('featured', true);
  if (filters.salaryMin) query = query.gte('salary_max', filters.salaryMin);
  if (filters.salaryMax) query = query.lte('salary_min', filters.salaryMax);

  if (filters.search) {
    query = query.textSearch('search_text', filters.search);
  }

  // Sorting
  switch (sortBy) {
    case 'featured':
      query = query.order('featured', { ascending: false }).order('created_at', { ascending: false });
      break;
    case 'popular':
      query = query.order('views', { ascending: false });
      break;
    default:
      query = query.order('created_at', { ascending: false });
  }

  query = query.range((page - 1) * limit, page * limit - 1);

  const { data, count, error } = await query;

  if (error) throw error;

  return {
    data,
    pagination: {
      page,
      limit,
      total: count,
      pages: Math.ceil((count || 0) / limit),
    },
  };
}

// Events search
export async function searchEvents(filters: SearchFilters & { startDate?: string; endDate?: string }) {
  const { page = 1, limit = 20, sortBy = 'recent' } = filters;

  let query = supabase
    .from('events')
    .select('*', { count: 'exact' })
    .neq('status', 'deleted');

  if (filters.location) query = query.eq('location', filters.location);
  if (filters.category) query = query.eq('category', filters.category);
  if (filters.featured) query = query.eq('featured', true);
  if (filters.startDate) query = query.gte('start_date', filters.startDate);
  if (filters.endDate) query = query.lte('end_date', filters.endDate);

  if (filters.search) {
    query = query.textSearch('search_text', filters.search);
  }

  // Sorting
  switch (sortBy) {
    case 'featured':
      query = query.order('featured', { ascending: false }).order('start_date', { ascending: true });
      break;
    case 'popular':
      query = query.order('views', { ascending: false });
      break;
    default:
      query = query.order('start_date', { ascending: true });
  }

  query = query.range((page - 1) * limit, page * limit - 1);

  const { data, count, error } = await query;

  if (error) throw error;

  return {
    data,
    pagination: {
      page,
      limit,
      total: count,
      pages: Math.ceil((count || 0) / limit),
    },
  };
}

// Classifieds search
export async function searchClassifieds(filters: SearchFilters & { minPrice?: number; maxPrice?: number; condition?: string; subcategory?: string }) {
  const { page = 1, limit = 20, sortBy = 'recent' } = filters;

  let query = supabase
    .from('classifieds')
    .select('*', { count: 'exact' })
    .eq('status', 'active')
    .gt('expires_at', new Date().toISOString());

  if (filters.location) query = query.eq('location', filters.location);
  if (filters.category) query = query.eq('category', filters.category);
  if (filters.subcategory) query = query.eq('subcategory', filters.subcategory);
  if (filters.condition) query = query.eq('condition', filters.condition);
  if (filters.featured) query = query.eq('featured', true);
  if (filters.minPrice) query = query.gte('price', filters.minPrice);
  if (filters.maxPrice) query = query.lte('price', filters.maxPrice);

  if (filters.search) {
    query = query.textSearch('search_text', filters.search);
  }

  // Sorting
  switch (sortBy) {
    case 'featured':
      query = query.order('featured', { ascending: false }).order('created_at', { ascending: false });
      break;
    case 'popular':
      query = query.order('views', { ascending: false });
      break;
    default:
      query = query.order('created_at', { ascending: false });
  }

  query = query.range((page - 1) * limit, page * limit - 1);

  const { data, count, error } = await query;

  if (error) throw error;

  return {
    data,
    pagination: {
      page,
      limit,
      total: count,
      pages: Math.ceil((count || 0) / limit),
    },
  };
}

// Get single listing by ID
export async function getListingById(type: 'directory' | 'job' | 'event' | 'classified', id: string) {
  const { data, error } = await supabase
    .from(`${type === 'directory' ? 'directory_listings' : type === 'job' ? 'jobs' : type === 'event' ? 'events' : 'classifieds'}`)
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;

  // Increment views
  await supabase
    .from(`${type === 'directory' ? 'directory_listings' : type === 'job' ? 'jobs' : type === 'event' ? 'events' : 'classifieds'}`)
    .update({ views: (data?.views || 0) + 1 })
    .eq('id', id);

  return data;
}

// Get user's listings
export async function getUserListings(userId: string, type: 'directory' | 'job' | 'event' | 'classified') {
  const { data, error } = await supabase
    .from(`${type === 'directory' ? 'directory_listings' : type === 'job' ? 'jobs' : type === 'event' ? 'events' : 'classifieds'}`)
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;

  return data;
}
