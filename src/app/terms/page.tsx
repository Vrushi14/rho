"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, CheckSquare, Ban, Users, Link2, DollarSign, AlertTriangle, Scale, RefreshCw, Mail, ChevronRight, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  {
    icon: CheckSquare,
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using realgameapps.com you agree to be bound by these Terms of Use.",
      "If you do not agree with any part of these terms, you must immediately stop using this website.",
    ],
  },
  {
    icon: FileText,
    title: "2. Use of Content",
    content: [
      "All content on Realgameapps is the intellectual property of Realgameapps or its licensors.",
      "You may not reproduce, republish, distribute, or scrape our content without prior written permission.",
    ],
  },
  {
    icon: Ban,
    title: "3. Prohibited Conduct",
    content: [
      "Using the site for any unlawful purpose or in violation of applicable Indian laws.",
      "Attempting to gain unauthorised access to our servers or databases.",
    ],
  },
  {
    icon: Users,
    title: "4. Eligibility",
    content: [
      "Realgameapps is intended solely for users who are 18 years of age or older.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-hero py-14">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="flex items-center justify-center gap-1 text-primary-foreground/60 text-xs mb-4">
              <Link href="/" className="hover:text-primary-foreground transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary-foreground">Terms of Use</span>
            </nav>
            <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-7 h-7 text-primary-foreground" />
            </div>
            <h1 className="font-heading text-4xl font-extrabold text-primary-foreground">Terms of Use</h1>
            <p className="text-primary-foreground/70 mt-2 text-sm">Last updated: April 2025</p>
          </motion.div>
        </div>
      </section>

      <main className="container py-12 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6 mb-8 text-sm text-muted-foreground leading-relaxed">
          Please read these Terms of Use carefully before using <strong className="text-foreground">realgameapps.com</strong>.
        </motion.div>

        <div className="space-y-6">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="bg-card rounded-2xl border border-border p-6 shadow-card"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-5 h-5 text-blue-500" />
                </div>
                <h2 className="font-heading font-bold text-foreground text-lg">{s.title}</h2>
              </div>
              <ul className="space-y-1.5">
                {s.content.map((line, j) => (
                  <li key={j} className={`text-sm leading-relaxed ${j === 0 ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                    {j > 0 && <span className="text-blue-500 mr-1.5">•</span>}{line}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/privacy" className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:shadow-card-hover transition-all group">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Privacy Policy</p>
              <p className="text-xs text-muted-foreground">How we handle your data</p>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
          </Link>
          <Link href="/disclaimer" className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:shadow-card-hover transition-all group">
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Disclaimer</p>
              <p className="text-xs text-muted-foreground">Liability & informational use</p>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
