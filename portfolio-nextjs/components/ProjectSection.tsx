"use client";

import { motion } from "framer-motion";

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
  repoUrl?: string;
  repoName?: string;
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
    bg: "#0E1428",
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
    bg: "#061C22",
    repoUrl: "https://github.com/cofldus/medical-chatbot_aegis-bio-sentinels",
    repoName: "medical-chatbot_aegis-bio-sentinels",
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
    bg: "#181008",
    repoUrl: "https://github.com/cofldus/korean-noise-restoration",
    repoName: "korean-noise-restoration",
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
    bg: "#1C0904",
    award: "포스코 인재창조원 장려상 · 팀 리더",
    repoUrl: "https://github.com/cofldus/killkong_konglish-corrector",
    repoName: "killkong_konglish-corrector",
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
    bg: "#050C1E",
    repoUrl: "https://github.com/cofldus/finview_generative-ai-report",
    repoName: "finview_generative-ai-report",
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
    bg: "#180614",
    repoUrl: "https://github.com/cofldus/medical_image_translation",
    repoName: "medical_image_translation",
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
    bg: "#071410",
    award: "성신여자대학교 IT경진대회 장려상",
    repoUrl: "https://github.com/cofldus/hunchgame_density-predict-service",
    repoName: "hunchgame_density-predict-service",
    reverse: false,
  },
  {
    num: "08",
    title: "lovelop — 상권 분석 AI 시뮬레이션 SaaS",
    period: "2026.02 · AI 자연어처리 집중 과정 3기",
    role: "AI Agent 페르소나 설계 · 시뮬레이션 환경 설계·구축·고도화·검증 · PPT 제작",
    desc: "자영업자 15명 현장 인터뷰를 통해 '단순 예측보다 내 매장의 조건이 변했을 때의 시나리오를 미리 보고 싶다'는 핵심 니즈를 포착했습니다. Before/After 시뮬레이션으로 전략 변화를 정량적으로 검증합니다.",
    bullets: [
      "GPT-4.1 2-Stage 구조: Temp 0.1 '분석가' 모듈로 신뢰성 확보 + Temp 0.7 '전략가' 모듈로 창의적 전략 제안",
      "방문 목적 4유형 × 세대 5종 × 성별·인원 구성의 160개 AI 페르소나가 Agent 5단계 의사결정 시뮬레이션 수행",
      "11가지 지표 Before/After 검증 리포트 생성 · 자영업자 사용 의향 80% · AI 집중 과정 3기 장려상 수상",
    ],
    tags: ["GPT-4.1", "LLM Agent", "Gemma-2-9b", "EXAONE", "Python", "React", "Flask"],
    bg: "#0E0618",
    award: "AI 자연어처리 집중 과정 3기 장려상",
    repoUrl: "https://github.com/cofldus/lovelop_commerce-agent-simulation",
    repoName: "lovelop_commerce-agent-simulation",
    reverse: true,
  },
];

// ─── Typography helpers for SVG ──────────────────────────────────
// SAN = sans-serif for labels/text, MONO = only for metric values
const SAN = "Inter, -apple-system, system-ui, sans-serif";
const MON = "'IBM Plex Mono', 'Courier New', monospace";

// ─── SVG Thumbnails ───────────────────────────────────────────────

function Thumb01() {
  const AC = "#A78BFA";
  const nodes = [
    { x: 8, label: "교육부", sub: "블로그", hi: false },
    { x: 96, label: "UiPath", sub: "RPA", hi: true },
    { x: 184, label: "T5", sub: "요약 모델", hi: true },
    { x: 272, label: "Excel", sub: "리포트", hi: false },
  ];
  return (
    <svg viewBox="0 0 360 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      {/* Section label */}
      <text x={14} y={18} fill="rgba(167,139,250,0.55)" fontSize={10} fontFamily={SAN} fontWeight={600}>Pipeline Architecture</text>
      <line x1={14} y1={24} x2={346} y2={24} stroke="rgba(255,255,255,0.08)" strokeWidth={1} />

      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={i}>
          <rect x={n.x} y={34} width={72} height={46} rx={4}
            fill={n.hi ? "rgba(167,139,250,0.2)" : "rgba(255,255,255,0.07)"}
            stroke={n.hi ? "rgba(167,139,250,0.6)" : "rgba(255,255,255,0.18)"}
            strokeWidth={n.hi ? 1.5 : 1}
          />
          <text x={n.x + 36} y={53} textAnchor="middle"
            fill={n.hi ? AC : "rgba(255,255,255,0.82)"} fontSize={12} fontFamily={SAN} fontWeight={700}>{n.label}</text>
          <text x={n.x + 36} y={70} textAnchor="middle"
            fill="rgba(255,255,255,0.45)" fontSize={9.5} fontFamily={SAN}>{n.sub}</text>
          {i < 3 && (
            <>
              <line x1={n.x + 72} y1={57} x2={n.x + 84} y2={57} stroke="rgba(167,139,250,0.5)" strokeWidth={1.5} />
              <polygon points={`${n.x + 84},54 ${n.x + 90},57 ${n.x + 84},60`} fill="rgba(167,139,250,0.5)" />
            </>
          )}
        </g>
      ))}

      {/* Metrics */}
      {[
        { x: 8, label: "처리 시간", value: "8h → 3h", vc: "#86EFAC" },
        { x: 130, label: "자동화율", value: "95%+", vc: "#86EFAC" },
        { x: 252, label: "수집량 / 회", value: "200건", vc: AC },
      ].map((m) => (
        <g key={m.label}>
          <rect x={m.x} y={96} width={110} height={58} rx={4} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth={1} />
          <text x={m.x + 55} y={114} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize={10} fontFamily={SAN}>{m.label}</text>
          <text x={m.x + 55} y={144} textAnchor="middle" fill={m.vc} fontSize={21} fontFamily={MON} fontWeight={700}>{m.value}</text>
        </g>
      ))}

      {/* Award */}
      <rect x={8} y={166} width={198} height={26} rx={4} fill="rgba(167,139,250,0.12)" stroke="rgba(167,139,250,0.3)" strokeWidth={1} />
      <text x={107} y={183} textAnchor="middle" fill={AC} fontSize={9.5} fontFamily={SAN} fontWeight={600}>★  한국지능정보사회진흥원 특별상</text>
    </svg>
  );
}

