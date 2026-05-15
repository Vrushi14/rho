import type { Metadata } from "next";
import HomeContent from "./HomeContent";
import { rummyApps } from "@/data/rummyApps";

const SITE_URL = "https://realgameapps.com";

export const metadata: Metadata = {
  title: "All Realgameappss in India 2025 — Reviews, Bonuses & Downloads | Realgameapps",
  description: "Discover, compare and download India's best Realgameappss. Verified reviews, exclusive bonuses up to ₹10,000, instant withdrawals. Trusted by 10M+ players.",
  alternates: {
    canonical: SITE_URL,
  },
};

export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Realgameapps",
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.ico`,
      description: "Compare and download India's best Realgameappss with verified reviews and real cash bonuses.",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Realgameapps",
      url: SITE_URL,
      inLanguage: "en-IN",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: rummyApps.map((app, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `${SITE_URL}/${app.slug}`,
        name: app.name,
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContent />
    </>
  );
}
