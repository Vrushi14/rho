import type { Metadata } from "next";
import BlogDetailContent from "./BlogDetailContent";
import { blogPosts } from "@/api/blog";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Realgameapps Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://realgameapps.com/blog/${post.slug}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return <BlogDetailContent slug={slug} />;
}
