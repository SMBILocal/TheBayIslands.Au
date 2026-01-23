# THE BAY ISLANDS - PHASE PLAN v0.0.3
## 🚀 Enterprise Directory Transformation & Revenue Optimization

**Target Release:** v0.0.3 (Next Phase)  
**Current Version:** v0.0.2 (Claim listing infrastructure + 5-tier pricing)  
**Deadline:** Sequential implementation, monthly releases  
**Revenue Target:** $12k-$35k monthly by Month 6

---

## 📋 EXECUTIVE SUMMARY

This phase plan transforms the directory from a basic listing platform into a **Google-dominating, revenue-optimized local business infrastructure** using:
- ✅ SEO-first architecture (suburb × service pages)
- ✅ Comments & reviews system (reputation engine)
- ✅ Ratings infrastructure (trust signals)
- ✅ Advanced pricing tiers ($1, $14.99, $29.99, $59.99, $149+ POA)
- ✅ AI content generation (stored, non-dynamic)
- ✅ Enhanced UI/UX (competitive with world-class directories)
- ✅ Local schema markup (Google Rich Results)

---

## 🎯 VERSION ROADMAP

```
v0.0.2 (CURRENT)
├── ✅ Claim listing modal + form
├── ✅ Business status (claimed/unclaimed/featured)
├── ✅ 40+ seeded businesses
├── ✅ Category filters + location filters
└── ✅ Basic 5-tier pricing page (UI only, not functional)

v0.0.3 (THIS PHASE)
├── TIER A: SEO & Content Engine
│   ├── Suburb authority pages (/suburbs/[suburb])
│   ├── Category pages (/categories/[category])
│   ├── Suburb × Category pages (/[suburb]/[category]) ← MONEY PAGES
│   ├── AI content templates (pre-generated, stored)
│   ├── Schema.org LocalBusiness markup
│   └── Sitemap + robots.txt generation
├── TIER B: Comments & Reviews
│   ├── Comment system (logged-in required)
│   ├── Ratings system (stars) on businesses
│   ├── Moderation workflow (admin/editor/user roles)
│   ├── Dummy comments from test accounts
│   └── Comment schema markup
├── TIER C: Pricing Tiers (Functional)
│   ├── 5-tier model (Free, $1, $14.99, $29.99, $59.99+)
│   ├── Stripe integration
│   ├── Webhook processing
│   ├── Tier-based ranking
│   ├── Featured slot enforcement
│   └── Billing portal
├── TIER D: Directory UI/UX Enhancement
│   ├── Top "Add Business" button (always visible)
│   ├── Fix tablet overflow issues
│   ├── Enhanced business card design
│   ├── Advanced filters sidebar
│   ├── Search suggestion dropdown
│   └── Responsive image optimization
└── TIER E: Business Data Expansion
    ├── Shane Smith Concreting (full details + image)
    ├── Russell Island Block Clearing (Steve & Sandy)
    ├── Premium business images for featured listings
    ├── Images for Sealink, Hospital, Bowls clubs
    └── Expanded category coverage (100+ categories)

v0.0.4 (PHASE AFTER)
├── Advanced analytics dashboard
├── Lead tracking system
├── Cold call CRM integration
├── Email marketing sequences
├── AI business profile generator
└── Community features (forums, classifieds integration)

v0.1.0 (STABLE RELEASE)
├── Full production deployment
├── SEO dominance (target: page 1 for 500+ keywords)
├── Revenue: $25k-$50k monthly
└── 2,000+ active listings
```

---

## � PHASE 1 (Jan 21, 2026): PRICING REFINEMENT & FEATURE CLARIFICATION

### Overview
Refine the pricing model, improve messaging clarity, and add critical features for content management and community engagement.

### 1.1 Pricing Updates

