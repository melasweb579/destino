// Small line icons for the four stats. stroke = currentColor.
const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };

export function CapacityIcon({ size = 19 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c.4-3 2.8-5 5.5-5s5.1 2 5.5 5" />
      <path d="M15.5 6.2a2.8 2.8 0 0 1 0 5.3" />
      <path d="M17.2 19c-.2-2-1-3.6-2.3-4.6" />
    </svg>
  );
}
export function RoomsIcon({ size = 19 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base}>
      <path d="M3 18v-7h13a4 4 0 0 1 4 4v3" />
      <path d="M3 11V7" /><path d="M3 14.5h17" /><path d="M7 11V8.6h4.6V11" />
    </svg>
  );
}
export function BathIcon({ size = 19 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base}>
      <path d="M5 11V6.6A2.4 2.4 0 0 1 9.4 5.2" />
      <path d="M3 11h18v2.4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
      <path d="M6.5 17.4 5.5 20" /><path d="M17.5 17.4 18.5 20" />
    </svg>
  );
}
export function GarageIcon({ size = 19 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...base}>
      <path d="M5 11l1.4-3.6A2 2 0 0 1 8.3 6h7.4a2 2 0 0 1 1.9 1.4L19 11" />
      <path d="M4 11.5h16V16H4z" />
      <circle cx="7.5" cy="16.4" r="1.3" /><circle cx="16.5" cy="16.4" r="1.3" />
    </svg>
  );
}
export function CheckIcon({ size = 13 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5l4 4 10-10" />
    </svg>
  );
}
export function WhatsAppIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.985-1.378A9.945 9.945 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 0 1-4.297-1.256l-.308-.183-3.186.882.843-3.11-.2-.32A7.96 7.96 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" />
    </svg>
  );
}
