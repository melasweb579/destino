import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--line)', background: '#ffffff' }}>
      <div className="container" style={{ paddingBlock: 'clamp(36px,6vh,64px)', display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent)', borderRadius: 8, padding: '5px 8px' }}>
            <img src="/logo.svg" alt="Destino y Estancias" style={{ height: 28, width: 'auto' }} />
          </span>
          <span style={{ fontFamily: 'var(--display)', fontWeight: 600, fontSize: 16, color: 'var(--ink)' }}>Destino y Estancias</span>
        </Link>
        <p style={{ margin: 0, fontSize: 13.5, color: 'var(--muted)' }}>
          © {new Date().getFullYear()} Destino y Estancias · Hecho con cuidado en Ecuador
        </p>
      </div>
    </footer>
  );
}
