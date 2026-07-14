import { CapacityIcon, RoomsIcon, BathIcon, GarageIcon } from './icons';

// Capacity / Rooms / Bathrooms / Garage — icon + value + label.
export default function Stats({ house, variant = 'row' }) {
  const items = [
    { Icon: CapacityIcon, value: house.capacity, label: 'Capacidad' },
    { Icon: RoomsIcon, value: house.rooms, label: 'Habitaciones' },
    { Icon: BathIcon, value: house.bathrooms, label: 'Baños' },
    { Icon: GarageIcon, value: house.garage, label: 'Garaje' },
  ];
  const pill = variant === 'pills';
  const itemStyle = pill
    ? { display: 'flex', alignItems: 'center', gap: 7, padding: '6px 11px', background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: 999 }
    : { display: 'flex', alignItems: 'center', gap: 8 };
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: pill ? 8 : '14px 18px' }}>
      {items.map(({ Icon, value, label }) => (
        <div key={label} style={itemStyle}>
          <span style={{ color: 'var(--accent)', display: 'grid' }}><Icon /></span>
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
            <b style={{ fontSize: 14, fontWeight: 600 }}>{value}</b>
            <small style={{ fontSize: 11, color: 'var(--muted)' }}>{label}</small>
          </span>
        </div>
      ))}
    </div>
  );
}
