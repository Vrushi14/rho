"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Award,
  Heart,
  Target,
  Eye,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Shield,
    title: "Trust & Safety",
    desc: "Every gaming app is reviewed for safety, secure payments, and fair gameplay.",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "Helping millions of Indian players discover trusted gaming platforms.",
  },
  {
    icon: Award,
    title: "Expert Reviews",
    desc: "Our experts test and review apps to provide transparent recommendations.",
  },
  {
    icon: Heart,
    title: "Responsible Gaming",
    desc: "We encourage safe and responsible gaming for all users.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.35 },
};

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <nav aria-label="Breadcrumb" className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-4 h-4" />
            <li className="text-foreground font-medium">About</li>
          </ol>
        </div>
      </nav>

      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-primary-foreground mb-5 tracking-tight">
              About Realgameapps
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              India's trusted platform for discovering, comparing, and downloading verified gaming
              apps with secure gameplay and rewarding experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <main role="main" className="container mx-auto px-4 py-14">
        <section aria-labelledby="mission-vision-heading" className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.article {...fadeUp} className="bg-card border border-border rounded-3xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h2 id="mission-vision-heading" className="font-heading text-2xl font-bold">
                Our Mission
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to help Indian users discover trusted gaming apps with transparent reviews,
              secure payment systems, and reliable user experiences.
            </p>
          </motion.article>

          <motion.article {...fadeUp} transition={{ duration: 0.35, delay: 0.1 }} className="bg-card border border-border rounded-3xl p-8 shadow-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-secondary" />
              </div>
              <h2 className="font-heading text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We aim to become India's most reliable source for safe gaming app discovery, expert reviews,
              and responsible gaming awareness.
            </p>
          </motion.article>
        </section>

        <section aria-labelledby="values-heading" className="mb-20">
          <motion.div {...fadeUp}>
            <h2 id="values-heading" className="font-heading text-3xl font-bold text-center mb-12">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                {...fadeUp}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="bg-card border border-border rounded-3xl p-7 shadow-card hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center mb-5">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section aria-labelledby="explore-heading" className="bg-card border border-border rounded-3xl p-8 md:p-10 text-center">
          <motion.div {...fadeUp}>
            <h2 id="explore-heading" className="font-heading text-3xl font-bold mb-4">Explore More</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Read expert gaming app reviews, discover new platforms, and connect with the Realgameapps community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/blog" className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                Visit Blog
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-3 font-medium hover:bg-muted transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
