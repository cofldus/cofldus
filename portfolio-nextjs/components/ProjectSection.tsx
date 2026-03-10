"use client";

import { motion } from "framer-motion";

const W = 960;

interface Project {
  num: string;
  title: string;
  period: string;
  role: string;
  desc: string;
  bullets: string[];
  tags: string[];
  bg: string;
  award?: string;
  reverse: boolean;
}

const projects: Project[] = [
  {
    num: "01",
    title: "AiRPA — 학생 진로 탐색 자동화 시스템",
    period: "한국지능정보사회진흥원 해커톤",
    role: "RPA 설계 · T5 한국어 요약 모델 · 5가지 개인화 시나리오 설계",
    desc: "상담 교사가 학생 한 명을 위해 교육부·대학알리미·블로그 정보를 수집·요약하는 데 인당 30분 이상의 수작업을 반복하는 비효율을 해결했습니다. UiPath RPA가 이질적 소스에서 데이터를 수집하고, Python T5 모델이 요약한 뒤 엑셀 리포트를 자동 완성합니다.",
    bullets: [
      "UiPath RPA로 로그인·동적 로딩 포함 학과 정보와 졸업생 후기 평균 200건 자동 수집",
      "TF-IDF 대비 문장 자연도 23% 향상, 학과 100개 처리 시간 8시간 → 3시간으로 단축",
      "설문 기반 5가지 시나리오('안정성 중시형' 등)로 유사 학과 개인화 추천, 자동화율 95% 이상",
    ],
    tags: ["UiPath RPA", "Python", "HuggingFace T5", "TF-IDF", "Excel 자동화"],
    bg: "#0B0F1A",
    award: "한국지능정보사회진흥원 해커톤 특별상",
    reverse: false,
  },
  {
    num: "02",
    title: "이지스-바이오 센티넬스 — 의료자문봇",
    period: "팀 프로젝트",
    role: "RAG 파이프라인 설계 · ReRanker 도입 · 하이브리드 검색 구현",
    desc: "5.5만 개의 전문 의학 JSON 데이터(약 2.2억 토큰)와 3.5만 개의 의학 Q&A 쌍을 기반으로, 할루시네이션을 최소화하고 출처가 명확한 근거 기반 답변을 제공하는 Advanced RAG 시스템입니다.",
    bullets: [
      "EXAONE-3.5-7.8B-Instruct 채택 · BM25(k=20) + Naive RAG(k=20) 하이브리드 검색으로 Recall 최대화",
      "BAAI/bge-reranker-v2-m3로 질문-문서 정합성 재평가, 최상위 5개만 LLM에 전달 → 정밀도 향상",
      "ReRanker 적용 후 객관식 정확도(Acc) +0.04, 서술형 BERTScore +0.16 상승 달성",
    ],
    tags: ["EXAONE-3.5", "BM25", "FAISS", "RAG", "bge-reranker-v2-m3", "LangChain", "Python"],
    bg: "#071218",
    reverse: true,
  },
  {
    num: "03",
    title: "난독화된 한글 리뷰 복원 AI",
    period: "2026.01 · AI 자연어처리 집중 과정 3기",
    role: "Noise Classifier 구현 · JAMO 전처리 설계 · 태스크 분기형 아키텍처 설계",
    desc: "야민정음(그래픽 변형)과 음운 오류(발음 기반)는 복원 규칙이 상충하여 단일 모델로 처리하면 출력이 불안정합니다. 문제를 모델 성능이 아닌 태스크 정의에서 재진단하고, 유형 분류 → 전용 복원 분기 구조를 설계했습니다.",
    bullets: [
      "KoELECTRA 기반 Noise Classifier로 노이즈 유형 판별 후 전용 KoBART로 분기 처리",
      "BPE 토크나이저의 야민정음 자모 분해 실패 문제 → JAMO(초/중/종성) 전처리 도입으로 토큰 손상 해결",
      "최종 BERTScore 0.9812, CER 0.0426 달성 · 기본 모델 대비 5.6%p 성능 향상",
    ],
    tags: ["KoBART", "KoELECTRA", "JAMO", "Noise Classifier", "PyTorch", "HuggingFace"],
    bg: "#100B1E",
    reverse: false,
  },
  {
    num: "04",
    title: "KillKong — 콩글리쉬 교정 AI Agent",
    period: "2025.07–08 · 포스코 AI·BigData 아카데미 30기",
    role: "팀 리더 · 전체 파이프라인 설계 · LoRA 파인튜닝 · 개인화 메모리 아키텍처",
    desc: "GPT가 놓치는 한국인 특화 콩글리쉬 패턴('블랙 컨슈머', 'after 신청')을 전용 DB와 3단계 파이프라인으로 해결합니다. 온디바이스 목표를 위해 경량화와 추론 속도를 함께 최적화했습니다.",
    bullets: [
      "LoRA + 4-bit 양자화(NF4) + 멀티링구얼 토큰 Pruning(약 10%)으로 14GB → 3.0GB(76%↓), CPU 0.3초 추론",
      "FAISS(IVF) + SQLite(LRU 캐시) 하이브리드로 630개 콩글리쉬 DB를 0.02초 내 조회하는 개인화 메모리 구현",
      "응답 지연 2.3초 → 0.47초 단축, 모바일 응답 일관성 92% 이상 · 포스코 인재창조원 장려상 수상",
    ],
    tags: ["Qwen2.5", "LoRA", "4-bit 양자화", "FAISS", "BM25", "SQLite", "LangChain", "FastAPI", "Docker"],
    bg: "#130B07",
    award: "포스코 인재창조원 장려상 · 팀 리더",
    reverse: true,
  },
  {
    num: "05",
    title: "FinView — 생성형 AI 재무보고서 시스템",
    period: "2024.09–11 · 성신여자대학교 · 팀장",
    role: "전체 파이프라인 설계(팀장) · XGBoost + KMeans · GPT-4 프롬프트 엔지니어링 · 환각 검증 로직",
    desc: "일반 사용자가 복잡한 재무제표 수치만으로 기업 건전성과 리스크(소송·리콜 등)를 직관적으로 파악하기 어려운 문제를 해결합니다. LLM이 수치를 직접 계산하면 환각이 생긴다는 구조적 문제를 역할 분업으로 해결했습니다.",
    bullets: [
      "DART API(500개 상장사 재무제표) + 네이버 뉴스 200건 자동 수집 ETL → XGBoost 등급 분류(A~D, 91%) + KMeans 유사 기업 군집화",
      "GPT-4에 군집 평균 패턴·리스크 태깅 결과를 주입해 수치 기반 인사이트 추출 → 환각 80% 이상 개선",
      "수동 작성 5분 → 30초 자동화(10배 향상), 문장 이해도 만족도 4.4/5.0 달성",
    ],
    tags: ["GPT-4", "XGBoost", "KMeans", "SHAP", "SMOTE", "DART API", "Flask", "D3.js"],
    bg: "#060C1A",
    reverse: false,
  },
  {
    num: "06",
    title: "CycleGAN 기반 CT→MRI 교차-모달리티 변환",
    period: "2023.06–09 · 딥러닝연구개발소 (한성대학교 단기근무 연구원)",
    role: "도메인 변환 알고리즘 전체 설계 · Generator·Discriminator 구조 튜닝 · Loss 함수 조합 설계",
    desc: "MRI 촬영 비용 부담이 큰 환자를 위해 상대적으로 저렴한 CT 영상을 MRI 품질로 변환하는 진단 보조 연구입니다. 병원 환경에서 CT·MRI 1:1 매칭 데이터는 존재하지 않아, Unpaired 800장으로 학습하는 CycleGAN을 채택했습니다.",
    bullets: [
      "ResNet-9 블록 + VGG Perceptual Loss + Identity Loss 조합으로 해부학적 구조 보존 강제",
      "G:D 학습률 분리(0.0002/0.0001) + 업데이트 비율 G 2회:D 1회로 모드 콜랩스 해결",
      "SSIM +6.2%p(0.82→0.88), 구조 유실률 30% 감소 · 의료진 평가 80% '진단 보조 가치 있음' 판정",
    ],
    tags: ["CycleGAN", "ResNet-9", "PatchGAN", "VGG Perceptual Loss", "Spectral Norm", "PyTorch", "OpenCV"],
    bg: "#0A0616",
    reverse: true,
  },
  {
    num: "07",
    title: "눈치게임 — 위치 기반 인파 분산 서비스",
    period: "성신여자대학교 IT경진대회",
    role: "FP-Growth 패턴 분석 · 가중치 추천 엔진 설계 · 오프라인 캐시 아키텍처",
    desc: "압사 사고 예방을 위해 실시간 군중 밀집도를 예측하고, 혼잡 지역을 피할 수 있는 대체 장소를 능동적으로 추천하는 서비스입니다. 네트워크가 불안정한 현장 환경을 고려해 오프라인 동작도 설계했습니다.",
    bullets: [
      "FP-Growth로 1만 건의 이동 로그 분석 → '홍대 방문객 70%는 이태원으로 이동' 등 연관 규칙 추출",
      "혼잡도(40%) · 거리(30%) · 장소 유사도(20%) · 시간대(10%) 정규화 가중치 추천 점수 엔진 구현",
      "SQLite 기기 내 캐시로 오프라인 히트맵·추천 동작 · 실시간 밀집도 예측 84%, 혼잡 회피 성공률 87%",
    ],
    tags: ["FP-Growth", "SQLite", "Python", "위치 API", "히트맵", "추천 엔진"],
    bg: "#091408",
    award: "성신여자대학교 IT경진대회 장려상",
    reverse: false,
  },
  {
    num: "08",
    title: "lovelop — 상권 분석 AI 시뮬레이션 SaaS",
    period: "2026.02 · AI 자연어처리 집중 과정 3기",
    role: "AI Agent 페르소나 설계 · 시뮬레이션 환경 설계·구축·고도화·검증 · PPT 제작",
    desc: "자영업자 15명 현장 인터뷰를 통해 '단순 예측보다 내 매장의 조건이 변했을 때의 시나리오를 미리 보고 싶다'는 핵심 니즈를 포착했습니다. Before/After 시뮬레이션으로 전략 변화를 정량적으로 검증합니다.",
    bullets: [
      "GPT-5.2 2-Stage 구조: Temp 0.1 '분석가' 모듈로 신뢰성 확보 + Temp 0.7 '전략가' 모듈로 창의적 전략 제안",
      "방문 목적 4유형 × 세대 5종 × 성별·인원 구성의 160개 AI 페르소나가 Agent 5단계 의사결정 시뮬레이션 수행",
      "11가지 지표 Before/After 검증 리포트 생성 · 자영업자 사용 의향 80% · AI 집중 과정 3기 장려상 수상",
    ],
    tags: ["GPT-5.2", "LLM Agent", "Gemma-2-9b", "EXAONE", "Python", "React", "Flask"],
    bg: "#0E0818",
    award: "AI 자연어처리 집중 과정 3기 장려상",
    reverse: true,
  },
];

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

