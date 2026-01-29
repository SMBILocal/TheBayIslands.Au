# FIX PROFILE PAGE & ADD COMMENTS SYSTEM

## Issue
1. **Profile page not loading** - The `users` table doesn't exist in Supabase
2. **No comments system** - Need to create comments table and component
3. **Need dummy data** - Super admin needs comments, listings, and articles

## Solution

### Step 1: Apply Database Schema

**IMPORTANT: You must run this SQL in Supabase SQL Editor**

1. Go to your Supabase dashboard: https://jazreuartewyrmbfhtdz.supabase.co
2. Click **SQL Editor** in the left sidebar
3. Click **New Query**
4. Copy and paste the contents of:
   - **First**: `supabase/migrations/fix-profile-and-comments.sql`
   - Click **Run** or press `Ctrl+Enter`
   - Wait for success message
5. Create another **New Query**
6. Copy and paste the contents of:
   - **Second**: `supabase/migrations/assign-content-to-super-admin.sql`
   - Click **Run** or press `Ctrl+Enter`

#### What these scripts do:

**fix-profile-and-comments.sql**:
- ✅ Create the `users` table
- ✅ Create a trigger to sync `auth.users` → `public.users`
- ✅ Sync all existing auth users to the users table
- ✅ Update super admin username to "SMBI Local - The Bay Islands .Au"
- ✅ Create the `comments` table with parent_id for threaded replies
- ✅ Add Row Level Security policies
- ✅ Insert 7 dummy comments for the super admin user

**assign-content-to-super-admin.sql**:
- ✅ Assign 5 existing articles to super admin (if they exist)
- ✅ Assign 3 existing directory listings to super admin (mark as featured)
- ✅ Assign 2 existing job postings to super admin
- ✅ Assign 2 existing events to super admin
- ✅ Assign 2 existing classifieds to super admin
- ✅ Update dummy comments to reference real content IDs
- ✅ Show verification summary of content ownership

### Step 2: Verify the Setup

After running **both** SQL scripts, check the verification output. You should see:

**From fix-profile-and-comments.sql**:
```
Users Count: 6
Super Admin User: SMBI Local - The Bay Islands .Au
Comments Count: 7
Super Admin Comments: 7
```

**From assign-content-to-super-admin.sql**:
```
Super Admin Content Summary
----------------------------
Articles: 5
Directory Listings: 3
Jobs: 2
Events: 2
Classifieds: 2
Comments: 7
```

> **Note**: The numbers above will vary depending on how much existing content you have in your database. If you don't have any content yet, those counts will be 0 (except Comments which will be 7).

### Step 3: Use the Comments Component

The Comments component is now available at `/components/Comments.tsx`.

#### How to add comments to a page:

```tsx
import Comments from '@/components/Comments';

export default function ArticlePage({ params }: { params: { id: string } }) {
  return (
    <div>
      {/* Your article content */}
      
      {/* Add comments at the bottom */}
      <Comments 
        contentType="article" 
        contentId={params.id}
        allowRating={false}  // Set to true for directory/reviews
      />
    </div>
  );
}
```

#### Content Types:
- `'article'` - For news articles
- `'directory'` - For business listings (use `allowRating={true}`)
- `'job'` - For job postings
- `'event'` - For events
- `'classified'` - For classified ads

### Step 4: Add Comments to Pages

Here are the pages that need comments (everywhere except homepage):

#### Articles
File: `app/articles/[slug]/page.tsx`
```tsx
<Comments contentType="article" contentId={article.id} />
```

#### Directory Listings
File: `app/directory/[slug]/page.tsx`
```tsx
<Comments contentType="directory" contentId={listing.id} allowRating={true} />
```

#### Job Postings
File: `app/jobs/[id]/page.tsx`
```tsx
<Comments contentType="job" contentId={job.id} />
```

#### Events
File: `app/events/[id]/page.tsx`
```tsx
<Comments contentType="event" contentId={event.id} />
```

#### Classifieds
File: `app/classifieds/[id]/page.tsx`
```tsx
<Comments contentType="classified" contentId={classified.id} />
```

## Features

### Comments Component Features:
- ✅ Threaded replies (reply to comments)
- ✅ User avatars or initials
- ✅ Time ago formatting (e.g., "2h ago")
- ✅ Optional star ratings (1-5 stars)
- ✅ Login required to comment
- ✅ Real-time comment count
- ✅ Edit and delete own comments
- ✅ Responsive design

### Database Features:
- ✅ Row Level Security (users can only edit their own comments)
- ✅ Cascade delete (delete user → delete their comments)
- ✅ Status field (active, pending, deleted, flagged) for moderation
- ✅ Indexes for fast queries
- ✅ Foreign key constraints

## Next Steps: Content Now Assigned!

The `assign-content-to-super-admin.sql` script has already done this for you! It:

1. ✅ **Assigned existing articles** to super admin (up to 5 most recent published articles)
2. ✅ **Assigned directory listings** to super admin (up to 3 most recent, marked as featured for 30 days)
3. ✅ **Assigned job postings** to super admin (up to 2 most recent active jobs)
4. ✅ **Assigned events** to super admin (up to 2 upcoming events)
5. ✅ **Assigned classifieds** to super admin (up to 2 most recent active classifieds)
6. ✅ **Updated comments** to reference real content IDs instead of random UUIDs

### If you need to manually assign more content:

```sql
-- Assign a specific article to super admin
UPDATE public.articles 
SET user_id = 'fd3284e3-ff1c-4b33-a1bf-921267fc6fbe'
WHERE id = 'YOUR-ARTICLE-ID-HERE';

-- Assign a specific directory listing to super admin
UPDATE public.directory_listings 
SET user_id = 'fd3284e3-ff1c-4b33-a1bf-921267fc6fbe',
    featured = true,
    featured_until = NOW() + interval '30 days'
WHERE id = 'YOUR-LISTING-ID-HERE';
```

### Create new content as super admin:

Simply login as `smbilocal@gmail.com` and use the admin dashboard to create new:
- Articles
- Directory listings
- Job postings
- Events
- Classifieds

All new content will automatically belong to the logged-in user (super admin).

## Testing

1. **Test Profile Page**: 
   - Login as `smbilocal@gmail.com` / `SuperAdmin123!@#`
   - Go to `/dashboard/profile`
   - You should see the profile page with username "SMBI Local - The Bay Islands .Au"
   - Edit your bio and save

2. **Test Comments**:
   - Go to any article/listing page
   - You should see the 7 dummy comments from "SMBI Local - The Bay Islands .Au"
   - Try posting a new comment
   - Try replying to a comment

## Troubleshooting

### Profile page still not loading?
- Check browser console for errors
- Verify the users table exists: `SELECT * FROM public.users LIMIT 1;`
- Check if your user exists: `SELECT * FROM public.users WHERE email = 'smbilocal@gmail.com';`

### Comments not showing?
- Check browser console for errors
- Verify comments table exists: `SELECT * FROM public.comments LIMIT 1;`
- Check RLS policies are enabled
- Make sure you're using the correct `content_id` (must be a valid UUID)

### Can't post comments?
- Make sure you're logged in
- Check that the user exists in `public.users` table (not just auth.users)
- Verify RLS policy allows inserts
