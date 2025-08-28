import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nsikaks Website',
  description: 'Nsikak Cosmas – Frontend & Fullstack Developer. Showcasing projects built with HTML, CSS, JavaScript, React, Next.js, Vite, and Node.js. Clean, modern, and responsive web experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
