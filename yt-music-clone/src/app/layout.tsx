import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider"
import Sidebar from '@/components/Sidebar';
import PlayerWrapper from "@/components/player/PlayerWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clone YT Music",
  description: "Clone Youtube Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
        <Sidebar>{children}</Sidebar>
        <PlayerWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
