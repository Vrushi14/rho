"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/api/blog";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.35 },
};

export default function BlogContent() {
  const featuredPost = blogPosts?.[0];
  const latestPosts = blogPosts?.slice(1);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <nav aria-label="Breadcrumb" className="border-b border-border bg-muted/30">
        <div className="container py-3">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            </li>
            <ChevronRight className="w-4 h-4" />
            <li className="text-foreground font-medium">Blog</li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container text-center">
          <motion.div {...fadeUp}>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-primary-foreground mb-5 tracking-tight">
              Blog & Gaming Guides
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore gaming strategies, app reviews, bonus offers, expert tips, and the latest
              updates from the Indian gaming industry.
            </p>
          </motion.div>
        </div>
      </section>

      <main role="main" className="container py-14">
        {featuredPost && (
          <section aria-labelledby="featured-post-heading" className="mb-14">
            <motion.article {...fadeUp} className="bg-card border border-border rounded-3xl overflow-hidden shadow-card hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-muted min-h-[280px] overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 id="featured-post-heading" className="font-heading text-3xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-5 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {featuredPost.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featuredPost.readTime} read</span>
                  </div>
                  <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center gap-2 text-primary font-semibold hover:underline w-fit">
                    Read Full Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          </section>
        )}

        <section aria-labelledby="latest-posts-heading">
          <motion.div {...fadeUp}>
            <h2 id="latest-posts-heading" className="font-heading text-3xl font-bold mb-10">
              Latest Articles
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {latestPosts?.map((post, index) => (
              <motion.article
                key={post.id}
                {...fadeUp}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-card border border-border rounded-3xl overflow-hidden shadow-card hover:shadow-lg transition-all"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <h3 className="font-heading text-lg font-bold mt-4 mb-3 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-5">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-20 bg-card border border-border rounded-3xl p-8 md:p-10 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-heading text-3xl font-bold mb-4">Explore More</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover trusted gaming apps, expert recommendations, and responsible gaming resources on Realgameapps.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                About Us
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-3 font-medium hover:bg-muted transition-colors">
                Contact
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
