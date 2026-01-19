# API Documentation - TheBayIslands.Au

## Base URL
```
http://localhost:3000/api
```

---

## Endpoints

### 1. GET /api/articles
Returns a list of all articles.

**Response:**
```json
[
  {
    "id": "uuid",
    "title": "Article Title",
    "excerpt": "Short description",
    "content": "Full article body",
    "author": "Author Name",
    "category": "Travel Guide|Business|Community|Lifestyle",
    "created_at": "2026-01-01T00:00:00Z"
  }
]
```

**Usage:**
```typescript
const res = await fetch('/api/articles');
const articles = await res.json();
```

---

### 2. GET /api/jobs
Returns a list of all job postings.

**Response:**
```json
[
  {
    "id": "uuid",
    "title": "Position Title",
    "company": "Company Name",
    "location": "Russell Island|Macleay Island|...",
    "type": "Full-time|Part-time|Contract",
    "salary": "$50k - $70k",
    "description": "Job description",
    "created_at": "2026-01-01T00:00:00Z"
  }
]
```

**Usage:**
```typescript
const res = await fetch('/api/jobs');
const jobs = await res.json();
```

---

### 3. GET /api/events
Returns a list of all community events.

**Response:**
```json
[
  {
    "id": "uuid",
    "title": "Event Name",
    "description": "Event description",
    "date": "2026-01-15",
    "time": "6:00 PM",
    "location": "Venue or Location",
    "organizer": "Organizer Name",
    "capacity": 100,
    "category": "Markets|Community|Sports & Recreation|Entertainment",
    "created_at": "2026-01-01T00:00:00Z"
  }
]
```

**Usage:**
```typescript
const res = await fetch('/api/events');
const events = await res.json();
```

---

### 4. GET /api/directory
Returns a list of all businesses in the directory.

**Response:**
```json
[
  {
    "id": "uuid",
    "name": "Business Name",
    "category": "Cafe & Food|Marine & Water Sports|...",
    "location": "Russell Island|Cleveland|...",
    "description": "Business description",
    "phone": "+61...",
    "email": "contact@business.com",
    "hours": "9am - 5pm Mon-Fri",
    "website": "https://...",
    "created_at": "2026-01-01T00:00:00Z"
  }
]
```

**Usage:**
```typescript
const res = await fetch('/api/directory');
const businesses = await res.json();
```

---

### 5. GET /api/classifieds
Returns a list of all classified items for sale.

**Response:**
```json
[
  {
    "id": "uuid",
    "title": "Item Name",
    "description": "Item description",
    "price": "$350",
    "location": "Russell Island|Cleveland|...",
    "category": "Furniture|Outdoor & Sports|...",
    "condition": "New|Like New|Good|Fair|Parts Only",
    "seller_contact": "contact@email.com",
    "created_at": "2026-01-01T00:00:00Z"
  }
]
```

**Usage:**
```typescript
const res = await fetch('/api/classifieds');
const items = await res.json();
```

---

## Component Integration Examples

### Using SearchFilter Component
```typescript
import SearchFilter from '@/components/SearchFilter';

export default function MyPage() {
  const handleSearch = (query: string) => {
    // Filter data based on search query
  };

  const handleFilter = (filters: { category?: string; location?: string }) => {
    // Apply category and location filters
  };

  return (
    <SearchFilter
      onSearch={handleSearch}
      onFilter={handleFilter}
      categories={['Category 1', 'Category 2']}
      locations={['Location 1', 'Location 2']}
    />
  );
}
```

### Using ListingCard Component
```typescript
import ListingCard from '@/components/ListingCard';

export default function JobsList() {
  return (
    <ListingCard
      title="Job Title"
      subtitle="Company Name"
      description="Full-time in Location"
      price="$60k - $80k"
      href="/jobs/123"
    />
  );
}
```

### Using ImageCard Component
```typescript
import ImageCard from '@/components/ImageCard';

export default function GalleryView() {
  return (
    <ImageCard
      image="https://..."
      title="Listing Title"
      subtitle="Subtitle"
      description="Description text"
      price="$120"
      badge="Featured"
    />
  );
}
```

