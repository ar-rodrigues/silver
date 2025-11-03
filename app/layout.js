import "./globals.css";

export const metadata = {
  title: "Mi Proyecto",
  description:
    "Un proyecto base completo y listo para usar con Next.js 15, Tailwind CSS 4 y autenticación",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
