import type { Metadata } from "next";
import { inter, spaceGrotesk } from "@/lib/fonts";
import { getSiteConfig } from "@/lib/content";
import "./globals.css";

const site = getSiteConfig();

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
