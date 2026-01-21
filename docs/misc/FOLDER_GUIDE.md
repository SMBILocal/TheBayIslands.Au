# Folder Guide (v0.0.3)

High-level map so new contributors, staff, and admins know where things live.

## Root
- `app/` — Next.js app router pages and API routes.
- `components/` — Reusable UI components.
- `lib/` — Helpers, Supabase clients, metadata, structured data.
- `styles/` — Global styles and shared CSS.
- `public/` — Static assets.
- `scripts/` — Seed and setup scripts.
- `supabase/` — SQL schema and policies.
- `docs/` — Reference docs, plans, and legal templates.

## app/
- `layout.tsx` — Root layout.
- `page.tsx` — Landing page.
- `api/` — REST-ish endpoints (directory, articles, jobs, events, classifieds, upload).
- `directory/` — Directory listing page + dynamic detail pages.
- `areas/` — Island and mainland area pages.
- `articles/`, `events/`, `classifieds/`, `jobs/` — Vertical hubs (list + detail routes).
- `login/`, `signup/`, `upgrade/` — Auth and pricing/upgrade surfaces.

## components/
- Cards: `BusinessCard`, `ListingCard`, `ClassifiedCard`, `ImageCard`.
- Layout: `Navbar`, `Footer`, `Breadcrumb`, `FilterPanel`, `SearchFilter`.
- Forms & modals: `ListingForm`, `ListingForm` (forms directory), `AuthModal`, `FormModal`, `ImageUpload`.

## lib/
- Data access: `database.queries.ts`, `database.types.ts`.
- Supabase clients: `supabaseClient.ts`, `supabaseAdmin.ts`.
- SEO: `metadata.ts`, `metadata-v2.ts`, `structured-data.ts`.
- Utilities: `image-optimization.ts`, `locations.ts`, `businessCategories.ts`.

## docs/
- Plans: `PHASE_PLAN_V0.0.3.md`, `V0.0.2-IMPLEMENTATION-GUIDE.md`, `V0.0.2-SUMMARY.md`.
- How-to: `QUICK-START.md`, `YOUR-NEXT-3-STEPS.md`, `SUPABASE-SETUP-CHECKLIST.md`.
- Architecture: `DATABASE-ARCHITECTURE.md`, `BUILD-SUMMARY.md`, `DASHBOARD.md`.
- Legal templates: `LEGAL-PAGES-CONTENT.md`.

## scripts/
- `seed.js` — Seed sample data (requires Supabase keys).
- `setup-supabase.sh` — Bootstrap script for Supabase project.
- `test-db.ts` — Connectivity sanity check.

## supabase/
- `schema.sql`, `schema-v0.0.2.sql` — Database schema.
- `policies.sql` — RLS policies.

## Versioning
- Working branch: `thebayislands.au-v0.0.3`
- Release tags: see `git tag -l 'v0.*'`
