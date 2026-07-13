'use client';
import { useState } from 'react';

const inputStyle = { padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,.2)', background: 'rgba(255,255,255,.08)', color: '#ffffff', fontSize: 15, fontFamily: 'inherit' };

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: POST to your booking/inquiry endpoint here.
    setSent(true);
  };

  return (
    <section id="contacto" style={{ background: 'var(--accent)', color: '#ffffff' }}>
      <div className="container" style={{ paddingBlock: 'clamp(56px,9vh,110px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(32px,5vw,64px)' }}>
          <div>
            <p style={{ margin: '0 0 12px', fontSize: 12.5, letterSpacing: '.26em', fontWeight: 600, color: 'rgba(255,255,255,.6)', textTransform: 'uppercase' }}>Contacto</p>
            <h2 className="h-display" style={{ margin: 0, fontSize: 'clamp(1.9rem,3.6vw,2.8rem)', lineHeight: 1.08, color: '#ffffff' }}>Hablemos de tu próxima escapada</h2>
            <p style={{ margin: '18px 0 30px', fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,.72)', maxWidth: 420 }}>
              Cuéntanos qué fechas y qué estancia tienes en mente. Respondemos en menos de 24 horas.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                ['@', 'Email', 'hola@destinoyestancias.ec'],
                ['☎', 'Teléfono', '+593 3 274 0000'],
                ['◎', 'Ubicación', 'Baños de Agua Santa, Ecuador'],
              ].map(([icon, label, value]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,.14)', display: 'grid', placeItems: 'center', color: '#ffffff', fontSize: 15 }}>{icon}</span>
                  <div>
                    <small style={{ display: 'block', fontSize: 11.5, color: 'rgba(255,255,255,.55)', textTransform: 'uppercase', letterSpacing: '.1em' }}>{label}</small>
                    <span style={{ fontSize: 15.5, color: '#ffffff' }}>{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'rgba(0,0,0,.18)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 18, padding: 'clamp(20px,3vw,30px)' }}>
            {sent ? (
              <div style={{ minHeight: 280, display: 'grid', placeItems: 'center', textAlign: 'center' }}>
                <div>
                  <div style={{ width: 54, height: 54, borderRadius: '50%', background: 'rgba(255,255,255,.15)', display: 'grid', placeItems: 'center', margin: '0 auto 16px', color: '#ffffff', fontSize: 24 }}>✓</div>
                  <h3 className="h-display" style={{ margin: 0, fontSize: '1.4rem', color: '#ffffff' }}>Mensaje enviado</h3>
                  <p style={{ margin: '8px 0 0', color: 'rgba(255,255,255,.7)', fontSize: 15 }}>Gracias. Te contactaremos muy pronto.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 14 }}>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}><span style={{ fontSize: 12.5, color: 'rgba(255,255,255,.7)', fontWeight: 500 }}>Nombre</span><input required type="text" style={inputStyle} /></label>
                  <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}><span style={{ fontSize: 12.5, color: 'rgba(255,255,255,.7)', fontWeight: 500 }}>Email</span><input required type="email" style={inputStyle} /></label>
                </div>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}><span style={{ fontSize: 12.5, color: 'rgba(255,255,255,.7)', fontWeight: 500 }}>Estancia de interés</span><input type="text" placeholder="VillaMarianita, RoxelHome..." style={inputStyle} /></label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}><span style={{ fontSize: 12.5, color: 'rgba(255,255,255,.7)', fontWeight: 500 }}>Mensaje</span><textarea rows={4} style={{ ...inputStyle, resize: 'vertical' }} /></label>
                <button type="submit" style={{ marginTop: 4, padding: 14, borderRadius: 10, border: 'none', cursor: 'pointer', background: '#ffffff', color: 'var(--accent)', fontWeight: 600, fontSize: 15 }}>Enviar mensaje</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
