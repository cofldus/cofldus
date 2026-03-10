"use client";

import { motion, type Variants } from "framer-motion";
import profilePhoto from "./profilePhoto";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

export default function Hero() {
  return (
    <section id="about" style={{ background: "var(--bg)", paddingTop: 52 }}>
      <div
        style={{
          maxWidth: "var(--cw)",
          margin: "0 auto",
          padding: "68px var(--cp) 60px",
        }}
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 56,
            alignItems: "flex-end",
          }}
        >
          {/* 좌측: 텍스트 */}
          <div>
            {/* 상태 라벨 */}
            <motion.div
              variants={fadeUp}
              style={{ display: "inline-flex", alignItems: "center", gap: 7, marginBottom: 24 }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#10B981",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--ink-light)",
                }}
              >
                채용 기회를 찾고 있습니다
              </span>
            </motion.div>

            {/* 이름 */}
            <motion.div variants={fadeUp} style={{ marginBottom: 6 }}>
              <h1
                style={{
                  fontSize: "clamp(48px, 7.5vw, 76px)",
                  fontWeight: 800,
                  letterSpacing: "-0.045em",
                  lineHeight: 1.0,
                  color: "var(--ink)",
                }}
              >
                Lee Chaeyeon
              </h1>
            </motion.div>

            {/* 한글 이름 — 조용한 보조 정보 */}
            <motion.div variants={fadeUp} style={{ marginBottom: 24 }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--ink-light)",
                  letterSpacing: "0.05em",
                }}
              >
                이채연
              </span>
            </motion.div>

            {/* 직함 */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "var(--ink-mid)",
                marginBottom: 6,
              }}
            >
              AI · NLP Engineer
            </motion.p>

            {/* 소속 */}
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--ink-light)",
                marginBottom: 32,
                letterSpacing: "0.02em",
              }}
            >
              성신여자대학교 AI융합학부
            </motion.p>

            {/* 한 줄 소개 */}
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 14,
                lineHeight: 1.85,
                color: "var(--ink-light)",
                maxWidth: 420,
                marginBottom: 36,
                fontStyle: "italic",
              }}
            >
              &ldquo;Engineering is about making the right trade-offs.&rdquo;
            </motion.p>

            {/* CTA 버튼 */}
            <motion.div variants={fadeUp} style={{ display: "flex", gap: 10 }}>
              <a
                href="#projects"
                style={{
                  display: "inline-block",
                  padding: "9px 20px",
                  fontSize: 13,
                  fontWeight: 600,
                  background: "var(--accent)",
                  color: "#fff",
                  borderRadius: 4,
                  textDecoration: "none",
                  transition: "opacity 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                프로젝트 보기
              </a>
              <a
                href="#contact"
                style={{
                  display: "inline-block",
                  padding: "9px 20px",
                  fontSize: 13,
                  fontWeight: 600,
                  background: "transparent",
                  color: "var(--ink-mid)",
                  border: "1px solid var(--border)",
                  borderRadius: 4,
                  textDecoration: "none",
                  transition: "border-color 0.15s, color 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--ink-mid)";
                }}
              >
                연락하기
              </a>
            </motion.div>
          </div>

          {/* 우측: 프로필 사진 */}
          <motion.div
            variants={fadeUp}
            style={{ display: "none" }}
            className="lg-photo"
          >
            <div
              style={{
                width: 192,
                height: 240,
                overflow: "hidden",
                borderRadius: 8,
                border: "1px solid var(--border)",
                flexShrink: 0,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profilePhoto}
                alt="이채연"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                  display: "block",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .lg-photo { display: block !important; }
        }
      `}</style>
    </section>
  );
}
