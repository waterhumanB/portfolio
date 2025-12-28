1. Project Overview
Concept: "The Slalom Flow" - 부드러운 좌우 무빙으로 역량을 탐험하는 구조.

Design Theme: Premium Minimal - 딥 블랙 배경 + 반투명 유리(Glass) + 커스텀 MUI 테마.

Tech Stack:

Core: Next.js 14 (App Router), React, TypeScript.

UI Framework: MUI (Material UI v5) + Emotion.

3D & Animation: React Three Fiber (R3F), GSAP (ScrollTrigger), React Bits.

clean code : src 폴더를 만들고 그안에 components, pages, styles, utils 폴더 등 구조를 잡아줘 모든 코드는 100줄이 넘으면 안되고 UI로직과 비즈니스 로직은 철저히 분리해, react hook도 적극적으로 만들어서 사용하고 최적화를 해야한다. 

2. Design System (MUI Customization Strategy)
MUI의 기본 스타일(파란색 버튼, 그림자)을 덮어쓰고 "Modern Premium" 룩을 구현해야 합니다.

Global Theme (createTheme):

Palette: mode: 'dark', Background: #000000.

Typography: fontFamily를 Inter 또는 Pretendard로 설정.

Component Overrides:

Glass Card: MuiCard의 기본 boxShadow를 제거하고 backdropFilter: blur(20px)와 backgroundColor: rgba(255,255,255,0.05) 적용.

Buttons: MuiButton의 ripple 효과를 끄거나 아주 은은하게 조정, 둥근 모서리(borderRadius: 9999px) 적용.

3. Detailed Section Specifications
Section 0: Hero (Identity)
Background: React Bits Particles (MUI의 Box 컴포넌트 안에 배치).

Interaction: Decrypted Text (Color: theme.palette.common.white).

Sequence: "Marketer" → "Frontend Developer" → "배수인 (Bae Su-in)".

Bottom Info (Fade-in):

MUI Typography: variant="body2", color="text.secondary", fontWeight="light".

Content: Seoul, Sillim-dong | 010-4430-7175 | dpfflsk45@gmail.com

Icon: <GitHubIcon /> (from @mui/icons-material).

Section 1: My Skills (3D Orbit)
Visual: "My Skills" 텍스트(MUI Typography h2) 주변을 공전하는 키워드들.

Style:

"Glass Pills": MUI Chip 컴포넌트를 커스텀하여 사용.

sx={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}.

Groups:

Frontend: HTML, CSS, JS, TS, React, Next.js, Puppeteer.

Marketing: SEO, Keyword Analysis, Crawling, Digital Mkt, Blog Mkt, CapCut.

AI: Cursor, ChatGPT, Gemini, Claude.

Section 2~5: Projects (The Slalom Scroll)
Motion: 스크롤 시 Grid 또는 Stack 컨테이너가 Right → Left → Right → Left로 이동.

UI Component: MuiCard (Glassmorphism Style).

Project 1: Automation (Move Right 👉)
Image: 스크린샷 2025-12-14 005623.jpg (React Bits TiltedCard로 래핑).

Content:

Title (h3): 네이버 검색 노출 및 데이터 자동화

Subtitle (subtitle1): "Zero Human Error, 100% Efficiency"

Desc (body1):

"수동으로 진행하던 대량의 키워드 검증 업무를 완벽하게 자동화한 데스크톱 애플리케이션입니다. Electron과 Puppeteer를 활용하여 동적 렌더링 페이지의 데이터를 정밀하게 크롤링하며, 통합검색 및 채널별 2단계 교차 검증 로직으로 휴먼 에러를 0%로 차단했습니다. Google Sheets API 연동을 통해 실시간으로 데이터를 동기화하여 마케팅 의사결정 속도를 비약적으로 높였습니다."

Tech: MUI Chip으로 스택 표시 (React, Electron, Puppeteer, Google Sheets API).

Link: https://github.com/dpfflsk45/naver-automation (Button: "View GitHub").

Project 2: Tandangeguard (Move Left 👈)
Image: 스크린샷 2025-12-28 185437.png

Content:

Title (h3): 탄단지 지킴이 (Nutrient Calculator)

Subtitle (subtitle1): "Personalized Health Algorithm"

Desc (body1):

"사용자의 신체 데이터(키, 체중, 활동량)를 분석하여 가장 이상적인 영양 섭취량을 실시간으로 산출해주는 웹 서비스입니다. 복잡한 영양학 공식을 직관적인 UI로 풀어냈으며, '식단 성향 테스트'와 '영양 가이드 아티클' 기능을 더해 사용자가 지속 가능한 건강 관리를 할 수 있도록 설계했습니다."

Tech: Next.js, TypeScript, SCSS, Chart.js.

Link: https://tandangeguard.com/

Project 3: Harang Marketing (Move Right 👉)
Image: 스크린샷 2025-12-28 185445.png

Content:

Title (h3): 하랑마케팅 (Corporate Website)

Subtitle (subtitle1): "SEO-Driven Business Platform"

Desc (body1):

"마케팅 에이전시의 전문성을 강조하기 위해 제작된 기업 공식 웹사이트입니다. 단순한 정보 전달을 넘어, 검색 엔진 최적화(SEO) 전략을 통해 '건설 마케팅', '전기 마케팅' 등 경쟁이 치열한 키워드에서 상위 노출을 달성했습니다. 직관적인 상담 신청 흐름(UX)을 구축하여 문의 전환율을 극대화했습니다."

Tech: Next.js, TypeScript, SEO Strategy, GA4.

Link: https://harangmarketing.com/

Project 4: Armadillo (Move Left 👈)
Image: 스크린샷 2025-12-28 185502.jpg

Content:

Title (h3): 아르마딜로 (Online PT Platform)

Subtitle (subtitle1): "Startup Zero to One"

Desc (body1):

"공동 창업자 겸 리드 개발자로 참여하여 서비스 기획부터 배포까지 전 과정을 주도한 온라인 PT 플랫폼입니다. 비대면 트레이닝의 한계를 극복하기 위해 UX 중심의 인터페이스를 설계했으며, 초기 스타트업의 빠른 실행력을 바탕으로 MVP를 성공적으로 런칭했습니다."

Tech: React, Styled-components, Netlify.

Link: https://armadillo-web.netlify.app/

Section 6: Career History (MUI Timeline)
Component: MUI Lab의 <Timeline> 컴포넌트 사용.

Customization:

TimelineDot: 기본 원형 대신 아주 작은 점(sx={{ width: 8, height: 8 }}) 사용.

TimelineConnector: 얇은 회색 선.

TimelineContent: Typography h6(회사명), body2(기간), body1(설명).

Data:

2025.08 ~ Current | 딜라잇플랜트: 카페 바이럴 포스팅 및 자동화 프로그램 개발.


2024.06 ~ 2024.12 | 테라이에프씨: 프리랜서 마케터 (전기/건설 키워드 분석).

2023.08 ~ 2023.10 | 3PC: 온라인 PT 서비스 공동 창업 및 개발.

2022.03 ~ 2022.04 | 스노우볼 아이티: 프론트엔드 개발 (소방 설비).

2021.01 ~ 2021.06 | 스틸데코: 바이럴 마케팅 (블로그/카페 홍보).

2019.01 ~ 2020.04 | 오이솔루션: 반도체 칩 개발팀 엔지니어링.
