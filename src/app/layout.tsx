import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Realgameapps — All Realgameappss in India 2025 | Reviews, Bonuses & Downloads",
  description: "Discover, compare and download the best Realgameappss in India. Verified reviews, exclusive bonuses up to ₹10,000, instant withdrawals. Trusted by 10M+ players.",
  keywords: ["Realgameappss india", "online rummy", "real cash rummy", "Realgameappsbonus", "best Realgameapps 2025"],
  authors: [{ name: "Realgameapps" }],
  openGraph: {
    title: "Realgameapps — All Realgameappss in India 2025 | Reviews, Bonuses & Downloads",
    description: "Discover, compare and download the best Realgameappss in India. Verified reviews, exclusive bonuses up to ₹10,000, instant withdrawals. Trusted by 10M+ players.",
    url: "https://www.realgameapps.com/",
    siteName: "Realgameapps",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b3a78732-0640-4de6-9e65-d44d3bd3a73f/id-preview-27c18da7--28a4f0c4-3223-4cb9-85a9-7ec0e235a267.lovable.app-1776518725839.png",
        width: 1200,
        height: 630,
        alt: "Realgameapps - Best Real Money Gaming Apps in India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Realgameapps — All Realgameappss in India 2025 | Reviews, Bonuses & Downloads",
    description: "Discover, compare and download the best Realgameappss in India. Verified reviews, exclusive bonuses up to ₹10,000, instant withdrawals. Trusted by 10M+ players.",
    images: ["https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b3a78732-0640-4de6-9e65-d44d3bd3a73f/id-preview-27c18da7--28a4f0c4-3223-4cb9-85a9-7ec0e235a267.lovable.app-1776518725839.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-background font-body antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
