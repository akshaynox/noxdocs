import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import db from "@/lib/supabase/db";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoxDocs",
  description: "A truly collaborative workspace",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icons/logo.svg",
        href: "/icons/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icons/logo-dark.svg",
        href: "/icons/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(db);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
