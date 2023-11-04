import './ui/global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='{`${Inter.className} antialiased`}'>
        {children}
        <footer>
          Hecho con amor por Rene Kuhm
        </footer>
      </body>
    </html>
  );
}
