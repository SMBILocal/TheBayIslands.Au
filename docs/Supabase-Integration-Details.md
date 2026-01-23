Supabase Integration (sanitized)
================================

**Project**: `jazreuartewyrmbfhtdz` (production)  
**Region**: ap-southeast-2  

> Secrets have been removed. Obtain fresh keys from Supabase → Project Settings → API. Rotate any previously exposed keys immediately.

Required environment variables
------------------------------
- `NEXT_PUBLIC_SUPABASE_URL=https://jazreuartewyrmbfhtdz.supabase.co`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=<publishable-key>` (browser-safe)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key>` (legacy fallback)
- `SUPABASE_SERVICE_ROLE_KEY=<service-role-key>` (server only, secret)

Migration order (run in Supabase SQL editor)
-------------------------------------------
1) `supabase/schema-v0.0.2.sql` (core tables + RLS)
2) `supabase/migration-v0.0.3-subscriptions.sql` (subscriptions/moderation fields)
3) `supabase/schema-v0.0.5-content-approval.sql` (moderation workflow)
4) `supabase/policies.sql` (public read policies for legacy scaffold tables, optional if only v0.0.2 tables exist)

Seeding
-------
- Use `scripts/seed-v0.0.2.js` (service-role required).
- GitHub Actions workflow `.github/workflows/seed.yml` uses secrets: `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`.

Connection strings (examples)
-----------------------------
- Direct: `postgresql://postgres:<password>@db.jazreuartewyrmbfhtdz.supabase.co:5432/postgres`
- Pooler: `postgresql://postgres.jazreuartewyrmbfhtdz:<password>@aws-1-ap-southeast-2.pooler.supabase.com:6543/postgres?pgbouncer=true`

Security notes
--------------
- Rotate any publishable/secret keys previously stored in docs or .env files.
- Keep `SUPABASE_SERVICE_ROLE_KEY` out of client bundles and commits.
- RLS is enabled by schema; service role bypasses RLS and is for backend tasks only.
Some platforms are IPv4-only:

A few major platforms are IPv4-only and may not work with a Direct Connection:



Vercel
