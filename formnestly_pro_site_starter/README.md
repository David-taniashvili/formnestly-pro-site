# FormNestly Studio — Pro Site Starter (Next.js 15 + Tailwind + Supabase)

A production-grade starter aligned to your plan: fast, SEO-friendly, and scalable.

## Quick Start

```bash
# 1) Install deps
npm i

# 2) Copy envs
cp .env.example .env.local
# Fill NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY (optional during local dev)

# 3) Run dev
npm run dev
```

Open http://localhost:3000

## Supabase

Use the SQL below to create the schema (or push via your usual migrations):

- `supabase/schema.sql`

The site reads from local JSON seeds (`/data/*.json`) for now.
Switch to Supabase by creating tRPC/data-fetchers or page-level `getStaticProps` that query Supabase.

## Payments (Later)

Integrate Paddle or Lemon Squeezy in `/pages/api/checkout.ts` and client-side CTAs.

## Lint, Format, CI

- ESLint + Prettier are configured.
- Husky + lint-staged pre-commit hook.

## Performance

- Mobile-first, lazy images, static sitemap + robots.
- Aim for LCP <= 1.5s with image optimization (Cloudinary/Next/Image).

## Structure

- `pages/` routes (per your plan).
- `components/` common UI.
- `data/` JSON seeds (swap to Supabase later).
- `lib/supabase.ts` client (optional in local dev).

## License

Private, for FormNestly Studio projects.
