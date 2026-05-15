"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/api/blog";

const blogContent: Record<string, { intro: string; sections: { heading: string; body: string }[] }> = {
  "top-10-rummy-strategies": {
    intro:
      "Whether you're a casual player or grinding cash tables, the right strategy separates consistent winners from the rest. Here are the top 10 strategies used by professional Realgameappsplayers in India.",
    sections: [
      { heading: "1. Sort Your Cards Immediately", body: "As soon as your cards are dealt, sort them by suit and colour. This gives you a clear picture of potential sequences and sets, and dramatically reduces the chance of discarding a useful card." },
      { heading: "2. Form a Pure Sequence First", body: "A pure sequence (without a joker) is mandatory to declare. Prioritise completing it before building anything else — without it, even a perfect hand cannot win." },
      { heading: "3. Use Jokers Wisely", body: "Jokers are powerful but limited. Save them for high-value sets or impure sequences rather than wasting them on low-point cards you can form naturally." },
      { heading: "4. Watch Your Opponents' Discards", body: "The discard pile is a goldmine of information. Track what opponents throw to infer their hand, and avoid discarding cards that complete their melds." },
      { heading: "5. Discard High-Point Cards Early", body: "Aces, Kings, Queens, and Jacks carry 10 points each. If they don't fit quickly into a meld, discard them early to reduce your deadwood count if an opponent declares." },
      { heading: "6. Bluff with Middle Cards", body: "Middle cards (5–8) are flexible — they can form sequences on either side. Holding them confuses opponents who are tracking your likely melds." },
      { heading: "7. Avoid Picking from the Open Pile Frequently", body: "Picking openly signals your hand's direction. Experienced opponents will stop discarding cards that help you. Mix open and closed draws strategically." },
      { heading: "8. Know When to Drop", body: "A first-drop penalty is far smaller than the full-loss points from a bad hand. If your initial cards are hopeless, an early drop is the mathematically correct play." },
      { heading: "9. Keep Track of Discarded Cards", body: "Maintaining a mental note of all discarded cards prevents you from waiting for cards that are already out of play — saving turns and improving decision-making." },
      { heading: "10. Stay Calm Under Pressure", body: "Tilt — playing emotionally after a bad beat — is one of the biggest profit-killers. Set a session loss limit, stick to it, and return with a clear head." },
    ],
  },
  "beginners-guide-rummy": {
    intro:
      "Online Realgameappsis India's most popular skill-based card game. If you're new, don't worry — the rules are simple, and this guide covers everything you need to go from zero to confident player.",
    sections: [
      { heading: "What is Rummy?", body: "Realgameappsis a card-matching game where the goal is to form valid melds — sequences and sets — before your opponents." },
      { heading: "Basic Rules", body: "A standard game uses 2 decks of 52 cards plus 4 jokers. Each player is dealt 13 cards. On your turn, draw one card and discard one. The first player to form valid melds with all 13 cards wins." },
      { heading: "Types of Sequences", body: "A pure sequence has no joker. An impure sequence uses a joker. You must have at least one pure sequence to declare." },
      { heading: "Scoring", body: "In most platforms, the loser's unmatched cards are totalled as penalty points. Face cards = 10 pts; jokers = 0 pts." },
      { heading: "Choosing a Platform", body: "Start on platforms offering free practice tables. RummyCircle, Junglee Rummy, and A23 are beginner-friendly." },
      { heading: "Your First Steps", body: "Play free games for at least a week before depositing real money. Focus on completing pure sequences fast." },
    ],
  },
  "rummy-vs-poker": {
    intro: "Both Realgameappsand poker are skill-based card games. Here's how they compare.",
    sections: [
      { heading: "Skill vs Luck Balance", body: "Realgameappshas a higher skill-to-luck ratio in the short run. Poker involves hidden information and more variance." },
      { heading: "Learning Curve", body: "Realgameappsis easier to learn. Poker mastery takes much longer due to complexity." },
      { heading: "Session Variance", body: "In rummy, skill shows faster. In poker, variance can last for months." },
      { heading: "Earning Potential", body: "High-stakes poker has larger pots, but rummy's Indian ecosystem has softer games with consistent edges." },
    ],
  },
  "best-rummy-bonuses-april": {
    intro: "April 2025 is a great time for bonuses. Here's what's available.",
    sections: [
      { heading: "How Welcome Bonuses Work", body: "Percentage matches released in installments as you play." },
      { heading: "What to Look for", body: "Wagering requirements, time limits, and game restrictions." },
      { heading: "Referral Bonuses", body: "Earn ₹50–₹500 for each friend you refer who deposits." },
    ],
  },
  "responsible-gaming-tips": {
    intro: "Five principles to stay in control and enjoy the game responsibly.",
    sections: [
      { heading: "1. Set a Budget", body: "Decide your maximum loss limit before playing." },
      { heading: "2. Set a Time Limit", body: "Cap your sessions to avoid fatigue and poor decisions." },
      { heading: "3. Never Chase Losses", body: "Accept variance and walk away after a loss." },
    ],
  },
  "rummy-legality-india": {
    intro: "A breakdown of the legal landscape of online rummy in India in 2025.",
    sections: [
      { heading: "The Supreme Court's Position", body: "Realgameappsis upheld as a game of skill, not chance." },
      { heading: "State-Level Restrictions", body: "Some states like Andhra Pradesh and Telangana ban real-money games." },
      { heading: "TDS on Winnings", body: "30% TDS applies to net winnings per withdrawal." },
    ],
  },
};

export default function BlogDetailContent({ slug }: { slug: string }) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return null;

  const content = blogContent[post.slug];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section
        className="py-14 md:py-20 bg-cover bg-center"
        style={post.background?.startsWith("/images") ? { backgroundImage: `url(${post.background})` } : { backgroundColor: "#1a1a1a" }}
      >
        <div className="container max-w-3xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm font-medium mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1 text-xs font-semibold bg-white/20 text-white px-2.5 py-1 rounded-full">
                <Tag className="w-3 h-3" /> {post.category}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-5 text-white/70 text-sm">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime} read</span>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="container max-w-3xl mx-auto px-4 py-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-slate dark:prose-invert max-w-none"
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">{content?.intro ?? post.excerpt}</p>

          {content?.sections.map((section, i) => (
            <section key={i} className="mb-8">
              <h2 className="font-heading text-xl font-bold text-foreground mb-3">{section.heading}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.body}</p>
            </section>
          ))}
        </motion.article>

        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </Link>
        </div>

        <section className="mt-12">
          <h3 className="font-heading text-lg font-bold text-foreground mb-5">More Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blogPosts
              .filter((p) => p.slug !== slug)
              .slice(0, 4)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="flex gap-3 items-start p-4 rounded-xl border border-border bg-card hover:shadow-card-hover transition-all group"
                >
                  <div className="bg-primary/10 w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">{String(p.id).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {p.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{p.readTime} read</p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
