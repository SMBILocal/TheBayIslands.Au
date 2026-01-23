# Complete API Reference - Production Ready

## Overview

All endpoints are production-ready with:
- ✅ Input validation (Zod schemas)
- ✅ Error handling (standardized responses)
- ✅ Rate limiting (100 req/min per IP)
- ✅ Row-Level Security (RLS)
- ✅ Pagination & filtering
- ✅ Comprehensive logging

---

## Public Search Endpoints (No Auth Required)

### Directory - Search Businesses

**Endpoint**: `GET /api/directory/search`

**Query Parameters**:
- `q` (string): Search query (searches name, description, category)
- `location` (string): Filter by location (russell, macleay, lamb, karragarra, etc.)
- `category` (string): Filter by category (Cafe & Food, Marine, etc.)
- `page` (number): Page number (default: 1)
- `limit` (number): Results per page (default: 20, max: 100)
- `sort` (string): Sort by: `newest`, `featured`, `relevance` (default: newest)

**Example**:
```bash
curl "http://localhost:3000/api/directory/search?q=cafe&location=russell&page=1&limit=20&sort=featured"
```

**Response**:
```json
{
  "data": [
    {
      "id": "uuid",
      "business_name": "Island Cafe & Bakery",
      "description": "Award-winning cafe...",
      "category": "Cafe & Food",
      "location": "russell",
      "address": "15 High Street, Russell Island",
      "phone": "07 3409 1234",
      "email": "hello@islandcafe.com.au",
      "website": "https://islandcafe.com.au",
      "hours": "Mon-Fri 6am-3pm",
      "views": 234,
      "featured": true,
      "created_at": "2026-01-23T10:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 45,
    "pages": 3
  }
}
```

---

### Directory - Get Individual Listing

**Endpoint**: `GET /api/directory/{id}`

**Path Parameters**:
- `id` (string, UUID): Listing ID

**Response**: Single listing object (increments view count)

**Example**:
```bash
curl "http://localhost:3000/api/directory/11111111-1111-1111-1111-111111111111"
```

---

### Jobs - Search

**Endpoint**: `GET /api/jobs/search`

**Query Parameters**:
- `q` (string): Search query (searches title, description, company)
- `location` (string): Filter by location
- `category` (string): Filter by category (Hospitality, Trades, etc.)
- `employment_type` (string): Filter by type (full-time, part-time, contract, etc.)
- `page` (number): Page number
- `limit` (number): Results per page
- `sort` (string): `newest`, `featured`, `salary_high`

**Example**:
```bash
curl "http://localhost:3000/api/jobs/search?q=chef&location=russell&employment_type=full-time"
```

---

### Jobs - Get Individual Listing

**Endpoint**: `GET /api/jobs/{id}`

**Response**: Single job listing object

---

### Events - Search

**Endpoint**: `GET /api/events/search`

**Query Parameters**:
- `q` (string): Search query
- `location` (string): Filter by location
- `category` (string): Filter by category (Social, Sports, Community, etc.)
- `page` (number): Page number
- `limit` (number): Results per page
- `sort` (string): `newest`, `featured`, `upcoming`

**Example**:
```bash
curl "http://localhost:3000/api/events/search?q=market&location=russell"
```

---

### Events - Get Individual Event

**Endpoint**: `GET /api/events/{id}`

**Response**: Single event object

---

### Classifieds - Search

**Endpoint**: `GET /api/classifieds/search`

**Query Parameters**:
- `q` (string): Search query
- `location` (string): Filter by location
- `category` (string): Filter by category
- `condition` (string): Filter by condition (new, like-new, good, fair, etc.)
- `minPrice` (number): Minimum price filter
- `maxPrice` (number): Maximum price filter
- `page` (number): Page number
- `limit` (number): Results per page
- `sort` (string): `newest`, `price_low`, `price_high`

**Example**:
```bash
curl "http://localhost:3000/api/classifieds/search?category=Electronics&minPrice=50&maxPrice=500&sort=price_low"
```

---

### Classifieds - Get Individual Listing

**Endpoint**: `GET /api/classifieds/{id}`

**Response**: Single classified listing object

---

## Ratings & Reviews Endpoints

### Get Ratings for Listing

