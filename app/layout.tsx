import type { Metadata } from "next";
import { VT323, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/layout/Header";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Benjamin Dekan · The Ocean Expedition",
  description:
    "Computer Engineering graduate & full-stack developer from Boston University. Ocean-themed systems, embedded firmware, and modern web applications.",
  icons: {
    icon: "/cartoon-boat.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${vt323.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030712] text-[#e8f1ff] selection:bg-[#4de3ff] selection:text-[#050a14] relative">
        <div className="crt-overlay" aria-hidden="true" />
        <Header />
        <main className="relative z-10 flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
