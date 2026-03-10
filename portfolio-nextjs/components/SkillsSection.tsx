"use client";

import { motion } from "framer-motion";

const W = 960;

const skillGroups = [
  {
    category: "NLP / LLM",
    skills: ["Python", "HuggingFace", "KoBART", "KoELECTRA", "LangChain", "LoRA", "Quantization", "T5"],
  },
  {
    category: "CV / ML",
    skills: ["CycleGAN", "OpenCV", "Scikit-learn", "XGBoost", "PyTorch", "Pandas"],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Flask", "PostgreSQL", "SQLite", "Docker", "Redis", "RPA (UiPath)"],
  },
  {
    category: "Frontend",
    skills: ["Next.js", "React Native", "Tailwind CSS", "TypeScript", "D3.js"],
  },
];

export default function SkillsSection() {
  return (
    <section id="tech-stack" style={{ background: "#fff", borderBottom: "1px solid #E5E7EB" }}>
      <div className="mx-auto px-8 py-24" style={{ maxWidth: W }}>
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className="font-black text-[28px] tracking-tight mb-4"
            style={{ color: "#111827" }}
          >
            핵심 기술 스택
          </h2>
          <p className="text-[15px] leading-[1.8]" style={{ color: "#9CA3AF" }}>
            AI와 풀스택 개발을 위한 종합적인 기술 세트
          </p>
        </motion.div>

        {/* 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1, duration: 0.45 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="w-[5px] h-[5px] rounded-full shrink-0"
                  style={{ background: "#7C3AED" }}
                />
                <span className="font-semibold text-[13px]" style={{ color: "#7C3AED" }}>
                  {group.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11.5px] px-2.5 py-1.5"
                    style={{
                      background: "#F5F3FF",
                      color: "#4B5563",
                      borderRadius: 6,
                      border: "1px solid #EDE9FE",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