**Endpoint**: `GET /api/ratings/create?listing_id={uuid}`

**Query Parameters**:
- `listing_id` (string, UUID): Listing ID to fetch ratings for

**Response**:
```json
{
  "ratings": [
    {
      "id": "uuid",
      "rating": 5,
      "review_text": "Excellent service!",
      "created_at": "2026-01-22T15:30:00Z",
      "helpful_count": 12,
      "users": { "username": "john_doe" }
    }
  ],
  "average_rating": "4.8",
  "total_ratings": 42
}
```

---

### Create Rating (Auth Required)

**Endpoint**: `POST /api/ratings/create`

**Headers**: Must include valid auth token in Authorization header

**Body**:
```json
{
  "listing_id": "uuid-of-listing",
  "rating": 5,
  "review_text": "Optional review text up to 2000 characters"
}
```

**Response**: Single rating object (status 201)

**Errors**:
- `401`: Not authenticated
- `409`: Already rated this listing
- `400`: Invalid rating (must be 1-5)

---

## Favorites Endpoints (Auth Required)

### Get User's Favorites

**Endpoint**: `GET /api/favorites`

**Response**:
```json
[
  {
    "id": "uuid",
    "user_id": "uuid",
    "listing_type": "directory",
    "listing_id": "uuid",
    "created_at": "2026-01-22T10:00:00Z"
  }
]
```

---

### Add to Favorites

**Endpoint**: `POST /api/favorites`

**Body**:
```json
{
  "listing_type": "directory|job|event|classified",
  "listing_id": "uuid-of-listing"
}
```

**Response**: Favorite object (status 201)

---

### Remove from Favorites

**Endpoint**: `DELETE /api/favorites`

**Body**:
```json
{
  "listing_type": "directory|job|event|classified",
  "listing_id": "uuid-of-listing"
}
```

**Response**: `{ "success": true }`

---

## Saved Searches Endpoints (Auth Required)

### Get User's Saved Searches

**Endpoint**: `GET /api/saved-searches`

**Response**:
```json
[
  {
    "id": "uuid",
    "query": "cafe",
    "filters": { "location": "russell", "category": "Cafe & Food" },
    "search_type": "directory",
    "created_at": "2026-01-22T10:00:00Z"
  }
]
```

---

### Save Search

**Endpoint**: `POST /api/saved-searches`

**Body**:
```json
{
  "query": "cafe",
  "search_type": "directory|jobs|events|classifieds",
  "filters": {
    "location": "russell",
    "category": "Cafe & Food"
  }
}
```

**Response**: Saved search object (status 201)

---

### Delete Saved Search

**Endpoint**: `DELETE /api/saved-searches`

**Body**:
```json
{
  "id": "uuid-of-saved-search"
}
```

**Response**: `{ "success": true }`

---

## Create Listing Endpoints (Auth Required)

### Create Directory Listing

**Endpoint**: `POST /api/directory/listings`

**Body**:
```json
{
  "business_name": "Island Cafe & Bakery",
  "description": "Award-winning cafe with fresh pastries...",
  "category": "Cafe & Food",
  "subcategory": "Cafe",
  "location": "russell",
  "address": "15 High Street, Russell Island",
  "phone": "07 3409 1234",
  "email": "hello@islandcafe.com.au",
  "website": "https://islandcafe.com.au",
  "hours": "Mon-Fri 6am-3pm",
  "image_urls": ["https://example.com/image1.jpg"]
}
```

**Response**: Directory listing object (status 201, status: pending)

---

### Create Job Listing

**Endpoint**: `POST /api/jobs/listings`

**Body**:
```json
{
  "title": "Head Chef",
  "description": "Experienced chef needed for busy cafe...",
  "company_name": "Island Cafe & Bakery",
  "category": "Hospitality",
  "employment_type": "full-time",
  "location": "russell",
  "salary_min": 75000,
  "salary_max": 90000,
  "salary_currency": "AUD",
  "experience_level": "mid",
  "image_url": "https://example.com/image.jpg"
}
```

**Response**: Job listing object (status 201, status: pending)

---

### Create Event

**Endpoint**: `POST /api/events/listings`

