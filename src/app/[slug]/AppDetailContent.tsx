"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { rummyApps } from "@/data/rummyApps";
import { withdrawalSteps, faqs, bonusDetails, withdrawalHighlights, shareLinks } from "@/data/apppage";
import { parseReviews } from "@/utils/appHelpers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RummyApp } from "@/types/rummyApps";

const renderStars = (rating: number) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span className="flex items-center gap-0.5" aria-label={`Rating ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={
            i < full
              ? "text-yellow-400 text-lg"
              : i === full && half
              ? "text-yellow-300 text-lg"
              : "text-gray-200 text-lg"
          }
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </span>
  );
};

const LoadingSkeleton = () => (
  <div className="min-h-screen bg-background">
    <div className="max-w-5xl mx-auto px-4 py-4 animate-pulse">
      <div className="bg-card border border-border rounded-xl p-5 mb-3">
        <div className="flex gap-5">
          <div className="w-24 h-24 bg-muted rounded-2xl"></div>
          <div className="flex-1">
            <div className="h-7 bg-muted rounded w-64 mb-2"></div>
            <div className="h-4 bg-muted rounded w-48 mb-3"></div>
            <div className="h-10 bg-muted rounded w-32 mb-2"></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="lg:col-span-2 space-y-3">
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="h-4 bg-muted rounded w-32 mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-11/12"></div>
              <div className="h-4 bg-muted rounded w-10/12"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="h-4 bg-muted rounded w-32 mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function AppDetailContent({ app }: { app: RummyApp }) {
  const [isLoading, setIsLoading] = useState(true);
  const [descOpen, setDescOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const relatedApps = rummyApps.filter((a) => a.id !== app.id).slice(0, 5);
  const ratingCount = parseReviews(app.reviews);
  const siteUrl = "https://realgameapps.com";
  const pageUrl = `${siteUrl}/${app.slug}`;
  const currentYear = new Date().getFullYear();
  
  const uniqueGameTypes = [...new Set(app.gameTypes)];

  const handleDownload = () => {
    setDownloading(true);
    
    // Track download event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'download_click', {
        app_name: app.name,
        app_slug: app.slug,
        app_category: app.category.join(', '),
        event_category: 'engagement',
        event_label: 'apk_download'
      });
    }
    
    setTimeout(() => {
      window.open(app.downloadUrl, "_blank", "noopener noreferrer");
      setDownloading(false);
    }, 800);
  };

  const handleImageError = (imgSrc: string) => {
    setImageErrors(prev => new Set(prev).add(imgSrc));
  };

  if (isLoading) return <LoadingSkeleton />;

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50">
        Skip to main content
      </a>
      
      <Header />

      <nav className="bg-card border-b border-border px-4 py-3 text-xs" aria-label="Breadcrumb">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-blue-600 text-gray-500 transition-colors" aria-label="Home">
              Home
            </Link>
          </li>
          <li className="text-gray-400" aria-hidden="true">/</li>
          <li>
            <Link href={`/${app.category[0]?.toLowerCase()}-apps`} className="hover:text-blue-600 text-gray-500 transition-colors">
              {app.category[0]} Apps
            </Link>
          </li>
          <li className="text-gray-400" aria-hidden="true">/</li>
          <li>
            <span className="text-gray-700 font-medium" aria-current="page">
              {app.name}
            </span>
          </li>
        </ol>
      </nav>

      <main id="main-content" className="max-w-5xl mx-auto px-4 py-4 space-y-3">
        <section aria-labelledby="app-header-title">
          <div className="bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row gap-5">
            <div className="flex-shrink-0">
              {app.logo && !app.logo.startsWith("href=") && !imageErrors.has(app.logo) ? (
                <img
                  src={app.logo}
                  alt={`${app.name} official logo - download ${app.name} APK`}
                  className="w-24 h-24 rounded-2xl object-cover border border-gray-200 shadow"
                  width="96"
                  height="96"
                  loading="eager"
                  onError={() => handleImageError(app.logo)}
                />
              ) : null}
              <div
                className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center border border-gray-200 shadow ${app.logo && !app.logo.startsWith("href=") && !imageErrors.has(app.logo) ? "hidden" : "flex"}`}
                aria-label={`${app.name} app icon`}
              >
                <span className="text-4xl" aria-hidden="true">🎮</span>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h1 id="app-header-title" className="text-xl font-bold text-gray-900 leading-tight">
                {app.name} <span className="text-sm font-normal text-gray-400">APK Download {currentYear}</span>
              </h1>

              <div className="flex flex-wrap gap-1.5 mt-1 mb-2">
                {app.category.map((cat) => (
                  <span key={cat} className="inline-block bg-blue-600 text-white text-[10px] px-2.5 py-0.5 rounded capitalize" aria-label={`Category: ${cat}`}>
                    {cat}
                  </span>
                ))}
                {app.gameTypes.slice(0, 2).map((g) => (
                  <span key={g} className="inline-block bg-gray-100 text-gray-600 text-[10px] px-2.5 py-0.5 rounded" aria-label={`Game type: ${g}`}>
                    {g}
                  </span>
                ))}
              </div>

              <p className="text-gray-500 text-sm mb-3 max-w-xl leading-relaxed">{app.tagline}</p>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs mb-3">
                {[
                  [app.name, "Developer"],
                  [app.established, "Established"],
                  [app.minWithdraw, "Min Withdrawal"],
                  [app.maxBonus, "Max Bonus"],
                  [app.platforms.join(" / "), "Platform"],
                ].map(([val, label]) => (
                  <div key={label}>
                    <div className="font-semibold text-gray-900 text-sm">{val}</div>
                    <div className="text-gray-400 text-xs">{label}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 mb-3">
                {renderStars(app.rating)}
                <span className="font-bold text-yellow-500 text-lg">{app.rating}</span>
                <span className="text-gray-400 text-xs">/5 · <span>{app.reviews}</span> user reviews</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={handleDownload}
                  className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-all duration-150 shadow focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                  aria-label={`Download ${app.name} APK for free.`}
                  aria-busy={downloading}
                  disabled={downloading}
                >
                  {downloading ? (
                    <>
                      <span className="inline-block animate-pulse">✓</span> Opening Download...
                    </>
                  ) : (
                    <>
                      ⬇ Download APK ({app.platforms.includes("Android") ? "Android" : "Mobile"})
                    </>
                  )}
                </button>
                <a 
                  href="https://t.me/realgameapps" 
                  target="_blank" 
                  rel="noopener noreferrer nofollow"
                  className="border border-[#0088cc] text-[#0088cc] hover:bg-blue-50 font-bold px-5 py-2.5 rounded-lg text-sm transition-colors focus:ring-2 focus:ring-[#0088cc] focus:ring-offset-2 focus:outline-none"
                  aria-label="Join our Telegram channel for updates"
                >
                  ✈ Join Telegram
                </a>
              </div>
              <span className="text-xs text-gray-400 mt-2 block">ℹ Play responsibly. 18+ only. Terms apply.</span>
            </div>
          </div>
        </section>

        <section aria-label="Share this app">
          <div className="bg-white border border-gray-200 rounded-xl px-5 py-3 flex flex-wrap items-center gap-2">
            <span className="text-xs text-gray-400 mr-1">Share this app:</span>
            {shareLinks.map(({ label, url }) => (
              <a
                key={label}
                href={url(pageUrl, app.name)}
                target="_blank"
                rel="noopener noreferrer nofollow external"
                className="border border-gray-200 text-xs px-3 py-1.5 rounded hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none"
                aria-label={`Share ${app.name} on ${label}`}
              >
                {label}
              </a>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="lg:col-span-2 space-y-3">
            <section className="bg-card border border-border rounded-xl p-5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 border-b-2 border-blue-600 pb-2 mb-4">
                About {app.name}
              </h2>
              <div className={`text-sm text-gray-600 leading-relaxed space-y-2 overflow-hidden transition-all duration-300 ${descOpen ? "max-h-[999px]" : "max-h-24"}`}>
                <p>{app.description}</p>
                <p>
                  <strong className="text-gray-800">{app.name}</strong> is a trusted real-money gaming platform available on {app.platforms.join(", ")}. 
                  The app offers exciting {app.gameTypes.slice(0, 4).join(", ")} games with a generous welcome bonus of up to <strong className="text-gray-800">{app.maxBonus}</strong> and 
                  a minimum withdrawal of just <strong className="text-gray-800">{app.minWithdraw}</strong>.
                </p>
              </div>
              <button 
                onClick={() => setDescOpen(!descOpen)} 
                className="text-blue-600 text-xs mt-2 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                aria-expanded={descOpen}
              >
                {descOpen ? "Show less ▲" : "Read more ▼"}
              </button>
            </section>

            <section className="bg-card border border-border rounded-xl p-5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 border-b-2 border-green-500 pb-2 mb-4">
                Pros & Cons Analysis
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-bold text-green-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span aria-hidden="true">✅</span> Advantages
                  </h3>
                  <ul className="space-y-2">
                    {app.pros.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-green-500 mt-0.5 flex-shrink-0" aria-hidden="true">✓</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-red-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span aria-hidden="true">⚠️</span> Considerations
                  </h3>
                  <ul className="space-y-2">
                    {app.cons.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-red-400 mt-0.5 flex-shrink-0" aria-hidden="true">✗</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card border border-border rounded-xl p-5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 border-b-2 border-yellow-400 pb-2 mb-4">
                💸 Withdrawal Process
              </h2>
              <div className="flex flex-wrap gap-2 mb-5">
                {withdrawalHighlights.map((b) => (
                  <span key={b.label} className="flex items-center gap-1.5 bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                    <span aria-hidden="true">{b.icon}</span> {b.label}
                  </span>
                ))}
              </div>
              <div className="space-y-4 mb-5">
                {withdrawalSteps.map((s, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-black text-white text-sm shadow" aria-label={`Step ${s.step}`}>
                      {s.step}
                    </div>
                    <div className="pt-1">
                      <div className="font-bold text-gray-800 text-sm">{s.title}</div>
                      <div className="text-xs text-gray-500 leading-relaxed">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-card border border-border rounded-xl p-5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 border-b-2 border-blue-600 pb-2 mb-4">
                ❓ Frequently Asked Questions
              </h2>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                      aria-expanded={openFaq === i}
                    >
                      <span className="font-semibold text-sm text-gray-800 pr-4">{faq.q}</span>
                      <span className="text-blue-500 text-xl flex-shrink-0 font-light">{openFaq === i ? "−" : "+"}</span>
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4 pt-3 text-sm text-gray-500 leading-relaxed border-t border-gray-100 bg-blue-50/30">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-3">
            <div className={`bg-gradient-to-br ${app.color} rounded-xl p-5 text-white`}>
              <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">🎁 Welcome Bonus</div>
              <div className="text-4xl font-black mb-1">{app.bonus}</div>
              <div className="text-sm opacity-90 mb-4 leading-snug">Free on registration!</div>
              <button
                onClick={handleDownload}
                className="w-full bg-white text-gray-800 font-bold py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-all shadow"
                disabled={downloading}
              >
                {downloading ? "✓ Opening..." : "⬇ Claim & Download"}
              </button>
            </div>

            <div className="bg-card border border-border rounded-xl p-5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 border-b-2 border-blue-600 pb-2 mb-4">
                Related Apps
              </h2>
              <div className="divide-y divide-gray-50">
                {relatedApps.map((ra) => (
                  <Link key={ra.id} href={`/${ra.slug}`} className="flex items-center gap-3 py-3 group">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${ra.color} flex-shrink-0 flex items-center justify-center text-lg`}>
                      🎮
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 text-xs group-hover:text-blue-600 transition-colors">{ra.name}</div>
                      <div className="text-[10px] text-gray-400">{ra.bonus} Bonus</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
