import type { Metadata } from "next";
import "./globals.css";
// import db from "@/lib/supabase/db";
import { ThemeProvider } from "@/lib/providers/next-theme-provider";
import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import AppStateProvider from "@/lib/providers/state-provider";
import { SupabaseUserProvider } from "@/lib/providers/supabase-user-provider";
import { Toaster } from "@/components/ui/toaster";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoxDocs",
  description: "A truly collaborative workspace",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/noxdocslogo.svg",
        href: "/noxdocslogo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/noxdocslogo.svg",
        href: "/noxdocslogo.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // console.log(db);
  return (
    <html lang="en">
      <body className={twMerge("bg-background", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AppStateProvider>
            <SupabaseUserProvider>
              {children}
              <Toaster />
            </SupabaseUserProvider>
          </AppStateProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