function Thumb02() {
  const AC = "#22D3EE";
  return (
    <svg viewBox="0 0 360 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <text x={14} y={18} fill="rgba(34,211,238,0.55)" fontSize={10} fontFamily={SAN} fontWeight={600}>Advanced RAG Architecture</text>
      <line x1={14} y1={24} x2={346} y2={24} stroke="rgba(255,255,255,0.08)" strokeWidth={1} />

      {/* Query */}
      <rect x={8} y={42} width={58} height={42} rx={4} fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.2)" strokeWidth={1.5} />
      <text x={37} y={60} textAnchor="middle" fill="rgba(255,255,255,0.82)" fontSize={11} fontFamily={SAN} fontWeight={700}>Query</text>
      <text x={37} y={75} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize={9} fontFamily={SAN}>입력</text>

      {/* Fork */}
      <line x1={66} y1={63} x2={80} y2={63} stroke="rgba(255,255,255,0.2)" strokeWidth={1.2} />
      <line x1={80} y1={63} x2={80} y2={40} stroke="rgba(255,255,255,0.15)" strokeWidth={1} />
      <line x1={80} y1={63} x2={80} y2={86} stroke="rgba(255,255,255,0.15)" strokeWidth={1} />
      <line x1={80} y1={40} x2={94} y2={40} stroke="rgba(255,255,255,0.15)" strokeWidth={1} />
      <line x1={80} y1={86} x2={94} y2={86} stroke="rgba(255,255,255,0.15)" strokeWidth={1} />

      {/* BM25 */}
      <rect x={94} y={26} width={74} height={30} rx={4} fill="rgba(34,211,238,0.18)" stroke="rgba(34,211,238,0.55)" strokeWidth={1.5} />
      <text x={131} y={39} textAnchor="middle" fill={AC} fontSize={11} fontFamily={SAN} fontWeight={700}>BM25</text>
      <text x={131} y={51} textAnchor="middle" fill="rgba(34,211,238,0.6)" fontSize={8.5} fontFamily={MON}>k = 20</text>

      {/* Vector */}
      <rect x={94} y={72} width={74} height={30} rx={4} fill="rgba(34,211,238,0.18)" stroke="rgba(34,211,238,0.55)" strokeWidth={1.5} />
      <text x={131} y={85} textAnchor="middle" fill={AC} fontSize={11} fontFamily={SAN} fontWeight={700}>Vector</text>
      <text x={131} y={97} textAnchor="middle" fill="rgba(34,211,238,0.6)" fontSize={8.5} fontFamily={MON}>k = 20</text>

      {/* Merge → ReRanker */}
      <line x1={168} y1={41} x2={184} y2={63} stroke="rgba(255,255,255,0.18)" strokeWidth={1} />
      <line x1={168} y1={87} x2={184} y2={63} stroke="rgba(255,255,255,0.18)" strokeWidth={1} />
      <rect x={184} y={46} width={82} height={36} rx={4} fill="rgba(250,204,21,0.14)" stroke="rgba(250,204,21,0.5)" strokeWidth={1.5} />
      <text x={225} y={61} textAnchor="middle" fill="#FDE68A" fontSize={11} fontFamily={SAN} fontWeight={700}>ReRanker</text>
      <text x={225} y={75} textAnchor="middle" fill="rgba(253,230,138,0.55)" fontSize={9} fontFamily={SAN}>Top-5 선택</text>

      {/* EXAONE */}
      <line x1={266} y1={64} x2={280} y2={64} stroke={AC} strokeWidth={1.8} />
      <polygon points="278,61 284,64 278,67" fill={AC} />
      <rect x={284} y={46} width={70} height={36} rx={4} fill="rgba(34,211,238,0.2)" stroke="rgba(34,211,238,0.65)" strokeWidth={1.8} />
      <text x={319} y={61} textAnchor="middle" fill={AC} fontSize={11} fontFamily={SAN} fontWeight={800}>EXAONE</text>
      <text x={319} y={75} textAnchor="middle" fill="rgba(34,211,238,0.55)" fontSize={8.5} fontFamily={MON}>3.5-7.8B</text>

      {/* Metrics */}
      {[
        { x: 8, label: "Accuracy", value: "+0.04 ↑", vc: "#86EFAC" },
        { x: 130, label: "BERTScore", value: "+0.16 ↑", vc: "#86EFAC" },
        { x: 252, label: "데이터셋", value: "5.5만건", vc: AC },
      ].map((m) => (
        <g key={m.label}>
          <rect x={m.x} y={106} width={108} height={56} rx={4} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth={1} />
          <text x={m.x + 54} y={124} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize={10} fontFamily={SAN}>{m.label}</text>
          <text x={m.x + 54} y={151} textAnchor="middle" fill={m.vc} fontSize={19} fontFamily={MON} fontWeight={700}>{m.value}</text>
        </g>
      ))}

      <text x={14} y={178} fill="rgba(255,255,255,0.22)" fontSize={9.5} fontFamily={SAN}>EXAONE · BM25 · FAISS · bge-reranker-v2-m3</text>
    </svg>
  );
}

