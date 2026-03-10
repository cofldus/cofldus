import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "이채연 — AI / NLP Engineer Portfolio",
  description:
    "AI·NLP 엔지니어 이채연의 포트폴리오. 한글 복원, 상권분석 SaaS, 콩글리쉬 교정, 재무분석, 의료영상 변환 프로젝트.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&family=Noto+Sans+KR:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
