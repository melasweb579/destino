-- Run this in the Supabase SQL Editor to add Google Maps support to an existing houses table.
alter table houses add column if not exists maps_url text;
