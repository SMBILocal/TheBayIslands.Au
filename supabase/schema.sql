-- Supabase schema: simple tables for scaffold
create table if not exists articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique,
  excerpt text,
  content text,
  published_at timestamptz default now()
);

create table if not exists jobs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  company text,
  location text,
  description text,
  posted_at timestamptz default now()
);

create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  starts_at timestamptz,
  location text,
  description text
);

create table if not exists businesses (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text,
  location text,
  description text
);

create table if not exists classifieds (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  price text,
  location text,
  description text,
  posted_at timestamptz default now()
);
