import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from '@/components/provider';
import { asset } from '@/lib/asset';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  // Absolute base for Open Graph and Twitter image URLs. Override with SITE_URL
  // when the site moves to a custom domain.
  metadataBase: new URL(
    process.env.SITE_URL ?? 'https://samavati.github.io/swiperia',
  ),
  title: {
    default: 'Swiperia',
    template: '%s | Swiperia',
  },
  description:
    'Swipe gesture detection for the web: direction, distance and velocity, with the same event for mouse and touch.',
  // Resolved against metadataBase, so these pick up the GitHub Pages prefix.
  icons: {
    icon: [
      { url: asset('/assets/logo/logo.svg'), type: 'image/svg+xml' },
      {
        url: asset('/assets/logo/logox192.png'),
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    shortcut: asset('/favicon.ico'),
    apple: asset('/assets/logo/logox192.png'),
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
