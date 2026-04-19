"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Clock3, Home } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/timeline", label: "Timeline", icon: Clock3 },
  { href: "/stats", label: "Stats", icon: BarChart3 },
];

export function SiteNavbar() {
  const pathname = usePathname();

  return (
    <header className="site-navbar">
      <Link href="/" className="brand-mark-wrap" aria-label="KinKeeper home">
        <span className="brand-mark-icon">
          <Image src="/brand-mark.png" alt="KinKeeper logo" fill sizes="32px" />
        </span>
        <span>
          <strong>KinKeeper</strong>
          <small>Keep friendships warm</small>
        </span>
      </Link>

      <nav className="nav-links" aria-label="Primary">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active =
            item.href === "/" ? pathname === item.href : pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link key={item.href} href={item.href} className={`nav-link ${active ? "is-active" : ""}`}>
              <Icon size={17} strokeWidth={2} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
