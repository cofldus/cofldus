"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function CountUp({ end, decimals = 0 }: { end: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const t0 = performance.now();
    const run = (now: number) => {
      const p = Math.min((now - t0) / 1400, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(parseFloat((end * e).toFixed(decimals)));
      if (p < 1) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  }, [inView, end, decimals]);
  return <span ref={ref}>{val.toFixed(decimals)}</span>;
}

const stats = [
  { end: 76,     decimals: 0, suffix: "%",  label: "모델 경량화",       note: "14GB → 3.0GB, 성능 유지" },
  { end: 0.9812, decimals: 4, suffix: "",   label: "BertScore",        note: "한글 복원 AI 벤치마크" },
  { end: 91,     decimals: 0, suffix: "%",  label: "분류 정확도",       note: "XGBoost 재무 등급" },
  { end: 3,      decimals: 0, suffix: "+",  label: "수상",             note: "해커톤 · 사내 경진대회" },
];

export default function ImpactSection() {
  return (
    <section
      id="impact"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div
        style={{
          maxWidth: "var(--cw)",
          margin: "0 auto",
          padding: "48px var(--cp)",
        }}
      >
        {/* 섹션 레이블 */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 32,
          }}
        >
          Impact
        </p>

        {/* 수치 4개 — 카드 없이 타이포로 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0 1px",
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={{
                paddingRight: i < 3 ? 32 : 0,
                borderRight: i < 3 ? "1px solid var(--border-sub)" : "none",
                paddingLeft: i > 0 ? 32 : 0,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(36px, 4vw, 52px)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  color: "var(--ink)",
                  marginBottom: 10,
                }}
              >
                <CountUp end={s.end} decimals={s.decimals} />{s.suffix}
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--ink-mid)",
                  marginBottom: 4,
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--ink-light)",
                }}
              >
                {s.note}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
