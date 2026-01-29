# SMBI Local - Full Implementation Plan
## Phase 1: Critical Fixes (IMMEDIATE - TODAY)

### 1.1 Auth & Admin Access ✅ IN PROGRESS
- [x] Fix admin layout role detection (use app_metadata)
- [x] Fix middleware to check app_metadata roles  
- [x] Add console logging for debugging auth
- [ ] Test login → dashboard redirect
- [ ] Test admin access for all admin pages

### 1.2 Database Schema Refresh
**Problem**: Supabase PostgREST cache not showing tables created via SQL
**Solution**: 
1. Go to Supabase Dashboard → Database → Schema Refresh
2. Or run: `NOTIFY pgrst, 'reload schema'` in SQL Editor
3. Alternative: Use direct SQL migrations instead of REST API

### 1.3 Populate Sample Data
- [x] Create SQL migration for dummy data
- [ ] Run migration in Supabase SQL Editor
- [ ] Verify data appears in tables
- [ ] Test admin pages show data

### 1.4 Fix Homepage/Listings 404
**Issues**:
- `/api/homepage/featured/route.ts` queries tables that exist but aren't in cache
- Need to refresh schema or fix API routes

**Actions**:
1. Refresh Supabase schema cache
2. Test API route returns data
3. Fix any column mismatches

---

## Phase 2: User Dashboard & Interactions (NEXT)

### 2.1 Enhanced User Dashboard
**Location**: `/app/dashboard/page.tsx`

**Features Needed**:
- [ ] My Directory Listings (owned by user)
- [ ] My Classifieds
- [ ] My Events
- [ ] My Job Posts
- [ ] My Comments (all comments across site)
- [ ] My Reviews
- [ ] My Favorites/Bookmarks
- [ ] Activity Feed
- [ ] Subscription Status
- [ ] Quick Stats (total posts, comments, views)

**Implementation**:
```typescript
// Fetch user's content
const { data: myListings } = await supabase
  .from('directory_listings')
  .select('*')
  .eq('user_id', user.id);

const { data: myComments } = await supabase
  .from('comments')
  .select('*, content_type, content_id')
  .eq('user_id', user.id)
  .order('created_at', { descending: true });
```

### 2.2 Comments System
**Tables**: `comments` table exists

**Features**:
- [ ] Comment on articles
- [ ] Comment on directory listings  
- [ ] Comment on events
- [ ] Comment on classifieds
- [ ] Comment on jobs
- [ ] Reply to comments (threading)
- [ ] Moderation queue for comments
- [ ] User can see all their comments in dashboard

**Component**: Create `components/CommentSection.tsx`
```typescript
interface CommentSectionProps {
  contentType: 'article' | 'directory_listing' | 'event' | 'classified' | 'job';
  contentId: string;
}
```

### 2.3 Reviews System  
**Tables**: `reviews` table exists

**Features**:
- [ ] Star ratings (1-5)
- [ ] Review text
- [ ] Review photos
- [ ] Verified purchase/visit badges
- [ ] Helpful votes
- [ ] Response from business owner

---

## Phase 3: Admin Panel Completion (THIS WEEK)

### 3.1 Admin Dashboard Pages
All pages in `/app/admin/`:

**Main Dashboard** (`/admin/page.tsx`):
- [x] Basic structure exists
- [ ] Connect to real data
- [ ] Show pending approvals count
- [ ] Show reports count
- [ ] Recent activity feed

**Directory Moderation** (`/admin/directory/page.tsx`):
- [x] Basic structure exists
- [ ] Fix API route `/api/admin/moderation/pending`
- [ ] Show pending directory listings
- [ ] Approve/Reject buttons
- [ ] Bulk actions

**Articles Management** (NEEDS CREATION):
- [ ] Create `/app/admin/articles/page.tsx`
- [ ] List all articles
- [ ] Edit/Delete/Feature articles
- [ ] Category management

**Events Management** (NEEDS CREATION):
- [ ] Create `/app/admin/events/page.tsx`
- [ ] List all events
- [ ] Approve/Feature events

**Classifieds Management** (NEEDS CREATION):
- [ ] Create `/app/admin/classifieds/page.tsx`
- [ ] Moderate classifieds
- [ ] Flag inappropriate content

**Users Management** (NEEDS CREATION):
- [ ] Create `/app/admin/users/page.tsx`
- [ ] List all users with roles
- [ ] Change user roles
- [ ] Ban/Suspend users
- [ ] View user activity

**Comments Moderation** (NEEDS CREATION):
- [ ] Create `/app/admin/comments/page.tsx`
- [ ] Review flagged comments
- [ ] Approve/Delete comments
- [ ] Ban repeat offenders

