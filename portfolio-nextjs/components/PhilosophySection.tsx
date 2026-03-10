"use client";

import { motion } from "framer-motion";

const W = 960;

const pills = [
  { label: "Clean",     sub: "코드 설계",   active: false },
  { label: "Efficient", sub: "추론 최적화",  active: true  },
  { label: "Scalable",  sub: "아키텍처",    active: false },
  { label: "Smart",     sub: "문제 해결",   active: false },
];

const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const IconGithub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export default function PhilosophySection() {
  return (
    <footer id="contact" style={{ background: "#0C0C1E" }}>
      <div className="mx-auto px-8 py-24 lg:py-28" style={{ maxWidth: W }}>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* 좌측: 연락처 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2
              className="font-black leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(30px, 4vw, 52px)", color: "#fff" }}
            >
              함께 일해요.
            </h2>
            <p
              className="text-[15px] leading-[2.0] mb-10"
              style={{ color: "#9CA3AF" }}
            >
              AI 리서치 및 NLP 엔지니어링 분야에서<br />
              새로운 기회를 찾고 있습니다.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:lcylcy1717@gmail.com"
                className="flex items-center gap-3 text-[14px] transition-colors duration-150"
                style={{ color: "#9CA3AF" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
              >
                <IconMail />
                lcylcy1717@gmail.com
              </a>
              <a
                href="https://github.com/cofldus"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[14px] transition-colors duration-150"
                style={{ color: "#9CA3AF" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
              >
                <IconGithub />
                github.com/cofldus
              </a>
            </div>
          </motion.div>

          {/* 우측: 강점 카드 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="grid grid-cols-2 gap-3"
          >
            {pills.map((pill) => (
              <div
                key={pill.label}
                className="p-6"
                style={{
                  background: pill.active ? "#7C3AED" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${pill.active ? "#7C3AED" : "rgba(255,255,255,0.07)"}`,
                  borderRadius: 12,
                }}
              >
                <p
                  className="font-bold text-[17px] mb-1.5"
                  style={{ color: pill.active ? "#fff" : "#E5E7EB" }}
                >
                  {pill.label}
                </p>
                <p
                  className="font-mono text-[10px] tracking-[0.18em]"
                  style={{ color: pill.active ? "rgba(255,255,255,0.6)" : "#6B7280" }}
                >
                  {pill.sub}
                </p>
              </div>
            ))}
          </motion.div>

        </div>

        {/* 하단 */}
        <div
          className="mt-20 pt-8 flex flex-wrap justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-[12px]" style={{ color: "#4B5563" }}>
            © 2024 이채연. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["개인정보처리방침", "이용약관"].map((t) => (
              <a
                key={t}
                href="#"
                className="text-[12px] transition-colors duration-150"
                style={{ color: "#4B5563" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#9CA3AF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4B5563")}
              >
                {t}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
