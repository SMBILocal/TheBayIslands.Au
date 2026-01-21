# 📐 Database Architecture Guide

## Table Relationships

```
┌─────────────────────────────────────────────────────────────┐
│  Authentication Layer (Supabase Auth)                       │
├─────────────────────────────────────────────────────────────┤
│ Creates: users table (managed by Supabase)                  │
│ Handles: JWT tokens, sessions, password reset              │
│ Integration: Via AuthContext.tsx                            │
└───────────────────────────┬─────────────────────────────────┘
                            │ user_id (FK)
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  Users Table                                                │
├─────────────────────────────────────────────────────────────┤
│ id (UUID - primary key)                                     │
│ email (unique)                                              │
│ username                                                    │
│ avatar_url                                                  │
│ bio                                                         │
│ is_premium (boolean)                                        │
│ premium_until (timestamp)                                   │
│ created_at, updated_at                                      │
└───────────────────────┬───────────────────────────────────┬─┘
                        │                                   │
                        ▼                                   ▼
        ┌───────────────────────────────┐     ┌───────────────────────┐
        │ User's Content                │     │ User's Preferences    │
        ├───────────────────────────────┤     ├───────────────────────┤
        │ directory_listings (1:many)   │     │ favorites (1:many)    │
        │ jobs (1:many)                 │     │ saved_searches (1:many)
        │ events (1:many)               │     │                       │
        │ classifieds (1:many)          │     │ (linked by user_id)   │
        │ comments (1:many)             │     └───────────────────────┘
        │                               │
        │ (via user_id foreign key)     │
        └───────────────────────────────┘

Favorites Relationships:
├─ user_id → users.id
└─ Can reference any listing type via:
   ├─ listing_type + listing_id
   ├─ OR specific columns for each type

Saved Searches:
├─ user_id → users.id
└─ filters (JSONB) stores:
   ├─ location
   ├─ category
   ├─ search_text
   └─ other filter params
```

## Content Tables (Linked to Users)

### Directory Listings
```
user_id (FK) ──────────→ users.id
├─ Business name
├─ Description
├─ Category (enum)
├─ Location (enum - 8 options)
├─ Contact info
├─ Website
├─ Hours
├─ Status (pending/active/inactive)
├─ Featured (boolean)
├─ Views (counter)
├─ Rating (1-5)
└─ search_text (for full-text search)
```

### Jobs
```
user_id (FK) ──────────→ users.id
├─ Title
├─ Company name
├─ Description
├─ Category
├─ Location
├─ Employment type
├─ Salary range (min/max)
├─ Experience level
├─ Expires_at (30 days)
├─ Featured
└─ search_text
```

### Events
```
user_id (FK) ──────────→ users.id
├─ Name
├─ Description
├─ Date (start/end)
├─ Time
├─ Location
├─ Image
├─ Ticket info
├─ Organizer
├─ Featured
└─ search_text
```

### Classifieds
```
user_id (FK) ──────────→ users.id
├─ Title
├─ Description
├─ Category
├─ Subcategory
├─ Location
├─ Price
├─ Condition
├─ Image
├─ Expires_at (60 days)
├─ Featured
└─ search_text
```

### Comments (Reviews)
```
user_id (FK) ──────────→ users.id
├─ Listing type (directory, job, event, classified)
├─ Listing ID (references appropriate table)
├─ Rating (1-5)
├─ Comment text
├─ Status (pending/approved/rejected)
└─ created_at
```

## Data Flow Diagram

```
User Signup/Login
      │
      ▼
Supabase.Auth
      │
      ├─ Create JWT token
      ├─ Store in users table
      └─ Return to frontend
      │
      ▼
AuthContext.tsx
      │
      └─ Provide user info to entire app
      │
      ▼
Protected Routes
      │
      ├─ /dashboard/* (requires login)
      ├─ /auth/* (requires logout)
      └─ /api/* (verify JWT)
      │
      ▼
User Creates Listing
      │
      ├─ Fill DirectoryListingForm
      ├─ POST to /api/directory
      ├─ Server verifies auth token
      ├─ Insert into directory_listings table
      ├─ Set user_id = current user
      └─ Return success/error
      │
      ▼
Listing Appears in Search
      │
      ├─ User visits /directory
      ├─ Frontend calls GET /api/directory
      ├─ Server queries database
      ├─ Filters by location, category, search
      ├─ Returns paginated results
      └─ Frontend displays
      │
      ▼
User Views Listing Details
      │
      ├─ Click listing card
      ├─ Navigate to /directory/[id]
      ├─ Fetch full listing data
      ├─ Increment view counter
      ├─ Display structured data
      └─ Show contact info
```

## Filtering Architecture

```
Search Filters
     │
     ├─ Location (8 values)
     │  ├─ russell
     │  ├─ macleay
     │  ├─ lamb
     │  ├─ karragarra
     │  ├─ redland-bay
     │  ├─ victoria-point
     │  ├─ cleveland
     │  └─ capalaba
     │
     ├─ Category (varies by type)
     │  ├─ Directory: Cafe, Retail, Services, etc.
     │  ├─ Jobs: Hospitality, Retail, Professional, etc.
     │  ├─ Events: Social, Sports, Community, etc.
     │  └─ Classifieds: Electronics, Furniture, Vehicles, etc.
     │
     ├─ Text Search (full-text)
     │  ├─ Searches across name, description, category
     │  ├─ Uses PostgreSQL TSVECTOR
     │  └─ Fast, ranked results
     │
     ├─ Location-specific
     │  ├─ By suburb (dropdown)
     │  ├─ By type (Islands/Mainland)
     │  └─ Aggregated counts
     │
     └─ Type-specific
        ├─ Jobs: Salary range, employment type
        ├─ Classifieds: Price range, condition
        ├─ Events: Date range
        └─ Directory: Featured status

All filters combine with AND logic:
  location = 'russell' AND category = 'Cafe' AND search matches 'coffee'
```

