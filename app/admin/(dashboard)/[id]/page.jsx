import { notFound } from 'next/navigation';
import { getHouse } from '@/lib/houses';
import { updateHouseAction } from './actions';

export default async function EditHousePage({ params }) {
  const house = await getHouse(params.id);
  if (!house) notFound();

  const action = updateHouseAction.bind(null, house.id);

  return (
    <div>
      <a href="/admin" style={{ color: '#6B6357', fontSize: 14, textDecoration: 'none' }}>
        &larr; Volver
      </a>
      <h1 style={{ margin: '10px 0 24px', fontSize: 24 }}>{house.name}</h1>

      <form action={action} style={{ display: 'grid', gap: 18 }}>
        <Field label="Nombre">
          <input name="name" defaultValue={house.name} required style={inputStyle} />
        </Field>

        <Field label="Ubicación">
          <input name="location" defaultValue={house.location} style={inputStyle} />
        </Field>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 14 }}>
          <Field label="Precio">
            <input name="price" type="number" step="0.01" min="0" defaultValue={house.price} required style={inputStyle} />
          </Field>
          <Field label="Moneda">
            <input name="currency" defaultValue={house.currency} style={inputStyle} />
          </Field>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          <Field label="Capacidad">
            <input name="capacity" type="number" min="0" defaultValue={house.capacity} style={inputStyle} />
          </Field>
          <Field label="Habitaciones">
            <input name="rooms" type="number" min="0" defaultValue={house.rooms} style={inputStyle} />
          </Field>
          <Field label="Baños">
            <input name="bathrooms" type="number" min="0" defaultValue={house.bathrooms} style={inputStyle} />
          </Field>
          <Field label="Garaje">
            <input name="garage" type="number" min="0" defaultValue={house.garage} style={inputStyle} />
          </Field>
        </div>

        <Field label="Descripción">
          <textarea name="description" defaultValue={house.description} rows={4} style={textareaStyle} />
        </Field>

        <Field label="Descripción 2">
          <textarea name="description2" defaultValue={house.description2} rows={4} style={textareaStyle} />
        </Field>

        <Field label="Amenidades (una por línea)">
          <textarea
            name="amenities"
            defaultValue={house.amenities.join('\n')}
            rows={6}
            style={textareaStyle}
          />
        </Field>

        <button type="submit" style={buttonStyle}>
          Guardar cambios
        </button>
      </form>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label style={{ display: 'grid', gap: 6, fontSize: 14, color: '#1F1B16' }}>
      {label}
      {children}
    </label>
  );
}

const inputStyle = {
  padding: '10px 12px',
  borderRadius: 8,
  border: '1px solid #DDD6C9',
  fontSize: 15,
  width: '100%',
  boxSizing: 'border-box',
};

const textareaStyle = { ...inputStyle, resize: 'vertical', fontFamily: 'inherit' };

const buttonStyle = {
  justifySelf: 'start',
  marginTop: 8,
  padding: '11px 22px',
  borderRadius: 999,
  border: 'none',
  background: '#1F1B16',
  color: '#fff',
  fontSize: 15,
  fontWeight: 600,
  cursor: 'pointer',
};
