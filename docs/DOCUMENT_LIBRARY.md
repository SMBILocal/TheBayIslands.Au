# Documentation Library (User & Admin)

Use this as the source of truth for in-product help center and internal admin docs.

## User Help (public / logged-in)
- Getting started: `YOUR-NEXT-3-STEPS.md`, `QUICK-START.md`
- Managing listings: `CLAIM_LISTING_IMPLEMENTATION.md` (user-facing summary needed), upgrade tiers and billing cadence (monthly / 6-month / annual)
- Directory usage: search, filters, categories, locations
- Account & billing: upgrading, downgrading, cancellations, refunds window, receipts
- Policies: Terms of Service, Privacy, Cookies, Refund & Cancellation, Environmental

## Admin Handbook (staff-only)
- Moderation: comments/reviews, claims, spam controls
- Billing ops: Stripe dashboard, refunds, proration rules, discounts by cadence
- Data quality: business verification checklist, image standards, hours formatting
- Support playbooks: common user questions, escalation paths
- Deployment: release process, tagging, rollback, backups

## Engineering Reference
- Architecture: `DATABASE-ARCHITECTURE.md`, `supabase/schema-v0.0.2.sql`
- Phase plans: `PHASE_PLAN_V0.0.3.md`, `V0.0.2-IMPLEMENTATION-GUIDE.md`
- API: `app/api/*` routes overview
- Components: `components/` directory summary (see `FOLDER_GUIDE.md`)

## Legal Templates
- See `docs/LEGAL-PAGES-CONTENT.md` for Terms, Privacy, Cookies, Refund/Cancellation, Environmental.

## How to Publish in Help Center
- Audience tags: `user`, `admin`, or `engineering`.
- Add frontmatter with `title`, `audience`, `last_updated`, `version`.
- Keep billing cadences in sync (monthly, 6-month, annual + discounts).
- When flows change, update both the relevant doc and link from `DOCUMENTATION-INDEX.md`.
