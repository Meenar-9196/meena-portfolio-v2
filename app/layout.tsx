import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Meena Raja — Data, Analytics & Engineering',
  description: 'Meena Raja builds reliable reporting, analytics and data workflows. Explore selected work, experience and ways to connect.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