### Using AuthModal Component
```typescript
import { useState } from 'react';
import AuthModal from '@/components/AuthModal';

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAuth = (data: { email: string; password: string; name?: string }) => {
    // Handle authentication
    console.log('Auth data:', data);
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Sign In</button>
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAuth}
        mode="login"
      />
    </>
  );
}
```

### Using ListingForm Component
```typescript
import { useState } from 'react';
import ListingForm from '@/components/ListingForm';

export default function CreateJobPage() {
  const handleSubmit = (formData: any) => {
    // Send to API endpoint
    fetch('/api/jobs', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
  };

  return (
    <ListingForm
      type="job"
      onSubmit={handleSubmit}
    />
  );
}
```

---

## Available Locations

All location-based features use these 8 locations:
1. Russell Island
2. Macleay Island
3. North Stradbroke Island
4. Lamb Island
5. Cleveland
6. Redland Bay
7. Wellington Point
8. Victoria Point

---

## Category Types

### Job Types
- Full-time
- Part-time
- Contract

### Business Categories
- Cafe & Food
- Marine & Water Sports
- Landscaping & Garden
- Hospitality & Tourism
- Retail
- Services

### Event Categories
- Markets
- Community
- Sports & Recreation
- Entertainment
- Education
- Family

### Article Categories
- Travel Guide
- Business
- Community
- Lifestyle
- How-To

### Classified Categories
- Furniture
- Outdoor & Sports
- Garden & Outdoor
- Electronics
- Auto Parts
- Collectibles

---

## Island Color Scheme Integration

Each listing can be themed with island colors:

```css
/* Russell Island - Coastal Blues */
.island-russell {
  --island-accent: #0066b3;
  --island-light: #e6f0f7;
}

/* Macleay Island - Terracotta */
.island-macleay {
  --island-accent: #c85a17;
  --island-light: #f5ede3;
}

/* North Stradbroke Island - Ocean */
.island-stradbroke {
  --island-accent: #006994;
  --island-light: #e6f0f7;
}

/* Lamb Island - Forest Green */
.island-lamb {
  --island-accent: #2d5016;
  --island-light: #f0f2e8;
}
```

**Usage in Components:**
```typescript
<div className={`island-${getIslandFromLocation(location)}`}>
  <div className="detail-hero">
    <h1>{title}</h1>
  </div>
</div>
```

---

## Error Handling

All endpoints follow this error format:
```json
{
  "error": "Error message",
  "status": 500
}
```

**Common Error Codes:**
- `400` - Bad request
- `404` - Not found
- `500` - Server error

**Client-side Handling:**
```typescript
try {
  const res = await fetch('/api/articles');
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  const data = await res.json();
} catch (error) {
  console.error('Fetch failed:', error);
  // Use dummy/fallback data
}
```

---

## Rate Limiting

Currently no rate limiting. Recommended for production:
- 100 requests per minute per IP
- 1000 requests per hour per IP

---

## Future API Endpoints (Roadmap)

### POST /api/articles
Create a new article (requires authentication)

### POST /api/jobs
Create a job listing (requires employer account)

### POST /api/events
Create an event listing (requires authentication)

### POST /api/directory
Create a business listing (requires business verification)

### POST /api/classifieds
Create a classified ad (requires authentication)

### PUT /api/[section]/[id]
Update an existing listing (requires ownership/admin)

### DELETE /api/[section]/[id]
Delete a listing (requires ownership/admin)

### POST /auth/signup
Create a new user account

### POST /auth/login
Authenticate user and return session token

### GET /auth/me
Get current user information (requires authentication)

---

## Performance Tips

1. **Caching**: Pages use `cache: 'no-store'` for fresh data
2. **Pagination**: Consider adding pagination for large datasets
3. **Search**: Client-side filtering is performed after fetch
4. **Images**: Lazy-load images on detail pages
5. **Compression**: All responses are gzipped in production

---

## CORS Policy

Currently configured for:
- `localhost:3000` (development)
- `TheBayIslands.Au` domain (production)

Update in `next.config.js` for different origins.

---

**Last Updated:** January 2026  
**API Version:** 1.0