function Thumb03() {
  const AC = "#FCD34D";
  return (
    <svg viewBox="0 0 360 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <text x={14} y={18} fill="rgba(252,211,77,0.55)" fontSize={10} fontFamily={SAN} fontWeight={600}>Branch Classifier Architecture</text>
      <line x1={14} y1={24} x2={346} y2={24} stroke="rgba(255,255,255,0.08)" strokeWidth={1} />

      {/* Input */}
      <rect x={8} y={38} width={62} height={42} rx={4} fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.2)" strokeWidth={1.5} />
      <text x={39} y={56} textAnchor="middle" fill="rgba(255,255,255,0.82)" fontSize={11} fontFamily={SAN} fontWeight={700}>노이즈</text>
      <text x={39} y={71} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize={9} fontFamily={SAN}>텍스트</text>

      {/* JAMO */}
      <line x1={70} y1={59} x2={82} y2={59} stroke="rgba(255,255,255,0.2)" strokeWidth={1.2} />
      <polygon points="80,56 86,59 80,62" fill="rgba(255,255,255,0.3)" />
      <rect x={86} y={38} width={68} height={42} rx={4} fill="rgba(252,211,77,0.16)" stroke="rgba(252,211,77,0.5)" strokeWidth={1.5} />
      <text x={120} y={56} textAnchor="middle" fill={AC} fontSize={11} fontFamily={SAN} fontWeight={700}>JAMO</text>
      <text x={120} y={71} textAnchor="middle" fill="rgba(252,211,77,0.55)" fontSize={9} fontFamily={SAN}>전처리</text>

      {/* Classifier */}
      <line x1={154} y1={59} x2={166} y2={59} stroke="rgba(255,255,255,0.2)" strokeWidth={1.2} />
      <polygon points="164,56 170,59 164,62" fill="rgba(255,255,255,0.3)" />
      <rect x={170} y={30} width={84} height={58} rx={4} fill="rgba(252,211,77,0.12)" stroke="rgba(252,211,77,0.45)" strokeWidth={1.5} />
      <text x={212} y={52} textAnchor="middle" fill={AC} fontSize={10.5} fontFamily={SAN} fontWeight={700}>KoELECTRA</text>
      <text x={212} y={67} textAnchor="middle" fill="rgba(252,211,77,0.6)" fontSize={9.5} fontFamily={SAN}>Classifier</text>
      <text x={212} y={80} textAnchor="middle" fill="rgba(252,211,77,0.4)" fontSize={8.5} fontFamily={SAN}>유형 분류</text>

      {/* Branch */}
      <line x1={254} y1={59} x2={268} y2={59} stroke="rgba(255,255,255,0.18)" strokeWidth={1} />
      <line x1={268} y1={59} x2={268} y2={38} stroke="rgba(255,255,255,0.18)" strokeWidth={1} />
      <line x1={268} y1={59} x2={268} y2={80} stroke="rgba(255,255,255,0.18)" strokeWidth={1} />
      <line x1={268} y1={38} x2={280} y2={38} stroke="rgba(255,255,255,0.18)" strokeWidth={1} />
      <line x1={268} y1={80} x2={280} y2={80} stroke="rgba(255,255,255,0.18)" strokeWidth={1} />

      <rect x={280} y={22} width={72} height={32} rx={4} fill="rgba(252,211,77,0.18)" stroke="rgba(252,211,77,0.55)" strokeWidth={1.5} />
      <text x={316} y={37} textAnchor="middle" fill={AC} fontSize={10.5} fontFamily={SAN} fontWeight={700}>KoBART-A</text>
      <text x={316} y={49} textAnchor="middle" fill="rgba(252,211,77,0.55)" fontSize={8.5} fontFamily={SAN}>야민정음</text>

      <rect x={280} y={64} width={72} height={32} rx={4} fill="rgba(252,211,77,0.18)" stroke="rgba(252,211,77,0.55)" strokeWidth={1.5} />
      <text x={316} y={79} textAnchor="middle" fill={AC} fontSize={10.5} fontFamily={SAN} fontWeight={700}>KoBART-B</text>
      <text x={316} y={91} textAnchor="middle" fill="rgba(252,211,77,0.55)" fontSize={8.5} fontFamily={SAN}>음운오류</text>

      {/* Metrics */}
      {[
        { x: 8, label: "BERTScore", value: "0.9812", vc: "#86EFAC" },
        { x: 130, label: "CER", value: "0.0426", vc: "#86EFAC" },
        { x: 252, label: "성능 향상", value: "+5.6%p", vc: AC },
      ].map((m) => (
        <g key={m.label}>
          <rect x={m.x} y={110} width={108} height={56} rx={4} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth={1} />
          <text x={m.x + 54} y={128} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize={10} fontFamily={SAN}>{m.label}</text>
          <text x={m.x + 54} y={155} textAnchor="middle" fill={m.vc} fontSize={19} fontFamily={MON} fontWeight={700}>{m.value}</text>
        </g>
      ))}

      <text x={14} y={181} fill="rgba(255,255,255,0.22)" fontSize={9.5} fontFamily={SAN}>KoBART · KoELECTRA · JAMO · PyTorch</text>
    </svg>
  );
}

