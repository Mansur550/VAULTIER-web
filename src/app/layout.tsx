
import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";

import AnnouncementBar from "./components/layout/announcement-bar";
import Navbar from "./components/layout/navbar";

export const metadata: Metadata = {
  title: "Vaultier | Modern Fashion",
  description: "Discover your style with Vaultier.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col font-sans">
        <AnnouncementBar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
