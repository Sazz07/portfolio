import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { SideNav } from '@/components/layout/side-nav';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Sazzad Hossain - Full-Stack Developer',
  description:
    'Full-stack developer with 2+ years of experience building scalable web applications. Specializing in React, Next.js, TypeScript, and Node.js.',
  keywords: [
    'Sazzad Hossain',
    'Full-Stack Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Web Development',
    'Frontend Developer',
    'Backend Developer',
    'JavaScript',
    'Bangladesh Developer',
  ].join(', '),
  authors: [{ name: 'Sazzad Hossain' }],
  creator: 'Sazzad Hossain',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sazzadhossain.dev',
    title: 'Sazzad Hossain - Full-Stack Developer',
    description:
      'Full-stack developer specializing in React, Next.js, and TypeScript.',
    siteName: 'Sazzad Hossain Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sazzad Hossain - Full-Stack Developer',
    description:
      'Full-stack developer specializing in React, Next.js, and TypeScript.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <SideNav />
          <div className='ml-0 lg:ml-20'>{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
