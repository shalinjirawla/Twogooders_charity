"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/home-preview", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/fundraising-program", label: "Fundraising Program" },
];

// Fixed top bar shared by the preview pages; the pages clear it via --header-offset
export default function PreviewHeader() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const [open, setOpen] = useState(false);

  return (
    <header className="pv-header">
      <div className="pv-headerInner">
        <Link href="/home-preview" className="pv-brand" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon.svg" alt="" width={36} height={36} className="pv-brandMark" />
          <span className="pv-brandName">Two Gooders</span>
        </Link>

        <button
          type="button"
          className="pv-menuButton"
          aria-expanded={open}
          aria-controls="pv-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="pv-nav" className={`pv-nav${open ? " pv-navOpen" : ""}`} aria-label="Main">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`pv-link${active ? " pv-linkActive" : ""}`}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
