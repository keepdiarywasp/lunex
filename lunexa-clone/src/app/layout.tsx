import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { ScrollAnimator } from "@/components/scroll-animator";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lunexa - AI-Powered Crypto Trading Platform",
  description:
    "Lunexa is an AI-powered crypto trading platform that helps you make smarter investment decisions with advanced algorithms and real-time market analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          {children}
          <ScrollAnimator />
        </ClientBody>
      </body>
    </html>
  );
}
