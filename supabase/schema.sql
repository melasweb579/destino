-- Run this once in the Supabase SQL editor (or `psql`) to create the houses table.

create table if not exists houses (
  id text primary key,
  num text,
  name text not null,
  cloudinary_folder text,
  location text,
  capacity integer,
  rooms integer,
  bathrooms integer,
  garage integer,
  price numeric(10, 2) not null,
  currency text not null default 'USD',
  hue integer,
  shots text[] not null default '{}',
  description text,
  description2 text,
  amenities text[] not null default '{}',
  updated_at timestamptz not null default now()
);

create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists houses_set_updated_at on houses;
create trigger houses_set_updated_at
  before update on houses
  for each row
  execute function set_updated_at();

-- Public site only ever reads; writes go through the service role key from the admin panel.
alter table houses enable row level security;

drop policy if exists "Public read access" on houses;
create policy "Public read access"
  on houses for select
  using (true);
