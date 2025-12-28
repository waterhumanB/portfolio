# Source Code Architecture

## Clean Code Principles

이 프로젝트는 다음 원칙을 준수합니다:

1. **100줄 이하 제한**: 모든 컴포넌트와 파일은 100줄을 넘지 않도록 설계
2. **UI/비즈니스 로직 분리**: 컴포넌트는 렌더링만, 로직은 hooks와 data 폴더로 분리
3. **Custom Hooks 활용**: 재사용 가능한 로직은 hooks로 추출
4. **최적화**: React 성능 최적화 적용

## 폴더 구조

### `/components` - React 컴포넌트
- **HeroSection.tsx**: 메인 히어로 섹션 (Particles + DecryptedText)
- **SkillsSection.tsx**: 스킬 섹션 (Glass Pills Chips)
- **ProjectsSection.tsx**: 프로젝트 섹션 (Slalom 스크롤)
- **ProjectCard.tsx**: 개별 프로젝트 카드
- **CareerSection.tsx**: 경력 타임라인
- **Particles.tsx**: 3D 파티클 배경
- **DecryptedText.tsx**: 텍스트 디크립션 애니메이션

### `/hooks` - Custom React Hooks
- **useScrollAnimation.ts**: GSAP ScrollTrigger 기반 스크롤 애니메이션

### `/data` - Static Data
- **projects.ts**: 프로젝트 데이터
- **career.ts**: 경력 데이터
- **skills.ts**: 스킬 데이터

### `/theme` - MUI Theme
- **theme.ts**: Material-UI 커스텀 다크 테마 (Glassmorphism)

### `/types` - TypeScript Types
- **index.ts**: 공통 타입 정의 (Project, Career, Skill)

## 핵심 기술 결정

### MUI 커스터마이징
- 기본 Material Design 스타일 제거
- `createTheme`으로 Dark mode + Glassmorphism 구현
- Component overrides: MuiCard, MuiButton, MuiChip

### 애니메이션 전략
- GSAP ScrollTrigger: 스크롤 기반 페이드인 애니메이션
- React Three Fiber: 3D 파티클 배경
- Custom DecryptedText: 텍스트 디크립션 효과

### 성능 최적화
- Custom hooks로 로직 재사용
- Static data 분리로 번들 사이즈 최적화
- TypeScript strict mode
