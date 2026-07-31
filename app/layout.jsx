import './globals.css';
import SiteChrome from '@/components/SiteChrome';

export const metadata = {
  title: 'Destino y Estancias — Casas de autor en México',
  description: 'Siete estancias cuidadosamente elegidas para un descanso con carácter.',
  icons: {
    icon: '/logo.ico',
    shortcut: '/logo.ico',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