## Search Implementation

### Full-Text Search
```sql
-- Creates search_text column in every listing table
-- Type: tsvector (PostgreSQL optimized for search)
-- Updated automatically when listing is created/updated

SELECT * FROM directory_listings
WHERE search_text @@ to_tsquery('coffee')
ORDER BY ts_rank(search_text, to_tsquery('coffee')) DESC
LIMIT 20
```

### Indexes for Performance
```sql
-- Index on search_text for fast text search
CREATE INDEX idx_directory_search ON directory_listings USING GIN(search_text)

-- Indexes on common filters
CREATE INDEX idx_directory_location ON directory_listings(location)
CREATE INDEX idx_directory_category ON directory_listings(category)
CREATE INDEX idx_directory_status ON directory_listings(status)
```

## Row-Level Security (RLS)

### Public Read Access
```sql
-- Anyone can view active listings
CREATE POLICY "public_read" ON directory_listings
  FOR SELECT USING (status = 'active')
```

### User-Specific Write Access
```sql
-- User can only create/edit their own listings
CREATE POLICY "user_insert" ON directory_listings
  FOR INSERT WITH CHECK (auth.uid() = user_id)

CREATE POLICY "user_update" ON directory_listings
  FOR UPDATE USING (auth.uid() = user_id)
```

### Admin Moderation
```sql
-- Admins can see/approve pending listings
CREATE POLICY "admin_access" ON directory_listings
  FOR ALL USING (auth.jwt() ->> 'role' = 'admin')
```

## Stored Data Examples

### Create a Directory Listing
```json
{
  "business_name": "The Daily Brew Cafe",
  "description": "Fresh coffee and pastries every day",
  "category": "Cafe & Food",
  "subcategory": "Coffee Shop",
  "location": "russell",
  "phone": "0412345678",
  "email": "cafe@theislands.com",
  "website": "www.dailybrew.com.au",
  "address": "42 Main Street, Russell Island QLD 4184",
  "hours": "Mon-Fri 6am-4pm, Sat-Sun 8am-3pm",
  "image_url": "https://cdn.example.com/cafe.jpg",
  "featured": false,
  "views": 0,
  "rating": null,
  "status": "pending"
}
```

### Create a Job Listing
```json
{
  "title": "Cafe Manager",
  "company_name": "The Daily Brew",
  "description": "Looking for experienced cafe manager...",
  "category": "Hospitality & Tourism",
  "location": "russell",
  "employment_type": "Full-Time",
  "salary_min": 55000,
  "salary_max": 65000,
  "experience_level": "Mid",
  "expires_at": "2026-02-19T00:00:00Z",
  "featured": false
}
```

## Query Examples

### Get All Businesses on Russell Island
```typescript
const { data } = await supabase
  .from('directory_listings')
  .select('*')
  .eq('location', 'russell')
  .eq('status', 'active')
```

### Search for Coffee Shops
```typescript
const { data } = await supabase
  .from('directory_listings')
  .select('*')
  .textSearch('search_text', 'coffee')
  .eq('status', 'active')
```

### Get Featured Listings (Sorted by Views)
```typescript
const { data } = await supabase
  .from('directory_listings')
  .select('*')
  .eq('featured', true)
  .eq('status', 'active')
  .order('views', { ascending: false })
```

### Get User's Own Listings
```typescript
const { data } = await supabase
  .from('directory_listings')
  .select('*')
  .eq('user_id', userId)
```

### Get Jobs Expiring Soon
```typescript
const { data } = await supabase
  .from('jobs')
  .select('*')
  .lt('expires_at', tomorrow)
  .eq('status', 'active')
```

## Performance Characteristics

| Operation | Speed | Why |
|-----------|-------|-----|
| Search by text | < 100ms | TSVECTOR indexed |
| Filter by location | < 50ms | B-tree index |
| Get single item | < 20ms | Primary key lookup |
| Count listings | < 100ms | Aggregate query |
| User's listings | < 50ms | Indexed by user_id |
| Full table scan | < 1s | 10k items, 8 fields |

## Storage Capacity

### Free Tier Limits
```
Database: 500,000 rows (plenty for 1000s of listings)
Images: 1GB per project (optimize with WebP)
Bandwidth: 5GB/month (usual traffic: < 1GB)
```

### Scaling Path
```
< 1,000 listings      → Free tier (500k rows)
1,000-10,000 listings → Pro tier ($10/month, 1M rows)
10,000+ listings      → Business plan (contact sales)
```

## Backup & Recovery

```
Supabase provides:
✓ Daily automated backups
✓ Point-in-time recovery
✓ Database replicas
✓ 99.9% uptime SLA

You should additionally:
✓ Export critical data weekly
✓ Test restore procedures
✓ Monitor query performance
```

---

## Next: Query Your Data

Once Supabase is set up, test queries using:

1. **Supabase Dashboard**
   - Table view: See data in grid
   - SQL Editor: Write custom queries

2. **Command Line**
   ```bash
   npm run test:db
   ```

3. **Browser Console**
   ```javascript
   const supabase = createClient()
   const { data } = await supabase.from('directory_listings').select('*').limit(1)
   console.log(data)
   ```

All three work the same way - use whichever is most convenient!