**Changes to PRICING_TIERS:**
- ✅ Removed "Browse directory" from Free & Standard (it's free for all)
- ✅ Added feature tooltips/help text for all features
- ✅ Clarified job & classifieds post limits per tier
- ✅ Added article publishing with admin review
- ✅ Pro tier now includes 2 directory listings (shared dashboard)
- ✅ Enterprise pricing changed from "$250/mo" to "Custom Pricing"

**Feature Limits (Paid Posts per Tier):**
```
Free:         0 paid posts (free posts only)
Standard:     2 job posts + 2 classifieds per month
Professional: 5 job posts + 5 classifieds per month
Pro:          10 job posts + 10 classifieds per month
Enterprise:   Unlimited paid posts
```

**New Pro Tier Feature:**
```
"2 directory listings (shared dashboard)"
- Manage 2 businesses from one dashboard
- Both get full Pro features (10 categories each, unlimited photos, etc.)
- Separate dashboards available only at higher tiers or with separate subscriptions
- Effectively doubles value for same monthly cost
```

### 1.2 Messaging & Transparency

**Added FAQ Section Question:**
```
Q: Is the free tier always free?
A: Absolutely! The Free tier will always be free. You can upgrade to a paid 
tier anytime to unlock more features, and you can also downgrade back to 
Free at any time. No surprises, no hidden fees.
```

**Added Platform-Wide Messaging:**
- Emphasize: "Pricing covers entire platform—jobs, classifieds, articles, events, AND directory"
- Not just directory fees like competitors
- Competitive advantage: one-stop platform for local business

### 1.3 Content Approval System (Design Phase)

**New Content Types Needing Approval:**
1. Business listings (new claims)
2. Job postings (paid)
3. Classifieds (paid)
4. Articles (paid)
5. Events (all)

**Workflow:**
```
User submits content → System validates against guidelines 
  → If passes: Auto-approve (instant) 
  → If fails: Hold for manual review 
  → Admin/Moderator reviews → Approve/reject/request changes 
  → User notified
```

**Auto-Approval Guidelines (To Define):**
- Content quality (no spam, no profanity, no inappropriate material)
- Business legitimacy (name, contact, location verification)
- Image requirements (min resolution, no copyrighted images without permission)
- Compliance (local laws, service regulations, terms of service)

### 1.4 Bay Islands Radio Widget (Planning Phase)

**Feature:** Live-streaming local radio in header
- **Station:** Bay Islands Radio 98.8 FM (confirm frequency)
- **Location:** Top header bar (centered)
- **Elements:** Play/pause button, current song, time/date, station link
- **Implementation:** Phase 4 (after pricing stabilizes)
- **Estimated Time:** 13 hours
- **See:** [BAY-ISLANDS-RADIO-WIDGET-PLAN.md](BAY-ISLANDS-RADIO-WIDGET-PLAN.md)

### 1.5 Files & Documentation

**Files Created:**
- `docs/PHASE-PLAN-2026-EXPANSION.md` - All user feedback & requirements
- `docs/BAY-ISLANDS-RADIO-WIDGET-PLAN.md` - Radio widget implementation
- `docs/PRICING-MESSAGING-UPDATE-JAN-2026.md` - Complete changelog

**Files Modified:**
- `lib/pricing.constants.ts` - Updated features, tooltips, limits
- `components/PricingCarousel.tsx` - Added tooltip rendering
- `app/upgrade/page.tsx` - Added FAQ question

### 1.6 Timeline: Phase 1
- ✅ **Jan 21:** Pricing constants updated, FAQ added, messaging updated
- ✅ **Jan 21:** Radio widget plan created & added to roadmap
- ⏳ **Jan 22-23:** Testing on all devices (desktop, tablet, mobile)
- ⏳ **Jan 24:** Deploy to production
- ⏳ **Jan 25+:** Monitor conversion metrics & user feedback

---

## 🎙️ PHASE 2a: LOCAL RADIO STATIONS PAGE (NEW - v0.0.4)

### 2a.1 Overview
**Status:** ✅ COMPLETE (Jan 21, 2026)  
**Route:** `/radio`  
**Objective:** Create comprehensive local radio stations directory with streaming capabilities, community broadcasting history, and SEO optimization

### 2a.2 Features Implemented

✅ **Featured Bay Islands Radio Player**
- 88.0 MHz FM primary featured station
- Play/pause controls (UI ready, awaiting streaming URL)
- Volume slider (functional)
- Station selector dropdown (all 11 stations)
- Real-time station details display

✅ **11-Station Directory**
- Sortable by frequency (88.0 → 107.7)
- Click-to-expand station profiles
- Detailed history paragraphs for each station
- Coverage information and distance calculations
- Establishment years and broadcast formats
- Badge system for station types (Local, Community, Commercial, National)

✅ **Station Data Structure**
| Frequency | Station | Format | Location | Status |
|-----------|---------|--------|----------|--------|
| 88.0 | Bay Islands Radio | Community Variety | Bay Islands | Featured ⭐ |
| 96.5 | 96five | Christian Community | Brisbane ~30km | Stream Available |
| 98.1 | 4EB | Multilingual | Brisbane ~35km | Stream Available |
| 98.9 | 4AAA (Murri Country) | Indigenous | Brisbane ~35km | Stream Available |
| 99.4 | Rebel FM | Rock Format | Gold Coast ~50km | Stream Available |
| 100.3 | Bay FM | Community Radio | Redland City ~15km | Stream Available |
| 102.1 | 4ZZZ | Independent | Brisbane ~35km | Stream Available |
| 103.7 | 4MBS Classic FM | Classical | Brisbane ~40km | Stream Available |
| 106.9 | Nova | Commercial Pop | Brisbane ~40km | Stream Available |
| 97.3 | KIIS | Mainstream Pop | Brisbane ~40km | Stream Available |
| 107.7 | Triple J | Youth Music | National Network | Stream Available |

✅ **SEO Optimization**
- Meta title: "Local Radio Stations | Bay Islands Radio 88.0 FM | The Bay Islands"
- Meta description: Detailed local keyword targeting (Bay Islands Radio, Russell Island, Macleay Island, Lamb Island, Redland City)
- 50+ SEO keywords for local radio search visibility
- Open Graph image support

✅ **Schema.org Structured Data**
- BroadcastService schema (primary station)
- BroadcastFrequency schema (for each station)
- LocalBusiness schema (Bay Islands Radio as broadcaster)
- ItemList schema (all 11 stations as searchable list)

✅ **Content Sections**
- **Local Radio History:** Paragraph about Moreton Bay broadcasting heritage
- **How to Tune In:** 3-column guide (FM Radio, Online Streaming, Mobile Apps)
- **FAQ Section:** 7 expandable questions covering common topics
- **Station Directory:** Full frequency-sorted table with expandable profiles

✅ **Responsive Design**
- Desktop: 2-column layout (player + directory)
- Tablet: Adjusted grid
- Mobile: Full-width stacked layout
- Accessible controls and navigation

### 2a.3 File Structure Created

```
app/radio/
├── page.tsx          # Main page (React, 500+ lines)
└── layout.tsx        # SEO metadata & structured data

docs/
├── LOCAL-RADIO-STATIONS-IMPLEMENTATION.md    (26 KB comprehensive spec)
└── RADIO-STATIONS-PAGE-QUICK-START.md         (Quick reference)

components/
└── Navbar.tsx        # Updated with 📻 Radio link
```

### 2a.4 Navigation Integration
- Added `📻 Radio` link to main navigation menu
- Positioned between Events and Directory
- Mobile-responsive dropdown support

### 2a.5 Build Status
✅ **Build:** Successful (no TypeScript errors)  
✅ **Page Size:** 6.17 kB (lightweight)  
✅ **First Load JS:** 101 kB (optimized)  
✅ **Route:** Pre-rendered as static HTML

### 2a.6 What's Next: Phase 2b - Streaming Integration

**Timeline:** 1 week (Jan 22-29)

**Tasks:**
1. **Obtain Streaming URLs**
   - Contact Bay Islands Radio station
   - Request MP3/AAC streaming URL
   - Confirm frequency (88.0 FM confirmed)
   - Get format and bitrate details

2. **Implement Audio Streaming**
   - Replace play/pause mockup with working HTML5 audio player
   - Connect dropdown to alternate station URLs
   - Add error handling for stream failures
   - Implement loading states

3. **Browser & Device Testing**
   - Chrome, Safari, Firefox, Edge
   - iOS Safari (mobile)
   - Android Chrome
   - Audio quality verification

4. **Performance Optimization**
   - Measure page load time
   - Optimize audio stream for bandwidth
   - Cache control headers
   - CDN configuration for streams

### 2a.7 Streaming Considerations
- **Audio Format:** MP3 128kbps recommended (good quality, low bandwidth)
- **URL Type:** HLS, HTTP progressive, or Shoutcast compatible
- **Fallback:** Link to station website if direct stream unavailable
- **Testing:** Verify on 3G/4G mobile connections

### 2a.8 Future Enhancements
- Schedule widget showing current programming
- Station contact/request forms
- Local event promotions from stations
- Listener polls/voting
- Community radio show submissions
- Radio station affiliates as premium partners

---
## 🎨 PHASE 2b: HEADER & FOOTER REDESIGN + BRAND COLOR STANDARDIZATION (NEW - v0.0.4)

### 2b.1 Overview
**Status:** ✅ COMPLETE (Jan 21, 2026)  
**Objective:** Redesign navigation and footer for better UX, standardize brand colors across entire site

### 2b.2 Header Redesign - Top Bar Radio Player

**Changes to TopAuthBar:**
✅ Moved Bay Islands Radio player from main nav menu to top authentication bar
✅ Positioned between logo and login/signup buttons
✅ Display: "📻 Bay Islands Radio" + "▶ Play" button
✅ Play button styled with brand blue hover effect
✅ Responsive design maintained across all breakpoints

**Benefits:**
- Frees up main navigation menu for full width in tablet/portrait mode
- Navigation stays left-aligned in landscape/desktop
- Reduces visual clutter in main menu
- Improves top bar balance (logo | radio | auth)

### 2b.3 Navigation Fixes

✅ **Navbar Responsive Improvements:**
- Reduced padding from 14px to 12px
- Reduced gaps from 6px to 2px
- Font sizes optimized for narrow viewports
- Reduced brand logo size from 48px to 44px
- Hamburger reduced from 24px to 22px
- Better handling of tablet portrait mode

✅ **Business Directory Overflow Fix:**
- Restructured filter controls from flexbox to grid layout
- Search bar spans full width on mobile
- Location & Category selects resize responsively
- View mode toggles now icon-only (⊞ / ☰) on mobile
- Category quick filters properly wrap without overflow
- All controls now fit within viewport on tablet portrait

### 2b.4 Brand Color Standardization

**Color Audit Results:**
- Brand Blue (Logo & Signup): `#0066b3`
- Old Directory Blue: `#0ea5e9` (light cyan - NOT brand color)
- Old Directory Gradient: `#06b6d4` (teal - NOT brand color)
- Old Footer Links: `#38bdf8` (light cyan - NOT brand color)

**Updated Across Entire Site:**

**Directory Page (`app/directory/page.tsx`):**
```
Hero Gradient:         #0066b3 → #004a8a (brand blue to darker shade)
View Mode Buttons:     #0ea5e9 → #0066b3
Clear Filters Button:  #0ea5e9 → #0066b3
Category Filters:      #0ea5e9 → #0066b3
Load More Button:      #0ea5e9 → #0066b3
Business Counter:      #0ea5e9 → #0066b3
Accent Color:          #0ea5e9 → #0066b3
```

**Footer (`components/Footer.tsx`):**
```
Link Color:  #38bdf8 → #0066b3 (brand blue)
```

**Result:** Consistent brand color throughout site (Blue: #0066b3)

### 2b.5 Footer Redesign

**Previous Issues:**
- 5 columns causing stacking too early on tablet
- Duplicate "Sitemap" links in Account & Community columns
- Bottom copyright text centered (not symmetric)
- Links in light cyan (#38bdf8) not matching brand

**New Layout:**
```
Main Grid (4 Columns, minmax 250px):
├── Column 1: Brand (Company info)
├── Column 2: Explore (Directory, Articles, Events, Classifieds, Jobs)
├── Column 3: Account (Login, Signup, Upgrade, Donate)
└── Column 4: Policies (Terms, Privacy, Refunds, Cookies, Environmental)

Acknowledgment Text: Traditional Custodians notice + SMBI Local info

Bottom Row (Grid 2 Columns):
├── Left:  Copyright (© 2026 thebayislands.au)
└── Right: Sitemap • Terms • Policies (footer links with bullets)
```

**Benefits:**
- Larger minimum column width (250px vs 200px) = better tablet stacking
- 4 columns instead of 5 = symmetric layout
- No duplicate Sitemap links
- Clean bottom row with Copyright left, Links right
- Donate moved to Account column (better organization)
- All links use consistent brand blue

### 2b.6 Responsive Behavior

**Desktop (>1200px):**
- 4-column footer displays side-by-side
- Full horizontal layout
- All links visible and clickable

**Tablet (768px-1200px):**
- Columns stack in 2-row grid
- Row 1: Brand + Explore | Account + Policies
- Bottom row centered (Copyright | Links)
- Maintains full readability

**Mobile (<768px):**
- Single column layout
- Brand → Explore → Account → Policies → Copyright/Links
- Full-width responsive
- Touch-friendly sizing

### 2b.7 Files Modified

```
components/TopAuthBar.tsx   (Updated: Added radio player to top bar)
components/Footer.tsx        (Updated: Redesigned layout & colors)
app/directory/page.tsx       (Updated: All colors to brand blue #0066b3)
styles/globals.css           (Updated: Navbar responsive tweaks)
```

### 2b.8 Build & Testing

✅ **Build Status:** Successful (no errors)  
✅ **Test Environment:** Dev server running on port 3002  
✅ **Device Testing:** All breakpoints verified  
✅ **Git Status:** Changes committed to `thebayislands.au-v0.0.4` branch  
✅ **GitHub Status:** Pushed to remote repository

---
## �🏗️ TIER A: SEO & CONTENT ENGINE

### A.1 Database Schema Extensions

**Add to Prisma:**

```prisma
model SeoContent {
  id        String   @id @default(uuid())
  type      String   // "suburb" | "category" | "suburb_category" | "business"
  slug      String   @unique
  title     String   @db.VarChar(255)
  metaDesc  String   @db.VarChar(160)
  intro     String   @db.Text
  body      String   @db.Text
  faqs      Json
  keywords  String[] // For tracking
  updatedAt DateTime @updatedAt
  
  @@index([type, slug])
}

model StructuredData {
  id        String   @id @default(uuid())
  entityId  String   // business/suburb/category id
  entityType String  // "Business" | "Place" | "LocalBusiness"
  schemaJson Json    // Full JSON-LD
  createdAt DateTime @default(now())
  
  @@index([entityId, entityType])
}
```

### A.2 New Routes

```
/app
├── /suburbs/
│   ├── page.tsx (all suburbs list)
│   └── [suburb]/
│       ├── page.tsx (suburb hub)
│       └── layout.tsx (shared layout)
├── /categories/
│   ├── page.tsx (all categories)
│   └── [category]/
│       ├── page.tsx (category hub)
│       └── layout.tsx
├── /[suburb]/
│   ├── page.tsx (alternative slug)
│   └── [category]/
│       └── page.tsx ⭐ MONEY PAGE (suburb × service)
└── /api/
    ├── /seo-content/
    │   └── route.ts (fetch content by slug)
    └── /structured-data/
        └── route.ts (fetch schema by entity)
```

### A.3 Content Generation Strategy

**Workflow:**

1. **Pre-generate** AI content offline (admin-only)
2. **Store** in `SeoContent` table
3. **Render** server-side (never client-side)
4. **Revalidate** every 30 days (ISR)

**AI Prompts:**

```
SUBURB PAGE (900-1200 words)
- Local context & economy
- Common services locals search for
- Nearby suburbs mention
- SEO-friendly, neutral tone
- FAQ schema (5 questions)

CATEGORY PAGE (700-1000 words)
- What the service is
- When locals need it
- How to choose provider
- Compliance notes
- FAQ schema

SUBURB × CATEGORY (500-800 words) ⭐ HIGHEST VALUE
- Service availability in suburb
- Local context (housing, business types)
- Why local matters
- Natural CTA
```

### A.4 Schema Markup Strategy

**Required markups:**

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "{{business.name}}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{{address}}",
    "addressLocality": "{{suburb}}",
    "addressRegion": "QLD",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": {{lat}},
    "longitude": {{lng}}
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": {{rating}},
    "reviewCount": {{reviewCount}}
  }
}
```

**FAQPage schema** on every suburb/category page.

### A.5 SEO Files

**sitemap.ts** - Dynamic, tier-aware
**robots.txt** - Disallow admin, allow all business pages
**metadata.ts** - OpenGraph, locality schema, canonical tags

---

## 💬 TIER B: COMMENTS & REVIEWS SYSTEM

### B.1 Database Schema

```prisma
enum UserRole {
  USER
  EDITOR
  MODERATOR
  ADMIN
}

model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String   // bcrypt
  name      String
  role      UserRole @default(USER)
  verified  Boolean  @default(false)
  createdAt DateTime @default(now())
  
  comments  Comment[]
  ratings   Rating[]
}

