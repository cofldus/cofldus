"use client";

import { motion } from "framer-motion";

const groups = [
  { cat: "NLP / LLM",  skills: "Python · HuggingFace · KoBART · KoELECTRA · LangChain · LoRA · T5 · Quantization" },
  { cat: "CV / ML",    skills: "CycleGAN · OpenCV · XGBoost · PyTorch · Scikit-learn · SHAP · KMeans" },
  { cat: "Backend",    skills: "FastAPI · Flask · PostgreSQL · SQLite · Docker · Redis · UiPath RPA" },
  { cat: "Frontend",   skills: "Next.js · React Native · TypeScript · Tailwind CSS · D3.js" },
  { cat: "자격증",      skills: "빅데이터분석기사 (2025.12) · ADsP (2026.03) · OPIc IH (2025.08)" },
];

export default function SkillsSection() {
  return (
    <section
      id="tech-stack"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div
        style={{
          maxWidth: "var(--cw)",
          margin: "0 auto",
          padding: "52px var(--cp)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 28,
          }}
        >
          Capabilities
        </p>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {groups.map((g, i) => (
            <motion.div
              key={g.cat}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
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
                {g.cat}
              </span>
              <span
                style={{
                  fontSize: 13.5,
                  color: "var(--ink-mid)",
                  lineHeight: 1.8,
                }}
              >
                {g.skills}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
