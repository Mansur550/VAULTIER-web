
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "./components/layout/announcement-bar";


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaultier | Modern Fashion",
  description: "Discover your style with Vaultier.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.className} flex min-h-full flex-col`}>
        <AnnouncementBar />
       
        {children}
      </body>
    </html>
  );
}