model Comment {
  id        String   @id @default(uuid())
  entityId  String   // business/article/job/event id
  entityType String  // "Business" | "Article" | "Job" | "Event"
  
  authorId  String
  author    User     @relation(fields: [authorId], references: [id], onDelete: Cascade)
  
  content   String   @db.Text
  approved  Boolean  @default(false) // Moderation queue
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([entityId, entityType])
  @@index([authorId])
  @@index([approved])
}

model Rating {
  id        String   @id @default(uuid())
  businessId String
  business  Business @relation(fields: [businessId], references: [id], onDelete: Cascade)
  
  authorId  String
  author    User     @relation(fields: [authorId], references: [id], onDelete: Cascade)
  
  stars     Int      // 1-5
  title     String?
  review    String?  @db.Text
  verified  Boolean  @default(false)
  
  createdAt DateTime @default(now())
  
  @@index([businessId])
  @@index([authorId])
  @@unique([businessId, authorId]) // One rating per user per business
}
```

### B.2 Comment Features

**Visibility:**
- Comments visible to all (approved only)
- Logged-in users can comment
- Mods/admins approve before publish
- Roles: User (basic), Editor (fast-track), Moderator (approve/delete), Admin (all)

**Where comments appear:**
- Business detail pages
- Article pages
- Job listings
- Event pages
- Classifieds listings

**Dummy data (test accounts):**

```typescript
const testComments = [
  { author: "Sarah M.", role: "USER", text: "Great service, very professional." },
  { author: "John E.", role: "EDITOR", text: "Reliable electrician, fixed the issue quickly." },
  { author: "Emma T.", role: "MODERATOR", text: "Highly recommend for plumbing work." },
  { author: "Admin", role: "ADMIN", text: "Official partner business." }
]
```

### B.3 Rating Aggregation

**Auto-calculate** on Business model:

```typescript
async function updateBusinessRating(businessId: string) {
  const ratings = await prisma.rating.findMany({
    where: { businessId, verified: true }
  })
  
  const avg = ratings.reduce((sum, r) => sum + r.stars, 0) / ratings.length
  
  await prisma.business.update({
    where: { id: businessId },
    data: { rating: avg, reviewCount: ratings.length }
  })
}
```

---

## 💰 TIER C: PRICING TIERS (FUNCTIONAL)

### C.1 Five-Tier Model

| Tier | Price | Stripe | Features |
|------|-------|--------|----------|
| **Free** | $0 | (none) | Basic listing, generic image, no priority |
| **Starter** | $1/mo | price_xyz | Logo, website link, AI description |
| **Boost** | $14.99/mo | price_xyz | ⭐ MOST POPULAR - 5 photos, 3 service areas, featured badge |
| **Authority** | $29.99/mo | price_xyz | Top placement, 10 service areas, mini landing page, monthly refresh |
| **Lead Engine** | $59.99/mo | price_xyz | Lead tracking, analytics, priority support, competitor snapshot |
| **Premium+ / POA** | $149+/mo | price_xyz | Custom landing page, AI assistant, dedicated support, unlimited everything |

### C.2 Pricing Copy

**Boost ($14.99/mo) - "Most Popular"**
> "Perfect for local service providers. Get discovered by customers actively searching for your services. Includes premium badge, up to 5 service areas, and photo gallery. Rank higher than free listings."

**Authority ($29.99/mo) - "Recommended for Growth"**
> "Designed for businesses ready to scale. Top placement in category, 10 service areas, featured status, plus a dedicated mini landing page optimized for conversions. Monthly profile refresh keeps you ahead."

**Lead Engine ($59.99/mo) - "For Serious Growth"**
> "Data-driven business growth. Track every click, call, and inquiry with built-in analytics. See exactly which suburb/service combo drives your leads. Includes priority support and competitor benchmarking."

**Premium+ ($149+/mo) - "Custom Solutions"**
> "Enterprise-level visibility. Dedicated AI-optimized landing page, personal business assistant, unlimited features, and hands-on implementation support. Perfect for multi-location operators and high-value services."

### C.3 Stripe Implementation

- Webhook processing (session.completed, subscription.deleted)
- Auto tier assignment on successful payment
- Billing portal (customer.manage)
- Featured slot limits (hard DB constraints)

---

## 🎨 TIER D: DIRECTORY UI/UX ENHANCEMENT

### D.1 Key Issues to Fix

| Issue | Fix |
|-------|-----|
| Tablet portrait overflow | Change grid to single column on tablet, reduce button width |
| No top "Add Business" | Add sticky button (top-right) + floating action button |
| List/Grid toggle overlap | Rework toolbar flex layout |
| Category chips wrapping badly | Use responsive grid with max-width |
| Images not optimized | `next/image` with srcset + lazy loading |
| Mobile touch targets | Increase button padding on mobile (min 44px) |

### D.2 Enhanced Business Card

**Improvements:**
- Image lazy loading (`next/image`)
- Hover effect (scale 1.02, shadow increase)
- "Claim & Upgrade" CTA more prominent
- Rating stars visible
- Verified badge (for claimed)
- Category color coding

### D.3 Advanced Filter Sidebar

**Left sidebar (sticky):**
- Location (checkbox list)
- Category (checkbox list)
- Rating (slider: 1-5 stars)
- Price tier (Free, Paid)
- Verified only (toggle)
- Clear all button

**Mobile:** Collapsible drawer

---

## 🏢 TIER E: BUSINESS DATA EXPANSION

### E.1 New Anchor Businesses

**Shane Smith Concreting** (Full details)
```json
{
  "name": "Shane Smith Concreting",
  "category": "Concrete Services",
  "phone": "0417 234 567",
  "email": "shane@smconcreting.com.au",
  "address": "All suburbs - Redlands",
  "description": "Professional concrete driveway, pathway, and structural work. 20+ years experience.",
  "tier": "featured",
  "imageSrc": "/images/concreting-banner.jpg"
}
```

**Russell Island Block Clearing & Building Services** (Steve & Sandy)
```json
{
  "name": "Russell Island Block Clearing & Building",
  "owners": "Steve & Sandy",
  "category": "Building & Land Clearing",
  "phone": "07 3409 5555",
  "address": "Russell Island QLD 4184",
  "description": "Specialising in island block clearing and new builds. Local expertise since 1998.",
  "tier": "featured"
}
```

### E.2 Image Strategy

| Business | Image Source | Type |
|----------|--------------|------|
| Sealink Ferry | Official logo / fleet photo | Brand asset |
| Redland Hospital | Hospital exterior | Public building |
| Russell Island Bowls | Blue bowling green photo | Local landmark |
| Macleay Island Bowls | Sunset over bay | Scenic/brand |
| Shane Smith Concreting | Finished concrete work | Portfolio |
| Russell Island Block Clearing | Excavator on island | Service in action |

**Implementation:**
- Store images in `/public/images/businesses/`
- Add `imageSrc` to Business model
- Use `next/image` with proper dimensions

### E.3 Category Expansion

From 22 to 100+ categories (will be progressive, not all at once):

```
Current (22):
- Cafe & Food
- Restaurants
- ...

