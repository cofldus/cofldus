"use client";

import { motion } from "framer-motion";

const W = 960;

export default function EducationSection() {
  return (
    <section
      id="education"
      style={{ background: "#F9FAFB", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}
    >
      <div className="mx-auto px-8 py-20" style={{ maxWidth: W }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-black text-[28px] tracking-tight" style={{ color: "#111827" }}>
            학력
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mx-auto flex items-start justify-between gap-6 p-7"
          style={{
            maxWidth: 520,
            background: "#fff",
            border: "1px solid #E5E7EB",
            borderLeft: "3px solid #7C3AED",
            borderRadius: 12,
          }}
        >
          <div>
            <p className="font-bold text-[16px] mb-2" style={{ color: "#111827" }}>
              성신여자대학교
            </p>
            <p className="text-[14px] leading-[1.8] mb-1.5" style={{ color: "#6B7280" }}>
              AI융합학부 전공
            </p>
            <p className="font-mono text-[11.5px]" style={{ color: "#9CA3AF" }}>
              졸업예정 · 2026년 8월
            </p>
          </div>
          <span
            className="font-mono text-[10px] px-3 py-1.5 shrink-0"
            style={{
              background: "#EDE9FE",
              color: "#7C3AED",
              borderRadius: 6,
              whiteSpace: "nowrap",
            }}
          >
            재학 중
          </span>
        </motion.div>
      </div>
    </section>
  );
}
