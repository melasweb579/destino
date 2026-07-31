import { logout } from '../actions';

export default function DashboardLayout({ children }) {
  return (
    <div style={{ minHeight: '100vh', background: '#F7F4EF' }}>
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 28px',
          background: '#1F1B16',
          color: '#fff',
        }}
      >
        <a href="/admin" style={{ color: '#fff', fontWeight: 600, textDecoration: 'none' }}>
          Destino y Estancias · Admin
        </a>
        <form action={logout}>
          <button
            type="submit"
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,.35)',
              color: '#fff',
              borderRadius: 999,
              padding: '7px 16px',
              fontSize: 13,
              cursor: 'pointer',
            }}
          >
            Cerrar sesión
          </button>
        </form>
      </header>
      <div style={{ padding: '32px 28px', maxWidth: 760, margin: '0 auto' }}>{children}</div>
    </div>
  );
}