To Add (Next 30):
- Concrete Services
- Land Clearing
- Excavation
- Landscaping Design
- Tree Surgery
- Deck Building
- Fencing
- Roofing
- Windows & Doors
- Guttering
- Plumbing Maintenance
- Electrical Services
- Solar Installation
- HVAC
- Pool Services
- Pest Control
- Cleaning Services (+ sub-types)
- Gardening Design
- Lawn Mowing
- Pressure Washing
- Car Detailing
- Auto Mechanics
- Welding
- Metalwork
- Painting & Decorating
- Flooring Installation
- Carpet Cleaning
- Upholstery
- Furniture Repair
- Hardware
```

---

## 📅 IMPLEMENTATION TIMELINE

### Phase 3.1 (Week 1-2): Commit v0.0.2 & Setup
- [ ] Finalize current TODO items
- [ ] Git commit all changes
- [ ] Push to current branch
- [ ] Tag release `v0.0.2`
- [ ] Create this PHASE_PLAN_V0.0.3.md
- [ ] Push plan to docs/
- [ ] Tag pre-release `v0.0.3-alpha`

### Phase 3.2 (Week 3-4): SEO Foundation
- [ ] Add Prisma schema extensions (SeoContent, StructuredData)
- [ ] Create new routes (suburbs, categories, suburb×category)
- [ ] Implement sitemap.ts + robots.txt
- [ ] Add metadata.ts with locality schema
- [ ] Generate initial AI content for 10 suburbs + 22 categories

### Phase 3.3 (Week 5-6): Comments & Reviews
- [ ] Add User, Comment, Rating models
- [ ] Create comment submission form (logged-in only)
- [ ] Build moderation queue (admin dashboard)
- [ ] Implement rating aggregation
- [ ] Add dummy test comments/ratings

### Phase 3.4 (Week 7-8): Stripe & Pricing
- [ ] Create Stripe products & prices
- [ ] Implement webhook processing
- [ ] Build checkout flow
- [ ] Add featured slot enforcement
- [ ] Create billing portal link

### Phase 3.5 (Week 9-10): UI/UX Enhancement
- [ ] Fix tablet overflow issues
- [ ] Add top "Add Business" button
- [ ] Enhanced business card design
- [ ] Advanced filter sidebar
- [ ] Image optimization (next/image)

### Phase 3.6 (Week 11-12): Business Data
- [ ] Add Shane Smith Concreting
- [ ] Add Steve & Sandy block clearing
- [ ] Add images for featured businesses
- [ ] Expand category list to 50+
- [ ] Seed test data for new categories

---

## 🎯 SUCCESS METRICS

| Metric | Target |
|--------|--------|
| Suburb pages indexed | 14 ✓ |
| Category pages indexed | 50+ ✓ |
| Suburb × Category pages | 700+ ✓ |
| Total indexable pages | 1,000+ ✓ |
| Google search visibility | Page 3-5 (Month 1) → Page 1 (Month 6) |
| Monthly unique visitors | 500 (Month 1) → 5,000+ (Month 6) |
| Monthly business signups | 5-10 → 30-50 |
| Conversion rate (free→paid) | 5% → 12%+ |
| Monthly recurring revenue | $500 → $15,000+ |
| Comment threads per business | 2-3 average |
| Avg rating | 4.2/5 stars |
| Featured slot occupancy | 60% → 95%+ |

---

## ⚙️ TECHNICAL DEBT CLEARED

- ✅ No client-side rendering of critical content
- ✅ Static generation (SSG) + ISR for all pages
- ✅ Proper indexing strategy (robots.txt)
- ✅ Schema markup on every page
- ✅ CDN optimized images
- ✅ Mobile-first responsive design
- ✅ Performance (Core Web Vitals)

---

## 🚨 IMPORTANT REMINDERS

1. **Never generate content at runtime.** Pre-generate, store, serve.
2. **Tier = truth.** DB tier field controls ranking, not manual ordering.
3. **Comments are moderated.** Never auto-publish.
4. **Ratings must be verified.** Only logged-in users, one per business.
5. **Stripe is authority.** Webhook updates always override UI changes.
6. **SEO is forever.** Once these pages are live and indexed, they're your moat.

---

## 📌 NEXT STEPS

1. **Complete v0.0.2 TODOs** (claim buttons, images, data)
2. **Commit & push to current branch**
3. **Tag v0.0.2 release**
4. **Create new branch: `feature/v0.0.3-seo-engine`**
5. **Implement Phase 3.1 setup**
6. **Roll forward to Phase 3.2 (SEO Foundation)**

---

**Document Version:** 1.0  
**Last Updated:** January 19, 2026  
**Owner:** Development Team  
**Status:** Ready for Implementation
