"use client";

import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <section
      id="education"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div
        style={{
          maxWidth: "var(--cw)",
          margin: "0 auto",
          padding: "48px var(--cp)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 40,
          }}
        >
          Education
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{
            display: "grid",
            gridTemplateColumns: "140px 1fr",
            gap: 24,
            alignItems: "baseline",
            padding: "18px 0",
            borderBottom: "1px solid var(--border-sub)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              fontWeight: 600,
              color: "var(--accent)",
              letterSpacing: "0.04em",
            }}
          >
            성신여자대학교
          </span>
          <div>
            <p style={{ fontSize: 14, color: "var(--ink)", fontWeight: 600, marginBottom: 4 }}>
              AI융합학부 전공
            </p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-light)" }}>
              재학 중 · 졸업예정 2026.08
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