### 3.2 API Routes for Admin
**Missing Routes to Create**:
```
/app/api/admin/
  ├── users/
  │   ├── list/route.ts
  │   ├── [userId]/role/route.ts
  │   └── [userId]/ban/route.ts
  ├── articles/
  │   ├── list/route.ts
  │   └── [articleId]/feature/route.ts
  ├── events/
  │   ├── list/route.ts
  │   └── [eventId]/approve/route.ts
  ├── classifieds/
  │   ├── list/route.ts
  │   └── [id]/moderate/route.ts
  └── comments/
      ├── flagged/route.ts
      └── [commentId]/moderate/route.ts
```

---

## Phase 4: Content Management (NEXT WEEK)

### 4.1 Article Publishing System
- [ ] Rich text editor (TinyMCE or similar)
- [ ] Featured image upload
- [ ] Category selection
- [ ] Tags
- [ ] SEO meta fields
- [ ] Schedule publishing
- [ ] Draft/Published status

### 4.2 Directory Listing Management
- [ ] Multi-step listing creation form
- [ ] Business hours selector
- [ ] Photo gallery upload
- [ ] Map integration (Google Maps)
- [ ] Category/subcategory selection
- [ ] Premium tier upsell

### 4.3 Events Calendar
- [ ] Calendar view component
- [ ] Recurring events
- [ ] RSVP functionality
- [ ] Event reminders
- [ ] iCal export

### 4.4 Classifieds
- [ ] Image upload (multiple)
- [ ] Price/negotiable options
- [ ] Contact privacy options
- [ ] Expiry dates
- [ ] Renewal system

---

## Phase 5: User Features (ONGOING)

### 5.1 Favorites/Bookmarks
- [ ] Save articles
- [ ] Save listings
- [ ] Save events
- [ ] View saved items in dashboard

### 5.2 Notifications
- [ ] Email notifications
- [ ] In-app notifications
- [ ] Notification preferences
- [ ] Daily/weekly digest

### 5.3 User Profiles
- [ ] Public profile pages
- [ ] Avatar upload
- [ ] Bio/about section
- [ ] Social links
- [ ] Activity history (public posts/comments)

---

## Phase 6: Premium Features (SUBSCRIPTION)

### 6.1 Premium Listings
- [ ] Featured placement
- [ ] Extra photos
- [ ] Video embedding
- [ ] Priority support
- [ ] Analytics dashboard

### 6.2 Subscription Management
- [ ] Stripe integration complete
- [ ] Billing portal
- [ ] Invoice history
- [ ] Plan upgrades/downgrades
- [ ] Cancellation handling

---

## Technical Debt & Improvements

### Database
- [ ] Add full-text search indices
- [ ] Add composite indices for common queries
- [ ] Set up database backups
- [ ] RLS policies review
- [ ] Performance optimization

### Frontend
- [ ] Add loading skeletons
- [ ] Error boundaries
- [ ] Toast notifications
- [ ] Form validation
- [ ] Accessibility audit
- [ ] Mobile responsive check

### SEO
- [ ] Dynamic meta tags
- [ ] Structured data (Schema.org)
- [ ] XML sitemap
- [ ] robots.txt optimization
- [ ] Social sharing cards

---

## Current Status Summary

### ✅ WORKING
- User authentication (login/signup)
- Role-based access (super_admin, administrator, moderator, editor, user)
- Subscription tiers (8 plans)
- Basic admin layout
- Middleware protection
- TopAuthBar with UserMenu

### ⚠️ IN PROGRESS  
- Admin page access (role detection fixed, testing needed)
- Database population (SQL migration created)
- Dashboard redirect after login

### ❌ NOT WORKING / MISSING
- Homepage data loading (schema cache issue)
- Admin pages showing data (no dummy data yet)
- User dashboard features (minimal functionality)
- Comments system (UI not implemented)
- Reviews system (UI not implemented)
- User activity tracking
- Content management forms
- Image upload functionality
- Search functionality

---

## IMMEDIATE ACTION ITEMS (TODAY)

1. **Test Login Flow**
   - Login as smbilocal@gmail.com
   - Verify redirects to /admin
   - Check console for role detection logs
   
2. **Refresh Supabase Schema**
   - Go to Supabase Dashboard
   - Database → Schema Refresh
   - Or run SQL: `NOTIFY pgrst, 'reload schema';`

3. **Run SQL Migration**
   - Copy `/supabase/migrations/populate_dummy_data.sql`
   - Paste into Supabase SQL Editor
   - Execute
   - Verify data in tables

4. **Test Admin Pages**
   - Visit /admin
   - Visit /admin/directory
   - Visit /admin/moderation
   - Check if data appears

5. **Fix Any Errors**
   - Check browser console
   - Check terminal for API errors
   - Fix column name mismatches

---

## Next Sprint Goals

**Sprint 1 (This Week)**:
- Get all admin pages working with real data
- Implement basic comments system
- Create user activity dashboard

**Sprint 2 (Next Week)**:
- Build article/event/classified management
- Implement image uploads
- Add search functionality

**Sprint 3 (Week 3)**:
- Reviews system
- Notifications
- User profiles

**Sprint 4 (Week 4)**:
- Premium features
- Analytics
- Testing & bug fixes
