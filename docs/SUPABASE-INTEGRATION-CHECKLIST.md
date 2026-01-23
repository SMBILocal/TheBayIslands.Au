# Supabase Integration Checklist (Production)

## 1) Environment Variables (local + GitHub Actions)
- `NEXT_PUBLIC_SUPABASE_URL=https://jazreuartewyrmbfhtdz.supabase.co`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=<publishable-key>` (browser)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key>` (legacy fallback)
- `SUPABASE_SERVICE_ROLE_KEY=<service-role-key>` (server only)
- Optional Stripe keys: `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`

### GitHub Secrets mapping
- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- (Optional) `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY` if CI needs client builds

## 2) Migration Order (run in Supabase SQL Editor)
1. `supabase/schema-v0.0.2.sql` (core tables + RLS)
2. `supabase/migration-v0.0.3-subscriptions.sql` (subs + moderation fields)
3. `supabase/schema-v0.0.5-content-approval.sql` (approval workflow + moderation)
4. `supabase/policies.sql` (public read for legacy scaffold tables; optional if only v0.0.2 tables are used)

> If an older scaffold exists (articles/jobs/events/businesses/classifieds from `schema.sql`), migrate to the v0.0.2 tables. Keep v0.0.2 as the source of truth going forward.

## 3) Seeding
- Use `node scripts/seed-v0.0.2.js` (service-role key required).
- GitHub workflow `.github/workflows/seed.yml` points to this script.
- The seed creates one admin user and sample directory/jobs/events/classifieds data with approved statuses.

## 4) Clients & Config
- Client: `lib/supabaseClient.ts` (uses publishable key with anon fallback).
- Admin/server: `lib/supabaseAdmin.ts` (uses service role; no session persistence).
- Environment templates: `.env.example` (updated). `.env.local` sanitized; fill with real values locally.

## 5) Security & RLS
- RLS enabled on all v0.0.2 tables; service role bypasses RLS.
- Public read policies already included for active content.
- Approval workflow (v0.0.5) updates statuses via triggers; seed data is pre-approved.

## 6) Connection Strings (examples)
- Direct: `postgresql://postgres:<password>@db.jazreuartewyrmbfhtdz.supabase.co:5432/postgres`
- Pooler: `postgresql://postgres.jazreuartewyrmbfhtdz:<password>@aws-1-ap-southeast-2.pooler.supabase.com:6543/postgres?pgbouncer=true`

## 7) Action Items
- [ ] Rotate publishable and service-role keys (prior keys were in repo/docs).
- [ ] Set GitHub secrets to the rotated values.
- [ ] Apply migrations in order (v0.0.2 → v0.0.3 → v0.0.5 → policies).
- [ ] Run `node scripts/seed-v0.0.2.js` to verify data.
- [ ] Point frontend search/directory/jobs/events/classifieds APIs to Supabase queries (next step).

## 8) Validation Steps
- `npm run lint` and `npm run dev` should still succeed with envs loaded.
- From Supabase SQL, verify counts: `select count(*) from directory_listings;` etc.
- From the app, hit `/directory`, `/jobs`, `/events`, `/classifieds` once APIs are wired to Supabase.

## 9) Notes
- Do not commit real secrets. Use `.env.local` locally and GitHub secrets for CI.
- Service role must stay server-only. Publishable/anon are browser-safe only when RLS is active.
