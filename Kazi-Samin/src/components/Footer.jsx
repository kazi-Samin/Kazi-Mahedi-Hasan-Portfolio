"use client";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/kazi-Samin", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kazi-mahedi-hasan", external: true },
  { label: "Email", href: "mailto:kazisamin0173@gmail.com", external: false },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="max-w-[1280px] mx-auto px-5 md:px-20 pb-12">
      {/* Top Bar */}
      <div className="pt-16 border-t border-[var(--color-outline-variant)]/20
        flex flex-col md:flex-row justify-between items-start md:items-center gap-12 pb-16">

        {/* Brand */}
        <div className="space-y-4">
          <div
            className="text-[40px] font-bold text-[var(--color-primary)]"
            style={{ fontFamily: "var(--font-playfair), Playfair Display, serif" }}
          >
            KS
          </div>
          <p className="text-[var(--color-on-surface-variant)] text-base max-w-xs">
            Frontend-Focused Full Stack Developer building polished digital experiences.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-16">
          {/* Navigation */}
          <div className="space-y-6">
            <h5 className="text-sm font-bold text-[var(--color-on-surface)] tracking-widest">
              NAVIGATION
            </h5>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h5 className="text-sm font-bold text-[var(--color-on-surface)] tracking-widest">
              SOCIAL
            </h5>
            <ul className="space-y-4">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-[var(--color-outline-variant)]/10
        flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-[var(--color-on-surface-variant)] text-sm text-center sm:text-left">
          © 2026 Kazi Mahedi Hasan. Built with Next.js &amp; Tailwind CSS.
        </p>
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-3 text-[var(--color-on-surface-variant)]
            hover:text-[var(--color-primary)] transition-colors text-sm font-medium"
        >
          Back To Top
          <span className="w-8 h-8 rounded-full border border-[var(--color-outline-variant)]
            flex items-center justify-center group-hover:border-[var(--color-primary)]
            group-hover:-translate-y-1 transition-all">
            <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
          </span>
        </button>
      </div>
    </footer>
  );
}
