import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/MainHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <div id="page">
          <MainHeader/>
          {children}
        </div>
      </body>
    </html>
  );
}
