import type { Metadata } from "next";
import BlogContent from "./BlogContent";
import { blogPosts } from "@/api/blog";

const SITE_URL = "https://realgameapps.com";

export const metadata: Metadata = {
  title: "Gaming Blog & Guides India | Realgameapps",
  description: "Read expert gaming guides, app reviews, bonus offers, strategies, and industry updates for Indian gamers.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default function Page() {
  const blogJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Realgameapps Blog",
      url: `${SITE_URL}/blog`,
      description: "Latest gaming guides, strategies, app reviews, and bonus offers in India.",
    },
    ...blogPosts.map((post) => ({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      image: `${SITE_URL}${post.image}`,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.date,
      author: {
        "@type": "Organization",
        name: "Realgameapps",
      },
    })),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogContent />
    </>
  );
}
