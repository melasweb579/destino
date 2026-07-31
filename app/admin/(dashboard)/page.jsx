import Link from 'next/link';
import { getHouses, formatPrice } from '@/lib/houses';

export default async function AdminHomePage({ searchParams }) {
  const houses = await getHouses();

  return (
    <div>
      <h1 style={{ margin: '0 0 4px', fontSize: 24 }}>Alojamientos</h1>
      <p style={{ margin: '0 0 24px', color: '#6B6357', fontSize: 14 }}>
        Selecciona una estancia para editar su precio e información.
      </p>

      {searchParams?.updated && (
        <p style={{ margin: '0 0 20px', color: '#2E7D32', fontSize: 14 }}>Cambios guardados correctamente.</p>
      )}

      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 10 }}>
        {houses.map((house) => (
          <li key={house.id}>
            <Link
              href={`/admin/${house.id}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                background: '#fff',
                borderRadius: 12,
                textDecoration: 'none',
                color: '#1F1B16',
                boxShadow: '0 1px 3px rgba(0,0,0,.06)',
              }}
            >
              <span>
                <strong>{house.name}</strong>
                <span style={{ color: '#6B6357', fontSize: 13, marginLeft: 8 }}>{house.location}</span>
              </span>
              <span style={{ fontWeight: 600 }}>{formatPrice(house.price)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
