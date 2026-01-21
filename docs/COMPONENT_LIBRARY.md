# 🎨 Component Library & UI Index

## Overview
Complete visual reference for all components, their props, usage patterns, and styling.

---

## 1. Layout Components

### Navbar
**Path:** `components/Navbar.tsx`

**Features:**
- Logo display (SMBI branding)
- Navigation links to all 5 main sections
- Hamburger menu on mobile (≤768px)
- Sticky header positioning
- Dark mode ready

**Props:** None (uses Next/link internally)

**Usage:**
```tsx
import Navbar from '@/components/Navbar';

export default function Layout() {
  return (
    <>
      <Navbar />
      {/* page content */}
    </>
  );
}
```

**Mobile Behavior:**
- Hamburger icon visible on small screens
- Full width navigation menu slides in from left
- Menu closes on link click
- Z-index ensures it sits above content

---

### Footer
**Path:** `components/Footer.tsx`

**Features:**
- Social media links
- Copyright notice
- Contact information
- Responsive column layout

**Props:** None

**Usage:**
```tsx
import Footer from '@/components/Footer';

export default function Layout() {
  return (
    <>
      {/* content */}
      <Footer />
    </>
  );
}
```

---

## 2. Listing Display Components

### ListingCard
**Path:** `components/ListingCard.tsx`

**Features:**
- Title, subtitle, description display
- Price/salary display
- Link integration with Next/link
- Hover animation (lift effect)
- Responsive spacing

**Props:**
```typescript
interface Props {
  id?: string;
  title: string;
  subtitle: string;
  description?: string;
  price?: string;
  href?: string;
}
```

**Usage:**
```tsx
<ListingCard
  title="Software Developer"
  subtitle="Tech Startup"
  description="Full-time • Russell Island"
  price="$60k - $80k"
  href="/jobs/123"
/>
```

**CSS Classes Used:**
- `.card` - Base card styling
- `.muted` - For subtitle/description
- `.cta` - For buttons

---

### ImageCard
**Path:** `components/ImageCard.tsx`

**Features:**
- Full-width image display
- Overlay badge support
- Title and metadata below image
- Hover zoom effect
- Responsive aspect ratio

**Props:**
```typescript
interface Props {
  image?: string;
  title: string;
  subtitle?: string;
  description?: string;
  price?: string;
  badge?: string;
}
```

**Usage:**
```tsx
<ImageCard
  image="https://example.com/photo.jpg"
  title="Used Kayak"
  subtitle="North Stradbroke Island"
  description="Good condition — pickup available"
  price="$350"
  badge="Featured"
/>
```

**CSS Classes Used:**
- `.image-card` - Container
- `.image-card-image` - Image wrapper
- `.image-card-content` - Text content
- `.badge` - Badge styling

---

## 3. Search & Filter Components

### SearchFilter
**Path:** `components/SearchFilter.tsx`

**Features:**
- Real-time search input
- Collapsible filter panel
- Category dropdown
- Location dropdown
- Clear filters button
- Callback-based integration

**Props:**
```typescript
interface Props {
  onSearch: (query: string) => void;
  onFilter: (filters: { category?: string; location?: string }) => void;
  categories: string[];
  locations: string[];
}
```

**Usage:**
```tsx
<SearchFilter
  onSearch={(query) => {
    // Filter items based on query
  }}
  onFilter={(filters) => {
    // Apply category/location filters
  }}
  categories={['Full-time', 'Part-time', 'Contract']}
  locations={['Russell Island', 'Macleay Island', ...]}
/>
```

**CSS Classes Used:**
- `.search-filter` - Container
- `.search-row` - Input row
- `.filter-panel` - Collapsible section
- `.filter-group` - Individual filter field

**Responsive Behavior:**
- On mobile: Stacks vertically
- On desktop: Grid layout with dropdowns
- Filter panel collapses/expands smoothly

---

## 4. Form Components

### AuthModal
**Path:** `components/AuthModal.tsx`

**Features:**
- Login/signup toggle
- Email input
- Password input
- Name field (signup only)
- Loading state
- Modal overlay with backdrop

