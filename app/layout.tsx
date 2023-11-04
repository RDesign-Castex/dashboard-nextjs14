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
      </body>
    </html>
  );
}
