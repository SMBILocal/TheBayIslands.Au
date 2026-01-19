# thebayislands.au — Local hub scaffold

This repository contains a Next.js (app-router) scaffold for the Bay Islands local hub: Articles, Jobs, Community Events, Business Directory and Buy & Sell classifieds.


Quick start

1. Install dependencies:

```bash
cd thebayislands.au
npm install
```

2. Run dev server and preview in browser:

```bash
npm run dev
# open http://localhost:3000 in your browser
```

3. Seed sample data (after creating `.env.local` with your Supabase credentials):

```bash
# create .env.local from .env.example and fill values
node scripts/seed.js
```

Notes
- This is a structural scaffold with sample pages and components. Replace dummy content with real listings and integrate Supabase or your chosen backend for data and auth.
- Styling is in `styles/globals.css` and components live in `components/`.
- The app will fetch from the local API routes (`/api/*`) so you can preview without extra env vars; however for seeding and server operations you must set Supabase keys in `.env.local`.

Supabase RLS (safe public reads)
- A `supabase/policies.sql` file is included with SQL to enable Row Level Security (RLS) and add safe public `SELECT` policies for the scaffold tables. Run that SQL in the Supabase SQL editor (Project → SQL Editor) after creating your tables.

Running in CI / GitHub Actions
- Add secrets to GitHub as described in `SECRETS.md` and run the `Seed Supabase` workflow or trigger it from Actions → Workflows → Seed Supabase → Run workflow.

# TheBayIslands.Au