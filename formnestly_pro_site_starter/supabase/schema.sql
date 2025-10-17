-- templates table
create table if not exists public.templates (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text not null check (category in ('Resume','Invoice','Proposal','Other')),
  description text,
  features text[] default '{}',
  price numeric(10,2) not null default 0.00,
  etsy_url text,
  cover_img text,
  gallery text[] default '{}',
  tools text[] default '{}',
  inserted_at timestamp with time zone default now()
);

-- subscribers table
create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null check (position('@' in email) > 1),
  source text,
  created_at timestamp with time zone default now()
);

-- blog_posts table
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  body_md text not null,
  tags text[] default '{}',
  created_at timestamp with time zone default now()
);
