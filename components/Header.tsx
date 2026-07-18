"use client";

import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <Link href="/" className="brand-link" onClick={() => setOpen(false)}>
            <Image
              src="/logo1.jpg"
              alt="Bradley Motor Spares"
              width={220}
              height={64}
              className="brand-logo"
            />
          </Link>
        </div>

        <button
          type="button"
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          <ul>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={isActive ? "nav-link nav-link--active" : "nav-link"}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="header-actions">
          <a href="tel:+263778843817" className="phone">
            +263 778 843 817
          </a>
          <Link href="/locations" className="locations" onClick={() => setOpen(false)}>
            Our Locations
          </Link>
          <Link href="/request" className="cta" onClick={() => setOpen(false)}>
            Request Part(s)
          </Link>
        </div>
      </div>
    </header>
  );
}