function Thumb04() {
  const AC = "#FB923C";
  return (
    <svg viewBox="0 0 360 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <text x={14} y={18} fill="rgba(251,146,60,0.55)" fontSize={10} fontFamily={SAN} fontWeight={600}>Model Compression</text>
      <line x1={14} y1={24} x2={346} y2={24} stroke="rgba(255,255,255,0.08)" strokeWidth={1} />

      <text x={14} y={44} fill="rgba(255,255,255,0.45)" fontSize={9.5} fontFamily={SAN}>Before</text>
      <rect x={14} y={50} width={258} height={22} rx={3} fill="rgba(239,68,68,0.22)" stroke="rgba(239,68,68,0.5)" strokeWidth={1.5} />
      <text x={282} y={65} fill="rgba(239,68,68,0.9)" fontSize={14} fontFamily={MON} fontWeight={800}>14 GB</text>

      <text x={14} y={90} fill="rgba(255,255,255,0.45)" fontSize={9.5} fontFamily={SAN}>After</text>
      <rect x={14} y={96} width={64} height={22} rx={3} fill="rgba(251,146,60,0.35)" stroke="rgba(251,146,60,0.7)" strokeWidth={1.8} />
      <text x={88} y={112} fill={AC} fontSize={14} fontFamily={MON} fontWeight={800}>3.0 GB</text>

      {/* 76% badge */}
      <rect x={198} y={88} width={76} height={38} rx={5} fill="rgba(134,239,172,0.12)" stroke="rgba(134,239,172,0.4)" strokeWidth={1.5} />
      <text x={236} y={103} textAnchor="middle" fill="rgba(134,239,172,0.65)" fontSize={9.5} fontFamily={SAN}>압축률</text>
      <text x={236} y={120} textAnchor="middle" fill="#86EFAC" fontSize={19} fontFamily={MON} fontWeight={900}>76%↓</text>

      <text x={14} y={142} fill="rgba(255,255,255,0.28)" fontSize={9.5} fontFamily={SAN}>LoRA  ·  4-bit NF4  ·  Multilingual Token Pruning ~10%</text>
      <line x1={14} y1={149} x2={346} y2={149} stroke="rgba(255,255,255,0.07)" strokeWidth={1} />

      {/* Speed metrics */}
      {[
        { x: 8, label: "응답 지연", value: "2.3s→0.47s", vc: "#86EFAC" },
        { x: 128, label: "CPU 추론", value: "0.3s", vc: "#86EFAC" },
        { x: 248, label: "일관성", value: "92%+", vc: AC },
      ].map((m) => (
        <g key={m.label}>
          <rect x={m.x} y={155} width={110} height={50} rx={4} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth={1} />
          <text x={m.x + 55} y={172} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize={10} fontFamily={SAN}>{m.label}</text>
          <text x={m.x + 55} y={196} textAnchor="middle" fill={m.vc} fontSize={16} fontFamily={MON} fontWeight={700}>{m.value}</text>
        </g>
      ))}
    </svg>
  );
}

