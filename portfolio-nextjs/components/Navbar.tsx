"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "소개",      href: "#about" },
  { label: "성과",      href: "#impact" },
  { label: "기술",      href: "#tech-stack" },
  { label: "프로젝트",  href: "#projects" },
  { label: "연락",      href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        backdropFilter: "blur(8px)",
        transition: "border-color 0.2s, background 0.2s",
      }}
    >
      <div
        style={{
          maxWidth: "var(--cw)",
          margin: "0 auto",
          padding: "0 var(--cp)",
          height: 52,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#about"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "-0.01em",
            color: "var(--accent)",
            textDecoration: "none",
          }}
        >
          Lee Chaeyeon
        </a>
        <div style={{ display: "flex", gap: 32 }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "var(--ink-mid)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-mid)")}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
