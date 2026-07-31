import { login } from './actions';

export default function LoginPage({ searchParams }) {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F7F4EF',
        padding: 20,
      }}
    >
      <form
        action={login}
        style={{
          width: '100%',
          maxWidth: 360,
          display: 'grid',
          gap: 14,
          background: '#fff',
          padding: 32,
          borderRadius: 16,
          boxShadow: '0 8px 30px rgba(0,0,0,.08)',
        }}
      >
        <h1 style={{ margin: '0 0 4px', fontSize: 22 }}>Destino y Estancias</h1>
        <p style={{ margin: '0 0 8px', color: '#6B6357', fontSize: 14 }}>Panel de administración</p>

        <label style={{ display: 'grid', gap: 6, fontSize: 14 }}>
          Email
          <input name="email" type="email" required style={inputStyle} />
        </label>

        <label style={{ display: 'grid', gap: 6, fontSize: 14 }}>
          Contraseña
          <input name="password" type="password" required style={inputStyle} />
        </label>

        {searchParams?.error && (
          <p style={{ margin: 0, color: '#B3261E', fontSize: 13 }}>Credenciales inválidas.</p>
        )}

        <button type="submit" style={buttonStyle}>
          Entrar
        </button>
      </form>
    </main>
  );
}

const inputStyle = {
  padding: '10px 12px',
  borderRadius: 8,
  border: '1px solid #DDD6C9',
  fontSize: 15,
};

const buttonStyle = {
  marginTop: 8,
  padding: '11px 16px',
  borderRadius: 999,
  border: 'none',
  background: '#1F1B16',
  color: '#fff',
  fontSize: 15,
  fontWeight: 600,
  cursor: 'pointer',
};