function Thumb05() {
  const AC = "#60A5FA";
  const row1 = [
    { label: "DART API", sub: "ETL", x: 8, hi: false },
    { label: "XGBoost", sub: "91% Acc", x: 100, hi: true },
    { label: "KMeans", sub: "군집화", x: 192, hi: true },
    { label: "GPT-4", sub: "인사이트", x: 284, hi: false },
  ];
  return (
    <svg viewBox="0 0 360 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <text x={14} y={18} fill="rgba(96,165,250,0.55)" fontSize={10} fontFamily={SAN} fontWeight={600}>Fintech Analysis Pipeline</text>
      <line x1={14} y1={24} x2={346} y2={24} stroke="rgba(255,255,255,0.08)" strokeWidth={1} />

      {row1.map((s, i) => (
        <g key={s.label}>
          <rect x={s.x} y={34} width={76} height={44} rx={4}
            fill={s.hi ? "rgba(96,165,250,0.18)" : "rgba(255,255,255,0.06)"}
            stroke={s.hi ? "rgba(96,165,250,0.55)" : "rgba(255,255,255,0.18)"}
            strokeWidth={s.hi ? 1.5 : 1}
          />
          <text x={s.x + 38} y={52} textAnchor="middle"
            fill={s.hi ? AC : "rgba(255,255,255,0.82)"} fontSize={11} fontFamily={SAN} fontWeight={700}>{s.label}</text>
          <text x={s.x + 38} y={68} textAnchor="middle"
            fill={s.hi ? "rgba(96,165,250,0.6)" : "rgba(255,255,255,0.4)"} fontSize={9} fontFamily={SAN}>{s.sub}</text>
          {i < 3 && (
            <>
              <line x1={s.x + 76} y1={56} x2={s.x + 88} y2={56} stroke="rgba(96,165,250,0.45)" strokeWidth={1.5} />
              <polygon points={`${s.x + 88},53 ${s.x + 94},56 ${s.x + 88},59`} fill="rgba(96,165,250,0.45)" />
            </>
          )}
        </g>
      ))}

      {/* Row 2 connector */}
      <line x1={322} y1={78} x2={322} y2={96} stroke="rgba(96,165,250,0.25)" strokeWidth={1} />
      <line x1={322} y1={96} x2={88} y2={96} stroke="rgba(96,165,250,0.18)" strokeWidth={1} strokeDasharray="4 3" />
      <line x1={88} y1={96} x2={88} y2={114} stroke="rgba(96,165,250,0.25)" strokeWidth={1} />

      <rect x={8} y={114} width={76} height={40} rx={4} fill="rgba(96,165,250,0.18)" stroke="rgba(96,165,250,0.55)" strokeWidth={1.5} />
      <text x={46} y={131} textAnchor="middle" fill={AC} fontSize={11} fontFamily={SAN} fontWeight={700}>D3.js</text>
      <text x={46} y={146} textAnchor="middle" fill="rgba(96,165,250,0.6)" fontSize={9} fontFamily={SAN}>대시보드</text>

      <rect x={100} y={114} width={172} height={40} rx={4} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth={1} />
      <text x={186} y={131} textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize={10} fontFamily={SAN}>환각 80%↓ 개선</text>
      <text x={186} y={146} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize={8.5} fontFamily={SAN}>군집 패턴 주입 → LLM 수치 계산 차단</text>

      {/* Metrics */}
      {[
        { x: 8, label: "분류 정확도", value: "91%", vc: "#86EFAC" },
        { x: 130, label: "처리 속도", value: "10x", vc: "#86EFAC" },
        { x: 252, label: "만족도", value: "4.4/5", vc: AC },
      ].map((m) => (
        <g key={m.label}>
          <rect x={m.x} y={168} width={108} height={44} rx={4} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth={1} />
          <text x={m.x + 54} y={183} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize={10} fontFamily={SAN}>{m.label}</text>
          <text x={m.x + 54} y={205} textAnchor="middle" fill={m.vc} fontSize={18} fontFamily={MON} fontWeight={700}>{m.value}</text>
        </g>
      ))}
    </svg>
  );
}

function Thumb06() {
  const AC = "#F472B6";
  return (
    <svg viewBox="0 0 360 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <text x={14} y={18} fill="rgba(244,114,182,0.55)" fontSize={10} fontFamily={SAN} fontWeight={600}>CT → MRI Domain Transfer</text>
      <line x1={14} y1={24} x2={346} y2={24} stroke="rgba(255,255,255,0.08)" strokeWidth={1} />

      {/* CT grid */}
      <rect x={10} y={32} width={100} height={100} rx={5} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" strokeWidth={1.5} />
      {Array.from({ length: 7 }).map((_, r) =>
        Array.from({ length: 7 }).map((_, c) => (
          <rect key={`ct-${r}-${c}`}
            x={14 + c * 13} y={36 + r * 13} width={11} height={11} rx={1}
            fill={`rgba(200,200,215,${0.07 + ((r + c * 2) % 5) * 0.045})`} />
        ))
      )}
      <text x={60} y={146} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize={10} fontFamily={SAN} fontWeight={600}>CT Input</text>

      {/* CycleGAN box */}
      <line x1={110} y1={82} x2={126} y2={82} stroke={AC} strokeWidth={1.8} />
      <rect x={126} y={60} width={108} height={44} rx={4} fill="rgba(244,114,182,0.16)" stroke="rgba(244,114,182,0.55)" strokeWidth={1.5} />
      <text x={180} y={78} textAnchor="middle" fill={AC} fontSize={12} fontFamily={SAN} fontWeight={800}>CycleGAN</text>
      <text x={180} y={93} textAnchor="middle" fill="rgba(244,114,182,0.55)" fontSize={9} fontFamily={SAN}>ResNet-9 Generator</text>
      <line x1={234} y1={82} x2={250} y2={82} stroke={AC} strokeWidth={1.8} />
      <polygon points="248,79 254,82 248,85" fill={AC} />

      {/* MRI grid */}
      <rect x={254} y={32} width={100} height={100} rx={5} fill="rgba(244,114,182,0.06)" stroke="rgba(244,114,182,0.3)" strokeWidth={1.5} />
      {Array.from({ length: 7 }).map((_, r) =>
        Array.from({ length: 7 }).map((_, c) => (
          <rect key={`mri-${r}-${c}`}
            x={258 + c * 13} y={36 + r * 13} width={11} height={11} rx={1}
            fill={`rgba(244,114,182,${0.07 + ((6 - r + c) % 5) * 0.065})`} />
        ))
      )}
      <text x={304} y={146} textAnchor="middle" fill="rgba(244,114,182,0.6)" fontSize={10} fontFamily={SAN} fontWeight={600}>MRI Output</text>

      {/* Metrics */}
      {[
        { x: 8, label: "SSIM", value: "0.82→0.88", vc: "#86EFAC" },
        { x: 130, label: "의료진 평가", value: "80%+", vc: "#86EFAC" },
        { x: 252, label: "학습 데이터", value: "800장", vc: AC },
      ].map((m) => (
        <g key={m.label}>
          <rect x={m.x} y={158} width={108} height={52} rx={4} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth={1} />
          <text x={m.x + 54} y={175} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize={10} fontFamily={SAN}>{m.label}</text>
          <text x={m.x + 54} y={202} textAnchor="middle" fill={m.vc} fontSize={17} fontFamily={MON} fontWeight={700}>{m.value}</text>
        </g>
      ))}
    </svg>
  );
}

