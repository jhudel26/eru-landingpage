import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://eru-movies.vercel.app'),
  title: 'ERU — Desktop Streaming Platform for Movies & TV Shows',
  description: 'A modern desktop application for streaming movies and TV shows with a beautiful teal aesthetic, glassmorphic UI, and multi-server streaming backends.',
  keywords: ['streaming', 'movies', 'tv shows', 'desktop app', 'electron', 'electron app', 'media player', 'eru movies'],
  authors: [{ name: 'EruStudio' }],
  creator: 'EruStudio',
  publisher: 'EruStudio',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eru-movies.vercel.app',
    title: 'ERU — Desktop Streaming Platform for Movies & TV Shows',
    description: 'Stream movies and TV shows with a beautiful teal aesthetic, glassmorphic UI, and multi-server streaming backends.',
    siteName: 'ERU Movies',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'ERU Movies Desktop App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERU — Desktop Streaming Platform',
    description: 'Stream movies and TV shows with a beautiful teal aesthetic and glassmorphic UI.',
    images: ['/icon.png'],
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#0B1120',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="bg-eru-bg-DEFAULT text-eru-text-primary min-h-screen">
        {children}
      </body>
    </html>
  );
}