function Chip({ text }: { text: string }) {
  return (
    <span
      className="font-mono text-[11px] px-2.5 py-1.5"
      style={{
        background: "#F5F3FF",
        color: "#4B5563",
        border: "1px solid #EDE9FE",
        borderRadius: 6,
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </span>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="grid grid-cols-1 lg:grid-cols-2 items-start gap-12 py-16"
      style={{ borderTop: "1px solid #F3F4F6" }}
    >
      {/* 텍스트 */}
      <div className={p.reverse ? "lg:order-2" : ""}>
        {/* 번호 + 수상 */}
        <div className="flex items-center gap-2.5 mb-4">
          <span
            className="font-mono text-[11px] tracking-[0.24em] font-bold"
            style={{ color: "#7C3AED" }}
          >
            {p.num}
          </span>
          {p.award && (
            <span
              className="font-mono text-[9.5px] px-2 py-[3px]"
              style={{
                color: "#92400E",
                background: "#FFFBEB",
                border: "1px solid #FDE68A",
                borderRadius: 4,
              }}
            >
              {p.award}
            </span>
          )}
        </div>

        {/* 제목 */}
        <h3
          className="font-black leading-[1.2] tracking-tight mb-3"
          style={{ fontSize: "clamp(18px, 2.4vw, 24px)", color: "#111827" }}
        >
          {p.title}
        </h3>

        {/* 기간·역할 */}
        <div className="mb-6 space-y-0.5">
          <p className="font-mono text-[11.5px]" style={{ color: "#9CA3AF" }}>
            {p.period}
          </p>
          <p className="text-[12px] leading-[1.7]" style={{ color: "#B0B8C8" }}>
            {p.role}
          </p>
        </div>

        {/* 설명 */}
        <p
          className="text-[14px] leading-[2.05] mb-7"
          style={{ color: "#4B5563" }}
        >
          {p.desc}
        </p>

        {/* 핵심 성과 */}
        <ul className="flex flex-col gap-4 mb-8">
          {p.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 text-[13.5px] leading-[1.85]"
              style={{ color: "#374151" }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7C3AED"
                strokeWidth="2.5"
                style={{ marginTop: 5, flexShrink: 0 }}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {b}
            </li>
          ))}
        </ul>

        {/* 태그 */}
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map((t) => <Chip key={t} text={t} />)}
        </div>
      </div>

      {/* 이미지 영역 */}
      <div
        className={`w-full flex items-center justify-center ${p.reverse ? "lg:order-1" : ""}`}
        style={{
          aspectRatio: "4/3",
          background: p.bg,
          borderRadius: 16,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* 후광 */}
        <div
          style={{
            position: "absolute",
            top: "10%", right: "-15%",
            width: "70%", height: "70%",
            borderRadius: "50%",
            background: "#7C3AED",
            opacity: 0.07,
            filter: "blur(48px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%", left: "-10%",
            width: "50%", height: "50%",
            borderRadius: "50%",
            background: "#7C3AED",
            opacity: 0.04,
            filter: "blur(36px)",
          }}
        />
        {/* 카드 라벨 */}
        <div
          className="text-center px-8 py-5 relative"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12,
          }}
        >
          <p
            className="font-mono text-[9.5px] tracking-[0.2em] leading-[2.2] uppercase"
            style={{ color: "rgba(196,181,253,0.75)" }}
          >
            {p.num}
            <br />
            {p.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectSection() {
  return (
    <section id="projects" style={{ background: "#fff" }}>
      <div className="mx-auto px-8 py-20 lg:py-28" style={{ maxWidth: W }}>

        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-2"
        >
          <div>
            <h2
              className="font-black text-[32px] tracking-tight mb-2"
              style={{ color: "#111827" }}
            >
              주요 프로젝트
            </h2>
            <p className="text-[15px] leading-[1.8]" style={{ color: "#9CA3AF" }}>
              실제 문제를 해결하기 위해 처음부터 끝까지 직접 구축한 AI 시스템들입니다.
            </p>
          </div>
          <a
            href="https://github.com/cofldus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium hidden sm:flex items-center gap-1.5 shrink-0 ml-8 transition-colors duration-150"
            style={{ color: "#7C3AED" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#6D28D9")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#7C3AED")}
          >
            GitHub에서 전체 보기
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* 목록 */}
        <div>
          {projects.map((p) => (
            <ProjectCard key={p.num} p={p} />
          ))}
        </div>

      </div>
    </section>
  );
}