function Thumb07() {
  const AC = "#4ADE80";
  const heat = [
    [0.92, 0.55, 0.28, 0.12],
    [0.68, 0.95, 0.48, 0.22],
    [0.38, 0.78, 0.72, 0.42],
    [0.14, 0.32, 0.52, 0.64],
  ];
  const zones = ["홍대", "이태원", "강남", "여의도"];
  const fc = (v: number) =>
    v > 0.75 ? `rgba(239,68,68,${0.18 + v * 0.5})`
    : v > 0.45 ? `rgba(251,146,60,${0.18 + v * 0.45})`
    : `rgba(74,222,128,${0.18 + v * 0.5})`;
  const sc = (v: number) =>
    v > 0.75 ? `rgba(239,68,68,${0.35 + v * 0.3})`
    : v > 0.45 ? `rgba(251,146,60,${0.35 + v * 0.25})`
    : `rgba(74,222,128,${0.35 + v * 0.3})`;

  return (
    <svg viewBox="0 0 360 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <text x={14} y={18} fill="rgba(74,222,128,0.55)" fontSize={10} fontFamily={SAN} fontWeight={600}>Crowd Density Heatmap</text>
      <line x1={14} y1={24} x2={346} y2={24} stroke="rgba(255,255,255,0.08)" strokeWidth={1} />

      {heat.map((row, r) =>
        row.map((v, c) => (
          <rect key={`h-${r}-${c}`}
            x={44 + c * 44} y={34 + r * 28} width={40} height={24} rx={3}
            fill={fc(v)} stroke={sc(v)} strokeWidth={1.2} />
        ))
      )}
      {zones.map((z, i) => (
        <text key={z} x={38} y={50 + i * 28} fill="rgba(255,255,255,0.5)" fontSize={10} fontFamily={SAN} textAnchor="end" fontWeight={500}>{z}</text>
      ))}

      {/* Legend */}
      <rect x={44} y={148} width={13} height={9} rx={2} fill="rgba(239,68,68,0.65)" />
      <text x={61} y={157} fill="rgba(255,255,255,0.5)" fontSize={9} fontFamily={SAN}>혼잡</text>
      <rect x={96} y={148} width={13} height={9} rx={2} fill="rgba(251,146,60,0.65)" />
      <text x={113} y={157} fill="rgba(255,255,255,0.5)" fontSize={9} fontFamily={SAN}>보통</text>
      <rect x={148} y={148} width={13} height={9} rx={2} fill="rgba(74,222,128,0.65)" />
      <text x={165} y={157} fill="rgba(255,255,255,0.5)" fontSize={9} fontFamily={SAN}>여유</text>

      {/* Weights */}
      <rect x={224} y={34} width={132} height={120} rx={4} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth={1} />
      <text x={290} y={50} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize={9.5} fontFamily={SAN}>추천 가중치</text>
      {[
        { label: "혼잡도", w: 40 },
        { label: "거리", w: 30 },
        { label: "유사도", w: 20 },
        { label: "시간대", w: 10 },
      ].map((item, i) => (
        <g key={item.label}>
          <text x={232} y={70 + i * 22} fill="rgba(255,255,255,0.55)" fontSize={10} fontFamily={SAN}>{item.label}</text>
          <rect x={282} y={62 + i * 22} width={60} height={8} rx={2} fill="rgba(255,255,255,0.07)" />
          <rect x={282} y={62 + i * 22} width={item.w * 0.6} height={8} rx={2} fill={`rgba(74,222,128,${0.28 + (item.w / 40) * 0.5})`} />
          <text x={349} y={71 + i * 22} fill={AC} fontSize={10} fontFamily={MON} fontWeight={700} textAnchor="end">{item.w}%</text>
        </g>
      ))}

      {/* Metrics */}
      {[
        { x: 8, label: "밀집도 예측", value: "84%", vc: "#86EFAC" },
        { x: 116, label: "혼잡 회피율", value: "87%", vc: "#86EFAC" },
        { x: 224, label: "이동 로그", value: "10만건", vc: AC },
      ].map((m) => (
        <g key={m.label}>
          <rect x={m.x} y={172} width={100} height={40} rx={4} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth={1} />
          <text x={m.x + 50} y={187} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize={9.5} fontFamily={SAN}>{m.label}</text>
          <text x={m.x + 50} y={206} textAnchor="middle" fill={m.vc} fontSize={18} fontFamily={MON} fontWeight={700}>{m.value}</text>
        </g>
      ))}
    </svg>
  );
}

