"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands" },
  { href: "/contacts", label: "Contacts" },
  { href: "/about", label: "About Us" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <Link href="/" className="brand-link">
            <Image
              src="/logo1.jpg"
              alt="Bradley Motor Spares"
              width={220}
              height={64}
              className="brand-logo"
            />
          </Link>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          <ul>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link href={link.href} className={isActive ? "nav-link nav-link--active" : "nav-link"}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="header-actions">
          <a href="tel:+263778843817" className="phone">+263 778 843 817</a>
          <Link href="/locations" className="locations">Our Locations</Link>
          <Link href="/request" className="cta">Request Part(s)</Link>
        </div>
      </div>
    </header>
  );
}
