import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainHeader from "../../components/MainHeader";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Data fetching',
  description: 'Learn how to fetch data'
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