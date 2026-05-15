import Link from "next/link";
import { Gamepad2 } from "lucide-react";
import { FaWhatsapp, FaTelegramPlane, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";

const footerSocials = [
  { icon: FaWhatsapp, href: "#", label: "WhatsApp" },
  { icon: FaTelegramPlane, href: "#", label: "Telegram" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
];

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", to: "/" },
      { label: "Top Apps", to: "/#apps" },
      { label: "Cash Games", to: "/#apps" },
      { label: "New Apps", to: "/#apps" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", to: "/blog" },
      { label: "How to Play", to: "/blog/beginners-guide-rummy" },
      { label: "RealgameappsRules", to: "/blog/beginners-guide-rummy" },
      { label: "FAQs", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Use", to: "/terms" },
      { label: "Disclaimer", to: "/disclaimer" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70 pt-14 pb-8 mt-16">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-xl text-primary-foreground">Realgameapps</span>
          </div>
          <p className="text-xs leading-relaxed max-w-sm mb-5">
            Your trusted guide to the best Realgameappss in India. We verify every app so you can play with confidence and win real cash.
          </p>
          <div className="flex items-center gap-2">
            {footerSocials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                aria-label={s.label}
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <s.icon className="w-4 h-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {footerLinks.map((col) => (
          <div key={col.title}>
            <h4 className="font-heading font-semibold text-primary-foreground text-sm mb-3">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.to} className="text-xs hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px]">© 2025 Realgameapps. All rights reserved.</p>
        <div className="flex items-center gap-4 text-[11px]">
          <Link href="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary-foreground transition-colors">Terms of Use</Link>
          <Link href="/disclaimer" className="hover:text-primary-foreground transition-colors">Disclaimer</Link>
        </div>
        <p className="text-[11px] text-center sm:text-right max-w-sm">
          Disclaimer: This site is for informational purposes only. Play responsibly. Must be 18+.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
