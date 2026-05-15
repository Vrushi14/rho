import type { Metadata } from "next";
import AboutContent from "./AboutContent";

const SITE_URL = "https://realgameapps.com";

export const metadata: Metadata = {
  title: "About Realgameapps - Trusted Gaming Apps Platform India",
  description: "Learn about Realgameapps, India's trusted platform for discovering safe, verified, and rewarding gaming apps.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

export default function Page() {
  const aboutJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Realgameapps",
      url: `${SITE_URL}/about`,
      description: "Learn about Realgameapps, India's trusted platform for discovering safe and verified gaming apps.",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SITE_URL,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": `${SITE_URL}/about`,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <AboutContent />
    </>
  );
}
