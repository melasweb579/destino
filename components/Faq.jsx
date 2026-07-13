'use client';
import { useState } from 'react';

const FAQS = [
  { q: '¿Cómo reservo una estancia?', a: 'Escríbenos desde el formulario de contacto o por correo indicando la estancia y tus fechas. Te enviamos disponibilidad y los pasos para confirmar con un anticipo.' },
  { q: '¿Cuál es el horario de check-in y check-out?', a: 'El check-in es a partir de las 15:00 y el check-out hasta las 12:00. Si necesitas flexibilidad, avísanos con tiempo y haremos lo posible por acomodarte.' },
  { q: '¿Se admiten mascotas?', a: 'Varias de nuestras estancias son pet friendly. Búscalo en la lista de comodidades de cada casa o pregúntanos directamente.' },
  { q: '¿Cuál es la política de cancelación?', a: 'Cancelación gratuita hasta 7 días antes de la llegada. Después de ese plazo se retiene el anticipo. Te compartimos los detalles al reservar.' },
  { q: '¿Qué incluye la limpieza y los servicios?', a: 'Todas las estancias incluyen limpieza final, ropa de cama y toallas, WiFi y los servicios básicos. Algunas ofrecen chef o limpieza diaria por un costo adicional.' },
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ maxWidth: 920, margin: '0 auto', padding: 'clamp(56px,9vh,110px) clamp(20px,5vw,48px)' }}>
      <div style={{ textAlign: 'center', marginBottom: 'clamp(28px,4vh,46px)' }}>
        <p className="eyebrow">Preguntas frecuentes</p>
        <h2 className="h-display" style={{ margin: 0, fontSize: 'clamp(1.9rem,3.6vw,2.8rem)' }}>Todo lo que necesitas saber</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
              <button onClick={() => setOpen(isOpen ? null : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '18px 20px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                <span style={{ fontSize: 16, fontWeight: 600 }}>{f.q}</span>
                <span style={{ fontSize: 22, lineHeight: 1, color: 'var(--accent)', transition: 'transform .3s', transform: isOpen ? 'rotate(45deg)' : 'none', flex: '0 0 auto' }}>+</span>
              </button>
              <div style={{ maxHeight: isOpen ? 260 : 0, overflow: 'hidden', transition: 'max-height .35s ease' }}>
                <p style={{ margin: 0, padding: '0 20px 20px', fontSize: 15, lineHeight: 1.6, color: '#4b5563' }}>{f.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
