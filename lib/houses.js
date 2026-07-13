import data from '@/data/houses.json';

// Data access layer — swap this file for a real DB/CMS later without touching components.
export function getHouses() {
  return data.houses;
}

export function getHouse(id) {
  return data.houses.find((h) => h.id === id) || null;
}

export function getHouseIds() {
  return data.houses.map((h) => h.id);
}

export function formatPrice(price, currency = 'USD') {
  return '$' + Number(price).toLocaleString('en-US');
}

// Striped warm placeholder used until an external image URL is provided.
export function placeholderBg(hue, index = 0, dark = false) {
  const l = (dark ? 0.86 : 0.89) - index * 0.012;
  const base = `oklch(${l} 0.034 ${hue})`;
  const stripe = `oklch(${(l - 0.04).toFixed(3)} 0.046 ${hue - 6})`;
  return `repeating-linear-gradient(135deg, ${base} 0 18px, ${stripe} 18px 36px)`;
}
