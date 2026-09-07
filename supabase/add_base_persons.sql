-- Run this in the Supabase SQL Editor to add per-person pricing support to an existing houses table.
alter table houses add column if not exists base_persons integer not null default 2;
