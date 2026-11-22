import type { Metadata, Viewport } from 'next';
import './globals.css';

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
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-eru-bg-DEFAULT text-eru-text-primary min-h-screen">
        {children}
      </body>
    </html>
  );
}
