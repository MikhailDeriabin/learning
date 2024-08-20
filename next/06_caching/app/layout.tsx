import Header from '@/components/header';
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Next.js Caching',
  description: 'Learn how Next.js caching works',
};

type Props = Readonly<{
  children?: ReactNode
}>;
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
