import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

// Auth-aware client for Server Components / Server Actions (login, logout, session checks).
// Table reads/writes still go through lib/houses.js + lib/supabase.js.
export function createSupabaseServerClient() {
  const cookieStore = cookies();

  return createServerClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // Called from a Server Component render; middleware refreshes the session instead.
        }
      },
    },
  });
}
