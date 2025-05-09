// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Dezzy Tech PC Builder',
  description: 'Build your perfect PC with live compatibility checking.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white font-sans">{children}</body>
    </html>
  );
}