**Body**:
```json
{
  "title": "Russell Island Farmers Market",
  "description": "Weekly farmers market with local produce...",
  "category": "Community",
  "location": "russell",
  "start_date": "2026-02-01",
  "end_date": "2026-02-01",
  "start_time": "08:00",
  "end_time": "14:00",
  "address": "Russell Island Community Centre",
  "ticket_url": "https://tickets.example.com",
  "ticket_price": 0,
  "image_url": "https://example.com/image.jpg",
  "organizer": "Community Association"
}
```

**Response**: Event object (status 201, status: pending)

---

### Create Classified

**Endpoint**: `POST /api/classifieds/listings`

**Body**:
```json
{
  "title": "Kayak for Sale - Sit-on-Top",
  "description": "2-year-old quality kayak in excellent condition...",
  "category": "Sports & Outdoors",
  "subcategory": "Water Sports",
  "price": 280,
  "location": "russell",
  "condition": "like-new",
  "negotiable": true,
  "image_urls": ["https://example.com/image1.jpg"],
  "contact_method": "email",
  "contact_info": "seller@example.com"
}
```

**Response**: Classified object (status 201, status: pending)

---

## Admin Moderation Endpoints (Auth + Admin Role Required)

### Get Pending Approvals

**Endpoint**: `GET /api/admin/approvals`

**Response**:
```json
[
  {
    "id": "uuid",
    "content_id": "uuid",
    "content_type": "directory",
    "submitted_by": "uuid",
    "submission_content": {...},
    "status": "pending",
    "priority": 0,
    "created_at": "2026-01-23T10:00:00Z"
  }
]
```

---

### Approve or Reject Content

**Endpoint**: `POST /api/admin/approvals`

**Body**:
```json
{
  "approval_id": "uuid",
  "action": "approve|reject",
  "revision_notes": "Optional feedback for submitter"
}
```

**Response**: `{ "success": true, "status": "approve" }`

---

### Get Content Reports

**Endpoint**: `GET /api/admin/reports`

**Response**:
```json
[
  {
    "id": "uuid",
    "content_id": "uuid",
    "content_type": "directory",
    "reported_by": "uuid",
    "report_reason": "spam",
    "status": "open",
    "created_at": "2026-01-23T10:00:00Z"
  }
]
```

---

### Resolve Report

**Endpoint**: `POST /api/admin/reports`

**Body**:
```json
{
  "report_id": "uuid",
  "action": "dismiss|resolved",
  "moderator_notes": "Report was spam, removed content"
}
```

**Response**: `{ "success": true, "status": "resolved" }`

---

## Report Content Endpoint (Auth Required)

### Create Report

**Endpoint**: `POST /api/reports/create`

**Body**:
```json
{
  "content_id": "uuid",
  "content_type": "directory|job|event|classified|user|comment",
  "report_reason": "spam|scam|illegal|inappropriate|misinformation|harassment|other",
  "description": "Why you're reporting this content"
}
```

**Response**: Report object (status 201)

**Errors**:
- `401`: Not authenticated
- `409`: Already reported this content by this user
- `400`: Invalid report reason

---

## Error Response Format

All errors follow this standardized format:

```json
{
  "error": "Error message",
  "details": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

**Common Status Codes**:
- `200`: Success
- `201`: Resource created
- `204`: No content
- `400`: Bad request (validation failed)
- `401`: Unauthorized (not logged in)
- `403`: Forbidden (insufficient permissions)
- `404`: Not found
- `409`: Conflict (duplicate, already exists)
- `429`: Too many requests (rate limited)
- `500`: Internal server error

---

## Rate Limiting

- **Limit**: 100 requests per minute per IP
- **Headers**: `Retry-After` sent when limit exceeded
- **Status**: `429 Too Many Requests`

---

## Authentication

For protected endpoints, include JWT token:

```bash
curl -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  http://localhost:3000/api/favorites
```

Get JWT token by logging in via `/auth` pages or Supabase client library.

---

## Production Base URL

Replace `http://localhost:3000` with your production domain:
- Development: `http://localhost:3000`
- Staging: `https://staging.thebayislands.au`
- Production: `https://thebayislands.au`

---

**API Version**: v1.0 (Production Ready)  
**Last Updated**: January 23, 2026  
**Next Review**: February 23, 2026