**Props:**
```typescript
interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { email: string; password: string; name?: string }) => void;
  mode: 'login' | 'signup';
}
```

**Usage:**
```tsx
const [isOpen, setIsOpen] = useState(false);

<AuthModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onSubmit={(data) => {
    // Send to Supabase Auth
  }}
  mode="login"
/>
```

**CSS Classes Used:**
- `.modal-overlay` - Backdrop
- `.modal-content` - Modal box
- `.form-group` - Input group
- `.modal-close` - Close button

---

### ListingForm
**Path:** `components/ListingForm.tsx`

**Features:**
- Title input
- Location dropdown (8 options)
- Description textarea
- Category selector
- Price input (optional)
- Dynamic fields by type
- Form validation ready

**Props:**
```typescript
interface Props {
  type: 'job' | 'business' | 'classified';
  onSubmit: (data: any) => void;
  initialData?: Record<string, any>;
}
```

**Usage:**
```tsx
<ListingForm
  type="job"
  onSubmit={(data) => {
    // POST to /api/jobs
  }}
/>
```

**Location Options:**
1. Russell Island
2. Macleay Island
3. North Stradbroke Island
4. Lamb Island
5. Cleveland
6. Redland Bay
7. Wellington Point
8. Victoria Point

**CSS Classes Used:**
- `.listing-form` - Container
- `.form-group` - Input container
- `.form-group input/textarea/select` - Form fields

---

## 5. Page Components

### Home Page
**Path:** `app/page.tsx`

**Features:**
- Hero section with gradient background
- Call-to-action buttons
- Featured sections
- Mobile responsive layout

**Key Elements:**
- Logo and title
- "Browse" buttons to each section
- Island-themed colors

---

### List Pages (Articles, Jobs, Events, Directory, Classifieds)
**Path:** `app/[section]/page.tsx`

**Features:**
- Integrated SearchFilter component
- Grid/list layout
- Sidebar with CTAs
- Loading states
- API data fetching with fallback
- Category/featured pills

**Client-Side Logic:**
- Search filtering
- Category filtering
- Location filtering
- Real-time result updates

---

### Detail Pages
**Path:** `app/[section]/[id]/page.tsx`

**Features:**
- Full content rendering
- Hero section with island colors
- Sidebar information
- Share buttons
- CTA buttons
- Related items section
- 404 handling

**Island Color Mapping:**
```typescript
const getIslandColor = (location: string) => {
  if (location.includes('Russell')) return 'island-russell';
  if (location.includes('Macleay')) return 'island-macleay';
  if (location.includes('Stradbroke')) return 'island-stradbroke';
  if (location.includes('Lamb')) return 'island-lamb';
  return '';
};
```

---

## 6. Global Styles & Design System

### CSS Variables
**Path:** `styles/globals.css`

**Color Palette:**
```css
/* Primary Colors */
--color-primary: #ff6b3d;      /* SMBI Orange */
--color-accent: #ff6b3d;
--color-accent-600: #e54a1f;   /* Darker shade */

/* Text Colors */
--color-text: #1a202c;
--color-text-light: #4a5568;
--color-muted: #718096;

/* Backgrounds */
--color-bg: #f7fafc;
--color-bg-light: #ffffff;

/* UI Elements */
--color-border: #e2e8f0;
--color-success: #48bb78;
--color-danger: #f56565;

/* Island Colors */
--island-russell-primary: #0066b3;
--island-macleay-primary: #c85a17;
--island-stradbroke-primary: #006994;
--island-lamb-primary: #2d5016;
```

**Typography:**
```css
/* Font Stack */
-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif

/* Font Sizes */
H1: clamp(32px, 5vw, 48px)
H2: 24px
H3: 18px
Body: 16px
Small: 13-14px
```

**Spacing Scale:**
- xs: 4px
- s: 8px
- m: 12px
- lg: 16px
- xl: 20px
- 2xl: 24px
- 3xl: 32px
- 4xl: 40px

**Shadows:**
```css
--shadow-sm: 0 2px 8px rgba(0,0,0,0.05);
--shadow-md: 0 4px 16px rgba(0,0,0,0.08);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.12);
```

