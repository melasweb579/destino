import Link from 'next/link';

export default function Hero() {
  return (
    <section id="top" style={{ position: 'relative', minHeight: 'min(86vh,720px)', display: 'grid', alignItems: 'center', overflow: 'hidden', background: '#f9fafb' }}>
      <div className="container" style={{ position: 'relative', width: '100%', paddingBlock: 'clamp(40px,8vh,90px)' }}>
        <div style={{ maxWidth: 760, animation: 'fadeUp .8s ease both' }}>
          <p style={{ margin: '0 0 18px', fontSize: 13, letterSpacing: '.28em', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase' }}>Casas de autor · Ecuador</p>
          <h1 className="h-display" style={{ margin: 0, fontWeight: 700, fontSize: 'clamp(2.6rem,6.4vw,5.1rem)', lineHeight: .98, letterSpacing: '-.025em', color: '#111827', textWrap: 'balance' }}>
            Estancias con alma en Baños, Ecuador.
          </h1>
          <p style={{ margin: '22px 0 0', fontSize: 'clamp(1rem,1.4vw,1.2rem)', lineHeight: 1.55, color: '#4b5563', maxWidth: 540 }}>
            Siete refugios cuidadosamente elegidos —entre volcanes y selva amazónica— para que vivas el descanso sin perder el carácter del lugar.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32 }}>
            <Link href="/#estancias" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 26px', borderRadius: 999, background: 'var(--accent)', color: '#ffffff', fontWeight: 600, fontSize: 15, boxShadow: '0 14px 30px -16px rgba(0,53,28,.55)' }}>Explorar estancias</Link>
            <Link href="/#contacto" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 26px', borderRadius: 999, background: '#ffffff', border: '1px solid #e5e7eb', color: '#111827', fontWeight: 600, fontSize: 15 }}>Reservar ahora</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
