import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 60, background: 'var(--accent)', borderBottom: '1px solid rgba(255,255,255,.12)' }}>
      <div className="container" style={{ paddingBlock: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <img src="/logo.svg" alt="Destino y Estancias" style={{ height: 38, width: 'auto' }} />
          <span style={{ fontFamily: 'var(--display)', fontWeight: 600, fontSize: 17, letterSpacing: '-.01em', color: '#ffffff' }}>
            Destino y Estancias
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="nav-links">
          <Link href="/#estancias" style={{ fontSize: 14.5, fontWeight: 500, color: 'rgba(255,255,255,.82)' }}>Estancias</Link>
          <Link href="/#about" style={{ fontSize: 14.5, fontWeight: 500, color: 'rgba(255,255,255,.82)' }}>Nosotros</Link>
          <Link href="/#faq" style={{ fontSize: 14.5, fontWeight: 500, color: 'rgba(255,255,255,.82)' }}>FAQ</Link>
          <Link href="/#contacto" style={{ display: 'inline-flex', alignItems: 'center', padding: '9px 18px', borderRadius: 999, background: '#ffffff', color: 'var(--accent)', fontSize: 14, fontWeight: 600 }}>Contacto</Link>
        </nav>

        {/* Mobile — Reservar button only */}
        <a
          href="https://wa.me/message/QI6KQE34NQOEE1"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-reservar-mobile"
          style={{ alignItems: 'center', gap: 7, padding: '10px 18px', borderRadius: 999, background: '#ffffff', color: 'var(--accent)', fontSize: 14, fontWeight: 600 }}
        >
          Reservar
        </a>

      </div>
    </header>
  );
}
