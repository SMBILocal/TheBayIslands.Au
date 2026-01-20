# TheBayIslands.Au — Local Hub

Next.js 14 (app router) platform for Bay Islands: articles, jobs, events, classifieds, and a business directory with claim + upgrade flows.

## Quick start
1) Install dependencies
```bash
npm install
```
2) Run dev server
```bash
npm run dev
# open http://localhost:3000
```
3) Optional: seed sample data (requires `.env.local` Supabase keys)
```bash
node scripts/seed.js
```

## Branches & tags
- Current working branch: `thebayislands.au-v0.0.3`
- Last release tag: `v0.0.2`
- Phase plan: [docs/plans/PHASE_PLAN_V0.0.3.md](docs/plans/PHASE_PLAN_V0.0.3.md)

## Documentation library
- Index: [docs/DOCUMENTATION-INDEX.md](docs/DOCUMENTATION-INDEX.md)
- Release summaries: [docs/releases/V0.0.2-FINAL-SUMMARY.md](docs/releases/V0.0.2-FINAL-SUMMARY.md)
- Claim flow: [CLAIM_LISTING_IMPLEMENTATION.md](CLAIM_LISTING_IMPLEMENTATION.md)
- Folder guide: [docs/overview/FOLDER_GUIDE.md](docs/overview/FOLDER_GUIDE.md)
- Legal templates: [docs/LEGAL-PAGES-CONTENT.md](docs/LEGAL-PAGES-CONTENT.md)

## What’s built (v0.0.2)
- Directory with search, filters, and claim buttons (cards + detail pages)
- Claim modal on `/upgrade` with prefilled business data
- Seeded 45+ businesses with statuses (featured/claimed/unclaimed)
- Pricing tiers (UI) ready for Stripe wiring

## What’s next (v0.0.3)
- SEO pages (suburb, category, suburb×category)
- Comments & reviews system
- Stripe tier enforcement (monthly / 6-month / annual billing)
- UI polish (footer links, responsive fixes)

## Supabase notes
- Configure `.env.local` with Supabase service role and anon keys
- Apply RLS policies from `supabase/policies.sql`
- Use `supabase/schema-v0.0.2.sql` for baseline schema

## Contributing
- Run `npm run lint` before pushing
- Keep docs updated when flows or billing rules change

#