function Thumb08() {
  const AC = "#C084FC";
  const shades = ["rgba(192,132,252,0.55)", "rgba(167,139,250,0.45)", "rgba(216,180,254,0.5)", "rgba(139,92,246,0.6)",
    "rgba(192,132,252,0.4)", "rgba(167,139,250,0.6)", "rgba(216,180,254,0.4)", "rgba(139,92,246,0.5)",
    "rgba(192,132,252,0.6)", "rgba(167,139,250,0.5)", "rgba(216,180,254,0.55)", "rgba(139,92,246,0.45)"];

  return (
    <svg viewBox="0 0 360 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <text x={14} y={18} fill="rgba(192,132,252,0.55)" fontSize={10} fontFamily={SAN} fontWeight={600}>AI Agent Simulation</text>
      <line x1={14} y1={24} x2={346} y2={24} stroke="rgba(255,255,255,0.08)" strokeWidth={1} />

      {/* Persona grid */}
      <text x={12} y={42} fill="rgba(255,255,255,0.38)" fontSize={9.5} fontFamily={SAN}>160 페르소나</text>
      {shades.map((c, i) => (
        <rect key={i}
          x={12 + (i % 4) * 18} y={46 + Math.floor(i / 4) * 18} width={14} height={14} rx={3}
          fill={c.replace(/,([\d.]+)\)/, ",0.12)")}
          stroke={c} strokeWidth={1.2} />
      ))}
      <text x={97} y={106} fill="rgba(255,255,255,0.2)" fontSize={12} fontFamily={SAN}>···</text>

      {/* Arrow */}
      <line x1={90} y1={88} x2={116} y2={88} stroke="rgba(192,132,252,0.4)" strokeWidth={1.8} />
      <polygon points="114,85 120,88 114,91" fill="rgba(192,132,252,0.4)" />

      {/* Stage 1 */}
      <rect x={120} y={58} width={96} height={34} rx={4} fill="rgba(192,132,252,0.18)" stroke="rgba(192,132,252,0.55)" strokeWidth={1.5} />
      <text x={168} y={73} textAnchor="middle" fill={AC} fontSize={11} fontFamily={SAN} fontWeight={700}>분석가 GPT</text>
      <text x={168} y={85} textAnchor="middle" fill="rgba(192,132,252,0.55)" fontSize={8.5} fontFamily={SAN}>Temp 0.1 · 신뢰성</text>
      <line x1={168} y1={92} x2={168} y2={106} stroke="rgba(192,132,252,0.35)" strokeWidth={1} strokeDasharray="3 2" />

      {/* Stage 2 */}
      <rect x={120} y={106} width={96} height={34} rx={4} fill="rgba(34,211,238,0.12)" stroke="rgba(34,211,238,0.45)" strokeWidth={1.5} />
      <text x={168} y={121} textAnchor="middle" fill="#22D3EE" fontSize={11} fontFamily={SAN} fontWeight={700}>전략가 GPT</text>
      <text x={168} y={133} textAnchor="middle" fill="rgba(34,211,238,0.55)" fontSize={8.5} fontFamily={SAN}>Temp 0.7 · 창의성</text>

      {/* Output */}
      <line x1={216} y1={123} x2={234} y2={123} stroke={AC} strokeWidth={1.8} />
      <polygon points="232,120 238,123 232,126" fill={AC} />
      <rect x={238} y={48} width={114} height={114} rx={4} fill="rgba(255,255,255,0.04)" stroke="rgba(192,132,252,0.22)" strokeWidth={1} />
      <text x={295} y={62} textAnchor="middle" fill="rgba(255,255,255,0.42)" fontSize={9.5} fontFamily={SAN}>리포트 11 지표</text>
      {["매출 변화", "방문 빈도", "객단가", "재방문율", "경쟁 지수"].map((label, i) => (
        <g key={label}>
          <text x={246} y={77 + i * 18} fill="rgba(255,255,255,0.52)" fontSize={9.5} fontFamily={SAN}>{label}</text>
          <rect x={312} y={68 + i * 18} width={32} height={8} rx={2} fill="rgba(255,255,255,0.06)" />
          <rect x={312} y={68 + i * 18} width={10 + i * 5} height={8} rx={2}
            fill={`rgba(192,132,252,${0.35 + i * 0.1})`} />
        </g>
      ))}

      {/* Metrics */}
      {[
        { x: 8, label: "사용 의향", value: "80%", vc: "#86EFAC" },
        { x: 124, label: "Before / After", value: "11지표", vc: "#86EFAC" },
        { x: 240, label: "AI 페르소나", value: "160명", vc: AC },
      ].map((m) => (
        <g key={m.label}>
          <rect x={m.x} y={178} width={108} height={36} rx={4} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth={1} />
          <text x={m.x + 54} y={192} textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize={9.5} fontFamily={SAN}>{m.label}</text>
          <text x={m.x + 54} y={209} textAnchor="middle" fill={m.vc} fontSize={15} fontFamily={MON} fontWeight={700}>{m.value}</text>
        </g>
      ))}
    </svg>
  );
}