**Border Radius:**
```css
--radius: 12px;
```

---

## 7. Utility Classes

### Text Utilities
```css
.muted        /* Lighter text color for secondary info */
.link-reset   /* Remove default link styling */
.text-center  /* Center aligned text */
```

### Layout Utilities
```css
.hero              /* Full-width hero section */
.detail-hero       /* Hero on detail pages with gradient */
.content-container /* Max-width centered container */
.list-view         /* Two-column layout (main + sidebar) */
.list-main         /* Left column for list */
.list-side         /* Right column for sidebar */
.grid              /* Responsive grid */
```

### Component Classes
```css
.card              /* Card container with border & shadow */
.pill              /* Inline badge/tag styling */
.cta               /* Call-to-action button */
.cta.secondary     /* Secondary CTA button */
.form-group        /* Form input container */
.search-row        /* Search input + button row */
```

---

## 8. Responsive Breakpoints

```css
/* Mobile First */
< 480px:   Extra small screens (phones)
480-768px: Small screens (tablets)
768-1024: Medium screens (tablets/small desktops)
> 1024px:  Large screens (desktops)

/* Hamburger Menu Breakpoint */
@media (max-width: 768px) {
  .nav-links { display: none; }
  .hamburger { display: block; }
}
```

---

## 9. Animation & Transitions

### Built-in CSS Transitions
```css
/* Smooth hover effects */
transition: all 0.3s;

/* Card hover lift */
transform: translateY(-6px);
box-shadow: 0 12px 32px rgba(0,0,0,0.12);

/* Button feedback */
opacity: 0.8 on :active;

/* Hamburger menu animation */
max-height animation on open/close
```

---

## 10. Component Composition Pattern

### Example: Creating a Job List Page
```tsx
'use client';

import { useState, useEffect } from 'react';
import ListingCard from '@/components/ListingCard';
import SearchFilter from '@/components/SearchFilter';

export default function JobsPage() {
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const handleSearch = (query) => {
    // Filter logic
  };

  const handleFilter = (filters) => {
    // Apply filters
  };

  return (
    <main>
      <section className="hero">
        <h1>Jobs & Careers</h1>
      </section>

      <div className="content-container">
        <SearchFilter
          onSearch={handleSearch}
          onFilter={handleFilter}
          categories={[...]}
          locations={[...]}
        />

        <div className="list-view">
          <div className="list-main">
            {filtered.map(item => (
              <ListingCard key={item.id} {...item} />
            ))}
          </div>
          <aside className="list-side">
            {/* Sidebar CTAs */}
          </aside>
        </div>
      </div>
    </main>
  );
}
```

---

## 11. Quick Component Reference

| Component | Path | Type | Props | Use Case |
|-----------|------|------|-------|----------|
| Navbar | `components/Navbar.tsx` | Layout | None | Header |
| Footer | `components/Footer.tsx` | Layout | None | Footer |
| ListingCard | `components/ListingCard.tsx` | Display | id, title, subtitle... | List items |
| ImageCard | `components/ImageCard.tsx` | Display | image, title, price... | Gallery items |
| SearchFilter | `components/SearchFilter.tsx` | Form | onSearch, onFilter... | Search/filter |
| AuthModal | `components/AuthModal.tsx` | Form | isOpen, onSubmit... | Auth |
| ListingForm | `components/ListingForm.tsx` | Form | type, onSubmit... | Create/edit |

---

## 12. Best Practices

### Component Usage
✅ Always import components with `@/components/` alias
✅ Use TypeScript interfaces for props
✅ Pass callbacks for parent-child communication
✅ Use CSS classes for styling, avoid inline styles

### Page Creation
✅ Mark pages with `'use client'` if using hooks
✅ Use SearchFilter on list pages
✅ Include loading states
✅ Add fallback content if API fails

### Styling
✅ Use CSS variables for colors
✅ Follow mobile-first responsive approach
✅ Use clamp() for responsive font sizes
✅ Apply island colors based on location

---

**Last Updated:** January 2026  
**Component Library Version:** 1.0
