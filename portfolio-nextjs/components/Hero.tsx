"use client";

import { motion } from "framer-motion";
import profilePhoto from "./profilePhoto";

const W = 960;

const fadeUp = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };

export default function Hero() {
  return (
    <section id="about" style={{ background: "#FFFFFF", paddingTop: 56 }}>
      <div className="mx-auto px-8 py-24 lg:py-32" style={{ maxWidth: W }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-[1fr_230px] gap-16 items-center"
        >
          {/* 좌측 */}
          <div>
            {/* 채용 배지 */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-8 px-3 py-1.5"
              style={{
                background: "#F0FDF4",
                border: "1px solid #BBF7D0",
                borderRadius: "99px",
              }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: "#10B981" }}
              />
              <span
                className="font-mono text-[10px] tracking-[0.18em] uppercase font-semibold"
                style={{ color: "#059669" }}
              >
                현재 채용 기회를 찾고 있습니다
              </span>
            </motion.div>

            {/* 이름 */}
            <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="mb-5">
              <h1
                className="font-black leading-[1.0] tracking-[-0.03em]"
                style={{ fontSize: "clamp(46px, 6.5vw, 72px)", color: "#111827" }}
              >
                Lee Chae-yeon
              </h1>
              <h1
                className="font-black leading-[1.0] tracking-[-0.03em]"
                style={{ fontSize: "clamp(46px, 6.5vw, 72px)", color: "#F97316" }}
              >
                (이채연)
              </h1>
            </motion.div>

            {/* 직함 */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-[18px] font-medium mb-8"
              style={{ color: "#6B7280" }}
            >
              AI / NLP 엔지니어
            </motion.p>

            {/* 인용구 */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-[14px] italic mb-12 pl-5 leading-[1.9]"
              style={{
                borderLeft: "2px solid #DDD6FE",
                color: "#9CA3AF",
                maxWidth: 420,
              }}
            >
              &quot;Engineering is about making the right trade-offs.&quot;
            </motion.p>

            {/* 버튼 */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="flex gap-3 flex-wrap"
            >
              <a
                href="#projects"
                className="px-6 py-3 text-[13px] font-semibold transition-all duration-150"
                style={{ background: "#7C3AED", color: "#fff", borderRadius: 8 }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#6D28D9")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#7C3AED")}
              >
                프로젝트 보기
              </a>
              <a
                href="#contact"
                className="px-6 py-3 text-[13px] font-semibold transition-all duration-150"
                style={{
                  background: "transparent",
                  color: "#374151",
                  border: "1.5px solid #D1D5DB",
                  borderRadius: 8,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#7C3AED";
                  e.currentTarget.style.color = "#7C3AED";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#D1D5DB";
                  e.currentTarget.style.color = "#374151";
                }}
              >
                연락하기
              </a>
            </motion.div>
          </div>

          {/* 우측: 프로필 */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div
              style={{
                width: 230,
                aspectRatio: "4/5",
                background: "linear-gradient(155deg, #F5ECD7 0%, #EDE0C4 100%)",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 8px 40px rgba(124,58,237,0.12)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profilePhoto}
                alt="이채연"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