const thumbMap: Record<string, React.FC> = {
  "01": Thumb01, "02": Thumb02, "03": Thumb03, "04": Thumb04,
  "05": Thumb05, "06": Thumb06, "07": Thumb07, "08": Thumb08,
};

// ─── Layout ───────────────────────────────────────────────────────

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

function Chip({ text }: { text: string }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: 10.5,
        padding: "3px 8px",
        background: "var(--accent-bg)",
        color: "var(--ink-mid)",
        border: "1px solid var(--accent-bd)",
        borderRadius: 3,
        whiteSpace: "nowrap" as const,
      }}
    >
      {text}
    </span>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const Thumb = thumbMap[p.num];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 44,
        alignItems: "stretch",
        padding: "40px 0",
        borderTop: "1px solid var(--border-sub)",
      }}
      className="project-card"
    >
      {/* 텍스트 */}
      <div style={{ order: p.reverse ? 2 : 1, display: "flex", flexDirection: "column" }}>
        {/* 번호 + 수상 */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", fontWeight: 700, color: "var(--accent)" }}>
            {p.num}
          </span>
          {p.award && (
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 9.5, padding: "2px 7px", color: "#92400E", background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: 3 }}>
              {p.award}
            </span>
          )}
        </div>

        {/* 제목 — weight 700, not 900 */}
        <h3
          style={{
            fontSize: "clamp(17px, 1.8vw, 21px)",
            fontWeight: 700,
            lineHeight: 1.3,
            letterSpacing: "-0.025em",
            color: "var(--ink)",
            marginBottom: 10,
          }}
        >
          {p.title}
        </h3>

        {/* 기간·역할 */}
        <div style={{ marginBottom: 14 }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--ink-light)", marginBottom: 3 }}>{p.period}</p>
          <p style={{ fontSize: 12, lineHeight: 1.65, color: "var(--ink-ghost)" }}>{p.role}</p>
        </div>

        {/* 설명 */}
        <p style={{ fontSize: 13.5, lineHeight: 1.95, color: "var(--ink-mid)", marginBottom: 18 }}>{p.desc}</p>

        {/* 핵심 성과 */}
        <ul style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 18 }}>
          {p.bullets.map((b) => (
            <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13, lineHeight: 1.8, color: "var(--ink)" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" style={{ marginTop: 4, flexShrink: 0 }}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {b}
            </li>
          ))}
        </ul>

        {/* 태그 */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: "auto" }}>
          {p.tags.map((t) => <Chip key={t} text={t} />)}
        </div>

        {p.repoUrl && (
          <div style={{ marginTop: 16 }}>
            <a
              href={p.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 12.5,
                fontWeight: 600,
                color: "var(--accent)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              GitHub Repo
              {p.repoName && (
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--ink-light)" }}>
                  {p.repoName}
                </span>
              )}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* SVG Thumbnail — stretches to match text height */}
      <div
        style={{
          order: p.reverse ? 1 : 2,
          minHeight: 260,
          background: p.bg,
          borderRadius: 8,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
          position: "relative",
        }}
      >
        <div style={{
          position: "absolute", top: "-20%", right: "-8%",
          width: "60%", height: "60%", borderRadius: "50%",
          background: "#7C3AED", opacity: 0.04, filter: "blur(40px)", pointerEvents: "none",
        }} />
        {Thumb && <Thumb />}
      </div>
    </motion.div>
  );
}

export default function ProjectSection() {
  return (
    <section id="projects" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "var(--cw)", margin: "0 auto", padding: "60px var(--cp)" }}>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 4 }}
        >
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 8 }}>
              Projects
            </p>
            <p style={{ fontSize: 14, color: "var(--ink-light)" }}>
              실제 문제를 해결하기 위해 처음부터 끝까지 직접 구축한 AI 시스템들입니다.
            </p>
          </div>
          <a
            href="https://github.com/cofldus"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12.5, fontWeight: 500, color: "var(--accent)", textDecoration: "none", flexShrink: 0, marginLeft: 24, transition: "opacity 0.15s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            GitHub
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        <div>
          {projects.map((p) => <ProjectCard key={p.num} p={p} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .project-card { grid-template-columns: 1fr !important; }
          .project-card > div { order: unset !important; }
        }
      `}</style>
    </section>
  );
}
