export default function About() {
  const stats = [
    { value: '7', label: 'Estancias únicas' },
    { value: '4.9', label: 'Valoración media' },
    { value: '+1.2k', label: 'Huéspedes felices' },
  ];
  return (
    <section id="about" style={{ background: '#f9fafb' }}>
      <div className="container" style={{ paddingBlock: 'clamp(56px,9vh,110px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(28px,5vw,64px)', alignItems: 'center' }}>
          <div>
            <p className="eyebrow">Nosotros</p>
            <h2 className="h-display" style={{ margin: 0, fontSize: 'clamp(1.9rem,3.6vw,2.8rem)', lineHeight: 1.08 }}>Anfitriones de un descanso con carácter</h2>
            <p style={{ margin: '20px 0 0', fontSize: 16, lineHeight: 1.65, color: '#4b5563' }}>
              Empezamos con una sola casa de familia y la convicción de que hospedarse debería sentirse como llegar a un lugar querido. Hoy cuidamos siete estancias en los rincones más bellos de Baños, Ecuador, cada una con su propia personalidad.
            </p>
            <p style={{ margin: '14px 0 0', fontSize: 16, lineHeight: 1.65, color: '#4b5563' }}>
              Nos ocupamos de cada detalle —desde el café en la alacena hasta las recomendaciones del barrio— para que solo tengas que llegar y quedarte.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, marginTop: 30 }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <b className="h-display" style={{ display: 'block', fontSize: '2rem', color: 'var(--accent)' }}>{s.value}</b>
                  <span style={{ fontSize: 13, color: '#6b7280' }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', aspectRatio: '4 / 5', borderRadius: 18, overflow: 'hidden', background: '#e5e7eb', display: 'grid', placeItems: 'center' }}>
            <span style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12, letterSpacing: '.1em', color: 'rgba(17,24,39,.35)' }}>[ foto anfitriones ]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
