import '@/app/ui/global.css';
import { inner } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inner.className} antialiased`}>{children}</body>
    </html>
  );
}
