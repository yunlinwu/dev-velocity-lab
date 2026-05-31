import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Velocity Lab",
  description:
    "Learning faster. Growing faster. Using AI to level up as an engineer — in real roles, in real time.",
  metadataBase: new URL("https://yunlinwu.com"),
  verification: {
    google: "JneHjXQdRmb3Kd19E6_VtYNjtoRyOJdM_wGpWzLDO5g",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-zinc-950 font-sans text-zinc-200">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
