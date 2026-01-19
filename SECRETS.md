Repository Secrets — where to paste values

Add the following repository secrets in GitHub (Settings → Secrets and variables → Actions → New repository secret).
Use these exact secret names (no spaces):

- `NEXT_PUBLIC_SUPABASE_URL` — your Supabase Project URL (example: https://xyzcompany.supabase.co)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` — the public/anon API key from Supabase (client-safe)
- `SUPABASE_SERVICE_ROLE_KEY` — the service_role key (server-only, do NOT expose to client)
- `NEXT_PUBLIC_APP_URL` — your site URL (optional, e.g. https://thebayislands.au or http://localhost:3000)

How to paste them:
1. Open your repository on GitHub.
2. Go to Settings → Secrets and variables → Actions.
3. Click "New repository secret" for each name above and paste the corresponding value.

Notes and best practices:
- Do NOT add spaces in secret names. Use underscores as shown.
- Never expose `SUPABASE_SERVICE_ROLE_KEY` with a `NEXT_PUBLIC_` prefix.
- For local development, copy these names into a `.env.local` file at the repo root.
- If you want CI jobs to seed data, use `SUPABASE_SERVICE_ROLE_KEY` in Actions but keep it private.

Supabase keys location:
Project → Settings → API → Project URL, anon/public key, service_role key
