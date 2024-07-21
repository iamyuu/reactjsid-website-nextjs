import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Header } from '@/components/layout/header';
import { LayoutRoot } from '@/components/layout/layout-root';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="h-full min-h-screen w-full">
        <LayoutRoot>
          <Header />
          <main className="flex w-full flex-1 flex-col">{children}</main>
          <Footer />
        </LayoutRoot>
      </body>
    </html>
  );
}
