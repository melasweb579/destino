import { createClient } from '@supabase/supabase-js';

function client(key) {
  return createClient(process.env.SUPABASE_URL, key, {
    auth: { persistSession: false },
  });
}

// Read-only: RLS only grants this key SELECT on `houses`.
export function getSupabase() {
  return client(process.env.SUPABASE_ANON_KEY);
}

// Bypasses RLS — server-only, used by the admin panel to write. Never expose to the client.
export function getSupabaseAdmin() {
  return client(process.env.SUPABASE_SERVICE_ROLE_KEY);
}
