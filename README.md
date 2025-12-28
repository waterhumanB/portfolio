# Portfolio - 배수인 (Bae Su-in)

"The Slalom Flow" - 부드러운 스크롤로 역량을 탐험하는 프리미엄 미니멀 포트폴리오

## 🚀 기술 스택

- **Framework:** Next.js 14 (App Router)
- **UI Framework:** Material-UI (MUI) v5 + @mui/lab
- **3D Graphics:** React Three Fiber, Three.js, @react-three/drei
- **Animation:** GSAP (ScrollTrigger), Framer Motion
- **Language:** TypeScript
- **Styling:** Emotion (MUI), Custom Theme

## 🎨 디자인 테마

### Premium Minimal Dark
- **Background:** `#000000` (Deep Black)
- **Glass Effect:** `backdrop-filter: blur(20px)` + `rgba(255,255,255,0.05)`
- **Typography:** Inter font family
- **No Default Material Design:** Custom MUI theme overrides

### 섹션 구성

1. **Hero** - Particles 배경 + DecryptedText 애니메이션
2. **Skills** - Glass Pills 스타일의 Chip 컴포넌트
3. **Projects** - Slalom 스크롤 레이아웃 (지그재그 프로젝트 카드)
4. **Career** - MUI Timeline 컴포넌트

## 📦 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start
```

개발 서버는 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

## 📁 프로젝트 구조

```
portfolio/
├── app/
│   ├── layout.tsx         # Root Layout (MUI ThemeProvider, Inter font)
│   ├── page.tsx           # Main Page
│   └── globals.css        # Global styles
├── src/
│   ├── components/        # React components
│   │   ├── HeroSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── CareerSection.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Particles.tsx
│   │   ├── DecryptedText.tsx
│   │   └── index.ts
│   ├── hooks/            # Custom React hooks
│   │   └── useScrollAnimation.ts
│   ├── data/             # Static data
│   │   ├── projects.ts
│   │   ├── career.ts
│   │   └── skills.ts
│   ├── theme/            # MUI theme
│   │   └── theme.ts
│   └── types/            # TypeScript types
│       └── index.ts
└── public/
    └── img/              # Project images
```

## 🎯 주요 프로젝트

### 1. 네이버 검색 노출 및 데이터 자동화
- **Tech:** React, Electron, Puppeteer, Google Sheets API
- **Link:** [GitHub](https://github.com/dpfflsk45/naver-automation)
- Electron 기반 데스크톱 애플리케이션으로 대량 키워드 검증 업무 완벽 자동화
- 2단계 교차 검증 로직으로 휴먼 에러 0% 차단

### 2. 탄단지 지킴이 (Nutrient Calculator)
- **Tech:** Next.js, TypeScript, SCSS, Chart.js
- **Link:** [tandangeguard.com](https://tandangeguard.com/)
- 신체 데이터 기반 맞춤형 영양 섭취량 실시간 산출 서비스
- 식단 성향 테스트 + 영양 가이드 아티클 기능

### 3. 하랑마케팅 (Corporate Website)
- **Tech:** Next.js, TypeScript, SEO Strategy, GA4
- **Link:** [harangmarketing.com](https://harangmarketing.com/)
- SEO 전략으로 경쟁 키워드 상위 노출 달성
- 직관적 상담 신청 흐름(UX)으로 문의 전환율 극대화

### 4. 아르마딜로 (Online PT Platform)
- **Tech:** React, Styled-components, Netlify
- **Link:** [armadillo-web.netlify.app](https://armadillo-web.netlify.app/)
- 공동 창업자 겸 리드 개발자로 서비스 기획부터 배포까지 주도
- UX 중심 인터페이스 설계로 MVP 성공적 런칭

## 📫 연락처

**Email:** dpfflsk45@gmail.com

## 📄 라이선스

© 2025 배수인 (Bae Soo In). All rights reserved.
