import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import BottomNav from '@/components/portfolio/BottomNav';
import ContactModal from '@/components/portfolio/ContactModal';
import DotBackground from '@/components/portfolio/DotBackground';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://natanim.dev'),
  title: {
    default: 'Natanim Kemal | Backend, Security & Product Engineer',
    template: '%s | Natanim Kemal',
  },
  description:
    'Backend developer and cybersecurity-focused software engineer in Addis Ababa. I build APIs, data systems, and secure products, from WAF tooling to consumer apps.',
  keywords: [
    'Natanim Kemal',
    'Backend Developer',
    'Cybersecurity Engineer',
    'Software Engineer',
    'Addis Ababa',
    'Ethiopia',
    'Flutter',
    'NestJS',
    'PostgreSQL',
    'ModSecurity',
    'OWASP CRS',
    'Portfolio',
  ],
  authors: [{ name: 'Natanim Kemal', url: 'https://github.com/natanim-kemal' }],
  creator: 'Natanim Kemal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Natanim Kemal',
    title: 'Natanim Kemal | Backend, Security & Product Engineer',
    description:
      'I build the systems products run on: APIs, data, and defenses, then ship the interface that makes them feel simple.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Natanim Kemal' }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@straydeg',
    title: 'Natanim Kemal | Backend, Security & Product Engineer',
    description:
      'I build the systems products run on: APIs, data, and defenses, then ship the interface that makes them feel simple.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')!=='light')document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative min-h-screen bg-background font-sans antialiased`}
      >
        <div
          aria-hidden
          className="dot-fade pointer-events-none absolute inset-x-1 top-0 z-0 h-80 opacity-60"
        >
          <DotBackground />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-2xl px-6 pt-12 pb-32 sm:pt-24">
          {children}
        </div>
        <div
          aria-hidden
          className="dot-fade-up pointer-events-none absolute inset-x-0 bottom-0 z-0 h-80 opacity-60"
        >
          <DotBackground flip />
        </div>
        <BottomNav />
        <ContactModal />
      </body>
    </html>
  );
}
