"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "소개",      href: "#about" },
  { label: "성과",      href: "#impact" },
  { label: "기술 스택", href: "#tech-stack" },
  { label: "프로젝트",  href: "#projects" },
  { label: "연락",      href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-200"
      style={{
        background: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #E5E7EB",
        boxShadow: scrolled ? "0 1px 16px rgba(0,0,0,0.07)" : "none",
      }}
    >
      <div
        className="mx-auto px-8 flex items-center justify-between h-14"
        style={{ maxWidth: 960 }}
      >
        <a
          href="#about"
          className="font-mono font-bold text-[14px]"
          style={{ color: "#7C3AED" }}
        >
          lcy.dev
        </a>
        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] font-medium transition-colors duration-150"
              style={{ color: "#6B7280" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#111827")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
