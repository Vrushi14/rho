import { rummyApps, getAppBySlug } from "@/data/rummyApps";
import { notFound } from "next/navigation";
import AppDetailContent from "./AppDetailContent";
import type { Metadata } from "next";
import { withdrawalSteps, faqs } from "@/data/apppage";
import { parseReviews } from "@/utils/appHelpers";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return rummyApps.map((app) => ({
    slug: app.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return { title: "App Not Found" };

  const currentYear = new Date().getFullYear();
  const metaTitle = `${app.name} APK Download ${currentYear} | ${app.bonus} Bonus & Instant Withdrawal`;
  const metaDescription = `Download ${app.name} APK v2025. Get ${app.bonus} welcome bonus + ${app.referralBonus} per referral. Fast withdrawals from ${app.minWithdraw}. Trusted by ${app.reviews}+ users. 100% safe APK.`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `https://realgameapps.com/${app.slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: app.description.substring(0, 200),
      url: `https://realgameapps.com/${app.slug}`,
      images: [
        {
          url: app.images && app.images[0] ? app.images[0] : "https://realgameapps.com/default-image.jpg",
          width: 1200,
          height: 630,
          alt: `${app.name} app interface`,
        },
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) notFound();
  
  const currentYear = new Date().getFullYear();
  const pageUrl = `https://realgameapps.com/${app.slug}`;
  const ratingCount = parseReviews(app.reviews);

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": app.name,
    "description": app.description,
    "url": pageUrl,
    "applicationCategory": "GameApplication",
    "operatingSystem": app.platforms.join(", "),
    "offers": { 
      "@type": "Offer", 
      "price": "0", 
      "priceCurrency": "INR", 
      "availability": "https://schema.org/InStock",
      "priceValidUntil": `${currentYear + 1}-12-31`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": app.rating.toString(),
      "ratingCount": ratingCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": { "@type": "Organization", "name": app.name },
    "softwareVersion": "2025.1",
    "fileSize": "50MB",
    "keywords": app.gameTypes.join(", "),
    "datePublished": app.established ? `${app.established}-01-01` : "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "requirements": "Android 5.0 or later, 2GB RAM minimum",
    "screenshot": app.images || [],
    "downloadUrl": app.downloadUrl,
    "installUrl": app.downloadUrl,
    "releaseNotes": `Latest version with improved performance and ${app.bonus} welcome bonus`
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://realgameapps.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": app.category[0] || "Gaming Apps",
        "item": `https://realgameapps.com/${app.category[0]?.toLowerCase() || 'gaming'}-apps`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": app.name,
        "item": pageUrl
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to withdraw money from ${app.name}`,
    "description": `Step-by-step guide to withdraw your winnings from ${app.name}. Minimum withdrawal ${app.minWithdraw}.`,
    "totalTime": "PT24H",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": "0"
    },
    "step": withdrawalSteps.map((step) => ({
      "@type": "HowToStep",
      "name": step.title,
      "text": step.desc,
      "position": step.step
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <AppDetailContent app={app} />
    </>
  );
}
