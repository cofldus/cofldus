"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const W = 960;

function CountUp({ end, decimals = 0 }: { end: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / 1600, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(parseFloat((end * e).toFixed(decimals)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, end, decimals]);
  return <span ref={ref}>{val.toFixed(decimals)}</span>;
}

const metrics = [
  {
    value: 76, suffix: "%", decimals: 0,
    label: "모델 경량화",
    desc: "Qwen2.5에 LoRA + 4-bit 양자화를 적용해 14GB → 3.5GB로 압축. 추론 품질 손실 없이 모바일 배포 가능한 수준으로 최적화했습니다.",
  },
  {
    value: 0.9812, suffix: "", decimals: 4,
    label: "BertScore",
    desc: "야민정음·음운 오류 복원 벤치마크 최고 수치. 기존 단일 모델 대비 5.6%p 향상된 결과로, 태스크 분기형 아키텍처의 유효성을 수치로 검증했습니다.",
  },
  {
    value: 91, suffix: "%", decimals: 0,
    label: "XGBoost 분류 정확도",
    desc: "DART API 재무제표 12개 비율 기반 A~D 등급 분류. GPT-4와 역할을 분리해 수치 환각을 80% 이상 줄인 파이프라인의 핵심 지표입니다.",
  },
];

export default function ImpactSection() {
  return (
    <section
      id="impact"
      style={{ background: "#F9FAFB", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}
    >
      <div className="mx-auto px-8 py-24" style={{ maxWidth: W }}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="p-7"
              style={{
                background: "#fff",
                border: "1px solid #E5E7EB",
                borderLeft: "3px solid #7C3AED",
                borderRadius: 12,
              }}
            >
              <div
                className="font-black tabular-nums leading-none mb-3"
                style={{ fontSize: "clamp(34px, 4vw, 50px)", color: "#111827", letterSpacing: "-0.04em" }}
              >
                <CountUp end={m.value} decimals={m.decimals} />{m.suffix}
              </div>
              <div
                className="font-mono text-[10px] tracking-[0.22em] font-semibold mb-4 uppercase"
                style={{ color: "#7C3AED" }}
              >
                {m.label}
              </div>
              <p className="text-[13px] leading-[1.95]" style={{ color: "#6B7280" }}>
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
