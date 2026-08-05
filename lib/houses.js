import { getSupabase, getSupabaseAdmin } from './supabase';

const CAMEL_TO_COLUMN = {
  cloudinaryFolder: 'cloudinary_folder',
  mapsUrl: 'maps_url',
};

function fromRow(row) {
  return {
    id: row.id,
    num: row.num,
    name: row.name,
    cloudinaryFolder: row.cloudinary_folder,
    location: row.location,
    mapsUrl: row.maps_url,
    capacity: row.capacity,
    rooms: row.rooms,
    bathrooms: row.bathrooms,
    garage: row.garage,
    price: row.price,
    currency: row.currency,
    hue: row.hue,
    shots: row.shots ?? [],
    images: [],
    description: row.description,
    description2: row.description2,
    amenities: row.amenities ?? [],
  };
}

export async function getHouses() {
  const { data, error } = await getSupabase()
    .from('houses')
    .select('*')
    .order('num', { ascending: true });
  if (error) throw error;
  return data.map(fromRow);
}

export async function getHouse(id) {
  const { data, error } = await getSupabase()
    .from('houses')
    .select('*')
    .eq('id', id)
    .maybeSingle();
  if (error) throw error;
  return data ? fromRow(data) : null;
}

export async function getHouseIds() {
  const { data, error } = await getSupabase().from('houses').select('id');
  if (error) throw error;
  return data.map((row) => row.id);
}

// Admin-only: partial update of a house's info (price, description, amenities, etc).
// `patch` uses the same camelCase keys as the objects returned above.
export async function updateHouse(id, patch) {
  const row = {};
  for (const [key, value] of Object.entries(patch)) {
    row[CAMEL_TO_COLUMN[key] || key] = value;
  }

  const { data, error } = await getSupabaseAdmin()
    .from('houses')
    .update(row)
    .eq('id', id)
    .select()
    .maybeSingle();
  if (error) throw error;
  return data ? fromRow(data) : null;
}

export function formatPrice(price, currency = 'USD') {
  return '$' + Number(price).toLocaleString('en-US');
}

// Admins often paste the whole <iframe> snippet Google gives you instead of just the src URL — pull it out.
export function extractMapsSrc(input) {
  if (!input) return null;
  const match = String(input).match(/src=["']([^"']+)["']/i);
  return (match ? match[1] : String(input)).trim() || null;
}

// Normalizes a pasted Google Maps link into an iframe-safe embed src.
// Google only allows framing on its dedicated embed URLs (`/maps/embed` or `?output=embed`) —
// plain google.com/maps pages and maps.app.goo.gl short links refuse to render in an <iframe>.
export function toMapsEmbedSrc(url) {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('goo.gl')) return null;
    if (parsed.pathname.startsWith('/maps/embed') || parsed.searchParams.get('output') === 'embed') {
      return url;
    }
    parsed.searchParams.set('output', 'embed');
    return parsed.toString();
  } catch {
    return null;
  }
}

// Striped warm placeholder used until an external image URL is provided.
export function placeholderBg(hue, index = 0, dark = false) {
  const l = (dark ? 0.86 : 0.89) - index * 0.012;
  const base = `oklch(${l} 0.034 ${hue})`;
  const stripe = `oklch(${(l - 0.04).toFixed(3)} 0.046 ${hue - 6})`;
  return `repeating-linear-gradient(135deg, ${base} 0 18px, ${stripe} 18px 36px)`;
}
